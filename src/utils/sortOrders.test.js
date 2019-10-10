import React from 'react'
import {sortByItemCount} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('first order is null', () => {
		const order = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemCount(null, order);
		expect(result).toBe(0);
	})

	it('second order is null', () => {
		const order = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemCount(order, null);
		expect(result).toBe(0);
	})

	it('first order length is bigger', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toBe(1);
	})

	it('second order length is bigger', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toBe(-1);
	})

	it('orders aren\'t object', () => {
		const result = sortByItemCount(1, 2);
		expect(result).toBe(0)
	})

	it('first order iisn\'t object', () => {
		const order = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemCount(1, order)
		expect(result).toBe(0)
	})

	it('first order isn\'t object', () => {
		const order = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemCount(order, 1)
		expect(result).toBe(0)
	})

	it('orders don\'t have items fields', () => {
		const result = sortByItemCount({}, {})
		expect(result).toBe(0)
	})

	it('first order doesn\'t have items field', () => {
		const order = {
			items: ['item1', 'item2'],
		}
		const result = sortByItemCount({}, order)
		expect(result).toBe(0)
	})

	it('second order doesn\'t have items field', () => {
		const order = {
			items: ['item1', 'item2'],
		}
		const result = sortByItemCount(order, {})
		expect(result).toBe(0)
	})
});



