// import Image from "next/image";
// import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import { PopularCityList } from "./_components/PopularCityList";
import Header from "./_components/Header";
import { Globe } from "@/components/magicui/globe";
import GlobeObj from "./_components/GlobeObject";

export default function Home() {
  return (
   <div>
    <Header></Header>
   <Hero/>
   <PopularCityList/>
  
   </div>
  );
}