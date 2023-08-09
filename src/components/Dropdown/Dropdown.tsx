import { DropdownProps } from "../../types";
import categoriesName from "../../data/notesCategories";

const Dropdown: React.FC<DropdownProps> = ({ category, onChange }) => {
  return (
    <div className="relative inline-block w-full text-gray-700">
      <select
        value={category || ""}
        name="category"
        onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select Category</option>
        {categoriesName.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
