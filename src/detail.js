import React from 'react';

function Detail(props){
    return(
        <div>
            <h1>Student Name is {props.name}</h1>
            <h2>Course {props.subject}</h2>

        </div>
    );
}
export default Detail;