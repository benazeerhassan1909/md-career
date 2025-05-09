import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import { PAGE_QUERYResult } from '@/sanity/types'

type ImageTextSectionProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "imageTextSection" }
>;

export function ImageTextSection({
    title,
    description,
    mainImage,
    backgroundImage,
    imagePosition = 'right',
}: ImageTextSectionProps) {
    const isImageLeft = imagePosition === 'left'

    return (
        <>
            <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-great-place-to-work mdinc-section-bottom-margin" style={{
                backgroundImage: backgroundImage ? `url(${urlFor(backgroundImage).url()})` : 'none',
            }}>
                <div className="wp-block-columns mdcareer-great-place-to-work-inner is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                    <div
                        className="wp-block-column mdcareer-great-place-to-work-content is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: "66.66%" }}
                    >

                        {title && <h4
                            className="wp-block-heading"
                            id="h-we-are-proud-to-be-certified-as-a-great-place-to-work"
                        >{title}</h4>}
                        {description ? <PortableText
                            value={description}
                            components={{
                                block: {

                                    left: ({ children }) => <p className="text-left">{children}</p>,
                                    center: ({ children }) => <p className="text-center">{children}</p>,
                                    right: ({ children }) => <p className="text-right">{children}</p>,
                                },
                            }}
                        /> : null}
                    </div>

                    <div
                        className="wp-block-column mdcareer-great-place-to-work-image is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: "33.33%" }}
                    >
                        <figure className="wp-block-image size-full">

                            {!isImageLeft && mainImage && (
                                <div className="flex justify-center">
                                    <Image
                                        src={urlFor(mainImage).width(100).url()}
                                        alt="Main"
                                        width={100}
                                        height={100}
                                        decoding="async"
                                        className="wp-image-58567 perfmatters-lazy loaded"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                        </figure>
                    </div>
                </div>
            </div>

        </>
    )
}
