// create header content

import { sanityFetch } from '@/sanity/lib/live';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";


const HEADER_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0]{ siteTitle, logo, header }`;


export default async function Header() {

    const { data: siteSettings } = await sanityFetch({ query: HEADER_QUERY });

    const {  logo, header }: {
        siteTitle?: string;
        logo?: { asset?: { _ref: string }; url?: string; alt?: string; width?: number; height?: number };
        header?: { menuItems?: { title: string; url: string; subMenu?: { title: string; link: string }[] }[] };
    } = siteSettings;
    return (


            <header className="wp-block-template-part">

                <div
                    id="masthead"
                    className="wp-block-group mdinc-site-header has-contrast-color has-base-background-color has-text-color has-background has-link-color wp-elements-d96ba67c5c04ae0b26da58efc078dd89 has-global-padding is-layout-constrained wp-container-core-group-is-layout-639b5052 wp-block-group-is-layout-constrained"
                    style={{ paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}
                >
                    <div
                        className="wp-block-group header-wrap is-content-justification-space-between is-nowrap is-layout-flex wp-container-core-group-is-layout-6b7ac271 wp-block-group-is-layout-flex"
                        style={{ paddingTop: '45px', paddingRight: '15px', paddingBottom: '45px', paddingLeft: '15px', display: 'flex', justifyContent: 'space-between' }}
                    >
                        <div className="mdinc-headerLogo wp-block-site-logo">
                            <Link href='/' className="custom-logo-link" rel="home" aria-current="page">

                                <Image
                                    src={logo?.asset?._ref ? urlFor({ asset: { _ref: logo.asset._ref, _type: "reference" } }).url() || '' : logo?.url || ''}
                                    alt={logo?.alt || 'Post Image'}
                                    width={logo?.width || 190}
                                    height={logo?.height || 40}
                                    priority
                                    className="custom-logo perfmatters-lazy loaded"
                                    decoding="async"
                                    data-was-processed="true"
                                />
                            </Link>
                        </div>

                        <nav
                            style={{
                                fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.227), 16px)',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 1.15
                            }}
                            className="is-responsive items-justified-right mdinc-headerMainMenu wp-block-navigation has-noto-sanssemibold-font-family is-content-justification-right is-layout-flex wp-container-core-navigation-is-layout-6f5e70f5 wp-block-navigation-is-layout-flex"
                            aria-label="Navigation 2"
                            data-wp-interactive="core/navigation"
                            data-wp-context='{ "overlayOpenedBy": { "click": false, "hover": false, "focus": false }, "type": "overlay", "roleAttribute": "", "ariaLabel": "Menu" }'
                        >
                            <button
                                aria-haspopup="dialog"
                                aria-label="Open menu"
                                className="wp-block-navigation__responsive-container-open"
                                data-wp-on-async--click="actions.openMenuOnClick"
                                data-wp-on--keydown="actions.handleMenuKeydown"
                            >
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z" />
                                </svg>
                            </button>
                            <div
                                className="wp-block-navigation__responsive-container"
                                id="modal-1"
                                data-wp-class--has-modal-open="state.isMenuOpen"
                                data-wp-class--is-menu-open="state.isMenuOpen"
                                data-wp-watch="callbacks.initMenu"
                                data-wp-on--keydown="actions.handleMenuKeydown"
                                data-wp-on-async--focusout="actions.handleMenuFocusout"
                            >
                                <div className="wp-block-navigation__responsive-close">
                                    <div
                                        className="wp-block-navigation__responsive-dialog"
                                        data-wp-bind--aria-modal="state.ariaModal"
                                        data-wp-bind--aria-label="state.ariaLabel"
                                        data-wp-bind--role="state.roleAttribute"
                                    >
                                        <button
                                            aria-label="Close menu"
                                            className="wp-block-navigation__responsive-container-close"
                                            data-wp-on-async--click="actions.closeMenuOnClick"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                aria-hidden="true"
                                                focusable="false"
                                            >
                                                <path d="m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z" />
                                            </svg>
                                        </button>
                                        <div
                                            className="wp-block-navigation__responsive-container-content"
                                            data-wp-watch="callbacks.focusFirstElement"
                                            id="modal-1-content"
                                        >
                                            <ul
                                                style={{
                                                    fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.227), 16px)',
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: 1.15
                                                }}
                                                className="wp-block-navigation__container is-responsive items-justified-right mdinc-headerMainMenu wp-block-navigation has-noto-sanssemibold-font-family"
                                            >
                                                {header?.menuItems?.map((menuItem: { title: string; url: string; subMenu?: { title: string; link: string }[] }) => (
                                                    menuItem.title === 'Current Openings' ? (
                                                        <li key={menuItem.title}
                                                            style={{ fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.227), 16px)' }}
                                                            className="wp-block-navigation-item menu-style-btn wp-block-navigation-link"
                                                        >
                                                            <a
                                                                className="wp-block-navigation-item__content"
                                                                href={`/${menuItem.url?.toLowerCase()}`}
                                                            >
                                                                <span className="wp-block-navigation-item__label">{menuItem.title}</span>
                                                            </a>
                                                        </li>
                                                    ) :
                                                        <li key={menuItem.title} className="wp-block-navigation-item homepage-perks-header wp-block-navigation-link" style={{ fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.227), 16px)' }}>
                                                            <Link href={`/${menuItem.url?.toLowerCase()}`} className='wp-block-navigation-item__content'>
                                                                {menuItem.title}
                                                            </Link>
                                                            {menuItem.subMenu && menuItem.subMenu.length > 0 && (
                                                                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg hidden group-hover:block">
                                                                    {menuItem.subMenu.map((subMenuItem) => (
                                                                        <li key={subMenuItem.title}>
                                                                            {subMenuItem.link ? (
                                                                                <Link href={subMenuItem.link} className="block px-4 py-2 hover:bg-gray-100">
                                                                                    {subMenuItem.title}
                                                                                </Link>
                                                                            ) : (
                                                                                <span className="block px-4 py-2 text-gray-500">
                                                                                    {subMenuItem.title}
                                                                                </span>
                                                                            )}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                )
                                                )}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </header>

    );
}