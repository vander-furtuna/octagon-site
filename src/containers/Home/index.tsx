import { Banner } from "../Banner";
import { CommonQuestions } from "../CommonQuestions";
import { OurServices } from "../OurServices";
import { Sidebar } from "../Sidebar";

export function Home() {
  return (
    <>
      <Sidebar />
      <Banner />
      <OurServices />
      <CommonQuestions />
    </>
  );
}
