export const windDirectionStyle = (windDegree, windKph, x) => {
    windKph = 1000 / windKph;
    windDegree = windDegree + 90;
    return {
        transform: `rotate(${windDegree + x}deg)`,
        animationDuration: `${windKph}s`,
        width: `${2000 + x * 20}%`,
        height: `${2000 + x * 20}%`
    }
}