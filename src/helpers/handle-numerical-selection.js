const handleNumericalSelection = (
  currentCategory,
  setCategoryStateMethod,
  itemDisplay,
  itemId,
  pointsPerQuantity,
  quantity
) => {
  let itemExists = false;
  let { items } = { ...currentCategory };

  items.forEach((item) => {
    if (item.id === itemId) {
      itemExists = true;

      if (quantity === 0) {
        items = items.filter((item) => {
          return item.id !== itemId;
        });
      } else {
        item.points = pointsPerQuantity * quantity;
      }
    }
  });

  if (!itemExists) {
    items.push({
      display: itemDisplay,
      id: itemId,
      points: pointsPerQuantity * quantity,
    });
  }

  setCategoryStateMethod((prevState) => {
    return {
      ...prevState,
      items,
    };
  });
};

export default handleNumericalSelection;
