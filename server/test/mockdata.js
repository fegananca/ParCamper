const place = {
  subtitle: 'Beautiful place',
  location: {
    lat: 41.00393,
    lon: 0.83686,
  },
  rating: 4,
  review: ['I love it!'],
  thumbnail:
    'https://images.unsplash.com/photo-1534338332682-8c9735c0a2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
};

const placeTwo = {
  subtitle: 'Bad place',
  location: {
    lat: 40.00324,
    lon: 3.82852,
  },
  rating: 1,
  review: ['I hate it!'],
  thumbnail:
    'https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
};

const places = [place, placeTwo];

module.exports = { place, placeTwo, places };
