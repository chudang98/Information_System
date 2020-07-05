//sử dụng khách hàng sẻrvice
const khServices = require('../services/khachHangService');
const mhServices = require('../services/matHangServices');
const matHangServices = require('../services/matHangServices');
const hoaDonBanService = require('../services/hoaDonBanService');
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
    dangKyKhachHang,
};

async function dangKyKhachHang(req, res){
  var data = req.body;
  console.log(data);
  await khServices.luuKhachHang(data);
  return res.redirect('/seller/banhang');
}

async function getSignup(req, res) {
    return res.status(200).render('seller/thongtinkh', {});
}
async function getLogin(req, res) {
    return res.status(200).render('seller/banhang', {});
}
async function banHangView(req, res) {
    var clients = await khServices.getAllClient();
    console.log(clients)
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
    var mh = await mhServices.takeAllProduct();
    console.log(mh);
    return res.status(200).render('seller/thongtinmh', {
        mathang: mh,
    });
}
async function thongtinCNview(req, res) {
    return res.status(200).render('seller/thongtincanhan', {});
}
async function xemchitietview(req, res) {
    var idkh = req.params.id
    var data = await khServices.getClientById(idkh)
    console.log(data);
    return res.status(200).render('seller/xemchitiet', {
        infor: data,
    });
}
async function timkiemMHview(req, res) {
    var idKH = req.params.id
    var dataMh = await matHangServices.takeAllProduct()
    console.log(dataMh)
    return res.status(200).render('seller/timkiemmh', {
        matHangs:{
            idKh: idKH,
            data: dataMh
        }
    });
}
async function hoaDonview(req, res) {
    var idKH = req.params.id
    return res.status(200).render('seller/hoadon', {
        data: idKH
    });
}
async function choXulyview(req, res) {
    var dataHdCxl = await hoaDonBanService.layHoaDonTheoTrangThai("Chờ xử lý")
    console.log(dataHdCxl)
    return res.status(200).render('seller/choxuly', {
        HdCxl: dataHdCxl
    });
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