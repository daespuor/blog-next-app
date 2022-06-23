/** @jsxImportSource theme-ui */

import Seo from "../SEO";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ title, children }) {
  return (
    <div sx={{ variant: "containers.content" }}>
      <Seo title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
