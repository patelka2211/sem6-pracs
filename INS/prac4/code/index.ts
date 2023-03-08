import readline from "readline";
import { decrypt, encrypt, generate_subkeys, key_size } from "./SDES";

let plaintext: string, key: number;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askToContinue() {
    rl.question("\nYou want to continue? (Y/N): ", (answer: string) => {
        if (answer === "y" || answer === "Y") {
            askPlaintext();
        } else if (answer === "n" || answer === "N") {
            console.clear();
            rl.close();
        } else {
            console.log("\nPlease enter Y or N only.");
            askToContinue();
        }
    });
}

function askKey() {
    rl.question("\nEnter key: ", (answer: string) => {
        ((max_range) => {
            try {
                key = Math.floor(Number(answer));

                if (key < 0 || key > max_range || isNaN(key)) {
                    console.clear();
                    console.log(`\nKey must be from ${0} to ${max_range}`);
                    askKey();
                    return;
                }

                console.clear();

                // console.log(`Lenght of text: ${plaintext.length}`);

                // console.log("Encrypting...");

                let ciphertext_hex: string[] = [],
                    subkeys = generate_subkeys(key),
                    ciphertext: string | string[] = encrypt(plaintext, subkeys);

                ciphertext.forEach((item) => {
                    ciphertext_hex.push(parseInt(item, 2).toString(16));
                });

                console.log(`\nCiphertext: ${ciphertext_hex.join(" ")}`);

                ciphertext = ciphertext.join("");
                console.log(`\n${ciphertext}`);

                // console.log("Decrypting...");

                subkeys.reverse();

                plaintext = decrypt(ciphertext, subkeys).join("");

                console.log(`\nDecrypted plaintext: ${plaintext}`);

                askToContinue();
            } catch (error) {
                console.clear();
                console.log(`\nKey must be from ${0} to ${max_range}`);
                askKey();
            }
        })(2 ** key_size - 1);
    });
}

function askPlaintext() {
    console.clear();
    rl.question("\nEnter plaintext: ", (answer: string) => {
        plaintext = answer;
        askKey();
    });
}

askPlaintext();

export {};
