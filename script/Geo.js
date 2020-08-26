class Geo {
 
  getGeo() {
    navigator.geolocation.getCurrentPosition(position => {
    this.findPosition(position.coords.latitude, position.coords.longitude);
  }, error => {
    console.error(error)
  }, {
    timeout: 1000,
    maximumAge: 10000,
    enableHighAccuracy: true
  })
  }
  
  findPosition(latitude, longitude) {
    console.log(latitude, longitude);
  }
  
}
export {Geo}