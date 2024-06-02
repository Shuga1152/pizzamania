// JavaScript to dynamically load the menu items and handle form submission

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        {
            title: 'Margherita',
            description: 'Classic cheese and tomato pizza.',
            price: '$8.99',
            imgSrc: 'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.jpg?s=1024x1024&w=is&k=20&c=bwoUzONnFgIK65TQ7uUeSAlM78h-gCmKSR3nnGhb6AI='
        },
        {
            title: 'Pepperoni',
            description: 'Pepperoni, cheese, and tomato sauce.',
            price: '$9.99',
            imgSrc: 'https://media.istockphoto.com/id/184920188/photo/pepperoni-cheese-02.jpg?s=1024x1024&w=is&k=20&c=iJUGFhEPibC6gbOvwp6VGv5RDmXE2cKVJnnkpJFeWUY='
        },
        {
            title: 'Vegetarian',
            description: 'Loaded with fresh vegetables.',
            price: '$10.99',
            imgSrc: 'https://media.istockphoto.com/id/1430885903/photo/new-york-style-vegetable-pizza-with-broccoli-olives-and-mushrooms.jpg?s=612x612&w=0&k=20&c=QYOoezUo7uIDy7sGWaUFSvgFiuGE1hfP9c47RdStcZU='
        },
        {
            title: 'BBQ Chicken',
            description: 'Grilled chicken, BBQ sauce, and onions.',
            price: '$11.99',
            imgSrc: 'https://media.istockphoto.com/id/489593343/photo/bbq-chicken-pizza.jpg?s=612x612&w=0&k=20&c=Lx264tmxrp3wpcwLdRdJyIvi3Yxm56jj2TW5WeoU8FI='
        }
    ];

    const menuContainer = document.getElementById('menu-items');
    menuItems.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-3 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card h-100';

        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.className = 'card-img-top';
        img.alt = `${item.title} Pizza`;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body text-center';

        const cardTitle = document.createElement('h3');
        cardTitle.className = 'card-title';
        cardTitle.textContent = item.title;

        const cardTextDesc = document.createElement('p');
        cardTextDesc.className = 'card-text';
        cardTextDesc.textContent = item.description;

        const cardTextPrice = document.createElement('p');
        cardTextPrice.className = 'card-text';
        cardTextPrice.textContent = item.price;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardTextDesc);
        cardBody.appendChild(cardTextPrice);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);
        menuContainer.appendChild(colDiv);
    });

   //

        // Simple form validation
        if (name && email && message) {
            document.getElementById('form-message').textContent = 'Thank you for your message!';
            contactForm.reset();
        } else {
            document.getElementById('form-message').textContent = 'Please fill out all fields.';
        }
    });
