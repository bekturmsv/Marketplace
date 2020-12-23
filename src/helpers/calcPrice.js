export function calcSubPrice(item){
    return item.count * item.product.price
}

export function calcTotalPrice(products){
    let totalPrice = 0;
    products.forEach(item => {
        totalPrice += item.subPrice
    });
    return totalPrice
}