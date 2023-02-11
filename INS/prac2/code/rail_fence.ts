import { cleanPlaintext } from "./commonCode";

export const encryption = (pt: string, depth: number) => {
    pt = cleanPlaintext(pt);

    if (pt.length === 1) return pt;

    if (depth === 1 || !(pt.length / depth > 1)) {
        throw Error(
            `Depth must be in range of [2, ${pt.length - 1}] in this case.`
        );
    }

    let row = 1,
        rowStep = 1;

    let matrix: { [_: string]: string } = {};

    for (let index = 0; index < pt.length; index++) {
        if (matrix[row] === undefined) matrix[row] = "";

        matrix[row] += pt[index];

        if (row === depth) rowStep = -1;
        else if (row === 1) rowStep = 1;

        row += rowStep;
    }

    let encrypted = "";

    Object.keys(matrix).forEach((element) => {
        encrypted += matrix[element];
    });

    return encrypted;
};

export const decryption = (ct: string, depth: number) => {
    if (depth === 1 || !(ct.length / depth > 1)) {
        throw Error(
            `Depth must be in range of [2, ${ct.length - 1}] in this case.`
        );
    }

    let couter = 0,
        matrix: { [_: string]: string } = {};

    for (let depths = 1; depths <= depth; depths++) {
        let row = 1,
            rowStep = 1;

        matrix[depths] = "";

        for (let index = 0; index < ct.length; index++) {
            if (row === depths) {
                matrix[depths] += ct[couter];
                couter++;
            }

            if (row === depth) rowStep = -1;
            else if (row === 1) rowStep = 1;

            row += rowStep;
        }
    }

    let decrypted = "",
        row = 1,
        rowStep = 1;

    for (let index = 0; index < ct.length; index++) {
        decrypted += matrix[row][0];
        matrix[row] = matrix[row].substring(1);

        if (row === depth) rowStep = -1;
        else if (row === 1) rowStep = 1;

        row += rowStep;
    }

    return decrypted;
};
