import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";


type LogoListProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "logoList" }
>;

export function LogoList({ title, text, logos, backgroundColor }: LogoListProps) {
    return (
        <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-about-featured mdinc-section-bottom-margin">
            {title ? (
                <h2 className="text-xl mx-auto md:text-2xl lg:text-5xl font-semibold text-slate-800 text-pretty max-w-3xl">
                    {title}
                </h2>
            ) : null}
            <div className="">
                {Array.isArray(text) ? (
                    <PortableText value={text} components={{
                        block: {

                            left: ({ children }) => <p className="text-left">{children}</p>,
                            center: ({ children }) => <p className="text-center">{children}</p>,
                            right: ({ children }) => <p className="text-right">{children}</p>,
                        },
                    }} />
                ) : text ? (
                    <p>{text}</p>
                ) : null}
            </div>
            <div className="wp-block-columns are-vertically-aligned-center mdcareer-about-featured-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex" style={{
                backgroundColor: backgroundColor?.hex,
            }}>
                {logos?.map((logo) => (
                    <div
                        key={logo._key}
                        className="wp-block-column is-vertically-aligned-center mdcareer-about-featured-column is-layout-flow wp-block-column-is-layout-flow"
                    >
                        <figure className="wp-block-image size-large is-resized">

                            <Image
                                src={urlFor(logo).url()}
                                alt={logo.alt || 'Logo'}
                                width={logo.width || 162}
                                height={logo.height || 30}
                                className=" perfmatters-lazy loaded "
                                decoding="async"
                                style={{
                                    width: logo.width, height: logo.height }}
                            />
                        </figure>
                    </div>
                ))}
            </div>
        </div>
    );
}