const MatHang = require('../models/MatHang');
const _ = require('lodash');

module.exports = {
  takeProduct,
  themMatHang,
  timMatHangTheoTen,
};

async function takeProduct() {
  var matHang = await MatHang.find({});
  return matHang;
}

async function themMatHang(matHangMoi) {
  const matHang = { 
    ...matHangMoi,
    anh: null
  };
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
        
        break;
      };
      case 2 : {
  
        break;
      };
      case 3 : {
  
        break;
      };
      case 4 : {
  
        break;
      };
      case 5 : {
  
        break;
      };
      case 6 : {
  
        break;
      };
      case 7 : {
  
        break;
      };
      case 8 : {
  
        break;
      };



    }
  }catch(err){

  }
}
