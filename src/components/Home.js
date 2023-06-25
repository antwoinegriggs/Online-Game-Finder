import FetchLatestNews from "./FetchLastetNews";
import FetchLatestGames from "./FetchLatestGames";

const Home = () => {
  return (
    <div class="home-container">
      <FetchLatestNews />
      )(
      <FetchLatestGames />
    </div>
  );
};

export default Home;
