import AboutUs from "../components/AboutUs";
import Counter from "../components/Counter";
import HomeCarouel from "../components/homeCarousel";
import Slider from "../components/Slider";
import ContactUs from "./ContactUs/contactUs";
import PetsCards from "../components/PetsCards";
import { useEffect } from "react";
import { getPets } from "../store/actions/petActions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
    const pets = useSelector((state) => state.pets);
    useEffect(() => {
        dispatch(getPets("", "", "", "", "", 4));
    }, [dispatch]);
    return (
        <>
            <HomeCarouel />
            <div className="container mt-4">
                {pets.info ? (
                    <div className="mt-5">
                        <PetsCards pets={pets} />{" "}
                    </div>
                ) : null}
                <AboutUs />
                <Counter />
                <Slider />
                <ContactUs />
            </div>
        </>
    );
}