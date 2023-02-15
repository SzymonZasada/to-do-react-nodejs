import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { TodoList } from './pages/Todo-list';

function App() {
  return (
    <Routes>
      <Route path='/' element={<TodoList />} />
      <Route path='/todo-list' element={<TodoList />} />
      <Route path='*' element={<Home />}></Route>
    </Routes>
  );
}

//why export default?

export default App;
