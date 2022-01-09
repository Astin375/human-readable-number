module.exports = function toReadable (number) {
    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decimals = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
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
        case 3:
            if (number % 100 === 0){
                return digits[number / 100] + ' hundred';
            } else if(number % 10 === 0){
                return digits[Math.floor(number / 100)] + ' hundred ' + decimals[(number / 10) % 10];
            } else if(number % 100 >= 11 && number % 100 <= 19){
                return digits[Math.floor(number / 100)] + ' hundred ' + teens[number % 10];
            } else if(number % 100 >= 1 && number % 100 <= 9){
                return digits[Math.floor(number / 100)] + ' hundred ' + digits[number % 10];
            } else {
                return digits[Math.floor(number / 100)] + ' hundred ' + decimals[(Math.floor(number / 10) % 10)] + ' ' + digits[number % 10];
            }
        default:
            return 'Error';

    }
}
