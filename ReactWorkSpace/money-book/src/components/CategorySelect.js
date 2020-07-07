import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'


class CategorySelect extends React.Component {
  constructor (props) {
    super(props);
  }
  selectedCategory(event, category) {
    this.props.onSelectCategory(category);
    event.preventDefault();
  }
  render() {
    const { categories, selectedCategory } = this.props;
    const selectedCategoryId = selectedCategory ? selectedCategory.id : undefined;
    return (
      <div className="category-select-component">
        <div className="row">
          {
            categories.map((category, index) => {
              const iconColor = category.id === selectedCategoryId ? '#fff' : '#555';
              const backColor = category.id === selectedCategoryId ? '#347eff' : '#efefef';
              const activeClassName = selectedCategoryId === category.id ? 
              'category-item col-3 active' : 'category-item col-3';
              return (
                <div 
                  className={activeClassName} 
                  key={index}
                  role="button"
                  style={{ textAlign: 'center' }}
                  onClick={(event) => {this.selectedCategory(event, category);}}
                >
                  <Ionicon 
                    className="rounded-circle"
                    fontSize="50px"
                    style={{ backgroundColor: backColor, padding: '5px'}}
                    color={iconColor}                      
                    icon={category.iconName}
                  />
                  <p>{category.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}


CategorySelect.propTypes = {
  selectedCategory: PropTypes.object,
  categories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired
};

export default CategorySelect;
