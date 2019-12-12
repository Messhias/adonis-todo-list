'use strict';


/*
 * All commonly used functions are placed here, mostly CRUD operations
 */

const Env = use('Env');

const db_operations = use(Env.get('DB_CONNECTION') === 'mysql' ?
    'App/Repositories/Base/SqlOperations' :
    'App/Repositories/Base/NoSqlOperations');

class BaseRepository {
    _model = undefined;

    constructor(model = undefined) {
        if (!model) {
            throw new Error("The model must be defined");
        }

        this.model = db_operations(model);
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    async activeDB(){
        return Env.get("DB_DATABASE");
    }
}
