import { PAGE_QUERYResult } from "@/sanity/types";

import { PortableText } from "next-sanity";

type ListProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "List" }
>;

export function List({ title, text, boxes }: ListProps) {

    return (
        <div className="wp-block-multidots-multipurpose-block is-block-center education-scholarship-notes mdinc-section-bottom-margin">
            <h3 className="wp-block-heading h4" id="h-notes">Notes:</h3>
            <ul className="wp-block-list mdinc-custom-list">
                <li>
                    To Apply – Please fill up the <a href="/educationscholarshipform/">Scholarship Program form</a>.
                </li>
                <li>
                    Applicant must be an Indian citizen and aiming to study in India’s college/university.
                </li>
                <li>
                    Applicant must be currently either in 12th grade or 1st Semester of college/university student.
                </li>
                <li>
                    Fees will be paid semester-wise.
                </li>
                <li>
                    Students should Pass/Clear all the subjects to be eligible for next semester’s fees.
                </li>
            </ul>
        </div>
    );
}