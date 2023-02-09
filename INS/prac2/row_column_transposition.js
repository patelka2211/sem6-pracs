"use strict";
const cleanPlaintext = (pt) => {
    return pt.split(" ").join("").toUpperCase();
};
const pt = cleanPlaintext("Information and Network Security"), encryptionKey = 45321;
const encryption = (pt, encryptionKey) => {
    let key = encryptionKey.toString(), cols = key.length, rows = Math.ceil(pt.length / cols), extras = rows * cols - pt.length - 1, matrix = [];
    for (let outerIndex = 0; outerIndex < rows; outerIndex++) {
        matrix.push([]);
        for (let innerIndex = 0; innerIndex < cols; innerIndex++) {
            ((input) => {
                if (input === undefined) {
                    matrix[outerIndex].push(String.fromCharCode(90 - extras));
                    extras--;
                }
                else
                    matrix[outerIndex].push(input);
            })(pt[cols * outerIndex + innerIndex]);
        }
    }
    let outputList = {}, couter = 0;
    [...key].forEach((index) => {
        let col = Number(index) - 1;
        outputList[couter] = "";
        for (let row = 0; row < rows; row++) {
            outputList[couter] += matrix[row][col];
        }
        couter++;
    });
    let output = "";
    Object.keys(outputList).forEach((key) => {
        output += outputList[key];
    });
    return output;
};
console.log(encryption(pt, encryptionKey));
