import handleNumericalSelection from "../../helpers/handle-numerical-selection";

const ItemTextbox = (props) => {
  const {
    category,
    setCategoryPointsMethod,
    itemDisplay,
    itemId,
    pointsPerQuantity,
    maxQuantity
  } = props;

  return (
    <label className="selection-item" key={itemId}>
      <input
        className="numeric-input"
        min="0"
        max={maxQuantity ? maxQuantity : 100}
        onChange={(event) =>
          handleNumericalSelection(
            category,
            setCategoryPointsMethod,
            itemDisplay,
            itemId,
            pointsPerQuantity,
            event.target.value
          )
        }
        type="number"
      />
      {itemDisplay}
    </label>
  );
};

export default ItemTextbox;
