import { PAGE_QUERYResult } from "@/sanity/types";
import JobApplicationForm from "../Form";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";


type CareerFormProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "formType" }
>;
const jobsQuery = `
  *[_type == "job"]{
    _id,
    slug,
    title,
    body,
    location,
    "text": pt::text(body)
  }
`;
export function CareerForm({ title, chooseForm, enablesidebar, currentopenings, showquote, quote, quoteauthor }: CareerFormProps) {
    
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        client.fetch(jobsQuery).then((data) => {
            setJobs(data);
        });
    }, [client]);


    return (
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
                            {currentopenings &&
                                <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-councelling-sidebar-box councelling-opening-section">
                                    <div className="job-listing-sidebar-section">
                                        <h4>Current Openings</h4>
                                        {jobs.map((job) => (
                                            console.log(job?.slug),
                                            <div className="job-data-warpper">
                                                <h3>
                                                    <a href={`/job/${job?.slug?.current}`}> {job?.title}</a>
                                                </h3>
                                                <a
                                                    href={`/job/${job?.slug?.current}`}
                                                    className="read-more"
                                                >
                                                    <Image
                                                        src="/right-side-arrow.svg"
                                                        width="18"
                                                        height="10"
                                                        alt="Read more"
                                                    />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }

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