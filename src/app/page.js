import Hero from "./components/hero/Hero";
// import Page from "@/app/product/page";
import Product from "./product/Product";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Product />
    </main>
  );
}
