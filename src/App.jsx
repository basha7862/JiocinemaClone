import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home'


function App() {
  
  return (
    <>
      <style>
        {`
          html, body {
            overflow-x: hidden;
            margin: 0;
            padding: 0;
            height:100%;
            
          }
        `}
      
    </style>
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

