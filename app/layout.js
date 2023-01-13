import { Navbar } from "../components";
import { Footer } from "../sections";
import "../styles/globals.scss";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className="flex flex-col px-10">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
