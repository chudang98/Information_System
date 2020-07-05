const authService = require('../services/authenticateService');
const cookieUtils = require('../utils/cookieUtils');

const khachHangService = require('../services/khachHangService');
const nhanVienServices = require('../services/nhanVienServices');

module.exports = {
    getSignup,
    signupAcc,
    getLogin,
    checkLogin,
    getHome,
    dangKyKhachHang,
};

async function dangKyKhachHang(req, res) {
    var data = req.body;
    await khachHangService.luuKhachHang(data);
    return res.redirect('/seller/banhang');
}

async function getSignup(req, res) {
    return res.status(200).render('nhanvien/signup', {});
}

async function getLogin(req, res) {
    return res.status(200).render('nhanvien/login', {});
}

async function signupAcc(req, res) {
    var data = req.body;
    var result = await authService.nhanVienSignup(data);
    if (result.status == 'success') {
        console.log(result.infor._id);
        var idUser = result.infor._id;
        cookieUtils.setTokenCookie(idUser, res);
        return res.redirect('/admin/thongtinnhanvien');
    } else
        return res.redirect('/user/login');
}

async function checkLogin(req, res) {
    var { username, password } = req.body;
    var result = await authService.checkNhanVienLogin(username, password);
    if (result.status == 'success') {
        return res.status(200).render('nvkho/home', {});
    } else {
        return res.status(400).render('nvk/', {
            error: 'Tài khoản đăng nhập sai',
        });
    }
}

async function getHome(req, res) {
    return res.status(200).render('nvkho/home', {});
}