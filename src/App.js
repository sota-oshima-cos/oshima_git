import { useEffect, useRef, useState } from "react";
// import App from 'C:\Users\cosmedia\Desktop\reactTest\react-app\src'

function App() {
  /* 状態変数(State)を定義する */
  const [name, setName] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const[datetime, setDatetime] = useState("");
  const nameForm = useRef(null);
  const dateofbirthForm = useRef(null);
  const dateForm = useRef(null);
  
  /* コンポーネントが表示されたときの処理を定義する */
  useEffect(() => {
    alert("こんにちは！");
  }, []);

  /* フォームに入力された値を画面に反映する */
  const handleSubmitText = () => {
    setName(nameForm.current.value);
    setDateofbirth(dateofbirthForm.current.value);
    setDatetime(dateForm.current.value);
  };

  /* 画面のテキストとフォームの値をクリアする */
  const handleClearText = () => {
    setName("");
    setDateofbirth("");
    setDatetime("");
    nameForm.current.value = "";
    dateofbirthForm.current.value = "";
    dateForm.current.value="";
  };
  const handleClearText1 = () => {
    setDatetime(dateForm.current.value);
  }

  return (
    <div className="App">
      <p  style={{ color: '#ff0000'}}>
        <label>
          姓名：
          <input type="text" ref={nameForm} />
        </label>
      </p>
      <p>
        <label>
          生年月日：
          <input type="text" ref={dateofbirthForm} />
        </label>
      </p>
        <label>
          日付：
          <input type="text" ref={dateForm} />
        </label>
      <p>
        <button type="button" onClick={handleSubmitText}>
          表示
        </button>
        <button type="button" onClick={handleClearText}>
          クリア
        </button>
        <button type="button" onClick={handleClearText1}>
          日付
        </button>
      </p>
      <p>あなたが入力した姓名：{name}</p>
      <p>あなたが入力した生年月日：{dateofbirth}</p>
      <p>あなたが入力した日付：{datetime}</p>
    </div>

  );
}

export default App;




