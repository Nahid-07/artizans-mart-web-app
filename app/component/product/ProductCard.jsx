import getData from "@/app/lib/getProductData";
import Card from "./Card";


const ProductCard =async () => {
    const products = await getData()
    console.log(products);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {
                products?.map(product => <Card key={product.id} product={product} />)
            }
        </div>
    );
};

export default ProductCard;