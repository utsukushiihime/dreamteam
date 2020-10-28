import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="text-center my-5" role="main">
        {children}
      </main>
      <Footer />
    </>
  );
}
