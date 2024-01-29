const mongoose = require("mongoose");


const ReviewSchema = mongoose.Schema(
    {
        text: {type: String, require: true},
        rating: {type: Number, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true}
    },
    {timestamps: true} 
)

const ProductSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        img: [{type: String, required: true}],
        reviews: [ReviewSchema],
        colors: [{type: String, required: true}],
        sizes: [{type: String, required: true}],
        price: {
            current: {type: String, required: true},
            discount: {type: Number},
        },
        category: {type: mongoose.Schema.Types.ObjectId, ref: "category", required: true},
        description: {type: String, required: true},

        
        


    },
    {timestamps: true}  
    // güncellediğimiz veya yeni oluşturduğumuz zaman bize tarih bilgisi verir
);


const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;
