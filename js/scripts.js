function Places(locations, landmarks, time, notes) {
    this.locations = locations;
    this.landmarks = landmarks;
    this.time = time;
    this.notes= notes;
}
// function showEntries(place) {
//     var display = $("#test");
//     var entryDetails = "";
//     entryDetails += `<h2> ${place.locations}</h2>`;
//     entryDetails += `<p> ${place.landmarks}</p>`;
//     entryDetaails += `<p> ${place.time}</p>`;
//     entryDetails += `<p> ${ place.notes}</p>`;
//     display.html(entryDetails)
// }

$(document).ready(function() {
  $("form#place-info").submit(function(event){
    event.preventDefault();
    var locationsInput = $("#country")
    var landmarkInput = $("#landmark")
    var timeInput = $("#date")
    var notesInput = $("#notes")
    //var inputArr = [locationsInput, landmarkInput, timeInput, notesInput];
    //console.log(inputArr);
    var newPlaces = new Places (locationsInput.val(), landmarkInput.val(), timeInput.val(), notesInput.val());
    console.log(newPlaces);
    // showEntries();
    
    $("#display-locations").text(newPlaces.locations);
    $("#display-landmark").text(newPlaces.landmarks);
    $("#display-date").text(newPlaces.time);
    $("#display-notes").text(newPlaces.notes);
    
    //alert(newPlaces)
  });
});

