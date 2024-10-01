export const randomChar = () => {
    const str = "qwertyuiopasdfghjklzxcvbnm";
    const string = str[Math.floor(Math.random() * str.length)];
    return string;
}
