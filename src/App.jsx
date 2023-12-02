import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Friends from "./Friends";
import Employee from "./Employee";
import BookStore from "./BookStore";


function App() {
  const friends = ["john", "Sam", "Alice"];
  const Employees = [
    {id:1, name:'john', role: 'Software Engineer'},
    {id:2, name:'sam', role: 'QA Engineer'},
    {id:3, name:'alice', role: 'Sr. Software Engineer'},
    {id:4, name:'shawn', role: 'Software Engineer'}
  ]
  const test = [1, 2, 4, 5, 6];
  const books = [
    {id:1, name:"Mathematics", price:200},
    {id:2, name:"Chemistry", price:300},
    {id:3, name:"Physics", price:500}
  ]
  return (
    <>
      <h1>Hello Rahim</h1>
      <BookStore book = {books}></BookStore>

      {/* <Employee all={{ name: "rahim" }}></Employee> */}

      {/* Returning multiple components */}
      {/* {Employees.map((emp) => (
        <div>
          <Employee all={emp}></Employee>
          <Friends></Friends>
        </div>
      ))} */}

      {/* {
        friends.map((f)=><Friends name={f}></Friends>)
      } */}

      {/* <Greetings />
      <Skills name="HTML" />
      <Skills name="CSS" />
      <Skills name="JavaScript" />
      <Skills name="React" /> */}
      {/* <Todo task="go to market" isDone={true} />
      <Todo task="buy vegetables" isDone={false} />
      <Todo task="buy beef, chicken " isDone={true} /> */}
    </>
  );
}

const Greetings = () => {
  const info = {
    profession: "developer",
  };

  const myStyle = {
    border: "1px solid red",
    padding: "5px",
  };
  return (
    <div>
      <h4>Welcome to React World</h4>
      <h5 style={myStyle}>Your Profession {info.profession}</h5>
    </div>
  );
};

const Skills = ({ name }) => {
  return (
    <div>
      <h3>You Expertise in {name} </h3>
    </div>
  );
};

export default App;
