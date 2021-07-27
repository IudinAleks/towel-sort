module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix === []) return [];
    let arr = matrix.map((item, index) => {
        if (index % 2 == 0) {
            return item;
        }
        return item.reverse();
    });
    let array = [].concat(...arr);
    return array;
};
