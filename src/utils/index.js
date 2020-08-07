const setCharAt = function (str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

const isItemInCart = function (id, items) {
    let res = false;
    items.forEach((item) => {
        if (item.id === id) {
            console.log(1)
            res = true;
        }
    });
    return res;
}

export {
    setCharAt,
    isItemInCart
};