const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        img: {type: String, required: true},

    },
    {timestamps: true}  
    // güncellediğimiz veya yeni oluşturduğumuz zaman bize tarih bilgisi verir
);


const category = mongoose.model("Category", CategorySchema);
module.exports = category;
