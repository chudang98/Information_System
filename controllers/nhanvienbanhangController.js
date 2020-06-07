module.exports = {
    getSignup,
    getLogin,
    banHangView,
    themKHview,
    thongtinKHview,
    thongtinMHview,
    thongtinCNview,
    xemchitietview,
    timkiemMHview,
    hoaDonview,

};

async function getSignup(req, res) {
  return res.status(200).render('seller/thongtinkh', {});
}
async function getLogin(req, res) {
  return res.status(200).render('seller/banhang', {});
}
async function banHangView(req, res) {
  return res.status(200).render('seller/banhang', {});
}
async function themKHview(req, res) {
    return res.status(200).render('seller/themkh', {});
}
async function thongtinKHview(req, res) {
    return res.status(200).render('seller/thongtinkh', {});
}
async function thongtinMHview(req, res) {
    return res.status(200).render('seller/thongtinmh', {});
}
async function thongtinCNview(req, res) {
    return res.status(200).render('seller/thongtincanhan', {});
}
async function xemchitietview(req, res) {
    return res.status(200).render('seller/xemchitiet', {});
}
async function timkiemMHview(req, res) {
    return res.status(200).render('seller/timkiemmh', {});
}
async function hoaDonview(req, res) {
    return res.status(200).render('seller/hoadon', {});
}
