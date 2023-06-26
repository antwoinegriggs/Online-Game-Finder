import FetchLatestNews from "./FetchLastetNews";
import FetchLatestGames from "./FetchLatestGames";

const Home = () => {
  return (
    <div class="home-container">
      <FetchLatestGames />
      <FetchLatestNews />
    </div>
  );
};

export default Home;
