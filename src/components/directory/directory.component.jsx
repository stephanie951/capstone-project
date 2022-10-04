import CategoryItem from "../category-items/category-item.component";
import "./directory.style.scss"

const Directory = ({categories})=>{
    return (
      <div className="directories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    );
}

export default Directory