import JobApplicationForm from "../Form";
import Image from "next/image";

type JobType = {
    _id: string;
    _type: "job";
    title?: string;
    slug?: { current: string };
    location?: string;
};

type CareerFormProps = {
    _type: "formType";
    title?: string;
    chooseForm?: { _type: "reference"; _ref: string };
    enablesidebar?: boolean;
    currentopenings?: boolean;
    showquote?: boolean;
    quote?: string;
    quoteauthor?: string;
    jobs?: JobType[];
};



export function CareerForm({ title, chooseForm, enablesidebar, currentopenings, showquote, quote, quoteauthor, jobs }: CareerFormProps) {


    return (
        console.log(jobs),
        <>
            <div className="wp-block-multidots-multipurpose-block is-block-center career-councelling-page-main mdinc-section-bottom-margin">
                <div className="wp-block-columns career-councelling-col-container is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">

                    {/* Form Column */}
                    <div className="wp-block-column career-councelling-page-form is-layout-flow wp-block-column-is-layout-flow"
                    // style={{ flexBasis: '60%' }}
                    >
                        <div className="mdinc-carrer-counselling-form-main">
                            {
                                title && (
                                    <h2 className="wp-block-heading has-text-align-center h2-below-cnt" id="h-our-clients">
                                        {title}
                                    </h2>
                                )
                            }
                            {chooseForm && (
                                <JobApplicationForm jobId='' formId={chooseForm._ref} />
                            )
                            }
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    {enablesidebar &&
                        <div className="wp-block-column career-councelling-page-sidebar is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '40%' }}>

                            { /* Current Openings Box */}
                            {currentopenings && jobs && (
                                <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-councelling-sidebar-box councelling-opening-section">
                                    <div className="job-listing-sidebar-section">
                                        <h4>Current Openings</h4>
                                        {jobs.map((job) => (
                                            job && job._id && (  // Check if job is properly dereferenced
                                                <div className="job-data-warpper" key={job._id}>
                                                    <h3>
                                                        <a href={`/careers/${job.slug?.current}`}>
                                                            {job.title}
                                                        </a>
                                                    </h3>
                                                    <a
                                                        href={`/careers/${job.slug?.current}`}
                                                        className="read-more"
                                                    >
                                                        <Image
                                                            src="/right-side-arrow.svg"
                                                            width={18}
                                                            height={10}
                                                            alt="Read more"
                                                        />
                                                    </a>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </div>
                            )}


                            {/* Quote Section */}
                            {showquote &&
                                <div className="wp-block-multidots-multipurpose-block is-block-center councelling-page-quote-section mdcareer-councelling-sidebar-box">
                                    <blockquote className="wp-block-quote councelling-blockquote is-layout-flow wp-block-quote-is-layout-flow">
                                        <p>
                                            {quote}
                                        </p>
                                        <cite>{quoteauthor}</cite>
                                    </blockquote>
                                </div>
                            }

                        </div>
                    }
                </div>
            </div>
        </>
    );
}