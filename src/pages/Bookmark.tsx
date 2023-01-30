import { quotesData } from "../components/Quotes";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/bookmarksSlice";

interface RootState {
  bookmarks: quotesData[];
}

const Bookmark = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state: RootState) => state.bookmarks);

  const handleRemove = (id: any) => {
    console.log(id);
    dispatch(remove(id))
  }

  return <div>
    {
      quotes.map((quote: quotesData) => (
        <section key={quote._id} className="bg-[#D05252] mt-10 pt-7 pb-7 mx-auto relative rounded-xl w-[750px] min-h-[300px] h-auto text-white">
        <div className="flex mx-auto items-center justify-center flex-col w-[594px]">
          <h2 className="text-3xl text-left leading-10 mx-auto min-h-[120px] h-auto">
            {quote.content}
          </h2>
          <div className="flex mt-20">
            <p className="text-lg font-[700] leading-[38px]">-{quote.author}</p>
            <MdDeleteForever
            onClick={() => handleRemove(quote._id)}
            className="absolute right-10 mr-12 text-2xl cursor-pointer"
          />
          </div>
        </div>
      </section>
      ))
    }
    </div>;
};

export default Bookmark;
