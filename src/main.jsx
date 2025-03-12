import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import CafeList from './components/CafeList/CafeList';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

// const Hello = ({ name, age }) => {
//   return <h1>Hi I am {name}, {age} years old!</h1>;
// };

root.render(<App />);
root.render(<CafeList />);
