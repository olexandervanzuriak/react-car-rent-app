import car2 from "../../Imgs/car3.jpg"
import "./About.css"

export const About = () => {
    return <div className="about">
        <div className="text-about">
        <h3>Plan your trip now</h3>
        <h1>Save big with our car rental</h1>
        <p>Rent the car of your dreams. Unbeatable prices, unlimeted miles, flexible pick-up options and much more</p>
        </div>
        <img className="car1" src={car2}/>
    </div>
}