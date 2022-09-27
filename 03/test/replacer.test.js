import { describe, it } from 'node:test';
import assert from 'node:assert';
import sinon from 'sinon';

import Replacer from '../replacer.js';

describe('Replacer tests', () => {
    it('replaces apple to pear', (done) => {
        const stream = new Replacer({ from: 'яблоко', to: 'груша' });
        const onData = sinon.spy();

        stream.on('data', onData);

        stream.on('end', () => {
            assert.ok(onData.calledThrice);

            assert.strictEqual(onData.getCall(0).args[0].toString(), 'груша арбуз');
            assert.strictEqual(onData.getCall(1).args[0].toString(), 'груша банан груша груша');
            assert.strictEqual(onData.getCall(2).args[0].toString(), 'персик виноград арбуз');

            done();
        });

        stream.write('яблоко арбуз ябло');
        stream.write('ко банан груша яблоко');
        stream.write('персик виноград арбуз');
        stream.end();
    });
});