
import {getDate} from './getDate';

describe('getDate function', () => {
    it('correct data', () => {
        const timestamp = 886464000000;
        const expected = '3 февраля, вт, 1998 год';
		const result = getDate(timestamp);
		expect(result).toEqual(expected);
    });
    
    it('incorrect data', () => {
        const timestamp = 'abc';
		const result = getDate(timestamp);
		expect(result).toEqual(null);
    });
});