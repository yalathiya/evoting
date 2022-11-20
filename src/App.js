import VotingApp from "./VotingApp";
import NavbarCard from "./components/NavbarCard.jsx";
import LoginCard from "./components/LoginCard";
const App = () => {
  document.title = `E-Voting`;
  return (
    <>
      <NavbarCard />
      <LoginCard />
      {/* <VotingApp /> */}
    </>
  );
};

export default App;
