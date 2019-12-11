//add row and col to container
var row = $("<div class='row'>");
// var col1 = $("<div><p class='hour'></p>");
var col1 = $("<div class='col-sm-2'><p class='hour'></p>");

// var col2 = $("<div><textarea class='description'></textarea>");
var col2 = $("<div class='col-sm-8'><textarea class='description'></textarea>");

// var col3 = $("<div><button class='saveBtn'></button>");
var col3 = $("<div class='col-sm-2'><button class='saveBtn'></button>");


row.append(col1);
row.append(col2);
row.append(col3);

$(".container").append(row);


console.log(moment().format('MMMM Do YYYY, hh:mm:ss'));
$("#currentDay").append(moment().format('MMMM Do YYYY, hh:mm:ss'));

//add more rows
//get local storage
//use moment.js to set time
//


