import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type FeaturesProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "cardSection" }
>;

export function CardSection({ title, icon, btntext, btnurl, title2, text, btntext2, icon2, btnurl2, bgimage, text1 }: FeaturesProps) {
    return (
        <div className="wp-block-multidots-multipurpose-block is-block-center mdcaeer-councelling-section-main mdinc-section-bottom-margin two-columns md-career-home-post-section">
            <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                <div className="wp-block-column career-councelling-section-details is-layout-flow wp-block-column-is-layout-flow">
                    <figure className="wp-block-image aligncenter size-full is-resized">
                        {icon ?
                            <>
                                <Image
                                    decoding="async"
                                    src={urlFor(icon).url()}                        
                                    alt=""
                                    className="wp-image-57014 perfmatters-lazy loaded"
                                    width={412}
                                    height={342}
                                    loading="lazy"
                                />
                                <noscript>
                                    <Image
                                        decoding="async"
                                        src={urlFor(icon).url()}                        
                                        alt=""
                                        className="wp-image-57014"
                                        width={412}
                                        height={342}                                    />
                                </noscript>
                            </>
                            : null}
                    </figure>

                    <h3 className="wp-block-heading has-text-align-center councelling-section-details-heading" id="h-counseling-free-career-guidance">
                        {title ? (title) : null} <br></br>
                        {text1 ? (text1) : null}
                    </h3>
                    <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-a89b3969 wp-block-buttons-is-layout-flex">
                        <div className="wp-block-button councelling-section-details-btn">
                            {btntext && btnurl && (
                                <a
                                    href={btnurl}
                                    className="wp-block-button__link wp-element-button"
                                >
                                    {btntext}
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="wp-block-column soft-skills-section-details is-layout-flow wp-block-column-is-layout-flow">
                    <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                        <figure className="wp-block-image aligncenter size-full is-resized">
                            {icon2 ?
                                <>
                                    <Image
                                        loading="lazy"
                                        decoding="async"
                                        width="519"
                                        height="519"
                                        src={urlFor(icon2).url()}                        
                                        alt=""
                                        className="wp-image-58038 perfmatters-lazy loaded"
                                        style={{ objectFit: "contain", width: "270px", height: "270px" }}
                                        sizes="auto, (max-width: 519px) 100vw, 519px"
                                    />
                                    <noscript>
                                        <Image
                                            loading="lazy"
                                            decoding="async"
                                            width="519"
                                            height="519"
                                            src={urlFor(icon2).url()}                        
                                            alt=""
                                            className="wp-image-58038"
                                            style={{ objectFit: "contain", width: "270px", height: "270px" }}
                                            sizes="auto, (max-width: 519px) 100vw, 519px"
                                        />
                                    </noscript>
                                </>
                                : null}
                        </figure>
                        {title2 ?
                            <h3
                                className="wp-block-heading has-text-align-center has-white-color has-text-color has-link-color wp-elements-5eb9caf019c69d11b89ff374f754513f"
                                id="h-10-soft-skills-to-accelerate-your-career"
                                style={{ fontSize: "clamp(18.959px, 1.185rem + ((1vw - 3.2px) * 1.255), 30px)" }}
                            >
                                {title2}
                            </h3>
                            : null}
                        {text ?
                            <p
                                className="has-text-align-center has-white-color has-text-color has-link-color wp-elements-a507b566e60a1ecca4ab117e0802f685"
                                style={{ fontSize: "14px" }}
                            >

                                {text}
                            </p>
                            : null}

                        <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-a89b3969 wp-block-buttons-is-layout-flex">
                            <div className="wp-block-button councelling-section-details-btn">

                                {btntext2 && btnurl2 && (
                                    <a
                                        href={btnurl2}
                                        className="wp-block-button__link wp-element-button"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        {btntext2}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}