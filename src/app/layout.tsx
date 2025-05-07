import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="home wp-singular page-template page-template-page-no-title-no-sidebar page page-id-39923 wp-custom-logo wp-embed-responsive wp-theme-career-fse no-sidebar">
        <div className="wp-site-blocks">

          {children}
          </div>
      </body>
    </html>
  );
}