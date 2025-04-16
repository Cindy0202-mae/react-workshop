import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
// import CafeList from './components/CafeList/CafeList';

// console.log('Hello World!');

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

// const Hello = (props) => {

  // const name = props.name;
  // const age = props.age;

//   const { name, age } = props;
//   return <h1>Hi I am {name}, {age} years old!</h1>;
// };

// root.render(<Hello name="John" age={30} />);
// root.render(<h1>Hello World!</h1>);
root.render(<App />);
// root.render(<CafeList />);
