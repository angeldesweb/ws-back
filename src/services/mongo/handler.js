export const crudHandler = (model) => {
    return {
        create: async (args) => {
            const doc = new model(args);
            return await doc.save();
        },
        find: async () => await model.find(),
        findOne: async (params) => await model.findOne(params),
        findById: async (id) => await model.findById(id),
        update: async (id,update) => await model.findByIdAndUpdate(id,update),
        delete: async (id) => await model.findByIdAndDelete(id)
    }
}