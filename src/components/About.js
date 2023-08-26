import React from 'react';

function About(props) {
    return (
        <aside>
            <img src={props.image || "http://va.placeholder.com/215"} alt="blog logo"/>
            <p>{props.about}</p>
        </aside>
    )
}
export default About;