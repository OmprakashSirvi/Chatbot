exports.getHomePage = (req, res, next) => {
  res.render('index');
};

exports.getLoginPage = (req, res, next) => {
  res.render('login');
};
