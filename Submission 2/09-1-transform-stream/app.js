/**
 * @TODO
 * Buatlah fungsi `createBase64TransformStream` yang mengonversi data yang masuk menjadi base64.
 */
const { Transform } = require('stream');

function createBase64TransformStream() {
    return new Transform({
        transform(chunk, encoding, callback) {
            try {
                // Convert the chunk to base64
                const base64Chunk = chunk.toString('base64');
                // Push the converted chunk to the readable side of the stream
                this.push(base64Chunk);
                callback();
            } catch (err) {
                callback(err);
            }
        }
    });
}

module.exports = { createBase64TransformStream };