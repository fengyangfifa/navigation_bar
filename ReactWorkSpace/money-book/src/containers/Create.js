import React from 'react'
import { withRouter } from 'react-router-dom'

import CategorySelect from '../components/CategorySelect'
import { Tabs, Tab } from '../components/Tabs'
import PriceForm from '../components/PriceForm'
import { TYPE_INCOME, TYPE_OUTCOME } from '../utility'
import withContext from '../WithContext'

const tabsText = [TYPE_OUTCOME, TYPE_INCOME];
class Create extends React.Component {
  constructor (props) {
    super(props);
    const { id } = this.props.match.params;
    const { items, categories } = props.data;
    this.state = {
      selectedTab: (id && items[id]) ? categories[items[id].cid].type : TYPE_OUTCOME,
      selectedCategory: (id && items[id]) ? categories[items[id].cid] : null
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.actions.getEditData(id).then(data => {
      const {editItem, categories} = data;
      this.setState({
        selectedTab: (id && editItem) ? categories[editItem.cid].type : TYPE_OUTCOME,
        selectedCategory: (id && editItem) ? categories[editItem.cid] : null
      });
    });
  }
  changeView = (index) => {
    this.setState({
      selectedTab: tabsText[index]
    });
  }
  cancelSubmit = () => {
    this.props.history.push('/');
  }
  submitForm = (data, isEditMode) => {
    if (!isEditMode) {
      // 创建
      if (this.state.selectedCategory) {
        this.props.actions.createItem(data, this.state.selectedCategory.id).then(() => {
          this.props.history.push('/');
        });
      } else {
        return ;
      }
    } else {
      // 更新
      this.props.actions.updateItem(data, this.state.selectedCategory.id).then(() => {
        this.props.history.push('/');
      });
    }
  }
  selectCategory = (category) => {
    this.setState({
      selectedCategory: category
    });
  }
  render() {
    const { id } = this.props.match.params;
    const { items, categories } = this.props.data;
    const editItem = (id && items[id]) ? items[id] : {};
    const { selectedTab, selectedCategory } = this.state;
    const filterCategoties = Object.keys(categories)
    .filter(id => categories[id].type === selectedTab)
    .map(id => categories[id]);
    const tabIndex = tabsText.findIndex(text => text === selectedTab);
    return (
      <div className="create-page py-3 px-3 rounded mt-3" style={{background: '#fff'}}>
        <Tabs activeIndex={tabIndex} onTabChange={this.changeView}>
          <Tab>支出</Tab>
          <Tab>收入</Tab>
        </Tabs>
        <CategorySelect 
          selectedCategory={selectedCategory}
          categories={filterCategoties} 
          onSelectCategory={this.selectCategory} 
        />
        <PriceForm 
          item={editItem}
          onFormSubmit={this.submitForm}
          onCancelSubmit={this.cancelSubmit}
        />
      </div>    
    )
  }
}

export default withRouter(withContext(Create));
