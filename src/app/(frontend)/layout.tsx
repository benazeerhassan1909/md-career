import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/live";
import Header from "../header";
import Footer from "../footer";
import Head from 'next/head';
import ScrollHandler from "@/components/ScrollHandler";



export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-SOME_HASH_HERE"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>


      <ScrollHandler />
      <body className="home wp-singular page-template page-template-page-no-title-no-sidebar page page-id-39923 wp-custom-logo wp-embed-responsive wp-theme-career-fse no-sidebar">
        <div className="wp-site-blocks">
          <Header />
          <main className="wp-block-group site-main has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
            <div className="wp-block-group container is-layout-flow wp-block-group-is-layout-flow" style={{marginTop:0}}>
              <div className="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">
                <div className="wp-block-multidots-multipurpose-block is-block-center mdcareer-homepage-main">
                  {children}
                  <SanityLive />
                  {(await draftMode()).isEnabled && (
                    <>
                      <DisableDraftMode />
                      <VisualEditing />
                    </>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </>
  );
}