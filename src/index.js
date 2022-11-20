// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./pages/App";
// import reportWebVitals from "./reportWebVitals";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterCard from "./pages/FooterCard.jsx";
import LoginCard from "./pages/LoginCard.jsx";
import NavbarCard from "./pages/NavbarCard.jsx";
import VotingApp from "./pages/VotingApp.jsx";
import VotingCard from "./pages/VotingCard.jsx";
import Layout from "./pages/components/Layout.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Layout />} /> */}
          <Route path="FooterCard" element={<FooterCard />} />
          <Route path="LoginCard" element={<LoginCard />} />
          <Route path="NavbarCard" element={<NavbarCard />} />
          <Route path="VotingApp" element={<VotingApp />} />
          <Route path="VotingCard" element={<VotingCard />} />
          <Route path="NavbarCard" element={<NavbarCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
