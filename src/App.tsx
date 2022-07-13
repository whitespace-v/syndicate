import React, {useRef} from 'react';
import Layout from "./hoc/Layout/Layout";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Reviews from "./components/Reviews/Reviews";
import Information from "./components/Information/Information";
import Contacts from "./components/Contacts/Contacts";
import Services from "./components/Services/Services";
import PortfolioMenu from "./components/Portfolio/PortfolioMenu";
import Space from "./components/Space/Space";
import Action from "./components/Action/Action";
import ServiceControllerContainer from "./components/Services/ServiceControllerContainer";
import UIHint from './UIKit/UIHint';
import Modals from "./components/Modals/Modals";
import UINotification from "./UIKit/UINotification";

const App = () => {
    const IntroRef = useRef<any>(null)
    const ContactsRef = useRef<any>(null)
    const ServicesRef = useRef<any>(null)
    const PortfolioRef = useRef<any>(null)
    const InformationRef = useRef<any>(null)
    const ReviewsRef = useRef<any>(null)

    const IntroScroll = () => IntroRef.current.scrollIntoView({block:'start'})
    const ContactsScroll = () => ContactsRef.current.scrollIntoView(true)
    const ServicesScroll = () => ServicesRef.current.scrollIntoView(true)
    const PortfolioScroll = () => PortfolioRef.current.scrollIntoView(true)
    const InformationScroll = () => InformationRef.current.scrollIntoView(true)
    const ReviewsScroll = () => ReviewsRef.current.scrollIntoView(true)
    return (
        <>
            <Header
                IntroScroll={IntroScroll}
                ContactsScroll={ContactsScroll}
                ServicesScroll={ServicesScroll}
                PortfolioScroll={PortfolioScroll}
                InformationScroll={InformationScroll}
                ReviewsScroll={ReviewsScroll}
            />
            <Space/>
            <Intro refProp={IntroRef}/>
            <Layout>
                <Services refProp={ServicesRef}/>
                <ServiceControllerContainer/>
                <PortfolioMenu refProp={PortfolioRef}/>
                <Information refProp={InformationRef}/>
                <Reviews refProp={ReviewsRef}/>
                <Action/>
                <Contacts refProp={ContactsRef}/>
            </Layout>
            <Modals/>
            <UIHint/>
            <UINotification/>
        </>
    );
}

export default App;
