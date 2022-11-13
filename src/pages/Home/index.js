import "./Home.scss";
import Navbar from "../../components/Navbar";
import LandingImage from "../../assets/landing3.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [name, setName] = useState("");

    return (
        <div className="home">
            <Navbar />
            <div className="home__body">
                <div className="home__body__content">
                    <div className="home__body__content__title">Video Confrencing Meets <span>Artificial Intelligence</span></div>
                    <div className="home__body__content__description">Meet.oz uses Artificial Intelligence to assist you in understanding emotions of your workers, friends, and loved ones - whether by video, in person, or in the metaverse.</div>
                    <input
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={`${error && "home__body__content__inputerror"}`}
                    />
                    <button
                        onClick={() => {
                            if (name.length === 0) {
                                setError(true);
                                console.log("error set")
                            } else {
                                setError(false);
                                navigate(
                                    "/call",
                                    {
                                        state: {
                                            username: name
                                        }
                                    }
                                );
                            }
                        }}
                    >
                        Join a meeting
                    </button>
                </div>
                <div className="home__body__image">
                    <img src={LandingImage} />
                </div>
            </div>
        </div>
    );
};

export default Home;