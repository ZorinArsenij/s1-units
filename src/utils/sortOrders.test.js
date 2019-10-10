import React from 'react'
import {sortByItemCount, sortByItemNames} from './sortOrders';

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
		expect(result).toBe(0);
	})

	it('second order length is bigger and second order items include all first order items', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1', 'item2', 'item3'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
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
});

