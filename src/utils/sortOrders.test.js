import React from 'react'
import {sortByItemCount, sortByItemNames, sortByDate, sortOrders, sortTypes} from './sortOrders';

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

	it('first order isn\'t object', () => {
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

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('same items names', () => {
		const order = {
			items: ['aaa', 'bbb'],
		};

		const result = sortByItemNames(order, order);
		expect(result).toBe(0);
	});

	it('first order is null', () => {
		const order = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemNames(null, order);
		expect(result).toBe(0);
	})

	it('second order is null', () => {
		const order = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemNames(order, null);
		expect(result).toBe(0);
	})

	it('orders aren\'t object', () => {
		const result = sortByItemNames(1, 2);
		expect(result).toBe(0)
	})

	it('first order iisn\'t object', () => {
		const order = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemNames(1, order)
		expect(result).toBe(0)
	})

	it('first order isn\'t object', () => {
		const order = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemNames(order, 1)
		expect(result).toBe(0)
	})

	it('orders don\'t have items fields', () => {
		const result = sortByItemNames({}, {})
		expect(result).toBe(0)
	})

	it('first order doesn\'t have items field', () => {
		const order = {
			items: ['item1', 'item2'],
		}
		const result = sortByItemNames({}, order)
		expect(result).toBe(0)
	})

	it('second order doesn\'t have items field', () => {
		const order = {
			items: ['item1', 'item2'],
		}
		const result = sortByItemNames(order, {})
		expect(result).toBe(0)
	})

	it('first order length is bigger and first order items include all second order items', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	})

	it('second order length is bigger and second order items include all first order items', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1', 'item2', 'item3'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	})

	it('same items length, first bigger then second', () => {
		const order1 = {
			items: ['aaa', 'bbb'],
		};

		const order2 = {
			items: ['aaa', 'aaa'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	});

	it('same items length, second bigger then first', () => {
		const order1 = {
			items: ['aaa', 'aaa'],
		};

		const order2 = {
			items: ['aaa', 'bbb'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	});

	it('first items length bigger then second, first bigger then second', () => {
		const order1 = {
			items: ['bbb', 'ccc'],
		};

		const order2 = {
			items: ['aaa'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	});

	it('first items length bigger then second, second bigger then first', () => {
		const order1 = {
			items: ['aaa', 'bbb'],
		};

		const order2 = {
			items: ['bbb'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	});

	it('second items length bigger then first, first bigger then second', () => {
		const order1 = {
			items: ['aaa'],
		};

		const order2 = {
			items: ['bbb', 'ccc'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	});

	it('second items length bigger then first, second bigger then first', () => {
		const order1 = {
			items: ['bbb'],
		};

		const order2 = {
			items: ['aaa', 'bbb'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	});

	it('empty items arrays', () => {
		const order = {
			items: [],
		};
		const result = sortByItemNames(order, order);
		expect(result).toBe(0);
	});

	it('first order items array is empty', () => {
		const order1 = {
			items: [],
		};

		const order2 = {
			items: ['aaa'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});

	it('second order items array is empty', () => {
		const order1 = {
			items: ['aaa'],
		};

		const order2 = {
			items: [],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});

	it('compare all items', () => {
		const order1 = {
			items: ['aaa', 'bbb'],
		};

		const order2 = {
			items: ['bbb', 'aaa'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('same date', () => {
		const order = {
			date: 1,
		};
		const result = sortByDate(order, order);
		expect(result).toBe(0);
	});

	it('first order is null', () => {
		const order = {
			date: 1,
		};
		const result = sortByDate(null, order);
		expect(result).toBe(0);
	})

	it('second order is null', () => {
		const order = {
			date: 1,
		};
		const result = sortByDate(order, null);
		expect(result).toBe(0);
	})

	it('first order date is bigger', () => {
		const order1 = {
			date: 2,
		};

		const order2 = {
			date: 1,
		};
		const result = sortByDate(order1, order2);
		expect(result).toBe(-1);
	})

	it('second order length is bigger', () => {
		const order1 = {
			date: 1,
		};

		const order2 = {
			date: 2,
		};
		const result = sortByDate(order1, order2);
		expect(result).toBe(1);
	})

	it('orders aren\'t object', () => {
		const result = sortByDate(1, 2);
		expect(result).toBe(0)
	})

	it('first order isn\'t object', () => {
		const order = {
			date: 1,
		};
		const result = sortByDate(1, order)
		expect(result).toBe(0)
	})

	it('first order isn\'t object', () => {
		const order = {
			date: 1,
		};
		const result = sortByDate(order, 1)
		expect(result).toBe(0)
	})

	it('orders don\'t have date fields', () => {
		const result = sortByDate({}, {})
		expect(result).toBe(0)
	})

	it('first order doesn\'t have date field', () => {
		const order = {
			date: 1,
		}
		const result = sortByDate({}, order)
		expect(result).toBe(0)
	})

	it('second order doesn\'t have date field', () => {
		const order = {
			date: 1,
		}
		const result = sortByDate(order, {})
		expect(result).toBe(0)
	})

	it('same negative dates', () => {
		const order = {
			date: -1,
		}
		const result = sortByDate(order, order)
		expect(result).toBe(0)
	})

	it('negative dates, first bigger', () => {
		const order1 = {
			date: -1,
		}
		const order2 = {
			date: -2,
		}
		const result = sortByDate(order1, order2)
		expect(result).toBe(-1)
	})

	it('negative dates, second bigger', () => {
		const order1 = {
			date: -2,
		}
		const order2 = {
			date: -1,
		}
		const result = sortByDate(order1, order2)
		expect(result).toBe(1)
	})

	it('first date is zero', () => {
		const order1 = {
			date: 0,
		}
		const order2 = {
			date: 1,
		}
		const result = sortByDate(order1, order2)
		expect(result).toBe(1)
	})

	it('second date is zero', () => {
		const order1 = {
			date: 1,
		}
		const order2 = {
			date: 0,
		}
		const result = sortByDate(order1, order2)
		expect(result).toBe(-1)
	})
});

describe('sortOrders function', () => {
	it('sortType is null', () => {
		const orders = [
			{
				date: 1,
				items: ['2'],
			},
			{
				date: 2,
				items: ['1'],
			}
		];
		const expected = [
			{
				date: 1,
				items: ['2'],
			},
			{
				date: 2,
				items: ['1'],
			}
		];
		sortOrders(orders, sortByItemNames);
		expect(orders).toEqual(expected);
	});

	it('sortType is sortByDate', () => {
		const orders = [
			{
				date: 1,
				items: ['2'],
			},
			{
				date: 2,
				items: ['1'],
			}
		];
		const expected = [
			{
				date: 2,
				items: ['1'],
			},
			{
				date: 1,
				items: ['2'],
			}
		];
		sortOrders(orders, sortTypes.DATE);
		expect(orders).toEqual(expected);
	});

	it('sortType is sortByItemCount', () => {
		const orders = [
			{
				date: 2,
				items: ['1', '2'],
			},
			{
				date: 1,
				items: ['2'],
			}
		];
		const expected = [
			{
				date: 1,
				items: ['2'],
			},
			{
				date: 2,
				items: ['1', '2'],
			}
		];
		sortOrders(orders, sortTypes.COUNT);
		expect(orders).toEqual(expected);
	});

	it('sortType is sortByItemNames', () => {
		const orders = [
			{
				date: 2,
				items: ['2'],
			},
			{
				date: 1,
				items: ['1'],
			}
		];
		const expected = [
			{
				date: 1,
				items: ['1'],
			},
			{
				date: 2,
				items: ['2'],
			},
		];
		sortOrders(orders, sortTypes.ITEM_NAMES);
		expect(orders).toEqual(expected);
	});
});
