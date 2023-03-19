import User from '../../../models/User';
// import { USER_ADDED } from './channels'

export default {
    Query: {
        users: async () => await User.find(),
        user: async (_, { id }) => await User.findById(id),
    },
    Mutation: {
        createUser: async (_, { data }, { pubsub }) => {
            const user = await User.create(data)
            pubsub.publish(USER_ADDED, {
                userAdded: user,
            })
            return user
        },
        updateUser: async (_, { id, data }) => await User.findOneAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => {
            const deleted = await User.findOneAndDelete(id);
            return !!deleted; //boolean
        },
    }
    // Subscription: {
    //     userAdded: {
    //         // subscribe: (obj, args, context )
    //         subscribe: (obj, args, {pubsub} ) => pubsub.asyncIterator(USER_ADDED),
    //     }
    // }
}