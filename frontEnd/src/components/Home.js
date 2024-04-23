import React from 'react';
import Navbar from './Navbar';
import AddProject from './AddProject';
import RedisScreen from './RedisScreen';
const Home = ({user}) => {
  return (
    <>
      <Navbar user={user}/>
      <div className="flex">
        <div className="w-1/2">
          <AddProject user={user} />
        </div>
        <div className="w-1/2">
          <RedisScreen  />
        </div>
      </div>
    </>
  );
};
export default Home;
