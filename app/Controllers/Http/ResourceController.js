'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with resources
 */
class ResourceController {
    /**
     * Repository representation in the resource controller.
     *
     * @property
     * @type {null}
     * @private
     */
    _repository = null;

    /**
     * Plural identifier representation in the
     * resource controller
     *
     * @property
     * @type {null}
     */
    getPluralIdentifier = null;

    /**
     * Key identifier and very important member representation
     * in the resource controller
     *
     * @info
     *  without the key identifier all your requests for
     *  @PUT, @POST, @PATCH it'll not be filled since
     *  the default methods search for this key to extract
     *  the data to insert in the database.
     *
     * @type {null}
     */
    getKeyIdentifier = null;

    /**
     * Singular identifier representation on the
     * resource controller.
     *
     * @property
     * @type {null}
     */
    getSingularIdentifier = null;

    /**
     * Constructor to accept the repository pattern
     * inside it.
     *
     * @param repository
     */
    constructor(repository) {
        if (this.constructor === ResourceController) {
            throw new TypeError('Abstract class "ResourceController" cannot be instantiated directly.');
        }

        /**
         * Receive the repository and set up on the
         * controller context.
         * If the repository is not filled it'll throw and exception.
         */
        if (repository) {
            this._setRepository(repository);
        } else {
            throw new Error("You need set up the repository");
        }

        if (this.getKeyIdentifier === undefined) {
            console.debug(this.getKeyIdentifier);
            throw new TypeError("You must set up the key identifier");
        }

        if (this.getSingularIdentifier === undefined) {
            throw new TypeError("You must set upt the key identifier");
        }

        if (this.getPluralIdentifier === undefined) {
            throw new TypeError("You must set upt the key identifier");
        }
    }

    /**
     * Inserting the repository inside the class context.
     *
     * @param repository
     * @private
     */
    _setRepository(repository) {
        if (repository) {
            this._repository = repository;
        }
    }

    /**
     * Return the repository of class context.
     *
     * @returns {null}
     */
    getRepository() {
        return this._repository;
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
            response.send("ok");
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
            response.send(
                this.getRepository()
                .create(
                    request[
                        this.getKeyIdentifier()
                    ]
                )
            );
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
            response.send(
                this.getRepository()
                    .store(
                        request[
                            this.getKeyIdentifier()
                            ]
                    )
            );
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
            response.send(
                this.getRepository()
                .show(
                    params['id']
                )
            );
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
            response.send(
                this.getRepository()
                .edit(
                    params['id'],
                    request[
                        this.getKeyIdentifier()
                    ],
                )
            );
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
            response.send(
                this.getRepository()
                .update(
                    params['id'],
                    request[
                        this.getKeyIdentifier()
                    ]
                )
            );
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
            response.send(
                this.getRepository()
                .destroy(
                    params['id']
                )
            );
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = ResourceController;
