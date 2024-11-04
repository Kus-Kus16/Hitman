// Mobile menu
    const menu = document.querySelector('.mobile_menu')
    const menuButtons = document.querySelector('.navbar_menu')

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active')
        menuButtons.classList.toggle('active')
    })


// Random image, Saved name
document.addEventListener("DOMContentLoaded", function() {
    const locations = [
        ['images/locations/ambroseisland.png','the Ambrose Island','III','1A'],
        ['images/locations/bangkok.png','Bangkok','I','99'],
        ['images/locations/berlin.png','Berlin','III','80'],
        ['images/locations/carpathianmountains.png','the Carpathian Mountains','III','4D'],
        ['images/locations/chongquing.png','Chongquing','III','4D'],
        ['images/locations/colorado.png','Colorado','I','73'],
        ['images/locations/dartmoor.png','Dartmoor','III','33'],
        ['images/locations/dubai.png','Dubai','III','80'],
        ['images/locations/havenisland.png','the Haven Island','II','BF'],
        ['images/locations/hawkesbay.png','Hawkes Bay','II','1A'],
        ['images/locations/hokkaido.png','Hokkaido','I','8C'],
        ['images/locations/ica.png','the ICA Facility','I','73'],
        ['images/locations/isleofsgail.png','the Isle of Sgail','II','4D'],
        ['images/locations/marrakesh.png','Marrakesh','I','4D'],
        ['images/locations/mendoza.png','Mendoza','III','4D'],
        ['images/locations/miami.png','Miami','II','99'],
        ['images/locations/mumbai.png','Mumbai','II','66'],
        ['images/locations/newyork.png','New York','II','80'],
        ['images/locations/paris.png','Paris','I','73'],
        ['images/locations/santafortuna.png','Santa Fortuna','II','4D'],
        ['images/locations/sapienza.png','Sapienza','I', '73'],
        ['images/locations/whittletoncreek.png','Whittleton Creek','II','4D']
    ];

    const index = Math.floor(Math.random() * locations.length);
    document.body.style.backgroundImage = `url(${locations[index][0]})`;
    document.body.style.backgroundColor = '#171717' + locations[index][3] //#171717B3
    document.getElementById('location_text').textContent = "It's " + locations[index][1] + ", from Hitman " + locations[index][2] + ".";

    const name = localStorage.getItem('firstname');
    if (name != null && window.location.pathname === '/index.html') {
        document.querySelector('.header_title').textContent = "Welcome to the World of Assassination, " + name + "!";
    }

});

if (window.location.pathname === '/contact.html') {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        // Zbieranie danych z formularza
        const firstname = document.getElementById("firstname").value.trim();
        const lastname = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();
    
        localStorage.setItem('firstname', firstname)

    });
}
