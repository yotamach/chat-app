const moment = require('moment');

let generateMessage = (from,text) => {
    return {
        from,
        text,
        createAt: moment().valueOf()
    }
};

let generateLocationMessage = (from,latitude,longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createAt: moment().valueOf()
    }
};

module.exports = {generateMessage,generateLocationMessage};