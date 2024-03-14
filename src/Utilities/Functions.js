export const getObject = (list, searchingValue) => {
    for (let i=0; i<list.length;i++) {
        if(list[i].productId === searchingValue) {
            return list[i];
        }
    }
    return null;
};