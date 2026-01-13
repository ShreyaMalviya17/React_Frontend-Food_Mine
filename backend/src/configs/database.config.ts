import {connect, ConnectOptions} from 'mongoose';

// export const dbConnect = () => {
//     connect(process.env.MONGO_URI!, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     } as ConnectOptions).then(
//         () => console.log("connect successfully"),
//         (error) => console.log(error)
//     )
// }


export const dbConnect = async () => {
    try {
        await connect(process.env.MONGO_URI!);
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};