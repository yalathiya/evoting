import { Outlet, Link } from "react-router-dom";

import VotingApp from "../VotingApp";
import NavbarCard from "../NavbarCard.jsx";
import LoginCard from "../LoginCard";
import FooterCard from "../FooterCard.jsx";
const Layout = () => {
  document.title = `E-Voting`;
  return (
    <>
      <NavbarCard />
      <LoginCard />
      <VotingApp />
      <FooterCard />
      {/* <Outlet />/ */}
    </>
  );
};

export default Layout;
