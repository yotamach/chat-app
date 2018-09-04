let expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString function',() => {

    it('should reject non string values', () => {
       let res = isRealString(55);
       expect(res).toBe(false); 
    });

    it('should reject string with only spaces', () => {
        let res = isRealString('     ');
        expect(res).toBe(false); 
     });

     it('should allow string with non only spaces', () => {
        let res = isRealString('12 ffd 454f');
        expect(res).toBe(true); 
     });
});