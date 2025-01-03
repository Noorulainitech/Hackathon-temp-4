import Image from "next/image";
import Hero from "./components/HomePage/HeroSec";
import Feature from "./components/HomePage/feature";
import Latest from "./components/HomePage/Latest";
import ShopesOffers from "./components/HomePage/ShopesOffer";
import TrendingProducts from "./components/HomePage/TrendingProducts";
import Promotions from "./components/HomePage/Promotions";
import DiscountItem from "./components/HomePage/DiscountItem";
import UniqueItem from "./components/HomePage/Unique";
import TopCategories from "./components/HomePage/topCategories";
import Newsletter from "./components/HomePage/newsletter";
import BlogCard from "./components/HomePage/blogcard";
import Link from 'next/link';


export default function Home() {
  return (

    <div className="grid mobile-sm:grid-cols-1 mobile-lg:grid-cols-2 tablet:grid-cols-3 laptop-sm:grid-cols-4 desktop-lg:grid-cols-5 gap-6">
      
      <Hero/>
      <Feature/>
      <Latest/>
      <ShopesOffers/>
      <UniqueItem/>
      <TrendingProducts/>
      <Promotions/>
      <DiscountItem/>
      <TopCategories/>
      <Newsletter/>
      <BlogCard/>
      </div>
  );
}
