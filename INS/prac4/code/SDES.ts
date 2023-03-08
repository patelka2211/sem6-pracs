import { circular_left_shift, get_binary, xor_operation } from "./operations";

let plaintext_block_size = 8,
    key_size = 10,
    no_of_rounds = 2,
    subkey_initial_permutation = [3, 5, 2, 7, 4, 10, 1, 9, 8, 6],
    subkey_compression_permutation = [6, 3, 7, 4, 8, 5, 10, 9],
    plaintext_initial_permutation = [2, 6, 3, 1, 4, 8, 5, 7],
    plaintext_expansion_permutation = [4, 1, 2, 3, 2, 3, 4, 1],
    key_shift_values = [1, 2],
    substitution_box_0 = [
        [1, 0, 3, 2],
        [3, 2, 1, 0],
        [0, 2, 1, 3],
        [3, 1, 3, 2],
    ],
    substitution_box_1 = [
        [0, 1, 2, 3],
        [2, 0, 1, 3],
        [3, 0, 1, 0],
        [2, 1, 0, 3],
    ],
    right_half_permutation_box = [2, 4, 3, 1],
    inverse_initial_permutation = [4, 1, 3, 5, 7, 2, 8, 6];

function get_permuted_value(data: string, permutation: number[]) {
    let permuted_value: string[] = [];

    permutation.forEach((item) => {
        permuted_value.push(data[item - 1]);
    });

    return permuted_value.join("");
}

function generate_subkeys(key: number | string) {
    key = get_binary(key as number, key_size);
    let permuted_key = get_permuted_value(key, subkey_initial_permutation),
        all_subkeys: string[] = [],
        left_half: string,
        right_half: string;

    for (let index = 0; index < no_of_rounds; index++) {
        left_half = permuted_key.substring(0, Math.floor(key_size / 2));
        right_half = permuted_key.substring(Math.floor(key_size / 2));

        [left_half, right_half].forEach((half) => {
            half = get_binary(
                circular_left_shift(
                    parseInt(half, 2),
                    key_shift_values[index],
                    Math.floor(key_size / 2)
                ),
                Math.floor(key_size / 2)
            );
        });

        let merged_halfs = left_half + right_half;

        all_subkeys.push(
            get_permuted_value(merged_halfs, subkey_compression_permutation)
        );

        permuted_key = merged_halfs;
    }

    return all_subkeys;
}

function perform_substitution(data: string, sub_box: number[][]) {
    let row_number = parseInt(data[0] + data[3], 2),
        column_number = parseInt(data[1] + data[2], 2);
    return get_binary(sub_box[row_number][column_number], 2);
}

function encrypt(plaintext: string, keys: string[]) {
    let permuted_plaintext: string[] = [],
        ciphertext: string[] = [],
        k = 0,
        i: number;
    plaintext.split("").forEach((character) => {
        let binary_plaintext = get_binary(
            character.charCodeAt(0),
            plaintext_block_size
        );
        permuted_plaintext.push(
            get_permuted_value(binary_plaintext, plaintext_initial_permutation)
        );
    });

    keys.forEach((key) => {
        i = 0;

        permuted_plaintext.forEach((block) => {
            let left_half = block.substring(0, 4),
                right_half = block.substring(4),
                new_left_half = right_half,
                new_right_half: string,
                temp: number;

            right_half = get_permuted_value(
                right_half,
                plaintext_expansion_permutation
            );

            temp = xor_operation(parseInt(right_half, 2), parseInt(key, 2));

            right_half = get_binary(temp, block.length);

            right_half =
                perform_substitution(
                    right_half.substring(0, 4),
                    substitution_box_0
                ) +
                perform_substitution(
                    right_half.substring(4),
                    substitution_box_1
                );

            right_half = get_permuted_value(
                right_half,
                right_half_permutation_box
            );

            temp = xor_operation(
                parseInt(right_half, 2),
                parseInt(left_half, 2)
            );

            new_right_half = get_binary(temp, Math.floor(block.length / 2));

            if (k === keys.length - 1)
                permuted_plaintext[i] = new_right_half + new_left_half;
            else permuted_plaintext[i] = new_left_half + new_right_half;
            i++;
        });
        k++;
    });

    permuted_plaintext.forEach((block) => {
        ciphertext.push(get_permuted_value(block, inverse_initial_permutation));
    });

    return ciphertext;
}

function decrypt(ciphertext: string, keys: string[]) {
    let ciphertext_blocks: string[] = [],
        i = 0,
        k = 0,
        plaintext: string[] = [];
    while (i < ciphertext.length) {
        ciphertext_blocks.push(
            get_permuted_value(
                ciphertext.substring(i, i + plaintext_block_size),
                plaintext_initial_permutation
            )
        );
        i += 8;
    }

    keys.forEach((key) => {
        i = 0;
        ciphertext_blocks.forEach((block) => {
            let left_half = block.substring(0, 4),
                right_half = block.substring(4),
                new_left_half = right_half,
                new_right_half: string,
                temp: number;

            right_half = get_permuted_value(
                right_half,
                plaintext_expansion_permutation
            );

            temp = xor_operation(parseInt(right_half, 2), parseInt(key, 2));

            right_half = get_binary(temp, block.length);

            right_half =
                perform_substitution(
                    right_half.substring(0, 4),
                    substitution_box_0
                ) +
                perform_substitution(
                    right_half.substring(4),
                    substitution_box_1
                );

            right_half = get_permuted_value(
                right_half,
                right_half_permutation_box
            );

            temp = xor_operation(
                parseInt(right_half, 2),
                parseInt(left_half, 2)
            );

            new_right_half = get_binary(temp, Math.floor(block.length / 2));

            if (k === keys.length - 1)
                ciphertext_blocks[i] = new_right_half + new_left_half;
            else ciphertext_blocks[i] = new_left_half + new_right_half;

            i++;
        });
        k++;
    });

    ciphertext_blocks.forEach((block) => {
        plaintext.push(
            String.fromCharCode(
                parseInt(
                    get_permuted_value(block, inverse_initial_permutation),
                    2
                )
            )
        );
    });

    return plaintext;
}

export { key_size, generate_subkeys, encrypt, decrypt };
