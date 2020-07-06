import React from 'react'
import { shallow } from 'enzyme'
import Ionicon from 'react-ionicons'
import PriceList from '../PriceList'

const categories = {
  '1': {
    id: '1',
    name: '旅行',
    type: 'outcome',
    iconName: 'ios-plane'
  },
  '2': {
    id: '2',
    name: '理财',
    type: 'income',
    iconName: 'logo-yen'
  }
};

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2020-06-10",
    "cid": 1
  },
  {
    "id": 2,
    "title": "理财收入",
    "price": 400,
    "date": "2020-07-10",
    "cid": 2
  }  
];

const itemsWithCategory = items.map(item => {
  item.category = categories[item.cid];
  return item;
});

const props = {
  items: itemsWithCategory,
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn()
};

let wrapper;
describe('test PriceList component', () => {
  beforeEach(() => {
    wrapper = shallow(<PriceList {...props}/>);
  });
  it('should render component to match snapshot', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('should render correct price items length', () => {
    expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length);
  });
  it('should render correct icon and price for each item', () => {
    const iconList = wrapper.find('.list-group-item').first().find(Ionicon);
    expect(iconList.length).toEqual(3);
    expect(iconList.first().props().icon).toEqual(itemsWithCategory[0].category.iconName);
  });
  it('should trigger the correct function callbacks', () => {
    const firstItem = wrapper.find('.list-group-item').first();
    firstItem.find('a').first().simulate('click');
    expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0]);
    firstItem.find('a').last().simulate('click');
    expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0]);
  });
});
