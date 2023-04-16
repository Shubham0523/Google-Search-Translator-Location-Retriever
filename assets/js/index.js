const button = document.querySelector('.button')
button.addEventListener('click',getLocation)

function getLocation(){
const success = (position => {
  console.log(position)
  const lat = position.coords.latitude
  const long = position.coords.longitude
  const api = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`

fetch(api)
.then(res => res.json())
.then(data => {
    console.log(data)
    let store = `${data.locality}, ${data.principalSubdivision} ${data.postcode}`
    console.log(store)
    button.innerHTML = store
  })
})

const error = ()=>{
  alert('Error')
}

navigator.geolocation.getCurrentPosition(success,error)
}