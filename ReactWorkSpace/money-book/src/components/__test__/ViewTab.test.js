import React from 'react'
import { shallow } from 'enzyme'
import ViewTab from '../ViewTab'
import { LIST_VIEW, CHART_VIEW } from '../../utility'


const props = {
  activeTab: LIST_VIEW,
  onTabChange: jest.fn()
}

let wrapper;
describe('test ViewTab component', () => {
  beforeEach(() => {
    wrapper = shallow(<ViewTab {...props}/>);
  });
  it('should render component to match snapshot', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('测试第一个是不是列表模式和点击时传递的参数', () => {    
    const firstItem = wrapper.find('.nav-link').first();
    expect(firstItem.text()).toEqual('<Ionicon />列表模式');
    firstItem.simulate('click');
    expect(props.onTabChange).toHaveBeenCalledWith(LIST_VIEW);
  });
});

