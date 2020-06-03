const matHangService = require('../services/matHangServices');
const anhService = require('../services/anhSanPhamService');

module.exports = {
  layMatHang,
};

async function layMatHang(req, res) {
  var mathang = await matHangService.takeProduct();
  console.log(mathang);
  return res.status(200).render('user/home', {});
}
