import "./home.scss";
import Jumbotron from "@/components/Jumbotron";
import ServiceQualification from "@/components/ServiceQualification";
import Testimonies from "@/components/Testimonies";
import TopFoods from "@/components/TopFoods";

export default function Home() {
  return (
    <main className="">
      <Jumbotron />
      <ServiceQualification />
      <TopFoods />
      <Testimonies />
    </main>
  );
}
