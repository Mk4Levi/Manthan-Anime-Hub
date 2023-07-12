import React from "react";
import { Fade } from "react-awesome-reveal";
import { data } from "../database";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "../css/Recommendation.css";
import { RecommendationCard } from "../components";

const Recommendation = () => (
  <div
    className="app_schedule app__wrapper section__padding"
    style={{ overflow: "hidden" }}
    id="recommendation"
  >
    <Fade bottom>
      <h1 className="page-title">My Top Recommendations</h1>
      <br />
    </Fade>
    <VerticalTimeline>
      {data.recommData.map((event) => (
        <RecommendationCard key={event.id} event={event} />
      ))}
    </VerticalTimeline>
  </div>
);

export default Recommendation;
