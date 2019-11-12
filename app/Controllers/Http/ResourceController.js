'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with resources
 */
class ResourceController {
    /**
     * Constructor to accept the repository pattern
     * inside it.
     *
     * @param repository
     */
    constructor(repository) {
        this._repository = repository;
    }

    /**
     * Show a list of all resources.
     * GET resources
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index ({ request, response, view }) {
        try {
            response.send(this._repository.index());
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Render a form to be used for creating a new resource.
     * GET resources/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create ({ request, response, view }) {
        try {

        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Create/save a new resource.
     * POST resources
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store ({ request, response }) {
        try {

        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Display a single resource.
     * GET resources/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show ({ params, request, response, view }) {
        try {

        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Render a form to update an existing resource.
     * GET resources/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit ({ params, request, response, view }) {
        try {

        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Update resource details.
     * PUT or PATCH resources/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update ({ params, request, response }) {
        try {

        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Delete a resource with id.
     * DELETE resources/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy ({ params, request, response }) {
        try {

        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = ResourceController;
