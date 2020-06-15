import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import { LIST_VIEW, CHART_VIEW } from './utility'
import MonthPicker from './components/MonthPicker'


const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  },
  {
    "id": 2,
    "title": "去丽江旅游",
    "price": 400,
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  }  
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <PriceList 
          items={items}
          onModifyItem={(item) => {alert(item.title)}}
          onDeleteItem={(item) => {alert(item.title)}}
        /> */}
        {/* <ViewTab 
          activeTab={LIST_VIEW}
          onTabChange={(view) => {console.log(view);}}
        /> */}
        <MonthPicker 
          year={2018}
          month={5}
        />
      </div>
    );
  }
}

export default App;
