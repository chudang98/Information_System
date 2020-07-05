const db = require('../models');
const NhaCungCap = db.NhaCungCap;
const Nguoi = db.Nguoi;

module.exports = {
  themNhaCungCap,
  timNhaCungCapTheoSdt,
}

async function themNhaCungCap(data){
  var {
    ten,
    sdt,
    email,
    ngaySinh,
    gioiTinh,
    diaChi,
  } = data;
  var infor_nguoi = await Nguoi.create({
    ten,
    diaChi,
    ngaySinh,
    gioiTinh,
    email,
    sdt,
  });
  await NhaCungCap.create({
    Nguoiid: infor_nguoi._id,
  });
  return {
    status: 'success',
  };
}

async function timNhaCungCapTheoSdt(sdt){
  var data = await Nguoi.findAll({
    where: {
      sdt: {
        [Op.like]: `%${sdt}%`,
      },
    },
    raw: true,
    nest: true,
  });
  var result = [];
  for(nguoi of data){
    var NCC = await NhaCungCap.findOne({
      where: {
        Nguoiid: nguoi._id,
      },
      include: 'nguoi',
      raw: true,
      nest: true,
    });
    if(NCC)
      result.push(NCC);
  }
  return data;
}