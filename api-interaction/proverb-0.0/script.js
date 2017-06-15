function getProverb() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET","https://eda-te-reo.herokuapp.com/api/proverbs", false);

  xhr.responseType = "application/json";

  xhr.onload = function() {
  var res = JSON.parse(xhr.response);
  document.getElementById("maori-proverb").innerHTML = res.source;
  document.getElementById("english-translation").innerHTML = res.translation;
}

  xhr.send();
}
