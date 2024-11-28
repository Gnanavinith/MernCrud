import {BrowserRouter,Routes,Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import Users from "./Components/Users"
import CreateUsers from "./Components/CreateUsers"
import UserUpdate from "./Components/UserUpdate"

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route exact path="/" element={<Users/>}></Route>
       <Route exact path="createUser" element={<CreateUsers/>}></Route>
       <Route exact path="/updateUser/:id" element={<UserUpdate/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
