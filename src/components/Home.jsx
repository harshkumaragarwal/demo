import { NavScrollExample } from "./Navbar";
import { HeaderAndFooterExample } from "./home-c1";
import { Footer } from "./Footer";
import { IndividualIntervalsExample } from "./Slides";
export function Home()
{
 return (
   <>
     {/* <NavScrollExample /> */}
     <HeaderAndFooterExample />
     <IndividualIntervalsExample />

     <HeaderAndFooterExample />
     {/* <Footer /> */}
   </>
 );
}