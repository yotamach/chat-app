let expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage',() => {
    it('shound generate correct message object', () => {
       let from = 'John';
       let text = 'Some text';
       let message = generateMessage(from,text);
       
       expect(message.createAt).toBeA('number');
       expect(message).toInclude({from,text});
    });
});