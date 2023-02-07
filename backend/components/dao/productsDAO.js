const ProductDTO = require("../../dto/productsDTO");
let instance = null;

class DaoProductsMongoose extends MongooseContainer {

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

    getInstance() {
        if (!instance) instance = new DaoProductsMongoose()
        return instance
    }
}

module.exports = DaoProductsMongoose;