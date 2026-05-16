import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-[120px] font-black leading-none text-[#f3790d]">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4 text-base md:text-[15px] leading-7">
          Sorry, the page you are looking for doesn’t exist or has been moved.
          Please check the URL or return to the homepage.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="bg-[#f3790d] text-white px-4 py-2 rounded-2xl font-semibold hover:scale-105 duration-300 shadow-lg"
          >
            Back To Home
          </Link>

          <Link
            href="/products"
            className="border-2 border-[#f3790d] text-[15px] text-[#f3790d] px-4 py-2 rounded-2xl font-semibold hover:bg-[#f3790d] hover:text-white duration-300"
          >
            Browse Products
          </Link>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-40 h-1 rounded-full bg-[#f3790d]"></div>
        </div>
      </div>
    </div>
  );
}
