const db = require('../models');
const MatHang = require('../models/MatHang')(db.sequelize, db.Sequelize);
const DanhGia = require('../models/DanhGia')(db.sequelize, db.Sequelize);
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const _ = require('lodash');

module.exports = {
  takeAllProduct,
  themMatHang,
  timMatHangTheoTen,
  timMatHangTheoLoai,
  layNhanXet,
  themNhanXet,
  layMatHangBangId,
};

async function takeAllProduct() {
  var matHang = await MatHang.findAll({
    raw: true,
    nest: true,
  });
  return matHang;
}

async function layMatHangBangId(idMatHang){
  var mathang = await MatHang.findOne({
    where: {
      _id: idMatHang, 
    },
    raw: true,
    nest: true,
  });
  return mathang;
}

async function themMatHang(matHangMoi) {
  const matHang = new MatHang({ 
    ...matHangMoi,
    anh: null
  });
  try{
    await matHang.save();
    return {
      status: 'success',
    };
  }catch(err) {
    return {
      status: 'fail',
    }
  }
}

async function timMatHangTheoTen(tenMatHang) {
  try{
    const docs = await MatHang.findAll({ 
      where :  { 
        [Op.like]: `%${tenMatHang}%`
      },
      raw: true,
      nest: true,
    });
    return docs;
  }catch(err){
    return []
  }
}

async function timMatHangTheoLoai(maLoaiMatHang) {
  console.log(maLoaiMatHang);
  try{
    switch(maLoaiMatHang){
      case 1: {
        var docs = await MatHang.findAll({
          where: {
           loai: 'Áo Sơ mi',
          },
          raw: true,
          nest: true,
        });
        return _mappingProcuct(docs);
      };
      case 2: {
        var docs = await MatHang.findAll({
          where: {
            loai: 'Áo khoác',
          },
          raw: true,
          nest: true,
        });
        return _mappingProcuct(docs);
      };
      case 3 : {
        var docs = await MatHang.findAll({
          where: {
            loai: 'Áo Vest',
          },
          raw: true,
          nest: true,
        });
        return _mappingProcuct(docs);
      };
      case 4 : {
        var docs = await MatHang.findAll({
          where: {
            loai: 'Áo phông',
          },
          raw: true,
          nest: true,
        });
        return _mappingProcuct(docs);
      };
      case 5 : {
        var docs = await MatHang.findAll({
          where: {
            loai: 'Quần vải',
          },
          raw: true,
          nest: true,
        });
        return _mappingProcuct(docs);
      };
      case 6 : {
        var docs = await MatHang.findAll({
          where: {
            loai: 'Quần Kaki',
          },
          raw: true,
          nest: true,
        });
        return _mappingProcuct(docs);
      };
      case 7 : {
        var docs = await MatHang.findAll({
          where: {
            loai: 'Quần jean ống rộng',
          },
          raw: true,
          nest: true,
        });
        return _mappingProcuct(docs);
      };
      case 8 : {
        var docs = await MatHang.findAll({
          where: {
            loai: 'Quần jean ống đứng',
          },
          raw: true,
          nest: true,
        });
        return _mappingProcuct(docs);
      };
      default : {
        var docs = await MatHang.findAll({
          raw: true,
          nest: true,
        });
        return _mappingProcuct(docs);
      }
    }
  }catch(err){
    return [];
  }
}

async function layNhanXet(idMatHang) {
  try{
    const danhGia = await DanhGia.findAll({ matHang: idMatHang });
    return danhGia;
  }catch(err){
    return [];
  }

}

async function themNhanXet(idHoaDon, idMatHang, nhanXet) {
  try{
    const nhanXet = new DanhGia({
      ...nhanXet,
      matHang : idMatHang,
      hoaDonBan : idHoaDon,
    });
    await nhanXet.save();
    return {
      status: 'success',
    }
  }catch(err){
    return {
      status: 'fail',
    }
  }
}

async function _mappingProcuct(products){
  var data = [];
  _.forEach(products, (product, index) => {
    var fields = ['_id', 'ten', 'loai', 'giaBan', 'soLuong', 'mauSac', 'kichCo', 'Anh'];
    data[index] = _.pick(product, fields);
  });
  var objData = _.groupBy(data, 'ten');
  var result = [];
  _.forOwn(objData, (value, key) => {
    var sanPham = [];
    var mapKichco = _.groupBy(value, 'kichCo');

    _.forOwn(mapKichco, (value, key) => {
      var mauSac = [];
      _.forEach(value, product => {
        mauSac.push({
          _id: product._id,
          mauSac: product.mauSac,
          Anh: product.Anh,
        });
      })
      var kichCo = {
        kichCo: key,
        mauSac: mauSac,
      };
      sanPham.push(kichCo);
    });

    var sanPhamNho = {
      ten: key,
      loai: value[0].loai,
      giaBan: value[0].giaBan,
      sanPham: sanPham,
    };
    result.push(sanPhamNho);
  });
  return result;
}

async function _checkDuSoLuongMatHang(soLuongCan, idMatHang){
  var product = await MatHang.findOne({
    where: {
      _id: idMatHang,
    },
    raw: true,
    nest: true,
  });
  return product.soLuong >= soLuongCan;
}

async function _updateSoLuongMatHang(soluong, idMatHang){
  var hd = await HoaDonChiTiet.findOne({
    where: {
      _id: idMatHang,
    },
    raw: true,
    nest: true,
  });

  await MatHang.update(
    {
      soLuong: hd.soLuong - soluong,
    },
    {
      where: {
        _id: idMatHang,
      },
      returning: true,
      plain: true,
    },
  );
  return {
    status: 'success',
  }
}