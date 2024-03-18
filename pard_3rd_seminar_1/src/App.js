import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Hello from './Hello';

function App() {
  // const name = "리액트";
  // const name = "리악토";
  const name = null;
  return (
    // <div>
    //   <h1>{name} 안녕!</h1>
    //   <h2>잘 작동하니?</h2>
    // </div>
    
    // <div>
    //   {name === '리액트' ? (
    //     <h1>리액트입니다.</h1>
    //   ) : (
    //       <h2>리액트가 아닙니다.</h2>
    //   )}
    // </div>

    // <div>
    //   {name && (<h1>name 변수가 있습니다.</h1>)}
    //   <h1>우리는 {name || 'html'}를 사용합니다.</h1>
    // </div>
    <div>
      {/* <Form/> */}
      <Hello name = "react"/>
    </div>
  );
}

export default App;
