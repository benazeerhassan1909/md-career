import { useState, useEffect } from "react";
import { PAGE_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { FAQPage, WithContext } from "schema-dts";

const generateFaqData = (faqs: FAQsProps["faqs"]): WithContext<FAQPage> => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs?.map((faq) => ({
        "@type": "Question",
        name: faq.title!,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.text!,
        },
    })),
});

type FAQsProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "faqs" }
>;

export function FAQs({ title, faqs }: FAQsProps) {
    const [activeFaqId, setActiveFaqId] = useState<string | null>(null);
    const [copiedLinkId, setCopiedLinkId] = useState<string | null>(null);

    // Handle direct linking to FAQ items
    useEffect(() => {
        const hash = window.location.hash;
        if (hash.startsWith('#careers-faq-')) {
            const id = hash.replace('#careers-faq-', '');
            setActiveFaqId(id);

            // Scroll to the element after a slight delay to ensure it's rendered
            setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    const toggleFaq = (id: string) => {
        const newActiveId = activeFaqId === id ? null : id;
        setActiveFaqId(newActiveId);

        // Update URL hash without triggering scroll
        if (newActiveId) {
            window.history.replaceState(null, '', `#careers-faq-${newActiveId}`);
        } else {
            window.history.replaceState(null, '', window.location.pathname);
        }
    };

    const copyLinkToClipboard = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const url = `${window.location.origin}${window.location.pathname}#careers-faq-${id}`;
        navigator.clipboard.writeText(url)
            .then(() => {
                setCopiedLinkId(id);
                setTimeout(() => setCopiedLinkId(null), 2000);
            })
            .catch(err => console.error('Failed to copy link: ', err));
    };

    return (
        <div className="wp-block-multidots-multipurpose-block is-block-center multidots-faqs-section-main mdinc-section-bottom-margin">
            {title && (
                <h2 className="wp-block-heading has-text-align-center" id="h-quick-questions-amp-answers">
                    {title}
                </h2>
            )}

            {Array.isArray(faqs) && (
                <div className="all-faq-list">
                    <ul className="faq-list" itemScope itemType="https://schema.org/FAQPage">
                        {faqs.map((faq) => (
                            <li
                                key={faq._id}
                                id={`careers-faq-${faq._id}`}
                                data-sort-id={faq._id}
                                className={`faq-list-item ${activeFaqId === faq._id ? 'active' : ''}`}
                            >
                                <div
                                    className="faq-accordion-main"
                                    itemScope
                                    itemProp="mainEntity"
                                    itemType="https://schema.org/Question"
                                >
                                    <div
                                        className={`faq-accordion-header ${activeFaqId === faq._id ? 'active' : ''}`}
                                        onClick={() => toggleFaq(faq._id)}
                                    >
                                        <h4>
                                            <a
                                                className="mdinc-faq-open-link"
                                                href={`#careers-faq-${faq._id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleFaq(faq._id);
                                                }}
                                            >
                                                <i className={`fa fa-chevron-${activeFaqId === faq._id ? 'up' : 'down'}`}></i>
                                                <span itemProp="name">{faq.title}</span>
                                            </a>
                                        </h4>
                                        <span
                                            className={`copy-clipboard-link-box ${copiedLinkId === faq._id ? 'active' : ''}`}
                                            onClick={(e) => copyLinkToClipboard(faq._id, e)}
                                            title="Copy link to this question"
                                        >
                                            <i className="fa fa-link"></i>
                                            <span className="copied-tooltip">Link Copied</span>
                                        </span>
                                    </div>

                                    <div
                                        className={`faq-accordion-body ${activeFaqId === faq._id ? 'active' : ''}`}
                                        itemScope
                                        itemProp="acceptedAnswer"
                                        itemType="https://schema.org/Answer"
                                    >
                                        <div className="faq-accordion-content">
                                            {faq.body ? <PortableText value={faq.body} /> : null}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}