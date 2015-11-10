function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready( function() {
  var header = getParameterByName('h1');
  var subheader = getParameterByName('h2');
  var description = getParameterByName('p');
  var callback = getParameterByName('return')
  $("#header").html(header);
  $("#subheader").html(subheader);
  $("#description").html(description);
  $("#callback").attr("href", callback + ":");
});