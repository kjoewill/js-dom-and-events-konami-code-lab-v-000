const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
console.log('Hey!');

let index = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
    console.log(e.which);

    key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      console.log('valid code input', key);
      index++
      if (index === code.length) {
        alert('Good job, you did it!');
        index = 0;
      }
    } else {
      console.log('Not part of the code:', key);
      index = 0;
    }

  });

}

//Temp for testing
//init();
