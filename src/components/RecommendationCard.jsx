import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Zoom, Slide } from "react-awesome-reveal";
import "react-vertical-timeline-component/style.min.css";
import "../css/RecommendationCard.css";

const RecommendationCard = ({ event }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1f32",
        color: "#fff",
        border: "0",
      }}
      date={event.city}
      icon={
        <Zoom duration="700" className="timeline-icon">
          <img src={event.img} alt="city" className="timeline-icon" />
        </Zoom>
      }
    >
      <Slide>
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <img src={event.img} alt="city" className="timeline-img" />
            </div>

            <div className="backSide">
              <p id="card-data" className="title">
                {event.city}
              </p>
              <p id="card-data" className="title">
                Number of Ep : {event.date}
              </p>
              <p id="card-data">
                My Rating: <span>{event.result}</span>
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </VerticalTimelineElement>
  );
};

export default RecommendationCard;
