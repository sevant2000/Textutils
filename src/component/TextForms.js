import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = ()=>{
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        // console.log(text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handletoClear = ()=>{
        let newText = "";
        setText(newText);
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select(); 
        navigator.clipboard.writeText(text.value);
    }
    const  [text, setText] = useState('');
        // text = "new Text"; Wrong way to change Text
        // setText = ("new Text"); Right Way to change Text
    return (
        <>
        <div className='container' >
            <h1> {props.heading} </h1>
            <div className="mb-4">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                {/* <textarea font-family="Arial" id="text" placeholder='Bold Text will Appear Here'></textarea> */}
            </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handletoClear} >Clear Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleCopy} >CopyText</button>

        </div>
        <div className="container my-2">
            <h1> Text Summery</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Reading</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
