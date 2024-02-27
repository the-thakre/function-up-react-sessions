import React, { useEffect, useState, useRef, useCallback } from 'react'
import './App.css';
import Todo from './components/Todo';
import ParentComponent from './components/ParentComponent';
// import ChildComponent from './components/ChildComponent';

function App() {
  const [title, setTitle] = useState('TITLE FOR APP');
  const [bgColor, setBgColor] = useState('blue');
  const [count, setCount] = useState(0);
  let colorArr = ['red', 'yellow', 'green', 'black'];
  const inputRef = useRef();

  const handleColorChange = () => {
    setBgColor(colorArr[Math.floor(Math.random() * 4)]);
  }

  // structure : const [variable,method]=useState(defaultValue);

  // const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  // useEffect(() => {

  // }, [count]);

  // no dependency 
  // [] -> empty dependency
  // [a,b] -> required dependencies
  // dont call sestate for dependency in useeffect

  const incrementNumber = useCallback(() => {
    setCount(count + 1);
    console.log('im called')
  }, [count]);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      {/* <div>{count}</div>
      <input ref={inputRef} type='text' />
      <ParentComponent title={title} setTitle={setTitle} />
      <div className='xi-button'> <button onClick={handleColorChange}>Change bg color of app</button> <button onClick={incrementNumber}>Change count</button></div> */}

      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
