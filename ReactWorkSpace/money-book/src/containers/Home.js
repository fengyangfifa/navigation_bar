import React from 'react'
import Ionicon from 'react-ionicons'
import { withRouter } from 'react-router-dom'

import PriceList from '../components/PriceList'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'
import CreateBtn from '../components/CreateBtn'
import {Tabs, Tab} from '../components/Tabs'
import withContext from '../WithContext'
import Loader from '../components/Loader'
import PieChart from '../components/PieChart'
import {
  LIST_VIEW,
  CHART_VIEW,
  TYPE_OUTCOME,
  TYPE_INCOME
} from '../utility'

// tab文本
const tabsText = [LIST_VIEW, CHART_VIEW];

// 生成图表显示需要的对象格式
const generateChartDataByCategory = (items, type = TYPE_INCOME) => {
  let categoryMap = {};
  items.filter(item => item.category.type === type).forEach(item => {
    if (categoryMap[item.cid]) {
      categoryMap[item.cid].value += (item.price * 1);
      categoryMap[item.cid].items.push(item.id); 
    } else {
      categoryMap[item.cid] = {
        name: item.category.name,
        value: item.price * 1,
        items: [item.id]
      };
    }
  });
  return Object.keys(categoryMap).map(mapKey => {
    return {...categoryMap[mapKey]};
  });
};

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tabView: LIST_VIEW
    };
  }

  componentDidMount() {
    this.props.actions.getInitialData();
  }

  changeView = (index) => {
    this.setState({
      tabView: tabsText[index]
    });
  }

  changeDate = (year, month) => {
    this.props.actions.selectNewMonth(year, month);
  }

  modidyItem = (modifiedItem) => {
    this.props.history.push(`/edit/${modifiedItem.id}`);
  }

  createItem = () => {
    this.props.history.push('/create');
  }

  deleteItem = (item) => {
    this.props.actions.deleteItem(item);
  }

  render() {
    // console.log(this.context);    
    const { items, categories, currentDate, isLoading } = this.props.data;
    const { tabView } = this.state;
    const itemsWithCategory = Object.keys(items).map(id => {
      items[id].category = categories[items[id].cid];
      return items[id];
    });
    let totalIncome = 0, totalOutcome = 0;    
    itemsWithCategory.forEach(item => {
      if(item.category.type === TYPE_OUTCOME) {
        totalOutcome += item.price;
      } else {
        totalIncome += item.price;
      }
    });
    const chartOutcomeDataByCategory = generateChartDataByCategory(itemsWithCategory, TYPE_OUTCOME);
    const chartIncomeDataByCategory = generateChartDataByCategory(itemsWithCategory, TYPE_INCOME);
    return (
      <React.Fragment>
        <header className="App-header">
          <div className="row">
            <div className="col">
              <MonthPicker 
                year={currentDate.year}
                month={currentDate.month}
                onChange={this.changeDate}
              />
            </div>
            <div className="col">
              <TotalPrice 
                income={totalIncome}
                outcome={totalOutcome}
              />
            </div>
          </div>          
        </header>
        <div className="content-area py-3 px-3">
          { isLoading && <Loader />}
          {
            !isLoading && 
            <React.Fragment>
              <Tabs activeIndex={0} onTabChange={this.changeView}>
                <Tab>
                  <Ionicon 
                    className="rounded-circle mr-2"
                    fontSize="25px"
                    color={'#007bff'}
                    icon='ios-paper'
                  />
                  列表模式
                </Tab>
                <Tab>
                  <Ionicon 
                    className="rounded-circle mr-2"
                    fontSize="25px"
                    color={'#007bff'}
                    icon='ios-pie'
                  />
                  图表模式              
                </Tab>
              </Tabs>
              {/* <ViewTab 
                activeTab={tabView}
                onTabChange={this.changeView}
              /> */}
              <CreateBtn 
                onClick={this.createItem} 
              />
              { 
                tabView === LIST_VIEW && itemsWithCategory.length > 0 &&
                <PriceList 
                  items={itemsWithCategory}
                  onModifyItem={this.modidyItem}
                  onDeleteItem={this.deleteItem}
                />
              }
              { 
                tabView === LIST_VIEW && itemsWithCategory.length === 0 &&
                <div className="alert alert-light text-center">
                  您还没有任何记账记录
                </div>
              }
              {
                tabView === CHART_VIEW && 
                <React.Fragment>
                  <PieChart title="本月支出" categoryData={chartOutcomeDataByCategory} />
                  <PieChart title="本月收入" categoryData={chartIncomeDataByCategory} />
                </React.Fragment>
              }              
            </React.Fragment>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withContext(Home));
