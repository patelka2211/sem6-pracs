export function get_binary(value: number, min_size: number) {
    let binary_rep: string[] = value.toString(2).split("").reverse();

    while (binary_rep.length < min_size) binary_rep.push("0");

    return binary_rep.reverse().join("");
}

export function xor_operation(a: number, b: number) {
    return a ^ b;
}

export function circular_left_shift(
    num: number,
    shift_amount: number,
    size_of_shift_register: number
) {
    let binary_rep = get_binary(num, size_of_shift_register);

    shift_amount = shift_amount % size_of_shift_register;

    return parseInt(
        binary_rep.substring(shift_amount) +
            binary_rep.substring(0, shift_amount),
        2
    );
}
