import React from "react"
import { useState } from "react"
import Icon from "react-icons-kit"
import {arrows_circle_check} from 'react-icons-kit/linea/arrows_circle_check'
import {arrows_exclamation} from 'react-icons-kit/linea/arrows_exclamation'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function Hero() {

    const [on, setOn] = React.useState(false)
    const [password, setPassword] = React.useState("")

    function passwordFunc(event) {
        setPassword(event.target.value)
        console.log(password)
    } 


    const [lowerValidated, setLowerValidated] = useState(false);
    const [capitalValidated, setCapitalValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [speacialCharecterValidated, setSpeacialCharecterValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);

    const handleChange = (value) => {
        // regex
        const lower = new RegExp('(?=.*[a-z])')
        const capital = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const speacial = new RegExp('(?=.*[!@#$%^&*?])');
        const length = new RegExp('(?=.{8,})');

        if(lower.test(value)){
            setLowerValidated(true)
        } else {
            setLowerValidated(false)
        }

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
                    <form data-aos="zoom-in" data-aos-offset="200">
                        <div className="info-box"  >
                            <ul>
                                <li className="flex" >
                                    {lowerValidated?(
                                        <Icon icon={arrows_circle_check} />
                                    ):(
                                        <Icon icon={arrows_exclamation} />
                                    )}
                                    <span className={lowerValidated?'validated':'not-validated'}>At Least 1 Lower Case</span>
                                </li>
                                <li className="flex" >
                                    {capitalValidated?(
                                        <Icon icon={arrows_circle_check} />
                                    ):(
                                        <Icon icon={arrows_exclamation} />
                                    )}
                                    <span className={capitalValidated?'validated':'not-validated'}>At Least 1 Capital Letter</span>
                                </li>
                                <li className="flex" >
                                    {numberValidated?(
                                        <Icon icon={arrows_circle_check} />
                                    ):(
                                        <Icon icon={arrows_exclamation} />
                                    )}
                                    <span className={numberValidated?'validated':'not-validated'}>At Least 1 Number</span>
                                </li>
                                <li className="flex" >
                                    {speacialCharecterValidated?(
                                        <Icon icon={arrows_circle_check} />
                                    ):(
                                        <Icon icon={arrows_exclamation} />
                                    )}
                                    <span className={speacialCharecterValidated?'validated':'not-validated'}>At Least 1 </span>
                                </li>
                                <li className="flex" >
                                    {lengthValidated?(
                                        <Icon icon={arrows_circle_check} />
                                    ):(
                                        <Icon icon={arrows_exclamation} />
                                    )}<span className={lengthValidated?'validated':'not-validated'}>Minimum 7 Charecter long</span>
                                </li>
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