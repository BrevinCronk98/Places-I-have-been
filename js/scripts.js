function EntryList()
{
    this.entries = [],
    this.currentId = 0
}

EntryList.prototype.addEntry = function(entry){
    entry.id = this.assignId();
    this.entries.push(entry);
}

EntryList.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
}

EntryList.prototype.findEntry = function(id) {
    for (var i=0; i< this.entries.length; i++){
        if(this.entries[i]){
            if(this.entries[i].id == id){
                return this.entries[i]
            }
        }
    };
    return false;
}

EntryList.prototype.deleteEntry = function(id) {
    for (var i=0; i< this.this.entries.length; i++){
        if(this.entries[i]){
            if(this.entries[i].id == id){
                delete this.entries[i];
                return true;
            } 
        }
    };
    return false;
}


function Places(locations, landmarks, time, notes) {
    this.locations = locations;
    this.landmarks = landmarks;
    this.time = time;
    this.notes = notes;
  }



  // UI --------
  var entryList = new EntryList();

   
  function displayEntryInfo(entryBookToDisplay) {
      var travelList = $("ul#list");
      var htmlForInfo = "";
      entryBookToDisplay.entries.forEach(function(entry) {
            htmlForInfo += "<li id=>" + entry.id + ": " + "<br>" + "Country: " + entry.locations +  ", " + "<br>" + "Landmarks: " + entry.landmarks + ", "+ "<br>" + "Date: " + entry.time + ", " + "<br>" + "Notes: " + entry.notes + "</li>";
      });
      travelList.html(htmlForInfo);
  }

  function attatchEntryListener () {
      $("#hide").on("click", function(){
          $("#list").toggle();
      });
    }


//   function delete



$(document).ready(function() {
    attatchEntryListener();
  $("form#place-info").submit(function(event){
    event.preventDefault();
    var locationsInput = $("input#country");
    var landmarkInput = $("input#landmark");
    var timeInput = $("input#date");
    var notesInput = $("input#notes");
    var newPlaces = new Places (locationsInput.val(), landmarkInput.val(), timeInput.val(), notesInput.val());


    //clear all fields after pressing Submit
    $("input#country").val("");
    $("input#landmark").val("");
    $("input#date").val("");
    $("input#notes").val("");
   
    entryList.addEntry(newPlaces);
    displayEntryInfo(entryList);

    $(entryList).click(function(event){
        $(newPlaces).remove();
    });
  });
});

