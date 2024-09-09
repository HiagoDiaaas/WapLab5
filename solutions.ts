//Exercise 01: Meditation Countdown

// Class for Meditation countdown
class Meditation {
    // Constructor to initialize the countdown start value
    constructor(private count: number) {}

    // Start function to initiate the countdown
    start() {
        const interval = setInterval(() => {
            if (this.count > 0) {
                console.log(this.count);
                this.count--; // Decrease the count
            } else {
                console.log("Jay Guru Dev");
                clearInterval(interval); // Clear the interval once countdown ends
            }
        }, 1000); // 1-second delay between each log
    }
}

// Example of how the class is used
const morning_meditation = new Meditation(5); // Countdown from 5
morning_meditation.start(); // Start the countdown
console.log("Start meditation"); // Log start message

/*
Expected Output:
Start meditation
5
4
3
2
1
Jay Guru Dev
*/



//Exercise 02: Asynchronous Prime Check
// Function to check if a number is prime asynchronously
const isPrime = (n: number): Promise<{ prime: boolean }> => {
    return new Promise((resolve, reject) => {
        // Asynchronous check for prime number
        setTimeout(() => {
            if (n < 2) {
                reject({ prime: false });
                return;
            }
            for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
                if (n % i === 0) {
                    reject({ prime: false });
                    return;
                }
            }
            resolve({ prime: true });
        }, 0); // Run asynchronously
    });
};

// Testing the isPrime function using .then/.catch
console.log("start");
isPrime(7)
    .then(console.log) // { prime: true }
    .catch(console.error); // No error for prime numbers
console.log("end");

// Modifying the test to use async/await instead of .then/.catch
const checkPrime = async (n: number) => {
    console.log("start");
    try {
        const result = await isPrime(n); // Await the result of isPrime
        console.log(result); // Log the result if it's a prime
    } catch (error) {
        console.error(error); // Log error if it's not a prime
    }
    console.log("end");
};

// Example usage
checkPrime(7); // { prime: true }

/*
Expected Output:
start
end
{ prime: true }
start
end
{ prime: true }
*/
