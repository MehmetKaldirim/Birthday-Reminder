import React from 'react'
import data from './birthday_data';
import "./index.css"
import img from "./images/upcoming birthday.jpg"

const UpcomingBirthday = () => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    return (
        <div>
        {data.map((bod) => {
            return (
                <div>
                    {
                        bod.day > day && bod.month === month + 1 &&
                        <div className='card card-2'>
                                <div className="img" >
                                    <img src={img} alt="" />
                                </div>
                                <h4 className='name2'>{bod.name} on {bod.day}</h4>
                            </div>
                    }

                </div>)
        })}
    </div>
    )
}

export default UpcomingBirthday
