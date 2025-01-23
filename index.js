// Extract command-line arguments
const args = process.argv.slice(2);
// Generate the password with the specified options
const password = generatePassword(length, {
    includeUppercase,
    includeNumbers,
    includeSymbols
});

// Set default password
let length = 8;
let includeUppercase = false;
let includeNumbers = false;
let includeSymbols = false;

// Set-up switch for user to flag preferred features
args.forEach((arg, index) => {
    switch (arg) {
        case '--help': //display help menu explaining features
            displayHelp();
            process.exit(0);
        case '--length':
            length = parseInt(args[index + 1], 10); // Set password length
            break;
        case '--uppercase':
            includeUppercase = true; // Include uppercase letters
            break;
        case '--numbers':
            includeNumbers = true; // Include numbers
            break;
        case '--symbols':
            includeSymbols = true; // Include symbols
            break;
        default:
            console.error(`Unknown argument: ${arg}`);
            displayHelp();
            process.exit(1); //If nothing is selected then choose default
    }
});

// Function to generate a password based on provided options
function generatePassword(length = 8, options = {}) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let charset = lowercase;

    // Append character sets based on options
    if (options.includeUppercase) charset += uppercase;
    if (options.includeNumbers) charset += numbers;
    if (options.includeSymbols) charset += symbols;

    let password = ''; //initiate empty password 
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Display the generated password
console.log(`Generated password: ${password}`);