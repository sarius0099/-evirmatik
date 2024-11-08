<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Çeviri Uygulaması</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Çeviri Uygulamasına Hoş Geldiniz!</h1>
        </header>

        <main>
            <label for="inputText">Çevirmek istediğiniz metni girin:</label>
            <textarea id="inputText" placeholder="Metninizi buraya yazın..."></textarea>

            <label for="languageSelect">Hedef Dili Seçin:</label>
            <select id="languageSelect">
                <option value="en">İngilizce</option>
                <option value="es">İspanyolca</option>
                <option value="fr">Fransızca</option>
                <option value="de">Almanca</option>
                <option value="it">İtalyanca</option>
                <option value="pl">Polonyaca</option>
            </select>

            <button onclick="translateText()">Çevir</button>

            <div id="outputContainer" class="hidden">
                <h2>Çevrilen Metin:</h2>
                <p id="outputText"></p>
            </div>
        </main>

        <footer>
            <p>&copy; 2024 Çeviri Uygulaması</p>
        </footer>
    </div>

    <script>
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

            const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=tr|${selectedLanguage}`;

            try {
                const response = await fetch(apiUrl);
                
                if (!response.ok) {
                    throw new Error(`HTTP hata: ${response.status}`);
                }

                const data = await response.json();
                console.log(data); // API yanıtını kontrol edin

                if (data.responseData && data.responseData.translatedText) {
                    outputText.innerText = data.responseData.translatedText;
                    outputContainer.classList.remove("hidden");
                } else {
                    alert("Çeviri başarısız oldu. Yanıtı kontrol edin.");
                }
            } catch (error) {
                alert("Bir hata oluştu: " + error.message);
            }
        }
    </script>
</body>
</html>
