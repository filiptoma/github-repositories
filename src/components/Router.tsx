import { Route, Routes } from "react-router-dom"

import Home from "../routes/Home"
import Repos from "../routes/Repos"
import User from "../routes/User"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":userId" element={<User />} />
      <Route path=":userId/repos" element={<Repos />} />
    </Routes>
  )
}

export default Router
