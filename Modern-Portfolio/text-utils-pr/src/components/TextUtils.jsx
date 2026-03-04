import { useState, useEffect } from "react";

const TextUtils = () => {
    
    const [text, setText] = useState ("");
    const [count, setCount] = useState(0);
    const [countWord, setCountWord] = useState(0);
    const [second, setSecond] = useState(0);

useEffect(() => {
    setText(localStorage.getItem("text") || "" ); 
    setCount(Number(localStorage.getItem("count")) || 0);
    setCountWord(Number(localStorage.getItem("word"))|| 0);
    setSecond(Number(localStorage.getItem("second")) || 0);
 }, []);


    return  <>
    <div className="container-fluid">
        <h2 className="text-center p-3">Text Utils </h2>

    <div className="container  ">
    <div className="form-floating">
  <textarea value={text} onChange={(e)=> {
    setText(e.target.value)
    localStorage.setItem("text", text);
    
    }} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:220}} ></textarea>
  <label htmlFor="floatingTextarea2">enter your text</label>
</div>
<div>

    <button onClick={() => {setText(text.toUpperCase())
        localStorage.setItem("text", text.toUpperCase())
    }} className="m-2 btn btn-outline-primary">To UpperCase</button>

    <button onClick={() => {setText(text.toLowerCase())
        localStorage.setItem("text", text.toLowerCase())
    }} className="m-2 btn btn-outline-warning">To Lowercase</button>
    
     <button onClick={() => {
      const newCount = text.length
      setCount(newCount);
    localStorage.setItem("count", newCount.toString())  
    }} className="m-2 btn btn-outline-info">Counts Letters</button>

    <button onClick={() => {
      const newCountWord = text.split(" ").length
      setCountWord( newCountWord)
            localStorage.setItem("word",newCountWord.toString())
          }} className="m-2 btn btn-outline-secondary">Counts  Words</button>

         <button onClick={() => {
          const newSecond = Math.floor (text.split("").length * 30/160)
          setSecond(newSecond)
            localStorage.setItem("second",newSecond.toString())
         }} className="m-2 btn btn-outline-success">Check Reading Time</button>

         <button onClick={() =>{
          setCount(0);
          setText("")
          setCountWord(0)
          setSecond(0)
          localStorage.clear();

      }}className="m-2 btn btn-outline-danger">Clear Text</button>
</div>
<hr />

<div className="m-3">
  {text}

  <p className="mt-3 fw-bold">Text Count : {count}</p>
  <p className="fw-bold">Words Count : {countWord}</p>
  <p className="fw-bold">Check Reading Time : {second} sec</p>
</div>
    </div>



    </div>
 </> 
};


export default TextUtils;

