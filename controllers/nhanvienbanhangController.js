module.exports = {
    getSignup,
    getLogin,
    signupAcc,
};

async function getSignup(req, res) {
    return res.status(200).render('seller/themkh', {});
}
async function getLogin(req, res) {
    return res.status(200).render('seller/banhang', {});
}

async function signupAcc(req, res) {
    return res.status(200).render('seller/home', {
        result,
    });
}