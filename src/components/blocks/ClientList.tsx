import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";


type ClientListProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "clientList" }
>;

export function ClientList({ title, text, logos, backgroundColor }: ClientListProps) {
    return (

        <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-about-featured mdinc-section-bottom-margin"
            style={{
                backgroundColor: backgroundColor?.hex,
                WebkitBoxAlign: 'center',
                msFlexAlign: 'center',
                alignItems: 'center',
                padding: '35px 40px',
                WebkitColumnGap: '34px',
                MozColumnGap: '34px',
                columnGap: '34px',
                borderRadius: '20px',
                marginBottom: 0,
            }}
        >
            <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-our-client mdinc-section-bottom-margin">
                <h2 className="wp-block-heading has-text-align-center h2-below-cnt" id="h-our-clients">
                    {title}
                </h2>

                {Array.isArray(text) ? (
                    <PortableText value={text} components={{
                        block: {

                            left: ({ children }) => <p className="text-left after-h2-cnt">{children}</p>,
                            center: ({ children }) => <p className="text-center after-h2-cnt">{children}</p>,
                            right: ({ children }) => <p className="text-right after-h2-cnt">{children}</p>,
                        },
                    }} />
                ) : text ? (
                    <p className="has-text-align-center after-h2-cnt">
                        {text}</p>
                ) : null}

                <div id="client_logo-block_0dd36afc2b5047cf6e75f193aeccffea" className="mdinc-client-logo-grid large_device">
                    {logos.map((logo, index) => (
                        <div key={index} className="mdinc-logo-outer">
                            <div className="mdinc-logo-wrapper">
                                <figure className="wp-block-image size-large is-resized">

                                    <Image
                                        src={urlFor(logo).auto('format').url()}
                                        alt={logo.alt || 'Logo'}
                                        width={logo.width || 162}
                                        height={logo.height || 46}
                                        className=" perfmatters-lazy loaded "
                                        loading="lazy"
                                        decoding="async"

                                    />
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}