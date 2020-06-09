module.exports = {

    getLogin,
    thongtinNVView,


};


async function getLogin(req, res) {
    return res.status(200).render('admin/thongtinnhanvien', {});
}
async function thongtinNVView(req, res) {
    return res.status(200).render('admin/thongtinnhanvien', {});
}