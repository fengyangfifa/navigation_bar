import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceList from './components/PriceList';

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
        <PriceList 
          items={items}
          onModifyItem={(item) => {alert(item.title)}}
          onDeleteItem={(item) => {alert(item.title)}}
        />
      </div>
    );
  }
}

export default App;
