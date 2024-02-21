
import styled from "styled-components";

const Selectno = ({selectednumber, setSelectednumber ,error , setError}) => {
  const array = [1, 2, 3, 4, 5, 6];
  
 
  return (
    <>
      <Boxcontainer>
        <p className="error">{error}</p>
        <div>
          {array.map((value, i) => (
            <Box onClick={()=> 
              { setSelectednumber(value);
                setError("");
              }}
              
              key={i} isSelected={value === selectednumber}>
              {value}
            </Box>
          ))}
        </div>
        <p>Select Number</p>

      </Boxcontainer>
    </>
  );
};

export default Selectno;
const Boxcontainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: end;
  gap: 10px;

  .error
  {
    color: red;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  p {
    font-size: 18px;
    font-weight: 500;
  }
`

const Box = styled.p`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  background-color: ${(props)=>(props.isSelected ? "black" : "white")};
  color: ${(props)=>(props.isSelected ? "white" : "black") };

`;
