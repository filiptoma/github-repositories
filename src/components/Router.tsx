import { Route, Routes } from "react-router-dom"
import Error404 from "../routes/Error404"

import Home from "../routes/Home"
import Organizations from "../routes/Organizations"
import Repositories from "../routes/Repositories"
import User from "../routes/User"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":userId" element={<User />} />
      <Route path=":userId/repos" element={<Repositories />} />
      <Route path=":userId/orgs" element={<Organizations />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Router
