import VotingApp from "./VotingApp";
import NavbarCard from "./components/NavbarCard.jsx";
import LoginCard from "./components/LoginCard";
import FooterCard from "./components/FooterCard";
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
