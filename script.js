document.getElementById('orderButton').addEventListener('click', () => {
    const orderStatus = document.getElementById('orderStatus');
    const orderNumber = document.getElementById('orderNumber');
    const selectedFoods = document.querySelectorAll('input[name="food"]:checked');
    const foodItems = Array.from(selectedFoods).map(item => item.value);

    if (foodItems.length === 0) {
        alert('Please select at least one food item.');
        return;
    }

    orderStatus.style.display = 'block';
    orderStatus.textContent = 'Preparing your order...';

    const orderId = 'Order #' + Math.floor(Math.random() * 10000);
    orderNumber.textContent = orderId;

    const randomSeconds = Math.floor(Math.random() * 5) + 1;

    new Promise((resolve) => {
        setTimeout(() => {
            resolve(foodItems);
        }, randomSeconds * 1000);
    }).then((foodItems) => {
        orderStatus.textContent = 'Your order is ready!';
        displayFoodItems(foodItems);
    });
});

function displayFoodItems(foodItems) {
    const orderStatus = document.getElementById('orderStatus');
    orderStatus.innerHTML = 'Your order is ready!<br>';
    foodItems.forEach(item => {
        const img = document.createElement('img');
        img.src = `assets/${item}.jpg`; // Assuming images are named as burger.png, fries.png, etc.
        img.alt = item;
        orderStatus.appendChild(img);
    });
}
