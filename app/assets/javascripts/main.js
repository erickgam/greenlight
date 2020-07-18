// BigBlueButton open source conferencing system - http://www.bigbluebutton.org/.
//
// Copyright (c) 2018 BigBlueButton Inc. and by respective authors (see below).
//
// This program is free software; you can redistribute it and/or modify it under the
// terms of the GNU Lesser General Public License as published by the Free Software
// Foundation; either version 3.0 of the License, or (at your option) any later
// version.
//
// BigBlueButton is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License along
// with BigBlueButton; if not, see <http://www.gnu.org/licenses/>.

$(document).on('turbolinks:load', function(){
  $.rails.refreshCSRFTokens();
  function goready() {
    if(window.location.pathname == "/b/" || window.location.pathname == "/b"){
      div_position('div1',6500);
      div_position('div2',7200);
      div_position('div3',4200);
      div_position('div4',5100);
      div_position('div5',6000);
      div_position('div6',7400);
      div_position('div7',8000);
      div_position('div8',9200);
      //intervals for moving divs:
let interval1 = setInterval(function () {
  div_position("div1", 5500);
}, 8500);
let interval2 = setInterval(function () {
  div_position("div2", 5200);
}, 4200);
let interval3 = setInterval(function () {
  div_position("div3", 4200);
}, 8200);
let interval4 = setInterval(function () {
  div_position("div4", 5100);
}, 10100);
let interval5 = setInterval(function () {
  div_position("div5", 6000);
}, 5000);
let interval6 = setInterval(function () {
  div_position("div6", 6400);
}, 7400);
let interval7 = setInterval(function () {
  div_position("div7", 6000);
}, 9000);
let interval8 = setInterval(function () {
  div_position("div8", 6200);
}, 15200);


    }

  }
    //to move the div to specific location:
function div_position(id, seconds) {
if(window.location.pathname == "/b/" || window.location.pathname == "/b"){  let myDiv = document.getElementById(id);

  let window_width = window.innerWidth-100;
  let window_height = window.innerHeight-100;

  let x = window_width * Math.random();
  myDiv.style.left = x + "px";

//  let y = window_height * (Math.random() * (0.6 - 0.3) + 0.3);

    let y = Math.random() * (330 - 180) + 180;

    myDiv.style.top = y + "px";

  myDiv.style.transition =
    "top " + seconds + "ms ease,left " + seconds + "ms ease";}
}
goready()

})

document.addEventListener("turbolinks:before-cache", function() {
  $(".alert").remove()
})

// Gets the localized string
function getLocalizedString(key) {
  var keyArr = key.split(".")
  var translated = I18n

  // Search current language for the key
  try {
    keyArr.forEach(function(k) {
      translated = translated[k]
    })
  } catch (e) {
    // Key is missing in selected language so default to english
    translated = undefined;
  }


  // If key is not found, search the fallback language for the key
  if (translated === null || translated === undefined) { 
    translated = I18nFallback

    keyArr.forEach(function(k) {
      translated = translated[k]
    })
  }

  return translated
}