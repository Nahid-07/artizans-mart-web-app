import getData from "@/app/lib/getProductData";
import Card from "./Card";


const ProductCard =async () => {
    const products = await getData()
    console.log(products);
    return (
        <div className="bg-gray-200 p-4 my-12 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                products?.map(product => <Card key={product.id} product={product} />)
            }
        </div>
        </div>
    );
};

export default ProductCard;