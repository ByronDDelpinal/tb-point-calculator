const calculatePoints = (category) => {
  let totalPoints = 0;

  category.items.forEach((item) => {
    const sum = totalPoints + item.points;

    if (sum > category.maxPoints) return category.maxPoints;

    totalPoints += item.points;
  });

  return totalPoints;
};

const calculateFullCategoryPoints = (category) => {
  let totalPoints = 0;

  category.items.forEach((item) => {
    totalPoints += item.points;
  });

  return totalPoints;
};

const calculateTotalPoints = (categories) => {
  let totalPoints = 0;

  categories.forEach((category) => {
    let categoryPoints = 0;

    category.items.forEach((item) => {
      const sum = categoryPoints + item.points;

      if (sum > category.maxPoints) {
        categoryPoints = category.maxPoints;
      } else {
        categoryPoints += item.points;
      }
    });

    totalPoints += categoryPoints;
  });

  return totalPoints;
};

export { calculatePoints, calculateFullCategoryPoints, calculateTotalPoints };
