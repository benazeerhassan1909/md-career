import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type BannerProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "banner" }
>;

export function Banner({ title, icon, btntext, btnurl, text }: BannerProps) {
    return (


        <div className="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">

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
                            <Image
                                decoding="async"
                                width={519}
                                height={519}
                                src={icon ? urlFor(icon).url() : ''} alt="Anil Gupta"
                                className="wp-image-58038 perfmatters-lazy loaded"
                                style={{ objectFit: 'cover', width: '280px', height: '280px' }}

                                loading="lazy"
                                sizes="(max-width: 519px) 100vw, 519px"
                                data-was-processed="true"
                            />

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
                            {title}
                        </h3>

                        <p className="has-white-color has-text-color has-link-color wp-elements-e707f5c0e66edce4e5feb1b9a42a83b6">
                            {text}
                        </p>

                        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                            <div className="wp-block-button councelling-section-details-btn">
                                <a
                                    className="wp-block-button__link wp-element-button"
                                    href={btnurl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {btntext}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer */}
            <div style={{ height: '1px' }} aria-hidden="true" className="wp-block-spacer"></div>
        </div>
    );
}