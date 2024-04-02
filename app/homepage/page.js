import Banner from "../component/Banner";
import SearchBar from "../component/SearchBar";
import ProductCard from "../component/product/ProductCard";

export default function HomePage() {
  return (
    <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
        <SearchBar />
        <ProductCard/>
        </div>
    </div>
  );
}
