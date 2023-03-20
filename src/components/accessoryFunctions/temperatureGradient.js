export const temperatureGradient = (temp) => {
    let opticBackgr = 0.8;
    let tempFunc = () => {
        if (temp > 43) return `rgba(220, 50, 50, ${opticBackgr})`;
        if (temp > 26) return `rgba(220, ${480 - temp * 10}, 50, ${opticBackgr})`;
        if (temp > 9) return `rgba(${-40 + temp * 10}, 220, 50, ${opticBackgr})`;
        if (temp > -8) return `rgba(50, 220, ${140 - temp * 10}, ${opticBackgr})`;
        if (temp > -25) return `rgba(50, ${300 + temp * 10}, 220, ${opticBackgr})`;
        if (temp > -42) return `rgba(${-200 - temp * 10}, 50, 220, ${opticBackgr})`;
        if (temp <= -42) return `rgba(220, 50, 220, ${opticBackgr})`;
    }
    return {
        backgroundColor: tempFunc(),
    }
}