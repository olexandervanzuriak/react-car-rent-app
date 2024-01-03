import { Button } from "../UI/Button";
import car2 from "../../Imgs/car3.jpg";
import "./About.css";

export const About = () => {
  return (
    <article className="about">
      <div className="text-about">
        <h2>Plan your trip now</h2>
        <h1 style={{fontSize: "40px"}}>Save big with our car rental</h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimeted miles,
          flexible pick-up options and much more.
        </p>
        <Button className="button" text="Book ride"></Button>
        <Button className="learn-more-button" text="Learn more"></Button>
      </div>
      <img className="car1" src={car2} />
    </article>
  );
};
