const Stripe = require("stripe");
const { STRIPE_PRIVATE_KEY } = process.env;
const stripe = new Stripe(STRIPE_PRIVATE_KEY)

const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({/* nos permite decirle a stripe porque queremos cobrar y genera una orden de compra con la informacion que le demos */
        /* aqui podemos pasarle los id de los productos */

        /* en vez de el id le pasamos un arreglo de productos */
        line_items:[
            {
                price_data: {/* para especificar cual es el nombre del producto */
                   product_data: {
                    name: "Cita Nutricionista",
                    description: "orden de cita con el nutricionista",
                   },
                   currency: "usd",/* tipo de moneda */
                   unit_amount: 20000, /* se coloca en centavos el monto del producto: seria igual a 200.00 dolares*/
                }, 
                quantity: 1,/* cantidad de productos que se compran  */
            },
            {
                /* podemos añadir mas productos*/
                price_data: {/* para especificar cual es el nombre del producto */
                   product_data: {
                    name: "Cita Dietista",
                    description: "orden de cita con el Dietista",
                   },
                   currency: "usd",/* tipo de moneda */
                   unit_amount: 10000, /* monto del producto: seria igual a 100.00 dolares*/
                },
                quantity: 1,/* cantidad de productos que se compran  */
            }
        ],
        /* ahora ponemos el modo en que va a pagar: payment es un pago de una sola vez y subscription es de varias veces*/
        mode: 'payment',/* modo de pago de una sola vez, ejemplo: una sola cita*/
        success_url: "http://localhost:3001/success", /* me redirecciona cuando el pago haya sido exitoso */
        cancel_url: "http://localhost:3001/cancel", /* me redirecciona cuando el pago haya sido rechazado */
    })
    return res.json(session)// retorne toda la sesion que ha generado
}

module.exports = {
    createSession,
}