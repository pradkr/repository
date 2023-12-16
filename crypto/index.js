const readline = require("readline");  //builtin module
const crypto   = require("crypto");    //builtin module

//const ENCRYPTION_ALGORITHM = "aes-256-ctr";
//const ENCRYPTION_PASSWORD  = "secretkey";
const key = crypto.randomBytes(32);
const iv  = crypto.randomBytes(16);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, 
});

console.log("Server started, Waiting for messages to secure...");

rl.on("line", (input) => {
    const encryptedMessage = encryptMessage(input);
    console.log(`Encrypted message is : ${encryptedMessage}`);

    const decryptedMessage = decryptMessage(encryptedMessage);
    console.log(`Dncrypted message is : ${decryptedMessage}`);
});

function encryptMessage(message){
    //const cipher  = crypto.createCipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_PASSWORD);
    const cipher  = crypto.createCipheriv("aes-256-ctr", key, iv);
    let encrypted = cipher.update(message, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}

function decryptMessage(encryptedMessage) {
    //const decipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_PASSWORD);
    const decipher  = crypto.createCipheriv("aes-256-ctr", key, iv);    
    let decrypted = decipher.update(encryptedMessage, "hex", "utf8");
    decrypted += decipher.final("utf8")
    return decrypted;
}
