'use strict';

/**
 * requesting the lodash library
 */
const _ = use('lodash');

/**
 * Repository pattern for NoSQL Operations.
 */
class SQLOperations {
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

	/**
	 * Default class application receiving the context application and
	 * the not found message and set up the NoSQL default operation
	 * on repository context.
	 *
	 * @info
	 * The @param model is mandatory.
	 *
	 * @param model
	 * @param not_found_message
	 */
	constructor(model = undefined, not_found_message = "") {
		if (!model) {
			throw new Error("You didn't defined your model.");
		}

		if (not_found_message) this.notFound = not_found_message;

		this.setModel(model);
	}

	/**
	 * Return the model from repository context.
	 *
	 * @returns {undefined}
	 * @constructor
	 */
	getModel() {
		return this._model;
	}

	/**
	 * Set the model abstraction inside the repository context.
	 *
	 * @param model
	 * @constructor
	 */
	setModel(model) {
		this._model = model;
	}

	/**
	 * Return the not found string response.
	 *
	 * @returns {string}
	 */
	get notFound() {
		return this._notFound;
	}

	/**
	 * Setter method for not found property.
	 *
	 * @param value
	 */
	set notFound(value) {
		this._notFound = value;
	}

	/**
	 * GET ALL THE RECORDS.
	 *
	 * @param response
	 * @returns {Promise<void|*>}
	 */
	async index(response){
		//use lean for Simple Vanilla Json Object rather than Mongoose Object which takes double time
		let result = await this.getModel().find().lean();
		return response.json(result);
	}


	/**
	 * Store a record on database.
	 *
	 * @param request
	 * @param response
	 * @returns {Promise<void|*>}
	 */
	async store(request,response){
		let input = request.except(['password_confirmation']);
		let data  = new this.getModel();
		/*
		  *check if the input is not empty -> No need to check here, validator on route will take care of this
		*/
		_.forEach(input,function(e,i){
			data [i] = e;
		});

		await data .save();

		return response.status(201).json(request);
	}

	/**
	 * Get single record data.
	 *
	 * @param params
	 * @param response
	 * @returns {Promise<void|*>}
	 */
	async show(params,response){
		const data  = await this.getModel().findOne({id: params.id}).lean();
		if(!data){
			return response
				.status(404)
				.json(this.notFound);
		}
		return response.json(data );
	}

	/**
	 * UPDATE THE OBJECT
	 *
	 * @param params
	 * @param request
	 * @param response
	 * @returns {Promise<void|*>}
	 */
	async update(params,request,response){
		try {
			const input = request.all();

			const data  = await this.getModel().updateOne({id:  params.id }, input);

			return response.status(200).json(data );
		}catch (e) {
			return response.status(400).json({error: `Unable to update.`, reason:e.message})
		}

	}

	/**
	 * Delete record from database.
	 *
	 * @param params
	 * @param response
	 * @returns {Promise<void|*>}
	 */
	async destroy(params,response){
		try {
			let hasRecord = await this.getModel().findOne({id: params.id});

			if(!hasRecord){
				return response.status(404).json({error:this.notFound})
			}

			const data  = await this.getModel().deleteOne({id: params.id},function(err){
				return response.status(400).json(err);
			});

			return response.status(200).json(data);
		}catch (e) {
			return response.status(400).json({error: `Unable to delete.`, reason: e.message});
		}
	}
}

