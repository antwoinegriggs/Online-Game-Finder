import FetchLatestNews from "./FetchLastetNews";
import FetchLatestGames from "./FetchLatestGames";

const Home = () => {
  return (
    <div className="home-container">
      <FetchLatestGames />
      <FetchLatestNews />
    </div>
  );
};

export default Home;
