import { useState } from "react";
import Nav from "../components/Nav";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_id: "",
    gender_interest: "",
    email: "",
    url: "",
    about: "",
    matches: [],
  });
  const handleSubmit = () => {
    console.log("submitted");
  };
  const handleChange = (e) => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData);
  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />
            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>
            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-id"
                name="gender-id"
                value="man"
                onChange={handleChange}
                checked={formData.gender_id === "man"}
              />
              <label htmlFor="man-gender-id">Man</label>
              <input
                type="radio"
                id="woman-gender-id"
                name="gender-id"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_id === "woman"}
              />
              <label htmlFor="woman-gender-id">Woman</label>
              <input
                type="radio"
                id="more-gender-id"
                name="gender-id"
                value="more"
                onChange={handleChange}
                checked={formData.gender_id === "woman"}
              />
              <label htmlFor="more-gender-id">More</label>
            </div>
            <label htmlFor="show-gender-id">Show gender on my profile</label>
            <input
              type="checkbox"
              id="show-gender"
              name="show_gender"
              value="more"
              onChange={handleChange}
              checked={formData.show_gender}
            />
            <label htmlFor="show-gender-id">Show Me</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-interest"
                name="gender-interest"
                value="man"
                onChange={handleChange}
                checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                type="radio"
                id="woman-gender-interest"
                name="gender-interest"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                type="radio"
                id="everyone-gender-interest"
                name="gender-interest"
                value="everyone"
                onChange={handleChange}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-id">Everyone</label>
            </div>
            <label htmlFor="about">About Me</label>
            <input
              type="text"
              id="about"
              name="about"
              required={true}
              placeholder="I like long walks.."
              value={formData.about}
              onChange={handleChange}
            />
            <input type="submit" />
          </section>
          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              <img src={formData.url} alt="profile-pic-preview" />
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
