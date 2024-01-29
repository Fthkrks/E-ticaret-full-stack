const express = require("express");
const router = express.Router();



// Diğer rota roto dosyalarını içe aktarıyoruz


const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const CouponRoute = require("./coupons.js");
const UserRoute = require("./user.js");
const paymentRoute = require("./payment.js");



// Her rotayı ilgili yol altında kullanıyoruz 

router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/auth", authRoute);
router.use("/coupons", CouponRoute);
router.use("/users", UserRoute);
router.use("/payment", paymentRoute);



module.exports = router;