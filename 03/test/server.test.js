import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';

import server from '../server.js';

describe('server tests', () => {
    before((ready) => {
        server.listen(3000, () => {
            ready();
        });
    });

    after((done) => {
        server.close(done);
    });

    it('GET /', async () => {
        const res = await fetch('http://localhost:3000');
        const body = await res.text();

        assert.strictEqual(res.status, 200);
        assert.strictEqual(body, 'hello world');
    });

    it('POST /replacer', async () => {
        const res = await fetch('http://localhost:3000/replace?from=apple&to=pear', {
            method: 'POST',
            body: 'apple watermelon grape orange apple pear'
        });
        const body = await res.text();

        assert.strictEqual(res.status, 200);
        assert.strictEqual(body, 'pear watermelon grape orange pear pear');
    });
});