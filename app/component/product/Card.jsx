import { calculation } from "@/app/calculateFunction/calculation";
import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import CommonButton from "../buttons/commonButton";

const Card = ({ product }) => {
  // start rating function
  const starArray = Array.from({ length: product.rating }, (_, index) => {
    return (
      <span key={index}>
        <IoIosStar />
      </span>
    );
  });
  return (
    <div className="w-full rounded-r-lg overflow-hidden">
      <Link href={{pathname:'/productdetails', query:{product_id: product?.id}}}>
        <div className="w-full h-96 group overflow-hidden">
          <Image
            src={product.image}
            alt="This is a product image"
            width={500}
            height={500}
            className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
        </div>
      </Link>
      <div className="bg-white border-[1px] px-1">
        <h3 className="my-2 font-semibold">{product.title}</h3>
        <p>
          {product.decription.length > 100
            ? product.decription.substr(0, 100) + "..."
            : product.decription}
        </p>
        <div className="flex justify-between items-center mt-3">
          <p>{calculation(product?.oldPrice, product?.newPrice)}% off</p>
          <div className="flex gap-2 items-center">
            <strike className="text-gray-500">{product.oldPrice} TK.</strike>
            <p className="border-orange-500 border-[1px] rounded px-2">
              {product.newPrice} TK.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <CommonButton children={"Add to cart"}/>
          <div className="flex items-center text-yellow-500">
            <p className="text-gray-400">({product.rating})</p> {starArray}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
