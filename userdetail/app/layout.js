import './styles/style.css';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Github User Details",
  description: "A simple app to get the details of a github user",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
