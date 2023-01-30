import { useEffect } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/bookmarksSlice";
import { fetchQuotes } from "../store/quotesSlice";
import { Status } from "../store/quotesSlice";
import { AppDispatch } from "../store/store";

export interface quotesData {
  _id: string;
  content: string;
  author: string;
}

const Quotes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: quotes, status } = useSelector((state: any) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  const handleAdd = (quotes: quotesData) => {
    dispatch(add(quotes));
  };

  if (status === Status.LOADING) {
    return <div className="lds-hourglass flex justify-center items-center" />;
  }

  if (status === Status.ERROR) {
    return (
      <h2 className="text-3xl text-white">Sorry, Something went wrong!!𐲡</h2>
    );
  }

  return (
    <section className="bg-[#D05252] mt-10 pt-7 pb-7 mx-auto relative rounded-xl w-[750px] min-h-[300px] h-auto text-white">
      <div className="flex mx-auto items-center justify-center flex-col w-[594px]">
        <h1 className="text-3xl text-left leading-10 mx-auto min-h-[120px] h-auto">
          {quotes.content}
        </h1>
        <div className="flex mt-20">
          <p className="text-lg font-[700] leading-[38px] tracking-[0.8px]">-{quotes.author}</p>
          <BsFillBookmarkPlusFill
            onClick={() => handleAdd(quotes)}
            className="absolute right-10 mr-12 text-2xl cursor-pointer active:animate-ping"
          />
        </div>
      </div>
    </section>
  );
};

export default Quotes;
