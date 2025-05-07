import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type FeaturesProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "features" }
>;

export function Features({ features, title }: FeaturesProps) {

    return (
        <>
            <div className="wp-block-multidots-multipurpose-block is-block-center mdhome-why-multidots mdinc-section-bottom-margin mdcareer-perks">
                {title ? (
                    <h2
                        className="wp-block-heading has-text-align-center has-text-color"
                        id="mdcareer-perks-and-benefits"
                        style={{ color: "#000000" }}
                    >
                        {title}
                    </h2>
                ) : null}
                <div className="wp-block-multidots-multipurpose-block is-block-center mdhome-why-multidots-boxes">
                    {Array.isArray(features) ? (
                        <>
                            {features.reduce((rows, feature, index) => {
                                const rowIndex = Math.floor(index / 2);
                                if (!rows[rowIndex]) {
                                    rows[rowIndex] = [];
                                }
                                rows[rowIndex].push(feature);
                                return rows;
                            }, []).map((row, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className="wp-block-columns mdhome-why-multidots-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex"
                                >
                                    {row.map((feature) => (
                                        <div
                                            key={feature._key}
                                            className="wp-block-column mdhome-why-multidots-column is-layout-flow wp-block-column-is-layout-flow"
                                            style={{ flexBasis: '50%' }}
                                        >
                                            <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                                                <div
                                                    className="wp-block-column mdhome-why-multidots-icon is-layout-flow wp-block-column-is-layout-flow"
                                                    style={{ flexBasis: '33.33%' }}
                                                >
                                                    <figure className="wp-block-image size-large mdhome-why-multidots-icon02">
                                                        <div
                                                            style={{
                                                                content: '""', // Note: not needed, <div> already acts as pseudo-element
                                                                width: '100%',
                                                                height: '100%',
                                                                display: 'inline-block',
                                                                position: 'absolute',
                                                                top: '2px',
                                                                left: '6px',
                                                                borderRadius: '50%',
                                                                zIndex: -1,
                                                                backgroundColor: feature.backgroundColor?.hex || '#ffffff',
                                                            }}
                                                        ></div>


                                                        {feature.icon && (
                                                            <>
                                                                <Image
                                                                    decoding="async"
                                                                    src={urlFor(feature.icon).url()}
                                                                    alt={feature.title || ''}
                                                                    width={feature?.width || 60} 
                                                                    height={feature?.height || 60}
                                                                    className="wp-image-xxxx perfmatters-lazy loaded"
                                                                    // data-src={urlFor(feature.icon).width(1024).url()}
                                                                    loading="lazy"
                                                                />

                                                            </>
                                                        )}
                                                    </figure>
                                                </div>

                                                <div
                                                    className="wp-block-column mdhome-why-multidots-details is-layout-flow wp-block-column-is-layout-flow"
                                                    style={{ flexBasis: '66.66%' }}
                                                >
                                                    <h4 className="wp-block-heading" id={`h-${feature._key}`}>
                                                        {feature.title}
                                                    </h4>
                                                    <p>{feature.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </>
                    ) : null}
                </div>
            </div>

        </>
    );
}