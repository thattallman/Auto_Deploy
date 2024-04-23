import React from "react";

const Navbar = ({user}) => {
  return (
    <>
      <div className="w-full  px-4 py-2 flex justify-between  bg-black shadow-lg">
        <div className="flex items-center">
          <div className="text-white text-lg font-bold mr-4">
            <img
              className="w-10"
              src="https://i.pinimg.com/originals/74/01/80/7401800453ff548243c9cd9cd23140d9.jpg"
              alt="logo"
            />
          </div>

          <div className="text-white mr-4">{user}</div>
        </div>

        <div className="flex items-center">
          <button className="text-white mr-4">Feedback</button>
          <button className="text-white mr-4">Help</button>
          <button className="text-white">Notification</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
