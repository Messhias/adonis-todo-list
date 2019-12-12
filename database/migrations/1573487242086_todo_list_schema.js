'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TodoListSchema extends Schema {
	up () {
		this.create('todo_lists', (table) => {
			table.increments();
			table.integer('user_id').unsigned().references('id').inTable('users');
			table.string("name", 254);
			table.boolean("status").default(1);
			table.timestamps();
		});
	}

	down () {
		this.drop('todo_lists');
	}
}

module.exports = TodoListSchema;
