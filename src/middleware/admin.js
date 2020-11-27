
var jwt = require('jsonwebtoken');

module.exports = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next(
      {
        path: "/admin/login",
        // query: { connectModal: true },
        // props: {notConnected:true}
      },);
    } else {
      var decoded = jwt.verify(token, '');
      next();
    }
  } else {
    next();
  }

};
