import { PortableText } from "@portabletext/react";
import { PAGE_QUERYResult } from "@/sanity/types";
// import type { PortableTextBlock } from "@portabletext/types";

type TitleDescriptionProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "titleDescription" }
>;

export function TitleDescription({ title, description }: TitleDescriptionProps) {
    // Define custom components for PortableText
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
        <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-homepage-about-md mdinc-width-970">
            {title && (
                <h2 className="wp-block-heading has-text-align-center" id="h-about-multidots">
                    {title}
                </h2>
            )}
            {description ? <PortableText value={description} components={components} /> : null}

        </div>
    );
}