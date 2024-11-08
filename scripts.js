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

    const apiUrl = 'https://libretranslate.de/translate';
    const params = {
        q: inputText,
        source: 'auto',
        target: selectedLanguage,
        format: 'text'
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error(`HTTP hata: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // API yanıtını kontrol edin

        if (data.translatedText) {
            outputText.innerText = data.translatedText;
            outputContainer.classList.remove("hidden");
        } else {
            alert("Çeviri başarısız oldu. Yanıtı kontrol edin.");
        }
    } catch (error) {
        alert("Bir hata oluştu: " + error.message);
    }
}
    
