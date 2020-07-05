//sử dụng khách hàng sẻrvice
const khServices = require('../services/khachHangService');
const mhServices = require('../services/matHangServices');
const matHangServices = require('../services/matHangServices');
const hoaDonBanService = require('../services/hoaDonBanService');
const ultiCookie = require('../utils/cookieUtils');

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

    xacNhanGiaoHang,
    xacNhanHuy,

};

async function xacNhanGiaoHang(req, res){  
  var id = req.params.idHD;
  var cookie = req.cookies.jwt;
  var user = await ultiCookie._decodeCookie(cookie);
  await hoaDonBanService.updateStateHoaDon(id, 'Đang giao hàng', user.id);
  return res.redirect('/seller/choxuly');
}
async function xacNhanHuy(req, res){  
    var id = req.params.idHD;
    var cookie = req.cookies.jwt;
    var user = await ultiCookie._decodeCookie(cookie);
    await hoaDonBanService.updateStateHoaDon(id, 'Hủy', user.id);
    return res.redirect('/seller/choxuly');
  }


async function dangKyKhachHang(req, res) {
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
    // var cookie = req.cookies.jwt;
    // var user = await ultiCookie._decodeCookie(cookie);
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
    var idkh1 = req.params.id1
    var data1 = await khServices.getClientById(idkh1)
    console.log(data1);
    return res.status(200).render('seller/xemchitiet', {
        infor1: data1,
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
    return res.status(200).render('seller/choxuly', {
        HdCxl: dataHdCxl
    });
}
async function xemHDolview(req, res) {
    var idKHCxl = req.params.id;
    var dataHdCxlCt = await hoaDonBanService.layHoaDonChiTiet(idKHCxl);
    return res.status(200).render('seller/xemhdOl', {
        data : dataHdCxlCt
    });
}
async function danggiaoHview(req, res) {
    var dataHdDdh = await hoaDonBanService.layHoaDonTheoTrangThai("Đang giao hàng")
    return res.status(200).render('seller/danggiaohang', {
        data : dataHdDdh
    });
}
async function xemHDdanggiaoview(req, res) {
    var idKHTc = req.params.id;
    var dataHdTc = await hoaDonBanService.layHoaDonChiTiet(idKHTc);
    return res.status(200).render('seller/xemhddanggiao', {
        data: dataHdTc
    });
}
async function thanhCongview(req, res) {
    var dataHdDht = await hoaDonBanService.layHoaDonTheoTrangThai("Đã hoàn thành")
    return res.status(200).render('seller/thanhcong', {
        data: dataHdDht
    });
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