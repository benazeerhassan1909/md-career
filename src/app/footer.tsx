/* eslint-disable @next/next/no-img-element */

import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import '@fortawesome/fontawesome-free/css/all.min.css'


const FOOTER_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0]{ siteTitle, logo, footer,address,phone }`;

export default async function Footer() {

    const { data: siteSettingsFooter } = await sanityFetch({ query: FOOTER_QUERY });

    const { siteTitle, footer, logo }: {
        siteTitle?: string;
        footer?: {
            socialLinks?: { url: string; name: string, icon: string }[],
            footermenuItems?: { title: string; url: string; subMenu?: { title: string; url: string }[] }[]
        };
        logo?: { asset?: { _ref: string }; url?: string; alt?: string; width?: number; height?: number };

    } = siteSettingsFooter;
    const logo1 = siteSettingsFooter?.footer?.footerLogo1;
    const logo2 = siteSettingsFooter?.footer?.footerLogo2;
    const logo3 = siteSettingsFooter?.footer?.footerLogo3;


    return (
        <footer className="wp-block-template-part">
            <div className="wp-block-group alignfull mdFooter has-global-padding is-layout-constrained wp-container-core-group-is-layout-72d38984 wp-block-group-is-layout-constrained" style={{ marginTop: 0, marginBottom: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}>
                <div className="wp-block-group is-vertical is-content-justification-stretch is-nowrap is-layout-flex wp-container-core-group-is-layout-da34c972 wp-block-group-is-layout-flex" style={{ paddingRight: 15, paddingLeft: 15 }}>
                    <div className="wp-block-columns are-vertically-aligned-top mdFooter-inner is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                        <div className="wp-block-column is-vertically-aligned-top mdFooter-left is-layout-flow wp-block-column-is-layout-flow">
                            <div className="wp-block-group mdFooter-left-inner is-layout-flow wp-block-group-is-layout-flow">
                                <div className="mdFooter-top-logo wp-block-site-logo">
                                    <Link href="/" aria-label={siteTitle} className="custom-logo-link" rel="home" aria-current="page">
                                        {logo?.asset && (
                                            <Image
                                                src={logo?.asset?._ref ? urlFor({ asset: { _ref: logo.asset._ref, _type: "reference" } }).url() || '' : logo?.url || ''}
                                                alt={logo?.alt || 'Post Image'}
                                                width={logo?.width || 191}
                                                height={logo?.height || 40}
                                                priority
                                                className="custom-logo perfmatters-lazy"
                                                decoding="async"
                                            />
                                        )}

                                        <noscript>

                                            <Image
                                                src={logo?.asset?._ref ? urlFor({ asset: { _ref: logo.asset._ref, _type: "reference" } }).url() || '' : logo?.url || ''}
                                                alt={logo?.alt || 'Post Image'}
                                                width={logo?.width || 800}
                                                height={logo?.height || 600}
                                                priority
                                                decoding="async"
                                                className="custom-logo"
                                            />
                                        </noscript>
                                    </Link>
                                </div>

                                <div className="wp-block-group mdFooter-location-section is-layout-flow wp-block-group-is-layout-flow" style={{ marginTop: 0, marginBottom: 0 }}>
                                    <div className="wp-block-group mdFooter-location-detail-section section-call is-layout-flow wp-block-group-is-layout-flow">
                                        <figure className="wp-block-image size-full">
                                            <img
                                                decoding="async"
                                                src="/footer-location-icon.svg"
                                                alt=""
                                                className="wp-image-59999 perfmatters-lazy"
                                                style={{ objectFit: 'cover' }}
                                                data-src="https://careers.multidots.com/wp-content/uploads/sites/2/2024/12/footer-location-icon.svg"
                                            />

                                        </figure>
                                        <p className="mdFooter-location-detail-section-content" style={{ marginTop: 0 }}>{siteSettingsFooter?.footer?.address}</p>
                                    </div>

                                    <div className="wp-block-group mdFooter-location-detail-section section-location is-layout-flow wp-block-group-is-layout-flow">
                                        <figure className="wp-block-image size-full">
                                            <img
                                                decoding="async"
                                                src="/footer-phone-icon.svg"
                                                alt=""
                                                className="wp-image-60000 perfmatters-lazy"
                                                data-src="https://careers.multidots.com/wp-content/uploads/sites/2/2024/12/footer-phone-icon.svg"
                                            />
                                        </figure>
                                        <p className="mdFooter-location-detail-section-content" style={{ marginTop: 0 }}>
                                            <a href="tel:+1 (646) 586-5500">{siteSettingsFooter?.footer?.phone}</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="mdFooter-social-section">
                                    {footer?.socialLinks?.map((socialLink: { url: string; name: string, icon: string }) => (
                                        <li key={socialLink.url}>
                                            <Link href={`${socialLink.url}`} target="_blank" rel="noreferrer noopener">
                                                <i className={socialLink.icon}></i>
                                            </Link>
                                        </li>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="wp-block-column is-vertically-aligned-top mdFooter-right is-layout-flow wp-block-column-is-layout-flow">
                            <div className="wp-block-columns mdFooter-right-inner is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">

                                {footer?.footermenuItems?.map((menuItem: { title: string; url: string; subMenu?: { title: string; url: string }[] }) => (

                                    <div key={menuItem.title} >
                                        <div className="wp-block-column mdFooter-menu is-layout-flow wp-block-column-is-layout-flow">
                                            <div className="wp-block-group widget_nav_menu is-layout-flow wp-block-group-is-layout-flow">
                                                <Link href={`/${menuItem.url?.toLowerCase()}`}>
                                                    <h4 className="wp-block-heading" id="h-careers">{menuItem.title} </h4>
                                                </Link>
                                                <nav className="is-vertical wp-block-navigation is-layout-flex wp-container-core-navigation-is-layout-5f9f5280 wp-block-navigation-is-layout-flex" aria-label="Navigation 3">
                                                    {menuItem.subMenu && menuItem.subMenu.length > 0 && (
                                                        <ul className="wp-block-navigation__container is-vertical wp-block-navigation">
                                                            {menuItem.subMenu.map((subMenuItem: { title: string; url: string }) => (
                                                                <li key={subMenuItem.title} className="wp-block-navigation-item wp-block-navigation-link">
                                                                    {subMenuItem.url ? (

                                                                        <a href={`${subMenuItem.url}`} className="wp-block-navigation-item__content"
                                                                            target={menuItem?.title === "Company" ? "_blank" : "_self"}
                                                                            rel="noreferrer noopener">
                                                                            {subMenuItem.title}
                                                                        </a>
                                                                    ) : (
                                                                        <a href={`/${subMenuItem.title.toLowerCase().replace(/\s+/g, '-')}`} className="wp-block-navigation-item__content"
                                                                            target={menuItem?.title === "Company" ? "_blank" : "_self"}
                                                                            rel="noreferrer noopener">
                                                                            <span className="wp-block-navigation-item__label">
                                                                                {subMenuItem.title}
                                                                            </span>
                                                                        </a>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wp-block-group mdFooter-logos-section is-layout-flow wp-block-group-is-layout-flow">
                    <div className="wp-block-group mdFooter-logos-box is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-is-layout-0711bd51 wp-block-group-is-layout-flex">

                        <figure className="wp-block-image size-large footer_inc_top_company_logo">
                            <a href="https://www.inc.com/profile/multidots" target="_blank" rel="noreferrer noopener">
                                {logo1?.asset && (

                                    <Image
                                        src={logo1?.asset?._ref ? urlFor({ asset: { _ref: logo1.asset._ref, _type: "reference" } }).url() || '' : logo1?.url || ''}
                                        alt={logo1?.alt || 'Post Image'}
                                        width={logo1?.width || 120}
                                        height={logo1?.height || 120}
                                        priority
                                        decoding="async"
                                        className="wp-image-59995 perfmatters-lazy"
                                        style={{ objectFit: 'cover' }}
                                        data-src="https://careers.multidots.com/wp-content/uploads/sites/2/2024/12/americas-fasest-growing-company-logo.svg?w=1024"
                                    />
                                )}
                            </a>
                        </figure>

                        <figure className="wp-block-image size-full is-resized footer_vip_logo">
                            <a href="https://www.multidots.com/wpvip/">

                                {logo2?.asset && (

                                    <Image
                                        src={logo2?.asset?._ref ? urlFor({ asset: { _ref: logo2.asset._ref, _type: "reference" } }).url() || '' : logo2?.url || ''}
                                        alt={logo2?.alt || 'Post Image'}
                                        width={logo2?.width || 120}
                                        height={logo2?.height || 120}
                                        priority
                                        decoding="async"
                                        className="wp-image-70896 perfmatters-lazy"
                                        style={{ width: 120 }}
                                        data-src="https://careers.multidots.com/wp-content/uploads/sites/2/2025/04/Gold-Agency-Partner-color.png"
                                        data-srcset="https://careers.multidots.com/wp-content/uploads/sites/2/2025/04/Gold-Agency-Partner-color.png 714w, https://careers.multidots.com/wp-content/uploads/sites/2/2025/04/Gold-Agency-Partner-color.png?resize=150,150 150w, https://careers.multidots.com/wp-content/uploads/sites/2/2025/04/Gold-Agency-Partner-color.png?resize=300,300 300w"
                                        data-sizes="auto, (max-width: 714px) 100vw, 714px"
                                    />
                                )}
                            </a>
                        </figure>

                        <figure className="wp-block-image size-full footer_great_place_to_work_logo">
                            <a href="https://www.greatplacetowork.in/great/company/multidots-solutions-pvt-ltd" target="_blank" rel="noreferrer noopener">

                                {logo3?.asset && (

                                    <Image
                                        src={logo3?.asset?._ref ? urlFor({ asset: { _ref: logo3.asset._ref, _type: "reference" } }).url() || '' : logo3?.url || ''}
                                        alt={logo3?.alt || 'Post Image'}
                                        width={logo3?.width || 120}
                                        height={logo3?.height || 120}
                                        priority
                                        decoding="async"
                                        className="wp-image-59997 perfmatters-lazy"
                                        style={{ objectFit: 'cover' }}
                                        data-src="https://careers.multidots.com/wp-content/uploads/sites/2/2024/12/Certification-Badge-July-2024-2025.svg"
                                    />
                                )}
                            </a>
                        </figure>
                    </div>
                </div>

                <p className="has-text-align-center copyright-text">© {new Date().getFullYear()}{siteSettingsFooter?.footer?.footerText}</p>
            </div>


        </footer>
    );
}