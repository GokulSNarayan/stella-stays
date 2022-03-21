import Hero from "./Hero";
import Explore from "./Explore";
import Showcase from "./Showcase";
import Gallery from "./Gallery";

export default function Home(props) {
  console.log("🚀 ~ file: Home.jsx ~ line 7 ~ Home ~ props", props);
  return (
    <>
      <Hero />
      <Explore />
      <Showcase />
      <Gallery />
    </>
  );
}
