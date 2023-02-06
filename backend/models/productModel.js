import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

class productsDAO {

  async save(obj) {
    let col = await this.schema.create(obj);
    await col.save();
  }

  async getById(id) {
    return await this.schema.find({ _id: id }).lean();
  }

  async getAll() {
    return await this.schema.find({}).lean();
  }

  async deleteById(id) {
    await this.schema.deleteOne({ _id: id });
  }
  async deleteAll() {
    await this.schema.deleteMany({});
  }

  async update(id, obj) {
    return await this.schema.updateOne(
      { _id: id },
      { $set: { products: obj } }
    );
  }
}

export default Product;