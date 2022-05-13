const coupons = [
    {
        name: "minimo",
        discount: 15,
    },
    {
        name: "super",
        discount: 30,
    },
    {
        name: "medio",
        discount: 25,
    },
];


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    
    const inputCoupon = document.getElementById("InputCoupon");   
    const couponValue = inputCoupon.value;

    let descuento;
    
    
    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if(!userCoupon) {
        alert("El cupon " + couponValue + " no es valido");
    }
    else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}
