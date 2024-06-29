import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { Home } from "./Pages/Home.jsx";
import { About } from "./Pages/About.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { User } from "./components/User.jsx";
import Github, {gitInfoLoader} from "./Pages/Github.jsx";


const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* Dynamic Routing, element can be grabed from url, make fetch and get data */}
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route path="*" element={<div>403 NOT FOUND</div>} />
      <Route loader={gitInfoLoader} path="github" element={<Github/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
