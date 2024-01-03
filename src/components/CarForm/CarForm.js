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
        <p><FontAwesomeIcon icon={faCar} className="icon" /> Select your car type *</p>
        <input />
      </div>
      <div className="input-box">
        <p><FontAwesomeIcon icon={faLocationDot} className="icon" /> Pick-up *</p>
        <input type="select"/>
      </div>
      <div className="input-box">
        <p><FontAwesomeIcon icon={faLocationDot} className="icon" /> Drop-of *</p>
        <input />
      </div>
      <div className="input-box">
        <p><FontAwesomeIcon icon={faCalendarDays} className="icon" /> Pick-up *</p>
        <input type="date" />
      </div>
      <div className="input-box">
        <p><FontAwesomeIcon icon={faCalendarDays} className="icon" />  Drop-of *</p>
        <input type="date" />
      </div>
      <div className="button-div">
      <Button className="button" text="Search"></Button>
      </div>
    </article>
    </div>
  );
};
