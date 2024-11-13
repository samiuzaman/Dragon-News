import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
      </header>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
