
import React ,{useState} from 'react'


export default function TextForm(props) {

   const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success");
   }

   const handleLoClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case","success");
   }

   const handleClearClick = () => {
    
    let newText = " ";
    setText(newText);
    props.showAlert("Text is remove","success");
   }

   const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied on clickboard","success");
   }

   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space has been Removed","success");
   }



   const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
    
   }

    const [text, setText] = useState('');

      return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3" >
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="12"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} onChange={handleOnChange}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick} onChange={handleOnChange}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick} onChange={handleOnChange}>Clear</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy} onChange={handleOnChange}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} onChange={handleOnChange}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>Your text summery</h2>
          <p>{text.split(" ").length} words and {text.length} characters </p>
          <p>{0.08 *text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0?text:"Enter something to preview here"}</p>
        </div>
        </>
      )
    }
    