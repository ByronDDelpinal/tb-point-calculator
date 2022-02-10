import handleSelection from "../../helpers/handle-selection";

const ItemCheckbox = (props) => {
  const { category, setCategoryPointsMethod, itemDisplay, itemId, itemPoints } =
    props;

  return (
    <label className="selection-item" key={itemId}>
      <input
        onChange={() =>
          handleSelection(
            category,
            setCategoryPointsMethod,
            itemDisplay,
            itemId,
            itemPoints
          )
        }
        type="checkbox"
      />
      {itemDisplay}
    </label>
  );
};

export default ItemCheckbox;
