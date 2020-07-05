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
    timKhachHangBandSdt,
    timMathangBandTen,
};
async function timKhachHangBandSdt(req, res) {
    var sdt = req.body.sdt;
    var data = await khServices.timKhachHangTheoSdt(sdt);
    console.log(data);
    return res.status(200).render('seller/banhang', {
        khachhangs: data,
    });
}
async function timMathangBandTen(req, res) {
    var ten = req.body.ten;
    var data = await mhServices.timMatHangTheoTen(ten);
    console.log(data);
    return res.status(200).render('seller/timkiemmh', {
        matHangs: data,
    });

}
async function xacNhanGiaoHang(req, res) {
    var id = req.params.idHD;
    var cookie = req.cookies.jwt;
    var user = await ultiCookie._decodeCookie(cookie);
    await hoaDonBanService.updateStateHoaDon(id, 'Đang giao hàng', user.id);
    return res.redirect('/seller/choXuLy');
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
        matHangs: {
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
    var idKHCxl = req.params.id;
    var dataHdCxlCt = await hoaDonBanService.layHoaDonChiTiet(idKHCxl);
    console.log(dataHdCxlCt);


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