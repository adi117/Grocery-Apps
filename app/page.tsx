import Product from "@/features/product-card";
import Filter from "@/features/headers/components/filter";


export default async function Home() {
  return (
    <main>
      <Filter/>
      <Product/>
    </main>
  );
}
