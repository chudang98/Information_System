module.exports = {
  getHomeView,
};

async function getHomeView(req, res) {
  res.status(200).render('user/home', {
    data: 'Test',
  });
}
