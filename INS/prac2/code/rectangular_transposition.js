import { cleanPlaintext } from "./commonCode";
export const encryption = (pt, encryptionKey) => {
    pt = cleanPlaintext(pt);
    let key = encryptionKey.toString(), cols = key.length, rows = Math.ceil(pt.length / cols), extras = rows * cols - pt.length - 1, matrix = {}, encrypted = "";
    if (cols <= 1)
        throw Error("Key must be at least 2.");
    for (let index = 0; index < rows * cols; index++) {
        if (matrix[key[index % cols]] === undefined) {
            matrix[key[index % cols]] = "";
        }
        if (pt[index] === undefined) {
            matrix[key[index % cols]] += String.fromCharCode(90 - extras);
            extras--;
        }
        else {
            matrix[key[index % cols]] += pt[index];
        }
    }
    Object.keys(matrix).forEach((element) => {
        encrypted += matrix[element];
    });
    return encrypted;
};
export const decryption = (ct, encryptionKey) => {
    let key = encryptionKey.toString(), cols = key.length, rows = ct.length / cols, decrypted = "";
    if (cols <= 1)
        throw Error("Key must be at least 2.");
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            decrypted += ct[(Number(key[col]) - 1) * rows + row];
        }
    }
    return decrypted;
};
