import Body from "./Body.jsx";
import NewsSidebar from "./News.jsx";
const Home = () => {
  return (
    <div className="flex-1 flex overflow-hidden">
      <Body />
      <NewsSidebar />
    </div>
  );
};

export default Home;
