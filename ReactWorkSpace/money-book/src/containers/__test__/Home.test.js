import React from 'react'
import { mount } from 'enzyme'

import Home from '../Home'
import PriceList from '../../components/PriceList'
import ViewTab from '../../components/ViewTab'
import MonthPicker from '../../components/MonthPicker'
import TotalPrice from '../../components/TotalPrice'
import CreateBtn from '../../components/CreateBtn'
import {
  LIST_VIEW,
  CHART_VIEW,
  TYPE_OUTCOME,
  parseToYeatAndMonth,
  padLeft
} from '../../utility'

const newItem = {
  'id': 4,
  'title': '新添加的项目',
  'price': 300,
  'date': '2018-10-10',
  'cid': 1,
  "category": {
    "iconName": "ios-plane",
    "id": "1",
    "name": "旅行",
    "type": "outcome",
  }  
};

let wrapper;
describe('test Home component', () => {
  beforeEach(() => {
    wrapper = mount(<Home />);
  });
  it('should render the default layout', () => {
    const currentDate = parseToYeatAndMonth('2018/10/01');
    expect(wrapper.find(PriceList).length).toEqual(1);
    expect(wrapper.find(ViewTab).props().activeTab).toEqual(LIST_VIEW);
    expect(wrapper.find(MonthPicker).props().year).toEqual(currentDate.year);
    expect(wrapper.find(MonthPicker).props().month).toEqual(currentDate.month);
    expect(wrapper.find(PriceList).props().items.length).toEqual(1);
  });
  it('click the another view tab, should change the default view', () => {
    wrapper.find('.nav-item a').last().simulate('click');
    expect(wrapper.find(PriceList).length).toEqual(0);
    expect(wrapper.find('.chart-title').length).toEqual(1);
    expect(wrapper.find(ViewTab).props().activeTab).toEqual(CHART_VIEW);
  });
  it('click the new month item, should switch to the correct items', () => {
    wrapper.find('.dropdown-toggle').simulate('click');
    wrapper.find('.months-range .dropdown-item').at(8).simulate('click');
    expect(wrapper.find(MonthPicker).props().month).toEqual(9);
    expect(wrapper.find(PriceList).props().items.length).toEqual(2);
  });
  it('click the correct button, should create the new button', () => {
    wrapper.find(CreateBtn).simulate('click');
    expect(wrapper.find(PriceList).props().items.length).toEqual(2);
    expect(wrapper.state('items')[0]).toEqual(newItem);
  });
});
