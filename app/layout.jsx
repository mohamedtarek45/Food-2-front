import { Toaster } from "react-hot-toast";
import "./globals.css";
export const metadata = {
  icons: {
    icon: "/BuzzerFooter.png",
    shortcut: "/BuzzerFooter.png",
    apple: "/BuzzerFooter.png", 
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
