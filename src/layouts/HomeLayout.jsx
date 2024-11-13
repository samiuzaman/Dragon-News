import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
