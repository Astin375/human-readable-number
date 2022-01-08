module.exports = function toReadable (number) {
    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decimals = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    switch (number.toString().length){
        case 1:
            return digits[number];
        case 2:
            if(number < 20){
                return teens[number - 10];
            } else if(number % 10 === 0){
                return decimals[number / 10];
            } else{
                return decimals[Math.floor(number / 10)] + ' ' + digits[number % 10];
            }
        default:
            return 'Error';

    }
}
