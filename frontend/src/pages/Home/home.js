import AboutUs from "../../components/AboutUs";
import Counter from "../../components/Counter";
import HomeCarouel from "../../components/homeCarousel";
import Slider from "../../components/Slider";
import ContactUs from "../ContactUs/contactUs";
import PetsCards from "../../components/PetsCards";
import { useEffect } from "react";
import { getPets } from "../../store/actions/petActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './home.css';

export default function Home() {
    const dispatch = useDispatch();
    const pets = useSelector((state) => state.pets);

    useEffect(() => {
        dispatch(getPets("", "", "", "", "", 4));
    }, [dispatch]);

    // div.col:nth-child(4)

    return (
        <>
            <HomeCarouel />
            <div className="container mt-4">
                {pets.info ? (
                    <>
                        <div id="testA" className="mt-5">
                            <PetsCards pets={pets} />{" "}
                        </div>
                        <p className="position-relative my-4"><Link to="/pets/1" className="btn btn-primary position-absolute" style={{ right: '50%', transform: 'translate(50%, 0)' }}>More Pets</Link></p>
                    </>
                ) : null}
                <AboutUs />
                <Counter />
                <Slider />
                <ContactUs />
            </div>
        </>
    );
}