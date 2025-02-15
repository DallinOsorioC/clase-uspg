/*1.UNA TIENDA OFRECE DESCUENTOS SEGÚN EL MONTO DE LA COMPRA REALIZADA EL MONTO ES MAYOR 
O IGUAL A 100 DÓLARES. SE APLICA UN DESCUENTO DEL 10%. SI EL MONTO ES MAYOR O IGUAL A 200 
DÓLARES. SE APUCA UN DESCUENTO DEL 20%. SI EL MONTO ES MENOR A 100 DÓLARES, NO HAY DESCUENTO.
ESCRIBE UN PROGRANA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTOTOTAL A PAGAR.*/

const monto = parseFloat(prompt("Ingrese el monto de la compra:"))
let descuento = 0

if (monto >= 100 && monto < 200) {
    descuento = monto * 0.1
} else if (monto >= 200) {  
    descuento = monto * 0.2
}else{
    descuento = 0
}

const montoTotal = monto - descuento
alert(`El monto total a pagar es: ${montoTotal} y el descuento aplicado es: ${descuento}`)