import { PAGE_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { useState } from 'react';

type JobsProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "jobs" }
>;

export function Jobs({ title, text, jobs, btntext, btnurl }: JobsProps) {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleAccordion = (id: string) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-homepage-current-opening mdinc-width-970 mdinc-section-bottom-margin">
            <div className="position-block-outer open-position">
                {title ? (
                    <h2 className="title">
                        {title}
                    </h2>
                ) : null}
                {Array.isArray(text) ? (
                    <PortableText value={text} components={{
                        block: {
                            left: ({ children }) => <p className="text-left details">{children}</p>,
                            center: ({ children }) => <p className="text-center details">{children}</p>,
                            right: ({ children }) => <p className="text-right details">{children}</p>,
                        },
                    }} />
                ) : text ? (
                    <p className="details">{text}</p>
                ) : null}
                <div className="open-position-accordion">
                    <div className="position-heading">
                        <p>Position</p>
                        <p>Location</p>
                    </div>
                    {jobs?.map((job) => (
                        <div className="positions-lists" key={job._id}>
                            <div className="position-details-main">
                                <details
                                    name={job._id}
                                    className={`accordion-item ${openItems[job._id] ? 'active' : ''}`}
                                    open={openItems[job._id]}
                                    
                                >
                                    <summary className="position-details-header" onClick={(e) => {
                                        // Prevent default to handle toggle manually
                                        e.preventDefault();
                                        toggleAccordion(job._id);
                                    }}>
                                        <h4 className="position-name">{job.title}</h4>
                                        {job.location && <p className="job-location">{job.location}</p>}
                                    </summary>
                                    <div className="position-details-bodyn">
                                        {job.body && (
                                            <span className="position-detail-description">
                                                <PortableText value={job.body} />
                                            </span>
                                        )}
                                        <p className="position-apply-btn">
                                            <a href={`/job/${job.slug.current}`}>Learn more</a>
                                        </p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {btntext && btnurl && (

                <div className="wp-block-multidots-multipurpose-block is-block-center mdhome-gallery-info">
                    <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                        <div className="wp-block-button aligncenter">
                            <a
                                href={btnurl}
                                className="wp-block-button__link wp-element-button"
                                style={{ width: "100%" }}
                            >
                                {btntext}
                            </a>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}