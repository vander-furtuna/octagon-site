import { AboutUs } from '../AboutUs';
import { Banner } from '../Banner';
import { CommonQuestions } from '../CommonQuestions';
import { Footer } from '../Footer';
import { OurServices } from '../OurServices';
import { Sidebar } from '../Sidebar';

export function Home() {
  return (
    <>
      <Sidebar />
      <Banner />
      <OurServices />
      <CommonQuestions />
      <AboutUs />
      <Footer />
    </>
  );
}
