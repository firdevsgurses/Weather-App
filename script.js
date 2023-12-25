document.addEventListener('DOMContentLoaded', function () {
    // Default language is Turkish
    let currentLanguage = 'tr';

    document.getElementById('translateButton').addEventListener('click', function () {
        // Toggle between English and Turkish
        currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';

        // Call a function to update content based on the selected language
        updateContent();

        // Get weather information based on the selected city
        getWeather();
    });

    // Initial content update
    updateContent();

    // Yeni fonksiyon
    document.addEventListener('DOMContentLoaded', function () {
        // Diğer kodlar...
    
        function getWeather() {
            const apiKey = "08bcb1c1b1e5fbc4ef008959069feb5e";
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
    
                    // Kelvin'den Celsius'a çevirme
                    const temperatureCelsius = (data.main.temp - 273.15).toFixed(2);
                    document.querySelector(".temperature").textContent = `${temperatureCelsius} °C`;
    
                    document.querySelector(".condition").textContent = data.weather[0].main;
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    alert("Error fetching weather data. Please try again.");
                });
        }
    });
    

    function updateContent() {
        // Update content based on the selected language
        if (currentLanguage === 'tr') {
            // Turkish content
            document.querySelector('li:nth-child(1) a').textContent = 'Anasayfa';
            document.querySelector('li:nth-child(2) a').textContent = 'Hakkımızda';
            document.querySelector('li:nth-child(3) a').textContent = 'İletişim';
            document.getElementById('translateButton').textContent = 'Eng';
        } else {
            // English content
            document.querySelector('li:nth-child(1) a').textContent = 'Home';
            document.querySelector('li:nth-child(2) a').textContent = 'About Us';
            document.querySelector('li:nth-child(3) a').textContent = 'Contact';
            document.getElementById('translateButton').textContent = 'Tr';
        }
    }
});
