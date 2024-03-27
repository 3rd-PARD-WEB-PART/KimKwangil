import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  const [inputData, setInputData] = useState("");

  const handleOnChange = (e) => {
    setInputData(e.target.value);
  }

  const handleOnClick = () => {
    alert(inputData);
  }
  return (
    <Div>
      <input type="text" onChange={handleOnChange}></input>
      <br />
      <button onClick={handleOnClick}>버튼</button>
    </Div>
  );
}

const Div = styled.div`
`

export default App;
