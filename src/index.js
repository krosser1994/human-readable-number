module.exports = function toReadable (number) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const beforeTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    const NumsArray = (number) => number.toString().split('').map(el => parseInt(el, 10));

    if (number < 10) return nums[number];
    else if (number < 20) return beforeTwenty[number % 10];
    else if (number < 100) {
      const arrOfNumber = NumsArray(number);//56
      return number % 10 ? `${tens[arrOfNumber[0] - 2]} ${nums[arrOfNumber[1]]}` : tens[arrOfNumber[0] - 2];
    }

    else if (number < 1000) {
      const arrOfNumber = NumsArray(number);//673
      const tens = parseInt(arrOfNumber.slice(1).join(''));//73
  
      return number % 100 ? `${nums[arrOfNumber[0]]} hundred ${toReadable(tens)}` : `${nums[arrOfNumber[0]]} hundred`;
    }
}
