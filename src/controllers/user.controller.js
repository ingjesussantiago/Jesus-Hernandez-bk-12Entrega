import {UserService} from "../service/factory.js"

export async function addCartToUser(req, res) {
    try {
        if (req.session.user && req.session.user.id) {
            const { id } = req.session.user
            console.log("desde req.session", id);

            const products = await UserService.addCartToUser(id)

            res.render("carrito", { products: products.products })

            //  res.json({products:products.products })
            console.log(products);


        } else {
            return res.status(403).send('Usuario no se ha logeado o no resgistrado ')
        }
    } catch (error) {

    }


}


export async function addproductToCart(req, res) {
    try {
        if (req.session.user && req.session.user.id) {
            const { id } = req.session.user

            const products = await UserService.addproductToCart(id)

            // res.render("carrito", {products:products.productos })
            res.json(products)


        } else {
            return res.status(403).send('Usuario no se ha logeado o no resgistrado ')
        }
    } catch (error) {

    }
}


