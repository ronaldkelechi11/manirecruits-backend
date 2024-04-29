const bcrypt = require('bcrypt');

async function decryptPassword(password, encryptedPassword) {
    const auth = await bcrypt.compare(password, encryptedPassword);

    if (auth === true) {
        return true;
    }
    else {
        return false;
    }
}

module.exports.decryptPassword = decryptPassword