import { circular_left_shift, get_binary } from "./operations";
let plaintext_block_size = 8, key_size = 10, no_of_rounds = 2, subkey_initial_permutation = [3, 5, 2, 7, 4, 10, 1, 9, 8, 6], subkey_compression_permutation = [6, 3, 7, 4, 8, 5, 10, 9], plaintext_initial_permutation = [2, 6, 3, 1, 4, 8, 5, 7], plaintext_expansion_permutation = [4, 1, 2, 3, 2, 3, 4, 1], key_shift_values = [1, 2], substitution_box_0 = [
    [1, 0, 3, 2],
    [3, 2, 1, 0],
    [0, 2, 1, 3],
    [3, 1, 3, 2],
], substitution_box_1 = [
    [0, 1, 2, 3],
    [2, 0, 1, 3],
    [3, 0, 1, 0],
    [2, 1, 0, 3],
], right_half_permutation_box = [2, 4, 3, 1], inverse_initial_permutation = [4, 1, 3, 5, 7, 2, 8, 6];
function get_permuted_value(data, permutation) {
    let permuted_value = [];
    permutation.forEach((item) => {
        permuted_value.push(data[item - 1]);
    });
    return permuted_value.join("");
}
function generate_subkeys(key) {
    key = get_binary(key, key_size);
    let permuted_key = get_permuted_value(key, subkey_initial_permutation), all_subkeys = [], left_half, right_half;
    for (let index = 0; index < no_of_rounds; index++) {
        left_half = permuted_key.substring(0, Number((key_size / 2).toFixed(0)));
        right_half = permuted_key.substring(Number((key_size / 2).toFixed(0)));
        [left_half, right_half].forEach((half) => {
            half = get_binary(circular_left_shift(parseInt(half, 2), key_shift_values[index], Number((key_size / 2).toFixed(0))), Number((key_size / 2).toFixed(0)));
        });
        let merged_halfs = left_half + right_half;
        all_subkeys.push(get_permuted_value(merged_halfs, subkey_compression_permutation));
        permuted_key = merged_halfs;
    }
    return all_subkeys;
}
function __perform_substitution(data, sub_box) {
    let row_number = parseInt(data[0] + data[3], 2), column_number = parseInt(data[1] + data[2], 2);
    return get_binary(sub_box[row_number][column_number], 2);
}
function encrypt(plaintext, keys) {
    let permuted_plaintext = [];
    plaintext.split("").forEach((character) => {
        let binary_plaintext = get_binary(character.charCodeAt(0), plaintext_block_size);
        permuted_plaintext.push(get_permuted_value(binary_plaintext, plaintext_initial_permutation));
    });
    keys.forEach((key) => { });
}
function decrypt() { }
