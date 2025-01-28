class StringCalculator {
    add(numbers) {
        if (!numbers) {
            return 0;
        }

        let delimiter = ',';
        let numbersString = numbers;

        // Replace newlines with delimiter
        numbersString = numbersString.replace(/\n/g, delimiter);

        // Split and convert to numbers
        const nums = numbersString.split(delimiter).map(num => parseInt(num));

        // Sum all numbers
        return nums.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;