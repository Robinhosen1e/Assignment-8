// import BannerSlider from "@/components/Slider";
import Slider from "@/component/Banner";
import Category from "@/component/Category";
import FlashSale from "@/component/flash Sale/FlashSale";
import TopSellingProduct from "@/component/topsell/TopSellingProduct";



export default function Home() {
  return (
    <div>
      <Slider />
      <Category  /> 
      <FlashSale />
      <TopSellingProduct />
    </div>
  )
}
