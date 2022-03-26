import Hero from "./Hero";
import Explore from "./Explore";
import Showcase from "./Showcase";
import Gallery from "./Gallery";
import { useAtom } from "jotai";
import { bookingRangeAtom } from "../../store";

export default function Home(props) {
  const [bookingDates, setBookingDates] = useAtom(bookingRangeAtom);
  useEffect(() => {
    setBookingDates([null, null]);
  }, []);
  return (
    <>
      <Hero />
      <Explore />
      <Showcase />
      <Gallery />
    </>
  );
}
