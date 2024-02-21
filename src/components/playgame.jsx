import styled from 'styled-components'
const playgame = ({toggle}) => {
  return (
    <>
    <Containers>
    <div>
        <img src="./dices.png" alt="dices image" />
    </div>
    <div>
    <h1>Dice Game</h1>
    <Buttons onClick={toggle}>Play Now</Buttons>
    </div>
    </Containers>
    </>
  )
}
export default playgame
const Buttons = styled.button `
background-color: black;
color:white;
width:100px;
height:50px;
border: 1px solid black;
border-radius: 8px;
transition: 0.2s  background-color ease-in;
font-size: 16px;

&:hover{
    background-color: aliceblue;
    border: 1px solid black;
    color: black;
    transition: 0.2s  background-color ease-in;
}
`
const Containers = styled.div`

max-width: 1100px;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
gap: 90px;


h1
{
    font-size: 100px;
    white-space: nowrap;
}


`