// src/index.js
import { createHomePage } from './home';
import { createMenuPage } from './menu';
import { createContactPage } from './contact';
import './style.css';

function initializePage() {
    // Create main content container
    const contentContainer = document.getElementById('content');

    // Create navigation
    const nav = document.querySelector('nav');
    const tabs = [
        { name: 'Home', id: 'home' },
        { name: 'Menu', id: 'menu' },
        { name: 'Contact', id: 'contact' }
    ];

    // Create tab buttons
    tabs.forEach(tab => {
        const button = document.createElement('button');
        button.textContent = tab.name;
        button.classList.add('nav-button');
        button.setAttribute('data-tab', tab.id);
        nav.appendChild(button);
    });

    // Set up tab navigation
    function setupTabNavigation() {
        const navButtons = document.querySelectorAll('.nav-button');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                navButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                button.classList.add('active');

                // Get the tab name
                const tabName = button.getAttribute('data-tab');

                // Clear previous content
                contentContainer.innerHTML = '';

                // Load appropriate page content
                switch(tabName) {
                    case 'home':
                        contentContainer.appendChild(createHomePage());
                        break;
                    case 'menu':
                        contentContainer.appendChild(createMenuPage());
                        break;
                    case 'contact':
                        contentContainer.appendChild(createContactPage());
                        break;
                }
            });
        });

        // Default to home page
        const homeButton = document.querySelector('.nav-button[data-tab="home"]');
        homeButton.click();
    }

    // Call tab navigation setup
    setupTabNavigation();
}

// Call initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);