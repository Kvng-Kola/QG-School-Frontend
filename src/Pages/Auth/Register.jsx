import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

export default function Register() {
  const navigate = useNavigate();
  // form validation and submission
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    gender: "",
  });
  // Form Data Destructuring
  const {
    firstname,
    lastname,
    middlename,
    email,
    phone,
    password,
    confirmPassword,
    address,
    gender,
  } = formData;
  // Form Error State
  const [error, setError] = useState("");
  const [emailErr, setEmailErr] = useState();
  const [phoneErr, setPhoneErr] = useState();
  const [passwordErr, setPasswordErr] = useState();
  const [cpasswordErr, setCpasswordErr] = useState();
  // Registration Response
  const [response, setResponse] = useState();
  // function to handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Function to handle handle user registration and submission
  async function handleFormSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("middlename", middlename);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("cpassword", confirmPassword);
    formData.append("address", address);
    formData.append("gender", gender);
    try {
      // send the FormData(Userdata) to the database with Axios
      let result = await axios.post(
        "http://localhost:8000/api/register",
        formData
      );
      setError("");
      setResponse("Registration Successful");
      console.log(result.data);
      // clear the form inputs after successful registration
      setFormData({
        firstname: "",
        lastname: "",
        middlename: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        address: "",
        gender: "",
      });
      // clear the error messages after successful registration
      setError("");
      setEmailErr("");
      setPhoneErr("");
      setPasswordErr("");
      setCpasswordErr("");
      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      // check for the error Responses and the error messages
      if (error.response && error.response.data) {
        const errors = error.response.data.errors;
        console.log(errors);
        errors.email ? setEmailErr(errors.email[0]) : setEmailErr("");
        errors.password
          ? setPasswordErr(errors.password[0])
          : setPasswordErr("");
        errors.cpassword
          ? setCpasswordErr(errors.cpassword[0])
          : setCpasswordErr("");
        errors.phone ? setPhoneErr(errors.phone[0]) : setPhoneErr("");
        setResponse("Registration Failed");
      }
    }
  }

  return (
    <>
      <Header />
      <div className="area-wrapper">
        <div className="qg-container">
          <div className="grid lg:grid-cols-[0.65fr_1fr] ">
            <div className="column1 p-4">
              <img
                className="w-full h-full object-cover rounded"
                src="https://brightstarschools.org/files/_cache/caebbc3d3aaf8b76b94ec581f728f040.jpeg"
                alt=""
              />
            </div>
            <div className="column2 px-10">
              <div className="">
                <h2 className=" lg:text-[25.6px] font-bold text-[16px] px-[0.15rem] font-poppins">
                  Registration
                </h2>
                <span className="">{response}</span>
                <div className="w-9 h-[8px] mt-2 mb-6 rounded-full bg-[#af282c]"></div>
              </div>
              <div className="form">
                <form
                  method="post"
                  action="http://localhost:8000/api/register"
                  onSubmit={handleFormSubmit}
                  className="grid grid-cols-2 gap-3 [&_input]:p-[2px] [&_input]:border [&_input]:border-black  [&_input]:border-solid [&_input]:rounded [&_input]:w-full [&_label]:mb-1 [&_label]:text-primary [&_label]:text-sm [&_label]:font-medium [&_label]:font-poppins"
                >
                  <div className="">
                    <label htmlFor="firstname">FirstName</label>
                    <input
                      type="text"
                      name="firstname"
                      value={firstname}
                      onChange={handleInputChange}
                      required
                      className=""
                    />
                  </div>
                  <div className="">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      type="text"
                      value={lastname}
                      onChange={handleInputChange}
                      name="lastname"
                      required
                    />
                  </div>
                  <div className="">
                    <label htmlFor="middlename">Middlename</label>
                    <input
                      type="text"
                      value={middlename}
                      onChange={handleInputChange}
                      name="middlename"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={handleInputChange}
                      name="email"
                      required
                    />
                    <span className="text-[#ff0000b3] text-sm">{emailErr}</span>
                  </div>
                  <div className="">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="text-[#ff0000b3] text-sm text-wrap">
                      {passwordErr}
                    </span>
                  </div>
                  <div className="">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="text-[#ff0000b3] text-sm text-nowrap">
                      {cpasswordErr}
                    </span>
                  </div>
                  <div className="">
                    <label htmlFor="phone">Phone</label>
                    <span>{error}</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handleInputChange}
                      name="phone"
                      required
                    />
                    <span className="text-[#ff0000b3] text-sm text-nowrap">
                      {phoneErr}
                    </span>
                  </div>
                  <div className="">
                    <label htmlFor="address">address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={handleInputChange}
                      name="address"
                      required
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Gender:</label>
                    <select
                      name="gender"
                      value={gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-1 border border-black border-solid rounded"
                    >
                      <option value="select gender">Select</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                      <option value="others">others</option>
                    </select>
                  </div>
                  <div className="col-span-2 relative mt-3">
                    <button
                      type="submit"
                      className="w-full bg-[#af282c] rounded-3xl py-1 text-white text-center font-medium "
                    >
                      Sign Up
                      <Icon
                        icon="cuida:arrow-right-outline"
                        className="absolute top-2 right-10"
                      />
                    </button>
                    <p className="mt-2">
                      Already have an account?{" "}
                      <Link to="/login" className="underline text-[16px]">
                        Sign in
                      </Link>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
