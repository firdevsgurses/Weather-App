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