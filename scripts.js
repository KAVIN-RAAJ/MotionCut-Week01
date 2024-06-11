// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const currencySelect = document.getElementById('currency');
    const subscriptionSelect = document.getElementById('subscription');
    const tiers = document.querySelectorAll('.tier');

    function formatPrice(price) {
        const wholePart = Math.floor(price) - 1;
        return `${wholePart}.99`;
    }

    function updatePrices() {
        const selectedCurrency = currencySelect.value;
        const subscriptionType = subscriptionSelect.value;

        tiers.forEach(tier => {
            const priceKey = `data-price-${subscriptionType}-${selectedCurrency}`;
            const price = parseFloat(tier.getAttribute(priceKey));
            const formattedPrice = formatPrice(price);
            const currencySymbol = currencySelect.options[currencySelect.selectedIndex].getAttribute('data-symbol');
            tier.querySelector('.price').textContent = `${currencySymbol}${formattedPrice}`;
        });
    }

    currencySelect.addEventListener('change', updatePrices);
    subscriptionSelect.addEventListener('change', updatePrices);

    updatePrices();

    // Sign up button click event
    const signupButtons = document.querySelectorAll('.signup-btn');
    signupButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('main-content').style.display = 'none';
            document.getElementById('signup').style.display = 'block';
        });
    });

    // Sign up form submission event
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('signup').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
    });

    // Home button click event
    const homeButton = document.getElementById('home-btn');
    homeButton.addEventListener('click', function() {
        document.getElementById('thank-you').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    });
});
