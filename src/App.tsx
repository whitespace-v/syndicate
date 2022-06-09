import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Reviews from "./components/Reviews/Reviews";
import SetReview from "./components/SetReview/SetReview";
import Information from "./components/Information/Information";
import Contacts from "./components/Contacts/Contacts";
import Services from "./components/Services/Services";
import PortfolioMenu from "./components/Portfolio/PortfolioMenu";

const App = () => {
    return (
        <>
            <Header/>
            <Layout>
                <Intro/>
                <Services/>
                <PortfolioMenu/>
                <Information/>
                <Reviews/>
                <SetReview/>
                <Contacts/>
            </Layout>
        </>
    );
}

export default App;
