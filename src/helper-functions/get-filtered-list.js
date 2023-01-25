export const getFilteredEmailList = (emailList, filter, favoritesIndexArray, readIndexArray) => {
    switch (filter) {
        case "UNREAD": 
            return emailList.filter((item) => !readIndexArray.includes(item.id));

        case "READ":
            return emailList.filter((item => readIndexArray.includes(item.id)));

        case "FAVORITES":
            return emailList.filter((item) => favoritesIndexArray.includes(item.id));

        case "CLEAR":
            return emailList;
        
        default:
            return emailList;
    }
}