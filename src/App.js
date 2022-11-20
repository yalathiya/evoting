import VotingApp from "./pages/VotingApp";
import NavbarCard from "./pages/NavbarCard.jsx";
import LoginCard from "./pages/LoginCard";
import FooterCard from "./pages/FooterCard.jsx";
const App = () => {
  document.title = `E-Voting`;
  return (
    <>
      <NavbarCard />
      <LoginCard />
      {/* <VotingApp /> */}
      <FooterCard />
    </>
  );
};

export default App;
