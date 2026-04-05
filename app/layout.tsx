import "./globals.css";

export const metadata = {
  title: "Jin Izakaya",
  description: "Luxury restaurant homepage mockup concept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}