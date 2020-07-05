const db = require('../models');
const Nguoi = db.Nguoi;
const NhaCungCap = db.NhaCungCap;

module.exports = {
    luuNhacungcap,
    getAllNCC,
    getNCCById,
    updateInfor,
    timKhachHangTheoSdt,
    getDetailCustomer,
};

async function luuNhacungcap(data) {
    var {
        ten,
        diaChi,
        ngaySinh,
        gioiTinh,
        sdt,
        email,
        moTa
    } = data;
    console.log(ten, diaChi);
    var nguoi = await Nguoi.create({
        ten,
        diaChi,
        ngaySinh,
        gioiTinh,
        email,
        sdt,
    });
    console.log(nguoi.dataValues._id);
    var ncc = await NhaCungCap.create({
        Nguoiid: nguoi.dataValues._id,
        moTa,
    });
    console.log(ncc);
    return false;
}

async function getNCCById(idNCC) {
    var data = await NhaCungCap.findOne({
        where: {
            _id: idNCC,
        },
        include: 'nguoi',
        raw: true,
        nest: true,
    });
    return data;
}

async function getAllNCC() {
    var ncc = await NhaCungCap.findAll({
        raw: true,
        nest: true,
        include: 'nguoi',
    });
    return ncc;
}

async function updateInfor(data, idCustomer) {
    var customer = await KhachHang.finndOne({
        where: {
            _id: idCustomer,
        },
        raw: true,
        nest: true,
    });
    await Nguoi.update(data, {
        where: {
            _id: customer.Nguoiid,
        }
    })
    return {
        status: 'success',
    }
}

async function getDetailCustomer(idCustomer) {
    var data = await KhachHang.findOne({
        where: {
            _id: idCustomer,
        },
        include: 'nguoi',
        raw: true,
        nest: true,
    });
    return data;
}

async function timKhachHangTheoSdt(sdt) {
    var data = await KhachHang.findAll({
        where: {
            sdt: {
                [Op.like]: `%${sdt}%`,
            },
        },
        include: 'nguoi',
        raw: true,
        nest: true,
    });
    return data;
}