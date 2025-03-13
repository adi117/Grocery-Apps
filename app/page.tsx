import Product from "@/features/product-card";
import Header from "@/features/headers";

export default async function Home() {
  return (
    <main>
      <Header/>
      <Product/>
    </main>
  );
}
