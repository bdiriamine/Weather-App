document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const location = document.getElementById('location').value;
    const apiKey = 'a03cf2cabcaa4353971164038230401'; 
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=a03cf2cabcaa4353971164038230401&q=${location}&days=5&aqi=no&alerts=no`;
    var tmp=document.getElementsByClassName('tmp')
    console.log(tmp[0]);
    var icon=document.getElementsByClassName('img')
    //------------------------------------------ fetch
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
                document.getElementById('location-name').textContent = data.location.country;
                document.getElementById('temperature').textContent = data.current.temp_c;
                icon[0].setAttribute('src',data.current.condition.icon)

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('location-name').textContent = 'Error fetching data';
            document.getElementById('temperature').textContent = '';
    icon[0].setAttribute('src','')
        });





    //------------------------------------------ axios
    // axios.get(apiUrl)
    // .then(response => {
    //     const data = response.data;
    //             document.getElementById('location-name').textContent = data.location.country;
    //             document.getElementById('temperature').textContent = data.current.temp_c;
    //             icon[0].setAttribute('src',data.current.condition.icon)
    // })
    // .catch(error => {
    //         console.error('Error fetching weather data:', error);
    //         document.getElementById('location-name').textContent = 'Error fetching data';
    //         document.getElementById('temperature').textContent = '';
    //         icon[0].setAttribute('src','')
    // });






















});