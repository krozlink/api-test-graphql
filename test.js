const { schema, resolver } = require('./api');

const { graphql } = require('graphql');


test('User query should return user data', () => {
    const query = `
        query {
            user(id: "user-1") {
            id
            first_name
            last_name
            }
        }
    `;

    return graphql(schema, query, resolver)
        .then((result) => {
            expect(result.data.user.first_name).toBe('Homer');
            expect(result.data.user.last_name).toBe('Simpson');
            expect(result.data.user.id).toBe('user-1');
            expect(result.data.user.date_of_birth).toBeUndefined();
        });
});