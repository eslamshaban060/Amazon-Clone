import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { setSearchQuery,sortItems } from "@/redux/slices/listSlice";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const { searchQuery, sortedBy } = useAppSelector((state) => state.list);

  return (
    <div className="mb-4 flex items-center sm:flex-row flex-col w-[90%] gap-2">
      <input
        type="text"
        placeholder="Search this list"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="flex-1 rounded border px-3 py-2"
      />
      <div className="actions flex gap-2 w-40">
        <select
          name="sort"
          id="Sort"
          className="flex-1 rounded border px-3 py-2"
          value={sortedBy}
          onChange={(e) => dispatch(sortItems(e.target.value))}
        >
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
    </div>
  );
}
