

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
       
        document.getElementById("author").innerHTML = `By: ${data.user.name}`
    })
    .catch(err => {
        document.getElementById("weather").textContent = err
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1487202212798-4f11d5c8f57d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzI3MDQ0MDc&ixlib=rb-1.2.1&q=85)`
    })


fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if(!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        // console.log(data)
        document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} />
        <span> ${data.name} </span>`
        document.getElementById("crypto").innerHTML += `
        <p> Current: &#127744; $${data.market_data.current_price.aud}</p>
        <p> High: &#11014; $${data.market_data.high_24h.aud}</p>
        <p> Low: &#11015; $${data.market_data.low_24h.aud}</p>
        `
    })
    .catch(err => document.getElementById("crypto-top").innerHTML = err)

const getCurrentTime = () => {
    const date = new Date();

document.getElementById("time").textContent = date.toLocaleTimeString("en-au", {timeStyle: "medium"})
}
    
setInterval(getCurrentTime, 1000);


navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if(!res.ok) {
                throw Error("Something went wrong")
            }
            return res.json()
        })
        .then(data => {
            // console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
            <img src=${iconUrl} /> 
            <p class="weather-city"> ${data.name} </p>
            <p class="weather-temp"> ${Math.round(data.main.temp)} </p>
            `
        })
});




