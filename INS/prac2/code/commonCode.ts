export const cleanPlaintext = (pt: string) => {
    return pt.split(" ").join("").toUpperCase();
};
