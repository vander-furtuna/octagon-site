'use client';

import { AboutUs } from '../AboutUs';
import { Banner } from '../Banner';
import { CommonQuestions } from '../CommonQuestions';
import { OurServices } from '../OurServices';
import { Sidebar } from '../Sidebar';
import { Footer } from '../Footer';

export function Home() {
    return (
        <>
            <Sidebar />
            <Banner />
            <OurServices />
            <AboutUs />
            <CommonQuestions />
            <Footer />
        </>
    );
}
