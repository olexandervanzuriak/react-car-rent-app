import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faCarSide,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import "./Benefits.css";

export const Benefits = () => {
  return (
    <div className="benefits">
      <h2>Plan your trip now</h2>
      <h1>Quick & easy car rental</h1>
      <div className="information">
        <div className="information-part">
          <FontAwesomeIcon className="icons" icon={faCarSide} />
          <h1>Select Car</h1>
          <p>
            We offers a big range of vehicles for all<br/> your driving needs. We
            have the <br/> perfect car to meet your needs
          </p>
        </div>
        <div className="information-part">
          <FontAwesomeIcon className="icons" icon={faUserTie} />
          <h1>Contact Operator</h1>
          <p>
            Our knowledgable and friendly <br/> operators are always ready to help <br/>
            with any questions or concerns
          </p>
        </div>
        <div className="information-part">
          <FontAwesomeIcon className="icons" icon={faRoad} />
          <h1>Let's Drive</h1>
          <p>
            Whether you're hitting the open road. <br/> We've got you covered with our
            wide <br /> range of cars
          </p>
        </div>
      </div>
    </div>
  );
};
