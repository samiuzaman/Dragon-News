import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";
import Footer from "../components/Footer";

const NewsDetails = () => {
  const details = useLoaderData();
  const data = details.data[0];

  return (
    <div>
      <header>
        <Header></Header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 lg:w-5/6 mx-auto grid grid-cols-12 gap-10">
        <section className="col-span-9">
          <h3 className="text-xl font-semibold text-[#403F3F]">Dragon News</h3>
          <div className="card bg-base-100 border-2 mt-6">
            <figure className="px-6 pt-6">
              <img className="w-full mb-7" src={data?.image_url} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl text-[#403F3F] font-bold pb-4">
                {data?.title}
              </h2>
              <p className=" text-[#706F6F] text-base font-medium">
                {data?.details}
              </p>
              <div className="card-actions mt-8">
                <button className="btn text-white bg-[#D72050] border-none">
                  All news in this category
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNavbar></RightNavbar>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default NewsDetails;
