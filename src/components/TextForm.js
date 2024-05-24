import React, {useState} from 'react';

export default function TextForm(props) {
    const [text,setText]=useState('')
    const Onupperclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("changed to uppercase","warning")
    }
    const Onlowerclick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("changed to lowercase","warning")
    }
    const onclickcopy=()=>
    {
        navigator.clipboard.writeText(text);
        props.showalert('Text Copied to clipboard','success')
    }
    const OnChange=(event)=>{
        setText(event.target.value);
    }
    return (
        <>
        <div className='bg-color-primary'>
        <div>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={OnChange} id="textbox" rows="8"></textarea>
            </div>
            <div>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={Onupperclick}>Change To Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={Onlowerclick}>Change To Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={onclickcopy}>Copy To Clipborad</button>
            </div>
        </div>
        <div>
            <div>
                <p>Characters : {text.length } , Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
                <h3>Preview:</h3>
                <p>{text}</p>
                <p>Minutes Required to read : {0.008*text.length}mins</p>
            </div>
        </div>
        </div>
        </>
    );
} 
