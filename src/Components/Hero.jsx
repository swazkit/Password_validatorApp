import React from "react"
import { useState } from "react"

export default function Hero() {

    const [on, setOn] = React.useState(false)
    const [password, setPassword] = React.useState("")

    function passwordFunc(event) {
        setPassword(event.target.value)
        console.log(password)
    } 


    const [capitalValidated, setCapitalValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [speacialCharecterValidated, setSpeacialCharecterValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);

    const handleChange = (value) => {
        // regex
        const capital = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const speacial = new RegExp('(?=.*[!@#$%^&*?])');
        const length = new RegExp('(?=.{8,})');

        if(capital.test(value)){
            setCapitalValidated(true)
            console.log("Capital");
        }else{
            setCapitalValidated(false)
        }

        if(number.test(value)){
            setNumberValidated(true)
            console.log("Number");
        }else{
            setNumberValidated(false)
        }

        if(speacial.test(value)){
            setSpeacialCharecterValidated(true)
            console.log("Special");
        }else{
            setSpeacialCharecterValidated(false)
        }

        if(length.test(value)){
            setLengthValidated(true)
            console.log("Length");
        }else{
            setLengthValidated(false)
        }
    }

    const page = () => {
        return (
            <div>PassOmeter</div>
        )
    }

    const initialPage = () => {
        return (
            <div className="initialPage">
                <h1>Is your Password Strong enough?</h1>
                <button onClick={() => setOn(prevStat => !prevStat)}>Let's Bake and Check!</button>
            </div>
        )
    }



    const main = () => {
        if (!on) {
            return initialPage()
        } else {
            return (
                <>
                    <form>
                        <div className="info-box">
                            <ul>
                                <li><span className="list">At Least 1 Lower Case</span></li>
                                <li><span className={capitalValidated?'validated':'not-validated'} id="list">At Least 1 Capital Letter</span></li>
                                <li><span className="list">At Least 1 Number</span></li>
                                <li><span className="list">At Least 1 </span></li>
                                <li><span className="list">Minimum 7 Charecter long</span></li>
                            </ul>
                        </div>
                        <input type="text" placeholder="Enter your password" onChange={(e) => handleChange(e.target.value)} />
                    </form>
                </>
            )
        }
    }

    return (
        <>
        <div className="header">
            <div className="logo">Pass<span>O</span>meter</div>
            <div className="header-links">
                <a href="#" className="header-link">Contact Us</a>
                <a href="#" className="header-link">About Us</a>
                <a href="#" className="header-link">Password and Security</a>
            </div>
        </div>
        <div className="hero">
            <div className="hero-main">
                {main()}
            </div>
        </div>
        </>
    )
}