const mongoose = require("mongoose");


const CouponShchema = mongoose.Schema(
    {
        code: {type: String, required: true},
        discountpercent: {type: Number, required: true} // indirim oranı
    },
    {timestamps: true}
)

const Coupon = mongoose.model("Coupon", CouponShchema);
module.exports = Coupon;