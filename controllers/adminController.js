const khServices = require('../services/khachHangService');
const nvServices = require('../services/nhanVienServices');
const nccServices = require('../services/nhaCungCapService');
const authService = require('../services/authenticateService');
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
    signupAcc,



};
async function signupAcc(req, res) {
    var data = req.body;
    var result = await authService.nhanVienSignup(data);
    console.log(result.infor._id);
    var idUser = result.infor._id;
    cookieUtils.setTokenCookie(idUser, res);
    return res.redirect('/admin/thongtinnhanvien');

}

async function getLogin(req, res) {
    var nv = await nvServices.layTatCaNhanVien();
    console.log(nv);
    return res.status(200).render('admin/thongtinnhanvien', {
        nv: nv,
    });
}
async function thongtinNVView(req, res) {

    let nv = await nvServices.layTatCaNhanVien();
    console.log(nv);
    return res.status(200).render('admin/thongtinnhanvien', {
        nv: nv,
    });

}
async function xemchitietNVView(req, res) {
    var idnv = req.params.id
    var data = await nvServices.layThongTinNhanVien(idnv)
    console.log(data);
    return res.status(200).render('admin/xemchitietnv', {
        infor: data,
    });

}
async function thongtinKHView(req, res) {
    var clients = await khServices.getAllClient();
    console.log(clients);
    return res.status(200).render('admin/thongtinkhachhang', {
        khachhang: clients,
    });
}
async function xemchitietKHView(req, res) {
    var idkh = req.params.id
    var data = await khServices.getClientById(idkh)
    console.log(data);
    return res.status(200).render('admin/xemchitietkh', {
        infor: data,
    });
}
async function thongtinNCCView(req, res) {
    var ncc = await nccServices.getAllNCC();
    console.log(ncc);
    return res.status(200).render('admin/thongtinncc', {
        nhacungcap: ncc,
    });

}
async function xemchitietNCCView(req, res) {
    var idncc = req.params.id
    var data = await nccServices.getNCCById(idncc)
    console.log(data);
    return res.status(200).render('admin/xemchitietncc', {
        infor: data,
    });
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