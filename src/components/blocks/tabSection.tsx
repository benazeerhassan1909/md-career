/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { PAGE_QUERYResult } from '@/sanity/types'

type TabSectionProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "tabSection" }
>;

export function TabSection({ title, text, tabs }: TabSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (

        <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-homepage-tabbing-section mdinc-width-970 mdinc-section-bottom-margin" role="toolbar">
            {title ? (
                <h2 className="wp-block-heading has-text-align-center h2-below-cnt" id="h-our-team-diversity">
                    {title}
                </h2>
            ) : null}
            {Array.isArray(text) ? (
                <PortableText value={text} components={{
                    block: {

                        left: ({ children }) => <p className="text-left after-h2-cnt">{children}</p>,
                        center: ({ children }) => <p className="text-center after-h2-cnt">{children}</p>,
                        right: ({ children }) => <p className="text-right after-h2-cnt">{children}</p>,
                    },
                }} />
            ) : text ? (
                <p>{text}</p>
            ) : null}
            <section className="mdcareer-homepage-tab-slider slick-initialized slick-slider">
                <div aria-live="polite" className="slick-list draggable">
                    <div className="slick-track" style={{ opacity: 1, width: 2910, left: 0 }} role="listbox">
                        {tabs &&tabs[activeIndex]?.image && (
                            <div data-title="Global Team"
                                className="slick-slide slick-current slick-active"
                                data-slick-index="0"
                                aria-hidden="false"
                                style={{ width: 970 }}
                                role="option"
                                aria-describedby="slick-slide10">
                                <Image
                                    src={urlFor(tabs[activeIndex].image).url()}
                                    alt={tabs[activeIndex].title || ''}
                                    width={tabs[activeIndex].image?.width || 970}  // Fallback to 600 if undefined
                                    height={tabs[activeIndex].image?.height || 430} // Fallback to 400 if undefined
                                    loading="lazy"
                                    decoding="async"
                                    className="perfmatters-lazy loaded"

                                />
                            </div>
                        )}
                    </div>
                </div>
                <ul className="slick-dott" role="tablist">
                    {tabs &&tabs.map((tab, index) => (
                        <li
                            aria-hidden="true" 
                            role="presentation"
                            aria-controls="navigation12"
                            id={`slick-slide1${activeIndex}`}
                            key={tab._key}
                            onClick={() => setActiveIndex(index)}
                            className={`${activeIndex === index ? ' slick-active' : ''
                                }`}
                        >
                            <a className="pager__item">  {tab.title} </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
