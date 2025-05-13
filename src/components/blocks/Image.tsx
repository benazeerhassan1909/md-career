


import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type ImagProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "imageBlock" }
>;

export function ImageType({ heading, image, buttonText, buttonUrl }: ImagProps) {
    return (
        <div className="wp-block-multidots-multipurpose-block is-block-center education-scholarship-process mdinc-section-bottom-margin">
            {heading && (
                <h2 className="wp-block-heading has-text-align-center" id="h-process">
                    {heading}
                </h2>
            )}

            {image && (
                <figure className="wp-block-image aligncenter size-full">

                    <Image
                        src={urlFor(image).width(100).url()}
                        alt="Main"
                        width={700}
                        height={900}
                        decoding="async"
                        className="wp-image-59914 perfmatters-lazy loaded"
                        style={{ objectFit: 'cover' }}

                    />
                </figure>
            )}

            {buttonText && buttonUrl && (
                <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                    <div className="wp-block-button aligncenter scholarship-apply-btn">
                        <a
                            className="wp-block-button__link wp-element-button"
                            href={buttonUrl}
                        >
                            {buttonText}
                        </a>
                    </div>
                </div>
            )}
        </div>

    );
}

