const { Transform } = require('node:stream');

class Replacer extends Transform {
    constructor(options) {
        super(options);

        this.from = options.from;
        this.to = options.to;

        this.remainder = '';
    }

    _transform(chunk, encoding, callback) {
        const str = this.remainder + chunk.toString();
        
        let res = str.replaceAll(this.from, this.to);
        
        const arr = chunk.toString().split(' ')
        
        const lastEl = arr[arr.length - 1];
        
        if (this.from !== lastEl && this.from.includes(lastEl)) {
            res = res.replace(lastEl, '');
            this.remainder = lastEl;
        } else {
            this.remainder = '';
        }

        callback(null, res);
    }

    _flush(callback) {
        callback(null, this.remainder);
    }
}

const stream = new Replacer({ from: 'яблоко', to: 'груша' });

stream.on('data', (chunk) => {
    console.log(chunk.toString());
});

stream.write('яблоко арбуз ябло');
stream.write('ко банан груша яблоко');
stream.write('персик виноград арбуз');
stream.end();