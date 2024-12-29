import Hero from "@/components/self/heroSection";
import ModeToggle from "@/components/self/ModeToggle";
import NavBar from "@/components/self/navBar";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(resolve,5000);
  });
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <NavBar></NavBar>
      <Hero></Hero>
      <ModeToggle></ModeToggle>
    </div>
  );
}
