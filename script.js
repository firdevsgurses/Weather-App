// script.js
const apiKey = "08bcb1c1b1e5fbc4ef008959069feb5e";


document.addEventListener('DOMContentLoaded', function () {
    // Default language is Turkish
    let currentLanguage = 'tr';

    document.getElementById('translateButton').addEventListener('click', function () {
        // Toggle between English and Turkish
        currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';

        // Call a function to update content based on the selected language
        updateContent();
    });

    // Initial content update
    updateContent();

    function updateContent() {
        // Update content based on the selected language
        if (currentLanguage === 'tr') {
            // Turkish content
            document.querySelector('li:nth-child(1) a').textContent = 'Anasayfa';
            document.querySelector('li:nth-child(2) a').textContent = 'Hakkımızda';
            document.querySelector('li:nth-child(3) a').textContent = 'İletişim';
            document.getElementById('buttonId').textContent = 'Ara';
            document.getElementById('cityId').textContent = 'Şehir';
            document.getElementById('temperatureId').textContent = 'Sıcaklık:';
            document.getElementById('conditionId').textContent = 'Hava Durumu:';
            document.getElementById('translateButton').textContent = 'Eng';
        } else {
            // English content
            document.querySelector('li:nth-child(1) a').textContent = 'Home';
            document.querySelector('li:nth-child(2) a').textContent = 'About Us';
            document.querySelector('li:nth-child(3) a').textContent = 'Contact';
            document.getElementById('buttonId').textContent = 'Search';
            document.getElementById('cityId').textContent = 'City:';
            document.getElementById('temperatureId').textContent = 'Temperature:';
            document.getElementById('conditionId').textContent = 'Condition:';
            document.getElementById('translateButton').textContent = 'Tr';
        }
    }

    function getWeather() {
        const city = document.getElementById('cityInput').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                document.querySelector(".city").textContent = data.name;
                const temperatureCelsius = (data.main.temp - 273.15).toFixed(2);
                document.querySelector(".temperature").textContent = `${temperatureCelsius} °C`;
                document.querySelector(".condition").textContent = data.weather[0].main;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                alert("Error fetching weather data. Please try again.");
            });
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
});
document.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
    
});

