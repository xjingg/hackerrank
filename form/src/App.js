import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [userName, setUsername] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warning, setWarning] = useState("");
  const [timeId, setTimeId] = useState(0);
  const APIbase =
    "https://hxj1tck8l1.execute-api.us-east-1.amazonaws.com/default/users/taken?username=";

  const delayCheck = () => {
    window.clearTimeout(timeId);
    let id = setTimeout(() => {
      checkUsername(userName);
    }, 1000);
    setTimeId(id);
  };
  const checkUsername = username => {
    const URL = APIbase + username;
    fetch(URL)
      .then(response =>
        response.json().catch(err => {
          setWarning(`not a valid json response`);
          setShowWarning(true);
        })
      )
      .then(data => {
        console.log(data);
        if (data.taken === undefined) {
          setWarning(`not a valid json respons2`);
          setShowWarning(true);
        } else if (data.taken) {
          setWarning(`username has been taken`);
          setShowWarning(true);
        } else {
          setShowWarning(false);
        }
      })
      .catch(error => {
        setWarning(`server error`);
        setShowWarning(true);
      });
  };

  const validLength = inputstring => {
    if (0 < inputstring.length && inputstring.length < 4) return false;
    else return true;
  };

  // function throatRequest(e,prev){
  //   if(prev === userName){
  //     checkUsername(e.target.value);
  //   }
  // }

  const handleUpdate = e => {
    const value = e.target.value;
    setUsername(value);
    if (validLength(value)) {
      setShowWarning(false);
      if (value.length !== 0) {
        delayCheck();
      }
    } else {
      setWarning("invalid length. At least 4 character");
      setShowWarning(true);
    }
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={userName}
            onChange={handleUpdate}
          />
        </label>
        {showWarning && <h2>{warning}</h2>}
      </form>
    </div>
  );
}
