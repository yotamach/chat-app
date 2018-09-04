let expect = require('expect');

const {Users} = require('./users');

describe('users',() => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: "1",
            name: "Mike",
            room: "Node-course"
        },
        {
            id: "2",
            name: "Bobo",
            room: "Angular-course"
        },
        {
            id: "3",
            name: "Yotam",
            room: "Node-course"
        }];
    });

    it('should add new user',() => {
        let users = new Users();
        let user = {
            id: '1',
            name: 'Yotam',
            room: 'Developers'
        };
        var resUseer = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user',() => {
        var userId = '3';
        var user = users.removeUser(userId);
        expect(user.id).toEqual(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user',() => {
        var userId = '4';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user',() => {
        let userId = '2';
        let user = users.getUser(userId);
        console.log(user);
        expect(userId).toBe(user.id);
    });

    it('should not find a user',() => {
        let userId = '5';
        let user = users.getUser(userId);
        expect(user).toNotExist();
    });

    it('should return names for Node-course' ,() => {
        let userList = users.getUserList("Node-course");
        expect(userList).toEqual(['Mike','Yotam']);
    });

    it('should return names for Angular-course' ,() => {
        let userList = users.getUserList("Angular-course");
        expect(userList).toEqual(['Bobo']);
    });
});