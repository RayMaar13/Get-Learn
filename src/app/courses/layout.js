import Footer from "../_components/Footer";

export default function helloLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
