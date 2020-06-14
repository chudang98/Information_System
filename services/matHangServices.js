const MatHang = require('../models/MatHang');
const DanhGia = require('../models/DanhGia');

const _ = require('lodash');

module.exports = {
  takeProduct,
  themMatHang,
  timMatHangTheoTen,
  timMatHangTheoLoai,
  layNhanXet,
  themNhanXet,
};

async function takeProduct() {
  var matHang = await MatHang.find({});
  return matHang;
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
    const docs = await MatHang.find({ ten :  { $regex: `.*${tenMatHang}.*` } });
    return docs;
  }catch(err){
    return []
  }
}

async function timMatHangTheoLoai(maLoaiMatHang) {
  try{
    switch(maLoaiMatHang){
      case 1: {
        const docs = await MatHang.find({ loai: 'Áo Sơ mi' });
        return _mappingProcuct(docs);
      };
      case 2: {
        const docs = await MatHang.find({ loai: 'Áo khoác' });
        return _mappingProcuct(docs);
      };
      case 3 : {
        const docs = await MatHang.find({ loai: 'Áo Vest' });
        return _mappingProcuct(docs);
      };
      case 4 : {
        const docs = await MatHang.find({ loai: 'Áo phông' });
        return _mappingProcuct(docs);
      };
      case 5 : {
        const docs = await MatHang.find({ loai: 'Quần vải' });
        return _mappingProcuct(docs);
      };
      case 6 : {
        const docs = await MatHang.find({ loai: 'Quần Kaki' });
        return _mappingProcuct(docs);
      };
      case 7 : {
        const docs = await MatHang.find({ loai: 'Quần jean ống rộng' });
        return _mappingProcuct(docs);
      };
      case 8 : {
        const docs = await MatHang.find({ loai: 'Quần jean ống đứng' });
        return _mappingProcuct(docs);
      };
      default : {
        const docs = await MatHang.find();
        return _mappingProcuct(docs);
      }
    }
  }catch(err){
    return [];
  }
}

async function layNhanXet(idMatHang) {
  try{
    const danhGia = await DanhGia.find({ matHang: idMatHang });
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

    // _.forEach(value, product => {
    //   // _.groupBy( , 'kichCo');
    //   products.push({
    //     _id: product._id,
    //     mauSac: product.mauSac,
    //     kichCo: product.kichCo,
    //     Anh: product.Anh,
    //   })
    // });
   
    result.push(sanPhamNho);
  });
  return result;
}