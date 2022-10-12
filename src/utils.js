
const runLengthEncode = (string) => {

    let result = '';
    let c = 1;
  
    for (let i = 0; i < string.length; i++) {
      let j = i + 1;
      while (string[i] === string[j]) {
        c++;
        if (c === 9) {
          j++;
          break;
        } else {
          j++;
        }
      }
      result = result.concat(`${c}${string[i]}`);
      c = 1;
      i = j - 1;
    }
    return result;
  }


function square(array){         

    return array.map( value =>Math.pow(value,2)).sort((a, b) => a - b);

}; 





module.exports = { runLengthEncode, square }