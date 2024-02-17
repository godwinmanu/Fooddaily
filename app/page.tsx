import MemberDiscount from "@/components/MemberDiscount";
import "./home.scss";
import Jumbotron from "@/components/Jumbotron";
import ServiceQualification from "@/components/ServiceQualification";
import Testimonies from "@/components/Testimonies";
import TopFoods from "@/components/TopFoods";
import BlogArticle from "@/components/BlogArticle";
import FoodMenu from "@/components/FoodMenu";

export default function Home() {
  return (
    <main className="">
      <Jumbotron />
      <ServiceQualification />
      <TopFoods />
      <BlogArticle />
      <FoodMenu />
      <Testimonies />
      <MemberDiscount />
    </main>
  );
}
