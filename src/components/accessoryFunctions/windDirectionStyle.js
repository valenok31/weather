export const windDirectionStyle = (windDegree, windKph, x) => {
    if(windKph===0){windKph=0.0001}
    windKph = 1000 / windKph;
    windDegree = windDegree + 90;
    return {
        transform: `rotate(${windDegree + x}deg)`,
        animationDuration: `${windKph}s`,
        width: `${2000 + x * 20}%`,
        height: `${2000 + x * 20}%`
    }
}