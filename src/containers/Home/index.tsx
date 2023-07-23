'use client';

import { useEffect, useState } from 'react';
import { AboutUs } from '../AboutUs';
import { Banner } from '../Banner';
import { CommonQuestions } from '../CommonQuestions';
import { Footer } from '../Footer';
import { OurServices } from '../OurServices';
import { Sidebar } from '../Sidebar';

export function Home() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);

    // if (isLoading) {
    //     return <Loading />;
    // }

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
