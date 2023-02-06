import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        isSeller: { type: Boolean, default: false, required: true },
        seller: {
            name: String,
            logo: String,
            description: String,
            rating: { type: Number, default: 0, required: true },
            numReviews: { type: Number, default: 0, required: true },
        },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model('User', userSchema);

/* let instance = null;

class usersDAO {

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
        if (!instance) instance = new usersDAO();
        return instance;
    }
} */

export default User;