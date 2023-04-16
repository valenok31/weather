export const temperatureGradient = (temp) => {
    let opticBackgr = 0.9;
    let tempFunc = () => {
        if (temp > 43) return `rgba(220, 50, 50, ${opticBackgr})`;
        if (temp > 26) return `rgba(220, ${480 - temp * 10}, 50, ${opticBackgr})`;
        if (temp > 9) return `rgba(${-40 + temp * 10}, 220, 50, ${opticBackgr})`;
        if (temp > -8) return `rgba(50, 220, ${140 - temp * 10}, ${opticBackgr})`;
        if (temp > -25) return `rgba(50, ${300 + temp * 10}, 220, ${opticBackgr})`;
        if (temp > -42) return `rgba(${-200 - temp * 10}, 50, 220, ${opticBackgr})`;
        if (temp <= -42) return `rgba(220, 50, 220, ${opticBackgr})`;
    }

    let tempFunc2 = () => {
        if (temp > 43) return `rgba(170, 0, 0, ${opticBackgr})`;
        if (temp > 26) return `rgba(170, ${480 - temp * 10 - 50}, 0, ${opticBackgr})`;
        if (temp > 9) return `rgba(${-40 + temp * 10 - 50}, 170, 0, ${opticBackgr})`;
        if (temp > -8) return `rgba(0, 170, ${140 - temp * 10 - 50}, ${opticBackgr})`;
        if (temp > -25) return `rgba(0, ${300 + temp * 10 - 50}, 170, ${opticBackgr})`;
        if (temp > -42) return `rgba(${-200 - temp * 10 - 50}, 0, 170, ${opticBackgr})`;
        if (temp <= -42) return `rgba(170, 0, 170, ${opticBackgr})`;
    }

    return {
        backgroundColor: tempFunc(),
    }
}