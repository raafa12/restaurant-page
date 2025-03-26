// src/contact.js
export function createContactPage() {
    // Create main container for contact page
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    // Create contact title
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Culinary Oasis';
    contactContainer.appendChild(contactTitle);

    // Contact information sections
    const contactSections = [
        {
            title: 'Restaurant Location',
            content: '123 Gourmet Street, Culinary District, City, State 12345'
        },
        {
            title: 'Reservations',
            content: 'Phone: (555) 123-4567\nEmail: reservations@culinaryoasis.com'
        },
        {
            title: 'Hours of Operation',
            content: 'Monday - Thursday: 11am - 9pm\nFriday - Saturday: 11am - 11pm\nSunday: 11am - 8pm'
        }
    ];

    // Create contact details
    contactSections.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.classList.add('contact-section');

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.title;

        const sectionContent = document.createElement('p');
        sectionContent.textContent = section.content;
        sectionContent.style.whiteSpace = 'pre-line';

        sectionElement.appendChild(sectionTitle);
        sectionElement.appendChild(sectionContent);

        contactContainer.appendChild(sectionElement);
    });

    // Create contact form (optional, simplified)
    const contactFormTitle = document.createElement('h2');
    contactFormTitle.textContent = 'Send Us a Message';
    contactContainer.appendChild(contactFormTitle);

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    const formFields = [
        { label: 'Name', type: 'text', name: 'name' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Message', type: 'textarea', name: 'message' }
    ];

    formFields.forEach(field => {
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add('form-field');

        const label = document.createElement('label');
        label.textContent = field.label;
        label.setAttribute('for', field.name);

        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }
        input.name = field.name;
        input.id = field.name;
        input.required = true;

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        contactForm.appendChild(fieldContainer);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Send Message';
    submitButton.type = 'submit';
    contactForm.appendChild(submitButton);

    contactContainer.appendChild(contactForm);

    return contactContainer;
}