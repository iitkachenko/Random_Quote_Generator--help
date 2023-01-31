import Tags from "../components/Tags";
import Quotes from "../components/Quotes";
import { useDispatch } from "react-redux";
import { fetchQuotes } from "../store/quotesSlice";
import { AppDispatch } from "../store/store";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
      <div className="text-center mb-10">
        <Quotes />
        <Tags />
        <button onClick={() => dispatch(fetchQuotes())} className="bg-[#009C51] shadow-shadowCustom mt-14 px-9 py-2 text-white text-3xl rounded-2xl">
          Next Quote
        </button>
      </div>
    </>
  );
};

export default Home;
