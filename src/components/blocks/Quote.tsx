/* eslint-disable @typescript-eslint/no-explicit-any */

// import { PAGE_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type QuoteProps = {
    quoteText?: string;
    author?: string;
    quoteImage?: any;
    backgroundColor?: {
        hex?: string;
    };
};


export function Quote({ quoteText, author, quoteImage, backgroundColor }: QuoteProps) {
  return (
      <div className="wp-block-multidots-multipurpose-block is-block-center education-scholarship-quote-main">
          <div className="wp-block-columns education-scholarship-quote-columns mdinc-section-bottom-margin is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex"
          style={{ backgroundColor: backgroundColor?.hex }}
          >

              <div
                  className="wp-block-column education-scholarship-quote-details is-layout-flow wp-block-column-is-layout-flow"
                  style={{ flexBasis: '57.5%' }}
              >
                  <h3
                      className="wp-block-heading education-scholarship-quote-content h4"
                      id="h-education-is-about-empowerment-about-cultivating-a-human-being-to-the-highest-possible-potential-a-tool-for-fulfilling-the-immensity-of-being"
                  >
                      {quoteText}
                  </h3>
                  <p className="education-scholarship-quote-author">{author}</p>
              </div>

              <div
                  className="wp-block-column education-scholarship-quote-columns is-layout-flow wp-block-column-is-layout-flow"
                  style={{ flexBasis: '42.5%', backgroundColor: backgroundColor?.hex }}
              >
                  <figure className="wp-block-image size-full is-resized">
                      <Image
                          src={urlFor(quoteImage).width(100).url()} 
                          alt="Main"
                          width={700}
                          height={900}
                          decoding="async"
                          className="wp-image-59915 perfmatters-lazy loaded"
                          style={{ objectFit: 'cover' }}

                      />
                  </figure>
              </div>

          </div>
      </div>
  );
}