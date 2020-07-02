//sử dụng khách hàng sẻrvice
const khServices = require('../services/khachHangService');

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
    choXulyview,
    xemHDolview,
    danggiaoHview,
    xemHDdanggiaoview,
    thanhCongview,
    xemHDthanhcongview,
    huyview,
    xemHDhuyview,

};

async function getSignup(req, res) {
    return res.status(200).render('seller/thongtinkh', {});
}
async function getLogin(req, res) {
    return res.status(200).render('seller/banhang', {});
}
async function banHangView(req, res) {
    var clients = await khServices.getAllClient();
    return res.status(200).render('seller/banhang', {
        khachhangs: clients,
    });
}
async function themKHview(req, res) {
    return res.status(200).render('seller/themkh', {});
}
async function thongtinKHview(req, res) {
    var clients = await khServices.getAllClient();
    console.log(clients);
    return res.status(200).render('seller/thongtinkh', {
        khachhang: clients,
    });
}
async function thongtinMHview(req, res) {
    return res.status(200).render('seller/thongtinmh', {});
}
async function thongtinCNview(req, res) {
    return res.status(200).render('seller/thongtincanhan', {});
}
async function xemchitietview(req, res) {
    var idkh = req.params.idkh;

    return res.status(200).render('seller/xemchitiet', {});
}
async function timkiemMHview(req, res) {
    return res.status(200).render('seller/timkiemmh', {});
}
async function hoaDonview(req, res) {
    return res.status(200).render('seller/hoadon', {});
}
async function choXulyview(req, res) {
    return res.status(200).render('seller/choxuly', {});
}
async function xemHDolview(req, res) {
    return res.status(200).render('seller/xemhdOl', {});
}
async function danggiaoHview(req, res) {
    return res.status(200).render('seller/danggiaohang', {});
}
async function xemHDdanggiaoview(req, res) {
    return res.status(200).render('seller/xemhddanggiao', {});
}
async function thanhCongview(req, res) {
    return res.status(200).render('seller/thanhcong', {});
}
async function xemHDthanhcongview(req, res) {
    return res.status(200).render('seller/xemhdthanhcong', {});
}
async function huyview(req, res) {
    return res.status(200).render('seller/huy', {});
}
async function xemHDhuyview(req, res) {
    return res.status(200).render('seller/xemhdhuy', {});
}