/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 noexpandtab: */
/**
 * Backbone-relational.js 0.10.0
 * (c) 2011-2014 Paul Uithol and contributors (https://github.com/PaulUithol/Backbone-relational/graphs/contributors)
 *
 * Backbone-relational may be freely distributed under the MIT license; see the accompanying LICENSE.txt.
 * For details and documentation: https://github.com/PaulUithol/Backbone-relational.
 * Depends on Backbone (and thus on Underscore as well): https://github.com/documentcloud/backbone.
 *
 * Example:
 *
	Zoo = Backbone.Relational.Model.extend({
		relations: [ {
			type: Backbone.HasMany,
			key: 'animals',
			relatedModel: 'Animal',
			reverseRelation: {
				key: 'livesIn',
				includeInJSON: 'id'
				// 'relatedModel' is automatically set to 'Zoo'; the 'relationType' to 'HasOne'.
			}
		} ],

		toString: function() {
			return this.get( 'name' );
		}
	});

	Animal = Backbone.Relational.Model.extend({
		toString: function() {
			return this.get( 'species' );
		}
	});

	// Creating the zoo will give it a collection with one animal in it: the monkey.
	// The animal created after that has a relation `livesIn` that points to the zoo it's currently associated with.
	// If you instantiate (or fetch) the zebra later, it will automatically be added.

	var zoo = new Zoo({
		name: 'Artis',
		animals: [ { id: 'monkey-1', species: 'Chimp' }, 'lion-1', 'zebra-1' ]
	});

	var lion = new Animal( { id: 'lion-1', species: 'Lion' } ),
		monkey = zoo.get( 'animals' ).first(),
		sameZoo = lion.get( 'livesIn' );
 */
	"use strict";

import { default as _ } from 'underscore';
import { default as Backbone } from 'backbone';
import { default as Relational } from './Relational.js';
import { default as Semaphore } from './Semaphore.js';
import { default as BlockingQueue } from './BlockingQueue.js';
import { default as Store } from './Store.js';
import { default as Relation } from './Relation.js';
import { default as HasOne } from './RelationHasOne.js';
import { default as HasMany } from './RelationHasMany.js';
import { default as RelationalModel } from './RelationalModel.js';
import './Collection.js';

	/**
	 * Partial Underscore emulation when _ is Lodash.
	 * Please try to write code that is compatible with both, but add
	 * compatibility code below otherwise.
	 */
	if (!_.any) {  // We have Lodash, make it imitate Underscore a bit more.
		_.any = _.some;
		_.all = _.every;
		_.contains = _.includes;
		_.pluck = _.map;
	}

  Backbone.Semaphore = Semaphore;
  Backbone.BlockingQueue = BlockingQueue;
	Backbone.Store = Store;

  Backbone.Relational = Relational;

	Backbone.Relation = Relation;
	// Fix inheritance :\
	Relation.extend = Backbone.Model.extend;

	Backbone.HasOne = HasOne;
	Backbone.HasMany = HasMany;

	Backbone.RelationalModel = RelationalModel;

