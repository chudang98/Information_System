const mhServices = require('../services/matHangServices');
const nccServices = require('../services/nhaCungCapService');
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
    dangKyNCC,
    XemMathangBandTen,
    xemNCCBandSdt,
    dangkyMHview,



};
async function xemNCCBandSdt(req, res) {
    var sdt = req.body.sdt;
    var data = await nccServices.timNCCTheoSdt(sdt);
    console.log(data);
    return res.status(200).render('nvkho/thongtinncc', {
        nhacungcap: data,
    });
}
async function XemMathangBandTen(req, res) {
    var ten = req.body.ten;
    var data = await mhServices.timMatHangTheoTen(ten);
    // console.log(data);
    return res.status(200).render('nvkho/thongtinmh', {
        mathang: data,
    });

}
async function dangKyNCC(req, res) {
    var data = req.body;
    console.log(data);
    await nccServices.luuNhacungcap(data);
    return res.redirect('/nvkho/thongtinncc');
}
async function dangkyMHview(req, res) {
    var data = req.body;
    console.log(data);
    await mhServices.luuMatHang(data);
    return res.redirect('/nvkho/thongtinmh');
}
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
    var ncc = await nccServices.getAllNCC();
    console.log(ncc);
    return res.status(200).render('nvkho/thongtinncc', {
        nhacungcap: ncc,
    });

}
async function xemchitietNCCView(req, res) {
    var idncc = req.params.id
    var data = await nccServices.getNCCById(idncc)
    console.log(data);
    return res.status(200).render('nvkho/xemchitiet', {
        infor: data,
    });
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