import { Logger }			from '@whi/weblogger';
const log				= new Logger("test-unit-basic", process.env.LOG_LEVEL );

import crypto				from 'crypto';

import { expect }			from 'chai';
import {
    DnaHash, AgentPubKey,
    ActionHash, EntryHash,
}					from '@spartan-hc/holo-hash';
import {
    Entity,
}					from '../../src/index.js';


function entry_hash () {
    return new EntryHash( crypto.randomBytes(32) );
}

function action_hash () {
    return new ActionHash( crypto.randomBytes(32) );
}


describe("Entities", function () {

    it("should create Entity instance", async function () {
	const entity			= new Entity({
	    "id":		action_hash(),
	    "action":		action_hash(),
	    "address":		entry_hash(),
	    "type":		"message",
	    "content": {
		"message": "Hello world!",
	    },
	});

	expect( entity.$addr		).to.be.a("EntryHash");
    });

});
