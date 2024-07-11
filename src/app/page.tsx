import { Grid } from "@mui/material";
import HeroSection from "./HeroSection";
import ProgramModules from "./ProgramModules";
import NavBar from "./NavBar";
import ProgramOverview from "./ProgramOverview";
import ProgramFor from "./ProgramFor";
import Pathway from "./Pathway";
import Accreditation  from "./Accreditation";
import Comparison from "./Comparison";
import Faqs from "./Faq";
import OutCome from "./OutCome";
import Testimonials from "./Testimonials";
import WhyAsti from "./WhyAsti";
import Alumni from "./Alumni";
export default function Home() {
  return (
    <>
      <Grid>
        <NavBar />
        <HeroSection />
        <ProgramOverview />
        {/* <ProgramModules /> */}
        <ProgramFor />
        <Pathway />
        <Accreditation />
        <Comparison />
        <OutCome />
        <Alumni />
        <Testimonials />
        <WhyAsti />
        <Faqs />
      </Grid>
    </>
  );
}
