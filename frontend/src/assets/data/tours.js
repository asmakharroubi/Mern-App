



import venice from "../images/venice.jpg";
import bali from "../images/bali.jpg";
import paris from "../images/paris.jpg";
import nepal from "../images/nepal.jpg";
import maine from "../images/maine.jpg";
import hawai from "../images/hawai.jpg";
import canada from "../images/canada.jpg";
import newzeeland from "../images/newzeeland.jpg";
import tanzania from "../images/tanzania.jpg";

import hotel1 from "../images/hotel1.jpg";
import hotel2 from "../images/hotel2.jpg";
import hotel3 from "../images/hotel3.jpg";

// import hotel4 from "../images/hotel4.jpg";
import hotel5 from "../images/hotel5.jpg";

import hotel7 from "../images/hotel7.jpg";
import hotel8 from "../images/hotel8.jpg";




const tours = [
  {
    id: "01",
    title: "The floating City",
    city: "Venice",
    distance: 300,
    price: 1000,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 9,
    photo: venice,
    featured: true,
    hotels: [
      {
        name: "Hotel Al Ponte Mocenigo",
        descrip: "Venice is an expensive city to stay in, there are budget options in convenient locations. Don't expect spacious rooms and lavish décor, but you can expect comfortable and hospitable surroundings. Rooms at Hotel Al Ponte Mocenigo, many of them with balconies, overlook the Grand Canal or a courtyard. Close to the San Stae Vaporetto stop, which is only three stops from the train station, the hotel is a five-minute walk from Rialto.",
        rating: 9,
        price: 2500,
        photo: hotel1,
      },
      {
        name: "Hotel Antico Doge",
        descrip: "Less than a 10-minute walk from Rialto Bridge and less than 15 minutes from all the major attractions and things to do, the Hotel Antico Doge is in Cannaregio, close to the beautiful Ca' d'Oro palace. Directly in front of the hotel is a Vaporetto stop and also a traghetto gondola crossing to Rialto market. Rooms are on the large side for Venice, and breakfast is included.",
        rating: 7,
        price: 2000,
        photo: hotel2,
      },
      {
        name: "Hotel Canal Grande",
        descrip: "The recently restored Canal Grande is a boutique hotel set in an elegantly decorated Rococo palace in the Santa Croce neighborhood, close to Santa Lucia train station. Many rooms have windows or terraces with romantic views overlooking the Grand Canal. A vaporetto stop is conveniently close, as are the attractions of Cannaregio and San Polo, and it's a pleasant walk to St. Mark's Square. This is a good choice for couples who want to be a part of Venetian life but seek a more serene atmosphere than the streets of St. Mark's.",
        rating: 8,
        price: 1900,
        photo: hotel3,
      },
    ],
  },
  {
    id: "02",
    title: "The city of gods",
    city: "Bali",
    distance: 400,
    price: 1500,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 8,
    photo: bali,
    featured: true,
    hotels: [
      {
        name: "Hard Rock Hotel Bali",
        descrip: "Relish in the modern comfort of the music-inspired hotel rooms and suites before making a splash in the largest free-form pool in all of Bali. The prime location at Kuta Beach ensures you’re close to all that this tropical retreat offers, both on the property and off. ",
        rating: 9,
        price: 374,
        photo: hotel3,
      },
      {
        name: "Hotel Tugu Bali",
        descrip: "Hotel Tugu Bali recounts the most romantic tales, folklores, and legends of Indonesia – one room at a time. Each room is individually created by the owner, displaying his immaculate attention to detail reconstructed to provide a perfect marriage of colour, texture and atmosphere.",
        rating: 7,
        price: 813,
        photo: hotel5,
      },
      {
        name: "Hotel Canal Grande",
        descrip: "The recently restored Canal Grande is a boutique hotel set in an elegantly decorated Rococo palace in the Santa Croce neighborhood, close to Santa Lucia train station. Many rooms have windows or terraces with romantic views overlooking the Grand Canal. A vaporetto stop is conveniently close, as are the attractions of Cannaregio and San Polo, and it's a pleasant walk to St. Mark's Square. This is a good choice for couples who want to be a part of Venetian life but seek a more serene atmosphere than the streets of St. Mark's.",
        rating: 8,
        price: 1900,
        photo: hotel3,
      },
    ],
  },
  {
    id: "03",
    title: "City of Lights, France",
    city: "Paris",
    distance: 500,
    price: 1600,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 7,
      },
    ],
    avgRating: 4.5,
    photo: paris,
    featured: true,
    hotels: [
      {
        name: "Hôtel Plaza Athénée",
        descrip: "Decorated with original fashion drawings by Christian Dior, the Hôtel Plaza Athénée is convenient to the studios and showrooms of the haute-couture designers, and its level of luxury reflects its location, next to the Champs-Élysées.",
        rating: 9,
        price: 1800,
        photo: hotel7,
      },
      {
        name: "Hôtel Madame Rêve",
        descrip: "Located on a discreet corner near Les Halles in what was once Paris’s only 24-hour post office, Madame Rêve Hotel is where well-heeled guests spend the night in stylish rooms with monument views, or at the hotel’s 10,000-square-foot rooftop and restaurant, primed for peak summer socializing.",
        rating: 9,
        price: 1800,
        photo: hotel8,
      },
   ]
  },
  {
    id: "04",
    title: "The adventure capital of the world",
    city: "New Zealand",
    distance: 500,
    price: 1400,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 8,
    photo: newzeeland,
    featured: true,
  },
  {
    id: "05",
    title: "Best Advanture vacation",
    city: "Tanzania",
    distance: 500,
    price: 1500,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tanzania,
    featured: false,
  },
  {
    id: "06",
    title: "Best Montain Adventures",
    city: "Nepal",
    distance: 500,
    price: 1800,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: nepal,
    featured: false,
  },
  {
    id: "07",
    title: "Lumahai Beach",
    city: "Hawai",
    distance: 500,
    price: 1900,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hawai,
    featured: false,
  },
  {
    id: "08",
    title: "Lake Louise, Alberta",
    city: "Canada",
    distance: 1300,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: canada,
    featured: false,
  },
   {
    id: "08",
    title: "Cape Elizabeth",
    city: "Maine",
    distance: 1400,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: maine,
    featured: false,
  },
];

export default tours;
