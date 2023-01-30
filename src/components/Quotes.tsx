import { useState, useEffect } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { add } from "../store/bookmarksSlice";

export interface quotesData {
  _id: string;
  content: string;
  author: string;
}

const Quotes = () => {
  const dispatch = useDispatch();
  const [quotes, setquotes] = useState<quotesData>({
    _id: "",
    content: "",
    author: "",
  });

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((resp) => resp.json())
      .then(({ _id, content, author }) => setquotes({ _id, content, author }));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleAdd = (quotes: quotesData) => {
    dispatch(add(quotes));
  };

  return (
    <section className="bg-[#D05252] mt-10 pt-7 pb-7 mx-auto relative rounded-xl w-[750px] min-h-[300px] h-auto text-white">
      <div className="flex mx-auto items-center justify-center flex-col w-[594px]">
        <h2 className="text-3xl text-left leading-10 mx-auto min-h-[120px] h-auto">
          {quotes.content}
        </h2>
        <div className="flex mt-20">
          <p className="text-lg font-[700] leading-[38px]">-{quotes.author}</p>
          <BsFillBookmarkPlusFill
            onClick={() => handleAdd(quotes)}
            className="absolute right-10 mr-12 text-2xl cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Quotes;
