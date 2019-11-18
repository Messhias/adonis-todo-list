'use strict';

/**
 * requesting the lodash library
 */
const _ = use('lodash');

class SQLOperations {
    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }
    /**
     * Model schema in database.
     *
     * @type {undefined}
     * @private
     */
    _model = undefined;

    /**
     * Returns the string representation of
     * the data not found.
     *
     * @type {string}
     * @private
     */
    _notFound = "No data found";

    constructor(model = undefined, not_found_message = "") {
        if (!model) {
            throw new Error("You didn't defined your model.");
        }

        if (not_found_message) this.notFound(not_found_message);

        this.Model(model)
    }

    get Model() {
        return this._model;
    }

    set Model(model) {
        this._model = model;
    }

    get notFound() {
        return this._notFound;
    }

    set notFound(value) {
        this._notFound = value;
    }
}

