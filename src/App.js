import "./styles.css";
import Input from "./Input.js";
import TaskCards from "./TaskCards.js";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  return (
    <>
      <Input list={list} setList={setList} />
      <TaskCards list={list} setList={setList} />
    </>
  );
}
