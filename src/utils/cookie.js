export const createCookie = (key, value) => {
    const cookie = encodeURI(key) + "=" + encodeURI(value) + "; max-age=604800";

    document.cookie = cookie;

    console.log(cookie);
}

export const readCookie = (name) => {
    let key = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(key) === 0) {
            return cookie.substring(key.length, cookie.length)
        }
    }
    return null;
}