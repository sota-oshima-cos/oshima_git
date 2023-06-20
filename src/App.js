import { useEffect, useRef, useState } from "react";

function App() {
  const [name,setName] = useState("");
  const [dateofbirth,setDateofbirth] = useState("");
  const nameForm = useRef(null);
  const dateofbirthForm = useRef(null);

  useEffect(() => {
    alert("こんにちは！");
  }, []);

  const handleSubmitText = () => {
    setName(nameForm.current.value);
    setDateofbirth(dateofbirthForm.current.value);
  };

  const handleClearText = () => {
    setName("");
    setDateofbirth("");
    nameForm.current.value = "";
    dateofbirthForm.current.value = "";

  };

  return (
    <div className="App">
    <p>
      <label>姓名：<input type="text" ref={nameForm} /></label>
    </p>
    <p>
      <label>生年月日：<input type="text" ref={dateofbirthForm} /></label>
    </p>
    <p>
      <button type="button" onClick={handleSubmitText()}>表示</button>
      <button type="button" onClick={handleClearText()}>クリア</button>
    </p>
    <p>あなたが入力した姓名：{name}</p>
    <p>あなたが入力した生年月日：{dateofbirth}</p>
    </div>

  );
}

export default App;
