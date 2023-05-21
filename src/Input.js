import { useRef } from "react";

const Bar = ({ list, setList }) => {
  const field = useRef();

  const listChanger = () => {
    const task = {
      name: field.current.value,
      time: new Date().toLocaleDateString()
    };
    setList([...list, task]);
    field.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bar-container">
      <h3>ToDoList</h3>
      <form onSubmit={handleSubmit}>
        <input className="bar" placeholder="eg.gym" ref={field}></input>
        <button className="input-btn" onClick={listChanger}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Bar;
