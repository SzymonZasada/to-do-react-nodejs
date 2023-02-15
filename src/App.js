import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ToDoList } from './pages/ToDoList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ToDoList />} />
      <Route path='/todo-list' element={<ToDoList />} />
      <Route path='*' element={<Home />}></Route>
    </Routes>
  );
}

//why export default?

export default App;
