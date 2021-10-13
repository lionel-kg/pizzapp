import "../css/Cart.css";

function Cart() {
    const MargueritaPrice = 8
    const SavoyardePrice = 10
    const quatreFromagePrice = 15

    return (
    <div className="lmj-cart">
        <h2>Panier</h2>
        <ul>
            <li>Marguerita : {MargueritaPrice}€</li>
            <li>Savoyarde : {SavoyardePrice}€</li>
            <li>4 Fromage : {quatreFromagePrice}€</li>
        </ul>
        Total : {MargueritaPrice + SavoyardePrice + quatreFromagePrice }€
    </div>)

}

export default Cart;