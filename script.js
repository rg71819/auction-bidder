function openSection(evt, sectionName) {
  var i, tabcontent, tablinks;
  var y = document.getElementById("auctionButton");
   y.style.display = "none";
    var z = document.getElementById("launchAuction");
   z.style.display = "none";
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active";
}
function openSection1(evt, sectionName) {
  var i, tabcontent, tablinks;
    var y = document.getElementById("auctionButton");
   y.style.display = "block";
  var z = document.getElementById("launchAuction");
   z.style.display = "none";
   var a = document.getElementById("BrowseAvailableAuctions");
   a.style.display = "none";
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active";
}

