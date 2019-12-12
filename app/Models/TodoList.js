'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TodoList extends Model {
	static get table () {
		return 'todo_lists';
	}
}

module.exports = TodoList;
