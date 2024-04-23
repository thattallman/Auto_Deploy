import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const UserAuth = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    
    event.preventDefault(); 

    // Make POST request with form data


      console.log('reached here ');
      try{
      const response = await fetch("http://localhost:8000/user/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password_hash: password,
        }),
      })
      toast.success("Successfully Registered ", {
        position: "top-right",
        autoClose: 2000,
      });
      navigate("/login")
    }catch (err) {
        console.log(err)

    }
  };
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      {/* Background Image */}
      <div className="relative flex items-center justify-end w-full h-full px-16 py-10">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
          <img
            className="w-11/12 h-11/12 object-contain rounded-3xl"
            src="https://t3.ftcdn.net/jpg/05/37/32/52/240_F_537325216_yda2nc0gy9VpsmrowW6Wx9VSdOREIYr6.jpg"
            alt="Background"
          />
        </div>

        {/* Registration Form */}
        <div className="relative z-10 bg-white p-8 rounded-md shadow-md opacity-80 w-1/3">
          <h2 className="text-2xl font-bold mb-4 text-center">Auto Depo</h2>
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form onSubmit={handleSubmit} >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                id="firstName"
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                id="lastName"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                id="email"
                type="email"
                placeholder="johne@gmail.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            {/* Add other form fields (email, password) here if needed */}
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
