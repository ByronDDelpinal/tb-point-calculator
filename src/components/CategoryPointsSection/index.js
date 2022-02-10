import {
  calculatePoints,
  calculateFullCategoryPoints,
} from "../../helpers/calculate-points";

const CategoryPointsSection = ({ category, children }) => {
  return (
    <section className="category-divide">
      <h3 className={`category-title${(category.maxPoints <= calculateFullCategoryPoints(category)) ? ' category-max-reached' : ''}`}>
        {category.display} Points {calculatePoints(category)}/
        {category.maxPoints} ({calculateFullCategoryPoints(category)} earned)
      </h3>
      {children}
      <ul className="category-item-list">
        {category.items.map((item) => {
          return (
            <li className="category-item" key={item.id}>
              {item.display} ({item.points})
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CategoryPointsSection;
