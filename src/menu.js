// src/menu.js
export function createMenuPage() {
    // Create main container for menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Create menu title
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Culinary Offerings';
    menuContainer.appendChild(menuTitle);

    // Define menu items
    const menuItems = [
        {
            name: 'Seasonal Garden Salad',
            description: 'Fresh mixed greens with locally sourced vegetables, topped with our house-made vinaigrette.',
            price: '$12'
        },
        {
            name: 'Pan-Seared Sea Bass',
            description: 'Delicate sea bass served with roasted asparagus and citrus-herb sauce.',
            price: '$28'
        },
        {
            name: 'Truffle Mushroom Risotto',
            description: 'Creamy arborio rice with wild mushrooms, finished with black truffle oil.',
            price: '$22'
        },
        {
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.',
            price: '$10'
        }
    ];

    // Create menu items section
    const menuItemsSection = document.createElement('div');
    menuItemsSection.classList.add('menu-items');

    menuItems.forEach(item => {
        const menuItemCard = document.createElement('div');
        menuItemCard.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;
        itemPrice.classList.add('menu-item-price');

        menuItemCard.appendChild(itemName);
        menuItemCard.appendChild(itemDescription);
        menuItemCard.appendChild(itemPrice);

        menuItemsSection.appendChild(menuItemCard);
    });

    menuContainer.appendChild(menuItemsSection);

    return menuContainer;
}