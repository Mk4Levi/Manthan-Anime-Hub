import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { firebaseApp } from "../config";
import "../css/Form.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const db = getFirestore(firebaseApp);

const Form = () => {
  const [formData, setFormData] = useState([]);

  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [cityName, setCityName] = useState("");
  const [gender, setGender] = useState("");
  const [anime1, setAnime1] = useState("");
  const [anime2, setAnime2] = useState("");
  const [anime3, setAnime3] = useState("");
  const [anime4, setAnime4] = useState("");
  const [anime5, setAnime5] = useState("");
  const [anime6, setAnime6] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [otherLink, setOtherLink] = useState("");

  // Handling Input-Change
  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "emailId") {
      setEmailId(value);
    }
    if (name === "cityName") {
      setCityName(value);
    }
    if (name === "gender") {
      setGender(value);
    }
    if (name === "anime1") {
      setAnime1(value);
    }
    if (name === "anime2") {
      setAnime2(value);
    }
    if (name === "anime3") {
      setAnime3(value);
    }
    if (name === "anime4") {
      setAnime4(value);
    }
    if (name === "anime5") {
      setAnime5(value);
    }
    if (name === "anime6") {
      setAnime6(value);
    }
    if (name === "contactNumber") {
      setContactNumber(Number(value));
    }
    if (name === "alternateNumber") {
      setAlternateNumber(Number(value));
    }
    if (name === "githubLink") {
      setGithubLink(value);
    }
    if (name === "twitterLink") {
      setTwitterLink(value);
    }
    if (name === "linkedinLink") {
      setLinkedinLink(value);
    }
    if (name === "otherLink") {
      setOtherLink(value);
    }

    var selectElement = document.getElementById("mySelect");
    if (selectElement.value !== "") {
      selectElement.classList.add("selected");
    } else {
      selectElement.classList.remove("selected");
    }
  }

  // Form-Data
  useEffect(() => {
    // eslint-disable-next-line
    const getFormData = async () => {
      try {
        const data = await getDocs(collection(db, "anime-community"));
        const filteredData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFormData(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
  }, []);

  // generating Timestamp-ID
  const generateTimestampId = () => {
    const timestamp = firebase.firestore.Timestamp.now();

    // Convert the timestamp to a string or any format you desire :-
    // const timestampString = timestamp.toDate().getTime().toString();
    const timestampString = timestamp.toDate().toString();

    // Clean up the string to remove any invalid characters
    const cleanedTimestampString = timestampString.replace(/[^a-zA-Z0-9]/g, "");
    return cleanedTimestampString;
  };

  // Handling Form-github
  async function handleFormSubmit(e) {
    e.preventDefault();
    const generatedId = generateTimestampId();
    const id =
      name.slice(0, 10) +
      ", " +
      generatedId.slice(6, 8) +
      "-" +
      generatedId.slice(3, 6) +
      "-" +
      generatedId.slice(8, 12) +
      ", " +
      generatedId.slice(12, 14) +
      ":" +
      generatedId.slice(14, 16) +
      ", " +
      generatedId.slice(0, 3);
    console.log(id);

    try {
      // await addDoc(collection(db, "anime-community"), {
      await setDoc(doc(db, "anime-community", id), {
        name: name,
        email: emailId,
        city: cityName,
        event: gender,
        anime1: anime1,
        anime2: anime2,
        anime3: anime3,
        anime4: anime4,
        anime5: anime5,
        anime6: anime6,
        phone: contactNumber,
        altPhone: alternateNumber,
        githubLink: githubLink,
        linkedinLink: linkedinLink,
        twitterLink: twitterLink,
        otherLink: otherLink,
      });
      console.log("FORM SUCCESSFULLY SUBMITTED !!");
      alert("FORM SUCCESSFULLY SUBMITTED !!");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Error occurred while submitting the form !!");
    }
  }

  return (
    <div className="registration-form">
      <form onSubmit={(e) => handleFormSubmit(e)} className="form">
        <div className="inputContainer">
          <div className="containerInput">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              autoComplete="off"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="containerInput">
            <input
              name="emailId"
              value={formData.emailId}
              onChange={handleInputChange}
              required
              autoComplete="off"
              placeholder="Your Email"
              type="email"
            />
          </div>
          <div className="containerInput">
            <input
              name="cityName"
              value={formData.cityName}
              onChange={handleInputChange}
              required
              autoComplete="off"
              placeholder="City, State"
              type="text"
            />
          </div>
          <div className="containerInput selectInput">
            <select
              name="gender"
              id="mySelect"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="containerInput">
            <input
              name="anime1"
              value={formData.anime1}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Anime Recom.. 1"
              type="text"
            />
          </div>
          <div className="containerInput">
            <input
              name="anime2"
              value={formData.anime2}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Anime Recom.. 2"
              type="text"
            />
          </div>
          <div className="containerInput">
            <input
              name="anime3"
              value={formData.anime3}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Anime Recom.. 3"
              type="text"
            />
          </div>
          <div className="containerInput">
            <input
              name="anime4"
              value={formData.anime4}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Anime Recom.. 4"
              type="text"
            />
          </div>
          <div className="containerInput">
            <input
              name="anime5"
              value={formData.anime5}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Best Character"
              type="text"
            />
          </div>
          <div className="containerInput">
            <input
              name="anime6"
              value={formData.anime6}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Your Feedback"
              type="text"
            />
          </div>
          <div className="containerInput">
            <input
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Contact No."
              type="tel"
            />
          </div>
          <div className="containerInput">
            <input
              name="alternateNumber"
              value={formData.alternateNumber}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Alternate No."
              type="tel"
            />
          </div>
          <div className="containerInput">
            <input
              name="githubLink"
              value={formData.githubLink}
              onChange={handleInputChange}
              required
              autoComplete="off"
              placeholder="GitHub Profile"
              type="url"
            />
          </div>
          <div className="containerInput">
            <input
              name="linkedinLink"
              value={formData.linkedinLink}
              onChange={handleInputChange}
              required
              autoComplete="off"
              placeholder="LinkedIn Profile"
              type="url"
            />
          </div>
          <div className="containerInput">
            <input
              name="twitterLink"
              value={formData.twitterLink}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Twitter Profile"
              type="url"
            />
          </div>
          <div className="containerInput">
            <input
              name="otherLink"
              value={formData.otherLink}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Other Links"
              type="url"
            />
          </div>
        </div>
        <div className="buttonContainer">
          <button className="btn">
            <strong>SUBMIT</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
