const { users } = require('./test_data');

function user(args) {
    return users[args.id];
}

module.exports = {
    user,
}