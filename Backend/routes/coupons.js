const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon");

// Kupon oluşturma (create)

router.post("/coupon", async (req, res) => {
  try {
    const newCoupon = new Coupon(req.body);

    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Tüm kuponları getirme (Read-all)

router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Belirli bir kupon getirme (Read-single)

router.get("/:couponId", async(req, res) =>{
  const couponId = req.params.couponId;

  try {
      const coupon = await Coupon.findById(couponId);


      if(!coupon){
         return res.status(404).json({error: "coupon is not found"});
      }
      res.status(200).json(coupon);
      
  } catch (error) {
      console.log(error);
      res.status(500).json({error: "Server error"})
      
  }
})



// kupon ismine göre Belirli kupon getirme (Read - single by Coupon Code)


router.get("/code/:couponCode", async(req, res) =>{
  try {
    const couponCode = req.params.couponCode;

    const coupon = await Coupon.findOne({code: couponCode});

    if(!coupon){
      return res.status(404).json({error: "Coupon not found"});

    }

    const {discountpercent} = coupon;

    res.status(200).json({discountpercent});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Server error."})
    
  }

})


// Kupon güncelleme (update)

router.put("/:couponId", async(req, res) =>{
  try {
    const couponId = req.params.couponId;
    const updates = req.body;
    const existingCoupon = await Coupon.findById(couponId);
  
    if (!existingCoupon){
      return res.status(404).json({error: "Coupon not found"})
    }
  
    const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {new: true})
    res.status(200).json(updatedCoupon)
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "server error"})
    
  }


})



//  Kupon Silme (delete)

router.delete("/:couponId", async(req, res) =>{
  try {
    const couponId = req.params.couponId;

    const deletedCoupon = await Coupon.findOneAndDelete(couponId);

    if (!deletedCoupon){
      return res.status(404).json({error: "Coupon not found"});
    }

    res.status(200).json(deletedCoupon);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "server error"})
    
  }
})




module.exports = router;
