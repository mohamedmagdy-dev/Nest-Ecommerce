import { useSelector, useDispatch } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { SectionInfo } from "../components/Base_Ui";
import { TableProducts } from "../components/Product";
import Table from "../components/Table";
import {
  removeFromCompare,
  clearCompare,
} from "../features/compare/compareSlice";

export default function Compare() {
  const dispatch = useDispatch();
  const { compareItems, itemsQuantity } = useSelector((state) => state.compare);

  return (
    <div className="compare py-10">
      <div className="container  mx-auto px-4 ">
        <div className="flex justify-between items-end flex-wrap">
          <SectionInfo itemsCount={itemsQuantity} sectionName="Compare" />

          <button
            onClick={() => dispatch(clearCompare())}
            className="flex gap-1 cursor-pointer mb-4 text-red-500 font-bold"
          >
            <DeleteForeverIcon fontSize="small" />
            Clear Compare
          </button>
        </div>
        <Table
          titles={[
            "Preview",
            "Name",
            "Price",
            "Rating",
            "Description",
            "Stock status",
            "Weight",
            "Dimensions",
            "Buy now",
            "Delete Product",
          ]}
          items={
            <TableProducts
              items={compareItems}
              removeFrom={removeFromCompare}
              tableFelidsCount={10}
              tableName="compare"
            />
          }
        />
      </div>
    </div>
  );
}
