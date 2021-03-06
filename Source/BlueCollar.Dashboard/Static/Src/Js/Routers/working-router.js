﻿/**
 * Working area router implementation.
 *
 * @constructor
 * @extends {CollarRouter}
 */
var WorkingRouter = CollarRouter.extend({
    name: 'Working',
    routes: {
        'working': 'index',
        'working/id/:id': 'id',
        'working/id/:id/:action': 'idAction',
        'working/q/:search': 'search',
        'working/q/:search/id/:id': 'searchId',
        'working/q/:search/id/:id/:action': 'searchIdAction',
        'working/p/:page': 'page',
        'working/p/:page/id/:id': 'pageId',
        'working/p/:page/id/:id/:action': 'pageIdAction',
        'working/q/:search/p/:page': 'searchPage',
        'working/q/:search/p/:page/id/:id/:action': 'index'
    },

    /**
     * Initialization.
     *
     * @param {App} app The root application object.
     * @param {Object} options Initialization options.
     */
    initialize: function(app, options) {
        CollarRouter.prototype.initialize.call(this, app, options);
        this.controller = this.createController(WorkingController, this.options);
    }
});