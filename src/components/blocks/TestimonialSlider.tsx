
import { PAGE_QUERYResult } from "@/sanity/types";
import Slider from 'react-slick'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image' // assuming you have a `urlFor` utility
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


type TestimonialsProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "TestimonialSlider" }
> & {
    logos: { _key: string; alt?: string }[]; // Update the type of logos to an array
};
export function TestimonialSlider({ title, testimonials, reviews }: TestimonialsProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
    }

    return (
        <>
            <div className="wp-block-multidots-multipurpose-block is-block-center mdinc-rating-main mdinc-section-bottom-margin mdinc-width-970">
                <h2
                    className="wp-block-heading has-text-align-center md-career-we-are-loved-heading"
                    id="h-we-are-so-loved"
                >
                    {title}
                </h2>
                <div className="wp-block-multidots-multipurpose-block is-block-center mdinc-rating">
                    <div className="wp-block-column has-4-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex"
                        >
                        <div
                            className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                            style={{ display: "flex", gap: "40px", justifyContent: "space-between" }}>
                        
                            {reviews?.map((review) => {
                                return (
                                    <div key={review._key} className="clutch-widget md-facebook-rating-main md-glassdoor-rating-main"
                                        style={{ flexBasis:"20%" }}>
                                        {review && (
                                            <Image
                                                src={urlFor(review).url()}
                                                alt={review.alt || 'Logo'}
                                                width={review.width || 194}
                                                height={review.height || 45}
                                                className="object-contain"
                                            />
                                        )}
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>

            <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-our-people-slider mdinc-width-970 mdinc-section-bottom-margin">

                <div className="mdc-peple-say-blk-outer addSlider slick-initialized slick-slider" role="toolbar">
                    <Slider {...settings}>
                        {testimonials.map((t) => (
                            console.log(t.backgroundColor?.hex),
                            <>
                                <div key={t._key}
                                    className="mdc-peple-say-blk slick-slide slick-cloned"
                                    data-slick-index="-1"
                                    aria-hidden="true"
                                    style={{ width: "970px", backgroundColor: t.backgroundColor?.hex  }}
                                    tabIndex="-1"
                                >
                                    <div className="mdc-peple-say-blk-text">
                                        <p>{t.quote}</p>
                                    </div>
                                    <div className="mdc-peple-say-bottom">
                                        <div className="mdc-peple-say-author-logo">
                                            <div className="mdc-peple-say-detail-testimonial-avtar">
                                                {t.image && (
                                                    <Image
                                                        src={urlFor(t.image).width(60).height(60).url()}
                                                        alt={t.author}
                                                        width={60}
                                                        height={60}
                                                        loading="lazy"
                                                        decoding="async"
                                                        className="perfmatters-lazy"
                                                        data-src="https://careers.multidots.com/wp-content/uploads/sites/2/2021/07/Harsh-1.jpg?quality=90?w=400"
                                                    />
                                                )}


                                            </div>
                                            <div className="mdc-peple-say-detail-author">
                                                <div className="mdc-peple-say-detail-testimonial-founder">
                                                    <h5>{t.author}</h5>
                                                </div>
                                                <div className="mdc-peple-say-detail-testimonial-designation">
                                                    {t.role}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}