import { PAGE_QUERYResult } from "@/sanity/types";

type ThreeColBoxProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "threeColBox" }
>;

export function ThreeColBox({ title, text, boxes }: ThreeColBoxProps) {

    return (
        <>

            <div className="wp-block-multidots-multipurpose-block is-block-center evaluation-section mdinc-section-bottom-margin">
                {title ? (
                    <h2 className="wp-block-heading has-text-align-center mdinc-subtitle-below-title" id="h-the-standards-of-evaluation">

                        {title}
                    </h2>
                ) : null}
                <p className="has-text-align-center mdinc-subtitle-content-below">
                    {text}
                </p>
               
                {Array.isArray(boxes) ? (

                    <div className="wp-block-columns evaluation-boxes is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">

                        {boxes.map((box) => (

                            <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow" key={box._key}
                            >
                                <div className={`wp-block-multidots-multipurpose-block is-block-center evaluation-box evaluation-box`}
                                    style={{ borderTopColor: box.backgroundColor?.hex }}
                                >
                                    <h4 className="wp-block-heading has-text-align-center" id="h-technical-knowledge">
                                        {box.title}
                                    </h4>
                                    <p className="has-text-align-center">
                                        {box.text}
                                    </p>
                                </div>
                            </div>
                        ))}


                    </div>
                ) : null}
            </div>


        </>
    );
}