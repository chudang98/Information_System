const nhanVienService = require('../services/nhanVienServices');

module.exports = {
  checkAccount,
};

async function checkAccount(req, res) {
  console.log(req.body);
  var { userName } = req.body;
  var check = await nhanVienService.isExistAccount(userName);
  console.log(userName, check);

  return res.status(200).json({
    status: 'success',
    exist: check,
  });
}
