import { quotesData } from "../components/Quotes";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/bookmarksSlice";

interface RootState {
  bookmarks: quotesData[];
}

const Bookmark = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state: RootState) => state.bookmarks)
  // const quotes: quotesData[] = JSON.parse(localStorage.getItem("bookmarks") || "[]");

  const handleRemove = (id: any) => {
    dispatch(remove(id))
  }

  if(quotes.length === 0) {
    return <h1 className="text-[#D05252] text-center text-3xl">There is no quotes in your Fav list.∅</h1>
  }

  return <>
    {
      quotes.map((quote: quotesData) => (
        <section key={quote._id} className="bg-[#D05252] mt-10 pt-7 pb-7 mx-auto relative rounded-xl w-[750px] min-h-[300px] h-auto text-white">
        <div className="flex mx-auto items-center justify-center flex-col w-[594px]">
          <h1 className="text-3xl text-left leading-10 mx-auto min-h-[120px] h-auto">
            {quote.content}
          </h1>
          <div className="flex mt-20">
            <p className="text-lg font-[700] leading-[38px] tracking-[0.8px]">-{quote.author}</p>
            <MdDeleteForever
            onClick={() => handleRemove(quote._id)}
            className="absolute right-10 mr-12 text-2xl cursor-pointer active:animate-bounce"
          />
          </div>
        </div>
      </section>
      ))
    }
    </>;
};

export default Bookmark;
