$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var input = $("#input1").val();
    
    input = input.toLowerCase();
    var vowels = ["a","e","i","o","u"];
    var index = 0;
    var num = /^[0-9]+$/;
    var result = [];
    var letter = input.split("");
    // var splitWord = inputWord.splice(2)

    if ((input.match(num))){
      $(".output").text(input);
    }

    else if (input.length === 1 && vowels.includes(input[0])) {
      $(".output").text(input + "ay");
    }
    else if (vowels.includes(input[0])) {
      $(".output").text(input + "way");
    }
    else {

      for (var i = 0; i < input.length; i++) {
        if (vowels.includes(letter[i]) === false ){ 
          // alert(letter[i]);
          var con = letter.indexOf(letter[i]) //con = 2
          alert(con)
          con = letter.shift();
          letter.push(con)
          result = letter.join('');
          alert(letter)
        }
        else {break}
        $(".output").text(result.slice(0,con) + letter[i] +"ay");
      }                                                
      }
  });
});