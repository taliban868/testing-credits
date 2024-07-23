
    const creditCardInput = document.getElementById('creditCard');
    const formattedCreditCard = document.getElementById('formattedCreditCard');

    creditCardInput.addEventListener('input', function() {
        // Remove all non-digit characters
        let creditCardNumber = this.value.replace(/\D/g, '');

        // Check if the input is empty
        if (creditCardNumber === '') {
            formattedCreditCard.textContent = '';
            return;
        }

        // Format the credit card number with spaces
        creditCardNumber = creditCardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');

        // Update the formatted credit card number in the span element
        formattedCreditCard.textContent = creditCardNumber;
    });



    