let expect = require('expect');

let {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',() => {
    it('shound generate correct message object', () => {
       let from = 'John';
       let text = 'Some text';
       let message = generateMessage(from,text);
       
       expect(message.createAt).toBeA('number');
       expect(message).toInclude({from,text});
    });
});

describe('generateLocationMessage',() => {
    it('should generate current location object',() => {
        let from = 'John';
        let latitude = 15;
        let longitude = 14;
        let url = 'https://www.google.com/maps?q=15,14';
        let message = generateLocationMessage(from,latitude,longitude);
        expect(message.createAt).toBeA('number');
        expect(message).toInclude({from,url});
    });
});