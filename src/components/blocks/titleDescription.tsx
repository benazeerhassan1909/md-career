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
        block: {
            left: ({ children }: { children: React.ReactNode }) => (
                <p className="text-left">{children}</p>
            ),
            center: ({ children }: { children: React.ReactNode }) => (
                <p className="text-center">{children}</p>
            ),
            right: ({ children }: { children: React.ReactNode }) => (
                <p className="text-right">{children}</p>
            ),
            normal: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
            h1: ({ children }: { children: React.ReactNode }) => (
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0' }}>
                    {children}
                </h1>
            ),
            h2: ({ children }: { children: React.ReactNode }) => (
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>
                    {children}
                </h2>
            ),
            h3: ({ children }: { children: React.ReactNode }) => (
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0' }}>
                    {children}
                </h3>
            ),
        },
        types: {
            table: ({ value }) => {
                const [headerRow, ...bodyRows] = value.rows || [];
                return (
                    <div className="education-scholarship-table">
                        <table>
                            {headerRow && (
                                <thead>
                                    <tr>
                                        {headerRow.cells.map((cell, index) => (
                                            <th key={index}>
                                                {cell}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                            )}
                            <tbody>
                                {bodyRows.map((row, rowIndex) => (
                                    console.log(rowIndex),
                                    <tr key={rowIndex}>
                                        {row.cells.map((cell, cellIndex) =>
                                            cell ? (
                                                <td
                                                    key={cellIndex}
                                                    className={`${cellIndex === 2 ? 'no-border-top' : 'border'}`}
                                                    rowSpan={cellIndex === 3 && rowIndex === 0 ? 2 : undefined}
                                                >
                                                    {cell}
                                                </td>
                                            ) : null
                                        )}
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            },
        },
        marks: {
            // Add any custom mark types you need
        },
        list: {
            // Add any custom list types you need
        },
        listItem: {
            // Add any custom list item types you need
        },
    };

    return (
        <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-homepage-about-md mdinc-width-970">
            {title && (
                <h2 className="wp-block-heading has-text-align-center" id="h-about-multidots">
                    {title}
                </h2>
            )}
            {description && (
                <PortableText
                    value={description}
                    components={components}
                    onMissingComponent={(message, options) => {
                        console.warn(message, options);
                        return null;
                    }}
                />
            )}
        </div>
    );
}