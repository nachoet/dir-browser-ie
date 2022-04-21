function cropFilename(str) {
    if (str.length > 10) {
        const newStr = str.slice(0, -6);
        console.log(newStr)
        return newStr
    }

    return str;
};



export default cropFilename