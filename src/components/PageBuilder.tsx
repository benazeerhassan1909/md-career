"use client";

import { Hero } from "@/components/blocks/Hero";
import { Features } from "@/components/blocks/Features";
import { SplitImage } from "@/components/blocks/SplitImage";
import { Jobs } from "@/components/blocks/Jobs";
import { TitleDescription } from "@/components/blocks/titleDescription";
import { LogoList } from "@/components/blocks/LogoList";
import { ClientList } from "@/components/blocks/ClientList";
import { client } from "@/sanity/lib/client";
import { createDataAttribute } from "next-sanity";
import { useOptimistic } from "next-sanity/hooks";
import { PAGE_QUERYResult } from "@/sanity/types";
import { TestimonialSlider } from "@/components/blocks/TestimonialSlider";
import { TabSection } from "@/components/blocks/tabSection";
import { ImageTextSection } from "@/components/blocks/imageTextSection";
import { CardSection } from "@/components/blocks/CardSection";
import { Banner } from "@/components/blocks/Banner";
import { ImageType } from "@/components/blocks/Image";
import { FAQs } from "@/components/blocks/FAQs";
import { ThreeColBox } from "@/components/blocks/ThreeColBox";
import { Quote } from "@/components/blocks/Quote";
import { List } from "@/components/blocks/List";
import { CareerForm } from "./blocks/CareerForm";


type PageBuilderProps = {
    content: NonNullable<PAGE_QUERYResult>["content"];
    documentId: string;
    documentType: string;
};

const { projectId, dataset, stega } = client.config();
export const createDataAttributeConfig = {
    projectId,
    dataset,
    baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
};

export function PageBuilder({
    content,
    documentId,
    documentType,
}: PageBuilderProps) {
    const blocks = useOptimistic<
        NonNullable<PAGE_QUERYResult>["content"] | undefined,
        NonNullable<PAGE_QUERYResult>
    >(content, (state, action) => {
        if (action.id === documentId) {
            return action?.document?.content?.map(
                (block) => state?.find((s) => s._key === block?._key) || block
            );
        }
        return state;
    });

    if (!Array.isArray(blocks)) {
        return null;
    }

    return (
        <main
            data-sanity={createDataAttribute({
                ...createDataAttributeConfig,
                id: documentId,
                type: documentType,
                path: "content",
            }).toString()}
        >
            {blocks.map((block) => {
                const DragHandle = ({ children }: { children: React.ReactNode }) => (
                    <div
                        data-sanity={createDataAttribute({
                            ...createDataAttributeConfig,
                            id: documentId,
                            type: documentType,
                            path: `content[_key=="${block._key}"]`,
                        }).toString()}
                    >
                        {children}
                    </div>
                );

                switch (block._type) {
                    case "hero":
                        return (
                            <DragHandle key={block._key}>
                                <Hero {...block} />
                            </DragHandle>
                        );
                    case "features":
                        return (
                            <DragHandle key={block._key}>
                                <Features {...block} />
                            </DragHandle>
                        );
                    case "splitImage":
                        return (
                            <DragHandle key={block._key}>
                                <SplitImage {...block} />
                            </DragHandle>
                        );
                    case "jobs":
                        return (
                            <DragHandle key={block._key}>
                                <Jobs {...block} />
                            </DragHandle>
                        );
                    case "titleDescription":
                        return (
                            <DragHandle key={block._key}>
                                <TitleDescription {...block} />
                            </DragHandle>
                        );
                    case "logoList":
                        return (
                            <DragHandle key={block._key}>
                                <LogoList {...block} />
                            </DragHandle>
                        );
                    case "clientList":
                        return (
                            <DragHandle key={block._key}>
                                <ClientList {...block} />
                            </DragHandle>
                        );

                    case "testimonialSlider":
                        return (
                            <DragHandle key={block._key}>
                                <TestimonialSlider {...block} />
                            </DragHandle>
                        );
                    case "tabSection":
                        return (
                            <DragHandle key={block._key}>
                                <TabSection {...block} />
                            </DragHandle>
                        );
                    case "imageTextSection":
                        return (
                            <DragHandle key={block._key}>
                                <ImageTextSection {...block} />
                            </DragHandle>
                        );
                    case "cardSection":
                        return (
                            <DragHandle key={block._key}>
                                <CardSection {...block} />
                            </DragHandle>
                        );
                    case "banner":
                        return (
                            <DragHandle key={block._key}>
                                <Banner {...block} />
                            </DragHandle>
                        );
                    case "formType":
                        return (
                            <DragHandle key={block._key}>
                                <CareerForm {...block}  />
                            </DragHandle>
                        );
                    case "imageBlock":
                        return (
                            <DragHandle key={block._key}>
                                <ImageType {...block} />
                            </DragHandle>
                        );
                    case "faqs":
                        return (
                            <DragHandle key={block._key}>
                                <FAQs {...block} />
                            </DragHandle>
                        );
                    case "threeColBox":
                        return (
                            <DragHandle key={block._key}>
                                <ThreeColBox {...block} />
                            </DragHandle>
                        );
                    case "Quote":
                        return (
                            <DragHandle key={block._key}>
                                <Quote {...block} />
                            </DragHandle>
                        );
                    case "List":
                        return (
                            <DragHandle key={block._key}>
                                <List {...block} />
                            </DragHandle>
                        );
                    default:
                        // This is a fallback for when we don't have a block type
                        return <div key={block._key}>Block not found: {block._type}</div>;
                }
            })}
        </main>
    );
}