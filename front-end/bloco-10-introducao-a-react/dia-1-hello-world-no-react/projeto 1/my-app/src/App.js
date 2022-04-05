//import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['estudar', 'praticar', 'ler'];

const lista = array.map((tarefa) => Task(tarefa));

function App() {
  return (
    <span>{ lista }</span>
  );
}

export default App;
