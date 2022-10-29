
export default function SelectPaymentMethod (){
    return (
        <div>
<label for="payment-select">Choose a payment method:</label>

<select name="method" id="payment-split">
    <option value="">--Please choose an option--</option>
    <option value="Paypal">Paypal</option>
    <option value="card">Card</option>
    <option value="Amazon">Amazon</option>
    <option value="Apple-pay">Apple pay</option>
</select>
</div>
    )
}