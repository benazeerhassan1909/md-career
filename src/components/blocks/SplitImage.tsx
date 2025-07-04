import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";

type SplitImageProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "splitImage" }
>;

export function SplitImage({ title, image, orientation, description, authorimage, authorname, authordesignation, video, backgroundColor
}: SplitImageProps) {
    const videoUrl = video?.url ?? undefined;
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
            <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-content-with-video mdinc-section-bottom-margin">
                <div className="wp-block-columns mdcareer-content-with-video-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex"
                    style={{ flexDirection: orientation === 'imageLeft' ? 'row-reverse' : 'row' }}
                >
                    <div
                        className="wp-block-column mdcareer-content-with-video-info is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: "48.82%" }}
                    >
                        {title ? (

                            <h2 className="wp-block-heading" id="h-our-purpose-passion">
                                {title}
                            </h2>
                        ) : null}

                        {description ? <PortableText value={description} components={components} /> : null}


                        <div className="wp-block-columns mdcarer-author-details is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                            <div className="wp-block-column mdcarer-author-img anil-sir-img is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image size-large is-resized">


                                    {authorimage ? (
                                        <Image
                                            src={urlFor(authorimage).url()}
                                            width={authorimage.width || 80}
                                            height={authorimage.height || 80}
                                            alt=""
                                            decoding="async"
                                            className="wp-image-39940 perfmatters-lazy loaded"
                                            style={{ width: "80px", height: "80px" }}
                                            sizes="auto, (max-width: 160px) 100vw, 160px"
                                        />
                                    ) : null}
                                </figure>
                            </div>

                            <div className="wp-block-column mdcarer-author-content is-layout-flow wp-block-column-is-layout-flow">
                                {authorname ? (

                                    <h5 className="wp-block-heading" id="h-anil-gupta">
                                        {authorname}
                                    </h5>
                                ) : null}
                                {authordesignation ? (

                                    <p>
                                        {authordesignation}
                                    </p>
                                ) : null}
                            </div>

                            <div className="wp-block-column mdcarer-author-video is-layout-flow wp-block-column-is-layout-flow">
                                <div className="mdinc-life-at-md-video">
                                    <div className="wp-block-image">
                                        <a
                                            className="mdinc-testimonial-video"
                                            href={videoUrl}
                                        />
                                        <div className="mdinc-video-play-button-box">
                                            <div className="mdinc-video-play-button-box-inner" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="wp-block-column mdcareer-content-with-video-banner our-purpose-left is-layout-flow wp-block-column-is-layout-flow"
                        style={{
                            flexBasis: "47.7%", backgroundColor: backgroundColor?.hex }}
                    >
                       

                        <figure className="wp-block-image size-full">

                            {image ? (
                                <Image
                                    src={urlFor(image).url()}
                                    width={image.width || 438}
                                    height={image.height || 497}
                                    decoding="async"
                                    alt="Core Values"
                                    className="wp-image-45951 perfmatters-lazy loaded"
                                />
                            ) : null}
                        </figure>
                    </div>
                </div>
            </div>
            {/* Video Popup */}
            {
                // showVideo && (
                //     <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                //         <div className="relative w-full max-w-4xl aspect-video">
                //             <button
                //                 onClick={() => setShowVideo(false)}
                //                 className="absolute top-2 right-2 z-10 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200"
                //                 aria-label="Close Video"
                //             >
                //                 ✕
                //             </button>
                //             {videoUrl && (

                //                 <video controls className="rounded-xl w-full h-auto">
                //                     <source src={videoUrl} type="video/mp4" />
                //                     Your browser does not support the video tag.
                //                 </video>
                //             )}
                //         </div>
                //     </div>
                // )
            }
        </>
    );
}