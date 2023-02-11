import { encryption as rf_enc, decryption as rf_dec } from "./rail_fence";
import {
    encryption as rect_enc,
    decryption as rect_dec,
} from "./rectangular_transposition";

const transposition_ciphers = {
    rectangular: {
        encryption: rect_enc,
        decryption: rect_dec,
    },
    rail_fence: {
        encryption: rf_enc,
        decryption: rf_dec,
    },
};

const pt = "Information and Network Security",
    rail_fence_depth = 3,
    rectangular_transposition_key = 32541;

const renctangular_encrypted_text =
        transposition_ciphers.rectangular.encryption(
            pt,
            rectangular_transposition_key
        ),
    rail_fence_encrypted_text = transposition_ciphers.rail_fence.encryption(
        pt,
        rail_fence_depth
    ),
    test: { [_: string]: {} } = {};

test[`Rectangular transposition (key=${rectangular_transposition_key})`] = {
    Encrypted: renctangular_encrypted_text,
    Decrypted: transposition_ciphers.rectangular.decryption(
        renctangular_encrypted_text,
        rectangular_transposition_key
    ),
};
test[`Rail fence (depth=${rail_fence_depth})`] = {
    Encrypted: rail_fence_encrypted_text,
    Decrypted: transposition_ciphers.rail_fence.decryption(
        rail_fence_encrypted_text,
        rail_fence_depth
    ),
};

console.log(`Plain text: "${pt}"`);
console.table(test);
