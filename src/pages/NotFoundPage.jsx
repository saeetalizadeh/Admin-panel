import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div className="flex justify-center gap-x-20 min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="">
        <p className="font-semibold text-5xl text-black myShadow404">404</p>
        <h1 className="mt-4 text-gray-500 text-balance font-semibold tracking-tight  text-5xl drop-shadow-xl myShadow">
          صفحه مورد نظر یافت نشد!
        </h1>

        <div className="mt-10 flex items-center gap-x-6">
          <Link
            to="/"
            className=" transition-all delay-75 flex items-center bg-[#2fbcf4]/80 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#55a3f0] rounded-xl "
          >
            بازگشت به صفحه اصلی
            <span className="mt-1 text-xl pr-3">
              <IoArrowBackOutline />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
