import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

class BookstoreService {
  books = [{
      id: 1,
      img: img1,
      title: "Fairy Portraits",
      author: "Selina Fenech",
      price: "9.49$",
      rating: 100,
    },
    {
      id: 2,
      img: img2,
      title: "Five-minute Stories",
      author: "Cottage Door Press",
      price: "11.69$",
      rating: 579,
    },
    {
      id: 3,
      img: img3,
      title: "Tell Me a Story",
      author: "Louise deForest",
      price: "31.97$",
      rating: 62,
    },
    {
      id: 4,
      img: img4,
      title: "Fairy Dog Heaven",
      author: "Patrese Fischer",
      price: "17.99$",
      rating: 37,
    },
    {
      id: 5,
      img: img5,
      title: "A Witch's Guide",
      author: "Edain McCoy",
      price: "21.99$",
      rating: 71,
    },
    {
      id: 6,
      img: img6,
      title: "The Girl Who Drank the Moon",
      author: "Kelly Barnhill",
      price: "4.49$",
      rating: 2522,
    },
  ];
  getBooks() {

    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.books)
      }, 700)
      //setTimeout(() => {
      //  rej(new Error('errrr'))
      //}, 1700)
    });
  }
}

export default BookstoreService;