import Laptop from "./../assets/laptop.svg"
import CenterMode from "./Slider"
import "./home.css"

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-image-container">
                <img src={Laptop} alt="laptop" className="home-image-container-img"/>
                <div className="laptop-screen">
                    <div className="laptop-screen-container">
                        <div className="paragraph-container">
                            <p> Hello! 👋🏽 </p>
                            <p> I'm Verica, a dedicated web developer 👩🏽‍💻, showcasing some of my previous projects below. It's a pleasure to meet you! ✨ </p>
                        </div>
                        <div className="projects-container">
                            <CenterMode/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}