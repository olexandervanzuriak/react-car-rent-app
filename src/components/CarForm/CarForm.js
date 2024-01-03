import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import "./CarForm.css";
import { Button } from "../UI/Button";

export const CarForm = () => {
  return (
    <div className="form">
      <h1 className="book-car-text">Book a car</h1>
      <article className="car-form">
        <div className="input-box">
          <p>
            <FontAwesomeIcon icon={faCar} className="icon" /> Select your car
            type *
          </p>
          <select id="pet-select">
            <option value="">Select your car type</option>
            <option value=""> Alabama</option>
            <option value="cat">Florida</option>
            <option value="hamster">Vermont</option>
            <option value="parrot">Virginia</option>
            <option value="spider">Mississippi</option>
            <option value="goldfish">New York</option>
          </select>
        </div>
        <div className="input-box">
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="icon" /> Pick-up *
          </p>
          <select id="pet-select">
            <option value="">Select pick up location</option>
            <option value=""> Alabama</option>
            <option value="cat">Florida</option>
            <option value="hamster">Vermont</option>
            <option value="parrot">Virginia</option>
            <option value="spider">Mississippi</option>
            <option value="goldfish">New York</option>
          </select>
        </div>
        <div className="input-box">
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="icon" /> Drop-off *
          </p>
          <select id="pet-select">
            <option value="">Select drop off location</option>
            <option value="">Audi</option>
            <option value="cat">Passat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
        <div className="input-box">
          <p>
            <FontAwesomeIcon icon={faCalendarDays} className="icon" /> Pick-up *
          </p>
          <input type="date" />
        </div>
        <div className="input-box">
          <p>
            <FontAwesomeIcon icon={faCalendarDays} className="icon" /> Drop-of *
          </p>
          <input type="date" />
        </div>
        <div className="button-div">
          <Button className="button" text="Search"></Button>
        </div>
      </article>
    </div>
  );
};
