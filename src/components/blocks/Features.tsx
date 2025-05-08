import { PAGE_QUERYResult } from "@/sanity/types";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

type FeaturesProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "features" }
>;



export function Features({  title }: FeaturesProps) {

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
                    
                </div>
            </div>

        </>
    );
}