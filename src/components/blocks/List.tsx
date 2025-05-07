import { PAGE_QUERYResult } from "@/sanity/types";


type ListProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "List" }
>;

export function List({ listtitle, lists }: ListProps) {

    return (
        <div className="wp-block-multidots-multipurpose-block is-block-center education-scholarship-notes mdinc-section-bottom-margin">
            <h3 className="wp-block-heading h4" id="h-notes">{listtitle}</h3>
            <ul className="wp-block-list mdinc-custom-list">
                {lists?.map((list,index) => (
                    <li key={index}>
                        {list}
                    </li>
                ))}
            </ul>
        </div>
    );
}