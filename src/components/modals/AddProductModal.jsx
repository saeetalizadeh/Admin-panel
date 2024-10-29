import { useState } from "react";
import { postProduct } from "../../services/mutations";

function AddProductModal({ setAdd }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const { mutate } = postProduct(product);

  const changeHandler = (e) => {
    setProduct((product) => ({ ...product, [e.target.name]: e.target.value }));
  };
  const createProductHandler = () => {
    const { name, price } = product;

    if (!name || !price) {
      alert("Name and price doesnt exist");

      return;
    }

    mutate(product, {
      onSuccess: (data) => console.log(data),
      onError: (error) => console.log(error),
    });
    setAdd(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div className="absolute w-full z-30 overflow-y-hidden h-screen bg-black/30 flex justify-center items-center">
      <div className="flex flex-col w-[460px] h-[448px] rounded-3xl bg-[#ffffff] px-10 py-6">
        <h1 className="text-center font-medium text-[#282828] text-[20px] mb-7">
          ایجاد محصول جدید
        </h1>
        <label className="font-medium text-[#282828] text-[14px] mb-2">
          نام کالا
        </label>
        <input
          onChange={changeHandler}
          name="name"
          value={product.name}
          className="h-[42px] bg-[#f2f2f2] rounded-lg mb-4 placeholder:font-light text-[14px] text-[#8d8d8d] pr-2"
          placeholder="نام کالا"
          type="text"
        />
        <label className="font-medium text-[#282828] text-[14px] mb-2">
          تعداد موجودی
        </label>
        <input
          onChange={changeHandler}
          name="quantity"
          value={product.quantity}
          className="h-[42px] bg-[#f2f2f2] rounded-lg mb-4 placeholder:font-light text-[14px] text-[#8d8d8d] pr-2"
          placeholder="تعداد"
          type="number"
        />
        <label className="font-medium text-[#282828] text-[14px] mb-2">
          قیمت
        </label>
        <input
          onChange={changeHandler}
          name="price"
          value={product.price}
          className="h-[42px] bg-[#f2f2f2] rounded-lg placeholder:font-light text-[14px] text-[#8d8d8d] pr-2"
          placeholder="قیمت"
          type="number"
        />
        <div className="flex justify-between gap-x-5 mt-10">
          <button
            onClick={createProductHandler}
            className="bg-[#55A3F0] w-full h-10 rounded-xl text-[14px] font-medium text-[#ffffff] cursor-pointer hover:bg-[#6eb0f3] transition-colors delay-75"
          >
            ایجاد
          </button>
          <button
            onClick={() => {
              setAdd(false);
              document.body.style.overflow = "auto";
            }}
            className="bg-[#DFDFDF] w-full h-10 rounded-xl text-[14px] font-medium text-[#282828]/80 cursor-pointer hover:bg-[#ececec] transition-colors delay-75"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
