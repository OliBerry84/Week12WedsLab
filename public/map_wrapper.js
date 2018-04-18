const MapWrapper = function (container, center, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });

  this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords, contentString, icon) {
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords,
    icon: icon,
    animation: google.maps.Animation.DROP
  });
}
