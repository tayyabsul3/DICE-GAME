import styled from "styled-components";
import Rules from "./rules";
import Score from "./score";
import Selectno from "./selectno";
import Rolldice from "./rolldice";
import { useState } from "react";

const dicegame = () => {
  const [currentDice,setCurrentDice] = useState(1);
  const [score,setScore] = useState(0);
  const [selectednumber, setSelectednumber] = useState();
  const [error,setError] = useState("");
  const [showRule,setShowRule] = useState(false);






  const genrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function rollDice()
  {

    if(!selectednumber)
    {
      setError("You have not selected any number")
      return;
    }
    setError("");
    let randomNumber = genrateRandomNumber(1,7);
  
    setCurrentDice(randomNumber);

   
    if(selectednumber === randomNumber)
    {
      
      setScore((prev) => prev + currentDice);
      setSelectednumber(undefined);
      
  
    }else
    {
      setScore((prev) => prev - 2);
      setSelectednumber(undefined);
      

    }

  }

 


  

  return (
    <Containers>
      <div className="top">
        <div className="flex">
          <Score  score={score}/>
          <Selectno setError={setError} selectednumber={selectednumber} setSelectednumber={setSelectednumber} error={error}/>
        </div>
      </div>
      <div className="mid">
        <Rolldice currentDice={currentDice}  rollDice={rollDice} setScore={setScore} setShowRule={setShowRule} showRule={showRule}/>
      </div>
     {showRule && <Rules/>}   
    </Containers>

  );
};

export default dicegame;

const Containers = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
 
`;
