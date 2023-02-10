function cleanPlaintext(pt: string) {
    return pt.split(" ").join("").toUpperCase();
}

function encryption(pt: string, encryptionKey: number) {
    pt = cleanPlaintext(pt);
    let key = encryptionKey.toString(),
        cols = key.length,
        rows = Math.ceil(pt.length / cols),
        extras = rows * cols - pt.length - 1,
        matrix: { [_: string]: string } = {},
        encrypted = "";

    if (cols <= 1) throw Error("Key must be of at least 2 digit.");

    for (let index = 0; index < rows * cols; index++) {
        if (matrix[key[index % cols]] === undefined) {
            matrix[key[index % cols]] = "";
        }
        if (pt[index] === undefined) {
            matrix[key[index % cols]] += String.fromCharCode(90 - extras);
            extras--;
        } else {
            matrix[key[index % cols]] += pt[index];
        }
    }

    Object.keys(matrix).forEach((element) => {
        encrypted += matrix[element];
    });

    return encrypted;
}

function decrypt(ct: string, encryptionKey: number) {
    let key = encryptionKey.toString(),
        cols = key.length,
        rows = ct.length / cols,
        decrypted = "";

    if (cols <= 1) throw Error("Key must be of at least 2 digit.");

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            decrypted += ct[(Number(key[col]) - 1) * rows + row];
        }
    }

    return decrypted;
}

const pt = "Information and Network Security",
    encryptionKey: number = 35142;

console.log(encryption(pt, encryptionKey));
console.log(decrypt(encryption(pt, encryptionKey), encryptionKey));
