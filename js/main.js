// Configurazione della mappa
let map;
let marker;

function initMap() {
    // Coordinate di Via della Conciliazione, Vaticano
    const eventLocation = { lat: 41.9028, lng: 12.4577 };

    // Inizializzazione della mappa
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: eventLocation,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#242f3e"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{"lightness": -80}]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#746855"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"color": "#2b3544"}]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9ca5b3"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{"color": "#746855"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#17263c"}]
            }
        ]
    });

    // Aggiunta del marker
    marker = new google.maps.Marker({
        position: eventLocation,
        map: map,
        title: 'Festival della Musica per la Pace 2025'
    });

    // Gestione del click sul marker
    marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
            content: '<div><h3>Festival della Musica per la Pace 2025</h3><p>Via della Conciliazione, Vaticano</p></div>'
        });
        infoWindow.open(map, marker);
    });
}

// Gestione del link dell'indirizzo
document.getElementById('location-link').addEventListener('click', (e) => {
    e.preventDefault();
    const destination = encodeURIComponent('Via della Conciliazione, Vaticano');
    window.open(`https://www.google.com/maps/search/?api=1&query=${destination}`, '_blank');
});

// Gestione del pulsante per le indicazioni
document.getElementById('directions-btn').addEventListener('click', () => {
    const destination = encodeURIComponent('Via della Conciliazione, Vaticano');
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
});

// Gestione dei pulsanti di condivisione social
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent('Festival della Musica per la Pace 2025');
        
        let shareUrl;
        if (btn.querySelector('.fa-facebook')) {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        } else if (btn.querySelector('.fa-twitter')) {
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        } else if (btn.querySelector('.fa-instagram')) {
            // Instagram non supporta la condivisione diretta via URL
            alert('Per condividere su Instagram, usa la funzione di condivisione del tuo browser');
            return;
        }
        
        window.open(shareUrl, '_blank', 'width=600,height=400');
    });
});

// Gestione dell'aggiunta al calendario
document.querySelector('.btn-secondary').addEventListener('click', (e) => {
    if (e.target.textContent === 'Aggiungi al Calendario') {
        e.preventDefault();
        const event = {
            text: 'Festival della Musica per la Pace 2025',
            dates: '20250420T180000/20250420T230000',
            details: 'L\'Associazione Circoli per la Pace presenta il Festival della Musica per la Pace 2025, un evento imperdibile che riunisce i migliori artisti italiani e internazionali per una serata indimenticabile di musica dal vivo, dedicata al messaggio di pace e unità.',
            location: 'Via della Conciliazione, Vaticano'
        };
        
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
        window.open(calendarUrl, '_blank');
    }
});

// Simulazione del contatore delle donazioni (da sostituire con l'integrazione reale)
let donationAmount = 0;
const donationDisplay = document.getElementById('donation-amount');

// Configurazione PayPal
document.getElementById('paypal-donate').addEventListener('click', function() {
    // Apri il popup di PayPal
    window.open('https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID', '_blank');
});

// Animazione dello scroll fluido per i link interni
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 