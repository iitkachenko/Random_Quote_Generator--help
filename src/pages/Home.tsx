import Tags from "../components/Tags";
import Quotes from "../components/Quotes";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <Quotes />
        <Tags />
        <button className="bg-[#009C51] shadow-shadowCustom mt-14 px-9 py-2 text-white text-3xl rounded-2xl">
          Next Quote
        </button>
      </div>
    </>
  );
};

export default Home;
