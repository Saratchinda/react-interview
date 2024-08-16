// src/movies.js

const movies = [
    { id: '1', title: 'Oceans 8', category: 'Comedy', likes: 4, dislikes: 1, userReaction: 'neutral', image: 'https://image.tmdb.org/t/p/original/pv4QaDlqtkqVkBWOmGhleaxDn2L.jpg' },
    { id: '2', title: 'Midnight Sun', category: 'Comedy', likes: 2, dislikes: 0, userReaction: 'neutral', image: 'https://i1.wp.com/unjour-unlivre.fr/wp-content/uploads/2018/06/Midnight-Sun-affiche.jpg?resize=1024%2C1447' },
    { id: '3', title: 'Les indestructibles 2', category: 'Animation', likes: 3, dislikes: 1, userReaction: 'neutral', image: 'https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg' },
    { id: '4', title: 'Sans un bruit', category: 'Thriller', likes: 6, dislikes: 6, userReaction: 'neutral', image: 'https://th.bing.com/th/id/R.b36baf364bdc6a30646b3ca038488bab?rik=MfUveTHUtfeB%2bg&riu=http%3a%2f%2ffr.web.img3.acsta.net%2fpictures%2f18%2f03%2f22%2f16%2f48%2f2454348.jpg&ehk=SjP5qXYyzM7zdDhUXLeIDl7EC4K%2fQq%2bJOm880y9LGT0%3d&risl=&pid=ImgRaw&r=0' },
    { id: '5', title: 'Creed II', category: 'Drama', likes: 16, dislikes: 2, userReaction: 'neutral', image: 'https://th.bing.com/th/id/OIP.Shsy9Ge5ElLF31wyzX7WbwAAAA?rs=1&pid=ImgDetMain' },
    { id: '6', title: 'Pulp Fiction', category: 'Thriller', likes: 11, dislikes: 3, userReaction: 'neutral', image: 'https://image.tmdb.org/t/p/original/pbWgQPC6l9pkpEpi3WNRSfWYNP6.jpg' },
    { id: '7', title: 'Seven', category: 'Thriller', likes: 2, dislikes: 1, userReaction: 'neutral', image: 'https://th.bing.com/th/id/R.3a2c3fc2e163c01cc650d85e70e51f50?rik=MxKgkjW%2f%2fCs%2b3g&riu=http%3a%2f%2ffr.web.img2.acsta.net%2fmedias%2fnmedia%2f18%2f35%2f91%2f33%2f19255605.jpg&ehk=0h6IZFw9GZyIkfaxUEQa9M%2f7g8dGFVpoUCQlImAfcU8%3d&risl=&pid=ImgRaw&r=0' },
    { id: '8', title: 'Inception', category: 'Thriller', likes: 2, dislikes: 1, userReaction: 'neutral', image: 'https://th.bing.com/th/id/R.dd9827fbb0199cd20694739d54c346d8?rik=5JsQjhudqNqO9w&pid=ImgRaw&r=0' },
    { id: '9', title: 'Gone Girl', category: 'Thriller', likes: 22, dislikes: 12, userReaction: 'neutral', image: 'https://th.bing.com/th/id/R.15b1630b1ba1d9e072e2496a97d85b5d?rik=2HgdJAgdD2%2fn5g&pid=ImgRaw&r=0' },
  ];
  
  export const fetchMovies = () => {
    return new Promise((resolve) => setTimeout(() => resolve(movies), 100));
  };
  