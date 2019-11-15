'use strict';

const ResourceController = use('App/Controllers/Http/ResourceController');

class UsersController extends ResourceController {
    constructor() {
        super();
    }

    /**
     * Set up the abstract method of plural identifier
     *
     * @override
     * @returns {string}
     */
    get getPluralIdentifier() {
        return "Users";
    }

    /**
     * Set up the abstract method of singular identifier
     *
     * @override
     * @returns {string}
     */
    get getSingularIdentifier() {
        return "User";
    }

    /**
     * Set up the override method for key identifier for users
     * for incoming requests.
     *
     * @override
     * @returns {{users: []}}
     */
    get getKeyIdentifier() {
        return {
            users: [],
        }
    }

}

module.exports = UsersController;
