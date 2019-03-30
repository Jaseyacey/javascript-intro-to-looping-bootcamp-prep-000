function forLoop(array){
        for ( i = 0; i < 25; i++){
            if(i === 1){
                array.push('I am 1 strange loop.');
            } else {
                array.push('I am ' + i + ' strange loops.');
            }
        } return array;
    }

    function whileLoop(num){
      while(num > 0){
        console.log(num);
        num--;
      }
      return 'done';
    }

    function doWhileLoop(array){
            var i = 0;

            function incrementVariable() {
                i++;
                return i;
            }
            do{
              console.log('I run once regardless.');
            } while (incrementVariable() < array.length);
          }
