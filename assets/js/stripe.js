// Set your Stripe publishable key
const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');

// Get the payment form
const paymentForm = document.getElementById('payment-form');

// Get the payment button
const payButton = document.getElementById('pay-btn');

// Add event listener to the payment button
payButton.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        // Get the payment form data
        const cardName = document.getElementById('card-name').value;
        const cardNumber = document.getElementById('card-number').value;
        const expMonth = document.getElementById('exp-month').value;
        const expYear = document.getElementById('exp-year').value;
        const cvc = document.getElementById('cvc').value;

        // Create a payment method
        const paymentMethod = await stripe.createPaymentMethod({
            type: 'card',
            card: {
                number: cardNumber,
                exp_month: expMonth,
                exp_year: expYear,
                cvc: cvc,
            },
        });

        if (paymentMethod.error) {
            // Display error message
            document.getElementById('payment-message').innerText = paymentMethod.error.message;
        } else {
            // Send the payment method ID to your server
            const paymentMethodId = paymentMethod.paymentMethod.id;
            console.log(`Payment Method ID: ${paymentMethodId}`);
        }
    } catch (error) {
        console.error('Payment Error:', error);
        document.getElementById('payment-message').innerText = 'Payment failed. Please try again.';
    }
});