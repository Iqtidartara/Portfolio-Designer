import Backround from "@/components/Backround";
import Faq from "@/components/Faq";
import HomeSection from "@/components/HomeSection";
import RecentClients from "@/components/RecentClients";
import Specialities from "@/components/Specialities";

export default function Home() {
  return (
   <div>
    <HomeSection />
    <RecentClients />
    <Specialities />
    <Backround />
    <Faq/>
   </div>
  );
}
