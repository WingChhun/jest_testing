<<<<<<< HEAD
const googleDatabse = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com'
]

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput);
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

console.log(googleSearch('com', googleDatabse));

module.exports = googleSearch;
=======
//*Test Google SEarch test
const googleDatabase = [
    'cats.com',
    'catsaretrash.com',
    'hellocat',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'facebook.com'
];

const googleSearch = (searchInput, db) => {

    const matches = db.filter(website => website.includes(searchInput));

    return matches.length > 3
        ? matches.slice(0, 3)
        : matches;

}

module.exports = googleSearch;
>>>>>>> 69a85eea0910b7910309e1184f049c9c3492b4ac
