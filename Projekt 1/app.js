// Mobile menu
    const menu = document.querySelector('.mobile_menu')
    const menuButtons = document.querySelector('.navbar_menu')

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active')
        menuButtons.classList.toggle('active')
    })


// Random image
document.addEventListener("DOMContentLoaded", function() {
    const locations = [
        ['images/locations/ambroseisland.png','Ambrose Island','III'],
        ['images/locations/bangkok.png','Bangkok','I'],
        ['images/locations/berlin.png','Berlin','III'],
        ['images/locations/carpathianmountains.png','Carpathian Mountains','III'],
        ['images/locations/chongquing.png','Chongquing','III'],
        ['images/locations/colorado.png','Colorado','I'],
        ['images/locations/dartmoor.png','Dartmoor','III'],
        ['images/locations/dubai.png','Dubai','III'],
        ['images/locations/havenisland.png','Haven Island','II'],
        ['images/locations/hawkesbay.png','Hawkes Bay','II'],
        ['images/locations/hokkaido.png','Hokkaido','I'],
        ['images/locations/ica.png','ICA Facility','I'],
        ['images/locations/isleofsgail.png','Isle of Sgail','II'],
        ['images/locations/marrakesh.png','Marrakesh','I'],
        ['images/locations/mendoza.png','Mendoza','III'],
        ['images/locations/miami.png','Miami','II'],
        ['images/locations/mumbai.png','Mumbai','II'],
        ['images/locations/newyork.png','New York','II'],
        ['images/locations/paris.png','Paris','I'],
        ['images/locations/santafortuna.png','Santa Fortuna','II'],
        ['images/locations/sapienza.png','Sapienza','I'],
        ['images/locations/whittletoncreek.png','Whittleton Creek','II']
    ];

    const index = Math.floor(Math.random() * locations.length);
    document.body.style.backgroundImage = `url(${locations[index][0]})`;
    document.getElementById('location_text').innerText = "This is " + locations[index][1] + ", from Hitman " + locations[index][2];
});


