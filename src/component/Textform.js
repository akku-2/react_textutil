import React, { useState } from 'react'

export default function Textform(probs) {

    const handleupp = () => {
        let str = text.toUpperCase();
        settext(str)
    }

    const handleonchange = (event) => {
        settext(event.target.value)
    }

    const handlelw = () => {
        let newtext = text.toLowerCase();
        settext(newtext)
    }

    const handleclear = () => {
        let newtext = "";
        settext(newtext)
        console.log('clear text' + newtext)
    }
    function handlecamel() {
        const ab = []
        let wordArr = text.split(" ");
        for (let i in wordArr) {

            ab.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1))
            console.log(typeof (b))
        }
        let d = ab.join(' ')
        settext(d)
    }




    const [text, settext] = useState('')
    document.body.style.backgroundColor = "gray"




    return (


        <div>
            <h3 className='my-3'>{probs.heading}</h3>
            <div className="mb-6">
                <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleonchange} ></textarea>
            </div>
            <button className='btn btn-primary my-3' onClick={handleupp}>Convert to UpperCase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handlelw}>Convert to LowerCase</button>
            <button className='btn btn-primary my-3' onClick={handleclear}>Clear Text</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handlecamel} >Convert to CamelCase</button>
            <button className='btn btn-primary my-3 mx-3'>copy</button>
            
            

            <div className="container">
                <h1>The summary</h1>
                <p><b>The no of word is {text.split(" ").length} and no of length is {text.length} </b> </p>

            </div>

        </div>

    )
}
