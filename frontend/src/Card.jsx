import React, { useState } from 'react'
import data from './birthday_data';
import "./index.css"
import cake from "./images/birthday.jpg"
const Card = () => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const [cardName, setcardName] = useState("card");

    return (
        <div>
            {data.map((bod) => {
                return (
                    <div>
                        {
                            bod.day === day && bod.month === month + 1 &&
                            <div className={cardName} onClick={(e) => { setcardName("click") }}>
                                <div className="img" >
                                    <img src={cake} alt="" />
                                </div>
                                <h4 className='name1'>{bod.name}</h4>
                                {
                                    cardName === "click" &&
                                    <button className='btn btn1'>{bod.age} Years</button>
                                }
                            </div>
                        }

                    </div>)
            })}
        </div>
    )
}

export default Card
