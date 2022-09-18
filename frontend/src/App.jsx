import React, {useState} from "react"
import { useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  const getWelcomeMessage = async () =>{
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    };
    const response = await fetch("/api", requestOptions);
    const data = await response.json();

    if(!response.ok){
    console.log('Error in getWelcomeMessage')
    }else{
      setMessage(data.message); 
    }
  };
  useEffect(() => {getWelcomeMessage()}, [])
  return (
    <div>
      <h1>{ message }</h1>
    </div>
  );
};

export default App;