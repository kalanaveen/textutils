import { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState("");

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Spaces", "success");
    }
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to upercase", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleDowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success");
    }
    const handleLocUpClick = () => {
        const text1 = text.charAt(0).toUpperCase() + text.slice(1);
        setText(text1);
        props.showAlert("Capitalize first letter", "success");
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? '#0d6efd' : '#042743' }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleChange} style=
                        {{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleDowClick} disabled={text.length === 0}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLocUpClick} disabled={text.length === 0}>Capitalize first letter</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} disabled={text.length === 0}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="conatiner my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} word and {text.length}   characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read time</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
};
export default TextForm;
