import AboutUs from "../components/AboutUs"
import Counter from "../components/Counter"
import HomeCarouel from "../components/homeCarousel"
import Slider from "../components/Slider"
import ContactUs from "./ContactUs/contactUs"

export default function Home() {

    return (
        <>
        <HomeCarouel />
        <div className="container mt-4">
            <AboutUs />
            <Counter />
            <Slider />
            <ContactUs />
        </div>
        </>
    )
}