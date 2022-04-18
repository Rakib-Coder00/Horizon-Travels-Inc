import React from 'react';
import person from '../../Asset/Image/person.png'

const About = () => {
    return (
        <div>
            <div className= "container">
            <div className= "row gy-lg-5 align-items-center">
                <div className= "col-lg-6 order-lg-1 text-center text-lg-start">
                    <div className= "title pt-3 pb-5">
                        <h2 className= "position-relative d-inline-block">About me:</h2>
                    </div>
                    <p className= "lead text-muted">Hi there 👋 It's me Rakib.</p>
                    <p>I'm currently learning React JS. My first goal is, completing the web course. Secondly, full stack developer. Thirdly, getting a part-time job. Finally, starting full time job. And one day i will succeed whatever it's takes.</p>
                    <p>Thank You!</p>
                </div>
                <div className= "col-lg-6 order-lg-0">
                    <img src ={person}  alt = "img" className= "img-fluid" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;