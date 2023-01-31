import { fetchTags } from "../store/tagsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { useEffect, useState } from "react";

interface TagData {
  dateAdded: string;
  dateModified: string;
  name: string;
  quoteCount: number;
  slug: string;
  _id: string;
}

const Tags = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showTags, setShowTags] = useState(false);
  const { data: tags, status } = useSelector((state: any) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <div className="mt-14 mx-auto relative h-11 bg-gray-300 border-2 flex items-center justify-center gap-[.5em] p-[.5em] rounded-3xl outline-none w-[20em] focus:border-cyan-300">
      <span className="flex-grow-[1] flex gap-2 flex-wrap"></span>
      {showTags && (
        <button
          onClick={() => setShowTags(false)}
          className="bg-none border-t-gray-800 border-none outline-none cursor-pointer p-0 text-xl focus:text-gray-700 hover:text-gray-700"
        >
          &times;
        </button>
      )}
      <div className="bg-gray-400 self-stretch w-[0.05em]"></div>
      <div
        onClick={() => setShowTags(true)}
        className="border-[.38em] cursor-pointer border-transparent border-t-gray-800
      translate-y-[25%]"
      ></div>
      {showTags && (
        <ul
          className={`absolute overflow-y-scroll m-0 p-0 list-none max-h-60 border-2 border-gray-400 rounded-md w-full left-0 top-[calc(100%+.25em)] bg-white z-10`}
        >
          {tags.map((tag: TagData) => {
            return (
              <li
                key={tag._id}
                onClick={() => setShowTags(false)}
                className="p-4 cursor-pointer uppercase rounded-lg active:bg-[#D05252] active:text-white"
              >
                {tag.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Tags;
