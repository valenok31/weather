export function dayHours(k) {
    if (k <= 23) {
        return {
            d: 0,
            h: k,
        }
    }
    if (k <= 47) {
        return {
            d: 1,
            h: k - 24,
        }
    }
    if (k <= 71) {
        return {
            d: 2,
            h: k - 48,
        }
    }
}
