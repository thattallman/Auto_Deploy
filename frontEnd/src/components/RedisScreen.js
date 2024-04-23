import React, { useState, useEffect } from 'react';
const { io } = require("socket.io-client");

const RedisScreen = () => {
    const [displayMessage, setDisplayMessage] = useState('');
    
    useEffect(() => {
        const socket = io("http://localhost:8001");

        socket.on("connect", () => {
            console.log('socket connection status ', socket.connected); // true
        });

        socket.on('redisMessage', (data) => {
        
            setDisplayMessage(data);
        });

        socket.on("disconnect", () => {
            console.log(socket.connected); // false
        });

        // Clean up on unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-md shadow-md w-4/5">
                <h2 className="text-2xl font-bold mb-4 text-white">Project Progress</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-700 p-4 rounded-md">
                     
                        <p className="text-sm text-white">{displayMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RedisScreen;
