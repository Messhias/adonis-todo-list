'use strict';

/**
 * Middleware to get all the empty strings and convert to null
 * and set up the next options of each request.
 *
 * @class
 */
class ConvertEmptyStringsToNull {
    async handle ({ request }, next) {
        if (Object.keys(request.body).length) {
            request.body = Object.assign(
                ...Object.keys(request.body).map(key => ({
                    [key]: request.body[key] !== '' ? request.body[key] : null
                }))
            );
        }

        await next();
    }
}

module.exports = ConvertEmptyStringsToNull;
