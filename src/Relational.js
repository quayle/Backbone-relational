/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 noexpandtab: */

	"use strict";

// import { default as Backbone } from 'backbone';
import { default as BlockingQueue } from './BlockingQueue.js';
import { default as Store } from './Store.js';

	var Relational = {
		showWarnings: true
	};

	/**
	 * Global event queue. Accumulates external events ('add:<key>', 'remove:<key>' and 'change:<key>')
	 * until the top-level object is fully initialized (see 'Backbone.Relational.Model').
	 */
	Relational.eventQueue = new BlockingQueue();
	Relational.store = new Store();

export default Relational;
