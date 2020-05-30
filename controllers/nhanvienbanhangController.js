module.exports = {
    getSignup,
    getLogin,
    signupAcc,
    banHangView,
    themKHview,
};

async function getSignup(req, res) {
    return res.status(200).render('seller/thongtinkh', {});
}
async function getLogin(req, res) {
    return res.status(200).render('seller/banhang', {});
}

async function signupAcc(req, res) {
    return res.status(200).render('seller/home', {
        // result,
    });
}

async function banHangView(req, res) {
    return res.status(200).render('seller/banhang', {});
}
async function themKHview(req, res) {
    return res.status(200).render('seller/themkh', {});
}