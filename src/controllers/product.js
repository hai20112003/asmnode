import Product from "../models/product";
import joi from "joi";
const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  description: joi.string(),
  status: joi.boolean(),
  quality: joi.number(),
});

export const create = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
        res.status(400).json({
            message: error.details[0].message,
        });
    }
    const product = await Product.create(req.body);
    return res.status(201).json({
        message: "Thêm thành công",
        product
    })
  } catch (error) {
    res.status(400).json({
        message: error
    });
  }
};
export const getAll = async (req, res) => {
    try {
        const product = await Product.find();
        return res.status(201).json({
            message: "Danh sách",
            product
        })
      } catch (error) {
        res.status(400).json({
            message: error
        });
      }
};
export const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(201).json({
            message: "Danh sách theo id",
            product
        })
      } catch (error) {
        res.status(400).json({
            message: error
        });
      }
};
export const update = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            res.status(400).json({
                message: error.details[0].message,
            });
        }
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        return res.status(201).json({
            message: "Sửa thành công",
            product
        })
      } catch (error) {
        res.status(400).json({
            message: error
        });
      }
};
export const remove = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            res.status(400).json({
                message: error.details[0].message,
            });
        }
        const product = await Product.findOneAndDelete({_id: req.params.id});
        return res.status(201).json({
            message: "Xóa thành công",
            product
        })
      } catch (error) {
        res.status(400).json({
            message: error
        });
      }
};
