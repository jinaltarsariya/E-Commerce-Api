const jwt = require("jsonwebtoken");

let userMiddleware = async (req, res, next) => {
  try {
    let token = req.headers.token;

    if (!token) {
      throw new Error("Token Are Require !");
    }

    let decoded = await jwt.verify(token, "USER-AUTH");

    userTokenId = decoded.id;
    next();
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

module.exports = { userMiddleware };
