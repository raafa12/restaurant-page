import restaurantImage from './images/restaurant-interior.jpg';

export function createHomePage() {
    // Create home container
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    // Create restaurant image
    const image = document.createElement('img');
    image.src = restaurantImage;  // Directly use the imported image
    image.alt = 'Culinary Oasis Restaurant Interior';
    image.style.maxWidth = '100%';
    image.style.height = 'auto';
    image.style.margin = '20px 0';
    
    // Add error handling for image loading
    image.onerror = () => {
        console.error('Failed to load image:', restaurantImage);
    };

    // Add image to home container
    homeContainer.appendChild(image);

    // Create the restaurant description container
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('restaurant-description');

    // Create paragraphs
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Nestled in the heart of the city, Culinary Oasis is more than just a restaurant – it\'s a journey through flavors, textures, and culinary artistry. Our passionate chefs craft each dish with locally sourced ingredients, transforming simple components into extraordinary experiences.';
    descriptionContainer.appendChild(paragraph1);

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'From the moment you step through our doors, you\'ll be transported to a world where every meal tells a story. Whether you\'re seeking an intimate dinner, a celebratory feast, or a casual lunch with friends, Culinary Oasis promises an unforgettable dining adventure.';
    descriptionContainer.appendChild(paragraph2);

    // Create "Our Promise" section
    const promiseHeading = document.createElement('h2');
    promiseHeading.textContent = 'Our Promise';
    descriptionContainer.appendChild(promiseHeading);

    // Create unordered list of promises
    const promisesList = document.createElement('ul');
    const promises = [
        'Fresh, locally sourced ingredients',
        'Innovative culinary techniques', 
        'Warm, inviting atmosphere', 
        'Exceptional service'
    ];

    promises.forEach(promiseText => {
        const listItem = document.createElement('li');
        listItem.textContent = promiseText;
        promisesList.appendChild(listItem);
    });
    descriptionContainer.appendChild(promisesList);

    // Append description container to home container
    homeContainer.appendChild(descriptionContainer);

    return homeContainer;
}