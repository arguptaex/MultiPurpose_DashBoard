import { Product, User } from "./models/models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    console.log("query is :", q)

    const ITEM_PER_PAGE = 2
    const regex = new RegExp(q, "i")  // we gave i to make it case insesnsitive
    try {
        await connectToDB();
        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};

export const fetchUser = async (id) => {
    console.log(id);
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};


export const fetchProducts = async (q, page) => {
    console.log("product query is :", q)

    const ITEM_PER_PAGE = 2
    const regex = new RegExp(q, "i")  // we gave i to make it case insesnsitive
    try {
        await connectToDB();
        const count = await Product.find({ title: { $regex: regex } }).count();
        const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, products };
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};

export const fetchProduct = async (id) => {
    try {
        connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch product!");
    }
};