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