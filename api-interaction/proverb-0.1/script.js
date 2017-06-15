function getProverb(sourceId, translationId) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET","https://eda-te-reo.herokuapp.com/api/proverbs", false);
                              //false == synchronous, true == asynchronous
  xhr.onload = function() {
    var responseFromServer = JSON.parse(xhr.response);
    document.getElementById(sourceId).innerHTML = responseFromServer.source;
    document.getElementById(translationId).innerHTML = responseFromServer.translation;
  }

  xhr.send();
}


//parametrised version // waffle 7.0
