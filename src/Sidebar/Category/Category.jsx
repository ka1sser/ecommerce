import './Category.css'

const Category = () => {
    return (
      <div>
        <h2 className="sidebar-title">Category</h2>
        <div>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>All
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Sneakers
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Flats
          </label>
          <label className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Sandals
          </label>
        </div>
      </div>
    );
};

export default Category;