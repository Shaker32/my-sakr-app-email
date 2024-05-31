import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Signin from "./Home/Signin"

export default function AppRoutes() {
  return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element= {<Signin />}  />
</Routes>
</BrowserRouter>

)
}
