'use strict'

/*
|--------------------------------------------------------------------------
| TodoListSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use("Database");

class TodoListSeeder {
	async run () {
		const todoList = await Database().table("todo_lists");
		console.log(todoList);
	}
}

module.exports = TodoListSeeder;
