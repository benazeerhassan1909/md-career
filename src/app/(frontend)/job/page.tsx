import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { JOBS_QUERY } from "@/sanity/lib/queries";

export default async function Jobs() {
    const { data: jobs } = await sanityFetch({ query: JOBS_QUERY });

    return (
        <>
            <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
                <h1 className="text-4xl font-bold text-center">Current Openings</h1>
                <ul className="grid grid-cols-1 divide-y divide-blue-100">
                    {jobs.map((job) => (
                        console.log(job),
                        <li key={job._id}>
                            <Link
                                className="block p-4 hover:text-blue-500"
                                href={`/job/${job?.slug?.current}`}
                            >
                                {job?.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />
                <Link href="/">&larr; Return home</Link>
            </main>
            <main
                className="wp-block-group site-main has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
                id="wp--skip-link--target"
            >
                <div
                    className="wp-block-group container is-layout-flow wp-block-group-is-layout-flow"
                    style={{ marginTop: 0 }}
                >
                    <div className="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">
                        {/* Page Heading */}
                        <h1
                            className="wp-block-heading has-text-align-center mdinc-title"
                            id="h-current-openings"
                        >
                            Current Openings
                        </h1>

                        {/* Banner Image */}
                        <div className="wp-block-multidots-multipurpose-block is-block-center has-background-size mdinc-banner mdinc-has-full mdinc-section-bottom-margin" style={{ backgroundPosition: 'center' }}>
                            {/* Desktop Image */}
                            <figure className="wp-block-image aligncenter size-large img-desktop">
                                <img
                                    decoding="async"
                                    width={3840}
                                    height={1200}
                                    src="https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?w=1024"
                                    alt="Current Openings Banner"
                                    className="wp-image-40056 perfmatters-lazy loaded"
                                    data-src="https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?w=1024"
                                    data-srcset="https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp 3840w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=300,94 300w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=768,240 768w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1024,320 1024w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1536,480 1536w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=2048,640 2048w"
                                    data-sizes="(max-width: 3840px) 100vw, 3840px"
                                    loading="lazy"
                                    sizes="(max-width: 3840px) 100vw, 3840px"
                                    srcSet="https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp 3840w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=300,94 300w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=768,240 768w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1024,320 1024w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1536,480 1536w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=2048,640 2048w"
                                    data-was-processed="true"
                                />
                                <noscript>
                                    <img
                                        decoding="async"
                                        width={3840}
                                        height={1200}
                                        src="https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?w=1024"
                                        alt="Current Openings Banner"
                                        className="wp-image-40056"
                                        srcSet="https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp 3840w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=300,94 300w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=768,240 768w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1024,320 1024w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=1536,480 1536w, https://careers.multidots.com/wp-content/uploads/sites/2/2022/07/current-opening-banner.webp?resize=2048,640 2048w"
                                        sizes="(max-width: 3840px) 100vw, 3840px"
                                    />
                                </noscript>
                            </figure>

                            {/* Mobile Image */}
                            <figure className="wp-block-image aligncenter size-full img-mob">
                                <img
                                    decoding="async"
                                    width={1024}
                                    height={320}
                                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20320'%3E%3C/svg%3E"
                                    alt="Current Openings Mobile Banner"
                                    className="wp-image-42922 perfmatters-lazy"
                                    data-src="https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?quality=90"
                                    data-srcset="https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png 1024w, https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?resize=300,94 300w, https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?resize=768,240 768w"
                                    data-sizes="(max-width: 1024px) 100vw, 1024px"
                                    loading="lazy"
                                />
                                <noscript>
                                    <img
                                        decoding="async"
                                        width={1024}
                                        height={320}
                                        src="https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?quality=90"
                                        alt="Current Openings Mobile Banner"
                                        className="wp-image-42922"
                                        srcSet="https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png 1024w, https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?resize=300,94 300w, https://careers.multidots.com/wp-content/uploads/sites/2/2023/06/current-opening-mob.png?resize=768,240 768w"
                                        sizes="(max-width: 1024px) 100vw, 1024px"
                                    />
                                </noscript>
                            </figure>
                        </div>

                        {/* Open Positions Section */}
                        <div className="wp-block-multidots-multipurpose-block is-block-center opening-page-outer mdinc-section-bottom-margin">
                            <div className="position-block-outer open-position">
                                <h2 className="title">Open Positions</h2>
                                <p className="details">
                                    We are looking for people who have a genuine interest in <strong>serving people</strong>,
                                    a passion for <strong>solving problems</strong>, thriving for <strong>productivity</strong>,
                                    and <strong>love WordPress</strong> — if thats you, we would love to connect with you!
                                </p>

                                <div className="open-position-accordion">
                                    <div className="position-heading">
                                        <p>Position</p>
                                        <p>Location</p>
                                    </div>

                                    <div className="positions-lists">
                                        <div className="position-details-main">
                                            <div className="position-details-header">
                                                <h4 className="position-name">Sr. WordPress Engineer</h4>
                                                <p className="job-location">Asia</p>
                                            </div>
                                            <div className="position-details-body">
                                                <p className="position-detail-description">
                                                    The hiring process for this role is currently paused and will reopen in early 2025.
                                                    If youd like us to reconnect when hiring resumes, we encourage you to submit your application.
                                                </p>
                                                <p className="position-apply-btn">
                                                    <a href="https://careers.multidots.com/careers/sr-wordpress-developer-l4/#list-of-requirements">
                                                        Learn more
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Career Counseling Section */}
                        <div
                            className="wp-block-multidots-multipurpose-block is-block-center has-background-size mdcaeer-councelling-section-main mdinc-width-970 mdinc-section-bottom-margin full-width-column"
                            style={{ backgroundImage: 'url(https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/opening-softskill.webp)' }}
                        >
                            <div className="wp-block-columns soft-skill-clms is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                                {/* Image Column */}
                                <div
                                    className="wp-block-column career-councelling-section-banner is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ flexBasis: '30%' }}
                                >
                                    <figure className="wp-block-image size-large is-resized">
                                        <img
                                            decoding="async"
                                            width={519}
                                            height={519}
                                            src="https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?quality=90?w=519"
                                            alt="Anil Gupta"
                                            className="wp-image-58038 perfmatters-lazy loaded"
                                            style={{ objectFit: 'cover', width: '280px', height: '280px' }}
                                            data-src="https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?quality=90?w=519"
                                            data-srcset="https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png 519w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=150,150 150w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=300,300 300w"
                                            data-sizes="(max-width: 519px) 100vw, 519px"
                                            loading="lazy"
                                            sizes="(max-width: 519px) 100vw, 519px"
                                            srcSet="https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png 519w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=150,150 150w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=300,300 300w"
                                            data-was-processed="true"
                                        />
                                        <noscript>
                                            <img
                                                decoding="async"
                                                width={519}
                                                height={519}
                                                src="https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?quality=90?w=519"
                                                alt="Anil Gupta"
                                                className="wp-image-58038"
                                                style={{ objectFit: 'cover', width: '280px', height: '280px' }}
                                                srcSet="https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png 519w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=150,150 150w, https://careers.multidots.com/wp-content/uploads/sites/2/2024/06/anil_gupta.png?resize=300,300 300w"
                                                sizes="(max-width: 519px) 100vw, 519px"
                                            />
                                        </noscript>
                                    </figure>
                                </div>

                                {/* Content Column */}
                                <div
                                    className="wp-block-column career-councelling-section-details is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ flexBasis: '70%' }}
                                >
                                    <h3
                                        className="wp-block-heading has-white-color has-text-color has-link-color wp-elements-a30492464d122084cc82e95d1847ef5c"
                                        id="h-10-soft-skills-to-accelerate-your-career"
                                    >
                                        10 Soft Skills to Accelerate Your Career
                                    </h3>

                                    <p className="has-white-color has-text-color has-link-color wp-elements-e707f5c0e66edce4e5feb1b9a42a83b6">
                                        Check out our CEO, Anil Guptas, latest article on Career Growth!
                                    </p>

                                    <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                                        <div className="wp-block-button councelling-section-details-btn">
                                            <a
                                                className="wp-block-button__link wp-element-button"
                                                href="https://anilg.substack.com/p/10-soft-skills-to-accelerate-your-career"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                            >
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Spacer */}
                        <div style={{ height: '1px' }} aria-hidden="true" className="wp-block-spacer"></div>
                    </div>
                </div>
            </main>
        </>
    );
}