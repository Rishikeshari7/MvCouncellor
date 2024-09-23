import ImageBgSection from "@/components/homepage/ImageBgSection";
import OurNumberAndPlans from "@/components/homepage/OurNumberAndPlans";
import PsychologistAndCustomers from "@/components/homepage/PsychologistAndCustomers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col" >
      <ImageBgSection/>
      <PsychologistAndCustomers/>
      <OurNumberAndPlans/>
    </div>
  );
}
