import { sanityFetch } from "@/sanity/lib/live"; // or your fetch method
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { JOB_QUERY } from "@/sanity/lib/queries";
import { JOB_SETTINGS_QUERY } from "@/sanity/lib/queries";
import JobApplicationForm from "@/components/Form";


type JobDetailPageProps = {
    params: Promise<{ slug: string }>;

}
export default async function JobDetailPage({ params }: JobDetailPageProps) {
    const { slug } = await params;

    const { data: job } = await sanityFetch({ query: JOB_QUERY, params: { slug } });
    const { data: jobSettings } = await sanityFetch({ query: JOB_SETTINGS_QUERY });
    const jobCTASettings = jobSettings?.jobCTASettings;

    const components = {
        list: {
            bullet: ({ children }: { children?: React.ReactNode }) => (
                <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>{children}</ul>
            ),
            number: ({ children }: { children?: React.ReactNode }) => (
                <ol style={{ paddingLeft: '20px', listStyle: 'decimal' }}>{children}</ol>
            ),
        },
        block: {
            left: ({ children }: { children?: React.ReactNode }) => (
                <p style={{ textAlign: 'left', marginBottom: '20px' }}>{children}</p>
            ),
            right: ({ children }: { children?: React.ReactNode }) => (
                <p style={{ textAlign: 'right', marginBottom: '20px' }}>{children}</p>
            ),
            center: ({ children }: { children?: React.ReactNode }) => (
                <p style={{ textAlign: 'center', marginBottom: '20px' }}>{children}</p>
            ),
            normal: ({ children }: { children?: React.ReactNode }) => <p>{children}</p>,
            h1: ({ children }: { children?: React.ReactNode }) => (
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0' }}>
                    {children}
                </h1>
            ),
            h2: ({ children }: { children?: React.ReactNode }) => (
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>
                    {children}
                </h2>
            ),
            h3: ({ children }: { children?: React.ReactNode }) => (
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0' }}>
                    {children}
                </h3>
            ),
        },
    };

    return (
        <>
            <main id="main" className="site-main" role="main">
                {/* Banner Section */}
                <section className="singleopening-page-banner static-banner submit_resume_banner mdinc-after-img-space">
                    <div className="md-color-overlay">
                        <div className="banner-content">
                            <h1 className="mdinc-banner-title mdinc-title">{job?.title}</h1>
                            <div className="banner-content-inner mdinc-banner mdinc-has-full">
                                {job?.heroimage && (
                                    <div className="relative h-[400px] w-full">
                                        <Image
                                            src={urlFor(job.heroimage).url()}
                                            alt={job.title ?? 'Default alt text'}
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-center"
                                        />

                                    </div>
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 1920 600">
                                    {/* SVG paths and definitions */}
                                    <defs>
                                        <style>
                                            {`.a{fill:#fff0bd;}.b,.e,.h{fill:none;}.c{mix-blend-mode:darken;}.c,.e,.f,.g,.i{isolation:isolate;}.d{fill:#d1b34d;}.e,.h{stroke:#000;}.e{stroke-width:3px;mix-blend-mode:soft-light;}.f,.g{mix-blend-mode:overlay;}.f{clip-path:url(#a);}.h{stroke-width:4px;}.i{mix-blend-mode:luminosity;}.j{fill:url(#b);}.k{fill:#bdd0fb;}.l{fill:url(#c);}.m{fill:#91b3fa;}.n{opacity:0.304;}.o,.q{opacity:0.6;}.p,.q{fill:#fff;}.r{opacity:0.405;fill:url(#e);}.s{clip-path:url(#f);}.t{fill:#ffeeb4;}.u{fill:url(#g);}.v{fill:url(#h);}.w{fill:url(#i);}.x{fill:url(#j);}.y{fill:url(#k);}.z{fill:url(#l);}.aa{fill:url(#m);}.ab{fill:url(#n);}.ac{fill:url(#o);}.ad{stroke:none;}`}
                                        </style>
                                        {/* SVG clipPaths and gradients */}
                                    </defs>
                                    {/* SVG groups and paths */}
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Description Section */}
                <section className="jobprofile-short-description-section jobprofile-skills-section">
                    <div className="container-fluid">
                        <div className="row">
                            {job?.body ? <PortableText
                                value={job.body} components={components}

                            /> : null}
                        </div>
                    </div>
                </section>

                {/* Job Profile and Skills Section */}
                <section className="jobprofile-skills-section">
                    <div className="container-fluid">
                        <div className="row">
                            {/* Left Column - Job Details */}
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 job-profile-section">
                                <div className="list-of-requirements" id="list-of-requirements">

                                    {
                                        Array.isArray(job?.skills) && job.skills.length > 0 && (
                                            job.skills.map((item, index) => (
                                                <div className="job-post-details" key={index}>
                                                    <h3>{item.title}</h3>
                                                    <ul className="skills-list">
                                                        {Array.isArray(item?.skilllist) && item.skilllist.length > 0 &&
                                                            item.skilllist.map((skill, skillIndex) => (
                                                                <li key={`skill-${skillIndex}`}>{skill}</li>
                                                            ))}
                                                    </ul>
                                                </div>
                                            ))
                                        )
                                    }

                                </div>
                            </div>

                            {/* Right Column - Perks & Benefits */}
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 job-profile-sidebar" style={{ position: 'relative' }}>
                                <div className="wp-block-template-part" style={{
                                    position: 'sticky',
                                    top: '16px',
                                    height: 'calc(100vh - 92px)',
                                    overflowY: 'auto'
                                }}>
                                    <div className="wp-block-multidots-multipurpose-block is-block-center jobprofile-sidebar">
                                        <h3 className="wp-block-heading has-text-align-center has-text-color" id="mdcareer-perks-and-benifits" style={{ color: '#000000' }}>
                                            <strong>{job?.benefitsheading}</strong>
                                        </h3>
                                        <div className="wp-block-group perks-sidebar-col-wrap has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                            {/* Perks items */}
                                            {Array.isArray(job?.benefits) ? (
                                                job.benefits?.map((item, index) => (
                                                    <div key={index} className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                                            <p >{item}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : null}
                                            {/* More perk items */}
                                            {job?.btntext && job.btnurl && (

                                                <div className="wp-block-columns perks-btn is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                                                    <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '50%' }}>
                                                        <p>
                                                            <a href={job.btnurl} data-type="link" data-id="https://careers.multidots.com/#mdcareer-perks-and-benifits/">{job.btntext}</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Application Form Section */}
                <div className="container">
                    {job?.chooseForm && (
                        <JobApplicationForm jobId={job._id}  formId={job.chooseForm._ref}/>
                    )}


                </div>
                {/* Call to Action Section */}
                <div className="mdinc-callto-action mdinc-section-bottom-margin mdinc-has-full">
                    <div className="mdinc-callto-action-inner">
                        <div className="mdinc-callto-action-left">
                            <h4 className="apply-anyway">
                                {jobCTASettings?.title || "Are you interested but do not see a position that fits?"}
                            </h4>
                            <p>
                                {jobCTASettings?.text || "Get ready to rediscover yourself!"}
                            </p>
                        </div>
                        <div className="mdinc-callto-action-right">
                            <p className="has-text-align-left">
                                <a className="btn orange-btn" href="https://careers.multidots.com/submit-resume"> {jobCTASettings?.btnText || "Apply Now"}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
