import React from "react";
import getProductDetails from "../lib/getProductDetails";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import CommonButton from "../component/buttons/commonButton";

const ProductDetails = async ({ searchParams }) => {
  const idString = searchParams.product_id;
  const id = Number(idString);
  const product = await getProductDetails(id);
  const starArray = Array.from({ length: product.rating }, (_, index) => {
    return (
      <span key={index}>
        <IoIosStar />
      </span>
    );
  });
  return (
    <div className="max-w-7xl mx-auto bg-gray-100 p-4 rounded-lg m-4">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="">
          <Image
            src={product.image}
            width={500}
            height={500}
            alt="product Image"
            className="w-full max-h-[700px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center gap-y-5">
          <h2 className="text-2xl font-bold ">{product?.title}</h2>
          <p className=" text-lg text-gray-400">{product.decription}</p>
          <div className="flex justify-between items-center">
            <p className="text-orange-500 text-xl">
              Price: {product.newPrice} TK.
            </p>
            <p className="text-lg text-gray-400">{product.category}</p>
          </div>
          <div className="flex justify-between items-center">
            <CommonButton children={'Buy now'}/>
            <div className="flex items-center text-yellow-500">
              <p className="text-gray-400">({product.rating})</p> {starArray}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
