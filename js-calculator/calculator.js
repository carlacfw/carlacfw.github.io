  var operand = 0;
  var operator = null;

  function num(value){
    var currentDisplayValue = Number($("#answer").text());
    if(!currentDisplayValue){
      $("#answer").text(value);
    } else {
      $("#answer").append(value);
    }
  }

  function sum() {
    operand = Number($("#answer").text());
    operator = function(a, b) {
      return a + b;
    }
    $("#answer").text(0);
  }

  function equal() {
    var currentDisplayValue = Number($("#answer").text());
    $("#answer").text(operator(operand, currentDisplayValue));
  }

  function sub() {
    operand = Number($("#answer").text());
    operator = function(a, b) {
      return a - b;
    }
    $("#answer").text(0);
  }

  function times() {
    operand = Number($("#answer").text());
    operator = function(a, b) {
      return a * b;
    }
    $("#answer").text(0);

  }

  function divide() {
    operand = Number($("#answer").text());
    operator = function(a, b) {
      return a / b;
    }
    $("#answer").text(0);

  }
  function dot() {
    var currentDisplayValue = Number($("#answer").text());
      $("#answer").text(currentDisplayValue + '.');
  }

  function allClear() {
    var currentDisplayValue = Number($("#answer").text(0));
  }

  function clearEntry() {
    var currentDisplayValue = $("#answer").text();
  currentDisplayValue = currentDisplayValue.substring(0, currentDisplayValue.length-1);
  $("#answer").text(currentDisplayValue);

  }
