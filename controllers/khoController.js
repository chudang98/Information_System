const mhServices = require('../services/matHangServices');
module.exports = {

    getLogin,
    nhapkhoView,
    timkiemMHView,
    hoadonView,
    thongtinNCCView,
    xemchitietNCCView,
    themNCCView,
    thongtinCNView,
    thongtinMHView,
    xemchitietMHView,
    themMHView,



};


async function getLogin(req, res) {
    return res.status(200).render('nvkho/nhapkho', {});
}
async function nhapkhoView(req, res) {
    return res.status(200).render('nvkho/nhapkho', {});
}
async function timkiemMHView(req, res) {
    return res.status(200).render('nvkho/timkiemmh', {});
}
async function hoadonView(req, res) {
    return res.status(200).render('nvkho/hoadon', {});
}
async function thongtinNCCView(req, res) {
    return res.status(200).render('nvkho/thongtinncc', {});
}
async function xemchitietNCCView(req, res) {
    return res.status(200).render('nvkho/xemchitiet', {});
}
async function themNCCView(req, res) {
    return res.status(200).render('nvkho/themncc', {});
}
async function thongtinCNView(req, res) {
    return res.status(200).render('nvkho/thongtincanhan', {});
}
async function thongtinMHView(req, res) {
    var mh = await mhServices.takeAllProduct();
    console.log(mh);
    return res.status(200).render('nvkho/thongtinmh', {
        mathang: mh,
    });

}
async function xemchitietMHView(req, res) {
    var idmh = req.params.id
    var data = await mhServices.layMatHangBangId(idmh)
    console.log(data);
    return res.status(200).render('nvkho/xemchitietmh', {
        infor: data,
    });
}
async function themMHView(req, res) {
    return res.status(200).render('nvkho/themmh', {});
}