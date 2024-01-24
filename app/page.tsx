import Backround from "@/components/Backround";
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
   </div>
  );
}
