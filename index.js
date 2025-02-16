""// 1. Filter books by Fantasy genre
const filterFantasyBooks = (books) => books.filter(book => book.genre === "Fantasy");

const books = [
  { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Drama' },
  { title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
];

console.log(filterFantasyBooks(books));

// 2. Filter movies released after 2010, rated 8.0 or above, and in Action or Adventure genre
const filterMovies = (movies) => movies.filter(movie => movie.year >= 2010 && movie.rating >= 8.0 && (movie.genre === "Action" || movie.genre === "Adventure"));

const movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
  { title: "Tripple Frontier", year: 2023, rating: 9.0, genre: "Action" },
  { title: "Jurassic Park", year: 1993, rating: 8.1, genre: "Adventure" },
];

console.log(filterMovies(movies));

// 3. Filter restaurants with 4+ stars, Italian cuisine, and open on Sundays
const filterRestaurants = (restaurants) => restaurants.filter(restaurant => restaurant.stars >= 4 && restaurant.cuisine === "Italian" && restaurant.openOnSundays);

const restaurants = [
  { name: "Pasta Paradise", stars: 4.5, cuisine: "Italian", openOnSundays: false },
  { name: "Sushi Sensation", stars: 3.8, cuisine: "Japanese", openOnSundays: true },
  { name: "Burger Binge", stars: 4.2, cuisine: "American", openOnSundays: true },
  { name: "Nasi", stars: 4.5, cuisine: "Italian", openOnSundays: true },
];

console.log(filterRestaurants(restaurants));

// 4. Filter products containing 'bread' in their name
const filterBreadProducts = (products) => products.filter(product => product.name.toLowerCase().includes("bread")).map(product => product.name);

const products = [
  { name: 'Bread', price: 480, quantity: 3 },
  { name: 'Clips', price: 200, quantity: 5 },
  { name: 'green Bread Knife', price: 3077, quantity: 1 },
  { name: 'Slipper', price: 150, quantity: 2 },
];

console.log(filterBreadProducts(products));

// 5. Mark employees' salaries above or below average
const markSalaryAboveAverage = (employees) => {
  const avgSalary = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
  return employees.map(emp => ({ ...emp, aboveAverage: emp.salary > avgSalary }));
};

const employees = [
  { name: "David", salary: 60000 },
  { name: "Emma", salary: 75000 },
  { name: "Alex", salary: 90000 },
  { name: "Sophie", salary: 55000 },
];

console.log(markSalaryAboveAverage(employees));

// 6. Find the most active community member
const mostActiveMember = (community) => community.reduce((max, member) => {
  const totalHours = member.hours.reduce((sum, h) => sum + h, 0);
  return totalHours > max.total ? { ...member, total: totalHours } : max;
}, { total: 0 });

const community = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
];

console.log(mostActiveMember(community));

// 7. Tag students as regular if they spend more than 20 hours per week
const tagRegularStudents = (communityData) => communityData.map(member => {
  const totalHours = member.hours.reduce((sum, h) => sum + h, 0);
  return member.role === "student" && totalHours > 20 ? { ...member, tag: "regular" } : member;
});

const communityData = [
    { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },

    { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },
  
    { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },
  
    { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  
    { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },
  
    { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },
  
    { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  
    { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] }
];

console.log(tagRegularStudents(communityData));

