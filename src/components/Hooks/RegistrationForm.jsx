import React, { useState } from "react";

const RegistrationForm = () => {

    const [user,setUser] = useState({
        firstName: "",
        lastName : "",
        phone: "",
        password: "",
        email:"",
    });
    const {firstName,lastName,phone,password,email} = user;

    const handleInputChange = (e) => {
        const {name , value} = e.target;

        setUser((prev) => ({...prev, [name]: value}));
    }

    const handleFormSubmit = (e) => {
        
       e.preventDefault();
       console.log(user);
       
    }
    
  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className="bg-white w-1/4  shadow-md rounded-lg">
      <section className="text-center mt-5 text-xl font-normal">
        {/* data mathy dekhauxa  */}
        <p >
            Hello My name is <span className="text-sky-500">{firstName} {lastName} </span><br />
            My email is <span className="text-sky-500"> {email}</span> and my phone number is <span className="text-sky-500">{phone}</span>
        </p>
      </section>
        <form className="text-black p-4 capitalize" onSubmit={handleFormSubmit}>
          <h1 className="text-3xl font-bold mt-4">Sign Up</h1>
          <p className="my-4">Please fill up this Form to create account</p>
          <div className="my-4">
            <label htmlFor="FirstName">First Name:</label>
            <br />
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="off"
              placeholder="Enter First Name"
              className="bg-gray-100 py-3 px-2 w-full text-lg"
              value={firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="my-4">
            <label htmlFor="LastName">Last Name:</label>
            <br />
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="off"
              placeholder="Enter Last Name"
              className="bg-gray-100 py-3 px-2 w-full text-lg"
              value={lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="my-4">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Enter Email"
              className="bg-gray-100 py-3 px-2 w-full text-lg"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="my-4">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="Enter Password"
              className="bg-gray-100 py-3 px-2 w-full text-lg"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="my-4">
            <label htmlFor="phone">Phone:</label>
            <br />
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="off"
              placeholder="Enter Phone Number"
              className="bg-gray-100 py-3 px-2 w-full text-lg"
              value={phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="my-4">
            <input
              type="Submit"
              name="button"
              value={"Sign Up"}
              className="bg-sky-400 font-bold w-full cursor-pointer p-2 rounded-lg text-white text-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
