const mongoose = require('mongoose');

// Define schema for Product
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    SKU: String,
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_Category', required: true },
    inventory_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_Inventory', required: true },
    discount_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' },
    price: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});

// Define schema for Product Category
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});

// Define schema for Product Inventory
const inventorySchema = new mongoose.Schema({
    quantity: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});

// Define schema for Discount
const discountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    discount_percent: { type: Number, required: true },
    active: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});

// Define models
const Product = mongoose.model('Product', productSchema);
const Product_Category = mongoose.model('Product_Category', categorySchema);
const Product_Inventory = mongoose.model('Product_Inventory', inventorySchema);
const Discount = mongoose.model('Discount', discountSchema);

module.exports = { Product, Product_Category, Product_Inventory, Discount };
