import "./globals.css";
import NextAuthProvider from "@/components/SessionProvider";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Veyronix - Discord Albion Party Finder",
  description: "The ultimate tool to build and manage parties in Albion Online directly from your Discord server.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <NextAuthProvider>
            {children}
          </NextAuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
