import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddTask from './components/AddTask'
import AllTask from './components/AllTask'
import EditTask from './components/EditTask'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<AddTask />} />
          <Route path='alltask' element={<AllTask />} />
          <Route path='edittask' element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
