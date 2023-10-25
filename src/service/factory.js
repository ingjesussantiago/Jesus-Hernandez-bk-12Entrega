import config from "../config/config.js"
import MongoSingleton from '../config/mongodb-singleton.js'

let productService
let cartService
let UserService

async function initializeMongoService() {
    console.log("Iniciando servicio para MongoDB ok");
    try {
        // conectamos Mongo
        await MongoSingleton.getIntance()

        // Creamos las instancias de las Clases de DAO de Mongo7
        const { default: ProductServiceMongo } = await import('./dao/mongoosedb/managerMongose/producto.service.Moogose.js');
        productService = new ProductServiceMongo();
        console.log("Servicio de Product cargado:");
        console.log(productService);

        const { default: CartServiceMongo } = await import('./dao/mongoosedb/managerMongose/Cart.service.Mongoose.js');
        cartService = new CartServiceMongo();
        console.log("Servicio de Cart cargado:");
        console.log(cartService);

        const { default: UserServiceMongo } = await import('./dao/mongoosedb/managerMongose/user.service.Mongoose.js');
        UserService = new UserServiceMongo();
        console.log("Servicio de User cargado:");
        console.log(UserService);


    } catch (error) {
        console.error("Error al iniciar MongoDB:", error);
        process.exit(1); // Salir con código de error
    }
}


switch (config.persistence) {
    case 'mongodb':
        initializeMongoService();
        break;

    // case 'files':
    //     const { default: CoursesServiceFileSystem } = await import("./dao/filesystem/courses.service.js")
    //     productService = new CoursesServiceFileSystem();
    //     console.log("Servicio de courses cargado:");
    //     console.log(productService);

    //     const { default: StudentServiceFileSystem } = await import('./dao/filesystem/students.service.js');
    //     cartService = new StudentServiceFileSystem();
    //     console.log("Servicio de estudiantes cargado:");
    //     console.log(cartService);

    // case 'sql':
    //     // SQL

    //     break;

    default:
        console.error("Persistencia no válida en la configuración:", config.persistence);
        process.exit(1); // Salir con código de error
}


export { productService, cartService, UserService}