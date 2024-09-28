export function fetchAPI(date) {
    let result = [];
    for (let i = 17; i <= 23; i++) {
        result.push(`${i}:00`);
    }
    return result;
}

export function submitAPI(formData) {
    return true;
}
