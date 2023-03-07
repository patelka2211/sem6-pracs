export function get_binary(value, min_size) {
    let binary_rep = value.toString(2).split("").reverse();
    while (binary_rep.length < min_size)
        binary_rep.push("0");
    return binary_rep.reverse().join("");
}
function xor_operation(a, b) {
    return a ^ b;
}
export function circular_left_shift(num, shift_amount, size_of_shift_register) {
    let binary_rep = get_binary(num, size_of_shift_register);
    shift_amount = shift_amount % size_of_shift_register;
    return parseInt(binary_rep.substring(shift_amount) +
        binary_rep.substring(0, shift_amount), 2);
}
