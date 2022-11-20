import VotingApp from "./VotingApp";
import NavbarCard from "./components/NavbarCard.jsx";
const App = () => {
  document.title = `E-Voting`;
  return (
    <>
      <NavbarCard />
      <VotingApp />
    </>
  );
};

export default App;
