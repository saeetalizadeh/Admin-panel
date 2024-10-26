import { deleteProduct } from "../../services/queries";
function DeleteProductModal({
  deleteProductModal,
  setProductDeleteModal,
  refetch,
}) {
  const deleteHandler = async () => {
    await deleteProduct(deleteProductModal[1]);
    await refetch();
    setProductDeleteModal([false, null]);
  };

  return (
    <>
      <div className="absolute w-full z-30 overflow-y-hidden h-screen bg-black/30 flex justify-center items-center">
        <div className="flex flex-col w-[472px] rounded-3xl bg-[#ffffff] px-10 py-6">
          <span className="mx-auto pl-6 mb-[40px] mt-5">
            <img
              className="size-24"
              src="/images/Close.svg"
              alt="delete icon"
            />
          </span>
          <h2 className="font-normal mb-[25px] text-[#282828] text-[20px] text-center">
            آیا از حذف این محصول مطمئنید؟
          </h2>
          <div className="flex justify-between items-center gap-x-5 mb-[10px]">
            <button
              className="bg-[#F43F5E] hover:bg-[#F43F5E]/85 transition-colors delay-75 w-full rounded-xl text-[#ffffff] h-[41px] font-semibold text-[16px]"
              onClick={deleteHandler}
            >
              حذف
            </button>
            <button
              className="bg-[#DFDFDF] hover:bg-[#DFDFDF]/70 transition-colors delay-75 w-full rounded-xl h-[41px] font-semibold text-[16px]"
              onClick={() => setProductDeleteModal([false, null])}
            >
              لغو
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteProductModal;
