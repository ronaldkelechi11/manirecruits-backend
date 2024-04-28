
// To check if it was admin that logged in
function isAdminLogins(email, password) {
    if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
        console.log("Is admin");
        return true;
    }
}

module.exports.isAdminLogins = isAdminLogins