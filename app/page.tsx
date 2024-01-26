import Backround from "@/components/Backround";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
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
    <Footer />
   </div>
  );
}
