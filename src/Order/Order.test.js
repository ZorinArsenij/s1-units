import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

const defaultProps = {
    shop: '1', 
    data: 1
}

configure({ adapter: new Adapter() });

describe('Order component', () => {
  const wrapper = shallow(<Order order={defaultProps}/>);

  it('shop name render', () => {
    const order = {
        shop: 'shop',
        date: 1,
        items: [
            'item1',
            'item2',
            'item3',
        ]
    };

    wrapper.setProps({order: order})
    expect(wrapper.find(".Order-shop").contains(order.shop)).toBeTruthy();
  });

  it('has items', () => {
    const order = {
        shop: 'shop',
        date: 1,
        items: [
            'item1',
            'item2',
            'item3',
        ]
    };

    wrapper.setProps({order: order})
    expect(wrapper.find(".Order-items").children()).toHaveLength(order.items.length)
  });

  it('has not items', () => {
    const order = {
        shop: 'shop',
        date: 1,
    };

    wrapper.setProps({order: order})
    expect(wrapper.find(".Order-items").children()).toHaveLength(0)
  });
});
