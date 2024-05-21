const crypto = require('crypto');

// Generate a random string of specified length
function generateRandomString(length) {
    return crypto.randomBytes(length).toString('hex');
}
// Generate a secret key of 32 characters (64 hex digits)
const secretKey = generateRandomString(32);
console.log('Generated Secret Key:', secretKey);