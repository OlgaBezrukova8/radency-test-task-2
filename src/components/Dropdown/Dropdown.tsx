import { DropdownProps } from "../../types";
import categoriesName from "../../data/notesCategories";

const Dropdown: React.FC<DropdownProps> = ({ category, onChange }) => {
  return (
    <div>
      <select value={category || ""} name="category" onChange={onChange}>
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
