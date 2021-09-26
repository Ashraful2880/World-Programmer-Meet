import React from 'react';
import style from './Teacher.css';

const Teacher = (props) => {
    const {picture,name,age,gender,company,email}=props.teacher;
    return (
        <div>
            <div className="teacher-container">
                <img src={picture} alt="programmerPhoto" />
                <h2>Name: {name}</h2>
                <h3>Age: {age}</h3>
                <h3>Gender: {gender}</h3>
                <h3>Company: {company}</h3>
                <h4>Contact: {email}</h4>
                <button>Request Meeting</button>
            </div>
        </div>
    );
};

export default Teacher;