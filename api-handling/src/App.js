import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const [counter, setCounter] = useState(1);

  const getPostsData = (counter, src) => {
    if (src == 'axios') {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${counter}`)
        .then((response) => {
          setData(response.data);
        })
    }
    else {
      fetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
        .then(response => response.json())
        .then(response => {
          setData(response);
        })
        .catch(error => console.error('Error:', error));
    }
  }

  useEffect(() => {
    getPostsData(counter, 'fetch');
  }, [counter])

  return (
    <div className="App">
      HELLO WORLD
      <button onClick={() => {
        setCounter(counter + 1);
      }}>INCREMENT POST BY 1</button>
      {data && <div>
        <div>{data.id}</div>
        <div>{data.userId}</div>
        <div>{data.title}</div>
        <div>{data.body}</div>
      </div>}
    </div>
  );
}

export default App;
