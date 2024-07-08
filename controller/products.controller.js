import Product from "../models/products.model.js";

const createProduct = async (req, res, next) => {

    const newProduct = new Product({
        title: req.body.title,
        price: req.body.price,
        rating: req.body.rating,
        description: req.body.description
    });

    try {
        const result = await newProduct.save();
        res.status(201).send({
            message: "Product succcessfully created",
            data: result
        })
    } catch (error) {
        res.status(500).send({
            message: "Failed to create product",
            error: error
        })
    }

}

const getProducts = async (req, res, next) => {

    try {
        const result = await Product.find();
        res.status(200).send({
            result
        })
    } catch (error) {
        res.status(500).send({
            message: "Failed to find product",
            error: error
        })
    }

}


const getProductByTitle = async (req, res, next) => {

    const title = req.params.title
    try {
        const result = await Product.find({ title: title });
        res.status(200).send({
            result
        })
    } catch (error) {
        res.status(500).send({
            message: "Failed to find product by title",
            error: error
        })
    }

}
const getProductByPriceRating = async (req, res, next) => {
    const price = req.params.price
    const rating = req.params.rating
    try {
        if (price && rating) {
            const product = await Product.find({ $and: [{ price: { $gte: price } }, { rating: { $gte: rating } }] }).sort({ price: 1 });
            res.status(200).send({
                message: "successful",
                product
            })
        } else {
            res.send({
                message: "Invalid price or rating"
            })
        }

    } catch (error) {
        res.status(500).send({
            message: "Failed to find product by price and rating",
            error: error
        })
    }

}

const deleteProduct = async (req, res, next) => {
    const title = req.params.title;
    try {
        const product = await Product.deleteOne({ title: title })
        res.status(202).send({
            message: "delete successful",
            data: product
        })
    } catch (error) {
        res.status(500).send({
            message: "Failed to delete product by title",
            error: error
        })
    }
}

const updateProduct = async (req, res, next) => {
    const id = req.params.id;
    const title = req.body.title;
    const price = req.body.price;
    try {
        const updatedProduct = await Product.findOneAndUpdate({ _id: id }, {
            $set: {
                title: title,
                price: price
            }
           
        }
            , { new: true })

        if (updateProduct) {
            res.status(202).send({
                message: "update successful",
                data: updatedProduct
            })
        } else {
            res.send({
                message: "Invalid id "
            })
        }

    } catch (error) {
        res.status(500).send({
            message: "Failed to update product by id",
            error: error
        })
    }
}

export { createProduct, deleteProduct, getProductByPriceRating, getProductByTitle, getProducts, updateProduct };
