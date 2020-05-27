const mongoose = require('mongoose');

module.exports = {
  getHomeView,
};

async function getHomeView(req, res) {
  return res.status(200).render('user/home', {
    data: 'Test',
  });
}
