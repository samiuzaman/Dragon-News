import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LeftNavbar";
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
      <main className="w-11/12 lg:w-5/6 mx-auto grid lg:grid-cols-12 gap-6">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-5">Dragon News Home</section>
        <aside className="col-span-3">Login</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
