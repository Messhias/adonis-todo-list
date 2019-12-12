'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
	return {
		username: faker.username(),
		email: faker.email(),
		password: await Hash.make(faker.password())
	}
});

Factory.blueprint("App/Models/Token", async (faker) => {
	return {
		"user_id": await Factory.model("App/Models/User").create().then(result => result.id),
		"token": faker.token(),
		"type": faker.random(),
		"is_revoked": 1,
	};
});

Factory.blueprint("App/Models/Todolist", async (faker) => {
	return {
		"user_id": await Factory.model("App/Models/User").create().then(result => result.id),
		"name": faker.name(),
		"status": faker.bool(),
	}
});
