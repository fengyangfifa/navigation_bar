import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'

import Home from './containers/Home'
import Create from './containers/Create'
import {  
  flatternArr, 
  ID,
  parseToYeatAndMonth
} from './utility'

// 上下文对象
export const AppContext = React.createContext();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      categories: {},
      currentDate: parseToYeatAndMonth('2018/11/01'),
      isLoading: false
    };
    // 在发起请求前显示loading
    const withLoading = (cb) => {
      return (...args) => {
        this.setState({
          isLoading: true
        });
        return cb(...args);
      }
    }
    this.actions = {
      getEditData: withLoading(async(id) => {
        const { items, categories } = this.state;
        let promiseArr = [];
        // 判断是否需要请求categories
        if (Object.keys(categories).length === 0 ) {
          promiseArr.push(axios.get('/categories'));
        }
        const itemAlreadyFetched = (Object.keys(items).indexOf(id) > -1);
        // 判断是否需要请求item数据
        if (id && !itemAlreadyFetched) {
          const getUrlWithID = `/items/${id}`;
          promiseArr.push(axios.get(getUrlWithID));
        }
        const [fetchedCategories, editItem] = await Promise.all(promiseArr);
        const finalCategories = fetchedCategories ? flatternArr(fetchedCategories.data) : categories;
        const finalItem = editItem ? editItem.data : items[id];
        if (id) {
          this.setState({
            categories: finalCategories,
            items: {...this.state.items, [id]: finalItem},
            isLoading: false
          });
        } else {
          this.setState({
            categories: finalCategories,
            isLoading: false
          });
        }
        return {
          categories: finalCategories,
          editItem: finalItem
        }
      }),
      selectNewMonth: withLoading(async(year, month) => {
        const getUrlWithData = `/items?monthCategory=${year}-${month}&_sort=timestamp&_order=desc`;
        const items = await axios.get(getUrlWithData);
        this.setState({
          items: flatternArr(items.data),
          currentDate: {year, month},
          isLoading: false
        });
      }),
      getInitialData: withLoading(async() => {
        const { currentDate } = this.state;
        const getUrlWithData = `/items?monthCategory=${currentDate.year}-${currentDate.month}&_sort=timestamp&_order=desc`;
        const results = await Promise.all([axios.get('/categories'), axios.get(getUrlWithData)]);
        const [categories, items] = results;
        this.setState({
          items: flatternArr(items.data),
          categories: flatternArr(categories.data),
          isLoading: false
        });
      }),
      deleteItem: withLoading(async(item) => {
        await axios.delete(`/items/${item.id}`);
        delete this.state.items[item.id];
        this.setState({
          items: this.state.items,
          isLoading: false
        });
      }),
      createItem: withLoading(async(data, categoryId) => {
        const newId = ID();
        const parseDate = parseToYeatAndMonth(data.date);
        data.monthCategory = `${parseDate.year}-${parseDate.month}`;
        data.timestamp = new Date(data.date).getTime();
        const newItem = await axios.post('/items', {
          ...data, 
          id: newId,
          cid: categoryId
        });
        this.setState({
          isLoading: false
        });
        return newItem;
      }),
      updateItem: withLoading(async(item, updatedCategoryId) => {
        const parseDate = parseToYeatAndMonth(item.date);
        const modifiedItem = await axios.put(`/items/${item.id}`, {
          ...item,
          cid: updatedCategoryId,
          timestamp: new Date(item.date).getTime(),
          monthCategory: `${parseDate.year}-${parseDate.month}`
        });
        this.setState({
          isLoading: false
        });
        return modifiedItem;
      })
    }
  }
  render() {
    return (
      <AppContext.Provider 
        value={{
          state: this.state,
          actions: this.actions
        }}
      >
        <Router>
          <div className="App">
            <Route path="/" exact component={Home}/>
            <Route path="/create" component={Create}/>
            <Route path="/edit/:id" component={Create}/>
          </div>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
