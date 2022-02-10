const handleSelection = (
  currentCategory,
  setCategoryStateMethod,
  itemDisplay,
  itemId,
  itemPoints
) => {
  let itemExists = false;
  let { items } = { ...currentCategory };

  items.forEach((item) => {
    if (item.id === itemId) itemExists = true;
  });

  if (itemExists) {
    items = items.filter((item) => {
      return item.id !== itemId;
    });
  } else {
    items.push({
      display: itemDisplay,
      id: itemId,
      points: itemPoints,
    });
  }

  setCategoryStateMethod((prevState) => {
    return {
      ...prevState,
      items,
    };
  });
};

export default handleSelection;
