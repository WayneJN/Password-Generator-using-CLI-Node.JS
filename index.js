// Extract command-line arguments
const args = process.argv.slice(2);

// Set default password options
let length = 8;
let includeUppercase = false;
let includeNumbers = false;
let includeSymbols = false;

// Function to display help message
const displayHelp = () => {
    console.log(`
    Welcome to Password Generator
    
    Usage: node index.js [options]
    Options:
    --help          Show help message
    --length <num>  Specify the length of the password
    --uppercase     Include uppercase letters
    --numbers       Include numbers
    --symbols       Include symbols

    If no option selected, password assumes default: 
        length = 8, all lowercase

    Multiple options may be used at once
    ex: 
        node index.js --uppercase --numbers 
            Generates password with both uppercase and numbers implemented
    `);
};

// Set-up switch for user to flag preferred features
args.forEach((arg, index) => {
    if (arg.startsWith('-') && !arg.startsWith('--')) {
        console.error(`Incorrect format: ${arg}. Use double dashes (--) for options.`);
        displayHelp();
        process.exit(1);
    }

    switch (arg) {
        case '--help':
            displayHelp();
            process.exit(0);
        case '--length':
            if (args[index + 1] && !isNaN(args[index + 1])) {
                length = parseInt(args[index + 1], 10);
            } else {
                console.error('Please provide a valid number for the length.');
                displayHelp();
                process.exit(1);
            }
            break;
        case '--uppercase':
            includeUppercase = true;
            break;
        case '--numbers':
            includeNumbers = true;
            break;
        case '--symbols':
            includeSymbols = true;
            break;
        default:
            if (arg.startsWith('--')) {
                console.error(`Unknown argument: ${arg}`);
                displayHelp();
                process.exit(1);
            }
    }
});

// Function to generate a password based on provided options
const generatePassword = (length = 8, options = {}) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let charset = lowercase;

    if (options.includeUppercase) charset += uppercase;
    if (options.includeNumbers) charset += numbers;
    if (options.includeSymbols) charset += symbols;

    return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
};

// Generate the password with the specified options
const password = generatePassword(length, {
    includeUppercase,
    includeNumbers,
    includeSymbols
});



// Display the generated password
console.log(`Generated password: ${password}`);
