import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { TodoListPage } from './pages/Todo-list';
import { AddNotePage } from './pages/Add-note';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/todo-list' element={<TodoListPage />} />
      <Route path='/add-note' element={<AddNotePage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
}

//why export default -export function?

export default App;
