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
import { ToastContainer, Bounce } from "react-toastify";
import ShowToast from "./ToastAlert";

const db = getFirestore(firebaseApp);

const Form = () => {
  const [formData, setFormData] = useState([]);

  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [cityName, setCityName] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [otherLink, setOtherLink] = useState("");

  // Handling Input-Change
  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "emailId") setEmailId(value);
    if (name === "cityName") setCityName(value);
    if (name === "gender") setGender(value);
    if (name === "contactNumber") setContactNumber(Number(value));
    if (name === "alternateNumber") setAlternateNumber(Number(value));
    if (name === "githubLink") setGithubLink(value);
    if (name === "linkedinLink") setLinkedinLink(value);
    if (name === "otherLink") setOtherLink(value);

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
        const data = await getDocs(collection(db, "anime-hub-db"));
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
    const docId =
      name.slice(0, 10) +
      ", " +
      generatedId.slice(6, 8) +
      "-" +
      generatedId.slice(3, 6) +
      "-" +
      generatedId.slice(10, 12) +
      ", " +
      generatedId.slice(12, 14) +
      ":" +
      generatedId.slice(14, 16) +
      ", " +
      generatedId.slice(0, 3);

    console.log(docId);

    try {
      // await addDoc(collection(db, "anime-community"), {
      await setDoc(doc(db, "anime-hub-db", docId), {
        name: name,
        email: emailId,
        city: cityName,
        event: gender,
        phone: contactNumber,
        githubLink: githubLink,
        linkedinLink: linkedinLink,
        otherLink: otherLink,
      });

      // throw Error("Error Created");
      console.log("FORM SUBMITTED Successfully !!");
      ShowToast("FORM SUBMITTED Successfully !!", "success-toast");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.error(err);
      ShowToast("ERROR occurred !!", "failure-toast");
    }
  }

  return (
    <>
      <ToastContainer transition={Bounce} />
      <div className="registration-form">
        <form onSubmit={(e) => handleFormSubmit(e)} className="form">
          <div className="inputContainer">
            <div className="containerInput">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="Your Name"
                type="text"
                required
              />
            </div>
            <div className="containerInput">
              <input
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="Your Email"
                type="email"
                required
              />
            </div>
            <div className="containerInput">
              <input
                name="cityName"
                value={formData.cityName}
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="City, State"
                type="text"
                required
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
                name="githubLink"
                value={formData.githubLink}
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="GitHub Profile"
                type="url"
                required
              />
            </div>
            <div className="containerInput">
              <input
                name="linkedinLink"
                value={formData.linkedinLink}
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="LinkedIn Profile"
                type="url"
                required
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
              <span>SUBMIT</span>
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
    </>
  );
};

export default Form;
