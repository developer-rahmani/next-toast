import AppContainer from "@/components/AppContainer";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900" suppressHydrationWarning={true}>
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
}
