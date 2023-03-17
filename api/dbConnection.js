const mongoose=require("mongoose")
const dbConnect=()=>{
    const connectionParams={    maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true}

    mongoose.connect(process.env.DB_CONNECTION,connectionParams)
    mongoose.connection.on("connected", () => {
        console.log("DB CONNECTED Sccessfully");

    });
    mongoose.connection.on("error", (err) => {
        console.log("Error While Connecrting to MongooDB"+err);

    });
    mongoose.connection.on("disconnected", (err) => {
        console.log("Mongoodb connection Disconnected");

    });
}
module.exports=dbConnect
