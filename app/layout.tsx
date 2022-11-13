import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-brand-light-pink">
        <div className="items-center h-screen mx-4 md:mx-auto md:flex md:w-4/5 md:flex-col lg:w-2/5">
          <div className="pt-10" />

          <main id="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
