import { Route, Routes } from "react-router-dom"

import Home from "../routes/Home"
import User from "../routes/User"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":userId" element={<User />} />
    </Routes>
  )
}

export default Router
