class StringCalculator {
    count = 0;
    add(numbers) {
        if (!numbers) {
            return 0;
        }

        let delimiter = ',';
        let numbersString = numbers;
        
        // Handle custom delimiter
        if (numbers.startsWith('//')) {
            delimiter = numbers[2];
            numbersString = numbers.substring(numbers.indexOf('\n') + 1);
        }

        // Replace newlines with delimiter
        numbersString = numbersString.replace(/\n/g, delimiter);

        // Split and convert to numbers
        let nums = numbersString.split(delimiter).map(num => parseInt(num));

        
        // Check for negative numbers
        const negatives = nums.filter(num => num < 0);

        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
        }
        nums = nums.filter(num => num <= 1000)

        this.count++;
        // Sum all numbers
        return nums.reduce((sum, num) => sum + num, 0);
    }
    getCalledCount() {      
        return this.count;
    }
}

module.exports = StringCalculator;