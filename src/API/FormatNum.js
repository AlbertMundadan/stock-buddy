export {convert}

function convert(n) {
    let s = ["", "K", "M", "B", "T"];
    let Magnitude = Math.floor(Math.log10(n));
    let index = Math.floor(Magnitude / 3);
    let abbreviatedValue = parseFloat((n / Math.pow(1000, index)).toPrecision(2));
    return abbreviatedValue + "" + s[index];
}