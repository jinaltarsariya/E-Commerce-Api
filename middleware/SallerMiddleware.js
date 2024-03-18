const jwt = require("jsonwebtoken");

let sallerMiddleware = async (req, res, next) => {
  try {
    let token = req.headers.token;

    if (!token) {
      throw new Error("Token Are Require !");
    }

    let decoded = await jwt.verify(token, "SALLER-AUTH");

    sallerTokenId = decoded.id;
    next();
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

module.exports = { sallerMiddleware };
