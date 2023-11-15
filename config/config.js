const config = {
     env: process.env.NODE_ENV || 'development', 
     port: process.env.PORT || 3000,
     mongoUri: process.env.MONGODB_URI || "mongodb+srv://meet36043:C4M9nsOEO1vPJ8Ye@projectcomp229.tkgoffw.mongodb.net/"||
    process.env.MONGO_HOST ||
     'mongodb://' + (process.env.IP || 'localhost') + ':' + 
    (process.env.MONGO_PORT || '27017') +
     '/mernproject' 
     }
export default config
