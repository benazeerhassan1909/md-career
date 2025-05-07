import { PortableText } from "@portabletext/react";
import { PAGE_QUERYResult } from "@/sanity/types";
import type { PortableTextBlock } from "@portabletext/types";

type TitleDescriptionProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "titleDescription" }
>;

interface TableValue {
    _type: "table";
    rows: Array<{
        _key: string;
        cells: PortableTextBlock[];
    }>;
}

export function TitleDescription({ title, description }: TitleDescriptionProps) {
    // Define custom components for PortableText
    const components = {
        block: {
            left: ({ children }) => <p className="text-left">{children}</p>,
            center: ({ children }) => <p className="text-center">{children}</p>,
            right: ({ children }) => <p className="text-right">{children}</p>,
            normal: ({ children }) => <p className="my-2">{children}</p>,
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