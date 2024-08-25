import React from "react";
import { useState } from "react";

const users = [
  { name: "Alice", age: 19 },
  { name: "Suprita", age: 20 },
  { name: "Supriya", age: 18 },
  { name: "Bandana", age: 19 },
  { name: "Saurav", age: 21 },
  { name: "Dinesh", age: 22 },
];
export const DerivedState = () => {
  const [userList, setUserList] = useState(users);

  //   Derived State : Count of users
  const userCount = userList.length;

  //  Derived State : Average of age
  // always initialize accumulater(accum) with initial value 0
  const averageAge =
    userList.reduce((accum, currElem) => accum + currElem.age, 0) / userCount;

  return (
    <div className="font-bold text-7xl text-yellow-300">
      <h1>Users list:</h1>

      {/* using Map loop only  */}
      {/* <ul>
        {users.map((currElem, index) => {
          return (
            <li key={index}>
              {currElem.name} - {currElem.age} years old
            </li>
          );
        })}
      </ul> */}

      {/* Using useState method  */}
      <ul>
        {userList.map((users, index) => (
          <li key={index}>
            {" "}
            {users.name} --- {users.age} years old
          </li>
        ))}
      </ul>

      {/* Using DerivedState(its not a part of Hooks) */}
      {/* how can i find total no of users and average of their age using reactjs  */}

      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  );
};
