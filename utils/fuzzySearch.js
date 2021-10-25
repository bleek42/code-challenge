// const fuzzySearch = (type, search) => {
//   search = search.replace(/\ /g, '').toLowerCase();
//   const tokens = [];
//   let searchPos = 0;

//   for (let i = 0; i < type.length; i++) {
//     const typeChar = type[i];
//     if (searchPos < search.length && typeChar.toLowerCase() === search[searchPos]) {
//       tokens.push(typeChar);
//       searchPos++;
//     }
//     if (searchPos !== search.length) {
//       return null;
//     }
//   }
//   return tokens.join('');
// };

// const item = {
//   attribute: 'brandon'
// };

// const searchTerm = 'br';

// console.log(fuzzySearch(item.attribute, searchTerm));

// module.exports = fuzzySearch;