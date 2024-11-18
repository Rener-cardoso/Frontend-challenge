import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Menu } from "../pages/Menu";
import { Layout } from "../pages/Layout";
import { SignIn } from "../pages/SignIn";
import { Contact } from "../pages/Contact";
import { Error } from "../pages/Error";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}