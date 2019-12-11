//add more rows
for (var i = 9; i < 18; i++){


//add row and col to container
var row = $("<div class='row'>");
// var col1 = $("<div><p class='hour'></p>");
var col1 = $("<div class='col-sm-2'><p class='hour'>" + (i) + "00" + "</p>");

// var col2 = $("<div><textarea class='description'></textarea>");
var col2 = $("<div class='col-sm-8'><textarea class='description'></textarea>");

// var col3 = $("<div><button class='saveBtn'></button>");
var col3 = $("<div class='col-sm-2'><button class='saveBtn'></button>");


row.append(col1);
row.append(col2);
row.append(col3);

$(".container").append(row);

}

//use moment.js to set time
console.log(moment().format('MMMM Do YYYY, hh:mm:ss'));
$("#currentDay").append(moment().format('MMMM Do YYYY, hh:mm:ss')); 


//get local storage
function getLocalStorage(key) {

}

//save button to local storage
var saveBtn = $(".saveBtn");
saveBtn.on("click", function(){

})



