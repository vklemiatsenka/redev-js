'use strict';

/* Вы, наверное, знаете систему «лайков» по Facebook и другим страницам. Люди могут "лайкать" сообщения в блогах, изображения или другие предметы. Мы хотим создать текст, который должен отображаться рядом с таким элементом.
Реализуйте функцию like :: [String] -> String, которая должна принимать входной массив, содержащий имена людей, которым нравится элемент. Он должен возвращать отображаемый текст, как показано в примерах:
function likes(array){
    return
};
likes([]); //'no one likes this'
likes(["Peter"]); // 'Peter likes this'
likes(["Jacob", "Alex"]); //'Jacob and Alex like this'
likes(["Max", "John", "Mark"]); // 'Max, John and Mark like this'
likes(["Alex", "Jacob", "Mark", "Max"]); //'Alex, Jacob and 2 others like this'
*/

function likes(arr) {
    const arrLength = arr.length;
    switch (arrLength) {
        case 0:
            return `no one likes this`;
        case 1:
            return `${arr[0]} likes this`;
        case 2:
            return `${arr[0]} and ${arr[1]} like this`;
        case 3:
            return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
        default:
            return `${arr[0]}, ${arr[1]} and ${arrLength - 2} others like this`;
    }
}

console.log(likes(["Alex"]));