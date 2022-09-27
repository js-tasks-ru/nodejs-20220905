import { Transform } from 'node:stream';

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

        callback(null, res.trim());
    }

    _flush(callback) {
        callback(null, this.remainder);
    }
}

export default Replacer;