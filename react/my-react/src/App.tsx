import { useState } from "react";
import InputBox from "./Components/lifting_state_up/InputBox";
import Preview from "./Components/lifting_state_up/Preview";
import Component1 from "./Components/prop_drilling/Component1";
import UserInfo from "./Components/UserInfo/UserInfo";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      {/* <div className="bg-amber-400 flex justify-center items-center">
        <h1>Hi this is react!</h1>
      </div> */}
      {/* <Counter/> */}
      {/* <UserInfo/> */}
      {/* <Component1/> */}
         <InputBox name={name} onNameChange={setName}/>
      <Preview name={name}/>
    </>
  );
}

export default App;
