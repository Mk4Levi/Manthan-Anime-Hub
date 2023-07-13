import React from "react";
import "../css/Members.css";
import { data } from "../database";
import { MemberCard } from "../components";

const Members = () => (
  <div className="contact-us-page" id="members">
    <div>
      <br />
      <br />
      <h1 className="page-title">Top Members</h1>
    </div>
    <br />
    <br />
    <br />
    <div className="contactCard-container">
      {data.membersData.map((data) => {
        return <MemberCard key={data.id} data={data} />;
      })}
    </div>
  </div>
);

export default Members;
