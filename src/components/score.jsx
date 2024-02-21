import styled from "styled-components"
const Score = ({score}) => {
  return (
    <>
     <Dev>
                  <h1 className="score" >{score}</h1>
                  <p>Total Score</p>
                  
              </Dev>
    </>
  )
}

export default Score;

const Dev = styled.div`

display: flex;
flex-direction: column;
align-items: center;

h1
{
  font-size: 90px; 
  line-height: 80px;
}
 p
{
  font-size: 20px;
  font-weight: 500

}
`