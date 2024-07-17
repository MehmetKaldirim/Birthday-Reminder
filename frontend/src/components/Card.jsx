import React, { useState, useEffect } from "react";
import data from "./birthday_data";
import "./Card.css";
import cake from "../images/birthday.jpg";
const Card = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const [cardName, setcardName] = useState("card");

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/users`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((bod) => {
        let bday = new Date(bod.birthday).getDate();
        let bmonth = new Date(bod.birthday).getMonth() + 1;
        let difference = new Date() - new Date(bod.birthday);
        const ageDif = new Date(difference);
        let age = Math.abs(ageDif.getUTCFullYear() - 1970);
        //console.log(bod.username + " " + bday + " " + bmonth + " age = " + age);
        return (
          <div>
            {bday === day && bmonth === month + 1 && (
              <div
                className={cardName}
                onClick={(e) => {
                  setcardName("click");
                }}
              >
                <div className="img">
                  <img src={cake} alt="" />
                </div>
                <h4 className="name1">{bod.username}</h4>
                {cardName === "click" && (
                  <button className="btn btn1">{age} Years</button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
