
import styled from "styled-components"
import { Outlinebtn } from "../styled/Buttons";
import { Button } from "../styled/Buttons";
import { useState } from "react";


const Rolldice = ({currentDice, rollDice ,setScore ,setShowRule ,showRule}) => {

function resetscore()
{
   setScore(0);
}

function ruleShowToggle()
{
  
  setShowRule((prev)=> !prev)
}
  return (
    <Dicecontainer>
        <div onClick={rollDice} className="dice">
            <img src={`./dice_${currentDice}.png`} alt="" />
        </div>
        <p>
        Click on Dice to roll
        </p>
      <div className="btns">
        <Button onClick={resetscore}>Reset Score</Button>
       <Outlinebtn onClick={ruleShowToggle}>{showRule ? "Hide" : "Show"} Rules</Outlinebtn>
      </div>
    </Dicecontainer>
  )
}

export default Rolldice
const Dicecontainer =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 450px;
    margin:0 auto;
    margin-top:48px;
.btns
{
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  
}
    p
    {
        font-size: 20px;
        font-weight: 500;
    }

`