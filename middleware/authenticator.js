var jwt = require("jsonwebtoken");

const protectedRoutes = process.env.PROTECTED_ROUTES.split(" ");
const authorizedRoles = process.env.ROLE_VISIBLITY.split(" ");

const authenticator = async (req, res, next) => {
  console.log("req.baseUrl : ", req.baseUrl);
  console.log("req.route : ", req.route.stack);
  try {
    const token = req.headers.authorization;
    var decoded = await jwt.verify(token, process.env.JWT_TOKEY_KEY);
    if (decoded) {
      req.roles = decoded.roles;
      const isRouteProtected = req.route.stack.some(({ name }) =>
        protectedRoutes.includes(name)
      );
      const isAuthorizedUser = decoded.roles?.some(({ role }) =>
        authorizedRoles.includes(role)
      );
      // console.log("isRouteProtected : ", isRouteProtected);
      // console.log("isAuthorizedUser : ", isAuthorizedUser);
      if (isRouteProtected) {
        if (isAuthorizedUser) {
          return next();
        } else {
          return res
            .status(403)
            .json({ message: "You are not authorized to access this route" });
        }
      }
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    res.status(404).json({ message: "Token not provided!" });
  }
};

module.exports = authenticator;
