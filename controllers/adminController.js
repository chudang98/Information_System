module.exports = {

    getLogin,
    thongtinNVView,
    xemchitietNVView,
    thongtinKHView,
    xemchitietKHView,
    thongtinNCCView,
    xemchitietNCCView,
    themNVView,
    thongkeMHView,
    danhsachHDView,
    thongkeTGView,
    thongketheoThangView,
    danhsachHDThangView,
    danhsachHDNgayView,
    danhsachHDNgaychitietView,
    thongketheoQuyView,
    danhsachHDQuyView,
    thongketheoNamView,
    danhsachHDNamView,
    thongketheoKHView,
    danhsachHDKHView,
    hoadonKHchitietView,
    thongketheoNCCView,
    danhsachHDNCCView,
    hoadonNCCchitietView,
    thongtinCNView,



};


async function getLogin(req, res) {
    return res.status(200).render('admin/thongtinnhanvien', {});
}
async function thongtinNVView(req, res) {
    return res.status(200).render('admin/thongtinnhanvien', {});
}
async function xemchitietNVView(req, res) {
    return res.status(200).render('admin/xemchitietnv', {});
}
async function thongtinKHView(req, res) {
    return res.status(200).render('admin/thongtinkhachhang', {});
}
async function xemchitietKHView(req, res) {
    return res.status(200).render('admin/xemchitietkh', {});
}
async function thongtinNCCView(req, res) {
    return res.status(200).render('admin/thongtinncc', {});
}
async function xemchitietNCCView(req, res) {
    return res.status(200).render('admin/xemchitietncc', {});
}
async function themNVView(req, res) {
    return res.status(200).render('admin/themnhanvien', {});
}
async function thongkeMHView(req, res) {
    return res.status(200).render('admin/tkmh', {});
}
async function danhsachHDView(req, res) {
    return res.status(200).render('admin/danhsachhoadon', {});
}
//thong ke theo thang 
async function thongkeTGView(req, res) {
    return res.status(200).render('admin/tktg', {});
}
async function thongketheoThangView(req, res) {
    return res.status(200).render('admin/ththang', {});
}
async function danhsachHDThangView(req, res) {
    return res.status(200).render('admin/danhsachhoadonthang', {});
}
async function danhsachHDNgayView(req, res) {
    return res.status(200).render('admin/danhsachhoadonngay', {});
}
async function danhsachHDNgaychitietView(req, res) {
    return res.status(200).render('admin/danhsachhoadonngaychitiet', {});
}
//theo quy
async function thongketheoQuyView(req, res) {
    return res.status(200).render('admin/thquy', {});
}
async function danhsachHDQuyView(req, res) {
    return res.status(200).render('admin/danhsachhoadonquy', {});
}
//tk nam
async function thongketheoNamView(req, res) {
    return res.status(200).render('admin/thnam', {});
}
async function danhsachHDNamView(req, res) {
    return res.status(200).render('admin/danhsachhoadonnam', {});
}
//tkkh
async function thongketheoKHView(req, res) {
    return res.status(200).render('admin/tkkh', {});
}
async function danhsachHDKHView(req, res) {
    return res.status(200).render('admin/danhsachhoadonkh', {});
}
async function hoadonKHchitietView(req, res) {
    return res.status(200).render('admin/hoadonkhchitiet', {});
}
//tkncc
async function thongketheoNCCView(req, res) {
    return res.status(200).render('admin/tkncc', {});
}
async function danhsachHDNCCView(req, res) {
    return res.status(200).render('admin/danhsachhoadonncc', {});
}
async function hoadonNCCchitietView(req, res) {
    return res.status(200).render('admin/hoadonnccchitiet', {});
}
async function thongtinCNView(req, res) {
    return res.status(200).render('admin/thongtincanhan', {});
}