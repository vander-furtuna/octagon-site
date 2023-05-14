import { Banner } from '../Banner';
import { OurServices } from '../OurServices';
import { Sidebar } from '../Sidebar';

export function Home() {
  return (
    <>
      <Sidebar />
      <Banner />
      <OurServices />
    </>
  );
}
