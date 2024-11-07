// scripts.js
async function translateText() {
    const inputText = document.getElementById('inputText').value;
    const selectedLanguage = document.getElementById('languageSelect').value;
    const outputContainer = document.getElementById('outputContainer');
    const outputText = document.getElementById('outputText');

    // Eğer kullanıcı boş metin girerse uyarı göster
    if (inputText.trim() === "") {
        alert("Lütfen çevirmek için bir metin girin.");
        return;
    }

    const apiUrl = 'https://libretranslate.de/translate'; // LibreTranslate API URL'si
    const params = {
        q: inputText,  // Çevrilecek metin
        source: 'auto',  // Kaynak dilini otomatik algıla
        target: selectedLanguage,  // Hedef dil
        format: 'text'  // Çıktı formatı
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),  // Parametreleri JSON olarak gönderiyoruz
        });

        const data = await response.json();

        if (data.error) {
            alert("Hata: " + data.error.message);
            return;
        }

        // Çevrilen metni ekrana yazdır
        outputText.innerText = data.translatedText;
        outputContainer.classList.remove("hidden");
    } catch (error) {
        alert("Bir hata oluştu: " + error.message);
    }
}
