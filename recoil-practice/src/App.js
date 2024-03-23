import logo from './logo.svg';
import './App.css';
import { counter } from './atoms';
import { RecoilRoot, useRecoilState } from 'recoil';
import { RecoilAllInOne } from './RecoilAllInOne';

function App() {
  const [count, setCount] = useRecoilState(counter);
  const incrementByOne = () => setCount(count + 1);

  return (
    <div>
      Count: {count}
      <br />
      <button onClick={incrementByOne}>Increment</button>
      <RecoilAllInOne />
    </div>
  );
}

export default App;
