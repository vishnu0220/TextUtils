import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Converted to uppercase", "success")
    }

    const handlelowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Converted to lowercase", "success")
    }

    const handleClearText = ()=> {
        props.alert("Text cleared", "success")
        let newText = '';
        setText(newText);
    }

    const handleCopyText = ()=> {
        navigator.clipboard.writeText(text);
        props.alert("Copied to Clipboard", "success")
    }
    
    const handleExtraSpacesText = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("Removed Extra spaces", "success")
    }

    const handleCapitalizeText = ()=> {
        let newText = text.split(/[ ]+/);
        let str = "";
        for(let word of newText){
            let capitalWord = word.charAt(0).toUpperCase() + word.substring(1, word.length).toLowerCase();
            // let capitalWord = word[0].toUpperCase() + word.slice(1);
            // console.log(capitalWord);
            str += capitalWord+ " ";
        }
        str !== " " && setText(str);
        props.alert("Capitalized the text", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }


    const [text, setText] = useState('');

    //   text = "new text"; // wrong way to change text
    //   setText("new text"); // correct way to change text
    return (
        <>
            <div className="container" style={{color : props.mode === 'dark'? 'white' : '#042743'}} >
                <h1> {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-3" value={text} 
                        style={{backgroundColor : props.mode === 'dark'? '#13466e' : 'white', 
                                color : props.mode === 'dark'? 'white' : '#042743',
                                resize : 'none' }}
                        onChange={handleOnChange} id="myBox" rows="10"/>
                        
                    <div className="container myContainer">
                        <button className="btn btn-primary mx-2 my-1 myButton" disabled={text.length > 0 ? false : true } onClick={handleUpperCase}>Convert To Uppercase</button>
                        <button className="btn btn-primary mx-2 my-1 myButton" disabled={text.length > 0 ? false : true } onClick={handlelowerCase}>Convert To lowercase</button>
                        <button className="btn btn-primary mx-2 my-1 myButton" disabled={text.length > 0 ? false : true } onClick={handleCapitalizeText}>Capitalize Text</button>
                        <button className="btn btn-primary mx-2 my-1 myButton" disabled={text.length > 0 ? false : true } onClick={handleCopyText}>Copy Text</button>
                        <button className="btn btn-primary mx-2 my-1 myButton" disabled={text.length > 0 ? false : true } onClick={handleClearText}>Clear Text</button>
                        <button className="btn btn-primary mx-2 my-1 myButton" disabled={text.length > 0 ? false : true } onClick={handleExtraSpacesText}>Remove Extra Spaces</button>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                 <p> { text.split(/\s+/).filter( (word)=> { return word.length !== 0 } ).length } words, {text.length} characters</p>
                <p> {0.008 * ( text.split(/\s+/).filter( (word)=> { return word.length !== 0 } ).length ) } Minutes read</p> 
                <h2>Preview</h2>
                <p> {text.length > 0 ? text : "Nothing to preview"} </p>
            </div>
        </>
    )
}
