import React from 'react';

export default function Form(props) {
    // Component code here
    return (
        <>
        <div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">{props.title}</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">{props.example}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        </>
    );
}

