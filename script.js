async function divineWeather() {
    const location = document.getElementById('locationInput').value;
    const weatherResult = document.getElementById('weatherResult');

    if (!location) {
        weatherResult.innerHTML = "<p>Please enter a location for the divination...</p>";
        return;
    }

    weatherResult.innerHTML = "<p>The witch is casting her spell...</p>";

    try {
        const apiKey = '2a65499e08afe2ac6f672eae1907e197';
     // Replace with your actual API key
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const prediction = getWitchPrediction(temperature, description);

            weatherResult.innerHTML = `
                <p>The crystal ball reveals:</p>
                <p>${prediction}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Conditions: ${description}</p>
            `;
        } else {
            weatherResult.innerHTML = "<p>The spirits are confused. Please try again with a different location.</p>";
        }
    } catch (error) {
        console.error('Error:', error);
        weatherResult.innerHTML = "<p>The witch's magic failed. Please try again later.</p>";
    }
}

function getWitchPrediction(temperature, description) {
    // Add more creative predictions based on the weather conditions
    if (temperature < 0) {
        return "The icy fingers of winter grip the land. Bundle up, lest the frost spirits claim thee!";
    } else if (temperature < 10) {
        return "A chill lingers in the air. The woodland creatures seek warmth in their burrows.";
    } else if (temperature < 20) {
        return "The air is crisp, like the pages of an old spellbook. A fine day for gathering herbs.";
    } else if (temperature < 30) {
        return "The sun's warmth blesses the earth. The faeries dance in the meadows.";
    } else {
        return "The heat of midsummer scorches the land. Seek shade and cool waters, mortal.";
    }
}