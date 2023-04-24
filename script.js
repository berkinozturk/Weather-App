function checkInput() {
    var input = document.getElementById("location-input");
    var section = document.getElementById("weather");
    if (input.value === "") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  }
  

const search = document.querySelector('button');

search.addEventListener('click', (event) => {
    event.preventDefault();
    const APIKey = 'e70606055efe6e42c025eb81efedd1dc';
    const value = document.querySelector('#location-input').value;

    if (value === '')

        return;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(data => {

            const { main:{temp}, weather: [{description}] } = data;
            const temperature = document.querySelector('.temperature');
            const desc = document.querySelector('.description');
            temperature.textContent = `${temp}°C`;
            desc.textContent = description;

        });
        
});
