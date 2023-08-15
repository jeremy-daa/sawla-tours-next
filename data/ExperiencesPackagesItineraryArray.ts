import Images from "./Images";
export interface Itinerary {
  id: number;
  experience: number;
  title: string;
  description: string;
  image: string;
  link: string;
  linkname: string;
  index: boolean;
  intro: {
    title: string;
    description: string[];
    lr: boolean;
    img1: string;
    img2: string;
    subtitle?: string;
    button: string;
    link: string;
  }[];
  tourdescription2: {
    title: string;
    description: string;
    destinations: {
      title: string;
      description: string;
    }[];
  }[];
  itinerarydescription?: {
    title: string;
    description?: string[];
    itineraries: {
      title: string;
      description: string[];
      image: string;
    }[];
  };
}
const images = Images;
export const ExperiencesPackageItineraryArray: Itinerary[] = [
  {
    id: 1,
    experience: 1,
    title: "Footsteps of History",
    index: false,
    image: images.axum3,
    description: "Unveiling Ethiopia's Ancient Legacy",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Footsteps of History",
        description: [
          "Embark on a captivating 8-day journey through Ethiopia, where the echoes of ancient civilizations and the grandeur of nature converge. This thoughtfully crafted tour invites history enthusiasts to delve into the rich cultural heritage of Ethiopia, from the vibrant streets of Addis Ababa to the architectural wonders of Gonder and the awe-inspiring rock-hewn churches of Lalibela.",
          "Traverse the majestic Simien Mountains, walking amidst breathtaking plateaus and gorges. Each destination on this itinerary reveals the storied past of Ethiopia, offering a profound understanding of its historical significance. Join us on this enchanting expedition as we unravel the ancient secrets and monumental legacies of this extraordinary land.",
        ],
        lr: true,
        img1: images.axum4,
        img2: images.axum5,
        subtitle: "Unveiling Ethiopia's Ancient Legacy",
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Immerse yourself in Ethiopia's capital, exploring its museums, markets, and iconic landmarks.",
          },
          {
            title: "Gonder",
            description:
              "Discover the Royal Enclosure, featuring medieval castles and the awe-inspiring Debre Berhan Selassie Church.",
          },
          {
            title: "Simien Mountains",
            description:
              "Venture into this UNESCO World Heritage Site, walking amidst stunning alpine landscapes and encountering unique wildlife.",
          },
          {
            title: "Lalibela",
            description:
              "Witness the architectural marvels of the rock-hewn churches, a testament to human craftsmanship and spiritual devotion.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and explore the vibrant capital city",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder and drive to the Simien Mountains National Park",
          },
          {
            title: "Day 3",
            description:
              "Explore and immerse yourself in the beauty of the Simien Mountains",
          },
          {
            title: "Day 4",
            description: "Drive to Gonder and uncover its historical treasures",
          },
          {
            title: "Day 5",
            description:
              "Fly to Lalibela and visit the renowned rock-hewn churches",
          },
          {
            title: "Day 6",
            description: "Explore more of Lalibela's captivating churches",
          },
          {
            title: "Day 7",
            description:
              "Fly back to Addis Ababa and embark on a sightseeing tour",
          },
          {
            title: "Day 8",
            description:
              "Depart from Addis Ababa with lasting memories of Ethiopia's ancient heritage.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Upon arrival at Bole International Airport in Addis Ababa, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa.",
          ],
          image: images.addis1,
        },
        {
          title:
            "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning, board a short flight to Gonder and upon arrival, you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa's largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia.",
            "Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatize your body to the altitude.",
            "Overnight in Simiens.",
          ],
          image: images.gonder3,
        },
        {
          title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers.",
            "We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens.",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            'A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as "the Camelot of Africa".',
            "Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder.",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After check-in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north-western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela.",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela.",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 7: FLY TO ADDIS & EXPLORE SIGHTSEEING",
          description: [
            'This morning you fly back to Addis and tour more of the city. Visit the National Museum, with its many archaeological findings, including the famous complete fossil remains of 3 million-year-old "Lucy."',
            "Explore the Merkato, one of the largest open-air markets in the world, and wander the vast range of goods and artifacts. You will have time for shopping.",
            "Overnight in Addis Ababa.",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 8: DEPART FROM ADDIS ABABA",
          description: [
            "Depending of your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis1,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 1,
    title: "Ethiopian Odyssey",
    index: false,
    image: images.lalibela5,
    description: "From Ancient Churches to Majestic Landscapes",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Odyssey",
        subtitle: "From Ancient Churches to Majestic Landscapes",
        description: [
          "Embark on a captivating expedition through Ethiopia's ancient wonders, tailored for the passionate historic enthusiast. This immersive tour unveils the country's rich cultural heritage, from the bustling city of Addis Ababa to the enchanting rock-hewn churches of Lalibela, the royal castles of Gonder, and the UNESCO World Heritage Sites of Axum and Harar.",
          "Along the way, we'll delve into the majestic Simien Mountains National Park, visit isolated churches on Lake Tana, and explore the fascinating Tigray rock churches. From remarkable architecture to mystical landscapes, this journey will transport you back in time and leave you in awe of Ethiopia's enduring historical legacy.",
        ],
        lr: true,
        img1: images.axum2,
        img2: images.tigray9,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in Ethiopia's vibrant capital, where a city tour takes you to the Ethnological Museum, Holy Trinity Cathedral, and the oldest coffee roaster, Tomoca.",
          },
          {
            title: "Simien Mountains National Park",
            description:
              "Experience the breathtaking beauty of Africa's largest ranges, with opportunities for scenic walks and encounters with endemic wildlife.",
          },
          {
            title: "Gonder",
            description:
              "Explore the 'Camelot of Africa' and marvel at the royal castles and Debre Berhan Selassie Church, offering a glimpse into Ethiopia's regal past.",
          },
          {
            title: "Lalibela",
            description:
              "Witness the architectural marvel of the rock-hewn churches, a UNESCO World Heritage Site and one of the world's most extraordinary religious sites.",
          },
          {
            title: "Axum",
            description:
              "Uncover the mysteries of ancient Axum, visiting the stelae, Queen of Sheba's Bath, and the legendary Church of Saint Mary of Zion.",
          },
          {
            title: "Tigray Rock Churches",
            description:
              "Venture to the Gheralta area and discover the hidden treasures of the Tigray region, where ancient churches carved into cliffs await exploration.",
          },
          {
            title: "Danakil Depression",
            description:
              "Experience the surreal landscapes of this otherworldly region, including the colorful Dallol area and the salt flats, accompanied by breathtaking sunsets.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & city tour",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder & drive to the Simien Mountains National Park",
          },
          {
            title: "Day 3",
            description: "Explore the Simien Mountains",
          },
          {
            title: "Day 4",
            description: "Drive to Gonder & sightseeing",
          },
          {
            title: "Day 5",

            description: "Fly to Lalibela & visit the rock-hewn churches",
          },
          {
            title: "Day 6",
            description: "Explore more rock churches in & around Lalibela",
          },
          {
            title: "Day 7",
            description: "Fly to Axum & explore the sightseeing",
          },
          {
            title: "Day 8",
            description:
              "Drive to the Gheralta area & visit Tigray rock churches",
          },
          {
            title: "Day 9",

            description: "Continue exploring the Tigray rock churches",
          },
          {
            title: "Day 10",
            description:
              "Drive to the Danakil Depression & sunset over Lake Assale",
          },
          {
            title: "Day 11",
            description:
              "Explore the Dallol area & salt flats, drive to Mekelle",
          },
          {
            title: "Day 12",
            description: "Fly to Addis Ababa & Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis4,
        },
        {
          title:
            "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning board a short flight to Gonder and upon arrival you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa's largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia.",
            "Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatise your body to the altitude.",
            "Overnight in Simiens. ",
          ],
          image: images.bahirdar1,
        },
        {
          title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers. We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens ",
          ],
          image: images.simien3,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar.",
            "In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.  We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder3,
        },
        {
          title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th  wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 7: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum.",
            "You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath. This large reservoir is an excellent place to observe the local women collecting water for washing. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.",
            "After having a lunch break, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum ",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 8: DRIVE TO GHERALTA AREA ",
          description: [
            "After breakfast, you drive across the dramatic mountainous landscapes to Gheralta. On your way, you visit the Monastery of Abba Gerima which houses an impressive collection of ancient crosses, crowns, other artifacts and the oldest illustrated Christian manuscripts dated to the fifth-sixth century.",
            "You arrive at the lodge in time for lunch. After settling in, we visit the area's ancient churches, carved into caves and high up on cliff faces. Believed to date back to 600 ce, the origin of these sanctuaries remains a mystery. You return to your lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.yemata2,
        },
        {
          title: "DAY 9: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After breakfast, you drive across the dramatic mountainous landscapes to Gheralta. On your way, you visit the Monastery of Abba Gerima which houses an impressive collection of ancient crosses, crowns, other artifacts and the oldest illustrated Christian manuscripts dated to the fifth-sixth century.",
            "You arrive at the lodge in time for lunch. After settling in, we visit the area's ancient churches, carved into caves and high up on cliff faces. Believed to date back to 600 ce, the origin of these sanctuaries remains a mystery. You return to your lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.yemata2,
        },
        {
          title: "DAY 10: DRIVE TO THE DANAKIL DEPRESSION ",
          description: [
            "After breakfast, spend the morning at your leisure which can be arranged for short hiking, bird watching, and visiting the nearby rock-hewn church. After lunch, you drive towards the Danakil region, stopping a number of times en route to take in the spectacular scenery. You arrive in time to enjoy a beautiful Ethiopian sunset over Lake Asale. Overnight camping in the Danakil",
          ],
          image: images.danakil1,
        },
        {
          title: "DAY 11: EXPLORE THE DALLOL AREA & DRIVE TO MEKELLE",
          description: [
            "After an early light breakfast, you start driving to Dallol. It is like nowhere else; a bizarre landscape of colorful mineral deposits, sulfur pools, and geysers, where you will have this early morning to explore this seemingly alien terrain. You then visit the salt canyons, a bizarre landscape where we go for a short walk. On the way back to camp we cross the salt flats where we see the arduous work of salt being extracted by hand and loaded onto the camels. After freshening up and having lunch, we will leave the Danakil and climb the steep mountains to Mekele, climbing from 100 meters below sea level up to 2500m. Mekele is the region's capital.",
            "Overnight in Mekelle",
          ],
          image: images.danakil2,
        },
        {
          title: "DAY 12: FLY TO ADDIS & DEPARTURE",
          description: [
            "After breakfast, you drive to Mekelle Airport and take the short flight back to Addis Ababa. Upon arrival in Addis, transfer you to your hotel. You have the afternoon free for shopping in Addis Ababa.  Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours. ",
          ],
          image: images.addis1,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 1,
    title: "Ethiopian Odyssey",
    index: false,
    image: images.yemata2,
    description: "Unveiling Ancient Churches and Majestic Landscapes",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Odyssey",
        subtitle: "Unveiling Ancient Churches and Majestic Landscapes",
        description: [
          "Embark on a captivating 11-day journey through Ethiopia, a land steeped in history and adorned with breathtaking landscapes that will leave you spellbound. This thoughtfully curated itinerary takes you on an immersive exploration of Ethiopia's cultural heritage and natural wonders. From the bustling streets of Addis Ababa to the tranquil shores of Lake Tana, discover the hidden gems of this enchanting country.",
          "Marvel at the medieval castles and ornate churches of Gondar, once the royal capital. Immerse yourself in the awe-inspiring beauty of the Simien Mountains, where panoramic vistas and abundant wildlife await your discovery. Experience the architectural marvels of Lalibela's rock-hewn churches, carved meticulously from solid volcanic rock. Explore the ancient treasures of Axum, where legends of the Queen of Sheba and the Ark of the Covenant come to life. ",
          "Delve into the mystical allure of the Gheralta area, home to the enigmatic Tigray rock churches. As your journey draws to a close, you'll return to Addis Ababa, carrying with you the indelible memories of Ethiopia's timeless charm and spiritual grandeur.",
        ],
        lr: true,
        img1: images.lalibela3,
        img2: images.gonder5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in Ethiopia's capital, where a city tour introduces you to the fascinating Ethnological Museum, Holy Trinity Cathedral, and the birthplace of Ethiopian coffee.",
          },
          {
            title: "Bahir Dar & Lake Tana",
            description:
              "Explore the picturesque city of Bahir Dar and embark on a boat trip to visit the stunning monasteries on the tranquil Lake Tana.",
          },
          {
            title: "Gonder",
            description:
              "Discover the medieval castles and churches of Gonder, known as 'the Camelot of Africa,' and delve into Ethiopia's royal history.",
          },
          {
            title: "Simien Mountains National Park",
            description:
              "Encounter the breathtaking landscapes of the Simien Mountains, home to diverse wildlife such as the Walia ibex and Ethiopian wolf.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the renowned rock-hewn churches of Lalibela, a UNESCO World Heritage Site and a testament to the architectural brilliance of ancient Ethiopia.",
          },
          {
            title: "Axum",
            description:
              "Unearth the mysteries of Axum as you explore its towering stelae, the reputed resting place of the Ark of the Covenant, and the captivating ruins of Queen of Sheba's Palace.",
          },
          {
            title: "Tigray Rock Churches",
            description:
              "Journey to the Gheralta area and witness the enigmatic Tigray rock churches, carved into cliffs and shrouded in centuries-old legends.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "DAY 1",
            description: "Arrive in Addis Ababa & a city tour",
          },
          {
            title: "DAY 2",
            description:
              "Fly to Bahir Dar, boat trip to monasteries & explore the city",
          },
          {
            title: "DAY 3",
            description: "Drive to Gonder & sightseeing",
          },
          {
            title: "DAY 4",
            description: "Drive to the Simien Mountains National Park",
          },
          {
            title: "DAY 5",
            description: "Explore the Simien Mountains & drive to Gonder",
          },
          {
            title: "DAY 6",
            description: "Fly to Lalibela & visit the rock-hewn churches",
          },
          {
            title: "DAY 7",
            description: "Explore more rock churches in & around Lalibela",
          },
          {
            title: "DAY 8",
            description: "Fly to Axum & explore the sightseeing",
          },
          {
            title: "DAY 9",
            description:
              "Drive to the Gheralta area & explore the Tigray rock churches",
          },
          {
            title: "DAY 10",
            description: "Explore the Tigray Rock Churches",
          },
          {
            title: "DAY 11",
            description:
              "Drive to Mekelle, catch a flight to Addis & departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 2: FLY TO BAHIR DAR & VISIT THE MONASTERIES ON LAKE TANA",
          description: [
            "Board a short flight to Bahir Dar where you are met and transferred to your hotel. Then you embark on a cruise of Lake Tana, the largest highland lake in Ethiopia, to visit monasteries dating back to the 14th century. Located on the forested Zege Peninsula, Azuwa Mariam is the most impressive of the southern monasteries. The walls of the church are completely covered with remarkable 16th-century murals that offer a revealing look into medieval Ethiopia.",
            "You then return to Bahir Dar for lunch at your hotel. Then you head into the colorful market. Later in the afternoon, you drive up Bezawit Hill for impressive views over the town, the Blue Nile, and of Lake Tana with its island monasteries. We aim to get here shortly before sunset to enjoy the magnificent natural light show. Afterward, we return to our hotel.",
            "Overnight in Bahir Dar",
          ],
          image: images.bahirdar4,
        },
        {
          title: "DAY 3: DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK VIA GONDAR",
          description: [
            "This morning's scenic drive takes you to Simien Mountain National Park via Gonder. The Simien Mountains is a UNESCO World Heritage Site and one of Africa's largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatise your body to the altitude.",
            "Overnight in Simiens.",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers. We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens.",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 5: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years.",
            "You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.  We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder.",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 6: FLY TO LALIBELA & VISIT THE ROCK HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th  wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela1,
        },
        {
          title: "DAY 7: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela.",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 8: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum. You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath.",
            "This large reservoir is an excellent place to observe the local women collecting water for washing. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.  After having a lunch break, continue on your visit to the church of Saint Mary of Zion.",
            "A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum4,
        },
        {
          title: "DAY 9: DRIVE TO GHERALTA AREA ",
          description: [
            "After breakfast, you drive across the dramatic mountainous landscapes to Gheralta. On your way, you visit the Monastery of Abba Garima which houses an impressive collection of ancient crosses, crowns, other artifacts and the oldest illustrated Christian manuscripts dated to the fifth-sixth century. You arrive at the lodge in time for lunch.",
            "After settling in, we visit the area's ancient churches, carved into caves and high up on cliff faces. Believed to date back to 6 century AD, the origin of these sanctuaries remains a mystery. You return to your lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.tigray4,
        },
        {
          title: "DAY 10: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, continue your exploration of the marvelous churches in the Gheralta cluster. Today's half an hour's drive takes you to closer to the foot of Korkur Mountain. It is from here you start you hiking up to the plateau. Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches. The latter one is the smallest church and has a really beautiful view of the surrounding areas.",
            "Drive back to your lodge for lunch. In the afternoon drive to Dugum, where we visit the Dugum Selassie, a rock cave and church carved into granite. It is the only site in the area that houses three sanctuaries, a baptistery, and a crypt.",
            "Overnight in Gheralta",
          ],
          image: images.axum5,
        },
        {
          title: "DAY 11: DRIVE TO MEKELLE & FLY TO ADDIS & DEPARTURE",
          description: [
            "This morning, you drive to Mekele, the regional capital, where you catch your flight to Addis. On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch. You have the afternoon free for shopping in Addis Ababa.  Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 1,
    title: "Ethiopian Splendors",
    index: false,
    image: images.lalibela4,
    description: "Unveiling Ancient Wonders and Natural Beauty",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Spledors",
        subtitle: "Unveiling Ancient Wonders and Natural Beauty",
        description: [
          "Embark on an unforgettable 11-day journey through Ethiopia, a land of ancient wonders and breathtaking landscapes. This meticulously crafted itinerary that promises an extraordinary adventure. From the vibrant capital of Addis Ababa to the serene shores of Lake Tana, prepare to immerse yourself in the rich cultural tapestry and awe-inspiring beauty of this remarkable country.",
          'Explore the medieval castles and ornate churches of Gondar, known as the "Camelot of Africa." Marvel at the majestic Simien Mountains, where dramatic scenery and endemic wildlife captivate the senses. Experience the ethereal allure of Lalibela\'s rock-hewn churches, masterpieces carved into solid volcanic rock. Journey to Axum, the ancient capital of the Aksumite Empire, and trace the footsteps of legendary Queen of Sheba.',
          "Delve into the mystique of the Tigray region, where hidden rock-hewn treasures await discovery. As your journey draws to a close, you'll return to Addis Ababa, carrying cherished memories of Ethiopia's timeless wonders.",
        ],
        lr: true,
        img1: images.gonder4,
        img2: images.axum2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              " Begin your quest in Ethiopia's capital, where you'll discover a fascinating blend of tradition and modernity. Explore the Ethnological Museum and the Holy Trinity Cathedral, steeped in history and adorned with magnificent artwork.",
          },
          {
            title: "Bahir Dar & Lake Tana",

            description:
              "Cruise along the serene waters of Lake Tana, visiting ancient monasteries and uncovering the secrets of centuries-old religious traditions.",
          },
          {
            title: "Simien Mountains National Park",

            description:
              "Venture into the dramatic landscapes of the Simien Mountains, a UNESCO World Heritage Site, where you'll encounter endemic wildlife and awe-inspiring vistas.",
          },
          {
            title: "Gonder",
            description:
              "Step into the Camelot of Africa as you explore Gonder's medieval castles, churches, and the Royal Enclosure, a testament to Ethiopia's regal history.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the rock-hewn churches of Lalibela, an architectural wonder and a pilgrimage site for devout Christians.",
          },
          {
            title: "Axum",
            description:
              "Unearth the mysteries of Axum, an ancient city renowned for its towering stelae, royal tombs, and the legendary Ark of the Covenant.",
          },
          {
            title: "Gheralta Region",
            description:
              "Journey to the rugged Gheralta region, where ancient rock-hewn churches are nestled within cliffs, preserving Ethiopia's Christian heritage.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & city tour",
          },
          {
            title: "Day 2",
            description:
              "Fly to Bahir Dar, visit monasteries on Lake Tana & explore the city",
          },
          {
            title: "Day 3",
            description: "Drive to Simien Mountains National Park",
          },
          {
            title: "Day 4",
            description: "Explore the Simien Mountains",
          },
          {
            title: "Day 5",
            description: "Drive to Gonder & sightseeing",
          },
          {
            title: "Day 6",
            description: "Fly to Lalibela & visit the rock-hewn churches",
          },
          {
            title: "Day 7",
            description: "Explore more rock churches in & around Lalibela",
          },
          {
            title: "Day 8",
            description: "Fly to Axum & explore the sightseeing",
          },
          {
            title: "Day 9",
            description:
              "Drive to the Gheralta region & explore the Tigray rock churches",
          },
          {
            title: "Day 10",
            description: "Fly to Addis Ababa and departure.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO BAHIR DAR, VISIT THE MONASTERIES ON LAKE TANA",
          description: [
            "Board a short flight to Bahir Dar where you are met and transferred to your hotel. Then you embark on a cruise of Lake Tana, the largest highland lake in Ethiopia, to visit monasteries dating back to the 14th century. Located on the forested Zege Peninsula, Azuwa Mariam is the most impressive of the southern monasteries. The walls of the church are completely covered with remarkable 16th-century murals that offer a revealing look into medieval Ethiopia.",
            "You then return to Bahir Dar for lunch at your hotel. Then you head into the colorful market. Later in the afternoon, you drive up Bezawit Hill for impressive views over the town, the Blue Nile, and of Lake Tana with its island monasteries. We aim to get here shortly before sunset to enjoy the magnificent natural light show. Afterwards, we return to our hotel.",
            "Overnight in Bahir Dar",
          ],
          image: images.bahirdar4,
        },
        {
          title: "DAY 3: DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning's drive takes you to Simien Mountain National Park.  You will have lunch stop at Gonder and continue on your drive. Simien Mountain National Park is a UNESCO World Heritage Site and one of Africa's largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. ",
            "Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatise your body to the altitude.",
            "Overnight in Simiens. ",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers.",
            "We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens ",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 5: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.  We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 6: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.  Lalibela indeed offers a great opportunity for any traveler.",
            "After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 7: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 8: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum.",
            "You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath. This large reservoir is an excellent place to observe the local women collecting water for washing. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.  After having a lunch break, continue on your visit to the church of Saint Mary of Zion.",
            "A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 9: DRIVE TO GHERALTA AREA",
          description: [
            "After breakfast, you drive across the dramatic mountainous landscapes to Gheralta. On your way, you visit the Monastery of Abba Gerima which houses an impressive collection of ancient crosses, crowns, other artifacts and the oldest illustrated Christian manuscripts dated to the fifth-sixth century. You arrive at the lodge in time for lunch. After settling in, we visit the area's ancient churches, carved into caves and high up on cliff faces. Believed to date back to 6 century AD, the origin of these sanctuaries remains a mystery. You return to your lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.tigray5,
        },
        {
          title: "DAY 10: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, continue your exploration of the marvelous churches in the Gheralta cluster. Today's half an hour drive takes you closer to the foot of Korkur Mountain. It is from here you start your hiking up to the plateau. Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches. The latter is the smallest church and has a really beautiful view of the surrounding areas. Drive back to your lodge for lunch. In the afternoon, drive to Dugum, where we visit the Dugum Selassie, a rock cave and church carved into granite. It is the only site in the area that houses three sanctuaries, a baptistery, and a crypt.",
            "Overnight in Gheralta",
          ],
          image: images.tigray2,
        },
        {
          title: "DAY 11: DRIVE TO MEKELLE & FLY TO ADDIS & DEPARTURE",
          description: [
            "This morning, you drive to Mekele, the regional capital, where you catch your flight to Addis. On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch. You have the afternoon free for shopping in Addis Ababa. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 1,
    title: "Ethiopian Odyssey",
    index: false,
    image: images.danakil3,
    description: "Unveiling Ancient Marvels and Majestic Landscapes",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Odyssey",
        subtitle: "Unveiling Ancient Marvels and Majestic Landscapes",
        description: [
          "Embark on a captivating journey through the heart of Ethiopia, where ancient wonders and awe-inspiring landscapes await your discovery. From the bustling streets of Addis Ababa to the tranquil shores of Lake Tana, prepare to immerse yourself in the captivating cultural heritage and breathtaking beauty of this extraordinary nation. ",
          'Explore the medieval castles and magnificent churches of Gondar, often referred to as the "Camelot of Africa." Traverse the dramatic landscapes of the Simien Mountains National Park, a UNESCO World Heritage Site, where encounters with endemic wildlife and sweeping vistas will leave you spellbound.',
          "Discover the ancient wonders of Axum, the legendary capital of the Aksumite Empire, and be awestruck by the rock-hewn churches of Lalibela, a testament to human ingenuity and devotion. Your journey will also take you to the enigmatic Tigray region, where hidden rock-hewn treasures await, before culminating in Addis Ababa, where you'll bid farewell to this captivating land. ",
        ],
        lr: true,
        img1: images.tigray4,
        img2: images.lalibela5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Immerse yourself in Ethiopia's vibrant capital, exploring its fascinating museums, iconic cathedrals, and bustling markets.",
          },
          {
            title: "Lake Tana & Monasteries",
            description:
              "Cruise the tranquil waters of Lake Tana to visit isolated monasteries dating back to the 14th century, adorned with captivating murals.",
          },
          {
            title: "Gonder",
            description:
              "Wander through the imperial city of Gonder, where you'll encounter majestic castles, churches, and the renowned Royal Enclosure.",
          },
          {
            title: "Simien Mountains",
            description:
              "Trek through the breathtaking landscapes of Simien Mountains National Park, encountering endemic wildlife and absorbing the majestic scenery.",
          },
          {
            title: "Axum",
            description:
              "Step into the ancient city of Axum, exploring its mysterious stelae, archaeological sites, and legendary Queen of Sheba's Bath.",
          },
          {
            title: "Tigray Rock Churches",
            description:
              "Venture into the rugged Gheralta region to discover the hidden rock-hewn churches, adorned with ancient artifacts and exquisite frescoes.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the awe-inspiring rock-cut churches of Lalibela, a UNESCO World Heritage Site and a testament to Ethiopia's rich religious heritage.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & a city tour",
          },
          {
            title: "Day 2",
            description: "Explore the city of Addis Ababa",
          },
          {
            title: "Day 3",
            description: "Fly to Bahir Dar & visit monasteries on Lake Tana",
          },
          {
            title: "Day 4",
            description: "Drive to Gonder & explore the city",
          },
          {
            title: "Day 5",
            description:
              "Drive to Simien Mountains National Park & explore the Simien",
          },
          {
            title: "Day 6",
            description: "Drive to Axum & explore the city",
          },
          {
            title: "Day 7",
            description:
              "More sightseeing in Axum & drive to the Gheralta area",
          },
          {
            title: "Day 8",
            description: "Explore the Tigray rock churches",
          },
          {
            title: "Day 9",
            description: "Drive to Mekelle via Wukro",
          },
          {
            title: "Day 10",
            description: "Full-day scenic drive to Lalibela",
          },
          {
            title: "Day 11",
            description: "Explore the rock churches in Lalibela",
          },
          {
            title: "Day 12",

            description: "Excursion to Yemrhan Kristos & Nakuto Leab churches",
          },
          {
            title: "Day 13",
            description: "Fly to Addis Ababa & Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel for overnight accommodation.",
            "The city enjoys an excellent climate all year round, with an average temperature of 25°C (77°F). With a multiethnic population of over 5 million, Addis Ababa is a pleasant city with wide avenues of jacaranda trees, interesting museums, and one of the largest open-air markets in Africa, known as the “Mercato”. After your long flight and a welcome briefing, you can settle into your hotel for some rest.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: EXPLORE THE CITY OF ADDIS ABABA",
          description: [
            "Today you will spend the day exploring Addis Ababa, which begins with a visit to the Holy Trinity Cathedral. It is the most important Orthodox Church in Addis Ababa and has survived many historical periods, as its interesting architecture can attest. You proceed to visit the National Museum, one of the most important museums in Africa.",
            "The museum is home to the fossilized humanoid Lucy (a 3.5 million year-old fossil), as well as an amazing collection of artifacts, royal items, and art. After lunch, you will continue our visit to St. George's Cathedral, built in 1896 by Emperor Menelik II. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 3: FLY TO BAHIR DAR & VISIT THE MONASTERIES ON LAKE TANA",
          description: [
            "Board a short flight to Bahir Dar where you are met and transferred to your hotel. Then you embark on a cruise of Lake Tana, the largest highland lake in Ethiopia, to visit monasteries dating back to the 14th century. Located on the forested Zege Peninsula, Azuwa Mariam is the most impressive of the southern monasteries.",
            "The walls of the church are completely covered with remarkable 16th-century murals that offer a revealing look into medieval Ethiopia. You then return to Bahir Dar for lunch at your hotel. Then you head into the colorful market. Later in the afternoon, you drive up Bezawit Hill for impressive views over the town, the Blue Nile, and of Lake Tana with its island monasteries. We aim to get here shortly before sunset to enjoy the magnificent natural light show.",
            "Afterward, we return to our hotel.",
            "Overnight in Bahir Dar",
          ],
          image: images.bahirdar1,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "This morning's drive (180 km) takes you to Gondar, a site of wonders. After some time to rest and have lunch, you will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 5: DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning's drive takes you to Simien Mountain National Park. It is a UNESCO World Heritage Site and one of Africa's largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles.",
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers. We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 6: DRIVE TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "Today's half-day long but scenic journey as you drive to Axum. The views in this remote part of Ethiopia are simply spectacular. The drive affords some excellent photo opportunities of the jagged Simien Mountains and the Tekeze Valley. The route is dotted with intermittent mountain hamlets that add to the splendor of the scenery.",
            "Your journey brings you to the sacred city of Axum in the Tigrayan region. You will check in and have your lunch in the hotel. You will proceed to a half-day city tour of Axum. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum. You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 7: DRIVE TO GHERALTA AREA",
          description: [
            "In the morning, continue your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look. After having a lunch break, you drive across the dramatic mountainous landscapes to Gheralta.",
            "On your way, you visit the Monastery of Abba Garima which houses an impressive collection of ancient crosses, crowns, other artifacts, and the oldest illustrated Christian manuscripts dated to the fifth-sixth century.",
            "You arrive at the lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.tigray5,
        },
        {
          title: "DAY 8: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, head to explore the marvelous rock churches in the Gheralta cluster. A short drive takes you closer to the foot of Korkur Mountain. It is from here you start you hiking up to the plateau. Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches. The latter one is the smallest church and has a really beautiful view of the surrounding areas.",
            "Drive back to your lodge for lunch. In the afternoon drive to visit Mariam Papaseti church which is decorated with beautiful mural paintings.",
            "Overnight in Gheralta",
          ],
          image: images.tigray10,
        },
        {
          title: "DAY 9: DRIVE TO MEKELLE",
          description: [
            "This morning you will drive to the Mekele, passing by a number of interesting churches and towns on the way. Carrying on towards Wukro, you first visit Abreha Atsbeha church, one of the most picturesque of the churches in the area with a beautifully decorated interior, depicting biblical scenes and saints. Having a lunch break at Wukro, head to visit Wukro Cherkos, a semi-monolithic church. Inside this crucifix-shaped church, you'll see patterned pillars and carvings.",
            "Then drive to Mekelle overnight.",
          ],
          image: images.tigray6,
        },
        {
          title: "DAY 10: DRIVE TO LALIBELA",
          description: [
            "A full day's drive today takes you due south, between the mountains to the west and the stark landscape of the Danakil Depression to the east, via the town of Woldiya, to arrive at Laliblea. It is a home of rock-hewn churches and a World Heritage Site. Located at 2,600 meters above sea level, it is the 8th wonder of the world. 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela1,
        },
        {
          title: "DAY 11: VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "After breakfast, this morning is devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela2,
        },
        {
          title: "DAY 12: EXCURSION TO YEMRHAN KRISTOS & NAKUTO LEAB CHURCHES",
          description: [
            "This morning's drive takes you to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela for lunch. Late afternoon, you visit Nakuto Leab Monastery, which houses an impressive collection of ancient crosses and illustrated manuscripts.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela3,
        },
        {
          title: "DAY 13: FLY TO ADDIS & DEPARTURE",
          description: [
            "After breakfast, you transfer to the airport and take the short flight back to Addis Ababa and transfer to your hotel. You have the afternoon free for shopping in Addis Ababa.",
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis3,
        },
      ],
    },
  },
  {
    id: 6,
    experience: 1,
    title: "Journey Through Time",
    index: false,
    image: images.axum4,
    description: "Unveiling Ethiopia's Historic Treasures",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Journey Through Time",
        subtitle: "Unveiling Ethiopia's Historic Treasures",
        description: [
          "Embark on an extraordinary adventure through the captivating history of Ethiopia with our meticulously crafted itinerary. This trip is tailored for the avid historic enthusiast, offering a unique opportunity to explore the country's ancient sites, rock-hewn churches, and legendary landmarks. Immerse yourself in the rich cultural tapestry of Ethiopia as we take you on a journey through time, unveiling the secrets of centuries past.",
          "From Addis Ababa to Gonder, Lalibela to Axum, and Harar, each destination holds its own mesmerizing tales waiting to be discovered. Join us as we delve into Ethiopia's architectural wonders, religious artifacts, and majestic landscapes, creating memories that will last a lifetime.",
        ],
        lr: true,
        img1: images.tigray4,
        img2: images.lalibela5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your adventure in Ethiopia's vibrant capital, where you'll discover the Ethnological Museum and the breathtaking Holy Trinity Cathedral, offering insights into the nation's diverse heritage.",
          },
          {
            title: "Gonder",
            description:
              "Explore the 'Camelot of Africa' and marvel at the well-preserved castles and palaces within the Royal Enclosure, alongside the iconic Debre Berhan Selassie Church.",
          },
          {
            title: "Simien Mountains National Park",
            description:
              "Embark on a captivating excursion to this UNESCO World Heritage Site, home to stunning peaks, rare wildlife such as the Walia ibex and Ethiopian wolf, and awe-inspiring landscapes.",
          },
          {
            title: "Lalibela",
            description:
              "Witness the architectural wonder of the rock-hewn churches, including Bet Medhane Alem, Bet Emmanuel, and the magnificent cruciform-shaped Bet Giorgis, all carved out of solid volcanic rock.",
          },
          {
            title: "Axum",
            description:
              "Discover the ancient city of Axum, with its towering stelae, the Church of Saint Mary of Zion, and the legendary Queen of Sheba's Palace, steeped in historical significance.",
          },
          {
            title: "Harar",
            description:
              "Step into the enchanting walled city of Harar, where narrow streets, a 16th-century mosque, and the bustling local market provide a glimpse into the region's cultural heritage.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & city tour",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder, visit the Royal Enclosure & Debre Berhan Selassie Church",
          },
          {
            title: "Day 3",
            description: "Excursion to Simien Mountains National Park",
          },
          {
            title: "Day 4",
            description: "Fly to Lalibela, explore rock-hewn churches",
          },
          {
            title: "Day 5",
            description:
              "Visit Yemrhan Kristos Church and more rock churches in Lalibela",
          },
          {
            title: "Day 6",
            description: "Fly to Axum, explore the city's historic sites",
          },
          {
            title: "Day 7",
            description:
              "Fly to Addis, connect to Dire Dawa, and drive to Harar",
          },
          {
            title: "Day 8",
            description:
              "Explore Harar's old town, markets, and cultural centers",
          },
          {
            title: "Day 9",
            description:
              "Fly back to Addis Ababa, free time for shopping & departure.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport, and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family.",
            "We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO GONDER",
          description: [
            "This morning, board a short flight to Gonder. Upon arrival, transfer to your hotel. You will spend today exploring the city of Gondar, founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and known as “the Camelot of Africa”.",
            "In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful mural, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 3: EXCURSION TO THE SIMIEN MOUNTAINS",
          description: [
            "Early morning start after breakfast, drive to the Simien Mountains, a UNESCO World Heritage Site and one of Africa's largest ranges.",
            "More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia.",
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers.",
            "We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer. Late afternoon you drive back to Gonder.",
            "Overnight in Gonder",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: FLY TO LALIBELA & VISIT THE ROCK HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level.",
            "Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler.",
            "After check-in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north – western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 5: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside.",
            "This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, it's beautiful wooden coffer ceiling inlaid with hexagons and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela that include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos.",
            "Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela2,
        },
        {
          title: "DAY 6: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning, you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum – a UNESCO World Heritage Site.",
            "You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.",
            "Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures.",
            "You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 7: FLY TO DIRE DAWA VIA ADDIS ABABA & DRIVE TO HARAR",
          description: [
            "Today you fly via Addis Ababa to Dire Dawa, the commercial centre of the region, and the main railhead for the Djibouti to Addis railway.",
            "From here, you ascend by road from the plains to the walled city of Harar, another UNESCO heritage site. The city walls are pierced by 5 gates topped by 25 towers. The 16th-century mosque with its slender minaret and the narrow streets lined with small shops all give the impression of having wandered into a city from the Arabian nights.",
            "Overnight in Harar",
          ],
          image: images.addis4,
        },
        {
          title: "DAY 8: EXPLORE HARAR",
          description: [
            "Today we explore Jugal (old Harar) on foot, you first head to the daily colorful local market.",
            "Then you visit the Arthur Rimbaud Cultural Center. It is located in a beautiful century-old mansion and houses a small museum, library, and research center devoted to Rimbaud's time in Ethiopia.",
            "You also visit Sherif Harar Museum, the local municipal museum. Strolling along the winding, cobbled streets, you explore the gates, restored city walls, and interesting Harari houses of this once-secluded town.",
            "This evening at dusk, you pay a visit to the now-legendary “hyena man” at sundown. Illuminated by vehicle headlights, he calls to hyenas to take scraps of camel meat in a ritual derived from local tradition and religious observance.",
            "Overnight in Harar",
          ],
          image: images.harar1,
        },
        {
          title: "DAY 9: FLY TO ADDIS",
          description: [
            "This morning, you drive to Dire Dawa, where you catch your flight to Addis.",
            "On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch.",
            "You have the afternoon free for shopping in Addis Ababa.",
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 1,
    experience: 2,
    title: "Enchanting Ethiopia",
    index: false,
    image: images.omo3,
    description: "A Cultural Odyssey through the South Omo Valley",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Enchanting Ethiopia",
        subtitle: "A Cultural Odyssey through the South Omo Valley",
        description: [
          "Embark on a remarkable journey through the captivating landscapes and vibrant cultures of Ethiopia's South Omo Valley. This nine-day expedition discovers the hidden gems and cultural wonders of this extraordinary region. From the awe-inspiring Rift Valley Lakes teeming with birdlife and wildlife to the fascinating encounters with diverse tribes boasting unique customs, your adventure promises to be a feast for the senses.",
          "Immerse yourself in the highly adorned Hamer villages and witness the renowned Mursi tribe, renowned for their striking lip plates. Traverse the scenic terrains, explore national parks, and indulge in the artistic genius of the Karo people's body painting. Delve into the cultural tapestry of Ethiopia, where ancient traditions and modern life intertwine harmoniously. Join us on this artistically curated voyage, where every step reveals the allure of Ethiopia's rich heritage. ",
        ],
        lr: true,
        img1: images.omo1,
        img2: images.mursi1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Delight in the abundance of birdlife and wildlife as you explore the picturesque lakeshores of Ethiopia's Rift Valley.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Immerse yourself in the rich cultural diversity of the Southern Omo Valley, engaging with tribes renowned for their unique customs and practices.",
          },
          {
            title: "Hamer Villages",
            description:
              "Witness the vibrant beauty of the Hamer people, adorned with intricate jewelry, elaborate costumes, and their distinctive hair styling.",
          },
          {
            title: "The Mursi Tribe",
            description:
              "Encounter the iconic Mursi tribe, famous for their lip plates, and gain insight into their ancient traditions and way of life.",
          },
          {
            title: "Mago National Park",
            description:
              "Embark on an excursion to the park, home to stunning wildlife and an opportunity to visit a Mursi village.",
          },
          {
            title: "Dassenech Village",
            description:
              "Cross the Omo River to reach the traditional Dassenech village and learn about their agro-pastoralist lifestyle.",
          },
          {
            title: "Kara Tribe",
            description:
              "Discover the Karo tribe and their unique body painting techniques, which create intricate patterns on their faces and bodies.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & city tour",
          },

          {
            title: "Day 2",
            description: "Drive to Arba Minch",
          },
          {
            title: "Day 3",
            description: "Drive to Jinka via Konso",
          },
          {
            title: "Day 4",
            description:
              "Excursion to Mago National Park and visit Mursi tribe then drive to Turmi",
          },
          {
            title: "Day 5",
            description: "Excursion to visit Dassenech",
          },
          {
            title: "Day 6",
            description: "Excursion to visit Kara",
          },
          {
            title: "Day 7",
            description: "Drive to Arba Minch via Elbore",
          },
          {
            title: "Day 8",
            description: "Excursion to visit Dorze and fly to Addis Ababa",
          },
          {
            title: "Day 9",
            description: "Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: DRIVE TO ARBA MINCH",
          description: [
            "Early this morning, after breakfast, commence your private driving to the famous lake-side town of Arba Minch. The drive will pass through high mountain plateaus, scenic landscapes, and the beautiful villages of Gurage and Wolayita; en route stop at the archaeological site of Melka Kunture and the stelae field of Tiya. Having lunch stop en route, you continue driving to Arba Minch. It and the surrounding area are inhabited by the people of the Gamo tribe, originally nomads but now farmers. The last section of this drive offers magnificent views of Lake Abaya, surrounded by mountains.",
            "Overnight in Arba Minch",
          ],
          image: images.hawassa1,
        },
        {
          title: "DAY 3: DRIVE TO JINKA VIA KONSO",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles, and hippos as well as beautiful aquatic birds.",
            "Leaving Arba Minch behind, you drive to Jinka through dramatic scenery towards the heartland of the tribes of the South Omo Valley. En route, you stop at the village of Konso which is known for its distinctive religious and cultural traditions.",
            "After lunch continue your drive towards Jinka overnight.",
            "Overnight in Jinka",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 4: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, continue to Turmi, crossing an area where Ari, Benna, and eventually Hamer people are living.",
            "Overnight in Turmi",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 5: EXCURSION TO VISIT DASSENECH",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "You return to Turmi and spend the afternoon visiting some small Hamer villages. The Hamer people are particularly beautiful and are most distinguishable by their hair, which they style into thick braids with red mud and lard. They wear thick copper bracelets and necklaces, and elaborate costumes with cowrie shells, beads, and leather.",
            "Overnight in Turmi",
          ],
          image: images.hamer2,
        },
        {
          title: "DAY 6: EXCURSION TO VISIT KARA",
          description: [
            "This morning you take an excursion to Korcho and visit the Karo tribe who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other's faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Overnight in Turmi",
          ],
          image: images.omo3,
        },
        {
          title: "DAY 7: DRIVE TO ARBA MINCH VIA ELBORE",
          description: [
            "Departing Turmi after breakfast we head for Weyto. Lying midway between Konso and Key Afar, the village is home to the Tsemai and Arbore peoples. These people are mainly farmers and pastoralists, tending their herds and growing sorghum and maize and supplementing it with honey. Continuing from here we cross the Weyto Valley and head for Konso for lunch.",
            "Then you proceed to Arba Minch.",
            "Overnight in Arba Minch",
          ],
          image: images.erbore1,
        },
        {
          title: "DAY 8: EXCURSION TO VISIT DORZE AND FLY TO ADDIS ABABA",
          description: [
            "After breakfast, you drive to visit a local Dorze tribe. The Dorze are one of the small segments of ethnical groups in southern Ethiopia. Once warriors, the Dorze have now turned to farming and weaving to earn a living. Their success in the field of weaving has been phenomenal and the Dorze name is synonymous with the best-woven cotton cloth.",
            "You return to Arba Minch for lunch and transfer to the airport for your flight to Addis Ababa.",
            "Overnight in Addis Ababa",
          ],
          image: images.konso1,
        },
        {
          title: "DAY 9: DEPARTURE",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 2,
    title: "Enchanting Ethiopia",
    index: false,
    image: images.omo2,
    description: "Exploring the Tribes and Natural Wonders of the Omo Valley",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Enchanting Ethiopia",
        subtitle: "Exploring the Tribes and Natural Wonders of the Omo Valley",
        description: [
          "Embark on a journey of awe-inspiring beauty and cultural immersion as we venture into the heart of Ethiopia's Omo Valley. This extraordinary expedition will take you through a kaleidoscope of experiences, from the breathtaking landscapes of the Rift Valley Lakes to encounters with fascinating tribes whose rich traditions and vibrant way of life have captivated the world.",
          "Prepare to be enthralled by the diverse avian and wildlife species that inhabit the region, and be enchanted by the extraordinary adornments of the Hamer and Mursi people, who proudly wear their heritage on their sleeves – or rather, their lips. With each passing day, you'll witness the wonders of nature and the tapestry of human culture intertwine, creating an unforgettable odyssey of discovery. Join us on this remarkable journey through Ethiopia's Omo Valley and be transported to a world where time-honored traditions and captivating landscapes converge in a mesmerizing symphony of colors, traditions, and authenticity. ",
        ],
        lr: true,
        img1: images.omo1,
        img2: images.mursi1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Discover the abundant birdlife and wildlife that grace the scenic shores of Ethiopia's Rift Valley.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Immerse yourself in the cultural diversity of the region, engaging with tribes renowned for their unique customs and practices.",
          },
          {
            title: "Hamer Villages",
            description:
              "Witness the vibrant beauty of the Hamer people, renowned for their elaborate hairstyles, copper jewelry, and colorful costumes.",
          },
          {
            title: "The Mursi Tribe",
            description:
              "Explore the world of the Mursi, known for their warrior heritage and the distinctive lip plates worn by women.",
          },
          {
            title: "Mago National Park",
            description:
              "Journey into this national park for a glimpse into the daily lives and traditions of the Mursi tribe.",
          },
          {
            title: "Dassenech Village",

            description:
              "Cross the Omo River by traditional canoe to reach the Dassenech village and learn about their agro-pastoralist lifestyle.",
          },
          {
            title: "Karo Tribe",
            description:
              "Encounter the Karo tribe and their incredible body painting techniques, which adorn their faces and bodies with intricate patterns.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & a city tour",
          },
          {
            title: "Day 2",
            description: "Fly to Jinka",
          },
          {
            title: "Day 3",
            description:
              "Excursion to Mago National Park to visit the Mursi tribe and drive to Turmi",
          },
          {
            title: "Day 4",
            description: "Excursion to visit Dassenech and Hamer villages",
          },
          {
            title: "Day 5",
            description: "Excursion to visit the Karo tribe",
          },
          {
            title: "Day 6",
            description:
              "Drive to Arba Minch via Elbore and visit Konso village",
          },
          {
            title: "Day 7",
            description: "Boat trip on Lake Chamo & excursion to Dorze village",
          },
          {
            title: "Day 8",
            description: "Fly to Addis Ababa & Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO JINKA",
          description: [
            "A short domestic flight takes you to Jinka where you will meet your vehicle waiting at the airport. You are entering an area where the people living their authentic tribal life. Nowadays a vanishing lifestyle. More than at any other place we shouldn't forget that we are the visitors and act responsibly.",
            "In the afternoon, we visit the Jinka museum at the South Omo Research Centre to learn more about the people living in the area and we visit the Ari people who have adopted a much more 'Western' lifestyle than their neighbors we are going to meet in the coming days.",
            "Overnight in Jinka",
          ],
          image: images.omo3,
        },
        {
          title: "DAY 3: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, continue to Turmi, crossing an area where Ari, Benna, and eventually Hamer people are living.",
            "Overnight in Turmi",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 4: EXCURSION TO VISIT DASSENECH",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "You return to Turmi and spend the afternoon visiting some small Hamer villages. The Hamer people are particularly beautiful and are most distinguishable by their hair, which they style into thick braids with red mud and lard. They wear thick copper bracelets and necklaces, and elaborate costumes with cowrie shells, beads, and leather.",
            "Overnight in Turmi",
          ],
          image: images.omo1,
        },
        {
          title: "DAY 5: EXCURSION TO VISIT KARA",
          description: [
            "This morning you take an excursion to Korcho and visit the Karo tribe who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other's faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Overnight in Turmi",
          ],
          image: images.karo1,
        },
        {
          title: "DAY 6: DRIVE TO ARBA MINCH VIA ELBORE",
          description: [
            "Departing Turmi after breakfast, we head for Weyto. Lying midway between Konso and Key Afar, the village is home to the Tsemai and Arbore peoples. These people are mainly farmers and pastoralists, tending their herds and growing sorghum and maize and supplementing it with honey.",
            "Continuing from here, we cross the Weyto Valley and head for Konso. After lunch in Karat-Konso village, we meet the Konso people with their maze-like villages and terraces for agriculture. They are also well known for their Waqa stelae, grave markers for the brave and important men of this people. The cultural landscape of Konso is the youngest World Heritage Site in Ethiopia.",
            "Then you proceed to Arba Minch.",
            "Overnight in Arba Minch",
          ],
          image: images.erbore1,
        },
        {
          title: "DAY 7: BOAT TRIP ON LAKE CHAMO & EXCURSION TO DORZE",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles, and hippos as well as many beautiful aquatic birds.",
            "In the afternoon, drive from Arba Minch to the highland village of Dorze. They are one of the small segments of ethnical groups in southern Ethiopia. Once warriors, the Dorze have now turned to farming and weaving to earn a living. Their success in the field of weaving has been phenomenal and the Dorze name is synonymous with best-woven cotton cloth. Monday is market day and well worth a visit.",
            "Overnight in Arba Minch",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 8: FLY TO ADDIS ABABA & DEPARTURE",
          description: [
            "You will have this morning at your leisure. At noon transfer you to the airport for your flight to Addis. On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch.",
            "You have the afternoon free for shopping in Addis Ababa.",
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 2,
    title: "Enchanting Ethiopia",
    index: false,
    image: images.omo2,
    description: "Exploring the Tribes and Natural Wonders of the Omo Valley",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Enchanting Ethiopia",
        subtitle: "Exploring the Tribes and Natural Wonders of the Omo Valley",
        description: [
          "Embark on a journey of awe-inspiring beauty and cultural immersion as we venture into the heart of Ethiopia's Omo Valley. This extraordinary expedition will take you through a kaleidoscope of experiences, from the breathtaking landscapes of the Rift Valley Lakes to encounters with fascinating tribes whose rich traditions and vibrant way of life have captivated the world.",
          "Prepare to be enthralled by the diverse avian and wildlife species that inhabit the region, and be enchanted by the extraordinary adornments of the Hamer and Mursi people, who proudly wear their heritage on their sleeves – or rather, their lips. With each passing day, you'll witness the wonders of nature and the tapestry of human culture intertwine, creating an unforgettable odyssey of discovery. Join us on this remarkable journey through Ethiopia's Omo Valley and be transported to a world where time-honored traditions and captivating landscapes converge in a mesmerizing symphony of colors, traditions, and authenticity. ",
        ],
        lr: true,
        img1: images.omo1,
        img2: images.mursi1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Discover the abundant birdlife and wildlife that grace the scenic shores of Ethiopia's Rift Valley.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Immerse yourself in the cultural diversity of the region, engaging with tribes renowned for their unique customs and practices.",
          },
          {
            title: "Hamer Villages",
            description:
              "Witness the vibrant beauty of the Hamer people, renowned for their elaborate hairstyles, copper jewelry, and colorful costumes.",
          },
          {
            title: "The Mursi Tribe",
            description:
              "Explore the world of the Mursi, known for their warrior heritage and the distinctive lip plates worn by women.",
          },
          {
            title: "Mago National Park",
            description:
              "Journey into this national park for a glimpse into the daily lives and traditions of the Mursi tribe.",
          },
          {
            title: "Dassenech Village",

            description:
              "Cross the Omo River by traditional canoe to reach the Dassenech village and learn about their agro-pastoralist lifestyle.",
          },
          {
            title: "Karo Tribe",
            description:
              "Encounter the Karo tribe and their incredible body painting techniques, which adorn their faces and bodies with intricate patterns.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & a city tour",
          },
          {
            title: "Day 2",
            description: "Fly to Jinka",
          },
          {
            title: "Day 3",
            description:
              "Excursion to Mago National Park to visit the Mursi tribe and drive to Turmi",
          },
          {
            title: "Day 4",
            description: "Excursion to visit Dassenech and Hamer villages",
          },
          {
            title: "Day 5",
            description: "Excursion to visit the Karo tribe",
          },
          {
            title: "Day 6",
            description:
              "Drive to Arba Minch via Elbore and visit Konso village",
          },
          {
            title: "Day 7",
            description: "Boat trip on Lake Chamo & excursion to Dorze village",
          },
          {
            title: "Day 8",
            description: "Fly to Addis Ababa & Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO JINKA",
          description: [
            "A short domestic flight takes you to Jinka where you will meet your vehicle waiting at the airport. You are entering an area where the people living their authentic tribal life. Nowadays a vanishing lifestyle. More than at any other place we shouldn't forget that we are the visitors and act responsibly.",
            "In the afternoon, we visit the Jinka museum at the South Omo Research Centre to learn more about the people living in the area and we visit the Ari people who have adopted a much more 'Western' lifestyle than their neighbors we are going to meet in the coming days.",
            "Overnight in Jinka",
          ],
          image: images.omo3,
        },
        {
          title: "DAY 3: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, continue to Turmi, crossing an area where Ari, Benna, and eventually Hamer people are living.",
            "Overnight in Turmi",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 4: EXCURSION TO VISIT DASSENECH",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "You return to Turmi and spend the afternoon visiting some small Hamer villages. The Hamer people are particularly beautiful and are most distinguishable by their hair, which they style into thick braids with red mud and lard. They wear thick copper bracelets and necklaces, and elaborate costumes with cowrie shells, beads, and leather.",
            "Overnight in Turmi",
          ],
          image: images.omo1,
        },
        {
          title: "DAY 5: EXCURSION TO VISIT KARA",
          description: [
            "This morning you take an excursion to Korcho and visit the Karo tribe who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other's faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Overnight in Turmi",
          ],
          image: images.karo1,
        },
        {
          title: "DAY 6: DRIVE TO ARBA MINCH VIA ELBORE",
          description: [
            "Departing Turmi after breakfast, we head for Weyto. Lying midway between Konso and Key Afar, the village is home to the Tsemai and Arbore peoples. These people are mainly farmers and pastoralists, tending their herds and growing sorghum and maize and supplementing it with honey.",
            "Continuing from here, we cross the Weyto Valley and head for Konso. After lunch in Karat-Konso village, we meet the Konso people with their maze-like villages and terraces for agriculture. They are also well known for their Waqa stelae, grave markers for the brave and important men of this people. The cultural landscape of Konso is the youngest World Heritage Site in Ethiopia.",
            "Then you proceed to Arba Minch.",
            "Overnight in Arba Minch",
          ],
          image: images.erbore1,
        },
        {
          title: "DAY 7: BOAT TRIP ON LAKE CHAMO & EXCURSION TO DORZE",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles, and hippos as well as many beautiful aquatic birds.",
            "In the afternoon, drive from Arba Minch to the highland village of Dorze. They are one of the small segments of ethnical groups in southern Ethiopia. Once warriors, the Dorze have now turned to farming and weaving to earn a living. Their success in the field of weaving has been phenomenal and the Dorze name is synonymous with best-woven cotton cloth. Monday is market day and well worth a visit.",
            "Overnight in Arba Minch",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 8: FLY TO ADDIS ABABA & DEPARTURE",
          description: [
            "You will have this morning at your leisure. At noon transfer you to the airport for your flight to Addis. On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch.",
            "You have the afternoon free for shopping in Addis Ababa.",
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 2,
    title: "Ethiopia's Enigmatic Tribes",
    index: false,
    image: images.karo1,
    description: "A Journey through Cultural Diversity and Natural Splendor",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopia's Enigmatic Tribes",
        subtitle: "A Journey through Cultural Diversity and Natural Splendor",
        description: [
          "Embark on a captivating expedition to Ethiopia's Omo Valley, where a tapestry of ancient tribes and breathtaking landscapes awaits. This itinerary is tailor-made for the intrepid traveler with a passion for exploring indigenous tribes and their rich heritage. This extraordinary journey will immerse you in the cultural diversity and vibrant traditions of the region, as you encounter the renowned Hamer people, adorned in their distinctive attire and mesmerizing hairstyles, and witness the Mursi tribe's captivating lip plates.",
          "Amidst the scenic beauty of Rift Valley Lakes and the lush greenery surrounding Arba Minch, you'll delve into the traditional lifestyle of the Dorze, famed for their exceptional weaving skills. Journey through picturesque villages, such as Konso and Turmi, where the customs of the Karo and Dassenech tribes will captivate your senses.",
          "As you explore the wildlife-rich Mago National Park, you'll gain a profound appreciation for the unique culture and natural wonders that make Ethiopia's Omo Valley an unrivaled destination. Join us on this unforgettable voyage of discovery and be forever touched by the enchantment of Ethiopia's enigmatic tribes and awe-inspiring landscapes. ",
        ],
        lr: true,
        img1: images.omo1,
        img2: images.mursi1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Explore the scenic beauty of Ethiopia's Rift Valley and its abundant birdlife and wildlife.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Engage with a region that boasts unparalleled cultural diversity, with the opportunity to interact with various indigenous tribes.",
          },
          {
            title: "Hamer Villages",
            description:
              "Experience the highly adorned Hamer people and their intricate braided hairstyles, copper jewelry, and vibrant costumes.",
          },
          {
            title: "The Mursi Tribe",
            description:
              "Encounter the renowned Mursi tribe, famous for their iconic lip plates and distinct cultural traditions.",
          },
          {
            title: "Boat Trip on Lake Chamo",
            description:
              "Enjoy a relaxing boat trip to spot wildlife, including crocodiles, hippos, and aquatic birds.",
          },
          {
            title: "Karo Tribe",
            description:
              "Visit the Karo tribe and witness their exceptional body painting techniques, showcasing incredible patterns on their faces and bodies.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & City Tour",
          },
          {
            title: "Day 2",
            description: "Fly to Arba Minch & visit Dorze village",
          },
          {
            title: "Day 3",
            description: "Boat trip on Lake Chamo & drive to Turmi via Konso",
          },
          {
            title: "Day 4",
            description: "Excursion to the Kara tribe & visit Hamer villages",
          },
          {
            title: "Day 5",
            description: "Excursion to Dassenech village & drive to Jinka",
          },
          {
            title: "Day 6",
            description: "Excursion to Mago National Park & fly to Addis Ababa",
          },
          {
            title: "Day 7",
            description: "Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO ARBA MINCH & VISIT DORZE VILLAGE",
          description: [
            "A short domestic flight takes you to the famous lakeside town of Arba Minch where you will meet your vehicle waiting at the airport.",
            "Then you drive to the highland village of Dorze. They are one of the small segments of ethnical groups in southern Ethiopia. Once warriors, the Dorze have now turned to farming and weaving to earn a living. Their success in the field of weaving has been phenomenal and the Dorze name is synonymous with best-woven cotton cloth. Monday is market day and well worth a visit.",
            "Return to Arba Minch. Overnight in Arba Minch",
          ],
          image: images.konso1,
        },
        {
          title: "DAY 3: DRIVE TO TURMI VIA KONSO & EXCURSION TO KARA",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles and hippos, as well as beautiful aquatic birds.",
            "Leaving Arba Minch behind, you drive to Turmi through dramatic scenery towards the heartland of the tribes of the South Omo Valley. En route, you stop at the village of Konso who are known for their distinctive religious and cultural traditions.",
            "In the afternoon, you take an excursion to Korcho and visit the Karo tribe who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other's faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Return to Turmi. Overnight in Turmi",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 4: EXCURSION TO VISIT DASSENECH & DRIVE TO JINKA",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "Having lunch in Turmi, drive to Jinka, crossing an area where Hammer, Benna, and eventually Ari people are living.",
            "Overnight in Jinka",
          ],
          image: images.omo4,
        },
        {
          title:
            "DAY 5: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE & FLY TO ADDIS ABABA",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, you transfer to Jinka airport for your flight to Addis Ababa.",
            "Overnight in Addis Ababa",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 6: DEPARTURE",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 2,
    title: "Discovering the Hidden Realms",
    index: false,
    image: images.surma1,
    description: "Ethiopia's Tribal Odyssey and Pristine Wilderness",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Discovering the Hidden Realms",
        subtitle: "Ethiopia's Tribal Odyssey and Pristine Wilderness",
        description: [
          "Embark on an extraordinary expedition through Ethiopia's captivating landscapes and delve into the rich tapestry of tribal cultures that have remained untouched by time. From the bustling streets of Addis Ababa to the serene shores of Lake Chamo, this journey will unveil the secrets of the Rift Valley Lakes, where diverse birdlife and wildlife flourish.",
          "Venture deep into the South Omo Valley, where encounters with the highly adorned Hamer and famous Mursi tribes will leave you in awe of their ancient traditions, including the mesmerizing lip plates worn by Mursi women. As you traverse the rugged terrains of Omo National Park and witness the extraordinary body paintings of the Kara tribe, prepare to be immersed in a world where nature and humanity intertwine harmoniously.",
          "Unveil the hidden realms of Ethiopia as you wander through Suri villages and traverse the coffee plantations of Jimma, before bidding farewell to this remarkable journey. Join us as we uncover the captivating beauty and cultural richness of Ethiopia's tribal odyssey and pristine wilderness.",
        ],
        lr: true,
        img1: images.omo3,
        img2: images.gambella2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Discover the abundant birdlife and wildlife in the picturesque Rift Valley region.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Engage with the unique cultural diversity of Ethiopia's indigenous tribes, from the Hamer and Mursi to the Suri and Kara.",
          },
          {
            title: "Mursi Tribe",
            description:
              "Experience the renowned Mursi tribe and witness their fascinating lip plates, symbolizing beauty and identity.",
          },
          {
            title: "Hamer Villages",
            description:
              "Immerse yourself in the adorned Hamer villages, known for their intricate braided hairstyles, copper jewelry, and vibrant costumes.",
          },
          {
            title: "Omo National Park",
            description:
              "Explore the pristine wilderness and diverse ecosystems of the Omo National Park, home to rich flora and fauna.",
          },
          {
            title: "Suri",
            description:
              "Unveil the hidden realms of Ethiopia as you wander through Suri villages",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & City Tour",
          },
          {
            title: "Day 2",
            description: "Fly to Arba Minch & visit Dorze village",
          },
          {
            title: "Day 3",
            description: "Boat trip on Lake Chamo & drive to Jinka",
          },
          {
            title: "Day 4",
            description: "Excursion to Mursi & drive to Turmi",
          },
          {
            title: "Day 5",
            description:
              "Excursion to Dassenech & visit Hamer in the afternoon",
          },
          {
            title: "Day 6",
            description: "Drive to Omo National Park en route visit Kara",
          },
          {
            title: "Day 7",
            description: "Drive to Kibish and base here for three nights",
          },
          {
            title: "Day 8",
            description:
              "Explore Kibish and spend more time with the Suri tribe",
          },
          {
            title: "Day 9",
            description:
              "Explore Kibish and further immerse in the Suri culture",
          },
          {
            title: "Day 10",
            description: "Drive to Mizan",
          },
          {
            title: "Day 11",
            description: "Drive to Jimma",
          },
          {
            title: "Day 12",
            description: "Fly to Addis Ababa & Departure",
          },
          {
            title: "Day 13",
            description: "Departure from Addis Ababa",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO ARBA MINCH & VISIT DORZE VILLAGE",
          description: [
            "A short domestic flight takes you to the famous lakeside town of Arba Minch where you will meet your vehicle waiting at the airport.",
            "Then you drive to the highland village of Dorze. They are one of the small segments of ethnical groups in southern Ethiopia. Once warriors, the Dorze have now turned to farming and weaving to earn a living. Their success in the field of weaving has been phenomenal and the Dorze name is synonymous with best-woven cotton cloth. Monday is market day and well worth a visit.",
            "Return to Arba Minch. Overnight in Arba Minch",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 3: DRIVE TO JINKA VIA KONSO",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles and hippos, as well as beautiful aquatic birds.",
            "Leaving Arba Minch behind, you drive to Jinka through dramatic scenery towards the heartland of the tribes of the South Omo Valley. En route, you stop at the village of Konso who are known for their distinctive religious and cultural traditions.",
            "After lunch, continue your drive towards Jinka. Overnight in Jinka",
          ],
          image: images.konso1,
        },
        {
          title: "DAY 4: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, continue to Turmi, crossing an area where Ari, Benna, and eventually Hamer people are living. Overnight in Turmi",
          ],
          image: images.mursi1,
        },
        {
          title:
            "DAY 5: EXCURSION TO VISIT DASSENECH & DRIVE TO OMO NATIONAL PARK",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "You return to Turmi and spend the afternoon visiting some small Hamer villages. The Hamer people are particularly beautiful and are most distinguishable by their hair, which they style into thick braids with red mud and lard. They wear thick copper bracelets and necklaces, and elaborate costumes with cowrie shells, beads, and leather. Overnight in Turmi",
          ],
          image: images.omo4,
        },
        {
          title: "DAY 6: EXPLORE KARA TRIBE & DRIVE TO OMO NATIONAL PARK",
          description: [
            "This morning you take an excursion to Korcho and visit the Karo tribe, who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other's faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Leaving Korcho, we drive through the jungle and enter Omo National Park. There are no roads as such but we should arrive at the Park headquarters by late afternoon, in time for a short game drive. Overnight in Omo National Park Camping",
          ],
          image: images.karo1,
        },
        {
          title: "DAY 7: EXPLORE SURI TRIBE IN KIBISH",
          description: [
            "We continue on rough roads through the forest and open savanna land to Kibish.",
            "Passing through small villages of Suri, you will finally arrive in Kibish, where you will be camping for the next two nights.",
            "Overnight in Kibish Camping",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 8 & 9: INTERACT WITH SURI TRIBE IN KIBISH",
          description: [
            "Spending our next two days here will give us ample opportunities to explore a little more of this region in some depth. The Suri are pastoralists, placing much value on their cattle, which they protect vigorously against theft from neighboring tribes. The Surma, however, also steal livestock from their enemies, and in recent times there has been more pressure on their grazing lands due to input from people from adjacent Sudan who have been displaced by civil war, resulting in not-infrequent fighting in the area.",
            "We will take a break from the vehicles today and do some exploring on foot amongst the nearby Surma villages.",
            "Overnight in Kibish Camping",
          ],
          image: images.suri1,
        },
        {
          title: "DAY 10: DRIVE TO MIZAN",
          description: [
            "This morning is an exciting full-day drive to Mizan Teferi. You will have the afternoon to explore the local market at Mizan.",
            "Overnight in Mizan Teferi",
          ],
          image: images.kafta1,
        },
        {
          title: "DAY 11: DRIVE TO JIMMA",
          description: [
            "This morning is an exciting full-day drive to Jimma. This route takes us through a landscape, much of which is dominated by coffee plantations.",
            "Jimma, the largest city in southwestern Ethiopia and inhabited by Oromo, Kefecho, and Kulo people, is our destination for the evening. It used to be the capital of the former Kaffa Province, and it is this region which is recognized as the home of the Coffee arabica, or coffee.",
            "Overnight in Jimma",
          ],
          image: images.kaffa2,
        },
        {
          title: "DAY 12: FLY TO ADDIS ABABA & DEPARTURE",
          description: [
            "After an enjoyable breakfast, you transfer to Jimma airport for your flight to Addis Ababa. You have the afternoon at leisure and possible to do shopping in the city.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 13: DEPARTURE",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 2,
    title: "Unveiling Ethiopia's Tribal Tapestry",
    index: false,
    image: images.hamer2,
    description: "Cultural Encounters and Scenic Splendors",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Unveiling Ethiopia's Tribal Tapestry",
        subtitle: "Cultural Encounters and Scenic Splendors",
        description: [
          "Embark on a captivating journey through the diverse landscapes and vibrant cultures of Ethiopia's enigmatic South. This extraordinary expedition will immerse you in the awe-inspiring beauty of Rift Valley Lakes, where a plethora of birdlife and wildlife thrive. Prepare to be captivated by the cultural tapestry of the region as you encounter the highly adorned Hamer villages and the famous Mursi tribe with their mesmerizing lip plates.",
          "Traverse the dramatic scenery of the South Omo Valley, visiting the Karo and Dassenech tribes known for their unique body painting and agro-pastoralist lifestyles. From the archaeological wonders of Konso to the serene shores of Lake Chamo, every moment of this journey will leave you spellbound.",
          "Experience the warm hospitality of Arba Minch and Hawassa, and indulge in the vibrant flavors of Ethiopia's renowned coffee plantations. Join us on this extraordinary adventure as we unveil the tribal treasures and lakeside wonders of Ethiopia's enigmatic south. ",
        ],
        lr: true,
        img1: images.hamer2,
        img2: images.suri1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Discover the remarkable birdlife and diverse wildlife found in the stunning Rift Valley Lakes region.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Immerse yourself in the unique cultural diversity of Ethiopia's indigenous tribes and engage with their customs, rituals, and vibrant traditions.",
          },
          {
            title: "Hamer Villages",
            description:
              "Visit the highly adorned Hamer villages, where locals showcase their elaborate hairstyles, copper jewelry, and vibrant costumes.",
          },
          {
            title: "Mursi Tribe",
            description:
              "Encounter the renowned Mursi tribe and gain insight into their ancient warrior traditions and the intriguing practice of lip plate adornment.",
          },
          {
            title: "Scenic Splendors",
            description:
              "Journey through picturesque landscapes, from the majestic shores of Lake Chamo to the dramatic vistas of Mago National Park.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa and transfer to the hotel.",
          },
          {
            title: "Day 2",
            description:
              "Drive to Arba Minch, passing through scenic mountain plateaus and stopping at archaeological sites en route.",
          },
          {
            title: "Day 3",
            description:
              "Embark on a boat trip on Lake Chamo, spotting wildlife, and then drive to Jinka through stunning landscapes.",
          },
          {
            title: "Day 4",
            description:
              "Explore Mago National Park and visit the iconic Mursi tribe, renowned for their lip plates.",
          },
          {
            title: "Day 5",
            description:
              "Visit the Dassenech tribe, known for their agro-pastoralist lifestyle, and experience the unique culture of the Hamer people.",
          },
          {
            title: "Day 6",
            description:
              "Venture to Korcho and immerse yourself in the vibrant body paintings and distinctive hairstyles of the Kara tribe.",
          },
          {
            title: "Day 7",
            description:
              "Drive back to Arba Minch, passing through the Tsemai and Arbore villages along the way.",
          },
          {
            title: "Day 8",
            description:
              "Continue your journey to Yirgalem, enjoying breathtaking views and visiting Senkele Game Sanctuary.",
          },
          {
            title: "Day 9",
            description:
              "Drive to Hawassa, where you can explore the fish market and enjoy leisure time by the lake.",
          },
          {
            title: "Day 10",
            description:
              "Embark on a scenic drive to Addis Ababa, visiting the stunning lakes of Abijata, Shalla, Langano, and Zeway en route.",
          },
          {
            title: "Day 11",
            description:
              "Departure from Addis Ababa, bidding farewell to the cultural wonders of Ethiopia.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: DRIVE TO ARBA MINCH",
          description: [
            "Early this morning, after breakfast, commence your private driving to the famous lake-side town of Arba Minch. The drive will pass through high mountain plateaus, scenic landscapes, and the beautiful villages of Gurage and Wolayita; en route stop at the archaeological site of Melka Kunture and the stelae field of Tiya. Having lunch stop en route, you continue driving to Arba Minch. It and the surrounding area are inhabited by the people of the Gamo tribe, originally nomads but now farmers. The last section of this drive offers magnificent views of Lake Abaya, surrounded by mountains.",
            "Overnight in Arba Minch",
          ],
          image: images.hawassa1,
        },
        {
          title: "DAY 3: DRIVE TO JINKA VIA KONSO",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles, and hippos as well as beautiful aquatic birds.",
            "Leaving Arba Minch behind, you drive to Jinka through dramatic scenery towards the heartland of the tribes of the South Omo Valley. En route, you stop at the village of Konso who are known for their distinctive religious and cultural traditions. After lunch continue your drive towards Jinka overnight.",
            "Overnight in Jinka",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 4: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, continue to Turmi, crossing an area where Ari, Benna, and eventually Hamer people are living.",
            "Overnight in Turmi",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 5: EXCURSION TO VISIT DASSENECH",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "You return to Turmi and spend the afternoon visiting some small Hamer villages. The Hamer people are particularly beautiful and are most distinguishable by their hair, which they style into thick braids with red mud and lard. They wear thick copper bracelets and necklaces, and elaborate costumes with cowrie shells, beads, and leather.",
            "Overnight in Turmi",
          ],
          image: images.omo3,
        },
        {
          title: "DAY 6: EXCURSION TO VISIT KARA",
          description: [
            "This morning you take an excursion to Korcho and visit the Karo tribe who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other's faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Overnight in Turmi",
          ],
          image: images.karo1,
        },
        {
          title: "DAY 7: DRIVE TO ARBA MINCH VIA ELBORE",
          description: [
            "Departing Turmi after breakfast we head for Weyto. Lying midway between Konso and Key Afar, the village is home to the Tsemai and Arbore peoples. These people are mainly farmers and pastoralists, tending their herds and growing sorghum and maize and supplementing it with honey.",
            "Continuing from here we cross the Weyto Valley and head for Konso for lunch. Then you proceed to Arba Minch.",
            "Overnight in Arba Minch",
          ],
          image: images.erbore1,
        },
        {
          title: "DAY 8: DRIVE TO YIRGALEM",
          description: [
            "You continue your journey on the bottom of the Rift Valley, and close to your destination, you enter the green and fertile hills where a lot of the famous Ethiopian coffee is grown. En route, you visit Senkele Game Sanctuary where we have a good chance to find the endemic Swayne's hartebeest.",
            "You stay at the Aregash Lodge in Yirgalem, situated at a coffee plantation. The lodge is a fine example of an eco-lodge. The huts are built in the same style as the surrounding Sidamo people. Delicious organic, homegrown, food is served in the restaurant.",
            "Overnight in Yirgalem",
          ],
          image: images.kaffa2,
        },
        {
          title: "DAY 9: DRIVE TO HAWASSA",
          description: [
            "It is a short drive to Hawassa, where we visit the fish market with many birds around, waiting to get their share of the catch of the day. An optional boat trip is available to explore the lake. The afternoon is spending at leisure at our lovely resort.",
            "Overnight in Hawassa",
          ],
          image: images.hawassa1,
        },
        {
          title: "DAY 10: DRIVE TO ADDIS ABABA",
          description: [
            "Enjoy breakfast early this morning, and depart early for the Fish Market of Hawassa. Afterward, drive towards Addis Ababa, visiting the region's lakes en route. The lakes of Abijata and Shalla are particularly stunning. Also visit the lakes of Abijata, Shalla, and Zeway (dependent on water levels) en route.",
            "Overnight in Hawassa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 11: DEPARTURE",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 1,
    experience: 3,
    title: "Meskel Marvels",
    index: false,
    image: images.addis6,
    description: "Celebrating Ethiopia's Religious and Cultural Treasures",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Meskel Marvels",
        subtitle: "Celebrating Ethiopia's Religious and Cultural Treasures",
        description: [
          "Embark on a remarkable journey through Ethiopia to witness the vibrant celebration of Meskel, an ancient festival marking the finding of the True Cross. This carefully curated itinerary combines the grandeur of Meskel festivities with the exploration of Ethiopia's historical and natural wonders. From the bustling capital of Addis Ababa to the rock-hewn churches of Lalibela and the castles of Gonder, experience the rich cultural heritage and architectural marvels of this captivating land.",
          'Marvel at the breathtaking landscapes of the Simien Mountains, home to endemic wildlife, and immerse yourself in the ancient history of Axum. This journey promises a unique blend of festive traditions, awe-inspiring monuments, and unforgettable experiences. Let "Ethiopian Treasures" be your guide to an unforgettable voyage, where the past intertwines with the present, and the beauty of Ethiopia unfolds at every turn.',
        ],
        lr: true,
        img1: images.addis5,
        img2: images.addis6,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Meskel Celebration",
            description:
              "Experience the vibrant festivities of Meskel, witnessing the Demera being lit and participating in colorful processions and religious rituals.",
          },
          {
            title: "Addis Ababa",
            description:
              "Explore the dynamic capital city, with its intriguing museums, lively markets, and iconic landmarks, such as the Holy Trinity Cathedral.",
          },
          {
            title: "Lake Tana",
            description:
              "Visit isolated churches on the serene shores of Lake Tana, accessible by a scenic boat ride, and immerse yourself in the rich spiritual traditions of Ethiopia.",
          },
          {
            title: "Gonder",
            description:
              "Discover the medieval castles of Gonder, including the magnificent Fasilades Castles and the Debre Berhan Church with its stunning murals.",
          },
          {
            title: "Simien Mountains",
            description:
              "Traverse the dramatic landscapes of the Simien Mountains National Park, walking amidst stunning scenery and encountering endemic wildlife, such as the Walia ibex and Ethiopian wolf.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the rock-hewn churches of Lalibela, a UNESCO World Heritage Site, and explore the intricate architecture and religious significance of these ancient wonders.",
          },
          {
            title: "Axum",
            description:
              "Step into the ancient kingdom of Axum, home to stelae, the Queen of Sheba's Bath, and the legendary Church of Saint Mary of Zion.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and embark on a city tour, exploring its museums, cathedrals, and vibrant markets.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder, drive to the Simien Mountains National Park, and acclimatize to the breathtaking alpine landscapes.",
          },
          {
            title: "Day 3",
            description:
              "Explore the Simien Mountains, encounter endemic wildlife, and enjoy nature walks amidst stunning scenery.",
          },
          {
            title: "Day 4",
            description:
              "Return to Gonder and immerse yourself in the medieval history, visiting castles and the Debre Berhan Church.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Lalibela and delve into the mystical world of the rock-hewn churches, witnessing their architectural brilliance.",
          },
          {
            title: "Day 6",
            description:
              "Further explore the rock churches of Lalibela, uncovering their religious significance and intricate carvings.",
          },
          {
            title: "Day 7",
            description:
              "Fly to Axum, unravel the ancient mysteries of this historical city, and visit its stelae, museums, and religious sites.",
          },
          {
            title: "Day 8",
            description:
              "Return to Addis Ababa and join the vibrant celebration of the Eve of Meskel, witnessing the Demera lighting ceremony.",
          },
          {
            title: "Day 9",
            description:
              "Depart from Addis Ababa, carrying unforgettable memories of Ethiopia's cultural treasures.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family.",
            "We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title:
            "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning board a short flight to Gonder and upon arrival, you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa's largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles.",
            "Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you acclimatize your body to the altitude.",
            "Overnight in Simiens.",
          ],
          image: images.simien3,
        },
        {
          title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers. We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens.",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”.",
            "Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 7: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning, you will fly to Axum, where you are met and transferred to your hotel.",
            "You will proceed to a full-day city tour of Axum – a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek. Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures.",
            "You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 8: FLY TO ADDIS & EXPLORE SIGHTSEEING",
          description: [
            "This morning you fly back to Addis and transfer to your hotel.",
            "You will be taken to the festivities kicking off the Eve of Meskel- You'll see the Demera being lit amid much celebration.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 9: DEPART FROM ADDIS ABABA",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 3,
    title: "Genna Celebration",
    index: false,
    image: images.lalibela2,
    description: "Celebrating Ethiopian Christmas amidst Ancient Marvels",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Genna Celebration",
        subtitle: "Celebrating Ethiopian Christmas amidst Ancient Marvels",
        description: [
          "Embark on an extraordinary journey to Ethiopia, immersing yourself in the joyous festivities of Genna, the Ethiopian Christmas. This meticulously crafted itinerary takes you on a captivating exploration of Ethiopia's remarkable destinations, where ancient traditions and cultural heritage intertwine with the celebration of Genna.",
          "From the bustling streets of Addis Ababa to the awe-inspiring landscapes of the Simien Mountains, the mystical rock-hewn churches of Lalibela, and the historical treasures of Gonder and Axum, experience the enchantment of Ethiopian Christmas like never before. Witness vibrant processions, attend special church services, and immerse yourself in the spiritual atmosphere of this sacred occasion. This journey promises an unforgettable blend of cultural discovery, breathtaking scenery, and a once-in-a-lifetime celebration of Genna.",
        ],
        lr: true,
        img1: images.lalibela1,
        img2: images.lalibela3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Explore the vibrant capital city, with its museums, markets, and historic landmarks, while witnessing the fervent preparations for Genna.",
          },
          {
            title: "Lake Tana",
            description:
              "Embark on a boat excursion to visit isolated churches on the tranquil shores of Lake Tana, where traditional Genna celebrations take place.",
          },
          {
            title: "Gonder",
            description:
              'Discover the medieval castles and churches of Gonder, known as the "Camelot of Africa," and experience the blending of Genna festivities with rich historical heritage.',
          },
          {
            title: "Simien Mountains",
            description:
              "Immerse yourself in the stunning landscapes of the Simien Mountains National Park, with opportunities for scenic walks and encounters with endemic wildlife.",
          },
          {
            title: "Lalibela",
            description:
              "Attend the mesmerizing Genna Eve celebrations in Lalibela, surrounded by the rock-hewn churches, and partake in the jubilant processions and rituals.",
          },
          {
            title: "Axum",
            description:
              "Explore the ancient city of Axum, a UNESCO World Heritage Site, and witness the profound Genna traditions amid historical wonders.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and embark on a city tour, immersing yourself in the vibrant atmosphere.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder and drive to the Simien Mountains National Park, where you'll be captivated by the breathtaking alpine landscapes.",
          },
          {
            title: "Day 3",
            description:
              "Explore the stunning Simien Mountains National Park, encountering endemic wildlife and soaking in the serenity of the surroundings.",
          },
          {
            title: "Day 4",
            description:
              "Return to Gonder and delve into its medieval history, exploring the castles and churches.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Axum and embark on a full-day tour, uncovering the ancient treasures.",
          },
          {
            title: "Day 6",
            description:
              "Fly to Lalibela, the center of Genna festivities, and visit the rock-hewn churches on the Eve of Genna, witnessing the captivating ceremony and procession.",
          },
          {
            title: "Day 7",
            description:
              "Experience the jubilant Ethiopian Christmas celebrations in Lalibela, attending special church services and exploring more of the mesmerizing rock churches.",
          },
          {
            title: "Day 8",
            description:
              "Fly back to Addis Ababa and immerse yourself in the city's cultural heritage, visiting museums and markets.",
          },
          {
            title: "Day 9",
            description: "Depart from Addis Ababa.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family.",
            "We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title:
            "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning board on a short flight to Gonder and upon arrival you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa's largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles.",
            "Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatise your body to the altitude.",
            "Overnight in Simiens",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers. We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 5: FLY TO FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.  Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures.",
            "You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title:
            "DAY 6: FLY TO LALIBELA, VISIT THE ROCK HEWN CHURCHES, & ATTEND THE EVE OF THE GENNA CELEBRATION",
          description: [
            "From Axum, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Today is Ethiopian Christmas Eve in Lalibela. In the evening, head to the rock churches and gather around the edge of the churches to witness the ceremony and procession.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela1,
        },
        {
          title: "DAY 7: ATTEND GENNA CELEBRATION & EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, you will be taken to the church to witness a special church procession at Bete Mariam on the day of Ethiopian Christmas (Genna).",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 8: FLY TO ADDIS & EXPLORE SIGHTSEEING",
          description: [
            "This morning you fly back to Addis and tour more of the city. Visit the National Museum, with its many archaeological findings including the famous complete fossil remains of 3 million-year-old 'Lucy.' Explore the Merkato, one of the largest open-air markets in the world and wander the vast range of goods and artifacts. You will have time for shopping.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 9: DEPART FROM ADDIS ABABA",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 3,
    title: "Sacred Journeys",
    index: false,
    image: images.axum10,
    description:
      "Exploring Ancient Marvels and Celebrating Palm Sunday in Ethiopia",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Sacred Journeys",
        subtitle:
          "Exploring Ancient Marvels and Celebrating Palm Sunday in Ethiopia",
        description: [
          "Embark on a sacred pilgrimage to Ethiopia, immersing yourself in the vibrant celebrations of Palm Sunday in the ancient city of Axum. This carefully curated itinerary takes you on a remarkable adventure, unveiling the rich cultural heritage and historical wonders of Ethiopia. From the bustling streets of Addis Ababa to the majestic rock-hewn churches of Lalibela, and finally, the spiritual ambiance of Axum, experience the profound significance of Palm Sunday amidst ancient marvels.",
          "Witness the vibrant processions, attend special church services, and explore the awe-inspiring landmarks that have shaped Ethiopia's religious identity. This journey promises a unique blend of spiritual enrichment, cultural discovery, and the unforgettable celebration of Palm Sunday in Axum.",
        ],
        lr: true,
        img1: images.axum10,
        img2: images.axum9,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in the vibrant capital, exploring its museums, markets, and landmarks.",
          },
          {
            title: "Lake Tana",
            description:
              "Embark on a boat excursion to visit isolated churches on the tranquil shores of Lake Tana, immersing yourself in the spiritual essence of Ethiopian Christianity.",
          },
          {
            title: "Gonder",
            description:
              "Discover the medieval castles and churches of Gonder, known as the 'Camelot of Africa.'",
          },
          {
            title: "Simien Mountains",
            description:
              "Take a scenic walk in the breathtaking landscapes of the Simien Mountains.",
          },
          {
            title: "Lalibela",
            description:
              "Explore the awe-inspiring rock-hewn churches of Lalibela, a UNESCO World Heritage Site.",
          },
          {
            title: "Axum",
            description:
              "Attend the vibrant Palm Sunday processions and church services in Axum, the heart of Ethiopian Christianity, and explore the historical treasures of this ancient city.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa and embark on a city tour.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder and visit the royal enclosure and Church of Debre Birhan.",
          },
          {
            title: "Day 3",
            description:
              "Fly to Lalibela and explore the magnificent rock-hewn churches.",
          },
          {
            title: "Day 4",
            description:
              "Discover more of Lalibela's hidden treasures, including the cave church of Yemrhan Kristos.",
          },
          {
            title: "Day 5",

            description:
              "Fly to Axum, the cradle of Ethiopian Christianity, and explore the historical landmarks of Axum, including the stelae and the Church of St. Mary of Zion. Later join us to witness the Eve of Palm Sunday celebrations in this ancient city.",
          },
          {
            title: "Day 6",
            description:
              "In the morning join Palm Sunday processions and celebrations in Axum, a spiritual experience like no other.",
          },
          {
            title: "Day 7",
            description: "Fly back to Addis Ababa and depart.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO GONDER",
          description: [
            "This morning board a short flight to Gonder, upon arrival transfer to your hotel. You will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 3: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 4: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela that include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 5: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before you head to attend the festivities of the Eve of Palm Sunday.",
            "Today is the main Palm Sunday; you will be taken to witness the morning processions and celebrations. During this important festival day, the whole city comes alive in celebration, with the Church of St Mary of Zion at the center of the festivities.",
            "After lunch, you head to the Queen of Sheba's Bath. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek. Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum5,
        },
        {
          title: "DAY 6: ATTEND PALM SUNDAY & EXPLORE SIGHTSEEING",
          description: [
            "Today is the main Palm Sunday; you will be taken to witness the morning processions and celebrations. During this important festival day, the whole city comes alive in celebration, with the Church of St Mary of Zion at the center of the festivities.",
            "After lunch, you head to the Queen of Sheba's Bath. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.  Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum10,
        },
        {
          title: "DAY 7:  DEPART FROM ADDIS ABABA",
          description: [
            "This morning take a flight back to Addis. You will have the afternoon at leisure. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 3,
    title: "Hidar Tsion in Axum",
    index: false,
    image: images.axum11,
    description:
      "Unveiling Ethiopia's Ancient Treasures and Sacred Celebrations",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Hidar Tsion in Axum",
        subtitle:
          "Unveiling Ethiopia's Ancient Treasures and Sacred Celebrations",
        description: [
          'Embark on a journey that transcends time and immerses you in the captivating heritage of Ethiopia. Our meticulously crafted itinerary, "Hidar Tsion in Axum," unveils a tapestry of wonders, where ancient history and spiritual traditions intertwine.',
          'From the bustling streets of Addis Ababa, adorned with jacaranda trees, to the majestic castles of Gondar, known as "The Camelot of Africa," and the mystical rock-hewn churches of Lalibela, a UNESCO World Heritage Site, this expedition will transport you to a realm of awe-inspiring beauty.',
          "As the journey unfolds, your path leads to Axum, where the air is charged with anticipation for the eve and grand celebration of St. Mary Zion, known as Hidar Tsion. Witness the vibrant processions, immerse yourself in the rich cultural tapestry, and explore the fascinating historical treasures of Axum, including the enigmatic Stelae and the Queen of Sheba's Bath. Let Sawla Tours guide you through this extraordinary odyssey, where ancient wonders come alive amidst breathtaking landscapes and where the spirit of Ethiopia reveals itself in all its glory. ",
        ],
        lr: true,
        img1: images.axum6,
        img2: images.axum7,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in the vibrant capital, exploring its museums, markets, and cultural landmarks as you prepare for the sacred pilgrimage ahead.",
          },
          {
            title: "Lake Tana",
            description:
              "Embark on a boat excursion to visit isolated churches on the tranquil shores of Lake Tana.",
          },
          {
            title: "Gonder",
            description:
              "Delve into the medieval history and cultural heritage of Gonder, known as the 'Camelot of Africa,'",
          },
          {
            title: "Simien Mountains",
            description:
              "Take a scenic walk amidst stunning landscapes in the Simien Mountains.",
          },
          {
            title: "Lalibela",
            description:
              "Explore the awe-inspiring rock-hewn churches of Lalibela, a UNESCO World Heritage Site, feeling the spiritual energy intensify.",
          },
          {
            title: "Axum",
            description:
              "Attend the vibrant celebrations of Hidar Tsion in Axum, the heart of Ethiopian Christianity, and immerse yourself in the spiritual fervor of this sacred festival.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa and embark on a city tour.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder and visit the royal enclosure and Church of Debre Birhan.",
          },
          {
            title: "Day 3",
            description:
              "Fly to Lalibela and explore the magnificent rock-hewn churches.",
          },
          {
            title: "Day 4",
            description:
              "Discover more of Lalibela's hidden treasures, including the cave church of Yemrhan Kristos.",
          },

          {
            title: "Day 5",
            description:
              "Fly to Axum and partake in the celebrations of the Eve of Hidar Tsion, witnessing the city come alive with vibrant processions and rituals.",
          },
          {
            title: "Day 6",
            description:
              "Experience the vibrant celebration of Hidar Tsion in Axum, attending special church services and exploring the city's historical landmarks.",
          },
          {
            title: "Day 7",
            description: "Fly back to Addis Ababa and depart.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family.",
            "We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2:  FLY TO GONDER",
          description: [
            "This morning board a short flight to Gonder, upon arrival transfer to your hotel. You will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 3: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 4: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 5: FLY TO FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before you head to attend the festivities of the Eve of Celebration of St. Mary Zion (Hidar Tsion).",
          ],
          image: images.axum4,
        },
        {
          title:
            "DAY 6: ATTEND CELEBRATION OF ST. MARY ZION & EXPLORE SIGHTSEEING",
          description: [
            "Today is the main St. Mary of Zion; you will be taken to witness the morning processions and celebrations. During this important festival day, the whole city comes alive in celebration, with the Church of St Mary of Zion at the center of the festivities.",
            "After lunch, you head to the Queen of Sheba's Bath. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek. Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures.",
            "You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum2,
        },
        {
          title: "DAY 7:  DEPART FROM ADDIS ABABA",
          description: [
            "This morning fly back to Addis. You will have the afternoon at leisure. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 3,
    title: "Epiphany Reverie",
    index: false,
    image: images.lalibela11,
    description: "Celebrating Timket in Colorful Addis Ababa",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Epiphany Reverie",
        subtitle: "Celebrating Timket in Colorful Addis Ababa",
        description: [
          "Embark on an extraordinary journey to Ethiopia, where ancient traditions and vibrant celebrations come alive during the enchanting festival of Timket (Commemoration of the Baptism of Christ) in Addis Ababa. This meticulously crafted itinerary invites you to immerse yourself in the rich cultural tapestry and spiritual heritage of Ethiopia.",
          "From exploring the historical wonders of Gonder and the awe-inspiring rock-hewn churches of Lalibela to experiencing the sacred city of Axum, this journey builds up to the climactic celebration of Timket in Addis Ababa. Join the exuberant processions, witness the colorful rituals, and feel the profound spiritual energy as you partake in this transformative experience.",
          "This trip promises a fusion of cultural immersion, spiritual enlightenment, and the unforgettable celebration of Timket in the vibrant capital city of Addis Ababa.",
        ],
        lr: true,
        img1: images.gonder2,
        img2: images.addis5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in the bustling capital, experiencing its vibrant markets, museums, and iconic landmarks as you prepare for the spectacular Timket celebration.",
          },
          {
            title: "Lake Tana",
            description:
              "Visit isolated churches on the serene shores of Lake Tana, accessible by a scenic boat ride, and immerse yourself in the rich spiritual traditions of Ethiopia.",
          },
          {
            title: "Gonder",
            description:
              "Discover the medieval castles of Gonder, including the magnificent Fasilades Castles and the Debre Berhan Church with its stunning murals.",
          },
          {
            title: "Simien Mountains",
            description:
              "Traverse the dramatic landscapes of the Simien Mountains National Park, walking amidst stunning scenery and encountering endemic wildlife, such as the Walia ibex and Ethiopian wolf.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the rock-hewn churches of Lalibela, a UNESCO World Heritage Site, and explore the intricate architecture and religious significance of these ancient wonders.",
          },
          {
            title: "Axum",
            description:
              "Step into the ancient kingdom of Axum, home to stelae, the Queen of Sheba's Bath, and the legendary Church of Saint Mary of Zion.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and embark on a city tour, exploring its museums, cathedrals, and vibrant markets.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder, drive to the Simien Mountains National Park, and acclimatize to the breathtaking alpine landscapes.",
          },
          {
            title: "Day 3",
            description:
              "Explore the Simien Mountains, encounter endemic wildlife, and enjoy nature walks amidst stunning scenery.",
          },
          {
            title: "Day 4",
            description:
              "Return to Gonder and immerse yourself in the medieval history, visiting castles and the Debre Berhan Church.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Lalibela and delve into the mystical world of the rock-hewn churches, witnessing their architectural brilliance.",
          },
          {
            title: "Day 6",
            description:
              "Further explore the rock churches of Lalibela, uncovering their religious significance and intricate carvings.",
          },
          {
            title: "Day 7",
            description:
              "Fly to Axum, unravel the ancient mysteries of this historical city, and visit its stelae, museums, and religious sites.",
          },
          {
            title: "Day 8",
            description:
              "Return to Addis Ababa and attend the vibrant Timket Eve celebration, witnessing the city come alive with colorful processions and rituals.",
          },
          {
            title: "Day 9",
            description:
              "Experience the grand celebration of Timket, participating in the unique ceremonies and joyful festivities before bidding farewell to Ethiopia.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO GONDER",
          description: [
            "This morning board a short flight to Gonder, upon arrival transfer to your hotel. You will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 3: EXCURSION TO THE SIMIEN MOUNTAINS",
          description: [
            "Early morning start after breakfast drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa's largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia.",
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers. We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer. Late afternoon you drive back to Gonder.",
            "Overnight in Gonder",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”.",
            "Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 7: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.  Then continue on your visit to the church of Saint Mary of Zion.",
            "A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum5,
        },
        {
          title: "DAY 8: FLY TO ADDIS & EXPLORE SIGHTSEEING",
          description: [
            "This morning you fly back to Addis and transfer to your hotel. This afternoon, you will be taken to attend the celebration of Timket Eve. Timket, also known as Timkat, is the Ethiopian term for Epiphany, a significant holiday commemorating Christ's baptism in the River Jordan observed by Christians worldwide. However, Timket holds a special place of importance in Ethiopia, where it stands as the most vibrant and momentous event of the year. Commencing on Timket Eve, which falls on January 18, eleven days after Orthodox Christmas, this festival seamlessly blends religious solemnity with secular festivities, including revelry and matchmaking.",
            "According to the Ethiopian epic known as the Kebra Negast, the Ark of the Covenant was reputedly transported from Jerusalem to Ethiopia during the first millennium BC, ultimately becoming the most revered artifact within the Ethiopian Orthodox Church.",
            "As the early afternoon descends upon Timket Eve, priests from various churches reverently carry silk-covered replicas of the Ark in a stately procession toward a nearby body of water. Accompanied by a multitude of church members and devotees numbering in the tens of thousands, the atmosphere resonates with chants, dances, drum beats, horn blasts, the rhythmic waving of prayer sticks, and the jingling of sistrums—a musical instrument reminiscent of ancient times. This spectacle evokes a scene reminiscent of the descriptions found in the Old Testament.",
            "As twilight yields to evening, the priests and devout followers engage in an all-night vigil around the Ark replicas until daybreak. Subsequently, throngs of people congregate around the water's edge. Upon the chief priest bestowing a sacred blessing upon the water, the celebration reaches its zenith. Many plunge into the water with great enthusiasm, while others eagerly await a joyous splash. Following the renewal of religious vows, some of the Ark replicas are triumphantly paraded back in a jubilant procession, mirroring the earlier festivities.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 9:  ATTEND TIMKET FESTIVAL & DEPART FROM ADDIS ABABA",
          description: [
            "Today is the most important day in the Ethiopian Orthodox calendar. Early morning you will be taken to take part in the Timket festivities. You join the Ethiopian crowds at the venue where the priests do the special procession. This is followed by a beautiful chanting and a special prayer to bless spring water will be blessed by Archbishop and sprinkled over the crowd.",
            "You head to your hotel to rest and freshen up. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis5,
        },
      ],
    },
  },
  {
    id: 1,
    experience: 4,
    title: "Simien Splendor",
    index: false,
    image: images.simien4,
    description: "Trekking Ethiopia's North and Celebrating Culture",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Simien Splendor",
        subtitle: "Trekking Ethiopia's North and Celebrating Culture",
        description: [
          "Set forth on a quest on an unforgettable journey through the breathtaking landscapes and rich cultural heritage of Ethiopia. This meticulously crafted itinerary combines the thrill of trekking in the Simien Mountains with the exploration of historical gems such as Axum, Lalibela, and Gonder.",
          "From the ancient stelae of Axum to the magnificent rock-cut churches of Lalibela, immerse yourself in Ethiopia's fascinating history and spirituality. The highlight of this journey is the exhilarating trek through the Simien Mountains, where you'll witness awe-inspiring vistas, encounter endemic wildlife, and camp under starlit skies.",
          "This adventure culminates in the vibrant city of Addis Ababa, where you'll witness the fusion of tradition and celebration during the final days of your trip. Prepare for a journey of natural splendor, cultural immersion, and unforgettable experiences.",
        ],
        lr: true,
        img1: images.simien1,
        img2: images.simien3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in Ethiopia's capital, exploring its bustling markets, museums, and vibrant cityscape.",
          },
          {
            title: "Axum",
            description:
              "Uncover the ancient city of Axum, home to granite stelae, the subterranean Tomb of Ramhai, and the legendary Queen of Sheba's Bath.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the remarkable rock-hewn churches of Lalibela, a UNESCO World Heritage Site, and delve into the mysteries of Ethiopian Christianity.",
          },
          {
            title: "Gonder",
            description:
              "Explore the medieval castles of Gonder, including the Royal Enclosure and the breathtaking Debre Berhan Selassie Church.",
          },
          {
            title: "Simien Mountains",
            description:
              "Trek through the majestic Simien Mountains National Park, encountering stunning landscapes, endemic wildlife like the gelada baboon and walia ibex, and awe-inspiring viewpoints.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and immerse yourself in the vibrant capital city.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Axum and explore the UNESCO World Heritage Site, discovering ancient stelae and the legendary Queen of Sheba's Bath.",
          },
          {
            title: "Day 3",
            description:
              "Fly to Lalibela and marvel at the extraordinary rock-hewn churches, delving into the spiritual heart of Ethiopia.",
          },
          {
            title: "Day 4",
            description:
              "Explore more of Lalibela's remarkable churches, uncovering their intricate details and spiritual significance.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Gonder and embark on a scenic drive to the Simien Mountains National Park, preparing for an exhilarating trek.",
          },
          {
            title: "Day 6",
            description:
              "Begin your trek from Sankaber, immersing yourself in the stunning landscapes of the Simien Mountains.",
          },
          {
            title: "Day 7",

            description:
              "Continue your trek to Geech, encountering endemic wildlife and enjoying panoramic views.",
          },
          {
            title: "Day 8",
            description:
              "Trek to Chenek, where you'll have the chance to spot walia ibex and gelada baboons.",
          },
          {
            title: "Day 9",
            description:
              "Drive back to Gonder, savoring the last views of the Simien Mountains, and explore the historical treasures of the city.",
          },
          {
            title: "Day 10",
            description:
              "Fly back to Addis Ababa, with free time for shopping and reflecting on your incredible journey.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 2: FLY AXUM & EXPLORE THE CITY",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum. You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath. This large reservoir is an excellent place to observe the local women collecting water for washing.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.  After having a lunch break, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum4,
        },
        {
          title: "DAY 3: FLY TO LALIBELA",
          description: [
            "From Axum, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th  wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 4: EXPLORE THE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 5: FLY TO GONDER & DRIVE TO SIMIEN TREK TO SANKABER",
          description: [
            "This morning board a short flight to Gonder, upon arrival transfer to your hotel. You will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder4,
        },
        {
          title:
            "DAY 6: DRIVE TO SIMIEN MOUNTAINS N.P. VIA DEBARK; PM TREK TO SANKABER",
          description: [
            "Today, you drive to Debark, the village base for hiking in the Simien Mountains. The Simien range lies north of Gondar and many of the peaks rise above 4,000m with the highest being Mount Ras Dashen, at 4,543m, the fifth highest in Africa. The mountains are crisscrossed with tracks made by local people traveling from village to village or moving their animals to fresh pastures. The combination of these tracks and the spectacular scenery make for excellent walking.",
            "You start your trek with a 2-3 hour walk to your first camp, Sankaber. During the entire trek, we may spend each night in a different place. The circuits walked will vary depending on local conditions.",
            "Overnight: Camping, Sankaber",
          ],
          image: images.simien6,
        },
        {
          title: "DAY 7: TREK TO GEECH",
          description: [
            "You trek to Geech camp from Sankaber (approx. 5-6 hours), with the possibility of seeing Gelada baboons and red-hot poker plants en route. The gelada baboon is endemic to Ethiopia and has adapted to living on the nearly vertical cliff faces. You may also see the Jinbar River waterfalls today that plummet into Geech Abyss. The Abyss is a vast canyon cut into the main wall of the escarpment. Midday you stop for a picnic pack lunch overlooking the waterfall.",
            "Overnight: Camping, Geech",
          ],
          image: images.simien4,
        },
        {
          title: "DAY 8: TREK TO CHENEK",
          description: [
            "We aim to trek to Chenek camp today on good piste via Inatye (4070m) and along an escarpment (approx. 5-6 hours). From this point, there are spectacular views of the lowlands and across the Simien range with rock spires and prominent mesas. Your highest point today, where you will have lunch is Inatye at 4070m/13,353ft. This takes approx. 4 hours from Geech campsite. This exciting walk traverses the Jinbar River and provides us with fantastic views. You may choose to take the opportunity to freshen up in the nearby stream south of camp.",
            "You overnight at the thyme-covered campsite at Chenek, where we have one last chance to see Lammergeyer, gelada baboon, and Walia ibex.",
            "Overnight: Camping, Chenek",
          ],
          image: images.simien5,
        },
        {
          title: "DAY 9: DRIVE TO GONDER & EXPLORE",
          description: [
            "This morning's short walk takes you to the opposite of the camp which offers a superb panoramic view of the surrounding area. You may be fortunate enough to spot Walia Ibex here. Then you meet the vehicle that will transport you back to Gondar (approx. 4-5 hours drive). As you drive out of the Simien Mountains, we'll have time to take in a final look at some of the most spectacular views. The afternoon will be at your leisure in Gondar.",
            "Overnight in Gonder",
          ],
          image: images.gonder5,
        },
        {
          title: "DAY 10: FLY TO ADDIS",
          description: [
            "After breakfast, you transfer to the airport and take the short flight back to Addis Ababa and transfer to your hotel. You have the afternoon free for shopping in Addis Ababa. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 4,
    title: "Tigray community trekking",
    index: false,
    image: images.tigray4,
    description: "Unveiling Ethiopia's Ancient Marvels and Majestic Landscapes",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Tigray community trekking",
        subtitle:
          "Unveiling Ethiopia's Ancient Marvels and Majestic Landscapes",
        description: [
          "Start a voyage on an extraordinary journey through Ethiopia, immersing yourself in its rich cultural heritage and breathtaking landscapes. This carefully curated itinerary combines the exploration of historical treasures such as Addis Ababa, Gonder, Axum, and Lalibela with the exhilaration of trekking in the Tigray region.",
          "From the bustling markets of Addis Ababa to the rock-hewn churches of Lalibela and the stunning vistas of the Simien Mountains, every step of this trip is a feast for the senses. Discover ancient civilizations, encounter endemic wildlife, witness vibrant traditions, and experience the warm hospitality of the Ethiopian people. Get ready for an unforgettable adventure that blends history, spirituality, and natural splendor.",
        ],
        lr: true,
        img1: images.tigray4,
        img2: images.tigray5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in the vibrant capital city, exploring its museums, markets, and historical landmarks.",
          },
          {
            title: "Lake Tana",
            description:
              "Take a boat ride on Lake Tana and visit isolated churches, immersing yourself in Ethiopia's spiritual heritage.",
          },
          {
            title: "Gonder",
            description:
              "Explore the Fasilades Castles and Debre Berhan Church, marveling at the architectural wonders of this medieval city.",
          },
          {
            title: "Simien Mountains",
            description:
              "Embark on a chance to walk in stunning scenery, encountering endemic wildlife like the Walia ibex and enjoying breathtaking panoramic views.",
          },
          {
            title: "Lalibela",
            description:
              "Discover the UNESCO World Heritage Site of Lalibela, home to the extraordinary rock-cut churches, a testament to Ethiopia's ancient Christian traditions.",
          },
          {
            title: "Axum",
            description:
              "Explore the ancient city of Axum, visiting stelae, the subterranean Tomb of Ramhai, and the renowned Church of Saint Mary of Zion.",
          },
          {
            title: "Tigray Region",
            description:
              "Trek through the captivating landscapes of the Tigray region, discovering remote rock-hewn churches and experiencing the unique culture of the Tigrayan people.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and immerse yourself in the vibrant capital city.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder and drive to the Simien Mountains National Park, preparing for an unforgettable trek.",
          },
          {
            title: "Day 3",
            description:
              "Explore the stunning landscapes of the Simien Mountains, encountering endemic wildlife and enjoying breathtaking views.",
          },
          {
            title: "Day 4",
            description:
              "Drive back to Gonder and embark on a sightseeing tour of the medieval castles and churches.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Lalibela and discover the remarkable rock-hewn churches, delving into the spiritual heart of Ethiopia.",
          },
          {
            title: "Day 6",
            description:
              "Continue exploring the wonders of Lalibela's rock churches, experiencing their intricate beauty and cultural significance.",
          },
          {
            title: "Day 7",
            description:
              "Fly to Axum and immerse yourself in the ancient city's historical and religious treasures.",
          },
          {
            title: "Day 8",
            description:
              "Drive to Rahya and embark on a trek to Erar, experiencing the unique Tigray culture and witnessing stunning landscapes.",
          },
          {
            title: "Day 9",
            description:
              "Trek to Gohagot, encountering picturesque villages,  wildlife, and fascinating rock-hewn churches.",
          },
          {
            title: "Day 10",
            description:
              "Trek to Shimbriti, traversing valleys, ledges, and enjoying panoramic views of the Tigray region.",
          },
          {
            title: "Day 11",
            description:
              "Drive to Gheralta and explore the magnificent rock churches in the area, marveling at their architectural wonders.",
          },
          {
            title: "Day 12",
            description:
              "Drive to Mekelle and catch a flight to Addis Ababa, reflecting on the incredible journey.",
          },
          {
            title: "Day 13",
            description:
              "Depart from Addis Ababa with lasting memories of Ethiopia's cultural and natural splendor.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title:
            "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning board a short flight to Gonder and upon arrival, you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa's largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatize your body to the altitude.",
            "Overnight in Simiens.",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers. We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years.",
            "You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area. We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder7,
        },
        {
          title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches. Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 7: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum. You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath. This large reservoir is an excellent place to observe the local women collecting water for washing.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.  After having a lunch break, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant.",
            "It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 8: DRIVE TO RAHYA & WALK TO ERAR",
          description: [
            "Today, you will transfer by road (4 hours) to Rahya en route to visit the temple of Yeha. It is the oldest of Ethiopia's antiquities beautifully set in scenic surroundings, dating back to the 5th century BC. You continue your journey into the eastern Tigray, a fascinating region containing many rock-hewn churches dating from the 8th century.",
            "You start a two hours TESFA Tigray trek from a small village called Rahya destined to Erar community guest house. You will meet your local guide here. Your luggage will be loaded on the donkeys. The most westerly guesthouse is at Erar built on an isolated section of the western escarpment with wonderful views westward to the mountains of Adwa and the Niblet pillars. Erar is located on the sandstone escarpment on the western edge of the area, also at 2,800 meters. It is a bit closer to the mountains on the Adwa side with some interesting pinnacles of rock in view to the northwest.",
            "In all the lodges, you will be greeted on arrival by your host with local bread, nuts, popcorn, tea, and coffee. You will be served with tasty local meals.",
            "Overnight in Erar community lodge",
          ],
          image: images.tigray5,
        },
        {
          title: "DAY 9: WALK FROM ERAR TO GOHAGOT",
          description: [
            "This morning after having breakfast, you walk to Gohagot. The walk takes around 5-6 hours and goes past some lovely churches – notably Debre Giorgis, which is a built-up church like that of the ancient churches of Debre Damo and Yemrehana Christos. You walk across rolling plains dotted with cypress trees. Then descend along valleys of giant candelabra cactus and aloe to reach the Valley of Debre Abay.",
            "Like the other villages of Tigray, all the small houses are surrounded by prickly pears and eucalyptus that look more or less exactly like every other house you have passed. The rocky soil atop the plateaus supports only grasses, grains, and legumes. Along the ridges, bushes of prickly pears and stalks of aloe tower grow along the stone-lined paths. The valley is more fertile ground; farmers plant their fields with garlic, onion, corn, and cabbage by irrigating small streams.",
            "After another long day of walking takes you to Gohagot. It is tucked under the cliff but above the villages. Before heading there, you visit the nearby rock church of Gohgot Eyesus, positioned above indigenous woodland at the head of the valley. This is one of beautifully cut-into-the-face sandstone.",
            "From the church, it is about an hour's walk to the guest house of Gohagot and located at an altitude of 2600 meters. Open your eyes to different birds and small animals on this day too.",
            "Overnight in Gohagot community lodge",
          ],
          image: images.tigray4,
        },
        {
          title: "DAY 10: WALK FROM GOHAGOT TO SHIMBRITI",
          description: [
            "Depart after breakfast for a day walk (approximately 5-4 hrs) to the community site-Shimbriti. From these guesthouses, it is a 5-hour walk through the valleys to Shimbriti. The first one-hour walk takes you from the plateau down to the valley. Following tracks walked by Tigrayan highlanders for the past many years, passing the villages in the valley.",
            "Then climb up escarpments, spotting rock hyraxes and birds, and continue walking along narrow, crumbling ledges with sheer drops. As you get closer to it, you come across an interesting rock tunnel that has been carved through the ridge to give villages on the western side access to the lovely rock church of Maryam Bezuhan. The church itself is an exquisite one, and the trail there hugs the mountain and winds up to the plateau on the top.",
            "The sceneries along the walk are amazingly superb. Unlike the other lodges, on the plateau where it is located, you find here small villages scattered with local stone houses. Having an overwhelming welcoming up on your arrival, you will be served tasty local and have an elaborated traditional coffee ceremony.",
            "You can take a walk along the rim of the mountain at dusk.",
            "Overnight in Shimbriti community lodge",
          ],
          image: images.tigray7,
        },
        {
          title: "DAY 11: WALK FROM SHIMBRITI TO DEGA ARBI & DRIVE TO GHERALTA",
          description: [
            "After an enjoyable breakfast, you take your last morning on a Community walk (2 hours). You will begin by descending for 1 hour, steeply at first and then more gradually, and get on the flatter plain. You pass by the small mangrove forest which grows around the church. You are likely to encounter small cattle herders here – friendly children from the local village.",
            "You will meet your driver with the car at Dega Arbi popular for a Friday weekly market. You transfer to Gheralta Lodge (1.5 hours). Spend the rest of the day at your leisure enjoying the excursions that can be arranged from the lodge. Hiking, bird watching, and visiting the nearby rock-hewn churches are all recommended from here.",
            "Overnight in Gheralta",
          ],
          image: images.tigray8,
        },
        {
          title: "DAY 12: DRIVE TO MEKELLE & FLY TO ADDIS",
          description: [
            "This morning you will drive to Mekele, passing by another number of interesting churches and towns on the way. Carrying on towards Wukro, you first visit Abreha Atsbeha church, one of the most picturesque of the churches in the area with a beautifully decorated interior, depicting biblical scenes and saints. Having a lunch break at Wukro, head to visit Wukro Cherkos, a semi-monolithic church. Inside this crucifix-shaped church, you'll see patterned pillars and carvings.",
            "Then drive to Mekelle to catch your flight to Addis Ababa.",
            "Overnight in Addis Ababa",
          ],
          image: images.tigray6,
        },
        {
          title: "DAY 13: DEPART FROM ADDIS ABABA",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 4,
    title: "Historic & Wello Community Trekking",
    index: false,
    image: images.wollo1,
    description:
      "A Journey through Ethiopia's Ancient Legacy and Cultural Riches",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Historic & Wello Community Trekking",
        subtitle:
          "A Journey through Ethiopia's Ancient Legacy and Cultural Riches",
        description: [
          "Embark on a journey through the captivating wonders of Ethiopia, where ancient traditions and breathtaking landscapes blend harmoniously. This meticulously crafted itinerary takes you on cultural exploration, from the bustling capital of Addis Ababa to the UNESCO World Heritage Sites of Lalibela's rock-hewn churches and the historical treasures of Axum.",
          "Immerse yourself in the spiritual allure of Lake Tana's monasteries and trek through the stunning scenery of the Tigray region. Witness the country's vibrant culture, encounter endemic wildlife, and marvel at architectural marvels carved from solid rock. This extraordinary adventure promises to unveil the rich tapestry of Ethiopia's heritage and its awe-inspiring natural beauty.",
        ],
        lr: true,
        img1: images.tigray4,
        img2: images.wollo1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Discover the vibrant capital city, with its bustling markets, historical landmarks, and renowned museums.",
          },
          {
            title: "Lake Tana",
            description:
              "Cruise the tranquil waters and visit isolated monasteries, adorned with ancient murals and steeped in spirituality.",
          },
          {
            title: "Gonder",
            description:
              "Explore the medieval castles and churches, including the impressive Fasilades Castles and Debre Berhan Church.",
          },
          {
            title: "Simien Mountains",
            description:
              "Embark on a chance to walk in stunning scenery, encountering endemic wildlife and enjoying panoramic views of the rugged landscapes.",
          },
          {
            title: "Lalibela",
            description:
              "Experience the architectural wonder of Lalibela's rock-hewn churches, a testament to Ethiopia's ancient Christian heritage.",
          },
          {
            title: "Axum",
            description:
              "Uncover the historical treasures of Axum, including stelae, the Queen of Sheba's Bath, and the Church of Saint Mary of Zion.",
          },
          {
            title: "Tigray Region",
            description:
              "Trek through the awe-inspiring landscapes of the Tigray region, exploring remote rock-hewn churches and immersing yourself in the local culture.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and immerse yourself in the vibrant capital city.",
          },
          {
            title: "Day 2",
            description:
              "Explore the historical and cultural landmarks of Addis Ababa.",
          },
          {
            title: "Day 3",
            description:
              "Fly to Bahir Dar and embark on a serene cruise of Lake Tana, visiting monasteries with ancient murals.",
          },
          {
            title: "Day 4",
            description:
              "Drive to the point where you will start your community trekking.Trek from Werkhaye Mariam to Mequat Mariam, witnessing stunning landscapes and rural communities.",
          },
          {
            title: "Day 5",
            description:
              "Continue the trek to Wajela, surrounded by panoramic views of the picturesque plateau.",
          },
          {
            title: "Day 6",
            description:
              "Trek to Aterow, following the escarpment edge and enjoying encounters with local communities.",
          },
          {
            title: "Day 7",
            description:
              "Drive to Lalibela, home to the extraordinary rock-hewn churches.",
          },
          {
            title: "Day 8",
            description:
              "Explore the architectural marvels of Lalibela's rock-hewn churches.",
          },
          {
            title: "Day 9",
            description:
              "Fly to Axum and delve into the historical treasures of this ancient city.",
          },
          {
            title: "Day 10",
            description:
              "Drive to the Gheralta area and visit the impressive rock churches in the region.",
          },
          {
            title: "Day 11",
            description:
              "Discover more rock churches in the Tigray region, marveling at their architectural intricacy.",
          },
          {
            title: "Day 12",
            description:
              "Drive to Mekelle, catch a flight to Addis Ababa, and reflect on the captivating journey.",
          },
          {
            title: "Day 13",
            description:
              "Depart from Addis Ababa, carrying cherished memories of Ethiopia's cultural marvels",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel for overnight accommodation. The city enjoys an excellent climate all year round, with an average temperature of 25°C (77°F). ",
            "With a multiethnic population of over 5 million, Addis Ababa is a pleasant city with wide avenues of jacaranda trees, interesting museums, and one of the largest open-air markets in Africa, known as the “Mercato”. After your long flight and a welcome briefing, you can settle into your hotel for some rest.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: EXPLORE THE CITY OF ADDIS ABABA",
          description: [
            "Today you will spend the day exploring Addis Ababa, which begins with a visit to the Holy Trinity Cathedral. It is the most important Orthodox Church in Addis Ababa and has survived many historical periods, as its interesting architecture can attest. You proceed to visit the National Museum, one of the most important museums in Africa. The museum is home to the fossilized humanoid Lucy (3.5 million year-old fossils), as well as an amazing collection of artifacts, royal items, and art.",
            "After lunch, you will continue our visit to St. George's Cathedral, built in 1896 by Emperor Menelik II. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 3: FLY TO BAHIR DAR & VISIT THE MONASTERIES ON LAKE TANA",
          description: [
            "Board a short flight to Bahir Dar where you are met and transferred to your hotel. Then you embark on a cruise of Lake Tana, the largest highland lake in Ethiopia, to visit monasteries dating back to the 14th century. Located on the forested Zege Peninsula, Azuwa Mariam is the most impressive of the southern monasteries. The walls of the church are completely covered with remarkable 16th-century murals that offer a revealing look into medieval Ethiopia.",
            "You then return to Bahir Dar for lunch at your hotel. Then you head into the colorful market. Later in the afternoon, you drive up Bezawit Hill for impressive views over the town, the Blue Nile, and of Lake Tana with its island monasteries. We aim to get here shortly before sunset to enjoy the magnificent natural light show. Afterwards, we return to our hotel.",
            "Overnight in Bahir Dar",
          ],
          image: images.bahirdar3,
        },
        {
          title: "DAY 4: TREK TO MEQUAT MARIAM",
          description: [
            "In the morning, your driver will pick you up from the hotel in Bahir Dar and transfer you to the lunch stop, Werkhaye Mariam. Enjoy a simple traditional lunch of injera & 3 vegetarian wots over coffee or tea before beginning the 3-hour walk through various villages to the escarpment edge.",
            "You will soon arrive at Mequat Mariam on the south and west-facing promontory. The guesthouse offers staggering views into the gorges below that feel the Nile system.",
            "Overnight in Mequat Mariam community lodge",
          ],
          image: images.lalibela8,
        },
        {
          title: "DAY 5: TREK TO WAJELA",
          description: [
            "Wake up to the stunning views of the guesthouse and fresh coffee. Begin today's 7-hour walk to Wajela. The walk combines sections following the escarpment edge with incredible vistas and sections across the meadows and grazing land.",
            "There are plenty of opportunities to see the communities at work. Having a lunch stop at Meskal Mikael, you then continue on the north side to the village of Wajela. Wajela Community Guesthouse is in a bucolic location in west Meket just below the top of the plateau with great views to the west and north.",
            "Overnight in Wajela community lodge",
          ],
          image: images.lalibela5,
        },
        {
          title: "DAY 6: TREK TO ATEROW",
          description: [
            "A beautiful way to start with awe-inspiring views and delicious breakfast, you head to Aterow. An enjoyable 5 hours walking, mostly along the escarpment edge with the steep basalt cliff edge eroded into protruding blocks. Stop for lunch at Gicha next to Giyorgis church before continuing the trail onto Aterow community lodge.",
            "Lunch is served by the community at Gicha by a big Giyorgis church and its lovely wooded churchyard perched on the cliff edge.",
            "Overnight in Aterow community lodge",
          ],
          image: images.tigray8,
        },
        {
          title: "DAY 7: DRIVE TO LALIBELA",
          description: [
            "This morning you have a short walk to the trail-head. You meet your vehicle that will transport you to Lalibela (approx. 2 hours drive). As you drive, you pass most through the beautiful mountains of Lasta. Lalibela is the home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level.",
            "Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches. Lalibela indeed offers a great opportunity for any traveler.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 8: EXPLORE THE ROCK CHURCHES",
          description: [
            "After breakfast, you will proceed to a full day exploration of the rock-hewn churches. You start with the visiting of the first group (or the north – western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela that include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 9: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning, you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum – a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath.",
            "This large reservoir is an excellent place to observe the local women collecting water for washing. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.",
            "After having a lunch break, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum4,
        },
        {
          title: "DAY 10: DRIVE TO GHERALTA AREA",
          description: [
            "In the morning, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "After having lunch break, you drive across the dramatic mountainous landscapes to Gheralta. On your way, you visit the Monastery of Abba Garima which houses an impressive collection of ancient crosses, crowns, other artifacts, and the oldest illustrated Christian manuscripts dated to the fifth-sixth century. You arrive at the lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.tigray7,
        },
        {
          title: "DAY 11: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, head to explore the marvelous rock churches in the Gheralta cluster. A short drive takes you to closer to the foot of Korkur Mountain. It is from here you start your hiking up to the plateau. Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches.",
            "The latter one is the smallest church and has a really beautiful view of the surrounding areas. Drive back to your lodge for lunch. In the afternoon, drive to visit Mariam Papaseti church which is decorated with beautiful mural paintings.",
            "Overnight in Gheralta",
          ],
          image: images.yemata2,
        },
        {
          title: "DAY 12: DRIVE TO MEKELLE & FLY TO ADDIS",
          description: [
            "This morning you will drive to Mekele, passing by a number of interesting churches and towns on the way. Carrying on towards Wukro, you visit Abreha Atsbeha church, one of the most picturesque of the churches in the area with a beautifully decorated interior, depicting biblical scenes and saints. Then drive to Mekelle to catch your flight to Addis Ababa.",
            "Overnight in Addis Ababa",
          ],
          image: images.tigray6,
        },
        {
          title: "DAY 13: DEPARTURE",
          description: [
            "After breakfast, depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 4,
    title: "Bale Mountain Trekking",
    index: false,
    image: images.bale1,
    description: "A Majestic Journey through Ethiopia's Alpine Wonderland",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Bale Mountain Trekking",
        subtitle: "A Majestic Journey through Ethiopia's Alpine Wonderland",
        description: [
          "Dive headfirst into an exploration on a mesmerizing expedition into the heart of Ethiopia's natural wonders with our exclusive itinerary, \"Bale Mountain Trekking: A Majestic Journey through Ethiopia's Alpine Wonderland.\" From the vibrant city of Addis Ababa to the serene shores of Lake Langano, and from the untamed beauty of Bale Mountains National Park to the captivating Harenna Forest, every step of this journey reveals the awe-inspiring landscapes and remarkable biodiversity of Ethiopia.",
          "Immerse yourself in the rich flora and fauna of the Bale Mountains as you trek through lush forests, encounter endemic wildlife like the Ethiopian Wolf and Mountain Nyala, and marvel at the dramatic volcanic formations that shape this extraordinary region.",
          "Let Sawla Tours be your guide to this unforgettable adventure, where nature's grandeur and Ethiopia's natural heritage converge in a symphony of breathtaking sights and unforgettable experiences.",
        ],
        lr: true,
        img1: images.bale3,
        img2: images.bale5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your adventure in Ethiopia's capital, a bustling city with vibrant markets, museums, and a unique multiethnic culture.",
          },
          {
            title: "Lake Langano",
            description:
              "Relax on the shores of this serene lake, surrounded by pristine nature and abundant wildlife.",
          },
          {
            title: "Dinsho",
            description:
              "Explore the headquarters of the Bale Mountains National Park and encounter endemic wildlife such as Menelik bushbucks and mountain nyala.",
          },
          {
            title: "Web Valley and Fincha Habera",
            description:
              "Trek through stunning landscapes, witness the meeting of rivers, and catch glimpses of the elusive Ethiopian wolf.",
          },
          {
            title: "Rafu and Sodota",
            description:
              "Discover the dramatic volcanic rock formations and enjoy panoramic views of the Bale Mountains.",
          },
          {
            title: "Gerba Guracha",
            description:
              "Take a leisurely walk around the enchanting Gerba Guracha, the largest lake in the Bale Mountains, teeming with water birds.",
          },
          {
            title: "Sanetti Plateau",
            description:
              "Trek across the high-altitude plateau, spot the Ethiopian wolf, and climb Mount Tullu Deemtu for breathtaking vistas.",
          },
          {
            title: "Harenna Forest",
            description:
              "Descend the majestic Harenna Escarpment and immerse yourself in the lush greenery of the largest rainforest in Ethiopia.",
          },
          {
            title: "Goba",
            description:
              "Visit the gateway town to the Bale Mountains, and experience the local culture and hospitality.",
          },
          {
            title: "Bale Mountains National Park",
            description:
              "Encounter diverse wildlife, including Ethiopian wolves, mountain nyala, colobus monkeys, and a plethora of bird species.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and experience the city's vibrant culture and history.",
          },
          {
            title: "Day 2",
            description:
              "Journey to Lake Langano, where you can unwind and enjoy various outdoor activities.",
          },
          {
            title: "Day 3",
            description:
              "Explore Dinsho and encounter endemic wildlife in the Bale Mountains National Park.",
          },
          {
            title: "Day 4",
            description:
              "Trek from Dinsho to Sodota, witnessing the beauty of the Web Valley and Fincha Habera waterfall.",
          },
          {
            title: "Day 5",
            description:
              "Trek to Keyrensa and enjoy panoramic views of the volcanic rock pillars.",
          },
          {
            title: "Day 6",
            description:
              "Continue the trek from Keyrensa to Rafu, encountering diverse wildlife and stunning landscapes.",
          },
          {
            title: "Day 7",
            description:
              'Trek from Rafu to Gerba Guracha and immerse yourself in the tranquility of the "Black Lake."',
          },
          {
            title: "Day 8",
            description:
              "Traverse the high-altitude Sanetti Plateau, spot the Ethiopian wolf, and climb Mount Tullu Deemtu.",
          },
          {
            title: "Day 9",
            description:
              "Descend to the Harenna Forest and explore its unique flora and fauna.",
          },
          {
            title: "Day 10",
            description:
              "Visit Goba and gain insight into the local culture before departing for Addis Ababa.",
          },
          {
            title: "Day 11",
            description:
              "Fly back to Addis Ababa and reflect on the remarkable adventure through the Bale Mountains.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: Arrive in Addis Ababa & City Tour",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel for overnight accommodation. The city enjoys an excellent climate all year round, with an average temperature of 25°C (77°F). With a multiethnic population of over 5 million, Addis Ababa is a pleasant city with wide avenues of jacaranda trees, interesting museums, and one of the largest open-air markets in Africa, known as the 'Mercato'. After your long flight and a welcome briefing, you can settle into your hotel for some rest.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "Day 2: Addis Ababa – Lake Langano (200km)",
          description: [
            "After Breakfast, we drive to Bishangari Lodge at the shores of Lake Langano (approx. 4 hours). Bishangari Lodge is an eco-lodge situated within genuinely preserved nature. You may relax on the beach (swimming is possible), take a walk through the lodge and encounter wild animals such as Warthogs or Olive Baboons in front of your bungalow.",
            "The lodges can arrange many activities such as trekking through the nearby forest, mountain biking, bird watching, fishing, hippo spotting or horse riding.",
            "Overnight: Lake Langanoo Bishangari Lodge",
          ],
          image: images.addis4,
        },
        {
          title: "Day 3: Lake Langano – Dinsho (250km)",
          description: [
            "After breakfast, we continue our journey through Shashemane to Dinsho, where the headquarters of the Bale Mountains National Park are located (approx. 5 hours). In the afternoon we undertake a gentle, very interesting walk around the headquarters in Dinsho and almost certainly encounter animals such as warthogs, the endemic Menelik bushbuck, or the Mountain Nyala as well as a variety of birds.",
            "Overnight: Dinsho Campsite",
          ],
          image: images.awash2,
        },
        {
          title:
            "Day 4 & 5: Trek from Dinsho to Habera and next day to Sodota (18km)",
          description: [
            "Today we trek from Dinsho through the Web Valley towards the Fincha Habera waterfall, where the Web and Wolla rivers meet. In this area, we have our first chances to see the endemic Ethiopian Wolf, as well as raptors, rock hyrax, and many more species. After refreshing us at the pleasant waterfall, we continue to Sodota.",
            "Overnight: Sodota campsite",
          ],
          image: images.lalibela8,
        },
        {
          title: "Day 6: Trek from Keyrensa to Rafu (20km)",
          description: [
            "Today the way will be steep climbing up to the Rafu campsite. We then will pass by the volcanic rock pillars near Rafu from where we enjoy spectacular panoramic views. On the way, we should see Rock Hyrax, birds of prey, cliffs springer, and other mammals.",
            "Overnight: Rafu campsite",
          ],
          image: images.chebera1,
        },
        {
          title: "Day 7: Trek from Rafu to Gerba Guracha (22km)",
          description: [
            "Today we have a long trek through the largest Afro alpine part of the African Continent, the Senneti plateau, ahead. After we reach our campsite, we will take a walk around the biggest lake in the Bale Mountains, called Gerba Guracha or 'Black Lake'. A variety of water birds usually stay around the lake.",
            "Overnight: Gerba Guracha campsite.",
          ],
          image: images.bale2,
        },
        {
          title: "Day 8: Trek from Garba Guracha to Senetti (17km)",
          description: [
            "Today it will take us approx. 5-6 hrs to explore the Senetti Plateau, usually the best place to see the Ethiopian wolf. We also will have a chance to visit the Crane Lakes and climb the 2nd highest point of Ethiopia “Mount Tullu Deemtu,” offering at an altitude 4377 m spectacular views of the surrounding areas.",
            "Highland birding includes the Abyssinian Catbird, Abyssinian Woodpecker, White-backed Black Tit, Abyssinian Ground Thrush, Yellow-crowned Canary, Somali Chestnut Winged Starling, Olive Pigeon and Mountain Buzzard.",
            "Overnight: Camp at Senetti Campsite",
          ],
          image: images.bale3,
        },
        {
          title: "Day 9 & 10: Senetti – Harenna – Goba (40km)",
          description: [
            "After breakfast, we will be met by our vehicles and we will drive from the Senetti plateau down to Harrena forest (the largest rain forest in Ethiopia), the southern part of the national park holding a unique vegetation and animals. ",
            "We explore parts of the pristine Harenna forest on foot and hopefully spot the endemic Bale monkeys as well as Colobus monkeys. In the late afternoon we will drive to Robe, where we will spend the night at the hotel.",
            "Overnight: at Robe",
          ],
          image: images.bale4,
        },
        {
          title: "Day 11: Fly to Addis Ababa",
          description: [
            "This morning you will transfer to Robe airport to your flight back to Addis Ababa. You will have the afternoon at leisure. Depending on your flight, you will be transferred to Bole airport.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 4,
    title: "Ancient Wonders of Ethiopia",
    index: false,
    image: images.lalibela8,
    description: "A Journey through History and Nature",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ancient Wonders of Ethiopia",
        subtitle: "A Journey through History and Nature",
        description: [
          "Commence a journey on a captivating journey through the ancient wonders of Ethiopia, where history, culture, and natural beauty intertwine. From the vibrant capital city of Addis Ababa to the UNESCO World Heritage Sites of Lalibela, Axum, and Gondar, this carefully crafted itinerary takes you on a remarkable exploration of the country's rich heritage.",
          "Marvel at the rock-hewn churches of Lalibela, witness the towering monoliths of Axum and explore the medieval castles of Gondar. Immerse yourself in the stunning landscapes of the Simien Mountains National Park and the Tigray region, where dramatic escarpments and hidden churches await.",
          "Discover the unique traditions, vibrant markets, and warm hospitality of the Ethiopian people as you delve deep into the country's cultural tapestry.",
        ],
        lr: true,
        img1: images.axum3,
        img2: images.lalibela4,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Experience the bustling capital city, with its vibrant markets, museums, and rich cultural heritage.",
          },
          {
            title: "Lake Tana",
            description:
              "Visit isolated churches by boat and explore the serene monasteries dotting the shores of this ancient lake.",
          },
          {
            title: "Gondar",
            description:
              "Discover the majestic castles of Fasilades and the intricate carvings of Debre Berhan Church.",
          },
          {
            title: "Simien Mountains National Park",
            description:
              "Trek through breathtaking alpine landscapes, encounter endemic wildlife, and marvel at the rugged beauty of this UNESCO World Heritage Site.",
          },
          {
            title: "Lalibela",
            description:
              "Explore the awe-inspiring rock-hewn churches, a testament to the architectural genius of ancient Ethiopia.",
          },
          {
            title: "Axum",
            description:
              "Uncover the mysteries of this ancient city, home to towering stelae, the Church of Saint Mary of Zion, and the legends of the Queen of Sheba.",
          },
          {
            title: "Tigray Region",
            description:
              "Trek to remote rock-hewn churches in the Gheralta cluster, witness breathtaking landscapes, and immerse yourself in the local communities.",
          },
          {
            title: "Adigrat and Anaf",
            description:
              "Trek through terraced fields, interact with friendly villagers, and experience the hospitality of the Tigrayan people.",
          },
          {
            title: "Mekelle",
            description:
              "Visit the impressive Abreha Atsbeha church and Wukro Cherkos, adorned with beautiful carvings and ancient artwork.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and explore the vibrant capital city.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Bahir Dar, visit monasteries on Lake Tana, and enjoy breathtaking views.",
          },
          {
            title: "Day 3",
            description:
              "Drive to the Simien Mountains National Park and immerse yourself in stunning alpine scenery.",
          },
          {
            title: "Day 4",
            description:
              "Trek through the Simien Mountains, encounter endemic wildlife, and marvel at the rugged landscapes.",
          },
          {
            title: "Day 5",
            description:
              "Drive to Gondar, explore the medieval castles, and witness the intricate carvings of Debre Berhan Church.",
          },
          {
            title: "Day 6",
            description:
              "Fly to Lalibela, discover the rock-hewn churches, and delve into the rich religious heritage of the region.",
          },
          {
            title: "Day 7",
            description:
              "Further explore the rock-hewn churches of Lalibela and immerse yourself in the ancient atmosphere.",
          },
          {
            title: "Day 8",
            description:
              "Fly to Axum, visit the towering stelae, and explore the legends of the Queen of Sheba.",
          },
          {
            title: "Day 9",
            description:
              "Drive to Adigrat, trek to Anaf, and experience the warm hospitality of the Tigrayan people.",
          },
          {
            title: "Day 10",
            description:
              "Trek to Sehita, encounter unique churches along the way, and soak in the stunning landscapes.",
          },
          {
            title: "Day 11",
            description:
              "Trek to Shimbriti, explore rock-hewn churches, and enjoy panoramic views of the surrounding areas.",
          },
          {
            title: "Day 12",
            description:
              "Drive to the Gheralta region, discover hidden rock churches, and appreciate the local culture.",
          },
          {
            title: "Day 13",
            description:
              "Explore the remarkable rock churches in the Tigray region and immerse yourself in their ancient beauty.",
          },
          {
            title: "Day 14",
            description:
              "Drive to Mekelle, visit Abreha Atsbeha church and Wukro Cherkos, and admire their intricate artwork.",
          },
          {
            title: "Day 15",
            description:
              "Depart from Addis Ababa, carrying with you the memories of an unforgettable journey through Ethiopia's ancient wonders.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family.",
            "We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 2: FLY TO BAHIR DAR & VISIT THE MONASTERIES ON LAKE TANA",
          description: [
            "Board a short flight to Bahir Dar where you are met and transferred to your hotel. Then you embark on a cruise of Lake Tana, the largest highland lake in Ethiopia, to visit monasteries dating back to the 14th century. Located on the forested Zege Peninsula, Azuwa Mariam is the most impressive of the southern monasteries.",
            "The walls of the church are completely covered with remarkable 16th-century murals that offer a revealing look into medieval Ethiopia.",
            "You then return to Bahir Dar for lunch at your hotel. Then you head into the colorful market.",
            "Later in the afternoon, you drive up Bezawit Hill for impressive views over the town, the Blue Nile, and of Lake Tana with its island monasteries. We aim to get here shortly before sunset to enjoy the magnificent natural light show. Afterward, we return to our hotel.",
            "Overnight in Bahir Dar",
          ],
          image: images.bahirdar3,
        },
        {
          title: "DAY 3: DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning's drive takes you to Simien Mountain National Park. You will have a lunch stop at Gonder and continue on your drive. Simien Mountain National Park is a UNESCO World Heritage Site and one of Africa's largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles.",
            "Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you acclimatize your body to the altitude.",
            "Overnight in Simiens.",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 4: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers.",
            "We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens",
          ],
          image: images.simien3,
        },
        {
          title: "DAY 5: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years.",
            "You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.  We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site).",
            "The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder3,
        },
        {
          title: "DAY 6: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 7: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 8: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning, you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum – a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum.",
            "You also visit the Archaeological Museum, before heading to the Queen of Sheba's Bath. This large reservoir is an excellent place to observe the local women collecting water for washing. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge'ez (earliest written Ethiopian language), and Greek.",
            "After having a lunch break, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it.",
            "There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba's Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum4,
        },
        {
          title: "DAY 9: DRIVE TO ADIGRAT & TREK TO ANAF",
          description: [
            "Today, you will transfer by road (4 hours) to Adigrat en route to visit the temple of Yeha. It is the oldest of Ethiopia's antiquities beautifully set in scenic surroundings, dating back to the 5th century BC. We continue our journey to Adigra for a lunch stop. Start your trekking from Agoro Lodge to Anaf (3hrs.) You will meet your local guide here.",
            "Your luggage will be loaded on the donkeys. The walking takes you along the narrow track between fallow terraced fields and passes through small villages. Most stone-made houses are fenced by cacti trees. You climb up a gentle slope for a couple of hours onto the escarpment where Anaf is located. Right from the end of the ridge, you start to look at Anaf community lodge at the other end of the plateau.",
            "Perched nearly at 3000 meters, the lodge overlooks the Agame Massif and valleys to the south. In all the lodges, you will be greeted on arrival by your host with local bread, nuts, popcorn, tea, and coffee. You will be served with tasty local meals.",
            "Overnight in Anaf community lodge",
          ],
          image: images.tigray8,
        },
        {
          title: "DAY 10: TREK TO SEHITA",
          description: [
            "This morning after having breakfast, you walk to Sehita. The walk takes around 4 hours and goes past some lovely churches – notably Debre Giorgis, which is a built-up church like that of the ancient church of Debre Damo. You walk across rolling plains dotted with cypress trees.",
            "Then descend along valleys of giant candelabra cactus and aloe to reach the Valley of Debre Abay. Like the other village of Tigray, all the small houses are surrounded by prickly pears and eucalyptus that look more or less exactly like every other house you have passed.",
            "The rocky soil atop the plateaus supports only grasses, grains, and legumes. Open your eyes for different birds and small animals on this day too. After another short walk from the valley, takes you to Sehita community lodge. It has lovely views up and down the valley and is an ideal location to visit many of the local churches.",
            "Overnight in Seheta community lodge",
          ],
          image: images.tigray7,
        },
        {
          title: "DAY 11: TREK TO SHIMBRITI",
          description: [
            "Depart after breakfast for a day walk (approximately 5-4 hrs) to the community site-Shimbriti. From these guesthouses, it is a 5-hour walk through the valleys to Shimbriti. The first one-hour walk takes you from the plateau down to the valley.",
            "Following tracks walked by Tigrayan highlanders for the past many years, passing the villages in the valley. Then climb up escarpments, spotting rock hyraxes and birds, and continue walking along narrow, crumbling ledges with sheer drops. As you get closer to it, you come across an interesting rock tunnel that has been carved through the ridge to give villages on the western side access to the lovely rock church of Maryam Bezuhan.",
            "The church itself is an exquisite one, and the trail thereafter hugs the mountain and winds up to the plateau on the top.",
            "The sceneries along the walk are amazingly superb. Unlike the other lodge, on the plateau where it is located, you find here small villages scattered with local stone houses. Having an overwhelming welcoming up on your arrival, you will be served tasty local and have an elaborate traditional coffee ceremony. You can take a walk along the rim of the mountain at dusk.",
            "Overnight in Shimbriti community lodge",
          ],
          image: images.tigray5,
        },
        {
          title: "DAY 12: WALK FROM SHIMBRITI TO DEGA ARBI & DRIVE TO GHERALTA",
          description: [
            "After an enjoyable breakfast, you take your last morning on a community walk (2 hours). You will begin by descending for 1 hour, steeply at first and then more gradually, and get on the flatter plain. You pass by the small mangrove forest which grows around the church. You are likely to encounter small cattle herders here – friendly children from the local village.",
            "You will meet your driver with the vehicle at Dega Arbi popular for a Friday weekly market. You transfer to Gheralta Lodge (1.5 hours). Spend the rest of the day at your leisure enjoying the excursions that can be arranged from the lodge. Hiking, bird watching, and visiting the nearby rock-hewn churches are all recommended from here.",
            "Overnight in Gheralta",
          ],
          image: images.tigray4,
        },
        {
          title: "DAY 13: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, head to explore the marvelous rock churches in the Gheralta cluster. A short drive takes you closer to the foot of Korkur Mountain. It is from here you start your hiking up to the plateau.",
            "Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches. The latter one is the smallest church and has a really beautiful view of the surrounding areas.",
            "Drive back to your lodge for lunch. In the afternoon drive to visit Mariam Papaseti church which is decorated with beautiful mural paintings.",
            "Overnight in Gheralta",
          ],
          image: images.yemata2,
        },
        {
          title: "DAY 14: DRIVE TO MEKELLE & FLY TO ADDIS",
          description: [
            "This morning you will drive to the Mekele, passing by a number of interesting churches and towns on the way. Carrying on towards Wukro, you first visit Abreha Atsbeha church, one of the most picturesque of the churches in the area with a beautifully decorated interior, depicting biblical scenes and saints.",
            "Having a lunch break at Wukro, head to visit Wukro Cherkos, a semi-monolithic church. Inside this crucifix-shaped church, you'll see patterned pillars and carvings. Then drive to Mekelle to catch your flight to Addis Ababa.",
            "Overnight in Addis Ababa",
          ],
          image: images.tigray6,
        },
        {
          title: "DAY 15: DEPART FROM ADDIS ABABA",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 1,
    experience: 5,
    title: "Shutter Symphony",
    index: false,
    image: images.omo1,
    description: "Capturing the Colors of Ethiopia's Enigmatic Omo Valley",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Shutter Symphony",
        subtitle: "Capturing the Colors of Ethiopia's Enigmatic Omo Valley",
        description: [
          "Embark upon a grand odyssey on an unforgettable photographic expedition through the Omo Valley, a land of cultural diversity and untouched natural beauty. This immersive journey will take you deep into the heart of Ethiopia, where you'll encounter tribes known for their vibrant traditions and unique adornments.",
          "From the Hamer villages to the Mursi with their famous lip plates, this trip offers a rare opportunity to capture the essence of these indigenous communities. As you venture through the picturesque landscapes of the Omo Valley, you'll witness the breathtaking Rift Valley lakes, encounter incredible birdlife and wildlife, and explore the region's remote corners.",
          "Join us on this photographic adventure and capture the captivating faces and landscapes that make the Omo Valley a truly exceptional destination.",
        ],
        lr: true,
        img1: images.hamer1,
        img2: images.omo2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Explore the vibrant capital city of Addis Ababa, visiting the National Museum, Ethnographic Museum, and the bustling Mercato.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the rock-hewn churches of Lalibela, a UNESCO World Heritage Site and one of the most important pilgrimage sites in Ethiopia.",
          },
          {
            title: "Axum",
            description:
              "Discover the ancient city of Axum, a UNESCO World Heritage Site and the former capital of the Axumite Empire.",
          },
          {
            title: "Gondar",
            description:
              "Explore the medieval castles of Gondar, a UNESCO World Heritage Site and the former capital of Ethiopia.",
          },
          {
            title: "Simien Mountains",
            description:
              "Journey to the Simien Mountains National Park, a UNESCO World Heritage Site and home to the endemic Gelada baboon.",
          },
          {
            title: "Tigray Region",
            description:
              "Explore the Tigray region, home to a number of rock-hewn churches, including Abuna Yemata Guh, one of the most inaccessible churches in the world.",
          },
          {
            title: "Omo Valley",
            description:
              "Discover the cultural diversity of the Omo Valley, meeting and photographing the tribes known for their unique traditions and adornments.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa, meet and greet, transfer to your hotel",
          },
          {
            title: "Day 2",
            description:
              "Explore Addis Ababa, visit the church, Entoto Hills, and local markets",
          },
          {
            title: "Day 3",
            description:
              "Fly to Jinka, visit Ari village, and experience rural southern Ethiopia",
          },
          {
            title: "Day 4",
            description:
              "Excursion to Mago National Park, photograph Mursi tribe and Jinka market",
          },
          {
            title: "Day 5",
            description:
              "Drive to Turmi via Arbore, capture the stunning Arbore tribe",
          },
          {
            title: "Day 6",
            description:
              "Excursion to Kara tribe and afternoon visit to Hamer village",
          },
          {
            title: "Day 7",
            description:
              "Explore the Nyangatom tribe and visit Hamer village in the afternoon",
          },
          {
            title: "Day 8",
            description:
              "Excursion to the Dassanach tribe and visit Lake Turkana",
          },
          {
            title: "Day 9",
            description:
              "Attend Turmi market, photograph Hamer people, and bull jumping ceremony",
          },
          {
            title: "Day 10",
            description:
              "Visit two Hamer villages, capture morning and sunset shots",
          },
          {
            title: "Day 11",
            description:
              "Fly to Addis Ababa, visit Fair Trade store, farewell dinner",
          },
          {
            title: "Day 12",
            description:
              "Departure from Addis Ababa, homeward bound with unforgettable memories and photographs of the Omo Valley.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1- ADDIS ABABA",
          description: [
            "Upon arrival at the airport, you will be driven to the hotel which is 15 minutes away. The hotel has internet, a nice lounge area, a good restaurant, wonderful staff, a money exchange, and a comfortable place to start the trip.",
            "The group will have a meet and greet dinner that evening.",
            "Over Night in in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2 - ADDIS ABABA",
          description: [
            "You will start the day with a photoshoot in the Entoto hills, the highest point in Addis where the women wood carriers walk, donkeys roam and people pray at St. Mary's Church.",
            "From there you will walk the local Shiro Meda market where people shop for shema cloth and traditional clothing.",
            "You will photograph the pilgrims and priests at the ornate Holy Trinity Cathedral. Women in shema- traditional white shawls, and men deep in prayer are both inside this second most important place of prayer in Ethiopia as well as in the expansive courtyard.",
            "Lunch at the Lucy restaurant which is adjoining the Ethnological Museum which houses Lucy, the most complete skeleton ever discovered, being 3.2 million years old.",
            "Over Night in in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 3 – FLY TO JINKA",
          description: [
            "You will take the 11:40 am flight to Jinka arriving at 1:00 pm.",
            "The afternoon will be spent walking the packed village lanes of the Ari village. These very rural people are friendly, some homes are brightly painted, they do pottery, grow sorghum, and daily life is easily photographed. Chickens in the yards, kids wanting to hold your hands, and women cooking by fire all make for a great introduction to the Omo Valley. These people are not painted, pierced, or decorated but are an excellent representation of rural southern Ethiopia.",
            "You will visit the school in the village. The classrooms are visually compelling and great to document. We will walk up the main road visiting the houses and meeting the people.",
            "We will be spending the night in the Eco Omo Lodge which is on the banks of the river where people bathe, clothing gets washed, and cars get cleaned.",
            "Over Night in in Jinka",
          ],
          image: images.intro2,
        },
        {
          title: "DAY 4 – EXCURSION TO MAGO NATIONAL PARK TO VISIT MURSI",
          description: [
            "Early morning before dawn, you will take the two-hour ride through Mago National Park to reach a Mursi village. As they are nomadic it is impossible to name the settlement you will visit.",
            "The women wear circular clay lip plates, the men are garbed in large towel-like wraps. Photographing women grinding sorghum and breastfeeding while making their morning coffee which they drink out of gourds is possible.",
            "Our guides handle the photo fee payments so you can shoot with abandon. For protein, the men bleed a bull in the early morning and drink its blood. The homes are thatched straw and sticks, and these people are known to keep traditions very much intact.",
            "Many men have body adornments. A sense of humor is needed to fully appreciate the Mursi photographic experience.",
            "The afternoon will be spent wandering the dirt street and markets of Jinka. The market is colorful and vibrant with many bars, and stores selling plastic woven baskets, and day-to-day items. Splitting into small groups, a guide will help you with translation, setting up shots if desired, and see to it that you can photograph freely.",
            "Lodging nice again will be at the Eco Omo Lodge which has a patio where the group can have cold beer or hot coffee after this long day.",
            "Over Night in in Jinka",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 5 – TURMI VIA ARBORE",
          description: [
            "Proceeding further into the scenic Weito lowlands, you will be visiting an Arbore tribal village located at the northern edge of Mount Buska. The Arbore women are absolutely stunning; they have extremely dark skin and strong features. Prior to marriage, the women have their heads shaved.",
            "They wear dark robes, colorful beads, and their huts are fabricated from tree branches. You will work on your portraiture skills in this village.",
            "Arriving in Turmi late in the afternoon, you will be spending the night at the Buska Lodge which will be your base for the next few days. These round-shaped tukul lodges have porches and are on the bank of a stream. If you like shooting star trails this is your mecca as there is little light pollution.",
            "Over Night in Buska Lodge",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 6 - TURMI - DUS - TURMI",
          description: [
            "Departing Turmi at 5:00 AM, you will head to Dus, the friendliest village of the Kara tribe.",
            "Settled on the banks of the Omo River, this tribe is known for their creative and decorative body chalk painting.",
            "Many of the Kara women have pierced lips and insert nails and pins. Photographing on the bank of the Omo River can yield images of the kids diving into the water.",
            "You will shoot a cattle and goat drive which is iconic. Dust swirling, men with guns and long herders stick driving their herd to the water.",
            "You will photograph the ceremonial, communal dance performed by the people of Dus.",
            "They will invite you into their huts for coffee to be had out of a gourd. The Kara of Dus prides themselves as the best dancers in the Omo.",
            "You will also photograph these warm and inviting people on the banks of the Omo and in the shade, under the large umbrella-like trees.",
            "You will be bringing a picnic breakfast and lunch with us.",
            "Over Night in in Turmi",
          ],
          image: images.karo1,
        },
        {
          title: "DAY 7 - TURMI - KANGATEN - TURMI",
          description: [
            "Starting off from Turmi at sunrise you will be heading to Kangate, home to the Nyangatom tribe that historically are said to be a split group from the Toposa tribe of South Sudan.",
            "Settled on the other side of the Omo River, You will be crossing the Omo River where you will be able to access and visit remote tribal villages.",
            "The teenage boys are lively and like to play much of the day. The women are topless and wear many strands of heavy beads, the girls are playful and love to have their images taken.",
            "Mid-afternoon, you will return to Turmi where you will be spending another night at the Buska Lodge.",
            "You can also photograph the Hamer tribe digging for water, smoking out bees, or do another local village sunset shoot.",
            "Over Night in in Turmi",
          ],
          image: images.omo3,
        },
        {
          title: "DAY 8 - TURMI - OMORATE-TURMI",
          description: [
            "Departing Turmi at 5:00 AM, you will be heading to Omorate, home of the Dassanach tribe who are said to be descendants of the Turkana tribe in North Kenya.",
            "Like many of these tribal groups, they use chain links and other Western ‘cast-offs' as decorative objects.",
            "Crossing the newly constructed Omo River Bridge and driving further for 12km, we will be able to photograph a remote Dassanach tribal village, just 11 km from the shores of Lake Turkana.",
            "You will photograph the women cooking by fire, grinding corn meal, and the men with their flock.",
            "You will try to continue further south to Lake Turkana to see and photograph the small wooden fishing boats and Dassanch people.",
            "Over Night in in Turmi",
          ],
          image: images.omo2,
        },
        {
          title: "DAY 9 - TURMI",
          description: [
            "This being Monday we will attend the Turmi market. The Hamer people will be selling honey, snuff, foodstuffs, and local wares.",
            "You will be able to wander freely shooting the many stalls. Of note the stores have some artistic designs and the crafts market is the best in the Omo.",
            "You may encounter the ritualistic bull jumping ceremony usually around Turmi.",
            "The women dance, the bells on their ankles making a distinctive noise that blends in with the bugles they blow. The age group (16-25) of men called Maza to whip the women as a sign of devotion as they will be responsible for the women as they grow old.",
            "Not less than five bulls are lined up and the nude guy will run across them numerous times. Once successfully completed he is entitled to marry.",
            "Over Night in in Turmi",
          ],
          image: images.hamer1,
        },
        {
          title: "DAY 10 - TURMI",
          description: [
            "During the day you will be visiting two local Hamer villages in close proximity. One visit at sunrise and another at sunset.",
            "Leaving the hotel at 5:30 AM the short ride will get you to the Hamer village as the people get ready for the day.",
            "Goats going out to pasture, sorghum being ground, kids milking goats and early morning coffee ceremony are ideal photo shots.",
            "The Hamer women have high cheekbones and wear thick copper necklaces which indicate first wife status and elaborate custom beads.",
            "The Hamer are very outgoing and easily engaged. Many of the men wear feathers in their hair and dress in dark green blankets.",
            "The sunset shot will be in another village 20 minutes away from our lodge. Another trip favorite photo shoot is that of silhouettes.",
            "Over Night in in Addis Ababa",
          ],
          image: images.hamer2,
        },
        {
          title: "DAY 11 - ADDIS ABABA",
          description: [
            "Today we will fly back to Addis Ababa from the Jinka airport.",
            "The group will return to Addis early in the afternoon and go to a Fair Trade home goods store that has the highest quality fabrics/ shawls/ linen.",
            "Those leaving on late-night flights will be driven to the airport. The farewell dinner will be in the hotel.",
            "Over Night in in Addis Ababa",
          ],
          image: images.addis3,
        },
        {
          title: "DAY 12 – DEPARTURE-ADDIS ABABA- HOMEWARD BOUND",
          description: [],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 5,
    title: "Ethiopia through the Lens",
    index: false,
    image: images.lalibela4,
    description: "Capturing the Riches of History and Nature",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopia through the Lens",
        subtitle: "Capturing the Riches of History and Nature",
        description: [
          "Start a thrilling escapade on a mesmerizing photographic journey through Ethiopia, immersing yourself in the country's rich cultural heritage and breathtaking landscapes. From the ancient rock-hewn churches of Lalibela to the otherworldly beauty of the Danakil Depression, this trip offers a unique opportunity to capture Ethiopia's timeless wonders.",
          "Begin in Addis Ababa, where you'll explore vibrant markets and visit historical landmarks. Journey to Gonder and the Simien Mountains, where stunning scenery and endemic wildlife await. Discover the rock-hewn churches of Lalibela, a UNESCO World Heritage Site. Continue to Axum and the Tigray region, home to impressive monolithic churches. Conclude your adventure in the otherworldly landscapes of the Danakil Depression.",
          "Join us on this photographic odyssey and capture the essence of Ethiopia's timeless allure.",
        ],
        lr: true,
        img1: images.yemata1,
        img2: images.lalibela7,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Explore the vibrant capital city, visit local markets, and discover historical landmarks.",
          },
          {
            title: "Lake Tana",
            description:
              "Take a boat ride to visit an isolated church on the tranquil shores of Lake Tana.",
          },
          {
            title: "Gonder",
            description:
              "Marvel at the Fasilades Castles and the Debre Berhan Church, reflecting Ethiopia's regal past.",
          },
          {
            title: "Simien Mountains",
            description:
              "Embark on scenic walks in stunning mountain landscapes, capturing the unique flora and fauna of this UNESCO World Heritage Site.",
          },
          {
            title: "Lalibela",
            description:
              "Witness the awe-inspiring rock-hewn churches, a testament to the incredible architectural achievements of ancient Ethiopia.",
          },
          {
            title: "Axum",
            description:
              "Visit the stelae, archaeological sites, and the Church of Saint Mary of Zion, where the Ark of the Covenant is believed to be kept.",
          },
          {
            title: "Tigray Rock Churches",
            description:
              "Explore the hidden gems of the Tigray region, encountering remote monolithic churches carved into cliff faces.",
          },
          {
            title: "Danakil Depression",
            description:
              "Experience the surreal landscapes of the Danakil Depression, including the mesmerizing Dallol area and salt flats.",
          },
          {
            title: "Cultural Encounters",
            description:
              "Interact with local communities, capturing their traditions, daily life, and vibrant expressions of Ethiopian culture.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa, explore the city's markets and landmarks.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder, transfer to the Simien Mountains National Park.",
          },
          {
            title: "Day 3",
            description: "Capture the scenic beauty of the Simien Mountains.",
          },
          {
            title: "Day 4",
            description:
              "Return to Gonder, visit historical sites and castles.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Lalibela, photograph the iconic rock-hewn churches.",
          },
          {
            title: "Day 6",
            description: "Explore more rock churches in and around Lalibela.",
          },
          {
            title: "Day 7",
            description: "Fly to Axum, drive to the Gheralta area.",
          },
          {
            title: "Day 8",
            description:
              "Discover the Tigray rock churches and surrounding landscapes.",
          },
          {
            title: "Day 9",
            description:
              "Journey to the Danakil Depression, witness the sunset over Lake Asale.",
          },
          {
            title: "Day 10",
            description: "Explore the mesmerizing Dallol area and salt flats.",
          },
          {
            title: "Day 11",
            description:
              "Further exploration of the Danakil area, drive to Mekelle.",
          },
          {
            title: "Day 12",
            description:
              "Fly back to Addis Ababa, depart with unforgettable memories of Ethiopia's timeless wonders.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: ADDIS ABABA",
          description: [
            "You will start the day with a photoshoot in the Entoto hills, the highest point in Addis where the women wood carriers walk, donkeys roam and people pray at St. Mary's Church. From there you will walk the local Shiro Meda market where people shop for shama cloth and traditional clothing.",
            "You will photograph the pilgrims and priests at the ornate Holy Trinity Cathedral. Women in shama- traditional white shawls, and men deep in prayer are both inside this second most important place of prayer in Ethiopia as well as in the expansive courtyard. ",
            "Lunch at the Lucy restaurant which is adjoining the Ethnological Museum which houses Lucy, the most complete skeleton ever discovered, being 3.2 million years old.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title:
            "DAY 3: FLY TO GONDER & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning board a short flight to Gonder and upon arrival you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa's largest ranges.",
            "More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles.",
            "Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you acclimatize your body to the altitude.",
            "Overnight in Simiens.",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we'll get to know better alongside field researchers. We'll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens.",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 5: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar.",
            "In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area. We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site).",
            "The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder.",
          ],
          image: images.gonder2,
        },
        {
          title: "DAY 6: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level.",
            "Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches. Lalibela indeed offers a great opportunity for any traveler.",
            "After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela.",
          ],
          image: images.lalibela1,
        },
        {
          title: "DAY 7: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.",
            "Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela.",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 8: FLY TO AXUM; VISIT SIGHTSEEING & DRIVE TO GHERALTA",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum.",
            "You also visit the Archaeological Museum, before heading to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant.",
            "It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it.",
            "There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. In the afternoon, you drive across the dramatic mountainous landscapes to Gheralta, stopping a number of times en route to take in the spectacular scenery. You arrive at your lodge in time good to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta.",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 9: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, continue your exploration of the marvelous churches in the Gheralta cluster. Today's half an hour's drive takes you closer to the foot of Korkur Mountain. It is from here you start you hiking up to the plateau. Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches. The latter one is the smallest church and has a really beautiful view of the surrounding areas. Drive back to your lodge for lunch.",
            "In the afternoon you will drive out of Gheralta to visit Mariam Papaseti church. A short and easy walk takes you through the most scenic landscape and vibrant small villages.",
            "The church is a semi-monolithic church. You'll find a wide range of beautiful 18th-century mural paintings decorating the internal part of the church. Later you take a short walk to meet local farmers and learn about their way of life. Return to your lodge for dinner.",
            "Overnight in Gheralta.",
          ],
          image: images.yemata2,
        },
        {
          title: "DAY 10: DRIVE TO THE DANAKIL DEPRESSION",
          description: [
            "After breakfast, spend the morning at your leisure which can be arranged for short hiking, bird watching, and visiting the nearby rock-hewn church. After lunch, you drive towards the Danakil region, stopping a number of times en route to take in the spectacular scenery. You arrive in time to enjoy a beautiful Ethiopian sunset over Lake Asale.",
            "Overnight camping in the Danakil.",
          ],
          image: images.danakil1,
        },
        {
          title: "DAY 11: EXPLORE THE DALLOL AREA & DRIVE TO MEKELLE",
          description: [
            "Depart before dawn, you start driving to Dallol. It is like nowhere else; a bizarre landscape of colorful mineral deposits, sulfur pools, and geysers, where you will have this early morning to explore this seemingly alien terrain. You then visit the salt canyons, a bizarre landscape where we go for a short walk. On the way back to camp you cross the salt flats where we see the arduous work of salt being extracted by hand and loaded onto the camels.",
            "After freshening up and having lunch, we will leave the Danakil and climb the steep mountains to Mekele, climbing from 100 meters below sea level up to 2500m. Mekelle is the capital of the region.",
            "Overnight in Mekelle.",
          ],
          image: images.danakil2,
        },
        {
          title: "DAY 12: FLY TO ADDIS & DEPARTURE",
          description: [
            "After breakfast, you drive to Mekelle airport and take the short flight back to Addis Ababa. Upon arrival in Addis, transfer you to your hotel. You have the afternoon free for shopping in Addis Ababa.",
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 5,
    title: "Through The Lens",
    index: false,
    image: images.omo3,
    description:
      "Discovering Ethiopia's Hidden Gems - A Photographic Journey To The Lost Tribes Of The Omo Valley",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Through The Lens",
        subtitle: "A Photographic Journey To The Lost Tribes Of The Omo Valley",
        description: [
          "Dive into the unknowns on an extraordinary expedition to the mystical land of Ethiopia, where ancient traditions and untouched landscapes converge in a harmonious blend. This immersive photographic tour will lead you through the enchanting Omo Valley, a realm steeped in captivating history and home to the lost tribes that have preserved their unique cultures for centuries.",
          "From the vibrant streets of Addis Ababa to the remote corners of the region, every step of this journey unveils awe-inspiring scenes waiting to be captured by your lens. Immerse yourself in the mesmerizing lives of the Gurage, Surma, Karo, Hamer, Mursi, and other extraordinary tribes that call this land their home. As you traverse through sprawling coffee plantations, traverse deep gorges, and wander among picturesque villages, prepare to witness the timeless beauty and profound human connections that define Ethiopia's Omo Valley.",
          "Witness captivating ceremonies, traditional rituals, and breathtaking landscapes as you delve deep into the lives of these remarkable tribes. Each day brings new encounters and photographic opportunities, providing a truly immersive experience.",
          "Join us on this unforgettable journey and capture the untamed beauty of Ethiopia's tribal communities. Join us on this artistic odyssey and unlock the secrets of Ethiopia's lost tribes through the power of your camera.",
        ],
        lr: true,
        img1: images.omo1,
        img2: images.hamer2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Explore the vibrant capital city, capturing its bustling markets and historical landmarks.",
          },
          {
            title: "Jimma and Mizan",
            description:
              "Travel through picturesque landscapes, capturing the unique lifestyles of the Gurage, Oromo, and Kefecho people.",
          },
          {
            title: "Kibish and the Surma",
            description:
              "Immerse yourself in the captivating world of the Surma tribe, photographing their distinct body painting, scarification, and cultural practices.",
          },
          {
            title: "Turmi and the Hamar",
            description:
              "Witness the famous cattle-leaping ceremony, document the Hamar's unique attire, and capture their daily rituals.",
          },
          {
            title: "Kangate and Karo",
            description:
              "Visit the Karo tribe known for their elaborate body painting, capturing their stunning adornments and scenic surroundings.",
          },
          {
            title: "Jinka and the Mursi",
            description:
              "Venture into Mago National Park to meet the Mursi tribe and photograph their iconic lip plates.",
          },
          {
            title: "Scenic Landscapes",
            description:
              "Capture the breathtaking landscapes of Ethiopia's southwestern region, from the Omo River to the Great Rift Valley.",
          },
          {
            title: "Cultural Encounters",
            description:
              "Interact with tribal communities, gaining insight into their traditions, beliefs, and ways of life.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrival in Addis Ababa, and explore the city's markets and landmarks.",
          },
          {
            title: "Day 2",
            description:
              "Drive from Addis Ababa to Jimma, capturing the landscapes and cultures along the way.",
          },
          {
            title: "Day 3",
            description:
              "Continue the journey to Mizan Teferi, photographing the lush forests and coffee plantations.",
          },
          {
            title: "Day 4",
            description:
              "Drive to Kibish and meet the Surma tribe, capturing their unique traditions and body art.",
          },
          {
            title: "Day 5 & 6",
            description:
              "Immerse yourself in the daily life of the Surma, documenting their rituals and interactions.",
          },
          {
            title: "Day 7",
            description:
              "Drive to Turmi via Kangate, and photograph the vibrant ceremonies and attire of the Hamar tribe.",
          },
          {
            title: "Day 8",
            description:
              "Explore the Karo tribe's body painting and capture the stunning landscapes of the Omo Valley.",
          },
          {
            title: "Day 9",
            description:
              "Visit the Dassenech tribe and continue photographing the Hamar's daily life and traditions.",
          },
          {
            title: "Day 10",
            description:
              "Drive to Jinka via Elbore, immerse yourself in the Mursi tribe's customs and capture their iconic lip plates.",
          },
          {
            title: "Day 11",
            description:
              "Excursion to Mago National Park, photograph the Mursi tribe in their natural habitat.",
          },
          {
            title: "Day 12",
            description:
              "Fly back to Addis Ababa, depart with unforgettable memories and a collection of captivating images.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "Day 1: Arrival in Addis Ababa",
          description: [
            "Today is set aside as an arrival day in the wondrous land of Abyssinia. After arriving at Bole International Airport and taking care of passport control and luggage formalities, you will be met by your guide and driven to your comfortable hotel nearby.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "Day 2: Drive from Addis Ababa to Jimma",
          description: [
            "Embark on an enchanting photographic journey from Addis Ababa to Jimma in southwestern Ethiopia. Our early morning drive will take us on a scenic route spanning approximately 330 km. along the way, we will have the unique opportunity to capture the captivating lives and vibrant cultures of the Gurage and Oromo people in their picturesque villages.",
            "We will also traverse the awe-inspiring Gibe Gorge, a natural wonder adorned with breathtaking vistas that are perfect for stunning photographs. Within this deep gorge flows the majestic Gibe River, a prominent tributary of the Omo River.",
            "Our route will unveil a mesmerizing landscape dominated by sprawling coffee plantations, offering a splendid backdrop for your photography. As the day unfolds, we will reach Jimma, the largest city in southwestern Ethiopia. Jimma, once the capital of the former Kaffa Province, holds historical significance as the birthplace of Coffea Arabica, the renowned coffee.",
            "Immerse yourself in the region recognized as the home of coffee, and document the essence of this captivating city and its coffee heritage through your camera lens. Prepare for an unforgettable photographic tour that will leave you with a treasure trove of captivating images and memories.",
            "Overnight in Jimma Hotel",
          ],
          image: images.tigray6,
        },
        {
          title: "Day 3: Drive Jimma to Mizan Teferi",
          description: [
            "Today, we continue our exploration of the captivating southwestern region, heading towards the mesmerizing destination of Mizan Teferi. Our scenic route spans approximately 240 kilometers, presenting a breathtaking tapestry of lush forests and meticulously cultivated landscapes adorned with flourishing coffee plantations, tea gardens, and an array of aromatic spices.",
            "Throughout our expedition, we will embrace numerous captivating moments, allowing us to unleash our creativity and capture the essence of this awe-inspiring region.",
            "Be prepared to seize every enchanting photographic opportunity that crosses our path, as we pause intermittently to immortalize the mesmerizing beauty that surrounds us.",
            "Overnight in Mizan Teferi",
          ],
          image: images.konso1,
        },
        {
          title: "Day 4: Drive Mizan Teferi to Kibish",
          description: [
            "This morning is an exciting travel day as we head deep into the little-visited portion of southwestern Ethiopia. En route, we pass through the Bebeka coffee plantation (located about 30km outside Mizan), which is the largest and oldest coffee plantation in Ethiopia.",
            "On our journey, we will visit the Menit tribe, who are the less well-known neighbors of the Surma, one of our main photographic targets of this trip.",
            "Passing through the town of Tulgit, will finally arrive in Kibish, where we will be camping for the next three nights. Much of our focus today will be photographing the fabulous Surma people, who due to their remoteness, are one of the least visited of the Omo Valley's tribes.",
            "Overnight camping in Kibish",
          ],
          image: images.surma1,
        },
        {
          title: "Day 5 and 6: Explore the Kibish area",
          description: [
            "Today we have a full day to explore and photograph the fascinating Surma, making the most of our time in this remote region of Ethiopia.",
            "Overnight camping in Kibish",
          ],
          image: images.hamer1,
        },
        {
          title: "Day 7: Drive Kibish to Kangate",
          description: [
            "After a scrumptious breakfast prepared by our camp crew, we make our way to our campsite along the Omo River. En route we will visit today are the Nyangatom, whom the Surma insult by referring to them as the Bume (“the smelly ones”). The Nyangatom are some of the most feared warriors of the Omo Valley, often clashing with the neighboring Turkana and Surma tribes.",
            "The Nyangatom, like the Surma, are pastoralists, keeping sheep, goats, and cattle. Although some of the tribes in the valley are small and their very existence is threatened, the Nyangatom have fared much better in recent years due to the intervention of Western health care.",
            "We are sure to have another fascinating day today, visiting areas that few Westerners have ever been!",
            "Overnight camping in Kangate",
          ],
          image: images.surma2,
        },
        {
          title: "Day 8: Drive Kangate to Turmi",
          description: [
            "Please note that we do not have a fixed schedule for the next few days. Instead, your guide will assess daily which tribe is the best to photograph according to your particular photographic requirements.",
            "The Lower Omo Valley is situated within Africa's famous and, geologically speaking, rapidly expanding Great Rift Valley (which will eventually split the continent into two landmasses). Here, in south-west Ethiopia's awkwardly named “Southern Nations, Nationalities, and People's Region”, bordering Kenya and Sudan, the great Omo River dominates this dry savanna valley, resulting in some of Africa's most well-developed and best-preserved arid-zone riverine forests.",
            "The Omo River rises from the Shewan highlands to the north (much of Ethiopia consists of high-lying mountains and fertile plateaus, despite the impression created by some international media bodies that Ethiopia is predominately desert!). It flows 470 miles (750km), mostly southwards, before entering Lake Turkana (previously Lake Rudolf) near the Kenyan border. Lake Turkana, the world's largest permanent desert lake and also the planet's largest alkaline lake, has no water outflow, so in effect, it's a dead-end for the Omo River. The importance of the Lower Omo Valley has been recognized by UNESCO, which has declared it a cultural World Heritage site. It also contains two massive national parks and several important bird areas.",
            "After departing Kangate, and making our way across the Omo River and into a new tribal area. Here, our tribe of interest is the Karo, another tribe known for its elaborate body and facial paintings. These people live along the east bank of the Omo River and practice flood retreat cultivation, their main crops being maize, sorghum, and beans. Unlike the other tribes, they keep only a small number of cattle due to the prevalence of tsetse flies. Like many of the tribes in the Omo, they paint their bodies and faces with white chalk to prepare for any ceremonies.",
            "The chalk is mixed with yellow rock, red iron ore, and charcoal to make its requisite colour. Facemasks are worn at times and they have clay hair buns adorned with feathers.",
            "Scarification is also an important part of the Karo people's lives. This includes the complete scarification of a man's chest with which to indicate that he has killed an enemy or dangerous animal (Amongst the Karo, killing one's enemies isn't viewed as an act of murder, but as an act of honor!).",
            "This scarification process involves lightly slicing the skin with knives or razor blades and then rubbing ash into the open wounds to produce a permanently raised effect. The Karo women have decoratively scarred abdomens, which are considered sensual and very desirable.",
            "We then continue through the beautiful Omo Valley savannas, dotted with elongated termite mounds, to our comfortable lodge situated a few kilometers outside the village of Turmi. After settling in, we will be able to reminisce about the incredible sights and photographic opportunities of the past few days over an ice-cold beverage!",
            "Overnight in Turmi",
          ],
          image: images.omo2,
        },
        {
          title: "Day 9: Turmi area",
          description: [
            "The Hamar is one of the most well-known tribes in Southern Ethiopia. They inhabit the territory east of the Omo River and have villages in both Turmi and Dimeka.",
            "They are especially well known for their unique rituals, including a cattle-leaping ceremony that young men have to undergo in order to reach adulthood and marry. They are highly ‘superstitious' people, and to this day they consider twins to be babies born outside of wedlock, while children whose upper milk teeth develop before their lower teeth are deemed to be ‘evil' or ‘unclean'.",
            "For this reason, such children are discarded in the bush and simply left to die, as they would rather lose a single child than inflict any disaster upon their community. The Hamar people are also known for one of the most bizarre rituals on Earth. This is when the women allow themselves to be whipped by the male members of their family as a symbol of their love! The scars of such encounters are conspicuously evident on the bodies of all Hamar women.",
            "These women take great pride in their appearance and wear traditional dresses consisting of a brown goatskin skirt adorned with dense vertical rows of red and yellow beads. Their hair is characteristically fixed in dense ringlets with butterfat mixed with red ochre. They also wear many bracelets and necklaces fashioned of beads or metal, depending on their age, wealth, and marital status. The men wear woven cloth wrapped around the waist and many elders wear delicately colored clay head caps that are fashioned into their hair and adorned with an ostrich feather.",
            "As mentioned, the young Hamar men are famous for their “Evangadi dance” and “Bull jumping” ceremony (it is as part of this ceremony that the afore-mentioned whipping occurs). This ritual entails young men who wish to marry jumping over a line of bulls, thereby proving their worth to their intended bride's family. It also signifies their advent into adulthood. This is a rarely seen event, however, with luck, we may hear of, and even be invited to attend this landmark event.",
            "Overnight in Turmi",
          ],
          image: images.karo1,
        },
        {
          title: "Day 10: Drive to Jinka via Elbore",
          description: [
            "Early morning departure will take us to Jinka. We will have our first stop at Elbre where we will get more opportunities to capture these interesting people. Having enough time to spend with them, continuing onward to Jinka, where we will be staying for the following two nights.",
            "Overnight in Jinka",
          ],
          image: images.erbore1,
        },
        {
          title:
            "Day 11: Excursion to Mago national park to meet Mursi and explore the Jinka area",
          description: [
            "We have an early morning start as we enter Mago National Park at 06:00 in order to reach the Mursi Tribe while the light is still soft. Most famous for the clay lip plates that the women insert in their lower lips, the Mursi are probably one of the last tribes in Africa amongst whom it is still the norm for women to wear these large pottery or wooden discs or plates.",
            "The lip plate (dhebi a tugoin) has become the chief visible distinguishing characteristic of the fascinating Mursi people. A girl's lower lip is cut, typically by her mother or another woman of her settlement, when she reaches the age of 15 or 16. The cut is then held open by a wooden plug until the wound heals. It appears to be up to the individual girl to decide how far to stretch the lip, which she does by inserting progressively larger plugs over several months. Some girls even persevere until their lips can take plates of 5 inches (12 cm) or more in diameter!",
            "The Mursi and their neighbors became part of the Ethiopian State in the final years of the 19th century when Emperor Menelik II established control over the southwestern lowlands bordering Kenya and Sudan. This was an area inhabited by several small tribes with fluid identities, highly adaptable to environmental conditions, and capable of easily absorbing outsiders into their communities. The Mursi as we know them today are the product of a large-scale migratory movement of cattle-herding peoples in the general direction of the Ethiopian highlands. Three separate movements may be distinguished in the recent history of the Mursi, each the result of growing environmental pressure associated with the drying out of the Omo basin over the last 150 – 200 years.",
            "The Mursi attribute overwhelming cultural importance to cattle. Almost every significant social relationship – particularly marriage – is marked and authenticated by exchanging cattle. The “Bridewealth” (ideally consisting of 38 heads of cattle) is handed over by the groom's family to the bride's father, who must meet the demands of a wide range of relatives from different clans. This ensures that cattle are continually redistributed around the community, thereby helping to provide for the long-term economic security of individuals as well as their families.",
            "Overnight in Jinka",
          ],
          image: images.kafta1,
        },
        {
          title: "Day 12: Fly back to Addis and departure",
          description: [
            "After having breakfast, we depart to Jinka airport to connect with our schedule back to Addis Ababa. Upon arrival, we have secured a day room to refresh before you will be transported back to Bole International Airport for your international flight to your destination of choice.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 5,
    title: "Ethiopia Unveiled",
    index: false,
    image: images.mursi1,
    description:
      "A Photographic Journey Through Ancient Lands And Vibrant Tribes",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopia Unveiled",
        subtitle:
          "A Photographic Journey Through Ancient Lands And Vibrant Tribes",
        description: [
          'Commence a journey on a mesmerizing photographic journey through Ethiopia\'s ancient lands and vibrant tribal communities. "Ethiopia Unveiled" offers a unique opportunity to capture the raw beauty, rich cultural heritage, and untamed landscapes of this captivating country. From the bustling streets of Addis Ababa to the remote villages of the Mursi, Hamer, and Karo tribes, every moment is a visual feast waiting to be captured.',
          "Explore rock-hewn churches, witness traditional rituals, and immerse yourself in the daily lives of the tribespeople. This extraordinary expedition will take you through the Danakil Depression, Lalibela's mystical rock churches, the awe-inspiring Omo Valley, and more.",
          "Join us on this captivating journey and uncover the hidden treasures of Ethiopia through the lens of your camera.",
        ],
        lr: true,
        img1: images.tigray4,
        img2: images.lalibela7,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Capture the vibrant markets, historical landmarks, and cultural diversity of Ethiopia's capital.",
          },
          {
            title: "Danakil Depression",
            description:
              "Explore the otherworldly landscapes of this geologically remarkable region and photograph the striking colors of Dallol.",
          },
          {
            title: "Lalibela",
            description:
              "Witness the ancient rock-hewn churches and document the devotion of pilgrims.",
          },
          {
            title: "Mursi Tribe",
            description:
              "Venture into Mago National Park to meet the Mursi people and capture their unique traditions, including the iconic lip plates.",
          },
          {
            title: "Hamer Tribe",
            description:
              "Experience the fascinating cattle-leaping ceremony, photograph the vibrant attire, and document the daily rituals of the Hamer people.",
          },
          {
            title: "Karo Tribe",
            description:
              "Visit the Karo tribe known for their elaborate body painting and capture their stunning adornments against the backdrop of the Omo Valley.",
          },
          {
            title: "Arbore Village",
            description:
              "Photograph the stunning Arbore women and their traditional lifestyle in a scenic setting.",
          },
          {
            title: "Turmi Market",
            description:
              "Capture the vibrant atmosphere of the Hamer people selling their goods, and immerse yourself in the bustling market.",
          },
          {
            title: "Kangate and Nyangatom Tribe",
            description:
              "Explore the remote villages of the Nyangatom tribe and capture their unique way of life on the banks of the Omo River.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa, and explore the city's markets and landmarks.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Mekelle and drive to the Danakil Depression, capturing the sunset over Lake Assale.",
          },
          {
            title: "Day 3",
            description: "Explore the Dallol area and the salt mine.",
          },
          {
            title: "Day 4",
            description:
              "Drive to Gheralta, visit rock-hewn churches, and capture the scenic landscapes.",
          },
          {
            title: "Day 5",
            description:
              "Drive to Axum, fly to Lalibela, and explore the rock churches.",
          },
          {
            title: "Day 6",
            description:
              "Further exploration of the rock churches in and around Lalibela.",
          },
          {
            title: "Day 7",
            description:
              "Fly to Addis Ababa, connect to the flight to Jinka, and explore the Ari village.",
          },
          {
            title: "Day 8",
            description:
              "Excursion to Mago National Park to visit the Mursi tribe and capture their traditions.",
          },
          {
            title: "Day 9",
            description:
              "Drive to Turmi via Arboe, photograph the Arbore village, and settle in Turmi.",
          },
          {
            title: "Day 10",
            description:
              "Excursion to Dus village to meet the Kara tribe and capture their vibrant rituals.",
          },
          {
            title: "Day 11",
            description:
              "Excursion to Kangate village to visit the Nyangatom tribe and photograph their way of life.",
          },
          {
            title: "Day 12",
            description:
              "Excursion to Omorate to visit the Dassanach tribe and experience Lake Turkana.",
          },
          {
            title: "Day 13",
            description:
              "Turmi Market visit, photograph the Hamer tribe, and enjoy the vibrant atmosphere.",
          },
          {
            title: "Day 14",
            description:
              "Fly back to Addis Ababa, farewell dinner, and depart with unforgettable memories.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. After freshening up, you will start the day with a photoshoot in the Entoto hills, the highest point in Addis where the women wood carriers walk, donkeys roam and people pray at St. Mary's Church.",
            "From there you will walk the local Shiro Meda market where people shop for shema cloth and traditional clothing. You will photograph the pilgrims and priests at the ornate Holy Trinity Cathedral. Women in shama- traditional white shawls, and men deep in prayer are both inside this second most important place of prayer in Ethiopia as well as in the expansive courtyard.",
            "Lunch at the Lucy restaurant which is adjoining the Ethnological Museum which houses Lucy, the most complete skeleton ever discovered, being 3.2 million years old.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO MEKELLE & DRIVE TO DANAKIL DEPRESSION",
          description: [
            "After an enjoyable breakfast, transfer you to Addis Ababa airport for an hour's flight to Mekelle. At Mekele, you'll meet your vehicle and drive into the Danakil Depression. You'll begin the drive into the Danakil in good time so that you enjoy your drive in the cooler time of the day.",
            "The roads leading out of Mekele are smooth and asphalted, and driving further out of town there are some wonderful views of the landscape. As you drive further towards the Afar region, the roads are a maze of solidified lava, rock, and sand with an occasional palm-lined oasis.",
            "En route, you'll likely see long camel caravans going in and out of the Danakil as they are loaded with salt bars, the main export of this region.",
            "Overnight Camping in Danakil",
          ],
          image: images.danakil1,
        },
        {
          title: "DAY 3: EXPLORE THE DALLOL AREA & DRIVE TO GHERALTA",
          description: [
            "Before dawn, after a light breakfast, you start driving to Dallol. It is like nowhere else; a bizarre landscape of colorful mineral deposits, sulfur pools and geysers, where you will have this early morning to explore this seemingly alien terrain. You then visit the salt canyons, a bizarre landscape where we go for a short walk.",
            "On the way back to camp you cross the salt flats where you see the arduous work of salt being extracted by hand and loaded onto the camels.",
            "After freshen up and having lunch, we will leave the Danakil and climb the steep mountains to Gheralta, climbing from 100 meters below sea level up to 2500m.",
            "Overnight in Gheralta",
          ],
          image: images.yemata1,
        },
        {
          title: "DAY 4: DRIVE TO GHERALTA",
          description: [
            "Early in the morning exploration will take you to the very old and beautiful rock-hewn churches of Tigray. You will visit Mariam and Daniel Korkur which is perched on the top of Gheralta Mountain. In the afternoon, you will visit Abun Yemata Guh which is one of the finest rock-hewn churches in Tigray.",
            "Overnight in Gheralta",
          ],
          image: images.yemata2,
        },
        {
          title: "DAY 5: DRIVE TO AXUM & FLY TO LALIBELA",
          description: [
            "Early in the morning, you will transfer by road (4hrs.) to Axum. This is one of the most amazing scenic drives along different magnificent terrains, and stunning vistas along rural villages. Upon arrival, you will check in to your flight to Lalibela. It is home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level.",
            "Lalibela is the 8th  wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 7: FLY TO ADDIS & CONNECT TO YOUR FLIGHT TO JINKA",
          description: [
            "After breakfast, you transfer to the airport and take the short flight back to Addis Ababa and transfer to your flight that departs at 11:40 am flight to Jinka arriving at 1:00 pm. The afternoon will be spent walking the packed village lanes of the Ari village.",
            "These very rural people are friendly, some homes are brightly painted, they do pottery, grow sorghum, and daily life is easily photographed. Chickens in the yards, kids wanting to hold your hands, and women cooking by fire all make for a great introduction to the Omo Valley.",
            "These people are not painted, pierced, or decorated but are an excellent representation of rural southern Ethiopia. You will visit the school in the village. The classrooms are visually compelling and great to document. We will walk up the main road visiting the houses and meeting the people.",
            "We will be spending the night in the Eco Omo Lodge which is on the banks of the river where people bathe, clothing gets washed and cars get cleaned.",
            "Overnight in Jinka",
          ],
          image: images.omo3,
        },
        {
          title: "DAY 8: EXCURSION TO MAGO NATIONAL PARK TO VISIT MURSI",
          description: [
            "Early morning before dawn, you will take the two-hour ride through Mago National Park to reach a Mursi village. As they are nomadic it is impossible to name the settlement you will visit. The women wear circular clay lip plates, the men are garbed in large towel-like wraps. Photographing women grinding sorghum and breastfeeding while making their morning coffee which they drink out of gourds is possible.",
            "Our guides handle the photo fee payments so you can shoot with abandon. For protein, the men bleed a bull in the early morning and drink its blood. The homes are thatched straw and sticks, and these people are known to keep traditions very much intact.",
            "Many men have body adornments. A sense of humor is needed to fully appreciate the Mursi photographic experience. The afternoon will be spent wandering the dirt street and markets of Jinka. The market is colorful and vibrant with many bars, and stores selling plastic woven baskets, and day-to-day items.",
            "Splitting into small groups a guide will help you with translation, setting up shots if desired, and see to it that you can photograph freely. Lodging nice again will be at the Eco Omo Lodge which has a patio where the group can have cold beer or hot coffee after this long day.",
            "Overnight in Jinka",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 9: TURMI VIA ARBORE",
          description: [
            "Proceeding further into the scenic Weito lowlands, you will be visiting an Arbore tribal village located at the northern edge of Mount Buska. The Arbore women are absolutely stunning; they have extremely dark skin and strong features.",
            "Prior to marriage, the women have their heads shaved. They wear dark robes, colorful beads, and their huts are fabricated from tree branches. You will work on your portraiture skills in this village. Arriving in Turmi late in the afternoon, you will be spending the night at the Buska Lodge which will be your base for the next few days.",
            "These round-shaped tukul lodges have porches and are on the bank of a stream. If you like shooting star trails this is your mecca as there is little light pollution.",
            "Overnight in Turmi",
          ],
          image: images.erbore1,
        },
        {
          title: "DAY 10: TURMI - DUS - TURMI",
          description: [
            "Departing Turmi at 5:00 AM, you will head to Dus, the friendliest village of the Kara tribe. Settled on the banks of the Omo River, this tribe is known for their creative and decorative body chalk painting. Many of the Kara women have pierced lips and insert nails and pins.",
            "Photographing on the bank of the Omo River can yield images of the kids diving into the water. You will shoot a cattle and goat drive which is iconic.",
            "Dust swirling, men with guns and long herders stick driving their herd to the water. You will photograph the ceremonial, communal dance performed by the people of Dus. They will invite you into their huts for coffee to be had out of a gourd.",
            "The Kara of Dus prides themselves as the best dancers in the Omo. You will also photograph these warm and inviting people on the banks of the Omo and in the shade, under the large umbrella-like trees.",
            "You will be bringing a picnic breakfast and lunch with us. Overnight in Turmi",
          ],
          image: images.omo4,
        },
        {
          title: "DAY 11: TURMI - KANGATEN - TURMI",
          description: [
            "Starting off from Turmi at sunrise you will be heading to Kangate, home to the Nyangatom tribe that historically is said to be a split group from the Toposa tribe of South Sudan. Settled on the other side of the Omo River, You will be crossing the Omo River where you will be able to access and visit remote tribal villages. The teenage boys are lively and like to play much of the day.",
            "The women are topless and wear many strands of heavy beads, the girls are playful and love to have their images taken.",
            "Mid-afternoon, you will return to Turmi where you will be spending another night at the Buska Lodge. You can also photograph the Hamer tribe digging for water, smoking out bees, or doing another local village sunset shoot.",
            "Overnight in Turmi",
          ],
          image: images.hamer2,
        },
        {
          title: "DAY 12: TURMI - OMORATE-TURMI",
          description: [
            "Departing Turmi at 5:00 AM, you will be heading to Omorate, home of the Dassanach tribe who are said to be descendants of the Turkana tribe in North Kenya. Like many of these tribal groups, they use chain links and other Western ‘cast-offs' as decorative objects.",
            "Crossing the newly constructed Omo River Bridge and driving further for 12 km, we will be able to photograph a remote Dassanach tribal village, just 11 km from the shores of Lake Turkana.",
            "You will photograph the women cooking by fire, grinding corn meal, and the men with their flock. You will try to continue further south to Lake Turkana to see and photograph the small wooden fishing boats and Dassanch people.",
            "Overnight in Turmi",
          ],
          image: images.suri1,
        },
        {
          title: "DAY 13: TURMI",
          description: [
            "This being Monday we will attend the Turmi market. The Hamer people will be selling honey, snuff, foodstuffs, and local wares. You will be able to wander freely shooting the many stalls. Of note the stores have some artistic designs and the crafts market is the best in the Omo.",
            "The grain mills are amazing and many stores are great backdrops for street photography. You may encounter the ritualistic bull jumping ceremony usually around Turmi. The women dance, the bells on their ankles making a distinctive noise that blends in with the bugles they blow.",
            "The age group (16-25) of men called Maza to whip the women as a sign of devotion as they will be responsible for the women as they grow old. Not less than five bulls are lined up and the nude guy will run across them numerous times. Once successfully completed he is entitled to marry.",
            "Over Night in Buska Lodge",
          ],
          image: images.omo2,
        },
        {
          title: "DAY 14: ADDIS ABABA",
          description: [
            "Today we will fly back to Addis Ababa from the Jinka airport. The group will return to Addis early in the afternoon and go to a Fair Trade home goods store that has the highest quality fabrics/ shawls/ linen. Those leaving on late-night flights will be driven to the airport. The farewell dinner will be in the hotel.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 5,
    title: "Ethiopian Highlands Revealed",
    index: false,
    image: images.simien1,
    description: "A Photographic Odyssey Through Mountains And Wildlife",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Highlands Revealed",
        subtitle: "A Photographic Odyssey Through Mountains And Wildlife",
        description: [
          'Embark on an unforgettable photographic journey through the stunning landscapes and rich wildlife of Ethiopia\'s highlands. "Ethiopian Highlands Revealed" invites you to capture the raw beauty, endemic species, and cultural heritage of this breathtaking region.',
          "From the bustling city of Addis Ababa to the dramatic Simien and Bale Mountains National Parks, every moment is a visual feast waiting to be immortalized through your lens.",
          "Explore the Rift Valley Lakes, marvel at Gondar's imperial palaces, and witness the unique gelada baboons and Ethiopian wolves in their natural habitats. This extraordinary expedition will take you on a captivating visual odyssey through the heart of Ethiopia.",
        ],
        lr: true,
        img1: images.simien1,
        img2: images.bale2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in Ethiopia's capital, capturing the vibrant cityscapes, markets, and cultural diversity.",
          },
          {
            title: "Rift Valley Lakes",
            description:
              "Photograph the serene beauty of Lake Langano and Lake Ziway, home to a rich variety of waterbirds.",
          },
          {
            title: "Bale Mountains National Park",
            description:
              "Explore the Afro-alpine moorlands, photograph the endangered Ethiopian wolves, and encounter the endemic Giant Mole Rat.",
          },
          {
            title: "Gondar",
            description:
              "Capture the imperial palaces, ancient castles, and the beautiful Debre Berhan Selassie church.",
          },
          {
            title: "Simien Mountains National Park",
            description:
              "Witness the dramatic landscapes, photograph the endemic Gelada baboons, and search for the endangered Walia Ibex.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa, explore the city and photograph its landmarks.",
          },
          {
            title: "Day 2",
            description:
              "Drive to Lake Langano and Lake Ziway, capturing the beauty of the Rift Valley Lakes.",
          },
          {
            title: "Day 3",
            description:
              "Journey to Goba, immersing yourself in the scenic landscapes along the way.",
          },
          {
            title: "Day 4-5",
            description:
              "Explore the Bale Mountains National Park, photographing Ethiopian wolves and endemic wildlife.",
          },
          {
            title: "Day 6",
            description:
              "Drive to Hawassa, photographing the Wattled and Black Crowned Cranes.",
          },
          {
            title: "Day 7",
            description:
              "Fly to Gondar, visit the imperial palaces and Debre Berhan Selassie church.",
          },
          {
            title: "Day 8",
            description:
              "Drive to Simien Mountains National Park, capturing the dramatic landscapes.",
          },
          {
            title: "Day 9-10",
            description:
              "Explore the Simien Mountains, photographing Gelada baboons and endemic species.",
          },
          {
            title: "Day 11",
            description:
              "Return to Gondar, capturing the scenic beauty of the region.",
          },
          {
            title: "Day 12",
            description:
              "Fly back to Addis Ababa, concluding the journey with a collection of unforgettable images.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS",
          description: [
            "The tour starts this morning in Addis Ababa. You can choose to arrive by air this morning with Ethiopian Airlines or by another carrier, or you can elect to arrive the previous day and get some rest by having an extra hotel night. If you arrive early enough you can explore the city if you wish. There are plenty of interesting things to see, including Emperor Menelik's tomb, the cathedral, the national museum and the huge and fascinating Mercato open-air market.",
            "From ‘Addis' we will head southeastwards, dropping down from the highlands to the hotter, more arid Great Rift Valley (a vast and dramatic geological feature that runs all the way from southeastern Turkey to southern Africa!).",
            "We may opt to take a break at Lake Chelekleka on the outskirts of Bishoftu. It is rich in waterbirds, including Great White Pelicans, Common Cranes and many others, but if not we will press on to Lake Koka, often a great site for photographing impressive (and noisy) African Fish Eagles and sometimes the beautiful Black Crowned Crane. There are often so many eagles here that fights over fish break out.",
            "This afternoon we will arrive at Lake Ziway, where we will overnight at a comfortable hotel right at the lakeside. Lake Ziway is a great place for photography, and of course of a kind we will not enjoy while in the Bale or Simien. We can walk out directly onto either of two promontories that start at our hotel and enjoy the spectacle of numerous waterbirds, most of which are highly approachable. (An important aspect of Ethiopia, and one which makes it so good for wildlife photography, is that birds and indeed most creatures are not harmed by local people.)",
            "Large flocks of Great White Pelicans are a feature here and we are likely to get surprisingly close to these huge and impressive birds. Among the many other stars are the jewel-like Malachite Kingfisher, the long-toed African Jacana, the huge Goliath Heron, the strange Hamerkop and the superb Saddle-billed Stork. Additional species we are likely to shoot include White-faced and Fulvous Whistling Ducks, Spur-winged and Egyptian Geese, Hottentot Teal, Pink-backed Pelican, Reed Cormorant, African Darter, African Sacred and Glossy Ibises, Yellow-billed Stork, Black-winged Stilt, Spur-winged Lapwing, Gull-billed and White-winged Terns, Red-eyed Dove and Pied Kingfisher (try and take them hovering). Rather macabre Marabou Storks nest in the trees around the hotel.",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: DRIVE TO HAWASSA",
          description: [
            "We will set off early and drive the short distance to the northern end of Lake Langano. The grounds of a rather run-down hotel usually hold impressive Greyish Eagle-Owls and many cryptically-coloured Slender-tailed Nightjars, and while looking for these nightbirds we are likely to find and photograph the endemic Black-winged Lovebird and Red-throated Wryneck, as well as Namaqua Dove, White-bellied Go-away-bird, the weird-looking Speckled Mousebird, Little Bee-eater, Eurasian Hoopoe, Black-billed Wood Hoopoe, and colourful Greater Blue-eared, Rüppell's and Superb Starlings.",
            "From Langano we continue south to the town of Shashamane for lunch and then, during the late afternoon, we will explore the rarely-visited Senkelle Wildlife Sanctuary, the last stronghold of the endemic Swayne's Hartebeest. These impressive chestnut-coloured antelopes are still common here and the grasslands also feature White-bellied Bustard and the gorgeous Northern Carmine Bee-eater. Eventually, we will arrive at Hawassa, a town situated beside the lake of the same name, where we will overnight.",
          ],
          image: images.hawassa1,
        },
        {
          title: "DAY 3: DRIVE TO BALE MOUNTAIN NATIONAL PARK",
          description: [
            "Our hotel is situated right at the lakeshore and the grounds and surroundings are a great place for early morning photography. Beautiful, black and white Guereza Colobus monkeys with long bushy tails frequent the area and, since the hotel staff gives them a few tidbits, are very confiding, allowing for great shots. Mothers with tiny infants are especially appreciated. Grivet Monkeys also occur here and the more photogenic birds include the delightful little African Pygmy Goose, Squacco Heron, the perky little Black Crake and Woodland Kingfisher. African Spotted Creeper, a very uncommon and patchily-distributed bird, also occurs here, but we cannot honestly claim it will be at the top of most folk's targets!",
            "Not far out of town is the fish market, where enterprising fisher folk have found out they can get a small tip from visiting photographers for throwing fish to the Marabou Storks. We will spend a little time here to enjoy the spectacle before our thoughts turn to high mountains almost empty of people.",
            "After the day starts to heat up we will head up into the Bale Mountains for a four nights stay at Goba. This afternoon we will enjoy our first outing in these beautiful mountains.",
          ],
          image: images.bale1,
        },
        {
          title: "DAY 4-5: EXPLORE BALE MOUNTAIN NATIONAL PARK",
          description: [
            "We will be spending much of our time exploring the wild and spectacular Afro-alpine moorlands of the high Sanetti Plateau, one of the best places in the Bale Mountains for finding Ethiopian Wolf. The handsome Ethiopian (or Simien) Wolf has had a difficult time in recent decades, suffering from distemper epidemics introduced by domestic dogs (incursions of which have become more common as the region's human population has increased). This is now the world's rarest canid, although, happily, a recent campaign to vaccinate local dogs, organized by the Ethiopian Wolf Conservation Programme has brought about a welcome rebound in the population.",
            "The wolves tend to go around singly or in small groups and during the course of our visit we should have repeated encounters with them, watching them patrol their territories, greet each other, relax or hunt rodents and other prey. While we should be able to see them catch rodents, you can consider yourself lucky if you witness a close-up ‘kill' and likewise, although most packs will have pups this season, getting great photo opportunities with cubs must be considered a real bonus.",
            "The number of rodents here is quite extraordinary, and of course, they provide a bonanza for predators. It is estimated that their density is such that the combined weight of rodents per square kilometre (or about 0.4 square mile) is no less than 4 tons! The great majority on the moorlands (and the main prey species of the Ethiopian Wolf) consist of three Ethiopian endemics: Blick's Grass Rat, Black-clawed Brush-furred Rat and the extraordinary, endangered Giant Mole Rat. The latter, a huge blind rodent with very goofy teeth, is constantly enlarging its burrows to reach new food supplies and we will have some fun trying to sneak up on them to take some photos. They have good hearing and also detect vibrations, so in spite of their blindness, a close approach is not easy!",
            "While the handsome Mountain Nyala is regularly seen on the moorlands, the landscape is open and approaching them closely on foot is often unsuccessful. For far better opportunities we will head for the Bale Mountains National Park headquarters at Dinsho. Here, some of the Nyalas have become unafraid of humans and will allow a close approach, as will Menelik's Bushbucks and especially the ultra-tame Common Warthogs, which one can get to within a couple of meters!",
            "Dinsho is also a good place for bird photography, often including African Wood Owl, the huge Verreaux's Eagle-Owl and the uncommon endemic Abyssinian Owl. (Cape Eagle-Owls also occur here, but are usually too distant for good images.)",
          ],
          image: images.bale2,
        },
        {
          title: "DAY 6-DRIVE TO AWASSA",
          description: [
            "After a final photography session in the Bale Mountains, we will descend to the Awassa area for an overnight stay.",
          ],
          image: images.hawassa1,
        },
        {
          title: "DAY 7-FLY BACK TO ADDIS ABABA & FLY TO GONDER",
          description: [
            "We will spend the early morning in the Hawassa area, concentrating on the beautiful and spectacular Wattled and Black Crowned Cranes. We could well see and photograph the latter species dancing. There will be plenty of other species to photograph, including a good selection of waterbirds.",
            "Afterwards, we will head northwards to Addis Ababa airport, from where we take an early evening flight to Gondar, a city situated not far from Lake Tana in northern Ethiopia. We will stay overnight at the comfortable Goha Hotel, perched on a high hill with a spectacular view over the city.",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 8 - DRIVE TO SIMIEN MOUNTAINS NATIONAL PARK",
          description: [
            "Before we leave Gondar, we will visit the Imperial Palaces and the Debre Berhan Selassie church.",
            "Officially founded by Emperor Fasiledes in 1636 as the third permanent capital city of Ethiopia, Gondar is notable for its most impressive Imperial Palaces/Castles and churches. The dramatic, castle-style palaces built over a period of more than 150 years reveal the influence of Axumite, Indian and even Portuguese and Moorish architecture in Ethiopia.",
            "The beautiful church of Debre Berhan Selassie, famous for the colourful mural paintings on the ceiling, which according to legend was saved by a swarm of bees when the Mahdist soldiers from Sudan sacked and burned down the city in the 1880s, reflects the religious art of the Gondarine period.",
            "Afterwards, we will head for the World Heritage Site of Simien Mountains National Park. The drive between Gondar and Debark is very scenic, particularly at Kosoye some 32km (20 miles) north of Gondar, where Queen Elizabeth II of England camped in 1965 while driving between Gondar and Axum.",
            "At Debark we will collect a park scout and permits at the park headquarters and then continue our drive to Simien Lodge, where we stay for three nights. This afternoon, after lunch at our dramatically-situated lodge (which claims to be the highest lodge in Africa, and they are surely right!) we will start our photographic exploration of the extraordinary Simien Mountains.",
          ],
          image: images.gonder2,
        },
        {
          title: "DAY 9-10: EXPLORE SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "Created by massive erosion, the Simien Mountains is one of the most spectacular landscapes in the world: jagged mountain peaks with many summits over 4,000m (roughly 13,000ft), deep valleys and 1,500m sheer precipices. The park is home to the highest peak in the country, Ras Dashen, which is 4543 meters (14,906ft) above sea level.",
            "The Simien Mountains is also the refuge of the endangered endemic Ethiopian (or Simien) Wolf, the extraordinary Gelada Baboon and the endangered Walia Ibex, a wild goat unique to Ethiopia. It is also home to endemic birds such as the Thick-billed Raven and Wattled Ibis.",
            "In addition to its wonderful scenery and wildlife, the park is also famous for its Afromontane forest, Hypericum woodland, Afromontane grassland and Afro-alpine moorland dominated by Giant Lobelias, Red Hot Pokers, tree heaths, and giant St. John's Wort and African Roses. As you can see, no Ethiopia wildlife photography tour can afford to miss out on the extraordinary Simien!",
            "We will explore the scenic Simien escarpment in order to find the endemic Gelada Baboons. Nicknamed ‘bleeding heart baboon' and ‘lion-monkey' for reasons that will soon be obvious to all, Gelada Baboons are peculiar to Ethiopia and Eritrea, still being numerous in the Simien Mountains. Geladas are mainly vegetarian, living on herbs, grasses and roots, but they also eat insects including locusts. Geladas live along the rim and steep slopes of the escarpment, which is their refuge when danger threatens.",
            "On one or more days, after an early breakfast, we will leave the lodge for Chenek guard post, taking a picnic lunch. The scenery around Chenek is even more awesome than further west near our lodge, with huge peaks, crags and cliffs in the foreground and distant granite domes below the Simien escarpment. Here we can look for the endemic Walia Ibex. As well as photographic opportunities with the ibex, we will also be hoping for an encounter with the handsome Ethiopian (or Simien) Wolf, a declining species that still occurs regularly around Chenek.",
            "We also have a high chance of spotting wildlife such as Ethiopian Klipspringer, Menelik's Bushbuck, Bush Duiker and raptors including the huge Steppe Eagle, Tawny Eagle and the magnificent Bearded Vulture or Lammergeier.",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 11: DRIVE TO GONDER",
          description: [
            "After spending much of the day in the Simien, we will return to Gondar for an overnight stay.",
          ],
          image: images.gonder3,
        },
        {
          title: "DAY 12: FLY TO ADDIS ABABA",
          description: [
            "Our Ethiopia wildlife photography tour concludes with a morning flight to Addis Ababa.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 6,
    experience: 5,
    title: "Ethiopia's Wildlife And Cultural Encounters",
    index: false,
    image: images.awash1,
    description: "Awash & Hyena Men Of Harar",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopia's Wildlife And Cultural Encounters",
        subtitle: "Awash & Hyena Men Of Harar",
        description: [
          "Start a voyage on a captivating journey through Ethiopia's diverse landscapes, where wildlife encounters and cultural experiences await photographers seeking extraordinary moments. This 5-day extension takes you to the spectacular Awash National Park, home to diverse mammals and a plethora of bird species. Capture the magnificence of Nile Crocodiles and photograph avian wonders like Lappet-faced Vultures, Tawny Eagles, and Abyssinian Rollers.",
          "Immerse yourself in the ancient city of Harar, known for its rich history and unique traditions. Witness the awe-inspiring Hyaena Men, as they interact with spotted hyenas in a mesmerizing display of trust and connection. Explore Harar's ancient medina, capturing the vibrant streets, bustling markets, and ornate mosques. Photograph the mesmerizing Yellow-billed Kites as they swoop down to feed.",
          "This extension offers a blend of wildlife photography, cultural immersion, and unforgettable encounters, adding an extra dimension to your Ethiopian adventure.",
        ],
        lr: true,
        img1: images.awash1,
        img2: images.awash2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Awash National Park",
            description:
              "Capture diverse wildlife, including Olive Baboons, Salt's Dikdiks, and Beisa Oryx, while photographing a wide variety of bird species in the park's stunning landscapes.",
          },
          {
            title: "Harar",
            description:
              "Immerse yourself in the ancient city's captivating history, explore the winding alleyways of the medina, and witness the vibrant culture and architecture that make Harar a photographer's paradise.",
          },
          {
            title: "Hyaena Men of Harar",
            description:
              "Witness a truly unique spectacle as the Hyaena Men interact with spotted hyenas up close, offering unparalleled photography opportunities and an unforgettable wildlife encounter.",
          },
          {
            title: "Cultural Immersion",
            description:
              "Engage with the local Afar people in the Bilen area, gaining insight into their traditional lifestyle and capturing authentic portraits and cultural moments.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Drive to Awash National Park",
          },
          {
            title: "Day 2",
            description: "Explore Awash National Park",
          },
          {
            title: "Day 3",
            description: "Explore the Bilen area and journey to Harar",
          },
          {
            title: "Day 4",
            description:
              "Photography session with the Hyena Men and exploration of Harar",
          },
          {
            title: "Day 5",
            description:
              "Explore Harar's medina, capture the Yellow-billed Kite feeding, and return to Addis Ababa.",
          },
          {
            title: "Day 6",
            description: "Fly to Addis Ababa",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: DRIVE TO AWASH NATIONAL PARK",
          description: [
            "We will leave Addis Ababa behind and head eastwards, leaving the fertile highlands behind and traveling through an increasingly arid country until we reach Awash National Park, where we will stay overnight at a comfortable lodge at Awash Falls.",
            "The spectacular falls are right beside the lodge and are a great place to practice the pleasing effect of slow shutter speeds as the light dims. Large Nile Crocodiles are a feature here and can be photographed on the river banks and partly-submerged rocks, displaying those awesome arrays of teeth. This afternoon will have our first opportunity to explore further afield.",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: EXPLORE AWASH NATIONAL PARK",
          description: [
            "We will spend the morning at Awash National Park. The terrain is mostly a mosaic of grassland and acacia scrub, but the Awash River flows through the area and supports some thin strips of riverine forest in places. A distinct advantage of Awash (and indeed all national parks we visit in Ethiopia) compared to many other African parks is that one is allowed to get out of the vehicles and photograph on foot owing to the virtual absence of dangerous mammals.",
            "Awash holds some interesting mammals, including Olive Baboon, the delightful little Salt's Dikdik, and the handsome Beisa Oryx. With a bit of luck, we will also encounter Northern Lesser Kudu.",
            "Birdlife is rich and varied (over 400- species have been recorded from Awash) and among the most appealing photographic targets are the huge Lappet-faced Vulture, Tawny Eagle, Pallid and Montagu's Harriers, Pygmy and Lanner Falcons, Kori, Buff-crested and White-bellied Bustards, Black-headed Lapwing, Chestnut-bellied Sandgrouse, Blue-naped Mousebird, the superb Abyssinian Roller, the wonderful Northern Carmine Bee-eater (which sometimes uses the backs of Kori Bustards or even Somali Ostriches as a convenient lookout!), Northern Red-billed and Eastern Yellow-billed Hornbills, and the lovely Rosy-patched Bushshrike (pairs often duet together).",
            "This afternoon we will penetrate further into the Awash region, to the Bilen area for a two-night stay. This interesting area is inhabited by Afar people who were formerly nomadic herders but now live a more settled existence, although they continue to use the long, rounded thatched dwellings that they used while moving from one area of pasture to another.",
            "Late this afternoon we will start our exploration of the Bilen area.",
          ],
          image: images.awash1,
        },
        {
          title: "DAY 3: EXPLORE",
          description: [
            "The dry plains of this part of the Awash River region hold the near-endemic Sacred (or Hamadryas) Baboon, as well as Soemmering's Gazelle, Beisa Oryx, and the long-necked Northern Gerenuk. Interestingly, the Golden Jackals of Africa have recently been split off as a distinct species, African Golden Wolf, on the basis that their genetics place them closer to wolves and coyotes. There is a good chance of photographing this newly ‘promoted' wolf in this area.",
            "The open grasslands and acacia bushlands here are a stronghold of the stately, but declining Arabian Bustard, while other great birds to photograph include such restricted-range specialties as the huge Somali Ostrich, Hartlaub's Bustard, and Somali Fiscal. If we are in luck we will come across an Arabian Bustard with one or more Northern Carmine Bee-eaters riding on its back! This truly extraordinary photographic highlight is dependent on how many bee-eaters are around. They use the bustards as convenient ‘lookout posts' from which to hawk large flying insects. Somewhat surprisingly, the bustards seem to tolerate these colorful ‘hitch-hikers'.",
          ],
          image: images.awash2,
        },
        {
          title: "DAY 4: HARAR",
          description: [
            "We will spend the early morning in the Bilen area before setting out for the Chercher Mountains and the city of Harar, where we will spend two nights. We will arrive in the afternoon in time to prepare for our first session this evening with the ‘Hyena Men'.",
            "Harar is an ancient city, known simply as Gey (‘the city') to its inhabitants. The date of its foundation is unknown, but it was already important by the 13th century and later became the capital of the Adal Sultanate and its successor state, the Emirate of Harar, in the 16th century.",
            "Quite how the Hararis started feeding Spotted Hyenas is lost in legend, but it does seem they were tolerated and indeed encouraged in the city as nocturnal scavengers as far back as the 16th century, as low doorways were built at that time in the city walls to accommodate them! The various legends about feeding include stories that they were publicly fed porridge so that they could act as impromptu soothsayers through their style of eating it, or that they were fed to discourage them from eating livestock or even people during droughts, or even that Muslim saints communicated with their clan leaders and persuaded them not to do harm in return for handouts.",
            "In any event, it seems the feeding had long since stopped before it was revived in the 1950s or 1960s, perhaps through nothing more than chance encounters with hyenas and the inclination to see if they would accept food. Since then it has become a nightly event at Harar, with two senior ‘Hyena Men', Mulugeta Wolde-Mariam and Yusuf Mume Saleh, and their assistants, operating at two different sites outside the walls.",
            "Spotted Hyenas have a fearsome reputation, only partly because of their manner and appearance, but also because of their ruthless hunting style in the wild, so seeing them come close to humans and take meat from small sticks held in what seems a tiny hand, next to their huge muzzles, or even a human mouth, seems pretty awesome to the rest of us! Not only do the hyenas take food but they ‘lovingly' rest their huge paws on the Hyena Man's back or head and generally behave like large friendly dogs!",
            "As well as being able to take photographs, at close range, of the Hyena Men and their nightly ‘guests' from the surrounding forests (where the hyenas live a perfectly normal life for 23 hours a day), we will also be able to get great shots of them lurking in the background, resting before they feed or prowling in sinister fashion. If you are so inclined you can get down low for better angles (so far they have never eaten anyone!) and if you are really brave you will get the chance to feed them yourself.",
            "Needless to say, the whole experience is utterly unforgettable and a wildlife photography encounter that is completely unique.",
          ],
          image: images.harar1,
        },
        {
          title: "DAY 5: HARAR",
          description: [
            "This morning there will be time to explore the ancient medina of Harar and its surrounding fortifications, known as the Jugal (or Jugol). The walled old city dates back to around the 16th century and is a fascinating warren of small alleyways, markets, mosques, and ancient buildings. Harar is widely considered to be the 4th holiest city in Islam, after Mecca, Medina, and Jerusalem, but today it is famed for its tolerance of other faiths, and Harar beer, brewed naturally enough by Christians, is widely available. It is said that there are 99 mosques in Harar, chiming with the 99 known names of Allah, but in reality, there are ‘only' 86. Harar is a wonderful place for photography, especially if you get out early while the light is at its best.",
            "We will also enjoy a photographic session with the ‘Kite Man' of Harar. Feeding the Yellow-billed Kites is a recent development, not some ancient tradition, but it is fun to watch and photograph the kites swooping down and often squabbling in mid-air over small pieces of meat from the ‘Kite Man's' hands.",
            "During the late afternoon, we will try and find some of the Spotted Hyenas lurking in the dry woodland near the town prior to gathering for the evening feast. It will be good to have some daytime shots to balance the nocturnal spectacle. After dark, we will, of course, return for a second session outside the town walls with the ‘Hyena Men', something none of us will ever forget!",
          ],
          image: images.harar2,
        },
        {
          title: "DAY 6: FLY TO ADDIS ABABA",
          description: [
            "Today we will return to Addis Ababa, where the extension ends in the evening.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 7,
    experience: 5,
    title: "Enchanting Encounters",
    index: false,
    image: images.hamer1,
    description:
      "Photographic Journey Through The Tribal Landscapes Of Ethiopia",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Enchanting Encounters",
        subtitle:
          "Photographic Journey Through The Tribal Landscapes Of Ethiopia",
        description: [
          "Dive into an experience on an extraordinary photographic adventure that will immerse you in the captivating beauty and cultural richness of Ethiopia. This carefully curated tour takes you on a mesmerizing journey through the Omo Valley, where remote tribes preserve their ancient traditions amidst breathtaking landscapes.",
          "From the bustling streets of Addis Ababa to the remote villages of the Suri, Hamar, Karo, and Mursi tribes, each day is filled with opportunities to capture unforgettable moments.",
          "Led by experienced guides and photographers, this tour offers a unique blend of discovery, cultural exchange, and artistic exploration. Get ready to unleash your creativity as you witness the vibrancy of Ethiopia's tribal heritage through your lens.",
        ],
        lr: true,
        img1: images.awash1,
        img2: images.awash2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Suri Tribe",
            description:
              "Explore the lesser-known Suri tribe, capturing their unique way of life in stunning portraits.",
          },
          {
            title: "Karo Tribe",
            description:
              "Witness the elaborate body and facial paintings of the Karo tribe, offering a glimpse into their ancient customs.",
          },
          {
            title: "Hamar Tribe",
            description:
              "Immerse yourself in the vibrant traditions of the Hamar tribe, known for their bull-jumping ceremonies.",
          },
          {
            title: "Mursi Tribe",
            description:
              "Encounter the renowned Mursi tribe, famous for the clay lip plates worn by their women.",
          },
          {
            title: "Mago National Park",
            description:
              "Marvel at the diverse landscapes of Ethiopia, from lush forests and cultivated lands to the untamed beauty of Mago National Park.",
          },
          {
            title: "Expert Guides",
            description:
              "Benefit from the expertise of experienced guides and photographers who will provide insights, tips, and guidance throughout the journey.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrival in Addis Ababa",
          },
          {
            title: "Day 2",
            description: "Fly from Addis Ababa to Jimma",
          },
          {
            title: "Day 3",
            description: "Drive from Jimma to Mizan Teferi",
          },
          {
            title: "Days 4-6",
            description:
              "Explore the Kibish area, focusing on the fascinating Suri tribe",
          },
          {
            title: "Day 7",
            description: "Drive from Kibish to Jimma",
          },
          {
            title: "Day 8",
            description: "Drive from Jimma to Arba Minch",
          },
          {
            title: "Day 9",
            description:
              "Drive from Arba Minch to Turmi, where the Hamar tribe resides",
          },
          {
            title: "Day 10",
            description:
              "Capture the beauty of the Karo tribe and revisit the Hamar tribe",
          },
          {
            title: "Day 11",
            description:
              "Continue photographing the Hamar tribe before heading to Jinka",
          },
          {
            title: "Day 12",
            description:
              "Early morning visit to the Mursi tribe in Mago National Park, followed by departure from Jinka to Addis Ababa",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "Day 1: Arrival in Addis Ababa",
          description: [
            "Today is set as an arrival day for our Ethiopian photo safari, where we will overnight in Addis Ababa.",
          ],
          image: images.addis1,
        },
        {
          title: "Day 2: Fly From Addis Ababa to Jimma",
          description: [
            "Our journey out of Addis Ababa commences as we fly to Jimma, the largest city in southwestern Ethiopia and where we will overnight.",
          ],
          image: images.kaffa1,
        },
        {
          title: "Day 3: Drive Jimma to Mizan Teferi",
          description: [
            "Today on our Omo Valley Photography Tour, we will be continuing our southwest routing as we make our way to Mizam Teferi. The 240km drive (approximately 7 hour drive time) is made up of a mosaic of forest and cultivated land dominated by coffee, tea, and various spices, and we will have ample opportunity to stop and take advantage of any photographic opportunities we may encounter.",
          ],
          image: images.konso2,
        },
        {
          title: "Days 4 to 6: Kibish Area (Suri Tribe)",
          description: [
            "After passing through the town of Tulgit, we will finally arrive in Kibish, where we will be camping for the next three nights. Much of our focus for the coming days will be photographing the fabulous Suri people, who due to their remoteness are one of the least visited of the Omo Valley's tribes.",
          ],
          image: images.suri1,
        },
        {
          title: "Day 7: Drive Kibish To Jimma",
          description: [
            "After a scrumptious breakfast prepared by our camp crew, we depart back to Jimma where we will overnight. Our drive today will take the best part of the day.",
          ],
          image: images.kaffa2,
        },
        {
          title: "Day 8: Drive Jimma to Arba Minch",
          description: [
            "Today depart Jimma for Arba Minch, the gateway to the eastern Omo Valley (the drive today will also take the best part of the day).",
          ],
          image: images.chebera1,
        },
        {
          title: "Day 9: Drive Arba Minch to Turmi (Hamar Tribe)",
          description: [
            "This morning we have an early start as we depart Arba Minch shortly after breakfast for the town of Turmi. The Hamar is one of the most well-known tribes in Southern Ethiopia. They inhabit the territory east of the Omo River and have villages in both Turmi and Dimeka.",
          ],
          image: images.hamer1,
        },
        {
          title: "Day 10: Turmi Area (Karo and Hamar Tribe)",
          description: [
            "Our tribe of interest today is the Karo, another tribe known for its elaborate body and facial paintings. In the afternoon we will head back to the nearby Hamar Village to continue photographing this fascinating tribe in all her glory!",
          ],
          image: images.hamer2,
        },
        {
          title: "Day 11: Drive Turmi to Jinka",
          description: [
            "Further time will be spent visiting the Hamar today, where we will get more opportunities to capture these interesting people, before later continuing onward to Jinka, where we will be staying for the night.",
          ],
          image: images.mursi1,
        },
        {
          title: "Day 12: Fly Jinka to Addis and Depart (Mursi Tribe)",
          description: [
            "We have an early morning start as we enter Mago National Park at 06:00 in order to reach the Mursi Tribe while the light is still soft. Most famous for the clay lip plates that the women insert in their lower lips, the Mursi are probably one of the last tribes in Africa amongst whom it is still the norm for women to wear these large pottery or wooden discs or plates.",
            "After a morning's photographic session with the Mursi, our incredible time in the lower Omo Valley comes to an end and we drive to the airport in Jinka in time for our flight back to Addis. Sadly, our time in Ethiopia has come to an end as you make your way home after an incredible adventure!",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 1,
    experience: 6,
    title: "Ethiopia's Avian Wonders",
    index: false,
    image: images.bird1,
    description: "A Journey through Endemic Treasures",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopia's Avian Wonders",
        subtitle: "A Journey through Endemic Treasures",
        description: [
          "Embark on a mesmerizing expedition through the ancient and diverse land of Ethiopia, where nature's artistic palette comes to life in a symphony of vibrant colors and extraordinary wildlife encounters. This small group tour immerses you in the awe-inspiring world of Ethiopia's endemic birds, showcasing its bountiful avian treasures amidst a backdrop of breathtaking landscapes, rich cultures, and captivating history.",
          "From the tame and confiding endemics to the fascinating Ethiopian Wolf and the remarkable Gelada troops, every moment of this 17-day adventure is filled with wonder. Delve into the kaleidoscope of cultures, traverse diverse habitats, and witness the astonishing biodiversity that makes Ethiopia an essential destination for birders and nature enthusiasts alike. Join us on this bird-filled odyssey, where Ethiopia's hidden gems await your discovery.",
        ],
        lr: true,
        img1: images.bird1,
        img2: images.bird2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Trip",
        description: "",
        destinations: [
          {
            title: "Discover Ethiopia's Endemic Birds",
            description:
              "Discover Ethiopia's incredible array of endemic bird species, including the elusive Stresemann's Bushcrow and the glistening White-tailed Swallow.",
          },
          {
            title: "Flamingos at Lake Abijatta",
            description:
              "Witness the vibrant spectacle of Greater and Lesser Flamingos at Lake Abijatta, alongside an abundance of other waterbirds.",
          },
          {
            title: "Bale Mountain National Park",
            description:
              "Explore the breathtaking landscapes of Bale Mountain National Park, home to the endangered Ethiopian Wolf and an array of highland biome species.",
          },
          {
            title: "Cultural Encounters",
            description:
              "Experience the cultural richness of Ethiopia as you encounter local tribes, such as the Afar and Guji, known for their traditional lifestyles and unique adornments.",
          },
          {
            title: "Gelada Troops in the Harenna Forest",
            description:
              "Marvel at the remarkable Gelada troops, known as 'Bleeding Heart Baboons,' and observe their social behaviors in the Harenna Forest.",
          },
          {
            title: "Rift Valley Lakes",
            description:
              "Traverse the majestic Rift Valley, visiting iconic lakes like Ziway, Langano, and Hawassa, each offering a diverse range of bird species.",
          },
          {
            title: "Negele Borena",
            description:
              "Venture into the remote Negele Borena region, where you'll have the opportunity to spot the endangered Ruspoli's Turaco.",
          },
          {
            title: "Awash National Park",
            description:
              "Enjoy birding excursions in Awash National Park, renowned for its diverse habitats and impressive bird list, including bustards, raptors, and nightjars.",
          },
          {
            title: "Photography",
            description:
              "Capture the unique beauty of Ethiopia's avian wonders through photography, as you encounter rare and striking species in their natural habitats.",
          },
          {
            title: "Addis Ababa",
            description:
              "Immerse yourself in the rich history and culture of Ethiopia's vibrant capital city, Addis Ababa, while reflecting on the incredible memories from your avian adventure.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa",
          },
          {
            title: "Day 2",
            description: "Drive to Lake Langano",
          },
          {
            title: "Day 3",
            description: "Explore Lake Langano area",
          },
          {
            title: "Day 4",
            description: "Drive to Harenna Forest",
          },
          {
            title: "Day 5",
            description: "Explore Bale Mountain National Park",
          },
          {
            title: "Day 6",
            description: "Drive to Negele Borena",
          },
          {
            title: "Day 7",
            description: "Explore Negele Borena area",
          },
          {
            title: "Day 8",
            description: "Drive to Yabello",
          },
          {
            title: "Day 9",
            description: "Explore Yabello area",
          },
          {
            title: "Day 10",
            description: "Drive to Hawassa",
          },
          {
            title: "Day 11",
            description: "Drive to Ziway via Lakes Shalla & Abijatta",
          },
          {
            title: "Day 12",
            description: "Drive to Adama",
          },
          {
            title: "Day 13",
            description: "Drive to Awash National Park",
          },
          {
            title: "Day 14",
            description: "Explore Awash National Park",
          },
          {
            title: "Day 15",
            description: "Drive to Aledeghi Wildlife Reserve",
          },
          {
            title: "Day 16",
            description: "Drive to Debre Birhan via Melka Gebdu & Gemasa Gedel",
          },
          {
            title: "Day 17",
            description:
              "Drive to Addis Ababa via the Jemma Valley & departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVAL IN ADDIS ABABA",
          description: [
            "Today is essentially an arrival day. For those who arrive during the day, it is possible to enjoy some birding within city parks. Noteworthy species that may be seen this include White-backed Black Tit, Abyssinian Salty Flycatcher, Brown-rumped Seedeater, Tacazze Sunbird, White-collared Pigeon, Wattled Ibis and a host of raptors overhead, numbering both Egyptian and Hooded Vultures. ",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: ADDIS ABABA TO LAKE LANGANO",
          description: [
            "Your Ethiopian adventure commences with an early departure from Addis Ababa this morning, as we head south into the Great Rift Valley. Your first birding stop is at Lake Chelekcheka, an excellent site for migrant ducks and waders. Regular species encountered here include Northern Pintail, Northern Shoveler, Garganey, Eurasian Teal, Tufted Duck, Black-tailed Godwit and Temminck's Stint. Sorting through the rafts of ducks and other migrants can be very challenging due to the distraction caused by the sheer number of species moving through the scrubby vegetation near the lake edge! Common cranes often roost in staggering numbers on the far side of the water, and we may see them flying off to forage in huge, noisy flocks. ",
            "The well-wooded rim of the deep Lake Hora will be our second stop. The woodlands around the lake also teem with birds and again it may prove difficult to keep up with the seemingly endless flow of lifers! Blue-breasted Bee-eater, Black-billed Barbet, Common Redstart, Eurasian Blackcap, Red-throated Wryneck, Dark-capped Yellow Warbler, Rüppell's Robin-Chat, Western Black-headed Batis, Beautiful Sunbird, Rüppell's Weaver and a diverse variety of waterbirds, especially deep water diving ducks, can be seen here. Thereafter, the steep-sided Lake Bishoftu offers superb birding. Maccoa and Ferruginous Ducks, Southern Pochard, Singing Cisticola, gorgeous Tacazze Sunbird, Mocking Cliff Chat, Abyssinian Wheatear, Little Rock Thrush and flocks of Black-winged Lovebird are just some of our targets here! ",
            "Further, en route to Lake Langano, we will then visit Koka Dam and Lake Ziway, both classified as Important Bird Areas, supporting vast numbers of both resident and migrant water birds.",
            "Species we will search for include the spectacular Black Crowned Crane, Pink-backed Pelican, African Darter, Intermediate Egret, Goliath Heron, Hamerkop, Yellow-billed and Saddle-billed Storks, Spur-winged and Egyptian Geese, Knob-billed Duck, elegant African Pygmy Goose, African Fish Eagle, Western Marsh Harrier, African and Lesser Jacanas, Common Snipe, Senegal Thick-knee, Sedge Warbler, Spur-winged Lapwing, Gull-billed Tern, and Pied and Malachite Kingfishers.",
            "Strolling along the lakeshore at Lake Ziway will allow us excellent views of the confiding Great White Pelican and the huge Marabou Stork while dazzling Northern Carmine Bee-eater, migratory White and Western Yellow Wagtails (including some of the striking feldeggi race) and the less colorful Ethiopian Cisticola can be seen around the lake edge. This promises to be an action-packed day, after which we will check into a comfortable lodge overlooking Lake Langano, with views of the 4,000m (13,200ft) Arsi Mountains in the background.",
            "Overnight in Langano",
          ],
          image: images.bird2,
        },
        {
          title: "DAY 3: LAKE LANGANO AREA",
          description: [
            "Birding in the Langano area is especially good, and we will visit some beautiful fig forests and associated woodlands that teem with birds. Here we will look for Hemprich's and Silvery-cheeked Hornbills, Lemon Dove, Narina Trogon, Lesser and Scaly-throated Honey guides, Green Malkoha, African Hill Babbler, Double-toothed Barbet, Brown-throated Wattle-eye, Thick-billed Weaver, Crested and Scaly Francolins, endemic Yellow-fronted Parrot, Abyssinian Ground Thrush, Green Twin spot, Red-shouldered Cuckoo shrike and Red-headed Weaver. Pods of lazing Common Hippopotamuses are sometimes seen in deeper water and mammoth Goliath Herons stalk the shallows. We will also visit nearby Lake Abijata, home to thousands of Lesser and Greater Flamingos.",
            "Overnight in Langano",
          ],
          image: images.bird3,
        },
        {
          title: "DAY 4: LAKE LANGANO TO HARENNA FOREST",
          description: [
            "Leaving the Rift Valley behind, you embark on the lengthy drive to the Harenna Forest in the Bale Mountain National Park. Roadside stops en route could produce several endemics and other species, including White-collared Pigeon, Moorland Chat, Ground scraper Thrush (of the distinctive, endemic race simensis), Blanford's Lark, Blue-winged Goose, and the highly sought-after Spot-breasted Lapwing. At the park headquarters in Dinsho, we may find the colorful Chestnut-naped Francolin, the Abyssinian Owl, the secretive Abyssinian Ground Thrush, the vocal Abyssinian Catbird, and the endemic White-backed Black Tit. Mammals that we may encounter include Mountain Nyala, now entirely restricted to the Bale Mountain massif, Menelik's Bushbuck, and Warthog, unusual at this high altitude.",
            "Leaving Dinsho on your ascent to the Bale Mountain National Park, we enter a Juniper forest zone, and here we will search for African Goshawk, Rufous-breasted Sparrow hawk, White-cheeked Turaco, the localized Abyssinian Woodpecker, Cinnamon Bracken Warbler, African Hill Babbler, Montane White-eye, and Yellow-bellied Waxbill. By the time we reach the Sanetti Plateau, it will probably be fairly late in the day, particularly if we are fortunate enough to find and observe new species such as Moorland Francolin, Wattled Crane, or even the highly sought-after Ethiopian Wolf.",
            "The day culminates in our arrival at our accommodation for the next two nights, Bale Mountain Lodge, a boutique forest lodge set within a stunning cloud forest at an elevation of 2,380masl. Overnight in Bale Mountain NP",
          ],
          image: images.bird4,
        },
        {
          title: "DAY 5: BALE MOUNTAIN NATIONAL PARK",
          description: [
            "This will be a day of great contrasts and amazing scenery and birding. We will depart early and ascend the Bale Mountain massif onto the Sanette Plateau, which lies between 3,800m and 4,377m (12,540 and 14,444ft) above sea level. ",
            "Upon reaching this unique plateau, we will be driving on Africa's highest road - passing close to the summit of Ethiopia's second-highest mountain. This habitat is termed ‘Afro-alpine moorland' and is characterised by Giant Lobelias that tower like monolithic giants over the rich tussock grasslands and extensive cushions of yellow Everlasting flowers. This site is an Important Bird Area of immense significance, supporting seven globally threatened species and nearly all of Ethiopia's highland biome species. The plateau holds the only Afro tropical breeding populations of Ruddy Shelduck, Golden Eagle, and Red-billed Chough. We will also search for Wattled Ibis, Chestnut-naped and Moorland Francolins, Rouget's Rail (particularly common and confiding here), Blue-winged Goose, Spot-breasted Lapwing, African Snipe, Wattled Crane, Thekla's Lark, Abyssinian Longclaw, Red-breasted Wheatear, Moorland Chat and flocks of endemic Ethiopian Siskins.",
            "These grasslands are estimated to support an incredible biomass of 4,000kg (8,800lb) of rodents per hectare. This obviously attracts an array of raptors and we should see Augur and Mountain Buzzards and, if we are lucky, the rare Golden Eagle. They share this abundant food source with the plateau's most celebrated resident, the Ethiopian or Simien Wolf, crowned with the unenviable title of “the world's rarest canid”. Watching these vibrantly coloured animals, most closely related to the Grey Wolf exhibiting their hunting prowess whilst pouncing on Giant Mole Rats (another endemic to the Sanetti Plateau) is surely among Africa's greatest wildlife experiences. We should enjoy excellent photographic opportunities in this unique montane habitat.",
            "This afternoon, we will return to our lodge and enjoy an opportunity to bird a part of the vast Harenna forest, the largest intact forest block in Ethiopia, and the largest protected Afro-alpine forest on the continent. It still supports populations of Lion and the only surviving forest-dwelling African Wild Dogs. Although it's unlikely that we will see either of these species, the descent through this breathtakingly beautiful, moss-draped forest is inspirational.",
            "Here we will search for the uncommon Ayres's Hawk Eagle, African Olive Pigeon, Lemon and Tambourine Doves, African Emerald Cuckoo, Abyssinian Woodpecker, Narina Trogon, Brown Parisoma (represented by a subspecies endemic to this National Park), Abyssinian Crimsonwing, African Citril and Yellow-crowned Canary. Later in the day, we head back to Goba for the night. Overnight in Bale MNP",
          ],
          image: images.bale3,
        },
        {
          title: "DAY 6: HARENNA FOREST TO NEGELE",
          description: [
            "We have a long drive ahead of us today and will make a relatively early start to our journey. Leaving Harenna Forest we will gradually lose altitude en route to Negele, a town in the Guji Zone of the Oromia Region. We will exit the forest zone and enter progressively drier thorn savanna in Ethiopia's remote, southern sector. Along the dusty drive, we can expect to start adding a number of new species to our burgeoning list including Red-and-yellow Barbet, Golden-breasted, Shelley's and Superb Starlings, Northern Red-billed and Eastern Yellow-billed Hornbills and Lilac-breasted Roller. ",
            "Finally, we will reach a dry wadi on the Genale River, home to Ethiopia's most sought-after endemic, Ruspoli's Turaco. The bird is named after an Italian Prince, its hapless discoverer, who was killed by an elephant soon after collecting the type specimen in the 1890s. It took another 50 years before explorers saw the turaco again, and only in the 1970s was anything revealed about this bird. We will search for fruiting fig trees along the wadi and should enjoy excellent views of this very unusual and beautiful turaco. We will arrive in Negele in the early evening and check into our basic hotel. Overnight in Negele",
          ],
          image: images.bird4,
        },
        {
          title: "DAY 7: NEGELE AREA",
          description: [
            "East of Negele lies a unique open grassland, the Liben Plains, to which the little-known Archer's Lark is restricted. This species belongs to the unusual genus Heteromirafra, which also includes South Africa's Rudd's Lark, and is considered one of the most endangered birds on Earth. We will walk through these plains in search of this special bird, which we hope to watch performing its parachute display flight. We should also find small parties of hovering Lesser Kestrel, giant Kori Bustard (the world's heaviest flying bird), White-bellied Bustard, Temminck's Courser, Black-winged Lapwing, the range-restricted Somali Short-toed Lark, Plain-backed Pipit and Pectoral-patch Cisticola. If we're very lucky, we may see coveys of Coqui Francolin or flush a migratory Corn Crake.",
            "Further east of Negele, we will bird the increasingly dry woodland and thorn savanna towards the Somali border. This area supports a recently found population of the tricky endemic Salvadori's Seedeater, scarce Golden Pipit, elusive Red-naped Bushshrike, White-winged Black Tit, Pringle's Puffback, Three-streaked Tchagra, Foxy Lark, Somali Crombec, Taita Fiscal, Red-fronted Barbet, garish Golden-breasted Starling, attractive flocks of White-crowned Starlings, Somali Crow, African Silverbill, Shelley's Sparrow and Somali Bunting. Large troops of Olive Baboon may also be encountered here and we should see Guenther's Dik-dik and possibly Gerenuk. Overnight in Negele",
          ],
          image: images.bird5,
        },
        {
          title: "DAY 8: NEGELE TO YABELLO",
          description: [
            "Today's drive along another long and seldom-traveled road takes us near to the Kenya border and finally to the Yabello region, home to two of Ethiopia's most sought-after endemic birds, both listed as globally threatened: the enigmatic Stresemann's Bushcrow and glistening White-tailed Swallow. This area of the Acacia savanna is characterised by giant red termite mounds (some towering 5m above the plains!) and both these birds seem to be associated in some way with these marvels of natural architecture. The social Bushcrow (or Zavattariornis) was only discovered in 1938 and its affinities have yet to be established with certainty. Although it appears starling-like, it is presumed to be most closely related to Crows. ",
            "Several birding stops will break the journey, the most notable being a stop at the Dawa River in search of a Juba weaver, White-winged Collared Dove, and Black-bellied sunbirds. Other noteworthy birds we may encounter en route to Yabello include Somali Courser, Magpie Starling, Black-throated and D'Arnaud's Barbets, Pygmy Batis, Acacia Tit, Dodson's Bulbul, Red-fronted Warbler, Purple Grenadier, Black-capped Social weaver, Steel-blue Whydah and its host, Black-cheeked Waxbill. Overnight in Yabello",
          ],
          image: images.bird6,
        },
        {
          title: "DAY 9: YABELLO AREA",
          description: [
            "We have the whole day to bird the Yabello area and get better acquainted with Stresemann's Bushcrow and White-tailed Swallow. Other birds we will be looking for are Gabar Goshawk, the shrike-sized African Pygmy Falcon, the Yellow-necked Spurfowl, glamorous flocks of Vulturine Guineafowl, Black-faced Sandgrouse, Mottled Swift, Tree Pipit, the localized Bare-eyed Thrush, ventriloquial Spotted Palm Thrush, African Grey Flycatcher, Pale Prinia, Yellow-bellied Eremomela, Banded Parisoma, Hunter's and Shining Sunbirds, Superb and Wattled Starlings, Chestnut Sparrow, Yellow-spotted Petronia, Grey-capped Social weaver, Chestnut weaver, Green-winged Pytilia, White-bellied Canary and White-winged Widowbird.",
            "A night drive in this exciting area could produce Donaldson-Smith's and Slender-tailed Nightjars, Greyish Eagle-Owl, Northern White-faced Owl, and Three-banded Courser. Nocturnal mammal sightings have included Striped and Spotted Hyenas, Serval, African Wild Cats, and Ethiopian Genet. Overnight in Yabello",
          ],
          image: images.addis4,
        },
        {
          title: "DAY 10: YABELLO TO LAKE HAWASSA",
          description: [
            "Following breakfast, we will depart Yabello and make our way back north towards Addis Ababa on what is, essentially, a travel day. In the late afternoon, we will reach our comfortable hotel, on the shores of Lake Hawassa. Overnight in Hawassa",
          ],
          image: images.hawassa1,
        },
        {
          title:
            "DAY 11: LAKE HAWASSA TO LAKE ZIWAY, VIA LAKES SHALLA AND ABIJATTA",
          description: [
            "Our pre-breakfast birding stroll should yield some special birds around our well-wooded hotel grounds. Amongst our targets we hope to see are African Spotted Creeper, Little weaver, Black-billed Wood Hoopoe, Double-toothed Barbet, Woodland Kingfisher, huge Silvery-cheeked Hornbill, the attractive Red-shouldered Cuckooshrike, western Black-headed Batis, Brown-throated Wattle-eye, Mourning Collared Dove, Grey-backed Fiscal, Northern Puffback and Bronze Mannikin. Reedbeds in the vicinity support Greater Painted-snipe, Black Crake, African Swamphen, Blue-headed Coucal, Red-faced Cisticola, Lesser Swamp Warbler, and Common Waxbill. The hotel grounds also support families of Grivet Monkey, though it is the regal Guereza (Black-and-white Colobus) that will certainly steal our attention as they leap through the trees, their shaggy pelts and long tails trailing behind.",
            "After breakfast, we may then visit the remarkable Lake Hawassa fish market. This large lake is particularly rich in fish, and the fishermen gut their catch and discard the waste around the market. This, in turn, attracts large numbers of grotesque Marabou Stork and other birds. Photographic opportunities are unrivalled. We should also see Great White Pelican, White-breasted and Reed Cormorants, Hamerkop, African Sacred Ibis, Black-headed, Grey-hooded and Lesser Black-backed Gulls, and sometimes the massively-equipped Thick-billed Raven squabbling over the fish remains.",
            "Further north, the three neighboring water bodies of Lakes Shalla, Abijatta, and Langano could not be more different from each other. Having already visited the medium-depth reddish-brown Lake Langano, today we will pay a visit to the other two - the shallow and brackish Abijatta, and the extremely deep, blue Shalla (once a volcanic crater and now home to several bubbling sulphuric hot springs). ",
            "We will spend part of today exploring these lake shores and their surrounding woodlands and forests, where Clapperton's Francolin, Little Rock Thrush, African Thrush, Buff-bellied Warbler, Red-faced Crombec, Beautiful Sunbird, Rüppell's Starling, Red-billed Oxpecker, Red-billed Firefinch, Bare-faced Go-away-bird, Black-winged Lovebird, Abyssinian Wheatear, White-winged Black Tit, Black-billed Wood Hoopoe, African Pygmy Kingfisher, Greyish Eagle-Owl, Northern White-faced Owl, Slender-tailed Nightjar, Bearded Woodpecker and Masked Shrike occur in dry Acacia woodland throughout the area, while Black-billed, Banded and Double-toothed Barbets, Eastern Grey Woodpecker, White-rumped Babbler, and Ethiopian Boubou are resident in well-forested areas.",
            "At Lake Abijatta, in particular, we hope to find flocks of Greater and Lesser Flamingos, Northern Shoveler, Southern Pochard, Cape Teal, Dark Chanting Goshawk, Eastern Imperial, and Long-crested Eagles, Grey Kestrel, Little Ringed, Common Ringed, Kittlitz's and occasionally Caspian Plovers, many species of Palaearctic waders, Pallas's and Lesser Black-backed Gulls (amongst several other species of gulls and terns), Collared Pratincole, Little Bee-eater, family groups of the wonderful Abyssinian Ground Hornbill, Sand Martin, and African Pipit. Mammals we may see here include Grant's gazelle, Oribi, and Spotted Hyena. In the late afternoon, we will check into a hotel near Lake Ziway. Overnight in Ziway",
          ],
          image: images.bird7,
        },
        {
          title: "DAY 12: LAKE ZIWAY TO ADAMA",
          description: [
            "For one final occasion, we will spend our morning in the mighty Rift Valley south of Addis, where a second visit to some of the aforementioned lakes will hopefully yield some new species. The remainder of the day will be spent traveling to Adama. Overnight in Adama",
          ],
          image: images.bird8,
        },
        {
          title: "DAY 13: ADAMA AZRETH TO AWASH NATIONAL PARK",
          description: [
            "Today we drop down the immense western wall of the Great Rift Valley and travel across the wild Afar tribal territories. We will make a concerted effort to find the very rare and localised Sombre Rock Chat, Striolated Bunting, and Blackstart near Lake Beseka, while we also have a decent chance of seeing Hamadryas Baboon sitting atop the edge of escarpments in large troops, soaking up the early morning sun.",
            "We will then head to the magnificent Awash National Park where we will bird the Awash River and Kirayawa Gorge, exploring riverine forests, wetlands, Acacia woodlands, savannah grasslands, rocky hills, cliffs, and escarpments. The park boasts a bird list of around 460 species and we will make an effort to find, amongst many others, Egyptian Vulture, Bateleur, Tawny and Greater Spotted Eagles, African Harrier-Hawk, Eastern Chanting Goshawk, Scissor-tailed Kite, Shikra, Helmeted Guineafowl, Common Buttonquail, the nocturnal Three-banded Courser, mega Star-spotted Nightjar, Eastern Plantain-eater, the diminutive Pearl-spotted Owlet and giant Verreaux's Eagle-Owl, Blue-naped Mousebird, gaudy Purple, Lilac-breasted and Abyssinian Rollers, Abyssinian Scimitarbill, Eurasian Hoopoe, Eastern Yellow-billed Hornbill, Greater Honeyguide, Wire-tailed Swallow, Red-winged, Gillett's and Singing Bush Larks, White-browed Scrub Robin, over-wintering Common Rock Thrush, localised Ashy Cisticola, Eastern Olivaceous Warbler, Grey Wren-Warbler, Yellow-bellied Eremomela, Grey-headed Batis, Mouse-colored Penduline Tit, Slate-colored Boubou, Northern White-crowned Shrike, Northern Puffback, Somali Fiscal, Nile Valley and Marico Sunbirds, Grey-headed, Orange-breasted and Rosy-patched Bushshrikes, Fan-tailed Raven and Red-billed Quelea. In the afternoon we will settle into our lodge overlooking Awash Falls. Overnight in Awash National NP",
          ],
          image: images.awash1,
        },
        {
          title: "DAYS 14: AWASH NATIONAL PARK",
          description: [
            "Today we will spend a full day in this great national park. During our explorations we will be searching again for the aforementioned species as well as the dazzling Northern Carmine Bee-eater perched atop the backs of striding Kori Bustard, a seldom observed phenomenon. In fact, this is bustard kingdom deluxe and nowhere else on the planet can boast the chance of no less than six bustard species in one day (Kori, Arabian, Buff-crested, White-bellied, Black-bellied, and Hartlaub's)!",
            "Mammals are also well represented and we may see Aardwolf, Beisa Oryx, Aardvark, Soemmering's Gazelle, elegant Gerenuk (the giraffe-proportioned relative of the widespread Impala), Abyssinian Hare, African Wild Cat, Black-backed Jackal, Spotted and Striped Hyenas, Greater and Lesser Kudus, Warthog, and Salt's Dikdik. Overnight in Awash National NP",
          ],
          image: images.awash2,
        },
        {
          title: "DAY 15: AWASH NATIONAL PARK TO ALEDEGHI WILDLIFE RESERVE",
          description: [
            "Today we depart Awash National Park early and head further north to Aledeghi Plains. Here we will search for Somali Ostrich, Martial and Short-toed Snake Eagles, Yellow-necked Spurfowl, the rare Arabian Bustard (perhaps the best location on earth for this species), Black-headed Lapwing, Chestnut-bellied Sandgrouse, and Chestnut-backed Sparrow-Lark. Occasionally highly nomadic species such as Pale Rock Finch or Black-crowned Sparrow-Lark move into the area as well. Depending on conditions, we may also see a number of mammals such as the Golden Jackal, Beisa Oryx, Grevy's Zebra, and Soemmering's Gazelle.",
            "This land is inhabited by nomadic Afar tribesmen who we will see dressed in their fine white cotton tunics, bedecked with traditional jewelry, daggers, and spears. The men sport a unique bushy hairstyle, while women and girls are also extravagantly attired and adorned. They adhere strictly to their ancestral ways of tending their camel and goat herds and roaming throughout this inhospitable land.",
            "As the day begins to heat up, we shall leave the Aledeghi Plains behind and head to our lodge. This increasingly arid landscape is a haven for dry country residents and migrant species. Watercourses and rocky outcrops harbor Eurasian Sparrow hawk, African Collared and European Turtle Doves, the range-restricted Yellow-breasted Barbet, Chestnut-headed Sparrow-Lark, Common Nightingale, Blue Rock Thrush, Rufous-tailed and Black Scrub Robins, Boran Cisticola, skulking Upcher's and Menetries's Warblers, groups of Red-fronted Warbler, Ruppell's Starling, Black-crowned Tchagra, Southern Grey Shrike, Red-billed Buffalo weaver, and Chestnut-crowned and White-browed Sparrow-weavers. There is also the option to avail of the numerous hot springs around which the lodge was built. This evening, an optional night walk may reveal Greyish Eagle-Owl or Slender-tailed Nightjar. Overnight in Awash National NP",
          ],
          image: images.alehdege1,
        },
        {
          title:
            "DAY 16: ALEDEGHI WILDLIFE RESERVE TO DEBRE BIHRAN VIA MELKA GEBDU & GEMASA GEDEL ",
          description: [
            "Today we depart our lodge very early for the drive north to Debre Birhan, skirting the majestic Ankober Escarpment for part of the way. Our route takes us through one of the least driven and most picturesque roads in the entire country, although major road improvements in this area are sure to change this. Our first stop of the day will be at the typically hot and dry Melka Gebdu track, where our primary focus will be on finding another scarce endemic, Yellow-throated Seedeater. This area is also excellent for Yellow-breasted Barbet, Bruce's Green Pigeon, Bare-faced Go-away-bird, and a number of sunbirds. Red-billed Pytilia, a rare and tricky endemic has also been recorded here.",
            "After reaching the escarpment, we may make the odd roadside birding stop for Blue-winged Goose, Abyssinian Long claw, Erlanger's Lark, or Thick-billed Raven. This afternoon we shall reach Gemasa Gedel, an excellent site for the localized Ankober Serin, a rare and elusive Ethiopian endemic. Discovered only in 1976, they survive along a few kilometers of this wind-blasted grand escarpment, as do Gelada Baboons, also known as Bleeding heart Baboons. This densely-pelted, shaggy baboon is endemic to Ethiopia, and the males can often be seen flipping back their lips in a show of dominance. These animals have the closest vocal repertoire to humans of any mammal, pronouncing all consonants and four vowels! They forage on the grasslands above the escarpment and roost on ledges of inaccessible cliffs at night. Other possible species to be found here include Ethiopian Siskin, Streaky Seedeater, Moorland Chat, White-billed Starling, Bearded Vulture, Verreaux's Eagle, Rufous-breasted Sparrowhawk, Peregrine Falcon, the seldom recorded Somali Starling and Long-billed Pipit. In the afternoon we will then retire to our comfortable hotel in Debre Birhan. Overnight in Debre Birhan",
          ],
          image: images.bale4,
        },
        {
          title:
            "DAY 17: DEBRE BIRHAN TO ADDIS ABABA VIA THE JEMMA VALLEY AND DEPART",
          description: [
            "An early departure from Debre Birhan is essential in order to be at our chosen site when the endemic Harwood's Francolin is at its most vocal, thus providing our best opportunity for seeing this elusive species. ",
            "The Jemma River is one of the main tributaries of the Blue Nile and it cuts a 700m (2,300ft) deep gorge through the landscape. The habitat in the gorge is dominated by Acacia woodland, while the steep sides provide habitat for some excellent endemic birds. We will concentrate our search here for Rüppell's Vulture, Verreaux's Eagle, African Hawk-Eagle, Augur Buzzard (dark morph birds are commonly seen here), Lanner and Peregrine Falcons, Erckel's Francolin, Nyanza Swift, Hemprich's Hornbill, Red-rumped Swallow, Abyssinian Wheatear, the endemic and localised Rüppell's Black Chat, endemic White-winged Cliff Chat and its more familiar cousin, Mocking Cliff Chat, endemic White-billed Starling, elusive Yellow-rumped Seedeater and Cinnamon-breasted Bunting. ",
            "We will have a picnic lunch at the river and bird the surrounding woodlands for Blue-spotted Wood Dove, Klaas's Cuckoo, Black-billed Barbet, Eastern Olivaceous Warbler, Lesser Whitethroat, Foxy and Singing Cisticolas, African Paradise Flycatcher, Masked, Woodchat, and Isabelline Shrikes, Swainson's Sparrow, Bush Petronia, Speckle-fronted Weaver, Red-collared Widowbird, Black-winged Red and Yellow Bishops, and both Crimson-rumped and Abyssinian Waxbills. With a good dose of luck, we may stumble upon the quiet and inconspicuous Red-billed Pytilia, one of the trickier endemics that is regularly found in the Jemma Valley. In the mid-afternoon, we will depart for the drive back to Addis Ababa.",
            "This evening we will enjoy a farewell dinner before departing on their international flights home.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 6,
    title: "Enchanting Ethiopia",
    index: false,
    image: images.bird2,
    description: "Capturing Endemics In Simiens & Gondar",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Enchanting Ethiopia",
        subtitle: "Capturing Endemics In Simiens & Gondar",
        description: [
          "Embark on a mesmerizing photographic adventure through Ethiopia, where every corner reveals captivating landscapes, rich history, and a wealth of extraordinary birdlife. Join us on the Endemics a 6-day journey that will take you to the enchanting Simien Mountains National Park and the historic city of Gondar.",
          "As a photographer, you'll be immersed in a world of rare endemic bird species, stunning vistas, and encounters with fascinating wildlife. From the elusive Ethiopian Wolf to troops of Gelada Baboons, the wonders of Ethiopia's natural heritage await your lens. Discover the kaleidoscope of cultures, the ancient castles, and the breathtaking scenery that make Ethiopia a treasure trove for photographers and adventurers alike. Get ready to capture moments that will forever be etched in your memory.",
        ],
        lr: true,
        img1: images.bird1,
        img2: images.bird5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Simien Mountains National Park",
            description:
              "Witness the rare and magnificent Walia Ibex in their rugged habitat and marvel at the iconic jagged skyline of this World Heritage Site.",
          },
          {
            title: "Gelada Baboons",
            description:
              "Spend time observing and photographing troops of Geladas, with their unique appearance and captivating behaviors.",
          },
          {
            title: "Ethiopian Wolf",
            description:
              "If luck is on your side, catch a glimpse of the world's rarest canid as it roams the remote areas of the park.",
          },
          {
            title: "Endemic Birdlife",
            description:
              "Explore the diversity of bird species, including Rouget's Rail, Erckel's Francolin, Abyssinian Longclaw, and the striking Ankober Serin.",
          },
          {
            title: "Gondar",
            description:
              "Delve into the history of the 'Camelot of Ethiopia' with its medieval castles, ornate churches, and breathtaking views over Lake Tana.",
          },
          {
            title: "Scenic Landscapes",
            description:
              "Capture the awe-inspiring beauty of the Simien Mountains, with their volcanic rock formations and dramatic vistas.",
          },
          {
            title: "Ethiopian Culture",
            description:
              "Immerse yourself in the vibrant traditions and rich heritage of Ethiopia's diverse cultures, providing endless opportunities for cultural photography.",
          },
          {
            title: "Wildlife Encounters",
            description:
              "Keep an eye out for Serval, Klipspringer, Guereza, Abyssinian Rock Hyrax, and other fascinating mammalian species.",
          },
          {
            title: "Addis Ababa Exploration",
            description:
              "Take time to explore the historical sites, museums, and bustling markets of Ethiopia's vibrant capital.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrival in Addis Ababa, birding in city parks.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gondar, explore medieval castles, transfer to Simien Mountains.",
          },
          {
            title: "Days 3 & 4",
            description:
              "Excursions to Simien Mountains National Park, search for Walia Ibex, Gelada Baboons, and endemic bird species.",
          },
          {
            title: "Day 5",
            description:
              "Return to Gondar, capture sightings and photographic opportunities along the way.",
          },
          {
            title: "Day 6",
            description:
              "Fly from Gondar to Addis Ababa, explore historical sites and museums before departure.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVAL IN ADDIS ABABA",
          description: [
            "Today is essentially an arrival day. For those who arrive during the day, it is possible to enjoy some birding within city parks. Noteworthy species that may be seen this include White-backed Black Tit, Abyssinian Slaty Flycatcher, Brown-rumped Seedeater, Tacazze Sunbird, White-collared Pigeon, Wattled Ibis and a host of raptors overhead, numbering both Egyptian and Hooded Vultures. Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title:
            "DAY 2: FLY FROM ADDIS ABABA TO GONDAR AND DRIVE TO SIMIEN MOUNTAINS NATIONAL PARK.",
          description: [
            "You will leave in the morning for our domestic flight to Gondar, gateway to the world-famous Simien Mountains National Park; home to the critically endangered Walia Ibex, super troops of Gelada and a host of other spectacular wildlife.",
            "Gondar is known as the “Camelot of Ethiopia.” This city was founded by Emperor Fasilidas around 1635 and is famous for its medieval castles and ornately decorated churches – in particular, Debra Berhan Selassie. Gondar is probably the most immediately impressive of Ethiopia's major ex-capitals and is now one of the country's largest cities. Flanked by twin mountain streams at an altitude of more than 2,300m (7,600ft), Gondar commands spectacular views over farmlands to the gleaming waters of Lake Tana 35 kilometres (22 miles) to the south. This marvellous city really is a sight to behold, and the ancient castle-like structures give a sense of the city's age and the kind of civilisation that once occupied the area.",
            "Once in Gondar, you will make your way to the highest hotel in Africa, situated at an altitude of 3,260m (10,800ft). This comfortable lodge will be our overnight stop before you head into the mountains of the Simien Mountains National Park. This World Heritage Site, with its jagged skyline and blocks of volcanic core rock, was once described as a place where “Greek gods play chess” – and in the next few days you will see for yourselves just how apt this statement happens to be! Overnight in Simien Mountains",
          ],
          image: images.gonder3,
        },
        {
          title:
            "DAYS 3 & 4: EXCURSIONS TO SIMIEN MOUNTAINS NATIONAL PARK (CHENEK)",
          description: [
            "hese will prove to be an exciting two days as you explore the rugged Simien Mountains in search of the magnificent Walia Ibex and Gelada. The ibex, a large goat-like creature, sports a monstrous set of horns and inhabits the rugged rocky and grassy slopes of these seldom-visited mountains. The numbers of these animals are gradually recovering now that they are protected and the population is estimated to be approximately 500 animals, up from 200 in the late 1990s. Troops of Geladas, up to four hundred strong, also thrive here and we will spend quality time observing these unique and fascinating primates. With long woolly capes, tasselled tails, bare red chests and an arrogant swagger, these last relics of once widespread grass-eating baboons are now endemic to the highlands of Ethiopia.",
            "The Geladas roost on the massive cliffs that dominate the park, but spend their days hunched over the grasses that form the bulk of their diet. Despite sporting massive canines (the largest in proportion to body size of any mammal!), Geladas are non-aggressive and, with patience, we sometimes find ourselves in and amongst a large troop as they concentrate on their foraging. You may also be treated to a formidable lip-flip – the imposing grimace put on by Geladas to reveal their impressive upper jaw and canines, but more likely you will be completely ignored as they go about their daily business.",
            "Interestingly, Geladas are extremely vocal, being able to pronounce all nouns and five vowels! Other attractions in the area include several species of endemic birds such as Rouget's Rail, Erckel's and Chestnut-naped Francolins, Spot-breasted Lapwing, Thick-billed Raven, Abyssinian Longclaw, White-billed Starling, Ethiopian Siskin and the rare and localised Ankober Serin, as well as an important population of the spectacular Bearded Vulture.",
            "Ethiopian Wolf may also be found parading around this beautiful landscape, although they have suffered due to various diseases passed on from domestic dogs and are usually only restricted to more remote areas of the park. Serval, the Menelik's sub-species of Bushbuck, Klipspringer, Guereza, Abyssinian sub-species of Rock Hyrax and Golden Jackal are further mammalian possibilities. Overnight in Simien Mountains",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 5: SIMIEN MOUNTAINS NATIONAL PARK TO GONDAR.",
          description: [
            "You will spend some of the morning further exploring the mountains, after which you will then undertake the drive back to Gondar, stopping for any interesting sightings and photographic opportunities en route. Whilst in Gondar, you will no doubt encounter a variety of other special Ethiopian birds; possibilities include Black-winged Lovebird, Hemprich's Hornbill, Banded Barbet, Abyssinian Slaty Flycatcher, Brown-rumped Seedeater and much besides. Overnight in Gondar",
          ],
          image: images.gonder2,
        },
        {
          title: "DAY 6: FLY FROM GONDAR TO ADDIS ABABA AND DEPART.",
          description: [
            "Following some final exploration of the Gondar area, you will fly back to Addis Ababa where we will have time to explore some of the historical sites and museums in the city. Fine linen, traditional Coptic Christian artefacts, wooden carvings and scripts are some of the many popular Ethiopian souvenirs that are available here. You will then transfer to Bole International Airport after a farewell dinner to catch our international flights home.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 6,
    title: "Wings Of Ethiopia",
    index: false,
    image: images.bird3,
    description: "A Mega Birding Adventure",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Wings Of Ethiopia",
        subtitle: "A Mega Birding Adventure",
        description: [
          "Commence an adventure on an extraordinary journey through the diverse landscapes of Ethiopia, where nature unveils its majestic wonders and avian treasures. \"Wings of Ethiopia: A Mega Birding Adventure\" invites you to explore this captivating country's rich biodiversity and unique birdlife. Over the course of 22 days, you'll traverse breathtaking landscapes, from the Great Rift Valley to the Harenna Forest, the Bale Mountain National Park to the vast savannas of the Yabello area.",
          "Along the way, encounter over 460 bird species, including numerous endemics and rarities. From the elusive Stresemann's Bushcrow to the vibrant White-tailed Swallow, every day will be filled with awe-inspiring sightings and unforgettable moments. Immerse yourself in the magic of Ethiopia's natural heritage and let your spirit take flight in this extraordinary birding paradise.",
        ],
        lr: true,
        img1: images.bird3,
        img2: images.bird4,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Massive Rift Valley lakes teeming with a mesmerizing array of birdlife.",
          },
          {
            title: "Montane Forests",
            description:
              "Moss-draped montane forests boast an impressive selection of endemic species.",
          },
          {
            title: "Ethiopian Wolf",
            description:
              "The critically endangered Ethiopian Wolf residing in the high Bale Mountains.",
          },
          {
            title: "Jemma Valley and Awash National Park",
            description:
              "The remarkable Jemma Valley and Awash National Park, home to six species of bustard.",
          },
          {
            title: "Seek out elusive treasures",
            description:
              "Seek out elusive treasures such as the Spot-breasted Lapwing, Blue-winged Goose, and Rouget's Rail.",
          },
          {
            title: "Ankober Serin",
            description:
              "Discover the enchanting Ankober Serin, Salvadori's Seedeater, and the striking Red-billed Pytilia.",
          },
          {
            title: "Yellow-fronted Parrot",
            description:
              "Encounter the vibrant Yellow-fronted Parrot, the charming White-backed Black Tit, and the elusive Abyssinian Woodpecker.",
          },
          {
            title: "Ruspoli's Turaco and Stresemann's Bushcrow",
            description:
              "Venture into remote corners of Ethiopia to find sought-after endemics like Ruspoli's Turaco and Stresemann's Bushcrow.",
          },
          {
            title: "White-tailed Swallow and Archer's Lark.",
            description:
              "Explore the drier habitats of southern Ethiopia, home to unique species like the White-tailed Swallow and Archer's Lark.",
          },
          {
            title: "Kafka-Shiraro National Park",
            description:
              "Visit off-the-beaten-track sites, including Mega and Kafka-Shiraro National Park, where the Masked Lark and Sudan Golden Sparrow await.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrival in Addis Ababa",
          },
          {
            title: "Day 2",
            description: "Journey from Addis Ababa to the scenic Lake Langano",
          },
          {
            title: "Day 3",
            description:
              "Explore the captivating birdlife of the Lake Langano area",
          },
          {
            title: "Day 4",
            description: "Depart Lake Langano for the lush Harenna Forest",
          },
          {
            title: "Day 5",
            description:
              "Immerse yourself in the wonders of Bale Mountain National Park",
          },
          {
            title: "Day 6",
            description: "Traverse from Harenna Forest to Negele",
          },
          {
            title: "Day 7",
            description: "Uncover the avian treasures of the Negele area",
          },
          {
            title: "Day 8",
            description: "Venture to Mega, a haven for unique bird species",
          },
          {
            title: "Day 9",
            description: "Witness the beauty of the plains of Mega and Soda",
          },
          {
            title: "Day 10",
            description:
              "Travel from Mega to Yabello, an oasis of avian wonders",
          },
          {
            title: "Day 11",
            description: "Delve into the rich birdlife of the Yabello area",
          },
          {
            title: "Day 12",
            description:
              "Embark on a scenic journey from Yabello to Lake Awassa",
          },
          {
            title: "Day 13",
            description:
              "Experience the breathtaking landscapes of Lakes Shalla and Abijatta en route to Lake Ziway",
          },
          {
            title: "Day 14",
            description:
              "Traverse from Lake Ziway to Nazreth, capturing stunning bird sightings along the way",
          },
          {
            title: "Day 15",
            description:
              "Explore the wonders of Awash National Park, a paradise for wildlife enthusiasts",
          },
          {
            title: "Day 16",
            description:
              "Immerse yourself in the diverse bird species of Awash National Park",
          },
          {
            title: "Day 17",
            description:
              "Journey from Awash National Park to the remarkable Aledeghi Wildlife Reserve",
          },
          {
            title: "Day 18",
            description:
              "Discover the natural wonders of Melka Gebdu and Gemasa Gedel en route to Debre Bihran",
          },
          {
            title: "Day 19",
            description:
              "Experience the avian delights of the Jemma Valley before returning to Addis Ababa",
          },
          {
            title: "Day 20",
            description:
              "Depart Addis Ababa for Humera, a gateway to extraordinary birdwatching opportunities",
          },
          {
            title: "Day 21",
            description:
              "Explore the renowned Kafta-Shiraro National Park and its stunning surroundings",
          },
          {
            title: "Day 22",
            description:
              "Return from Humera to Addis Ababa, concluding this unforgettable birdwatching adventure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVAL IN ADDIS ABABA",
          description: [
            "Today is essentially an arrival day. For those who arrive during the day, it is possible to enjoy some birding within city parks. Noteworthy species that may be seen this include White-backed Black Tit, Abyssinian Slaty Flycatcher, Brown-rumped Seedeater, Tekezze Sunbird, White-collared Pigeon, Wattled Ibis, and a host of raptors overhead, numbering both Egyptian and Hooded Vultures. Overnight in Addis Ababa.",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: ADDIS ABABA TO LAKE LANGANO",
          description: [
            "Your Ethiopian adventure commences with an early departure from Addis Ababa this morning, as you head south into the Great Rift Valley. Your first birding stop is at Lake Chelekcheka, an excellent site for migrant ducks and waders. Regular species encountered here include Northern Pintail, Northern Shoveler, Garganey, Eurasian Teal, Tufted Duck, Black-tailed Godwit, and Temminck's Stint. ",
            "Sorting through the rafts of ducks and other migrants can be very challenging due to the distraction caused by the sheer number of species moving through the scrubby vegetation near the lake edge! Common cranes often roost in staggering numbers on the far side of the water, and you may see them flying off to forage in huge, noisy flocks.",
            "The youll-wooded rim of the deep Lake Hora will be your second stop. The woodlands around the lake also teem with birds, and again it may prove difficult to keep up with the seemingly endless flow of lifers! Blue-breasted Bee-eater, Black-billed Barbet, Common Redstart, Eurasian Blackcap, Red-throated Wryneck, Dark-capped Yellow Warbler, Rüppell's Robin-Chat, Western Black-headed Batis, Beautiful Sunbird, Rüppell's Youaver, and a diverse variety of waterbirds, especially deep water diving ducks, can be seen here.",
            "Thereafter, the steep-sided Lake Bishoftu offers superb birding. Maccoa and Ferruginous Ducks, Southern Pochard, Singing Cisticola, gorgeous Tekezze Sunbird, Mocking Cliff Chat, Abyssinian Wheatear, Little Rock Thrush, and flocks of Black-winged Lovebird are just some of our targets here!",
            "Further, en route to Lake Langano, you will then visit Koka Dam and Lake Ziway, both classified as Important Bird Areas, supporting vast numbers of both resident and migrant water birds. Species you will search for include the spectacular Black Crowned Crane, Pink-backed Pelican, African Darter, Intermediate Egret, Goliath Heron, Hamerkop, Yellow-billed and Saddle-billed Storks, Spur-winged and Egyptian Geese, Knob-billed Duck, elegant African Pygmy Goose, African Fish Eagle, Western Marsh Harrier, African and Lesser Jacanas, Common Snipe, Senegal Thick-knee, Sedge Warbler, Spur-winged Lapwing, Gull-billed Tern, and Pied and Malachite Kingfishers.",
            "Strolling along the lakeshore at Lake Ziway will allow you excellent views of the confiding Great White Pelican and the huge Marabou Stork while dazzling Northern Carmine Bee-eater, migratory White and Western Yellow Wagtails (including some of the striking feldeggi race) and the less colorful Ethiopian Cisticola can be seen around the lake edge. This promises to be an action-packed day, after which you will check into a comfortable lodge overlooking Lake Langano, with views of the 4,000m (13,200ft) Arsi Mountains in the background. Overnight in Langano.",
          ],
          image: images.bird1,
        },
        {
          title: "DAY 3: LAKE LANGANO AREA",
          description: [
            "Birding in the Langano area is especially good, and you will visit some beautiful fig forest and associated woodlands that teem with birds. Here you will look for Hemprich's and Silvery-cheeked Hornbills, Lemon Dove, Narina Trogon, Lesser and Scaly-throated Honeyguides, Green Malkoha, African Hill Babbler, Double-toothed Barbet, Brown-throated Wattle-eye, Thick-billed Weaver, Crested and Scaly Francolins, endemic Yellow-fronted Parrot, Abyssinian Ground Thrush, Green Twinspot, Red-shouldered Cuckoo-shrike, and Red-headed Weaver. Pods of lazing Common Hippopotamuses are sometimes seen in deeper water, and mammoth Goliath Herons stalk the shallows. You will also visit nearby Lake Abijata, home to thousands of Lesser and Greater Flamingos. Overnight in Langano.",
          ],
          image: images.bahirdar1,
        },
        {
          title: "DAY 4: LAKE LANGANO TO HARENNA FOREST",
          description: [
            "Leaving the Rift Valley behind, you embark on the lengthy drive to the Harenna Forest in the Bale Mountain National Park. Roadside stops en route could produce several endemics and other species, including White-collared Pigeon, Moorland Chat, Ground scraper Thrush (of the distinctive, endemic race simensis), Blanford's Lark, Blue-winged Goose, and the highly sought-after Spot-breasted Lapwing. At the park headquarters in Dinsho, you may find the colorful Chestnut-naped Francolin, the Abyssinian Owl, the secretive Abyssinian Ground Thrush, the vocal Abyssinian Catbird, and the endemic White-backed Black Tit. Mammals that you may encounter include Mountain Nyala, now entirely restricted to the Bale Mountain massif, Menelik's Bushbuck, and Warthog, unusual at this high altitude.",
            "Leaving Dinsho on your ascent to the Bale Mountain National Park, you enter a Juniper forest zone, and here you will search for African Goshawk, Rufous-breasted Sparrowhawk, White-cheeked Turaco, the localized Abyssinian Woodpecker, Cinnamon Bracken Warbler, African Hill Babbler, Montane White-eye, and Yellow-bellied Waxbill. ",
            "By the time you reach the Sanetti Plateau, it will probably be fairly late in the day, particularly if you are fortunate enough to find and observe new species such as Moorland Francolin, Wattled Crane, or even the highly sought-after Ethiopian Wolf. The day culminates in our arrival at your accommodation for the next two nights, Bale Mountain Lodge, a boutique forest lodge set within a stunning cloud forest at an elevation of 2,380masl. Overnight in Bale Mountain NP.",
          ],
          image: images.bird2,
        },
        {
          title: "DAY 5: BALE MOUNTAIN NATIONAL PARK",
          description: [
            "This will be a day of great contrasts and amazing scenery and birding. You will depart early and ascend the Bale Mountain massif onto the Sanette Plateau, which lies between 3,800m and 4,377m (12,540 and 14,444ft) above sea level.",
            "Upon reaching this unique plateau, you will be driving on Africa's highest road - passing close to the summit of Ethiopia's second-highest mountain. This habitat is termed ‘Afro-alpine moorland' and is characterized by Giant Lobelias that tower like monolithic giants over the rich tussock grasslands and extensive cushions of yellow Everlasting flowers. ",
            "This site is an Important Bird Area of immense significance, supporting seven globally threatened species and nearly all of Ethiopia's highland biome species. The plateau holds the only Afro tropical breeding populations of Ruddy Shelduck, Golden Eagle, and Red-billed Chough. You will also search for Wattled Ibis, Chestnut-naped and Moorland Francolins, Rouget's Rail (particularly common and confiding here), Blue-winged Goose, Spot-breasted Lapwing, African Snipe, Wattled Crane, Thekla's Lark, Abyssinian Longclaw, Red-breasted Wheatear, Moorland Chat, and flocks of endemic Ethiopian Siskins. These grasslands are estimated to support an incredible biomass of 4,000kg (8,800lb) of rodents per hectare. ",
            "This obviously attracts an array of raptors, and you should see Augur and Mountain Buzzards and, if you are lucky, the rare Golden Eagle. They share this abundant food source with the plateau's most celebrated resident, the Ethiopian or Simien Wolf, crowned with the unenviable title of “the world's rarest canid”. Watching these vibrantly colored animals, most closely related to the Grey Wolf, exhibiting their hunting prowess whilst pouncing on Giant Mole Rats (another endemic to the Sanetti Plateau) is surely among Africa's greatest wildlife experiences. ",
            "You should enjoy excellent photographic opportunities in this unique montane habitat.",
            "This afternoon, you will return to our lodge and enjoy an opportunity to bird a part of the vast Harenna forest, the largest intact forest block in Ethiopia, and the largest protected Afro-alpine forest on the continent. ",
            "It still supports populations of Lion, and the only surviving forest-dwelling African Wild Dogs. Although it's unlikely that you will see either of these species, the descent through this breathtakingly beautiful, moss-draped forest is inspirational. Here you will search for the uncommon Ayres's Hawk Eagle, African Olive Pigeon, Lemon and Tambourine Doves, African Emerald Cuckoo, Abyssinian Woodpecker, Narina Trogon, Brown Parisoma (represented by a subspecies endemic to this National Park), Abyssinian Crimsonwing, African Citril, and Yellow-crowned Canary. Later in the day, you head back to Goba for the night. Overnight in Bale MNP.",
          ],
          image: images.bird4,
        },
        {
          title: "DAY 6: HARENNA FOREST TO NEGELE",
          description: [
            "You have a long drive ahead of us today and will make a relatively early start to our journey. Leaving Harenna Forest, you will gradually lose altitude en route to Negele, a town in the Guji Zone of the Oromia Region. You will exit the forest zone and enter progressively drier thorn savanna in this remote, southern sector of Ethiopia. Along the dusty drive, you can expect to start adding a number of new species to our burgeoning list, including Red-and-yellow Barbet, Golden-breasted, Shelley's and Superb Starlings, Northern Red-billed and Eastern Yellow-billed Hornbills, and Lilac-breasted Roller.",
            "Finally, you will reach a dry wadi on the Genale River, home to Ethiopia's most sought-after endemic, Ruspoli's Turaco. The bird is named after an Italian Prince, its hapless discoverer, who was killed by an elephant soon after collecting the type specimen in the 1890s. ",
            "It took another 50 years before explorers saw the turaco again, and only in the 1970s was anything revealed about this bird. You will search for fruiting fig trees along the wadi and should enjoy excellent views of this very unusual and beautiful turaco. You will arrive in Negele in the early evening and check into your basic hotel. Overnight in Negele.",
          ],
          image: images.bird3,
        },
        {
          title: "DAY 7: NEGELE AREA",
          description: [
            "East of Negele lies a unique open grassland, the Liben Plains, to which the little-known Archer's Lark is restricted. This species belongs to the unusual genus Heteromirafra, which also includes South Africa's Rudd's Lark, and is considered one of the most endangered birds on Earth. You will walk through these plains in search of this special bird, which you hope to watch performing its parachute display flight. ",
            "You should also find small parties of hovering Lesser Kestrel, giant Kori Bustard (the world's heaviest flying bird), White-bellied Bustard, Temminck's Courser, Black-winged Lapwing, the range-restricted Somali Short-toed Lark, Plain-backed Pipit, and Pectoral-patch Cisticola. If you're very lucky, you may see coveys of Coqui Francolin or flush a migratory Corn Crake.",
            "Further east of Negele, you will bird the increasingly dry woodland and thorn savanna towards the Somali border. This area supports a recently found population of the tricky endemic Salvadori's Seedeater, scarce Golden Pipit, elusive Red-naped Bushshrike, White-winged Black Tit, Pringle's Puffback, Three-streaked Tchagra, Foxy Lark, Somali Crombec, Taita Fiscal, Red-fronted Barbet, garish Golden-breasted Starling, attractive flocks of White-crowned Starlings, Somali Crow, African Silverbill, Shelley's Sparrow, and Somali Bunting. Large troops of Olive Baboon may also be encountered here, and you should see Guenther's Dik-dik and possibly Gerenuk. Overnight in Negele.",
          ],
          image: images.bird5,
        },
        {
          title: "DAY 8: NEGELE TO MEGA",
          description: [
            "Today's drive along another long and seldom-traveled road takes you near to the Kenya border and finally to the town of Mega. Several birding stops will break the journey, the most notable being a stop at the Dawa River in search of Juba Weaver, White-winged Collared Dove, and Black-bellied Sunbird. Other noteworthy birds you may encounter en route to Mega include Somali Courser, Magpie Starling, Black-throated and D'Arnaud's Barbets, Pygmy Batis, Acacia Tit, Dodson's Bulbul, Red-fronted Warbler, Purple Grenadier, Black-capped Social Weaver, Steel-blue Whydah and its host, Black-cheeked Waxbill.",
            "This afternoon, you shall drive a short distance from town and search the surrounding rocky hillsides for the rarely seen near-endemic Black-fronted Francolin. Overnight in Mega.",
          ],
          image: images.awash2,
        },
        {
          title: "DAY 9: PLAINS OF MEGA SODA",
          description: [
            "You spend the day exploring the amazing Mega area, from isolated mountains to impressive lava plains it offers some beautiful scenery. Your key targets will include the nomadic and elusive Masked Lark, splendid Heuglin's Bustard, and Black-fronted Francolin should we not have seen it already.",
            "Other impressive species seen in the area include Somali Courser, Somali Bee-eater, Donaldson-Smith's Sparrow-Weaver, Short-tailed, Pink-breasted, and Red-winged Larks, and Somali Sparrow. If we are particularly fortunate, we may even find the enigmatic Quail-plover.",
            "In the evening, we will embark on a night drive in search of Sombre and Star-spotted Nightjars. Overnight in Mega.",
          ],
          image: images.bird6,
        },
        {
          title: "DAY 10: MEGA TO YABELLO",
          description: [
            "You have most of the day to explore this wonderful area in search of any species we may not have seen as yet. Exciting possibilities include the huge Kori, White-bellied, and Buff-crested Bustards, cryptic Lichtenstein's Sandgrouse, Chestnut-headed Sparrow-Lark, Parrot-billed Sparrow, Magpie Starling, and Tsavo Sunbird.",
            "You then make a short drive north to Yabello, home to two of Ethiopia's most sought-after endemic birds, both listed as globally threatened: the enigmatic Stresemann's Bushcrow and glistening White-tailed Swallow. This area of Acacia savanna is characterized by giant red termite mounds (some towering 5m above the plains!) and both these birds seem to be associated in some way with these marvels of natural architecture.",
            "The social Bushcrow (or Zavattariornis) was only discovered in 1938 and its affinities have yet to be established with certainty. Although it appears starling-like, it is presumed to be most closely related to Crows. Overnight in Yabello.",
          ],
          image: images.bird7,
        },
        {
          title: "DAY 11: YABELLO AREA",
          description: [
            "You have the whole day to bird the Yabello area and get better acquainted with Stresemann's Bushcrow and White-tailed Swallow. Other birds we will be looking for are Gabar Goshawk, the shrike-sized African Pygmy Falcon, Yellow-necked Spurfowl, glamorous flocks of Vulturine Guineafowl, Black-faced Sandgrouse, Mottled Swift, Tree Pipit, the localized Bare-eyed Thrush, ventriloquial Spotted Palm Thrush, African Grey Flycatcher, Pale Prinia, Yellow-bellied Eremomela, Banded Parisoma, Hunter's and Shining Sunbirds, Superb and Wattled Starlings, Chestnut Sparrow, Yellow-spotted Petronia, Grey-capped Social Weaver, Chestnut Weaver, Green-winged Pytilia, White-bellied Canary, and White-winged Widowbird.",
            "A night drive in this exciting area could produce Donaldson-Smith's and Slender-tailed Nightjars, Greyish Eagle-Owl, Northern White-faced Owl, and Three-banded Courser. Nocturnal mammal sightings have included Striped and Spotted Hyenas, Serval, African Wild Cats, and Ethiopian Genet. Overnight in Yabello.",
          ],
          image: images.awash1,
        },
        {
          title: "DAY 12: YABELLO TO LAKE HAWASSA",
          description: [
            "Following breakfast, you will depart Yabello and make your way back north towards Addis Ababa on what is, essentially, a travel day. In the late afternoon, you will reach our comfortable hotel, on the shores of Lake Hawassa. Overnight in Hawassa.",
          ],
          image: images.hawassa1,
        },
        {
          title:
            "DAY 13: LAKE HAWASSA TO LAKE ZIWAY, VIA LAKES SHALLA AND ABIJATTA",
          description: [
            "Your pre-breakfast birding stroll should yield some special birds around our well-wooded hotel grounds. Amongst our targets you hope to see are African Spotted Creeper, Little weaver, Black-billed Wood Hoopoe, Double-toothed Barbet, Woodland Kingfisher, huge Silvery-cheeked Hornbill, the attractive Red-shouldered Cuckooshrike, western Black-headed Batis, Brown-throated Wattle-eye, Mourning Collared Dove, Grey-backed Fiscal, Northern Puffback, and Bronze Mannikin. Reedbeds in the vicinity support Greater Painted-snipe, Black Crake, African Swamphen, Blue-headed Coucal, Red-faced Cisticola, Lesser Swamp Warbler, and Common Waxbill.",
            "The hotel grounds also support families of Grivet Monkey, though it is the regal Guereza (Black-and-white Colobus) that will certainly steal your attention as they leap through the trees, their shaggy pelts and long tails trailing behind.",
            "After breakfast, you may then visit the remarkable Lake Hawassa fish market. This large lake is particularly rich in fish, and the fishermen gut their catch and discard the waste around the market. This, in turn, attracts large numbers of grotesque Marabou Stork and other birds. Photographic opportunities are unrivalled. You should also see Great White Pelican, White-breasted and Reed Cormorants, Hamerkop, African Sacred Ibis, Black-headed, Grey-hooded, and Lesser Black-backed Gulls, and sometimes the massively-equipped Thick-billed Raven squabbling over the fish remains.",
            "Further north, the three neighboring water bodies of Lakes Shalla, Abijatta, and Langano could not be more different from each other. Having already visited the medium-depth reddish-brown Lake Langano, today you will pay a visit to the other two - the shallow and brackish Abijatta, and the extremely deep, blue Shalla (once a volcanic crater and now home to several bubbling sulfuric hot springs).",
            "You will spend part of today exploring these lake shores and their surrounding woodlands and forests, where Clapperton's Francolin, Little Rock Thrush, African Thrush, Buff-bellied Warbler, Red-faced Crombec, Beautiful Sunbird, Rüppell's Starling, Red-billed Oxpecker, Red-billed Firefinch, Bare-faced Go-away-bird, Black-winged Lovebird, Abyssinian Wheatear, White-winged Black Tit, Black-billed Wood Hoopoe, African Pygmy Kingfisher, Greyish Eagle-Owl, Northern White-faced Owl, Slender-tailed Nightjar, Bearded Woodpecker, and Masked Shrike occur in dry Acacia woodland throughout the area, while Black-billed, Banded, and Double-toothed Barbets, Eastern Grey Woodpecker, White-rumped Babbler, and Ethiopian Boubou are resident in well-forested areas.",
            "At Lake Abijatta, in particular, you hope to find flocks of Greater and Lesser Flamingo, Northern Shoveler, Southern Pochard, Cape Teal, Dark Chanting Goshawk, Eastern Imperial and Long-crested Eagles, Grey Kestrel, Little Ringed, Common Ringed, Kittlitz's and occasionally Caspian Plovers, many species of Palaearctic waders, Pallas's and Lesser Black-backed Gulls (amongst several other species of gulls and terns), Collared Pratincole, Little Bee-eater, family groups of the wonderful Abyssinian Ground Hornbill, Sand Martin, and African Pipit. Mammals you may see here include Grant's Gazelle, Oribi, and Spotted Hyena. In the late afternoon, you will check into a hotel near Lake Ziway. Overnight in Ziway.",
          ],
          image: images.bird1,
        },
        {
          title: "DAY 14: LAKE ZIWAY TO ADAMA",
          description: [
            "For one final occasion, you will spend your morning in the mighty Rift Valley south of Addis, where a second visit to some of the aforementioned lakes will hopefully yield some new species. The remainder of the day will be spent travelling to Adama. Overnight in Adama.",
          ],
          image: images.bird2,
        },
        {
          title: "DAY 15: ADAMA AZRETH TO AWASH NATIONAL PARK",
          description: [
            "Today you drop down the immense western wall of the Great Rift Valley and travel across the wild Afar tribal territories. You will make a concerted effort to find the very rare and localized Sombre Rock Chat, Striolated Bunting, and Blackstar near Lake Beseka, while you also have a decent chance of seeing Hamadryas Baboon sitting atop the edge of escarpments in large troops, soaking up the early morning sun.",
            "You will then head to the magnificent Awash National Park where you will bird the Awash River and Kirayawa Gorge, exploring riverine forests, wetlands, Acacia woodlands, savannah grasslands, rocky hills, cliffs, and escarpments. The park boasts a bird list of around 460 species and you will make an effort to find, amongst many others, Egyptian Vulture, Bateleur, Tawny and Greater Spotted Eagles, African Harrier-Hawk, Eastern Chanting Goshawk, Scissor-tailed Kite, Shikra, Helmeted Guineafowl, Common Buttonquail, the nocturnal Three-banded Courser, mega Star-spotted Nightjar, Eastern Plantain-eater, the diminutive Pearl-spotted Owlet, and giant Verreaux's Eagle-Owl, Blue-naped Mousebird, gaudy Purple, Lilac-breasted, and Abyssinian Rollers, Abyssinian Scimitarbill, Eurasian Hoopoe, Eastern Yellow-billed Hornbill, Greater Honeyguide, Wire-tailed Swallow, Red-winged, Gillett's, and Singing Bush Larks, White-browed Scrub Robin, over-wintering Common Rock Thrush, localized Ashy Cisticola, Eastern Olivaceous Warbler, Grey Wren-Warbler, Yellow-bellied Eremomela, Grey-headed Batis, Mouse-colored Penduline Tit, Slate-colored Boubou, Northern White-crowned Shrike, Northern Puffback, Somali Fiscal, Nile Valley and Marico Sunbirds, Grey-headed, Orange-breasted, and Rosy-patched Bushshrikes, Fan-tailed Raven, and Red-billed Quelea.",
            "In the afternoon, you will settle into our lodge overlooking Awash Falls. Overnight in Awash National NP.",
          ],
          image: images.bird3,
        },
        {
          title: "DAYS 16: AWASH NATIONAL PARK",
          description: [
            "Today you will spend a full day in this great national park. During our explorations, you will be searching again for the aforementioned species as well as the dazzling Northern Carmine Bee-eater perched atop the backs of striding Kori Bustard, a seldom observed phenomenon. In fact, this is bustard kingdom deluxe and nowhere else on the planet can boast the chance of no less than six bustard species in one day (Kori, Arabian, Buff-crested, White-bellied, Black-bellied, and Hartlaub's)!",
            "Mammals are also well represented and you may see Aardwolf, Beisa Oryx, Aardvark, Soemmering's Gazelle, elegant Gerenuk (the giraffe-proportioned relative of the widespread Impala), Abyssinian Hare, African Wild Cat, Black-backed Jackal, Spotted and Striped Hyenas, Greater and Lesser Kudus, Warthog, and Salt's Dikdik. Overnight in Awash National NP.",
          ],
          image: images.bird4,
        },
        {
          title: "DAY 17: AWASH NATIONAL PARK TO ALEDEGHI WILDLIFE RESERVE",
          description: [
            "Today you depart Awash National Park early and head further north to Aledeghi Plains. Here you will search for Somali Ostrich, Martial and Short-toed Snake Eagles, Yellow-necked Spurfowl, the rare Arabian Bustard (perhaps the best location on earth for this species), Black-headed Lapwing, Chestnut-bellied Sandgrouse, and Chestnut-backed Sparrow-Lark. Occasionally highly nomadic species such as Pale Rock Finch or Black-crowned Sparrow-Lark move into the area as well. Depending on conditions, you may also see a number of mammals such as the Golden Jackal, Beisa Oryx, Grevy's Zebra, and Soemmering's Gazelle.",
            "This land is inhabited by nomadic Afar tribesmen whom you will see dressed in their fine white cotton tunics, bedecked with traditional jewelry, daggers, and spears. The men sport a unique bushy hairstyle, while women and girls are also extravagantly attired and adorned. They adhere strictly to their ancestral ways of tending their camel and goat herds and roaming throughout this inhospitable land.",
            "As the day begins to heat up, you shall leave the Aledeghi Plains behind and head to our lodge. This increasingly arid landscape is a haven for dry country residents and migrant species. Watercourses and rocky outcrops harbor Eurasian Sparrowhawk, African Collared, and European Turtle Doves, the range-restricted Yellow-breasted Barbet, Chestnut-headed Sparrow-Lark, Common Nightingale, Blue Rock Thrush, Rufous-tailed, and Black Scrub Robins, Boran Cisticola, skulking Upcher's and Menetries's Warblers, groups of Red-fronted Warbler, Ruppell's Starling, Black-crowned Tchagra, Southern Grey Shrike, Red-billed Buffalo weaver, and Chestnut-crowned and White-browed Sparrow-weavers. There is also the option to avail of the numerous hot springs around which the lodge was built. This evening, an optional night walk may reveal Greyish Eagle-Owl or Slender-tailed Nightjar. Overnight in Awash National NP.",
          ],
          image: images.awash1,
        },
        {
          title:
            "DAY 18: ALEDEGHI WILDLIFE RESERVE TO DEBRE BIHRAN VIA MELKA GEBDU & GEMASA GEDEL",
          description: [
            "Today you depart your lodge very early for the drive north to Debre Birhan, skirting the majestic Ankober Escarpment for part of the way. Your route takes us through one of the least driven and most picturesque roads in the entire country, although major road improvements in this area are sure to change this. Our first stop of the day will be at the typically hot and dry Melka Gebdu track, where our primary focus will be on finding another scarce endemic, Yellow-throated Seedeater. This area is also excellent for Yellow-breasted Barbet, Bruce's Green Pigeon, Bare-faced Go-away-bird and a number of sunbirds. Red-billed Pytilia, a rare and tricky endemic has also been recorded here.",
            "After reaching the escarpment, you may make the odd roadside birding stop for Blue-winged Goose, Abyssinian Long claw, Erlanger's Lark, or Thick-billed Raven. This afternoon you shall reach Gemasa Gedel, an excellent site for the localized Ankober Serin, a rare and elusive Ethiopian endemic. Discovered only in 1976, they survive along a few kilometers of this wind-blasted grand escarpment, as do Gelada Baboons, also known as Bleeding heart Baboons. This densely-pelted, shaggy baboon is endemic to Ethiopia, and the males can often be seen flipping back their lips in a show of dominance.",
            "These animals have the closest vocal repertoire to humans of any mammal, pronouncing all consonants and four vowels! They forage on the grasslands above the escarpment and roost on ledges of inaccessible cliffs at night. Other possible species to be found here include Ethiopian Siskin, Streaky Seedeater, Moorland Chat, White-billed Starling, Bearded Vulture, Verreaux's Eagle, Rufous-breasted Sparrowhawk, Peregrine Falcon, the seldom recorded Somali Starling, and Long-billed Pipit. In the afternoon, you will then retire to our comfortable hotel in Debre Birhan. Overnight in Debre Birhan.",
          ],
          image: images.alehdege1,
        },
        {
          title:
            "DAY 19: DEBRE BIRHAN TO ADDIS ABABA VIA THE JEMMA VALLEY AND DEPART",
          description: [
            "An early departure from Debre Birhan is essential in order to be at your chosen site when the endemic Harwood's Francolin is at its most vocal, thus providing our best opportunity for seeing this elusive species.",
            "The Jemma River is one of the main tributaries of the Blue Nile and it cuts a 700m (2,300ft) deep gorge through the landscape. The habitat in the gorge is dominated by Acacia woodland, while the steep sides provide habitat for some excellent endemic birds. You will concentrate our search here for Rüppell's Vulture, Verreaux's Eagle, African Hawk-Eagle, Augur Buzzard (dark morph birds are commonly seen here), Lanner and Peregrine Falcons, Erckel's Francolin, Nyanza Swift, Hemprich's Hornbill, Red-rumped Swallow, Abyssinian Wheatear, the endemic and localized Rüppell's Black Chat, endemic White-winged Cliff Chat and its more familiar cousin, Mocking Cliff Chat, endemic White-billed Starling, elusive Yellow-rumped Seedeater, and Cinnamon-breasted Bunting.",
            "You will have a picnic lunch at the river and bird the surrounding woodlands for Blue-spotted Wood Dove, Klaas's Cuckoo, Black-billed Barbet, Eastern Olivaceous Warbler, Lesser Whitethroat, Foxy and Singing Cisticolas, African Paradise Flycatcher, Masked, Woodchat, and Isabelline Shrikes, Swainson's Sparrow, Bush Petronia, Speckle-fronted weaver, Red-collared Widowbird, Black-winged Red and Yellow Bishops, and both Crimson-rumped and Abyssinian Waxbills. With a good dose of luck, you may stumble upon the quiet and inconspicuous Red-billed Pytilia, one of the trickier endemics that is regularly found in the Jemma Valley. In the mid-afternoon, you will depart for the drive back to Addis Ababa. Overnight in Addis Ababa.",
          ],
          image: images.bird8,
        },
        {
          title: "DAY 20: ADDIS ABABA TO HUMERA",
          description: [
            "You depart on a domestic flight to Humera. On arrival, we will transfer to our guesthouse and get settled in before venturing out for some afternoon birding. Overnight in Humera.",
          ],
          image: images.bird7,
        },
        {
          title: "DAY 21: KAFTA-SHIRARO NATIONAL PARK AND SURROUNDS",
          description: [
            "Today you will explore this remote and seldom-visited park and surrounding area. It is situated in the Sahelian zone and thus offers an interesting selection of dry country species. The habitat consists of dry acacia bush veiled in a slightly hilly area and follows the tranquil Tekezze River. You will concentrate your efforts on finding the beautiful Demoiselle Crane which makes a stopover here on its migration from Sudan to India. Up to 3,800 cranes have been seen in this area and the site and sound of them bugling at dusk is a spectacle indeed!",
            "Other key targets include a Sudan/Ethiopia endemic; White-headed Babbler, the amazing Egyptian Plover (a monotypic family), the impressive Sahel Paradise Whydah, and Sudan Golden Sparrow. Other species of interest that are not generally seen on a standard Ethiopian tour include Vieillot's Barbet, Black-billed Wood Dove, Rose-ringed Parakeet, Green Bee-eater, Red-pate Cisticola, Black-headed Gonolek, Northern Grey-headed Sparrow, Black-rumped Waxbill, Chestnut-bellied Starling, Yellow-billed Oxpecker, White-rumped Seedeater, and Golden-breasted Bunting. If we are fortunate we may find a roosting Long-tailed Nightjar. Other more widespread species we may see include Black Stork, Short-toed Snake Eagle, Booted Eagle, Senegal Thick-knee, Black-headed Lapwing, Lichtenstein's and Four-banded Sandgrouse, European Turtle Dove, Abyssinian Roller, Northern Carmine Bee-eater, Black-billed Wood Hoopoe, Black Scimitarbill, Yellow-breasted Barbet, Masked Shrike, Black and Rufous-tailed Scrub Robin, Black-eared Wheatear, and Crimson-rumped Waxbill. Overnight in Humera.",
          ],
          image: images.kafta2,
        },
        {
          title: "DAY 22: HUMERA TO ADDIS ABABA AND DEPARTURE",
          description: [
            "Depending on the time of our departure flight we may have an opportunity for some final early morning birding. We will then make our way to the airport in order to catch our flight back to the capital Addis Ababa to connect with our International flights home.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 6,
    title: "Exploring Ethiopia's Avian Splendor",
    index: false,
    image: images.bird4,
    description: "A Birdwatching Odyssey",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Exploring Ethiopia's Avian Splendor",
        subtitle: "A Birdwatching Odyssey",
        description: [
          "Embark on an extraordinary birdwatching odyssey through the diverse landscapes of Ethiopia, a country renowned for its rich birdlife and captivating endemic species. Over the course of 12 days, this immersive tour will take you on a thrilling adventure from bustling cities to remote wilderness areas, allowing you to witness the remarkable avian diversity that Ethiopia has to offer.",
          "From the bustling capital of Addis Ababa to the majestic Bale Mountains and the hidden gems of Negele and Yabello, each destination holds unique highlights and opportunities to encounter rare and endemic bird species. Get ready to be enthralled by the stunning landscapes, vibrant birdlife, and the warm hospitality of Ethiopia.",
        ],
        lr: true,
        img1: images.bird2,
        img2: images.bird3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Explore city parks teeming with birdlife, including the White-backed Black Tit, Abyssinian Slaty Flycatcher, and Brown-rumped Seedeater.",
          },
          {
            title: "Gemasa Gedel and Debre Birhan",
            description:
              "Search for the elusive Ankober Serin and encounter the unique Gelada Baboons in the wind-blown grand escarpment.",
          },
          {
            title: "The Jemma Valley",
            description:
              "Discover a birding paradise with species like Abyssinian Catbird, Red-billed Pytilia, White-billed Starling, and Rüppell's Black Chat.",
          },
          {
            title: "Lake Awassa",
            description:
              "Witness the vibrant bird activity at the fish market and spot a variety of waterbirds, including the Black Crowned Crane and Pink-backed Pelican.",
          },
          {
            title: "Bale Mountain National Park",
            description:
              "Journey through Afro-alpine moorland and encounter endemic species like Spot-breasted Lapwing, Abyssinian Woodpecker, and Ethiopian Siskin.",
          },
          {
            title: "Negele Borena",
            description:
              "Explore the unique Liben Plains and search for the endangered Archer's Lark and other species like Red-naped Bushshrike and Somali Crombec.",
          },
          {
            title: "Yabello",
            description:
              "Seek out the globally threatened Stresemann's Bushcrow and White-tailed Swallow in the Acacia savanna, along with other captivating birds like Vulturine Guineafowl and African Pygmy Falcon.",
          },
          {
            title: "Lake Langano",
            description:
              "Marvel at Clapperton's Francolin, White-winged Cliff Chat, and Beautiful Sunbird in the woodland surroundings of Lake Langano.",
          },
          {
            title: "Ethiopian Wildlife",
            description:
              "Keep an eye out for fascinating mammals, including the Ethiopian or Simien Wolf, Mountain Nyala, and Gelada Baboons.",
          },
          {
            title: "Cultural Experiences",
            description:
              "Immerse yourself in the rich traditions and warm hospitality of Ethiopia, connecting with local communities and savoring the country's diverse cuisine.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrival in Addis Ababa",
          },
          {
            title: "Day 2",
            description: "Addis Ababa to Debre Birhan via Gemasa Gedel",
          },
          {
            title: "Day 3",
            description: "Debre Birhan to Addis Ababa via the Jemma Valley",
          },
          {
            title: "Day 4",
            description: "Addis Ababa to Lake Awassa",
          },
          {
            title: "Day 5",
            description: "Lake Awassa to Bale Mountain National Park",
          },
          {
            title: "Day 6",
            description: "Explore Bale Mountain National Park",
          },
          {
            title: "Day 7",
            description: "Goba to Negele Borena",
          },
          {
            title: "Day 8",
            description: "Explore the Negele Borena area",
          },
          {
            title: "Day 9",
            description: "Negele Borena to Yabello",
          },
          {
            title: "Day 10",
            description: "Explore the Yabello area",
          },
          {
            title: "Day 11",
            description: "Yabello to Lake Langano",
          },
          {
            title: "Day 12",
            description: "Lake Langano to Addis Ababa and departure",
          },
          {
            title: "Note",
            description:
              "Please note that the itinerary is subject to change based on local conditions and bird sightings.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVAL IN ADDIS ABABA",
          description: [
            "Today is essentially an arrival day. For those who arrive during the day, it is possible to enjoy some birding within city parks. Noteworthy species that may be seen this include White-backed Black Tit, Abyssinian Slaty Flycatcher, Brown-rumped Seedeater, Tekezze Sunbird, White-collared Pigeon, Wattled Ibis, and a host of raptors overhead, numbering both Egyptian and Hooded Vultures. ",
            "Overnight in Addis Ababa.",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: ADDIS ABABA TO DEBRE BIRHAN VIA GEMASA GEDEL",
          description: [
            "You will leave Addis Ababa early and head north to Debre Birhan, hopefully avoiding the capital's frenetic morning traffic. Our target species for the excursion to Gemasa Gedel are the localised Ankober Serin, a rare and elusive Ethiopian endemic.",
            "Discovered only in 1976, they survive along a few kilometres of this wind blasted grand escarpment, as do Gelada Baboons, also known as Lion-headed Baboons. This densely-pelted, shaggy baboon is endemic to Ethiopia, and the males can often be seen flipping back their lips in a show of dominance.",
            "These animals have the closest vocal repertoire to humans of any mammal, pronouncing all consonants and four vowels! They forage on the grasslands above the escarpment and roost on ledges of inaccessible cliffs at night.",
            "Other possible species to be found here include Ethiopian Siskin, Streaky Seedeater, Moorland Chat, White-billed Starling, Bearded Vulture, Verreaux's Eagle, Rufous-breasted Sparrowhawk, Peregrine Falcon, the seldom recorded Somali Starling and Long-billed Pipit. In the afternoon we will then retire to our comfortable hotel in Debre Birhan.",
            "Overnight in Debre Birhan.",
          ],
          image: images.debrelibanos1,
        },

        {
          title: "DAY 3: DEBRE BIRHAN TO ADDIS ABABA VIA THE JEMMA VALLEY",
          description: [
            "An early departure from Debre Birhan is essential in order to be at our chosen site when the endemic Harwood's Francolin is at its most vocal, thus providing our best opportunity for seeing this elusive species.",
            "The Jemma River is one of the main tributaries of the Blue Nile and it cuts a 700m (2,300ft) deep gorge through the landscape. The habitat in the gorge is dominated by Acacia woodland, while the steep sides provide habitat for some excellent endemic birds. We will concentrate our search here for Rüppell's Vulture, Verreaux's Eagle, African Hawk-Eagle, Augur Buzzard (dark morph birds are commonly seen here), Lanner and Peregrine Falcons, Erckel's Francolin, Nyanza Swift, Hemprich's Hornbill, Red-rumped Swallow, Abyssinian Wheatear, the endemic and localised Rüppell's Black Chat, endemic White-winged Cliff Chat and its more familiar cousin, Mocking Cliff Chat, endemic White-billed Starling, elusive Yellow-rumped Seedeater and Cinnamon-breasted Bunting.",
            "We will have a picnic lunch at the river and bird the surrounding woodlands for Blue-spotted Wood Dove, Klaas's Cuckoo, Black-billed Barbet, Eastern Olivaceous Warbler, Lesser Whitethroat, Foxy and Singing Cisticolas, African Paradise Flycatcher, Masked, Woodchat and Isabelline Shrikes, Swainson's Sparrow, Bush Petronia, Speckle-fronted Weaver, Red-collared Widowbird, Black-winged Red and Yellow Bishops, and both Crimson-rumped and Abyssinian Waxbills.",
            "With a good dose of luck, we may stumble upon the quiet and inconspicuous Red-billed Pytilia, one of the trickier endemics that is regularly found in the Jemma Valley. In the mid-afternoon, you will depart for the drive back to Addis Ababa, where we will spend the night.",
            "Overnight in Addis Ababa.",
          ],
          image: images.simien6,
        },
        {
          title: "DAY 4: ADDIS ABABA TO LAKE AWASSA",
          description: [
            "Your Ethiopian adventure continues with an early departure from Addis Ababa this morning as we head into the Great Rift Valley. Our first birding stop is at Lake Chelekcheka, an excellent site for migrant ducks and waders. Regular species encountered here include Northern Pintail, Northern Shoveler, Garganey, Eurasian Teal, Tufted Duck, Black-tailed Godwit and Temminck's Stint.",
            "Sorting through the rafts of ducks and other migrants can be very challenging due to the distraction caused by the sheer number of species moving through the scrubby vegetation near the lake edge! Common Crane often roost in staggering numbers on the far side of the water, and we may see them flying off to forage in huge, noisy flocks.",
            "The well-wooded rim of the deep Lake Hora will be our second stop. The woodlands around the lake also teem with birds and again it may prove difficult to keep up with the seemingly endless flow of lifers! Blue-breasted Bee-eater, Black-billed Barbet, Common Redstart, Eurasian Blackcap, Red-throated Wryneck, Dark-capped Yellow Warbler, Ruppell's Robin-Chat, Western Black-headed Batis, Beautiful Sunbird, Rüppell's Weaver and a diverse variety of waterbirds, especially deep water diving ducks, can be seen here.",
            "Thereafter, we make a short stop at the steep-sided Lake Bishoftu for Maccoa and Ferruginous Ducks, Southern Pochard, Singing Cisticola, gorgeous Tekezze Sunbird, Mocking Cliff Chat, Abyssinian Wheatear, Little Rock Thrush and flocks of Black-winged Lovebird! En route to Lake Awassa, we will also visit Koka Dam and Lake Ziway, all classified as Important Bird Areas supporting vast numbers of resident and migrant waterbirds.",
            "Species we will search for include the spectacular Black Crowned Crane, Pink-backed Pelican, African Darter, Yellow-billed Egret, Goliath Heron, Hamerkop, Yellow-billed and Saddle-billed Storks, Spur-winged and Egyptian Geese, Knob-billed Duck, the elegant African Pygmy Goose, African Fish Eagle, Western Marsh Harrier, African and Lesser Jacanas, Senegal Thick-knee, Sedge Warbler, Spur-winged Lapwing, Gull-billed Tern and Pied and Malachite Kingfishers.",
            "Strolling along the lakeshore at Lake Ziway will allow us excellent views of confiding Great White Pelican and the huge Marabou Stork while dazzling Northern Carmine Bee-eater, migratory White and Western Yellow Wagtails (including some of the striking feldeggi race) and the less colourful Ethiopian Cisticola can be seen around the lake edge. This promises to be an action-packed day, after which we will check into our hotel on the shores of Lake Awassa in the late afternoon.",
            "Overnight in Hawassa",
          ],
          image: images.bird3,
        },
        {
          title: "DAY 5: LAKE AWASSA TO GOBA",
          description: [
            "Our pre-breakfast birding stroll should yield some special birds around our well-wooded hotel grounds. Amongst our targets we hope to see are African Spotted Creeper, Little Weaver, Black-billed Wood Hoopoe, Double-toothed Barbet, Woodland Kingfisher, huge Silvery-cheeked Hornbill, the attractive Red-shouldered Cuckooshrike, Western Black-headed Batis, Brown-throated Wattle-eye, Mourning Collared Dove, Grey-backed Fiscal, Northern Puffback, and Bronze Mannikin.",
            "Reedbeds in the vicinity support Greater Painted-snipe, Black Crake, African Swamphen, Blue-headed Coucal, Red-faced Cisticola, Lesser Swamp Warbler, and Common Waxbill. The hotel grounds also support families of Grivet Monkey, though it is the regal Guereza (Black-and-white Colobus) that will certainly steal our attention as they leap through the trees, their shaggy pelts and long tails trailing behind.",
            "After breakfast, we may then visit the remarkable Lake Awassa fish market. This large lake is particularly rich in fish, and the fishermen gut their catch and discard the waste around the market.",
            "This, in turn, attracts large numbers of grotesque Marabou Stork and other birds. Photographic opportunities are unrivalled. We should also see Great White Pelican, White-breasted and Reed Cormorants, Hamerkop, African Sacred Ibis, Black-headed, Grey-hooded, and Lesser Black-backed Gulls, and sometimes the massively-equipped Thick-billed Raven squabbling over the fish remains.",
            "Leaving Lake Awassa, we wind our way upwards towards the world-famous Bale Mountains National Park. Rugged hillsides en route may hold a few surprises for us, and some dedicated searching may produce the mackinderi race of Cape Eagle-Owl, while wetter areas hold Rouget's Rail, Groundscraper Thrush (of the distinctive, endemic simensis subspecies), Blue-winged Goose, and smart Spot-breasted Lapwing.",
            "At the park headquarters in Dinsho, we will search the trails for the colourful Chestnut-naped Francolin, secretive Abyssinian Ground Thrush, vocal Abyssinian Catbird, and endemic White-backed Black Tit.",
            "With a healthy dose of luck, we may find roosting African Wood Owl and the highly sought-after Abyssinian Owl in the dark recesses of a Juniper thicket. We also hope to see a variety of mammals, including Mountain Nyala (now entirely restricted to the Bale Mountain massif), ‘Menelik's' Bushbuck, Bohor Reedbuck, and Common Warthog, unusual at this high altitude.",
            "Overnight in Goba.",
          ],
          image: images.bird4,
        },
        {
          title: "DAY 6: BALE MOUNTAIN NATIONAL PARK",
          description: [
            "This will be a day of great contrasts and amazing scenery and birding. You will depart early and ascend the Bale Mountain massif onto the Sanette Plateau, which lies between 3,800m and 4,377m (12,540 and 14,444ft) above sea level.",
            "As you climb out of Goba, we enter a Juniper forest zone, where we will search for African Goshawk, Rufous-breasted Sparrow hawk, White-cheeked Turaco, the localised Abyssinian Woodpecker, Cinnamon Bracken Warbler, African Hill Babbler, Montane White-eye, and Yellow-bellied Waxbill.",
            "Upon reaching this unique plateau, you will be driving on Africa's highest road - passing close to the summit of Ethiopia's second-highest mountain. This habitat is termed “Afro-alpine moorland” and is characterised by Jibrra or Giant Lobelias that tower like monolithic giants over the rich tussock grasslands and extensive cushions of yellow Everlasting flowers.",
            "This site is an Important Bird Area of immense significance, supporting seven globally threatened species and nearly all of Ethiopia's Highland biome species. The plateau holds the only Afrotropical breeding populations of Ruddy Shelduck, Golden Eagle, and Red-billed Chough.",
            "We will also search for Black Stork, Wattled Ibis, Chestnut-naped and Moorland Francolins, Rouget's Rail (particularly common and confiding here), endemic Blue-winged Goose, Spot-breasted Lapwing, Wattled Crane, Thekla's Lark, migratory flocks of Red-throated Pipit, Abyssinian Long claw, Red-breasted Wheatear, dumpy Moorland Chat, and vast flocks of endemic Ethiopian Siskins.",
            "These grasslands are estimated to support an incredible biomass of 4,000kg (8,800lb) of rodents per hectare. This obviously attracts an array of raptors and we should see Steppe and Golden Eagles, Augur Buzzard, and elegant Pallid Harrier courting over this green sea. They share this abundant food source with the plateau's most celebrated resident, the Ethiopian or Simien Wolf, crowned with the unenviable title of “the world's rarest canid.”",
            "Watching these vibrantly coloured animals, most closely related to the European Timber Wolf, exhibiting their hunting prowess whilst pouncing on Giant Mole Rats (another endemic to the Sanette Plateau) is surely among Africa's greatest wildlife experiences. You should enjoy excellent photographic opportunities in this unique montane habitat.",
            "Finally, you will reach the escarpment of this elevated plateau and stare down through the clouds at the vast Harenna Forest below. Time permitting; you make visit the upper slopes of this forest this afternoon. This remarkable forest is the largest intact forest block in Ethiopia and the largest protected Afro-alpine forest on the continent.",
            "It still supports populations of Lion, and the only surviving forest-dwelling African Wild Dogs. Although unlikely that you will see either of these species, the descent through this breathtakingly beautiful, moss-draped forest is inspirational.",
            "Here you will search for the uncommon Mountain Buzzard, African Olive Pigeon, Lemon and Tambourine Doves, African Emerald Cuckoo, Abyssinian Woodpecker, Narina Trogon, Brown Parisoma (represented by a subspecies endemic to this National Park), Abyssinian Crimsonwing, African Citril, and Yellow-crowned Canary. Later in the day, you will head back to our hotel in Goba.",
            "Overnight in Goba.",
          ],
          image: images.bird5,
        },
        {
          title: "DAY 7: GOBA TO NEGELE VIA THE BALE MOUNTAIN NATIONAL PARK",
          description: [
            "Today we will depart early and once again ascend the Bale Mountain massif onto the Sanette Plateau. After crossing this fascinating area again, you drop into the Harenna Forest. As we lose altitude, we will exit the forest zone and enter progressively drier thorn savanna in this remote, southern sector of Ethiopia. ",
            "Along the dusty drive, we can expect to start adding a number of new species to our burgeoning list including Red-and-yellow Barbet, Golden-breasted, Shelley's and Superb Starlings, Northern Red-billed and Eastern Yellow-billed Hornbills and Lilac-breasted Roller.",
            "Finally, you will reach a dry wadi on the Genale River, home to Ethiopia's most sought-after endemic, Ruspoli's Turaco.",
            "The bird is named after an Italian Prince, its hapless discoverer, who was killed by an elephant soon after collecting the type specimen in the 1890's. It took another 50 years before explorers saw the turaco again, and only in the 1970's was anything revealed about this bird.",
            "We will search fruiting fig trees along the wadi and, with the help of local farmers we should enjoy excellent views of this very unusual and beautiful turaco. You will arrive in Negele in the early evening and check into our basic hotel.",
            "Overnight in Negele",
          ],
          image: images.bird6,
        },
        {
          title: "DAY 8: NEGELE AREA. ",
          description: [
            "East of Negele lies a unique open grassland, the Liben Plains, to which the little-known Archer's Lark is restricted. This species belongs to the unusual genus Heteromirafra, which also includes South Africa's Rudd's Lark, and is considered one of the most endangered birds on Earth.",
            "You will walk through these plains in search of this special bird, which we hope to watch performing its parachute display flight. We should also find small parties of hovering Lesser Kestrel, giant Kori Bustard (the world's heaviest flying bird), White-bellied Bustard, Temminck's Courser, Black-winged Lapwing, the range restricted Somali Short-toed Lark, Plain-backed Pipit and Pectoral-patch Cisticola. If you're very lucky, you may see coveys of Coqui Francolin or flush a migratory Corn Crake.",
            "Further east of Negele you will bird the increasingly dry woodland and thorn savanna towards the Somali border. This area supports a recently found population of the tricky endemic Salvadori's Seedeater, scarce Golden Pipit, elusive Red-naped Bushshrike, White-winged Black Tit, Pringle's Puffback, Three-streaked Tchagra, Foxy Lark, Somali Crombec, Taita Fiscal, Red-fronted Barbet, garish Golden-breasted Starling, attractive flocks of White-crowned Starlings, Somali Crow, African Silverbill, Shelley's Sparrow and Somali Bunting. Large troops of Olive Baboon may also be encountered here and you should see Guenther's Dik-dik and possibly Gerenuk. Overnight in Negele",
          ],
          image: images.bird7,
        },
        {
          title: "DAY 9: NEGELE TO YABELLO",
          description: [
            "Today's drive along another long and seldom-travelled road takes you near to the Kenya border and finally to the Yabello region, home to two of Ethiopia's most sought-after endemic birds, both listed as globally threatened: the enigmatic Stresemann's Bushcrow and glistening White-tailed Swallow. ",
            "This area of Acacia savanna is characterised by giant red termite mounds (some towering 5m above the plains!) and both these birds seem to be associated in some way with these marvels of natural architecture. The social Bushcrow (or Zavattariornis) was only discovered in 1938 and its affinities have yet to be established with certainty.",
            "Although it appears starling-like, it is presumed to be most closely related to Crows. Several birding stops will break the journey, the most notable being a stop at the Dawa River in search of Juba Weaver, White-winged Collared Dove and Black-bellied Sunbird. ",
            "Other noteworthy birds you may encounter en route to Yabello include Somali Courser, Magpie Starling, Black-throated and D'Arnaud's Barbets, Pygmy Batis, Acacia Tit, Dodson's Bulbul, Red-fronted Warbler, Purple Grenadier, Black-capped Social Weaver, Steel-blue Whydah and its host, Black-cheeked Waxbill. ",
            "Overnight in Yabello",
          ],
          image: images.bird8,
        },
        {
          title: "DAY 10: YABELLO AREA",
          description: [
            "You have the whole day to bird the Yabello area and get better acquainted with Stresemann's Bushcrow and White-tailed Swallow. Other birds you will be looking for are Gabar Goshawk, the shrike-sized African Pygmy Falcon, Yellow-necked Spurfowl, glamorous flocks of Vulturine Guineafowl, Black-faced Sandgrouse, Mottled Swift, Tree Pipit, the localised Bare-eyed Thrush, ventriloquial Spotted Palm Thrush, African Grey Flycatcher, Pale Prinia, Yellow-bellied Eremomela, Banded Parisoma, Hunter's and Shining Sunbirds, Superb and Wattled Starlings, Chestnut Sparrow, Yellow-spotted Petronia, Grey-capped Social Weaver, Chestnut Weaver, Green-winged Pytilia, White-bellied Canary and White-winged Widowbird.",
            "A night drive in this exciting area could produce Donaldson-Smith's and Slender-tailed Nightjars, Greyish Eagle-Owl, Northern White-faced Owl and Three-banded Courser. Nocturnal mammal sightings have included Striped and Spotted Hyenas, Serval, African Wild Cat and Ethiopian Genet.",
            "Overnight in Yabello",
          ],
          image: images.bird2,
        },
        {
          title: "DAY 11: YABELLO TO LAKE LANGANO",
          description: [
            "After breakfast, you will depart Yabello and make your way back north towards Addis Ababa on what is, essentially, a travel day. In the late afternoon, you will reach your comfortable hotel on the shores of Lake Langano. Overnight in Langano",
          ],
          image: images.bahirdar1,
        },
        {
          title: "DAY 12: LAKE LANGANO TO ADDIS ABABA AND DEPART",
          description: [
            "Following an early breakfast, you will try and spend time today exploring the surrounding woodlands of Lake Langano for Clapperton's Francolin, White-winged Cliff Chat, Little Rock Thrush, Buff-bellied Warbler, Beautiful Sunbird, Ruppell's Starling, White-faced Go-away-bird, Black-winged Lovebird, Abyssinian Wheatear, White-winged Black Tit, Black-billed Wood Hoopoe, Von der Decken's Hornbill, Ruppell's Weaver, Banded and Black-billed Barbets, Grey-headed Batis, African Pygmy Kingfisher, Bearded Woodpecker and Masked Shrike. After a final successful morning's birding, you will spend the balance of the day driving northwards, reaching the capital in the late afternoon. You will enjoy a final celebratory dinner before wrapping up the tour.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 6,
    title: "Ethiopian Birding Expedition",
    index: false,
    image: images.bird5,
    description: "From Rift Valley To Highlands",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Birding Expedition",
        subtitle: "From Rift Valley To Highlands",
        description: [
          "Start a quest on an exhilarating journey through the diverse landscapes of Ethiopia, a haven for bird enthusiasts and photographers alike. This 16-day expedition takes you from the bustling capital city of Addis Ababa to stunning national parks, pristine lakes, and remote regions brimming with avian treasures.",
          "Immerse yourself in the breathtaking beauty of Ethiopia's landscapes while capturing images of rare and endemic bird species. From the Geferssa Reservoir near Addis Ababa to the awe-inspiring Bale Mountains National Park and the arid plains of Yabello, this trip promises incredible encounters with unique birdlife.",
          "Explore the cultural and historical sites along the way, adding depth to your photographic journey. Join us on this extraordinary birding expedition, where every moment presents a new opportunity to capture the wonders of Ethiopia's avifauna.",
        ],
        lr: true,
        img1: images.bird2,
        img2: images.bird3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Geferssa Reservoir",
            description:
              "Capture shots of the elusive Blue-winged Goose, Black-headed Siskin, Abyssinian Long Claw, and Wattled Ibis near the outskirts of Addis Ababa.",
          },
          {
            title: "Awash National Park",
            description:
              "Delve into a birding paradise with sightings of the Northern Carmine Bee-eater and other captivating species like Arabian Bustard, Hartlaub's Bustard, and Yellow-breasted Barbet.",
          },
          {
            title: "Bale Mountains National Park",
            description:
              "Photograph the endemic Moorland Francolin, Abyssinian Catbird, Rouget's Rail, and the critically endangered Ethiopian Wolf in the breathtaking alpine moorlands and Hagenia forests.",
          },
          {
            title: "Negele Plains",
            description:
              "Seek out Africa's most threatened bird, the rare Liben/Sidamo Lark, and other specialties such as Somali Short-toed Lark and Vulturine Guineafowl in this unique arid region.",
          },
          {
            title: "Yabello",
            description:
              "Capture shots of the charismatic Stresemann's Bushcrow and White-tailed Swallow in the immediate surrounds of Yabello.",
          },
          {
            title: "Lake Awasa",
            description:
              "Explore the bird-filled lake, photographing African Pygmy Geese, Fish Eagles, Jacanas, and a plethora of waterbirds congregated on its shores.",
          },
          {
            title: "Debre Libanos and Ankober",
            description:
              "Discover the unique birdlife of these scenic areas, including the Erckel's Francolin, White-winged Cliff Chat, and Ankober Serin.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrival in Addis Ababa and Geferssa Birding",
          },
          {
            title: "Day 2",
            description: "Addis Ababa to Awash",
          },
          {
            title: "Day 3",
            description: "Awash National Park Exploration",
          },
          {
            title: "Day 4",
            description: "Awash to Wondo Genet",
          },
          {
            title: "Day 5",
            description: "Wondo Genet to Goba",
          },
          {
            title: "Day 6",
            description: "Bale Mountains National Park",
          },
          {
            title: "Day 7",
            description: "Resume Bale Mountains Exploration",
          },
          {
            title: "Day 8",
            description: "Goba to Negele",
          },
          {
            title: "Day 9",
            description: "Negele Plains",
          },
          {
            title: "Day 10",
            description: "Negele to Yabello",
          },
          {
            title: "Day 11",
            description: "Yabello to Awassa",
          },
          {
            title: "Day 12",
            description: "Awassa to Langano",
          },
          {
            title: "Day 13",
            description: "Langano to Debre Libanos",
          },
          {
            title: "Day 14",
            description: "Debre Libanos, the Jemma Valley, and Ankober",
          },
          {
            title: "Day 15",
            description: "Ankober to Addis Ababa",
          },
          {
            title: "Day 16",
            description: "Gibe Gorge Day Trip and Departure from Addis Ababa",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 01: ADDIS ABABA ARRIVAL AND GEFERSSA BIRDING",
          description: [
            "On your arrival at the Bole International Airport, our staff will welcome and assist you for your Hotel transfer. After lunch in the hotel, we leave for Geferssa Reservoir, around 20 km west of Addis Ababa, where one can see the Blue-winged Goose, Black-headed Siskin, Abyssinian Long Claw, and Wattled Ibis. Return to Addis Ababa early evening.",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 02: ADDIS ABABA TO AWASH",
          description: [
            "Our Ethiopian trip kicks off with an early start from the country’s lofty capital, Addis Ababa (after breakfast with Brown-rumped Seedeater), as we make our way down into the lake-studded rift valley. We should have time to pause at Debre Zeyit for our first waterbirds, before heading to our final destination at Awash for some introductory dry-country birding. Northern Carmine Bee-eater in Awash National Park.",
          ],
          image: images.awash1,
        },
        {
          title: "DAY 03: AWASH NATIONAL PARK",
          description: [
            "The bird-filled Awash National Park and surroundings will be the focus of our entire day’s birding. At the black lava flow at Lake Baseka, we’ll search for the highly localized Sombre Rock Chat. The rest of the time will be spent scouring the grass plains and bushland for specials such as Arabian Bustard, Hartlaub’s Bustard, Red-winged Lark, Somali Fiscal, and Yellow-breasted Barbet.",
          ],
          image: images.bird1,
        },
        {
          title: "DAY 04: AWASH TO WONDO GENET",
          description: [
            "After breakfast on your accommodation, we’ll start our journey southwards, passing various crater lakes and wetlands, such as Lake Ziway and Langano, with surrounding acacia bush, and may see Northern Grey Tit and Black-billed Woodhoopoe. By mid-afternoon, we hope to reach Wondo Genet, and spend the last few hours of light birding in some remnant forest patches near our accommodation, although the main birding here will be the following morning.",
          ],
          image: images.bird2,
        },
        {
          title: "DAY 05: WONDO GENET TO GOBA",
          description: [
            "An early morning birding around Wondo Genet should turn up several endemics and specials, which may include Yellow-fronted Parrot, White-cheeked Turaco, Banded Barbet, Abyssinian Woodpecker, Abyssinian Slaty Flycatcher, Abyssinian Oriole, and perhaps the scarce Abyssinian Ground Thrush. We’ll then wind our way into the fabulous Bale Mountains, keeping our eyes peeled for Thick-billed Raven and Red-billed Chough, for two nights stay.",
          ],
          image: images.bird3,
        },
        {
          title: "DAY 06: BALE MOUNTAINS NATIONAL PARK",
          description: [
            "The breathtaking scenery of the Bale Mountains provides a backdrop to some of Ethiopia’s best birding. We’ll spend a full day examining the alpine moorlands and Hagenia forests of the area, in search of Moorland Francolin, White-backed Tit, Abyssinian Catbird, Rouget’s Rail, Wattled Ibis, Blue-winged Goose, Spot-breasted Lapwing, White-collared Pigeon, Abyssinian Longclaw, Abyssinian Woodpecker, and White-billed Starling.",
          ],
          image: images.bird4,
        },
        {
          title: "DAY 07: RESUME BALE MOUNTAINS EXPLORATION",
          description: [
            "We’ll be watching out for Ethiopia’s flagship mammal, the Critically Endangered Ethiopian Wolf! Of all carnivores, the Ethiopian Wolf is the most endangered, with only 400 to 600 remaining. We make a special effort to search for them in the Bale mountains.",
          ],
          image: images.bird5,
        },
        {
          title: "DAY 08: GOBA TO NEGELE",
          description: [
            "With a long drive ahead of us, we make an early start across the Sanetti Plateau and down through the Harenna Forest, searching for any local specialties that we may be missing. We’ll pause at a few strategic river crossings in search of the charismatic Prince Ruspoli’s Turaco on our way south on to Negele.",
          ],
          image: images.bird6,
        },
        {
          title: "DAY 09: NEGELE PLAINS",
          description: [
            "The overgrazed Liben Plains near Negele holds perhaps Africa’s most threatened bird, the rare Liben/Sidamo Lark. This species will form the main focus of our visit, but we also hope to find several other specialties in the area, including Somali Short-toed Lark, White-crowned Starling, and perhaps Salvadori’s Seedeater. Arid country birds may include Vulturine Guineafowl and Pringle’s Puffback.",
          ],
          image: images.simien6,
        },
        {
          title: "DAY 10: NEGELE TO YABELLO",
          description: [
            "Today, we continue further south into the arid country of southern Ethiopia, as we continue on to Yavello. We’ll visit some riverine habitats in search of the highly localized Juba Weaver and White-winged Dove and smart Black-bellied Sunbird, pause, if necessary at Arero forest, where one of the largest populations of Prince Ruspoli’s Turaco resides, and catch up with some more arid-country species, such as Red-naped Bushshrike, Three-streaked Tchagra, and Foxy Lark.",
          ],
          image: images.gambella1,
        },
        {
          title: "DAY 11: YABELLO TO AWASSA",
          description: [
            "The immediate surrounds of Yabello are home to two very special birds, the charismatic Stresemann’s Bushcrow and little-known White-tailed Swallow. We’ll spend the early morning searching for these, before starting our return journey northwards, watching out for Shelley’s Starling at the roadside as we go. We break our journey at the bird-filled Lake Awasa.",
          ],
          image: images.hawassa1,
        },
        {
          title: "DAY 12: AWASSA TO LANGANO",
          description: [
            "We leave Addis Ababa early in the morning, heading south for the main Ethiopian Rift Valley. We will be birding along the main road, stopping off at Koka Dam and the Awash river and then at Lake Zeway for lunch. After lunch, we head down to the lakeshore where huge numbers of water birds are congregated. African Pygmy Geese, Yellow-billed storks, Collared Pratincoles, Lesser and greater Jacanas, African Jacanas, White Pelicans, Fish Eagles, crowned and common cranes are some of the species to be seen here in impressive numbers. We leave Zeway mid-afternoon, continuing to Lake Langano for an overnight stay. Overnight at one of the lake Side resorts at Lake Langano.",
          ],
          image: images.bird7,
        },
        {
          title: "DAY 13: LANGANO TO DEBRE LIBANOS",
          description: [
            "Today, we continue northwards, back through Addis Ababa and to spectacular cliffs of Debre Libanos. Here we’ll search for the localized Erckel’s Francolin, White-winged Cliff Chat, Rueppell’s Black Chat, and the unusual Gelada Baboon.",
          ],
          image: images.bird8,
        },
        {
          title: "DAY 14: DEBRE LIBANOS, THE JEMMA VALLEY AND ON TO ANKOBER",
          description: [
            "An early start from Debre Libanos will see us descend into the Jemma River valley, where after first light we’ll search for Harwood’s Francolin. We’ll also watch out for Hemprich’s Hornbill, White-billed Starling, Black-billed Barbet, and Foxy Cisticola, and if we are very fortunate, the scarce Red-billed Pytilia. We’ll then continue onto the escarpment at Ankober.",
          ],
          image: images.debrelibanos1,
        },
        {
          title: "DAY 15: ANKOBER TO ADDIS ABABA",
          description: [
            "Yet another little-known endemic can be found in the vicinity of Ankober, the unobtrusive Ankober Serin. We’ll also stand the chance of searching for specials that we may be missing, including Erckel’s Francolin, Black-headed Siskin, and Ethiopian Cisticola. We hope also to have time to make a short detour to Melka Ghebdu, where the localized Yellow-throated Serin occurs, before heading over the cultivated plains to Addis.",
          ],
          image: images.adey1,
        },
        {
          title: "DAY 16: GIBE GORGE DAY TRIP",
          description: [
            "Our final day in Ethiopia will be spent exploring the Gibe Gorge area, about an hour’s drive west of Addis. Here we stand the chance again of finding the scarce Red-billed Pytilia, and may encounter Abyssinian Waxbill. It will also give us a chance to search for any other specials that we may have missed. In the late afternoon drive back to Addis Ababa and after some refreshment and rest, we will go to a farewell dinner at one of the cultural restaurants and then transfer to the Airport for the departure flight back home.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 1,
    experience: 7,
    title: "Wildlife Expedition",
    index: false,
    image: images.simien2,
    description: "Exploring The Untamed Beauty Of Ethiopia's Mountains",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Wildlife Expedition",
        subtitle: "Exploring The Untamed Beauty Of Ethiopia's Mountains",
        description: [
          "Commence an adventure on an unforgettable 12-day wildlife expedition through Ethiopia's majestic Simien and Bale Mountains. This journey is tailor-made for wildlife enthusiasts seeking an up-close encounter with Ethiopia's extraordinary biodiversity.",
          "With a focus on two of the country's most renowned national parks, this itinerary offers extended stays in the Simien and Bale Mountains, providing ample opportunities to observe and photograph endemic mammals and birds against the backdrop of awe-inspiring landscapes. With expert guides and a wealth of wildlife encounters, this expedition promises an unforgettable experience for wildlife enthusiasts, offering a unique glimpse into the untouched wilderness of Ethiopia.",
        ],
        lr: true,
        img1: images.simien1,
        img2: images.bale1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Discover the vibrant capital city with its bustling markets and fascinating culture.",
          },
          {
            title: "Gonder",
            description:
              "Explore the historical sites of Gonder, including the Royal Enclosure and Debre Berhan Selassie Church.",
          },
          {
            title: "Simien Mountains National Park",
            description:
              "Encounter the iconic Gelada Baboons and elusive Walia Ibex while enjoying the breathtaking scenery.",
          },
          {
            title: "Bale Mountains National Park",
            description:
              "Roam the high moorlands in search of the endangered Ethiopian Wolf and other unique species.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa & city tour. Overnight in Addis Ababa.",
          },
          {
            title: "Day 2",
            description: "Fly to Gonder & sightseeing. Overnight in Gonder.",
          },
          {
            title: "Day 3-5",
            description:
              "Simien Mountains National Park. Overnight in Simien Mountains National Park.",
          },
          {
            title: "Day 6",
            description:
              "Drive to Gonder & fly back to Addis Ababa. Overnight in Addis Ababa.",
          },
          {
            title: "Day 7",
            description:
              "Drive to Awassa via Senkelle Sanctuary. Overnight in Awassa.",
          },
          {
            title: "Day 8-10",
            description:
              "Bale Mountains National Park. Overnight in Bale Mountains National Park.",
          },
          {
            title: "Day 11",
            description: "Drive to Lake Langano. Overnight in Lake Langano.",
          },
          {
            title: "Day 12",
            description: "Drive to Addis Ababa. Overnight in Addis Ababa.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel for overnight accommodation. The city enjoys an excellent climate all year round, with an average temperature of 25°C (77°F). ",
            "With a multiethnic population of over 5 million, Addis Ababa is a pleasant city with wide avenues of jacaranda trees, interesting museums, and one of the largest open-air markets in Africa, known as the “Mercato”. After your long flight and a welcome briefing, you can settle into your hotel for some rest. Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO GONDER & SIGHTSEEING",
          description: [
            "This morning board a short flight to Gonder, upon arrival transfer to your hotel. You will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years.",
            "You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area. You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant. Overnight in Gonder",
          ],
          image: images.gonder3,
        },
        {
          title: "DAY 3/5: SIMIEN MOUNTAINS",
          description: [
            "This morning you continue your journey to the Simien Mountains. The next three nights you will explore one of Africa’s principal mountain massifs and one of the continent’s most spectacular sceneries.",
            "The three-hour drive to Debark, the gateway to the Simien Mountains National Park, is our first opportunity to get a feel for the Ethiopian highlands, and as we pass through the small roadside villages we are provided with a valuable insight into the subsistence economy that exists here. Employing methods unchanged for thousands of years, families continue to grow a variety of indigenous crops, chief among them, the famous and ubiquitous teff.",
            "The Simien Mountains are home to some of the most breathtaking scenery in Africa and also harbor many of Ethiopia’s most iconic mammals. At least a dozen of its peaks rise above 4000m, with the highest; Mount Ras Dashen, scaling 4,620m, making it the highest point in Ethiopia and the fourth highest on the continent.",
            "The mountain range is comprised of several major plateaus divided by a network of river valleys that span for miles, however, it is only the western side of the range that has been designated a National Park and it is here that you will focus your attention single dirt road runs through the Park from your lodge to Bwahit Pass, allowing you to access the most scenic and rewarding sites around Sankaber and Chenek, where you will be on the lookout for three of Ethiopia’s largest endemic mammals.",
            "With an estimated population of over 15,000 individuals, the Simien Mountains is considered a stronghold for the Gelada Baboon; a magnificent beast possessed of an imposing golden mane and distinctive heart-shaped red chest. Unique amongst primates, the Gelada Baboon feeds almost exclusively on grass and is considered the most sociable of African monkeys, with a harem-based social structure that is widely regarded to be second in complexity, only to humans.",
            "With enormous canines and a maned coat, not unlike a Lion, one could be forgiven for thinking that you would need to give them a very wide berth. However, they are in fact remarkably tolerant of their human cousins and will often allow you to approach within a few meters, providing superb photographic opportunities.",
            "Social units typically number around 30-50 individuals, however, in the late afternoon as dusk approaches, the baboons retreat to the safety of the escarpment edge and will often come together in mega-herds of over 500 animals. Set against a magnificent backdrop of vast plains and isolated pinnacles, this has to be one of Africa’s most impressive wildlife spectacles.",
            "Restricted entirely to the Simien Mountains, the endangered Walia Ibex is considered to be Ethiopia’s rarest endemic mammal, with the population believed to be in the region of 500 individuals. Favoring very steep, rocky cliff areas between 2,500m and 4,500m high, with its chocolate-brown coloration it can prove remarkably well camouflaged when set against the dark cliffs.",
            "Males can weigh as much as 125 kg (180-280lb) and have very large horns that curve backward, reaching lengths up to 110cm (43 in). Whilst the females are smaller and lighter in color, the males have a distinguished black beard that lengthens and thickens with age, setting them apart from the females.",
            "Walia Ibex are prolific grazers and will feed on a diverse range of vegetation, from scrub and herbs to lichens, and are particularly active first thing in the morning when they frequently ascend the escarpment cliffs to graze on the plateau. The area around Chenek not only holds some of the most spectacular scenery in the Park but is also something of a hotspot for the species and you will certainly try your luck here, hoping to photograph this magnificent animal in the morning light.",
            "Sadly, following a rabies epidemic several years ago, the last of the ‘Simien Big Three,’ the Ethiopian Wolf, is also the rarest, with the Simien population now believed to be as low as 40 individuals. Nevertheless, Ethiopian Wolves have been seen and heard in the Simiens and you will always be on the lookout. It is also worth noting that you will also have an excellent chance of seeing this beautiful canid later on in the tour in the Bale Mountains.",
            "Less well known for its birds, the Simien Mountains still has some very interesting prospects, with over 180 species having been recorded in the range and some star species offering fantastic photographic opportunities, including Lammergeiers, Augur Buzzards, and with a little luck, Lanner Falcons.",
            "Endemic White-billed Starlings are a common sight, frequently found clinging to rocky gorges, whilst White-winged Black Tit and Abyssinian Catbird prefer the dense cover of Juniper Forest.",
            "The drab Moorland Chat is one of the most common birds in the area and will be a constant companion throughout our stay, whilst picnic lunches are likely to attract the attention of inquisitive endemic Thick-billed Ravens! Overnight in Simien Mountains National Park",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 6: DRIVE TO GONDAR & FLY TO ADDIS",
          description: [
            "After three fabulous nights in the Simiens, it will sadly be time to leave and you will gradually retrace your steps back to Debark and then on to Gondar, arriving in good time to check in to your flight back to Addis. Upon arriving in Addis, you will transfer to your hotel for overnight.",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 7: DRIVE TO AWASSA VIA SENKELLE SANCTUARY",
          description: [
            "You will set off early and drive south through the Great Rift Valley to Lake Awassa where you overnight. As you drive, you see a marked difference in the style of the houses and the surrounding habitat, with roadside birding offering the chance to see and photograph such bushland and acacia-loving many birds.",
            "Having a lunch stop at Shashamane town, then drive to Senkelle. In the late afternoon, you will explore the rarely-visited Senkelle Wildlife Sanctuary, the last stronghold of the endemic Swayne’s Hartebeest. These impressive chestnut-colored antelopes are still common here.",
            "Besides this, Oribi, bushbucks, warthogs, and baboons in the grasslands and also feature a different variety of birds like the White-bellied Bustard and the gorgeous Northern Carmine Bee-eater. After the exploration, you head to Awassa, a town situated beside the lake of the same name, where you will overnight.",
          ],
          image: images.hawassa1,
        },
        {
          title: "DAY 8: DRIVE TO BALE MOUNTAINS",
          description: [
            "After breakfast, you will embark on the long drive to the Bale Mountains National Park, a scenic journey that will likely take much of the day, but should give you the chance to see some incredible wildlife and an excellent chance of getting your first views of one of the world’s rarest canids, the Ethiopian Wolf!",
            "Climbing through forests, fields, little villages, and banana groves, you reach open grassy uplands where you shall stop to scan for Serval Cat before continuing on to the Park Headquarters at Dinsho. Exploring the surrounding juniper forest, you have the possibility of encountering and photographing some of the region's mammals, including the endemic Mountain Nyala, Common Duiker, Bohor Reedbuck, Menelik's Bushbuck, and Warthog, all of which may be seen along the forest margins. As well as the mammals you will also be on the lookout for some of the area’s endemic bird species.",
            "From Dinsho you continue, first out of the park, passing through the town of Goba, before entering back in and beginning your ascent up to the Senetti Plateau. It is here, amongst the vast tracts of Afro-alpine moorland, Giant Lobeilias, and stands of Red Hot Pokers that you have your best chance of encountering and photographing the magnificent Ethiopian Wolf and its favorite prey, the enigmatic Giant Mole-rat. Driving south across the plateau for approximately 50kms you reach the southern escarpment and from here, begin our descent into the mystical world of the Harenna Forest where you base yourselves for the next three nights at the charming Bale Mountain Lodge.",
            "Overnight: Three nights in Bale Mountains National Park",
          ],
          image: images.bale1,
        },
        {
          title: "DAY 9 & 10: EXPLORE BALE MOUNTAIN",
          description: [
            "The Bale Mountains, lying between 9,500 feet and 14,360 feet, contain the largest tract of high moorland in Africa. Virtually uninhabited, they are almost entirely unspoiled and were set aside as a national park in order to protect the Mountain Nyala which is found nowhere else in the world. Of volcanic origin like the more famous Simiens in the north, the Bale Mountains may not be as spectacular, but they do possess an exceptional beauty and charm which can be likened to that of the Scottish Highlands. They are green and spacious, decorated with rocky peaks and crags, numerous small lakes, extensive heathland, magnificent cloud forests, and bogs! Within the park is Mount Batu, at 14,360 feet one of the highest mountains in Ethiopia. The flora is fascinating and so is the fauna.",
            "The park remains a stronghold for the beautiful Ethiopian Wolf, which roams the plateau in small groups and is regularly seen, whilst Klipspringers, the endemic Stark’s Hare, Warthogs, Rock Hyrax, the peculiar endemic Giant Mole-Rat, and the verminous but characterful Grass Rats and Swamp Rats (the main prey of the Ethiopian Wolf) are to be added to those species already mentioned.",
            "Amongst an interesting collection of upland birds, we are likely to see eleven of Ethiopia's 29 endemics: Blue-winged Goose, Rouget's Rail, Spot-breasted Plover, White-collared Pigeon, Black-winged Lovebird, Golden-backed Woodpecker, and Abyssinian Long claw, Abyssinian Catbird, White-backed Tit, Black-headed Siskin and Thick-billed Raven!",
            "With two full days to explore the area, you are likely to focus the majority of your time on the plateau where little lakes, extensive grasslands, and the weird spikes of primeval-looking Giant Lobelias and Red-Hot Pokers provide a wonderful Afro-alpine habitat in which to observe and photograph the wolves. You will typically take the approach of driving slowly across the plateau until you encounter a wolf. The wolves are usually quite comfortable around the vehicle, but it has the disadvantage of being quite high up, and the likelihood is that you will spend a significant amount of time observing and photographing the wolves on foot.",
            "This method requires a good degree of stealth and patience but can be hugely rewarding, and you will likely find yourselves refining your methods over the duration of your stay. The wolves are usually very active during the day, and you have a good chance of observing them displaying a wide range of behaviors. With rodents making up the vast majority of their diet, they have to hunt frequently and you have an excellent chance of witnessing and photographing this fascinating behavior.",
            "In addition to providing an important food source for the Ethiopian Wolves, the large numbers of rodent species on the plateau also attract many species of birds of prey that include wintering Spotted, Imperial, and other Aquila eagles, as well as almost all of Ethiopia's vulture species. Wattled Crane and Montane Francolin are two resident bird species that we are likely to encounter, alongside endemic Rouget's Rail, Spot-breasted Plover, and Blue-winged Goose.",
          ],
          image: images.bale2,
        },
        {
          title: "DAY 11: DRIVE TO LAKE LANGANO",
          description: [
            "Today retrace your steps back over the plateau, stopping for any wildlife of interest on route. Descending the northern escarpment into Goba, you journey west past Dinsho and back to Lake Awassa, before turning north and continuing up the Great Rift Valley for an overnight stay in a comfortable eco-lodge on the shores of Lake Langano.",
          ],
          image: images.bale5,
        },
        {
          title: "DAY 12: DRIVE TO ADDIS ABABA",
          description: [
            "Today, your last morning in Ethiopia, you are free to relax and enjoy this beautifully appointed eco-friendly lodge and the surrounding lake area. Heading back north, you will pay a visit to Lake Abiata, which is widely regarded as Ethiopia's Nakuru. Shallow and saline, it is an enormous lake with enormous numbers of birds and you will enjoy this spectacle of color.\n\nLater, you return to Addis where hotel rooms will be available to freshen up and then travel to the airport for your flight home.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 7,
    title: "Ethiopian Wildlife Odyssey",
    index: false,
    image: images.simien7,
    description: "Exploring Untamed Beauty And Endangered Species",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Wildlife Odyssey",
        subtitle: "Exploring Untamed Beauty And Endangered Species",
        description: [
          "Start an odyssey on a thrilling 13-day journey into the heart of Ethiopia's diverse wildlife havens. This itinerary is designed exclusively for wildlife enthusiasts seeking extraordinary encounters with endemic species and pristine landscapes. From the vibrant capital city of Addis Ababa to the remote corners of Chebera Churchura, Maze, and Bale Mountains National Parks, this expedition promises an immersive experience in the untamed beauty of Ethiopia.",
          "Witness the majesty of Ethiopian wolves, the rarest canids in the world, and capture remarkable moments with endangered Swayne's Hartebeests and majestic elephants. Explore ancient sites, discover cultural treasures, and embrace the authenticity of this captivating country.",
        ],
        lr: true,
        img1: images.simien2,
        img2: images.bale3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Immerse yourself in Ethiopia's capital, with its bustling markets and cultural landmarks.",
          },
          {
            title: "Chebera Churchura National Park",
            description:
              "Encounter elephants, buffalos, and over 235 bird species in this untouched wilderness area.",
          },
          {
            title: "Maze National Park",
            description:
              "Discover the critically endangered Swayne's Hartebeest and diverse wildlife in the savannah grasslands.",
          },
          {
            title: "Bale Mountains National Park",
            description:
              "Trek through breathtaking landscapes and spot Ethiopian wolves, Mountain Nyala, and rare bird species.",
          },
          {
            title: "Gonder",
            description:
              'Explore the medieval castles and churches, and witness the rich historical heritage of "the Camelot of Africa."',
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & a city tour",
          },
          {
            title: "Day 2",
            description: "Drive to Chebera Churchura National Park",
          },
          {
            title: "Day 3",
            description: "Explore Chebera Churchura, National Park",
          },
          {
            title: "Day 4",
            description: "Drive to Maze National Park",
          },
          {
            title: "Day 5",
            description: "Explore Maze National Park",
          },
          {
            title: "Day 6",
            description: "Drive to Awassa",
          },
          {
            title: "Day 7",
            description: "Drive to Bale Mountains National Park",
          },
          {
            title: "Day 8",
            description: "Excursion to Sanetti Plateau",
          },
          {
            title: "Day 9",
            description: "Drive to Robe & fly to Addis Ababa",
          },
          {
            title: "Day 10",
            description:
              "Fly to Gonder & drive to Simien Mountains National Park",
          },
          {
            title: "Day 11",
            description: "Explore Simien Mountains, National Park",
          },
          {
            title: "Day 12",
            description: "Drive to Gonder & sightseeing",
          },
          {
            title: "Day 13",
            description: "Fly to Addis Ababa & Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel for overnight accommodation.",
            "Relax at your hotel or begin your journey through ancient Ethiopia, one of the oldest inhabited places on earth, by exploring the cultural, historical, and modern facets of Addis Ababa. Addis Ababa, known as the 'new flower', was founded by Emperor Menelik II in 1886 and today functions as the diplomatic hub of Africa.",
            "Do some sightseeing in this city of contrasts where old colonial buildings, churches, and monuments stand side-by-side with dusty shacks and high-rise buildings. Attractions include the national and ethnological museums of Ethiopia, Trinity Cathedral, and Merkato, one of Africa's largest open-air markets.",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: ADDIS ABABA TO CHEBERA CHURCHURA NATIONAL PARK",
          description: [
            "After breakfast, we travel southwest to Chebera Churchura National Park in the highlands. Our drive takes us via the university town of Jimma, the capital of the former Kaffa Province, the birthplace of coffee, after which it is named.",
            "In the late afternoon, we arrive at Chebera Churchura National Park and embark on our first game drive. This beautiful, untouched wilderness area is home to elephants, buffalos, hippos, and other mammals, along with over 235 bird species.",
          ],
          image: images.chebera1,
        },
        {
          title: "DAY 3: CHEBERA CHURCHURA NATIONAL PARK",
          description: [
            "We spend the entire day exploring the untouched Chebera Churchura National Park today. Our exploration takes us through the various habitats of Chebera Churchura, from wooded grasslands to riverine forests.",
            "This is a relatively new national park declared in 2005 primarily to create a habitat for declining elephant populations. Today the park is known for its large elephant population, serving as a stronghold for Ethiopian elephants, as well as hosting impressive numbers of buffalos.",
            "Chebera Churchura is also home to lions, hyenas, hippos, leopards and other large mammals so keep your eyes peeled on our game drives. The park features numerous streams, rivers, and small lakes supporting healthy populations of animals and birds year-round.",
            "Endemic bird species include white-winged cliff chat, banded-barbet, wattled ibis, black-headed forest oriole, and thick-billed raven.",
          ],
          image: images.bale5,
        },
        {
          title: "DAY 4 & 5: CHEBERA CHURCHURA TO MAZE NATIONAL PARK",
          description: [
            "You start your day with an early morning game drive in Chebera Churchura Park - an ideal time to spot mammals and birds in the African bush. After our final game drive in the crowd-free Chebera Churchura, we head southeast to Maze National Park.",
            "Maze National Park is one of only three protected areas that still hosts good populations of the critically endangered Swayne's Hartebeest, endemic to Ethiopia. This 210 km² national park is home to about 39 mammal species and 196 bird species, encompassing savannah grasslands dotted with broad-leaved deciduous trees and riverine bush along the rivers.",
            "Other wild animals found in Maze include leopards, wild cats, baboons, monkeys, and various antelope species such as oribi, kudu, and waterbuck. You will have two days to explore this beautiful national park.",
          ],
          image: images.debrelibanos1,
        },
        {
          title: "DAY 6: DRIVE TO AWASSA",
          description: [
            "On this day we head out on a morning game drive in Maze National Park. After spotting Swayne's Hartebeest and other wildlife and birds in Maze Park, you will set off early and drive north towards the Great Rift Valley to Lake Awassa where you overnight. As you drive, you see a marked difference in the style of the houses and the surrounding habitat, with roadside birding offering the chance to see and photograph such bushland and acacia-loving many birds.",
            "Having lunch stop at Sodo town, you head to Awassa, a town situated beside the lake of the same name, where you will overnight.",
          ],
          image: images.hawassa1,
        },
        {
          title: "DAY 7: DRIVE TO BALE MOUNTAIN NATIONAL PARK",
          description: [
            "After breakfast, you may then visit the remarkable Lake Hawassa fish market. This large lake is particularly rich in fish, and the fishermen gut their catch and discard the waste around the market. This, in turn, attracts large numbers of grotesque Marabou Stork and other birds.",
            "After this, driving to Bale Mountain National Park, you head to the lake shore of Hawassa and visit the fish market. Then you drive to the remote Bale Mountains National Park of the Ethiopian Highlands. Home to Ethiopia's most abundant wildlife populations, this precious biodiversity hotspot is home to some of the rarest animals on earth.",
            "The Bale Mountains Park is a critical stronghold for Ethiopian wolves, the most endangered carnivores in Africa. Here, on the Sanetti Plateau, the rarest canids in the world, the wolves of Ethiopia, are often seen hunting. You make your way to the park headquarters in Dinsho and set off on foot from there. Your walk takes us in search of the rare and endemic species that make the Bale Mountains so special.",
            "Keep your eyes open for birds such as Chestnut-naped Francolin, ground scraper Thrush, the secretive Abyssinian Ground-thrush, Abyssinian Catbird, and the endemic White-backed Black-tit. We may also spot some mammals, including the Mountain Nyala, only found in the Bale Mountain massif, as well as Menelik’s bushbuck and warthog.",
          ],
          image: images.bale3,
        },
        {
          title: "DAY 8: EXCURSION TO SANETTI PLATEAU",
          description: [
            "Today is a day of great contrasts with amazing scenery and birding, making for excellent photographic opportunities. We will depart early and ascend the Bale massif onto the Sanetti Plateau, which is between 12,470 and 14,360 feet above sea level. This site is a bird refuge of immense importance, supporting seven globally threatened species and nearly all of Ethiopia’s Highland biome species.",
            "Keep an eye out for endemic birds such as the blue-winged goose, spot-breasted lapwing/plover, yellow-fronted parrot, Abyssinian long claw, Abyssinian catbird and black-headed siskin. The main target today is to see the plateau’s most celebrated resident, the Ethiopian Wolf, sometimes called the world’s rarest canid; watching these vibrantly colored animals exhibiting their hunting prowess while pouncing on giant molerats is surely among Africa’s greatest wildlife experiences.",
            "Midday we stop for a picnic overlooking scenic landscape. Head back to our lodge in the late afternoon.",
          ],
          image: images.bale4,
        },
        {
          title: "DAY 9: DRIVE TO ROBE & FLY TO ADDIS ABABA",
          description: [
            "After breakfast, you transfer by road (2 hrs.) to Robe airport to catch your flight back to Addis Ababa. Upon arrival in Addis, transfer you to your hotel.",
          ],
          image: images.bale5,
        },
        {
          title:
            "DAY 10: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning board a short flight to Gonder and upon arrival you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia.",
            "Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatise your body to the altitude.",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 11: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers. We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
          ],
          image: images.simien3,
        },
        {
          title: "DAY 12: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”.",
            "Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
          ],
          image: images.gonder5,
        },
        {
          title: "DAY 13: FLY TO ADDIS ABABA",
          description: [
            "After breakfast, you drive to Gonder airport and take the short flight back to Addis Ababa. Upon arrival in Addis, transfer you to your hotel. You have the afternoon free for shopping in Addis Ababa. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 7,
    title: "Wilderness Exploration",
    index: false,
    image: images.gambella1,
    description: "Untamed Adventures In Gambella National Park",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Wilderness Exploration",
        subtitle: "Untamed Adventures In Gambella National Park",
        description: [
          "Step into the unknown on a thrilling 6-day expedition into the heart of Ethiopia's remote and wild Gambella National Park. This itinerary is designed for wildlife enthusiasts seeking extraordinary encounters with diverse and elusive species. From the bustling city of Addis Ababa to the untouched wilderness of Gambella, this journey promises an immersive experience in Ethiopia's exceptional biodiversity.",
          "From the moment you arrive in Addis Ababa, you'll be immersed in the warmth of Ethiopian hospitality. Charter flights will transport you to the remote reaches of Gambella, where you'll be greeted by the camp team. Explore the park's swamp lands, home to iconic species like the Shoebill and Nile lechwe, and witness the incredible Kob migration. Visit Nuer cattle camps, gaining insight into the unique culture of this pastoral community. ",
          "Game drives will take you through diverse habitats, in search of magnificent elephants, giraffes, lions, and an array of bird species. Return to Addis Ababa with memories of an unforgettable wilderness adventure in Ethiopia.",
        ],
        lr: true,
        img1: images.simien2,
        img2: images.bale3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Discover the vibrant capital city and its cultural treasures.",
          },
          {
            title: "Gambella National Park",
            description:
              "Experience the untouched wilderness and observe the Kob migration, Shoebills, Nile lechwe, buffalo, lion, elephant, and giraffe.",
          },
          {
            title: "Nuer Cattle Camps",
            description:
              "Visit the traditional camps and witness the unique way of life of the Nuer people.",
          },
          {
            title: "Rich Birdlife",
            description:
              "Encounter a multitude of bird species in the park's lakes and pans.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & city tour.",
          },
          {
            title: "Day 2",
            description: "Transfer to Gambella National Park & evening walk.",
          },
          {
            title: "Day 3",
            description: "Game drive along the swamp lands & evening walk.",
          },
          {
            title: "Day 4",
            description: "Visit Nuer cattle camps & overnight in a fly camp.",
          },
          {
            title: "Day 5",
            description:
              "Game drive to the drier South West & evening walk/drive.",
          },
          {
            title: "Day 6",
            description: "Fly back to Addis Ababa & departure.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport, and then transfer you to your hotel for overnight accommodation.",
            "The city enjoys an excellent climate all year round, with an average temperature of 25°C (77°F). With a multiethnic population of over 5 million, Addis Ababa is a pleasant city with wide avenues of jacaranda trees, interesting museums and one of the largest open air markets in Africa, known as the “Mercato”. After your long flight and a welcome briefing, you can settle into your hotel for some rest.",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: GAMBELLA NATIONAL PARK",
          description: [
            "Transfer to the airport for a charter flight west to the Gambella National Park, arguably the most remote wilderness in Ethiopia. Met by the camp team upon landing, you will be transferred to the Tented Camp. Evening walk in the vicinity of the tented camp.",
            "The Tented Camp is situated in a grove of trees close to the pan handle of the park which joins the Baro River. It is an ideal location from which to explore the Northern boundary of the Park, which tends to get most of the Kob Migration.",
          ],
          image: images.gambella1,
        },
        {
          title: "DAY 3: GAMBELLA NATIONAL PARK",
          description: [
            "Game drive along the swamp lands of Gambella, looking for Shoebills, Nile lechwe as well as big herds of buffalo and lion. Depending on the time of year, witness incredible numbers of Kob on the edge of the Park. Evening walk in the vicinity of the camp.",
          ],
          image: images.gambella2,
        },
        {
          title: "DAY 4: GAMBELLA NATIONAL PARK",
          description: [
            "Drive down (2 hours) to the plains in the North West corner of the Park to see big herds of Kob and visit Nuer cattle camps. Overnight in fly camp on the river or flooded oxbow with a multitude of birds.",
          ],
          image: images.gambella3,
        },
        {
          title: "DAY 5: GAMBELLA NATIONAL PARK",
          description: [
            "Game drive to the drier South West of the Park and look for elephants and giraffes. The lakes and pans down here have the most incredible birdlife. Evening walk/drive in the vicinity of the camp.",
          ],
          image: images.bale3,
        },
        {
          title: "DAY 6: FLY BACK TO ADDIS ABABA",
          description: [
            "Transfer to the airport for a charter flight to the capital city. Upon arrival transfer you to your hotel. You have the afternoon free for shopping in Addis Ababa.",
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 7,
    title: "Ethiopian Wildlife Odyssey",
    index: false,
    image: images.alehdege1,
    description: "Exploring The Untamed Gems",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Wildlife Odyssey",
        subtitle: "Exploring The Untamed Gems",
        description: [
          "Embark on a thrilling adventure into the heart of Ethiopia's untamed wilderness and ancient cities. From the moment you arrive in Addis Ababa, you'll be captivated by the city's vibrant culture. Drive to Awash National Park, where the majestic Awash Falls and diverse wildlife await. Capture striking images of Olive Baboons, Salt's Dikdik, and Beisa Oryx against the backdrop of the park's scenic landscapes.",
          'Journey to Harar, a city steeped in history and known for its unique relationship with Spotted Hyaenas. Witness the unforgettable feeding rituals conducted by the enigmatic "Hyaena Men" and have the opportunity to feed the hyenas yourself. Explore the ancient medina of Harar and its bustling markets, immersing yourself in the city\'s rich heritage.',
          "Continue your wildlife odyssey in the Aledeghi Wildlife Reserve, photographing the iconic Somali Ostrich, Arabian Bustard, and other fascinating species. Along the way, encounter the nomadic Afar and Harari communities, capturing their vibrant traditions and unique way of life. Conclude your journey with a visit to Babile and Dire Dawa before returning to Addis Ababa, where memories of a remarkable Ethiopian wildlife odyssey will stay with you forever.",
        ],
        lr: true,
        img1: images.simien3,
        img2: images.bale4,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Awash National Park",
            description:
              "Discover the diverse wildlife of the park, including Olive Baboons, Salt's Dikdik, Beisa Oryx, and an array of bird species.",
          },
          {
            title: "Harar",
            description:
              'Immerse yourself in the ancient medina and witness the captivating feeding rituals of Spotted Hyaenas, accompanied by the local "Hyaena Men."',
          },
          {
            title: "Aledeghi Wildlife Reserve",
            description:
              "Search for Somali Ostrich, Arabian Bustard, Soemmering's Gazelle, and other fascinating species amidst the arid plains.",
          },
          {
            title: "Cultural Encounters",
            description:
              "Engage with the nomadic Afar and Harari communities, learning about their traditional way of life and capturing their vibrant attire and adornments.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & a city tour",
          },
          {
            title: "Day 2",
            description:
              "Drive to Awash National Park & explore the surroundings",
          },
          {
            title: "Day 3",
            description: "Morning exploration of Awash National Park",
          },
          {
            title: "Day 4",
            description: "Visit Bilen area & continue exploration of Awash",
          },
          {
            title: "Day 5",
            description:
              "Drive to Aledeghi Wildlife Reserve & wildlife photography",
          },
          {
            title: "Day 6",
            description:
              "Drive to Harar & evening encounter with Spotted Hyaenas",
          },
          {
            title: "Day 7",
            description:
              "Explore Harar's ancient medina & photographic session with Yellow-billed Kites",
          },
          {
            title: "Day 8",
            description: "Excursion to Babile",
          },
          {
            title: "Day 9",
            description: "Drive to Dire Dawa & Fly to Addis Ababa & Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel for overnight accommodation. The city enjoys an excellent climate all year round, with an average temperature of 25°C (77°F). ",
            "With a multiethnic population of over 5 million, Addis Ababa is a pleasant city with wide avenues of jacaranda trees, interesting museums, and one of the largest open-air markets in Africa, known as the “Mercato”. After your long flight and a welcome briefing, you can settle into your hotel for some rest.",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: DRIVE TO AWASH NATIONAL PARK",
          description: [
            "We will leave Addis Ababa behind and head eastwards, leaving the fertile highlands behind and traveling through an increasingly arid country until we reach Awash National Park, where we will stay overnight at a comfortable lodge at Kuriftu.",
            "The spectacular falls are right beside the lodge and are a great place to practice the pleasing effect of slow shutter speeds as the light dims. Large Nile Crocodiles are a feature here and can be photographed on the river banks and partly-submerged rocks, displaying those awesome arrays of teeth. This afternoon will have our first opportunity to explore further afield.",
          ],
          image: images.awash1,
        },
        {
          title: "DAY 3: EXPLORE AWASH NATIONAL PARK",
          description: [
            "We will spend the morning at Awash National Park. The terrain is mostly a mosaic of grassland and acacia scrub, but the Awash River flows through the area and supports some thin strips of riverine forest in places. A distinct advantage of Awash (and indeed all national parks we visit in Ethiopia) compared to many other African parks is that one is allowed to get out of the vehicles and photograph on foot owing to the virtual absence of dangerous mammals.",
            "Awash holds some interesting mammals, including Olive Baboon, the delightful little Salt’s Dikdik, and the handsome Beisa Oryx. With a bit of luck, we will also encounter Northern Lesser Kudu.",
            "Birdlife is rich and varied (over 400 species have been recorded from Awash) and among the most appealing photographic targets are the huge Lappet-faced Vulture, Tawny Eagle, Pallid and Montagu’s Harriers, Pygmy and Lanner Falcons, Kori, Buff-crested and White-bellied Bustards, Black-headed Lapwing, Chestnut-bellied Sandgrouse, Blue-naped Mousebird, the superb Abyssinian Roller, the wonderful Northern Carmine Bee-eater (which sometimes uses the backs of Kori Bustards or even Somali Ostriches as a convenient lookout!), Northern Red-billed and Eastern Yellow-billed Hornbills, and the lovely Rosy-patched Bushshrike (pairs often duet together).",
            "This afternoon we will penetrate further into the Awash region, to the Bilen area for a two night stay. This interesting area is inhabited by Afar people who were formerly nomadic herders but now live a more settled existence, although they continue to use the long, rounded thatched dwellings that they used while moving from one area of pasture to another.",
            "Late this afternoon we will start our exploration of the Bilen area.",
          ],
          image: images.awash2,
        },
        {
          title: "DAY 4: EXPLORE AWASH NATIONAL PARK",
          description: [
            "The dry plains of this part of the Awash River region hold the near-endemic Sacred (or Hamadryas) Baboon, as well as Soemmering’s Gazelle, Beisa Oryx, and the long-necked Northern Gerenuk.",
            "Interestingly, the Golden Jackals of Africa have recently been split off as a distinct species, African Golden Wolf, on the basis that their genetics place them closer to wolves and coyotes. There is a good chance of photographing this newly ‘promoted’ wolf in this area.",
            "The open grasslands and acacia bushlands here are a stronghold of the stately, but declining Arabian Bustard, while other great birds to photograph include such restricted-range specialties as the huge Somali Ostrich, Hartlaub’s Bustard, and Somali Fiscal.",
            "If we are in luck we will come across an Arabian Bustard with one or more Northern Carmine Bee-eaters riding on its back! This truly extraordinary photographic highlight is dependent on how many bee-eaters are around. They use the bustards as convenient ‘lookout posts’ from which to hawk large flying insects. Somewhat surprisingly, the bustards seem to tolerate these colorful ‘hitch-hikers’.",
          ],
          image: images.bale4,
        },
        {
          title: "DAY 5: DRIVE TO ALEDEGHI WILDLIFE RESERVE",
          description: [
            "Today you depart Awash National Park early and head further north to Aledeghi Plains. Here you will search for Somali Ostrich, Martial and Short-toed Snake Eagles, Yellow-necked Spurfowl, the rare Arabian Bustard (perhaps the best location on earth for this species), Black-headed Lapwing, Chestnut-bellied Sandgrouse, and Chestnut-backed Sparrow-Lark. Occasionally highly nomadic species such as Pale Rock Finch or Black-crowned Sparrow-Lark move into the area as well. Depending on conditions, you may also see a number of mammals such as the Golden Jackal, Beisa Oryx, Grevy’s Zebra, and Soemmering’s Gazelle.",
            "This land is inhabited by nomadic Afar tribesmen whom you will see dressed in their fine white cotton tunics, bedecked with traditional jewelry, daggers, and spears. The men sport a unique bushy hairstyle, while women and girls are also extravagantly attired and adorned. They adhere strictly to their ancestral ways of tending their camel and goat herds and roaming throughout this inhospitable land.",
            "As the day begins to heat up, you shall leave the Aledeghi Plains behind and head to our lodge. This increasingly arid landscape is a haven for dry country residents and migrant species. Watercourses and rocky outcrops harbor Eurasian Sparrowhawk, African Collared and European Turtle Doves, the range-restricted Yellow-breasted Barbet, Chestnut-headed Sparrow-Lark, Common Nightingale, Blue Rock Thrush, Rufous-tailed and Black Scrub Robins, Boran Cisticola, skulking Upcher’s and Menetries’s Warblers, groups of Red-fronted Warbler, Ruppell’s Starling, Black-crowned Tchagra, Southern Grey Shrike, Red-billed Buffalo weaver, and Chestnut-crowned and White-browed Sparrow-weavers. There is also the option to avail of the numerous hot springs around which the lodge was built. This evening, an optional night walk may reveal Greyish Eagle-Owl or Slender-tailed Nightjar.",
          ],
          image: images.alehdege1,
        },
        {
          title: "DAY 6: DRIVE TO HARAR",
          description: [
            "We will spend the early morning in the Bilen area before setting out for the Chercher Mountains and the city of Harar, where we will spend two nights. We will arrive in the afternoon in time to prepare for our first session this evening with the ‘Hyena Men’.",
            "Harar is an ancient city, known simply as Gey (‘the city’) to its inhabitants. The date of its foundation is unknown, but it was already important by the 13th century and later became the capital of the Adal Sultanate and its successor state, the Emirate of Harar, in the 16th century.",
            "Quite how the Hararis started feeding Spotted Hyenas is lost in legend, but it does seem they were tolerated and indeed encouraged in the city as nocturnal scavengers as far back as the 16th century, as low doorways were built at that time in the city walls to accommodate them! The various legends about feeding include stories that they were publicly fed porridge so that they could act as impromptu soothsayers through their style of eating it, or that they were fed to discourage them from eating livestock or even people during droughts, or even that Muslim saints communicated with their clan leaders and persuaded them not to do harm in return for handouts.",
            "In any event, it seems the feeding had long since stopped before it was revived in the 1950s or 1960s, perhaps through nothing more than chance encounters with hyenas and the inclination to see if they would accept food. Since then it has become a nightly event at Harar, with two senior ‘Hyena Men’, Mulugeta Wolde-Mariam and Yusuf Mume Saleh, and their assistants, operating at two different sites outside the walls.",
            "Spotted Hyenas have a fearsome reputation, only partly because of their manner and appearance, but also because of their ruthless hunting style in the wild, so seeing them come close to humans and take meat from small sticks held in what seems a tiny hand, next to their huge muzzles, or even a human mouth, seems pretty awesome to the rest of us! Not only do the hyenas take food but they ‘lovingly’ rest their huge paws on the Hyena Man’s back or head and generally behave like large friendly dogs!",
            "As well as being able to take photographs, at close range, of the Hyena Men and their nightly ‘guests’ from the surrounding forests (where the hyenas live a perfectly normal life for 23 hours a day), we will also be able to get great shots of them lurking in the background, resting before they feed or prowling in sinister fashion. If you are so inclined you can get down low for better angles (so far they have never eaten anyone!) and if you are really brave you will get the chance to feed them yourself.",
            "Needless to say, the whole experience is utterly unforgettable and a wildlife photography encounter that is completely unique.",
          ],
          image: images.harar1,
        },
        {
          title: "DAY 7: HARAR",
          description: [
            "This morning there will be time to explore the ancient medina of Harar and its surrounding fortifications, known as the Jugal (or Jugol). The walled old city dates back to around the 16th century and is a fascinating warren of small alleyways, markets, mosques, and ancient buildings. Harar is widely considered to be the 4th holiest city in Islam, after Mecca, Medina, and Jerusalem, but today it is famed for its tolerance of other faiths, and Harar beer, brewed naturally enough by Christians, is widely available. It is said that there are 99 mosques in Harar, chiming with the 99 known names of Allah, but in reality, there are ‘only’ 86. Harar is a wonderful place for photography, especially if you get out early while the light is at its best.",
            "We will also enjoy a photographic session with the ‘Kite Man’ of Harar. Feeding the Yellow-billed Kites is a recent development, not some ancient tradition, but it is fun to watch and photograph the kites swooping down and often squabbling in mid-air over small pieces of meat from the ‘Kite Man’s’ hands.",
            "During the late afternoon, we will try and find some of the Spotted Hyenas lurking in the dry woodland near the town prior to gathering for the evening feast. It will be good to have some daytime shots to balance the nocturnal spectacle. After dark, we will, of course, return for a second session outside the town walls with the ‘Hyena Men’, something none of us will ever forget!",
          ],
          image: images.erbore1,
        },
        {
          title: "DAY 8: EXCURSION TO BABILE",
          description: [
            "An early morning start will take you to Babile National Park. It is a vast and breathtaking reserve southeast of Harar. Spanning nearly 7,000 square kilometers, this sanctuary boasts magnificent gorges, open plains, rocky formations, and winding riverbeds. Journey through its diverse landscapes, from lush plains to the captivating desert-like terrain in the south and east.",
            "At Babile, you'll encounter a unique population of elephants, believed to be the most northeastern in Africa. These incredible creatures belong to a distinct subspecies called Loxodonta africana orleansi, found exclusively in the Horn of Africa. The park also shelters the elusive black-maned Abyssinian lion, swift cheetahs resembling graceful greyhounds, and a variety of antelope species including greater and lesser kudu. Keep an eye out for the charismatic Hamadryas baboon and an array of captivating dry-country birds, such as the endemic Salvadori's serin.",
            "With approximately 200 elephants residing in Babile, they migrate between the Erer and Gobelle river valleys, occasionally venturing beyond the sanctuary to the western ridge of the Gobelle Valley. For the best wildlife sightings, plan your visit during the late rainy season from June to September when the elephants gather in the Upper Erer Valley, just 40 kilometers away from Harar. In the afternoon drive back to Harar overnight.",
          ],
          image: images.bale3,
        },
        {
          title: "DAY 9: DRIVE TO DIRE DAWA & FLY TO ADDIS ABABA",
          description: [
            "After breakfast, you drive to Dire Dawa airport and take the short flight back to Addis Ababa. Upon arrival in Addis, transfer you to your hotel. You have the afternoon free for shopping in Addis Ababa. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 7,
    title: "Ethiopian Wildlife Expedition",
    index: false,
    image: images.bale1,
    description: "From The Plains To The Mountains",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Wildlife Expedition",
        subtitle: "From The Plains To The Mountains",
        description: [
          "Embark on an unforgettable wildlife expedition through the captivating landscapes of Ethiopia. This 9-day journey will take you from the bustling city of Addis Ababa to the remote wilderness of Kafta-Shiraro National Park and the breathtaking Simien Mountains.",
          "Immerse yourself in the rich biodiversity of Ethiopia as you encounter endemic bird species, majestic mammals, and stunning alpine vistas. Explore the medieval castles of Gondar, witness the unique feeding rituals of the Demoiselle Crane, and marvel at the endangered Ethiopian wolf in its natural habitat. Join us on this thrilling adventure designed for wildlife enthusiasts and nature photographers seeking a truly immersive experience.",
        ],
        lr: true,
        img1: images.bale2,
        img2: images.bale3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Kafta-Shiraro National Park",
            description:
              "Encounter the breathtaking Demoiselle Crane migration, spot elusive bird species like the White-headed Babbler, and capture images of the stunning Sahel Paradise Whydah.",
          },
          {
            title: "Simien Mountains National Park",
            description:
              "Trek through the UNESCO World Heritage Site, search for the endemic Walia ibex and Ethiopian wolf, and observe the fascinating behavior of geladas in the company of field researchers.",
          },
          {
            title: "Gondar",
            description:
              'Explore the medieval castles and churches of Gondar, known as the "Camelot of Africa," and visit the historic Royal Enclosure and the magnificent Church of Debre Berhan Selassie.',
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & city tour",
          },
          {
            title: "Day 2",
            description: "Flight to Humera & afternoon birding",
          },
          {
            title: "Day 3",
            description: "Explore Kafta-Shiraro National Park and surroundings",
          },
          {
            title: "Day 4",
            description: "Continued exploration of Kafta-Shiraro National Park",
          },
          {
            title: "Day 5",
            description: "Fly back to Addis Ababa & free time for shopping",
          },
          {
            title: "Day 6",
            description:
              "Fly to Gonder & drive to Simien Mountains National Park",
          },
          {
            title: "Day 7",
            description:
              "Explore the Simien Mountains & observe endemic species",
          },
          {
            title: "Day 8",
            description: "Drive to Gondar & sightseeing in the historic city",
          },
          {
            title: "Day 9",
            description: "Fly back to Addis Ababa & departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport, and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees. Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: ADDIS ABABA TO HUMERA",
          description: [
            "You depart on a domestic flight to Humera. On arrival, we will transfer to our camp in Kafta Shiraro. Here you will spend three nights exploring the hidden gems of the national park. Overnight camping at Kafta Shiraro National Park",
          ],
          image: images.kafta1,
        },
        {
          title:
            "DAY 3 & 4: EXPLORING KAFTA-SHIRARO NATIONAL PARK AND SURROUNDS",
          description: [
            "Today you will explore this remote and seldom-visited park and surrounding area. It is situated in the Sahelian zone and thus offers an interesting selection of dry country species. The habitat consists of dry acacia bush veiled in a slightly hilly area and follows the tranquil Tekezze River. You will concentrate your efforts on finding the beautiful Demoiselle Crane which makes a stopover here on its migration from Sudan to India. Up to 3,800 cranes have been seen in this area and the sight and sound of them bugling at dusk is a spectacle indeed!",
            "Other key targets include a Sudan/Ethiopia endemic; White-headed Babbler, the amazing Egyptian Plover (a monotypic family), the impressive Sahel Paradise Whydah, and Sudan Golden Sparrow. Other species of interest that are not generally seen on a standard Ethiopian tour include Vieillot’s Barbet, Black-billed Wood Dove, Rose-ringed Parakeet, Green Bee-eater, Red-pate Cisticola, Black-headed Gonolek, Northern Grey-headed Sparrow, Black-rumped Waxbill, Chestnut-bellied Starling, Yellow-billed Oxpecker, White-rumped Seedeater and Golden-breasted Bunting.",
            "If we are fortunate we may find a roosting Long-tailed Nightjar. Other more widespread species we may see include Black Stork, Short-toed Snake Eagle, Booted Eagle, Senegal Thick-knee, Black-headed Lapwing, Lichtenstein’s and Four-banded Sandgrouse, European Turtle Dove, Abyssinian Roller, Northern Carmine Bee-eater, Black-billed Wood Hoopoe, Black Scimitarbill, Yellow-breasted Barbet, Masked Shrike, Black and Rufous-tailed Scrub Robin, Black-eared Wheatear and Crimson-rumped Waxbill. Overnight camping in Kafta Shiraro Park",
          ],
          image: images.bale4,
        },
        {
          title: "DAY 5: DRIVE TO GONDER",
          description: [
            "An early morning start will take you a full-day drive to Gonder. You will have the most scenic drive. In the late afternoon, you will arrive in Gonder. Overnight in Gonder",
          ],
          image: images.gonder2,
        },
        {
          title: "DAY 6: DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatise your body to the altitude. Overnight in Simiens.",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 7: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers. We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer. Overnight in Simiens.",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 8: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar.",
            "In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.  We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant. Overnight in Gonder.",
          ],
          image: images.gonder3,
        },
        {
          title: "DAY 9: FLY TO ADDIS ABABA & DEPARTURE",
          description: [
            "This morning, you drive to Gonder Airport, where you catch your flight to Addis. On arrival in Addis you transfer to a hotel where you can freshen up and have lunch. You have the afternoon free for shopping in Addis Ababa. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 1,
    experience: 8,
    title: "Discovering Addis Ababa",
    index: false,
    image: images.addis1,
    description: "Immersive Cultural Exploration In The Capital",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Discovering Addis Ababa",
        subtitle: "Immersive Cultural Exploration In The Capital",
        description: [
          "Welcome to Addis Ababa, the vibrant capital of Ethiopia, where history, culture, and bustling markets come alive. Designed specifically for busy business travelers with limited time, our full-day city tour offers a comprehensive glimpse into the rich heritage and dynamic atmosphere of Addis Ababa.",
          "Prepare to be captivated as you delve into the city's fascinating landmarks, visit historic churches, explore renowned museums, and immerse yourself in the vibrant local markets.",
        ],
        lr: true,
        img1: images.addis2,
        img2: images.addis3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Mount Entoto",
            description:
              "Marvel at the panoramic view of the city and its surrounding countryside, while relishing the cool breeze and the scent of Eucalyptus trees that line the road.",
          },
          {
            title: "Historic Churches",
            description:
              "Visit the iconic churches of Mariam and Raguel, each with its unique architectural style and historical significance.",
          },
          {
            title: "National Archaeological Museum",
            description:
              "From the ancient bones of Lucy, a pivotal fossil discovery, to exhibits spanning different historical periods, gain insights into the country's fascinating past and royal legacies.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "Pick up from your hotel",
          description: [
            "Pick up from your hotel and drive north up to Mount Entoto. Addis Ababa at between 2300 – 2500 meters is the third highest capital in the world and Entoto is a few hundred meters higher – as we drive up the hill there is a considerable drop in temperature and the air is filled with the scent of the Eucalyptus trees which line the road.",
            "From the top, there is a panoramic view of the capital and surrounding countryside. Entoto is an important watershed, to the north water flows to the Blue Nile, to the south to the Awash River. After enjoying the view point you head to the churches of Mariam.",
            "It was in the church of Mariam that Menelik was crowned Emperor of Ethiopia in 1889, and in the small museum in the compound there are various clothes, court and household implements and weapons dating from the period. You will visit the church museum and the Old Imperial Palace.",
            "Drive then to the church of Raguel which is unique in that it is octagonal, rather than round. There is a first story balustrade around. The walls of the church are completely covered with remarkable 19th–century mural painting.",
          ],
          image: images.addis4,
        },
        {
          title: "To National Archaeological Museum",
          description: [
            "Leaving the churches you descend and stop off at the National Archaeological Museum. Here visitors can see exhibits ranging from the 3.5 million-year-old bones of Lucy, through the Axumite and Gondarian periods to the monarchs Tewodros and Menelik.",
            "This completes the half day tour and visitors will be taken back to their hotels.",
          ],
          image: images.addis2,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 8,
    title: "Discovering Addis Ababa",
    index: false,
    image: images.addis2,
    description: "Immersive Cultural Exploration In The Capital",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Discovering Addis Ababa",
        subtitle: "Immersive Cultural Exploration In The Capital",
        description: [
          "Welcome to Addis Ababa, the vibrant capital of Ethiopia, where history, culture, and bustling markets come alive. Designed specifically for busy business travelers with limited time, our full-day city tour offers a comprehensive glimpse into the rich heritage and dynamic atmosphere of Addis Ababa.",
          "Prepare to be captivated as you delve into the city's fascinating landmarks, visit historic churches, explore renowned museums, and immerse yourself in the vibrant local markets.",
        ],
        lr: true,
        img1: images.addis2,
        img2: images.addis3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Mount Entoto",
            description:
              "Marvel at the panoramic view of the city and its surrounding countryside, while relishing the cool breeze and the scent of Eucalyptus trees that line the road.",
          },
          {
            title: "Historic Churches",
            description:
              "Visit the iconic churches of Mariam and Raguel, each with its unique architectural style and historical significance.",
          },
          {
            title: "National Archaeological Museum",
            description:
              "From the ancient bones of Lucy, a pivotal fossil discovery, to exhibits spanning different historical periods, gain insights into the country's fascinating past and royal legacies.",
          },
          {
            title: "Institute of Ethiopian Studies",
            description:
              "Delve deeper into Ethiopia's diverse cultural tapestry at the Institute of Ethiopian Studies.",
          },
          {
            title: "Mausoleum of Menelik",
            description:
              "Gain a deeper understanding of Ethiopia's royal lineage and the significant role these leaders played in shaping the nation's history.",
          },
          {
            title: "Mercato Market",
            description:
              "Immerse yourself in the vibrant energy of the Mercato, the largest market in Africa.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "Pick up from your hotel",
          description: [
            "Pick up from your hotel and drive north up to Mount Entoto. Addis Ababa at between 2300 – 2500 meters is the third highest capital in the world and Entoto is a few hundred meters higher – as we drive up the hill there is a considerable drop in temperature and the air is filled with the scent of the Eucalyptus trees which line the road.",
            "From the top, there is a panoramic view of the capital and surrounding countryside. Entoto is an important watershed, to the north water flows to the Blue Nile, to the south to the Awash River. After enjoying the view point you head to the churches of Mariam.",
            "It was in the church of Mariam that Menelik was crowned Emperor of Ethiopia in 1889, and in the small museum in the compound there are various clothes, court and household implements and weapons dating from the period. You will visit the church museum and the Old Imperial Palace.",
            "Drive then to the church of Raguel which is unique in that it is octagonal, rather than round. There is a first story balustrade around. The walls of the church are completely covered with remarkable 19th–century mural painting.",
          ],
          image: images.addis1,
        },
        {
          title: "To National Archaeological Museum",
          description: [
            "Leaving the churches you descend and stop off at the National Archaeological Museum. Here visitors can see exhibits ranging from the 3.5 million-year-old bones of Lucy, through the Axumite and Gondarian periods to the monarchs Tewodros and Menelik.",
          ],
          image: images.addis2,
        },
        {
          title: "Lunch break",
          description: [
            "Pick up from your hotel and drive north up to Mount Entoto. Addis Ababa at between 2300 – 2500 meters is the third highest capital in the world and Entoto is a few hundred meters higher – as we drive up the hill there is a considerable drop in temperature and the air is filled with the scent of the Eucalyptus trees which line the road.",
          ],
          image: images.addis4,
        },
        {
          title:
            "Instiute of Ethiopian Studies, Mausoleum of Menelik and Ba’ata Church",
          description: [
            "After lunch you resume your tour with a visit to the Institute of Ethiopian Studies, where you can see clothing from different regions, along with artifacts, household utensils and in a separate section, paintings reflecting the history and culture of the country. This building was once the Palace of Emperor Haile Selassie, and visitors can see his bedroom and bathroom.",
            "After seeing that, you head to Bata Mariam and visit Menelik’s mausoleum, where Empress Taitu and Queen Zewditu are also buried.",
          ],
          image: images.addis2,
        },
        {
          title: "Mercato Market and Farewell Dinner",
          description: [
            "You then move to the Mercato, the largest market area in Africa, where virtually every possible commodity is on sale, from livestock to computers. For the visitor good at bargaining, there is a huge selection of Ethiopian arts and crafts.",
            "You now return to your hotel. Tonight you will take your dinner in a national food restaurant, and see dancing from Ethiopia’s different regions.",
          ],
          image: images.addis3,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 8,
    title: "Sacred Serenity",
    index: false,
    image: images.addis2,
    description: "A Day Trip To Debre Libanos And The Jemma River Gorge",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Sacred Serenity",
        subtitle: "A Day Trip To Debre Libanos And The Jemma River Gorge",
        description: [
          "For the discerning business traveler seeking a glimpse into the country's rich cultural heritage and breathtaking landscapes, we present an unforgettable day trip to Debre Libanos and the Jemma River Gorge.",
          "This curated itinerary seamlessly combines history, spirituality, and a touch of avian marvels, providing a rejuvenating escape within a limited timeframe.",
        ],
        lr: true,
        img1: images.simien4,
        img2: images.debrelibanos1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Debre Libanos Monastery",
            description:
              "Begin your journey by immersing yourself in the spiritual ambiance of Debre Libanos, a revered monastic center for Ethiopian Orthodox Christianity. Visit the monastery, founded by Saint Tekle Haimanot, and witness the small cave where the mystic is said to have stood for seven years, symbolizing his unwavering devotion.",
          },
          {
            title: "Historical Significance",
            description:
              "Delve into Ethiopia's past as you learn about the tragic events that unfolded during the Italian invasion. Discover the remains of the 300 monks who were mercilessly slaughtered in 1936, igniting the flames of resistance and underscoring the indomitable spirit of the Ethiopian people.",
          },
          {
            title: "Scenic Drive",
            description:
              "Enjoy a picturesque journey through the Sululta Plain, where the fertile landscapes provide a haven for diverse bird species. Look out for Black-winged plovers, Wattled Ibis, Blue-winged geese, Common Cranes, and Wheat ears, offering a delightful interlude of birdwatching.",
          },
          {
            title: "Jemma River Gorge",
            description:
              "Marvel at the breathtaking view of the Jemma River Gorge, a majestic tributary of the Blue Nile. Experience the awe-inspiring drop of nearly 1000 meters to the valley below, surrounded by nature's grandeur. Prepare to witness a tapestry of avian wonders that call this pristine habitat home.",
          },
          {
            title: "Avian Delights",
            description:
              "As you explore the gorge and its surrounding forest, keep an eye out for an array of bird species. Encounter the colorful Banded Barbet, the melodious Black-headed Forest Oriole, the striking White-billed Starling, the vibrant Red-billed Starling, and the charismatic White-winged Cliff Chat, among others. Experience the joy of spotting Ethiopia's endemic Gelada baboon, a fascinating mammal that adds to the region's biodiversity.",
          },
          {
            title: "Cultural Insights",
            description:
              "Immerse yourself in the local traditions and customs as you engage with the monastery's inhabitants. Gain a deeper understanding of Ethiopia's religious heritage and the profound role it plays in shaping the country's identity.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "Pick up from your hotel",
          description: [
            "Early morning pick up from the hotel and you then head north on the Gojjam road to Debre Libanos, about 110 km from Addis Ababa or approximately two hours drive.",
            "Debre Libanos is an important monastic center for Ethiopian Orthodox Christianity, the monastery there was founded by the renowned 13th-century mystic, Saint Tekle  Haimanot and there is a small cave near the church where he is said to have stood for seven years on one leg, until the other wasted away and dropped off.",
            "On this tour, it is possible to combine history, culture, and some good bird watching. As we pass through the Sululta Plain you can see Black-winged plovers, Wattled Ibis, Blue-winged geese, Common Cranes, and Wheat ears.",
          ],
          image: images.addis1,
        },
        {
          title: "Arrive at Debre Libanos",
          description: [
            "On arrival at Debre Libanos, we will first stop at the church. After the church and museum visit, you can make the climb to the cave of St. Tekle  Haimanot. Near the cave, monks may show you the remains of some 300 monks, slaughtered in 1936 by the Italian invaders.",
            "Mussolini and the fascist authorities saw the Ethiopian Orthodox Church as one of the key elements of an independent Ethiopian identity and thought that by carrying out the massacre they would consolidate their presence. Rather, this atrocity fed the flames of resistance.",
          ],
          image: images.debrelibanos1,
        },
        {
          title: "Jemma River Gorge and the Gelada Baboon",
          description: [
            "Then you continue on to the marvelous view of the Jemma River Gorge. The Jemma River is one of the tributaries of the Blue Nile, and there is a drop of nearly 1000 meters to the valley below.",
            "Here at the gorge (and in the forest around the church) you can expect to see the Banded Barbet, the Black-headed Forest Oriole, the White-billed Starling, the Red-billed Starling, the White-winged Cliff Chat, the White-backed Black Tit, the White-cheeked Turaco and Hemprich’s Hornbill. You will also see one of Ethiopia’s endemic mammals, the Gelada baboon.",
          ],
          image: images.simien3,
        },
        {
          title: "Return to your hotel",
          description: [
            "At some stage, you will take a picnic lunch with a beautiful view of the Gorge. You will leave Debre Libanos around 4.30 PM, returning to Addis Ababa early evening.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 8,
    title: "Heritage And Serenity",
    index: false,
    image: images.gonder5,
    description: "A Day Trip To Debre Berhan And Ankober",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Heritage And Serenity",
        subtitle: "A Day Trip To Debre Berhan And Ankober",
        description: [
          "Ethiopia is a land where history unfolds at every turn, and natural beauty beckons with its tranquil allure. For the busy business traveler seeking a taste of Ethiopia's rich heritage and a serene escape from the city, we present an extraordinary day trip to Debre Berhan and Ankober.",
          "This curated itinerary combines historical exploration, cultural immersion, and breathtaking landscapes to create a memorable experience within a short timeframe.",
        ],
        lr: true,
        img1: images.bahirdar5,
        img2: images.gonder5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Debre Berhan",
            description:
              "Begin your journey by visiting the historic town of Debre Berhan, once a capital of great emperors and an important center under the Shoa kings. Explore the restored church of Selassie and immerse yourself in the fascinating stories of Ethiopian royalty.",
          },
          {
            title: "Cultural Souvenirs",
            description:
              "Indulge in local craftsmanship as you browse through the market stalls, where you can find traditional woolen hats worn by shepherd boys and carpets adorned with characteristic designs of the region. Take home unique mementos of your Ethiopian adventure.",
          },
          {
            title: "Ankober",
            description:
              "Venture eastward to Ankober, another former imperial capital that stood as a gateway between the eastern lowlands and the Showan plateau. Discover the remnants of the old palace, witness the enduring churches of Mariam and Medhane Alem, and delve into the rich history that shaped the region.",
          },
          {
            title: "Authentic Ethiopian Lunch",
            description:
              "Savor a delectable lunch amidst the captivating scenery of Ankober. Delight in the flavors of Ethiopian cuisine while surrounded by breathtaking vistas, experiencing the true essence of local hospitality.",
          },
          {
            title: "Avian Wonders",
            description:
              "Embark on an exciting birdwatching adventure, with the chance to spot rare species such as the Ankober Serin, Smith's Francolin, and Yellow Throated Serin. Marvel at the vibrant array of birdlife, including the Black-winged Love Bird and the majestic Lammergeyer, while exploring the natural wonders of Ankober.",
          },
          {
            title: "Wildlife Encounters",
            description:
              "Keep an eye out for elusive wildlife in the area, including the majestic but rarely seen Leopard, Colobus and Vervet Monkeys, Gelada Baboon, Menelik's Bushbuck, Klipspringer, and the charming Rock Hyrax. Experience the harmony between nature and history that defines Ankober.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "Early Morning Departure",
          description: [
            "Early morning departure and head north on the Gojjam Road. Your first stop will be Debre Berhan, some 130 km from Addis Ababa. The great Emperor Zera Yaqob (1434 – 1468) made his imperial capital here.",
            "Later rulers abandoned the town but once again it became an important center under the Shoa kings, notably King Sahle Selassie (1813 – 1847). However, it was l destroyed in 1855, when Emperor Tewodros advanced into Shoa. Emperor Menelik made it his capital for a period, and you should see the church of Selassie which he restored in 1906.",
            "In the town itself, visitors might like to buy the woolen hats worn by shepherd boys, and carpets with the designs characteristic of the area.",
          ],
          image: images.addis1,
        },
        {
          title: "To the Imperial capital of Ankober",
          description: [
            "You now take the road east to another former imperial capital – Ankober, a little over 40 km from Debre Berhan. Founded by King Amaha Iyesus, Ankober commanded the very important trade route between the eastern lowlands and the Showan plateau.",
            "Abandoned by Menelik II in favor of Entoto (and later Addis Ababa), the old palace ruins can still be seen, and two of the original five churches (Mariam and Medhane Alem) are still used as places of worship. Upon arrival, you will be escorted to the palace of Emperor Menielik.",
            "You will be treated to a truly Authentic Ethiopian lunch while basking in the beautiful scenery. Given that it’s the right time of the season, there is the chance of seeing the very rare Ankober Serin, and other species such as Smith’s Francolin, Yellow Throated Serin, White-billed Starling, Black-winged Love Bird, Lammergeyer, Mountain Buzzard, Peregrine, Red-breasted Sparrow Hawk, Alpine Swift, Crag Martin, and Blue Rock Thrush.",
            "Wildlife recorded in the area includes Leopard (rarely seen), Colobus and Vervet Monkeys, Gelada Baboon, Menelik’s Bushbuck, Klipspringer and Rock Hyrax, which despite its small size is a distant relative of the elephant. After the eventful day, you will be driven back to Addis Ababa and arrive early evening.",
          ],
          image: images.simien7,
        },
        {
          title: "Ankober to Addis Ababa",
          description: [
            "One could return from Ankober back to Addis Ababa but there is now a new lodge built at Ankober in a traditional style. Using this lodge as a base, there are some great walks and hikes – one could easily spend a couple of days here, enjoying the air (it is 2870 meters ) the great views, and tranquility.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 8,
    title: "Ethiopian Essence",
    index: false,
    image: images.awash2,
    description: "A Day Of Tranquility At Wonchi Crater Lake",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Essence",
        subtitle: "A Day Of Tranquility At Wonchi Crater Lake",
        description: [
          "Ethiopia is a land where ancient wonders and natural beauty intertwine to create a mesmerizing experience. For the busy business traveler with a limited amount of time, we present an unforgettable day trip to Wonchi Crater Lake.",
          "This exclusive itinerary combines breathtaking landscapes, cultural immersion, and a serene escape from the bustling city life.",
        ],
        lr: true,
        img1: images.awash1,
        img2: images.awash2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Natural Wonder",
            description:
              "Wonchi Crater Lake unveils a picturesque setting with its lush forests, serene lake, and captivating islands. It is a hidden gem that offers a soothing atmosphere, perfect for rejuvenating the senses.",
          },
          {
            title: "Scenic Drive",
            description:
              "Embark on a scenic journey along the new Ambo road, where you'll witness the stunning Menagesha Forest and the Holetta River. As you pass by the historic town of Addis Alem, you'll discover its significance in Ethiopian history and heritage.",
          },
          {
            title: "Wonchi Crater Exploration",
            description:
              "Upon reaching the rim of the Wonchi crater, be prepared to witness a sight of unparalleled beauty. Immerse yourself in the verdant forests, stroll around the enchanting lake, and discover the intriguing islands within the crater.",
          },
          {
            title: "Adventurous Descents",
            description:
              "Choose your preferred mode of transportation, whether on foot or horseback, as you descend into the crater's depths. Alternatively, continue your drive and explore the wonders that await you at the heart of this natural marvel.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "Early Morning Departure",
          description: [
            "Early morning heading west on the new Ambo road. You will pass Menagesha Forest to the north of the road, the Holetta River (a tributary of the Awash), the small town of Addis Alem where Menelik II once planned to make his capital, before reaching Ambo, some 120 km from the capital.",
            "The area between Addis Alem and Ambo contains the intersections of three of Ethiopia’s major river basins: those of the Awash, Omo and Guder",
          ],
          image: images.addis1,
        },
        {
          title: "Stop for some refreshment",
          description: [
            "You will stop for some refreshment in the town of Ambo, from where Ethiopia’s most famous mineral water is drawn, before driving up nearly 1000 meters in 27 km to the rim of the Wonchi crater, where visitors will see one of the most beautiful sites in Ethiopia – verdant forests, a lake with islands, all within the crater.",
          ],
          image: images.bahirdar1,
        },
        {
          title: "Ankober to Addis Ababa",
          description: [
            "You can leave our vehicles here and descend either on foot or on horse, or drive down all the way to the crater. You will have a picnic lunch here and spend some hours walking or horse riding through the forest, visiting the hot springs, and taking a dug-out boat over to the island to visit the church. Mid afternoon you will start your journey back to Addis Ababa.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 6,
    experience: 8,
    title: "Wilderness Escapade",
    index: false,
    image: images.awash1,
    description: "Awash & Aledeghi National Park Exploration",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Wilderness Escapade",
        subtitle: "Awash & Aledeghi National Park Exploration",
        description: [
          "For busy business travelers seeking a brief escape into nature's embrace, this thrilling trip to Awash and Aledeghi National Park promises an unforgettable wilderness experience in Ethiopia. Leave the bustling city of Addis Ababa behind as you venture eastwards into the arid landscapes, immersing yourself in the mesmerizing beauty of these national parks.",
          "Discover the roaring Awash Falls, where Nile Crocodiles bask on river banks, providing incredible photography opportunities. Explore the grasslands, acacia scrub, and riverine forests of Awash National Park, encountering Olive Baboons, Salt's Dikdiks, and Beisa Oryx. Marvel at the diverse birdlife, from Lappet-faced Vultures to Northern Carmine Bee-eaters.",
          "Continue your journey to Aledeghi Plains, where rare species like the Arabian Bustard can be found, and encounter the nomadic Afar tribesmen, deeply rooted in their ancestral ways. Conclude your adventure with a return to Addis Ababa, carrying cherished memories of Ethiopia's wilderness.",
        ],
        lr: true,
        img1: images.awash1,
        img2: images.alehdege1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Awash National Park",
            description:
              "Photograph Nile Crocodiles, spot Olive Baboons and Salt's Dikdiks, and enjoy the rich birdlife, including Lappet-faced Vultures and Northern Carmine Bee-eaters.",
          },
          {
            title: "Awash Falls",
            description:
              "Experience the awe-inspiring spectacle of Awash Falls, practicing slow shutter speeds to capture the ethereal beauty of the cascading waters.",
          },
          {
            title: "Aledeghi Plains",
            description:
              "Embark on a game drive in Aledeghi Plains, encountering unique species like the Somali Ostrich, Arabian Bustard, and Martial and Short-toed Snake Eagles.",
          },
          {
            title: "Cultural Encounters",
            description:
              "Witness the nomadic Afar tribesmen, adorned in traditional attire and adhering to their ancestral ways of herding camels and goats.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Drive to Aledeghi National Park, reaching Doho Lodge for an overnight stay.",
          },
          {
            title: "Day 2",
            description:
              "Embark on an early morning game drive in Aledeghi Plains, known for its remarkable birdlife and occasional mammal sightings. In the afternoon drive north to Awash National Park. Game drive in the late afternoon.",
          },
          {
            title: "Day 3",
            description:
              "Early morning game drive in Awash National Park, immersing yourself in its mosaic of grasslands, acacia scrub, and riverine forests. Seek out fascinating species like Beisa Oryx and Northern Lesser Kudu. Bid farewell to Awash National park and journey back to Addis Ababa, reflecting on your captivating wilderness experience. Overnight stay in Addis Ababa.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: DRIVE TO AWASH NATIONAL PARK",
          description: [
            "We will leave Addis Ababa behind and head eastwards, leaving the fertile highlands behind and traveling through an increasingly arid country until we reach Alegeghi National Park, where we will stay overnight at a comfortable lodge in Doha.",
            "The spectacular falls are right beside the lodge and are a great place to practice the pleasing effect of slow shutter speeds as the light dims. Large Nile Crocodiles are a feature here and can be photographed on the river banks and partly-submerged rocks, displaying those awesome arrays of teeth.",
            "This afternoon will have our first opportunity to explore further afield. Overnight in Doho Lodge.",
          ],
          image: images.awash1,
        },
        {
          title: "DAY 2: EXPLORE ALEDEGHI PLAINS AND DRIVE TO AWASH",
          description: [
            "Early morning game drive in Aledeghi Plains. Here you will search for Somali Ostrich, Martial and Short-toed Snake Eagles, Yellow-necked Spurfowl, the rare Arabian Bustard (perhaps the best location on earth for this species), Black-headed Lapwing, Chestnut-bellied Sandgrouse, and Chestnut-backed Sparrow-Lark.",
            "Occasionally highly nomadic species such as Pale Rock Finch or Black-crowned Sparrow-Lark move into the area as well. Depending on conditions, you may also see a number of mammals such as the Golden Jackal, Beisa Oryx, Grevy’s Zebra, and Soemmering’s Gazelle.",
            "This land is inhabited by nomadic Afar tribesmen whom you will see dressed in their fine white cotton tunics, bedecked with traditional jewelry, daggers, and spears.",
            "The men sport a unique bushy hairstyle, while women and girls are also extravagantly attired and adorned. They adhere strictly to their ancestral ways of tending their camel and goat herds and roaming throughout this inhospitable land.",
            "As the day begins to heat up, you shall leave the Aledeghi Plains behind and head to Awash National Park. Overnight in Kuriftu Awash National Park.",
          ],
          image: images.alehdege1,
        },
        {
          title: "DAY 3: EXPLORE AWASH NATIONAL PARK",
          description: [
            "We will spend the morning at Awash National Park. The terrain is mostly a mosaic of grassland and acacia scrub, but the Awash River flows through the area and supports some thin strips of riverine forest in places. A distinct advantage of Awash (and indeed all national parks we visit in Ethiopia) compared to many other African parks is that one is allowed to get out of the vehicles and photograph on foot owing to the virtual absence of dangerous mammals. Awash holds some interesting mammals, including Olive Baboon, the delightful little Salt’s Dikdik, and the handsome Beisa Oryx. With a bit of luck, we will also encounter Northern Lesser Kudu.",
            "Birdlife is rich and varied (over 400- species have been recorded from Awash) and among the most appealing photographic targets are the huge Lappet-faced Vulture, Tawny Eagle, Pallid and Montagu’s Harriers, Pygmy and Lanner Falcons, Kori, Buff-crested and White-bellied Bustards, Black-headed Lapwing, Chestnut-bellied Sandgrouse, Blue-naped Mousebird, the superb Abyssinian Roller, the wonderful Northern Carmine Bee-eater (which sometimes uses the backs of Kori Bustards or even Somali Ostriches as a convenient lookout!), Northern Red-billed and Eastern Yellow-billed Hornbills, and the lovely Rosy-patched Bushshrike (pairs often duet together).",
            "This afternoon you depart Awash National Park and head further north to Addis Ababa. Overnight in Addis Ababa.",
          ],
          image: images.awash2,
        },
      ],
    },
  },
  {
    id: 7,
    experience: 8,
    title: "Serenity And Wilderness",
    index: false,
    image: images.chebera1,
    description: "Lake Langano And Lephis Forest Retreat",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Serenity And Wilderness",
        subtitle: "Lake Langano And Lephis Forest Retreat",
        description: [
          "Indulge in a short escape from the demands of business and immerse yourself in the serenity of Lake Langano and the untamed beauty of Lephis Forest. This exclusive trip is designed for busy professionals seeking a rejuvenating retreat amidst Ethiopia's captivating landscapes.",
          "Explore the natural wonders of Lake Langano, a peaceful oasis nestled against the backdrop of the Arsi Mountains. Witness the remarkable birdlife that graces its shores, including the striking Hemprich's hornbill and fascinating helmet-strikes.",
          "Venture further into the Central Rift Valley to discover the pristine Lephis Forest, where you'll encounter majestic trees, endemic bird species, and a stunning waterfall. Immerse yourself in the rich cultural and natural heritage of the area as you embark on this unforgettable journey of tranquility and wilderness.",
        ],
        lr: true,
        img1: images.awash1,
        img2: images.chebera1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Tiya",
            description:
              "Explore the UNESCO World Heritage Site of Tiya, renowned for its peculiar engraved standing stone monoliths.",
          },
          {
            title: "Lake Ziway",
            description:
              "Discover the diverse aquatic bird species along the scenic shores of Lake Ziway, such as the confiding Great White Pelican and the impressive Marabou Stork.",
          },
          {
            title: "Lake Langano",
            description:
              "Experience the serene ambiance of Lake Langano, known for its bilharzia-free waters and abundant birdlife, including Hemprich's hornbill and helmet-strikes.",
          },
          {
            title: "Lephis Forest",
            description:
              "Embark on an excursion to the secluded Lephis Forest, marveling at the rare and enormous trees, endemic bird species, and the breathtaking Lephis Waterfall.",
          },
          {
            title: "Cultural Immersion",
            description:
              "Engage with local community guides who share their knowledge of the forest's history, culture, and conservation efforts, providing a deeper understanding of the natural surroundings.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Drive from Addis Ababa to Lake Langano, enjoying scenic views of the Arsi Mountains. Explore Lake Ziway's shores, observing a variety of aquatic bird species. Arrive at Lake Langano, unwind, and immerse yourself in the tranquility of the surroundings. Overnight stay in Langano.",
          },
          {
            title: "Day 2",
            description:
              "Early morning drive to Lephis Forest, located in the Central Rift Valley. Meet a local community guide at the Lephis Welcome Tukul and begin the Finchaa Trail on foot or horseback. Discover the forest's pristine natural beauty, encounter majestic trees, and observe endemic bird species and wildlife. Reach the magnificent Lephis Waterfall, a breathtaking highlight of the tour. Enjoy a break at the waterfall, relishing the refreshing mist, capturing photos, and savoring the scenic splendor. Return to Langano for an overnight stay.",
          },
          {
            title: "Day 3",
            description:
              "Breakfast and birdwatching along the serene shores of Lake Langano. Depart for Addis Ababa, stopping at the stunning lakes of Abiata and Shalla en route. Embrace the serene beauty of the region's lakes before concluding the journey. Return to Addis Ababa, feeling rejuvenated and inspired by the tranquil retreat.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: DRIVE TO DRIVE TO LANGANO",
          description: [
            "An early morning departure takes you to south towards the Rift Valley. Your first stop is at Tiya, classified by UNESCO as a World Heritage Site, where we can see the northernmost example of a peculiar type of engraved, standing stone monolith that stretches across parts of southern Ethiopia. Continue your driving to Ziway, where you explore the shore for aquatic birds. It is here you will have a lunch stop.",
            "Strolling along the lakeshore at Lake Ziway will allow you excellent views of the confiding Great White Pelican and the huge Marabou Stork, while dazzling Northern Carmine Bee-eater, migratory White and Western Yellow Wagtails (including some of the striking feldeggi race) and the less colorful Ethiopian Cisticola can be seen around the lake edge.",
            "You eventually arrive at your destination for this evening, Lake Langano. Set against the backdrop of the stunning Arsi Mountains, the lake is a popular destination for weekenders.",
            "Its muddy brown waters notwithstanding, it is one of the few lakes in the area that is reputedly bilharzia free. It is also a haven for birds that flock to the lake’s shore. You may well spot Hemprich’s hornbill here, as well as fan-tailed ravens and helmet strikes. Overnight in Langano.",
          ],
          image: images.bahirdar1,
        },
        {
          title: "DAY 2: EXCURSION TO LEPHIS FOREST",
          description: [
            "An early morning drive southward will take you to Lephis Forest. Located in Ethiopia’s Central Rift Valley, the forest is amongst the region’s most pristine and secluded natural wonders, with breathtaking views, endemic bird and wildlife species, and a natural waterfall.",
            "After meeting a local community guide at the Lephis Welcome Tukul, visitors set off along the Finchaa Trail on foot or horseback. The trail begins in the cultivated Forest Enterprise forest, giving visitors the chance to learn about the Forest Enterprise, sustainable forestry, and local conservation efforts.",
            "The trail then winds its way into the natural forest where visitors will encounter enormous, majestic trees that have now become a rarity in Ethiopia, as well as an impressive array of animal life including a number of endemic and near-endemic bird species, baboons, and monkeys. Along the trail, the local guide explains the natural surroundings as well as the history and culture of the area.",
            "Emerging from beneath the dense forest canopy, you will be faced with the highlight of the tour: the beautiful Lephis Waterfall. A break at this magical spot offers visitors the opportunity to cool off in the refreshing mist of the cascade, take pictures, watch for nesting birds, and enjoy the area’s scenic beauty. Then head back to Langano overnight.",
          ],
          image: images.chebera1,
        },
        {
          title: "DAY 3: DRIVE TO ADDIS ABABA",
          description: [
            "Enjoy breakfast and short birding at the lake shore and afterward, drive towards Addis Ababa, visiting the region’s lakes en route. The lakes of Abiata and Shalla are particularly stunning.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 8,
    experience: 8,
    title: "Lake Tana's Monastic Tranquility",
    index: false,
    image: images.bahirdar4,
    description: "A Business Traveler's Retreat",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Lake Tana's Monastic Tranquility",
        subtitle: "A Business Traveler's Retreat",
        description: [
          "Embark on a serene journey to Lake Tana, Ethiopia's largest lake and a sanctuary of ancient monasteries, designed specifically for business travelers with limited time. Located in the captivating town of Bahir Dar, Lake Tana offers a tranquil escape from the bustling business world. Explore the Zeghie Peninsula, renowned for its picturesque round monasteries dating back to the 14th century.",
          "Take a scenic boat ride across the lake's shimmering waters, surrounded by lush forests, and visit the historic churches of Betra Mariam and Ura Kidane Mehret. Immerse yourself in the rich spiritual heritage of the area where coffee cultivation first began.",
          "After a memorable visit to Lake Tana, return to Addis Ababa for a city tour and indulge in the vibrant shopping experiences the capital has to offer. Join us for a brief yet rejuvenating retreat to the serene beauty of Lake Tana's monastic wonders.",
        ],
        lr: true,
        img1: images.bahirdar3,
        img2: images.bahirdar2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Zeghie Peninsula",
            description:
              "Discover the round grass-roofed monasteries nestled amidst the dense forests, showcasing remarkable architecture and ancient religious traditions.",
          },
          {
            title: "Blue Nile Falls",
            description:
              "Marvel at the majestic Blue Nile Falls, also known as 'Tis Issat' or 'Smoking Water,' during the rainy season when it cascades down the rock face in all its splendor.",
          },
          {
            title: "Bahir Dar City Tour",
            description:
              "Explore the charming town of Bahir Dar, known for its rich history and captivating landmarks, including the former palace of Emperor Haile Selassie at Bizeit.",
          },
          {
            title: "Ethnological Museum",
            description:
              "Visit the Ethnological Museum in Addis Ababa, home to archaeological treasures and the famous 'Lucy' fossil, offering insights into Ethiopia's cultural heritage.",
          },
          {
            title: "Trinity Cathedral",
            description:
              "Admire the exquisite Trinity Cathedral, an architectural gem featuring baroque-style design and European-inspired influences.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Fly to Bahir Dar & Visit monasteries on Lake Tana",
          },
          {
            title: "Day 2",
            description: "Fly back to Addis & City tour",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: DRIVE TO DRIVE TO LANGANO",
          description: [
            "An early morning departure takes you to south towards the Rift Valley. Your first stop is at Tiya, classified by UNESCO as a World Heritage Site, where we can see the northernmost example of a peculiar type of engraved, standing stone monolith that stretches across parts of southern Ethiopia.",
            "Continue your driving to Ziway, where you explore the shore for aquatic birds. It is here you will have a lunch stop. Strolling along the lakeshore at Lake Ziway will allow you excellent views of the confiding Great White Pelican and the huge Marabou Stork, while dazzling Northern Carmine Bee-eater, migratory White and Western Yellow Wagtails (including some of the striking feldeggi race) and the less colorful Ethiopian Cisticola can be seen around the lake edge.",
            "You eventually arrive at your destination for this evening, Lake Langano. Set against the backdrop of the stunning Arsi Mountains, the lake is a popular destination for weekenders.",
            "Its muddy brown waters notwithstanding, it is one of the few lakes in the area that is reputedly bilharzia free. It is also a haven for birds that flock to the lake’s shore. You may well spot Hemprich’s hornbill here, as well as fan-tailed ravens and helmet strikes. Overnight in Langano.",
          ],
          image: images.bahirdar1,
        },
        {
          title: "DAY 2: EXCURSION TO LEPHIS FOREST",
          description: [
            "An early morning drive southward will take you to Lephis Forest. Located in Ethiopia’s Central Rift Valley, the forest is amongst the region’s most pristine and secluded natural wonders, with breathtaking views, endemic bird and wildlife species, and a natural waterfall.",
            "After meeting a local community guide at the Lephis Welcome Tukul, visitors set off along the Finchaa Trail on foot or horseback. The trail begins in the cultivated Forest Enterprise forest, giving visitors the chance to learn about the Forest Enterprise, sustainable forestry, and local conservation efforts.",
            "The trail then winds its way into the natural forest where visitors will encounter enormous, majestic trees that have now become a rarity in Ethiopia, as well as an impressive array of animal life including a number of endemic and near-endemic bird species, baboons, and monkeys. Along the trail, the local guide explains the natural surroundings as well as the history and culture of the area.",
            "Emerging from beneath the dense forest canopy, you will be faced with the highlight of the tour: the beautiful Lephis Waterfall. A break at this magical spot offers visitors the opportunity to cool off in the refreshing mist of the cascade, take pictures, watch for nesting birds, and enjoy the area’s scenic beauty. Then head back to Langano overnight.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 9,
    experience: 8,
    title: "Lalibela's Ancient Marvels",
    index: false,
    image: images.bahirdar4,
    description: "A Business Traveler's Expedition",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Lalibela's Ancient Marvels",
        subtitle: "A Business Traveler's Expedition",
        description: [
          'Start a quest on a remarkable journey to Lalibela, Ethiopia\'s mystical UNESCO World Heritage Site, on this tailored itinerary designed for business travelers with limited time. Lalibela, known as the "8th wonder of the world," is home to 11 awe-inspiring rock-hewn churches carved out of solid volcanic rock.',
          "Explore the hidden treasures of Lalibela, as you navigate through tunnels, narrow passageways, and open quarried caves that connect these architectural marvels. Immerse yourself in the rich history and spiritual significance of this sacred place, where ancient traditions still thrive.",
          "After a memorable visit to Lalibela, return to Addis Ababa for a city tour, providing a glimpse into Ethiopia's vibrant capital. Join us for a short but unforgettable expedition into the heart of Ethiopia's ancient wonders.",
        ],
        lr: true,
        img1: images.lalibela6,
        img2: images.lalibela7,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Rock-Hewn Churches",
            description:
              "Discover the extraordinary rock-hewn churches of Lalibela, a testament to the remarkable architectural achievements of ancient civilizations.",
          },
          {
            title: "Bet Giorgis",
            description:
              "Marvel at the iconic Bet Giorgis, the most beautiful and well-preserved church in Lalibela, featuring intricate carvings and depictions of Saint George slaying the dragon.",
          },
          {
            title: "Ethnological Museum",
            description:
              "Visit the Ethnological Museum in Addis Ababa, home to archaeological and historical findings, including the renowned complete fossil remain of 'Lucy', a significant hominid discovery.",
          },
          {
            title: "Trinity Cathedral",
            description:
              "Explore the Trinity Cathedral, an architectural masterpiece showcasing baroque-style design and European-inspired influences.",
          },
          {
            title: "Merkato Market",
            description:
              "Immerse yourself in the vibrant atmosphere of Merkato, Africa's largest open-air market, offering a diverse range of goods and artifacts from across the country.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Fly to Lalibela & visit the rock Churches",
          },
          {
            title: "Day 2",
            description: "Fly back to Addis & City tour",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Addis Ababa, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level.",
            "Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches. Lalibela indeed offers a great opportunity for any traveler.",
            "After check-in and freshening up in your hotel, the morning will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos.",
            "Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches. Overnight in Lalibela.",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 2: FLY BACK TO ADDIS",
          description: [
            "This morning, you drive to Lalibela airport, where you catch your flight to Addis. On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch. This half-day city tour explores the many highlights and monuments of Addis Ababa.",
            "Begin with a tour of the Ethnological Museum, boasting many archaeological and historical findings including the famous complete hominid fossil remain of 'Lucy', locally known as 'Dinknesh', which translates to wonderful. Visit the Trinity Cathedral, a beautiful church built in the Baroque style, similar to much of the European-inspired architecture unique to Ethiopia.",
            "Next proceed to Merkato, the largest open-air market in Africa, a fascinating glimpse of the vast range of goods and artifacts available from all parts of the country. You have the afternoon free for shopping in Addis Ababa. Overnight in Addis Ababa.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 10,
    experience: 8,
    title: "Danakil Adventure",
    index: false,
    image: images.danakil1,
    description: "Unveiling Ethiopia's Otherworldly Wonders",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Danakil Adventure",
        subtitle: "Unveiling Ethiopia's Otherworldly Wonders",
        description: [
          "An extraordinary journey through Ethiopia's Danakil Depression, perfectly tailored for business travelers with limited time. Brace yourself for a captivating expedition into an otherworldly landscape of colorful mineral deposits, sulfur pools, and salt flats.",
          "This curated itinerary promises an unforgettable experience in one of the most unique and extreme environments on Earth. From exploring the famous Dallol area to witnessing the arduous work of salt extraction, this trip is designed to immerse you in the unparalleled wonders of the Danakil Depression.",
          "Join us for a short but unforgettable adventure in the heart of Ethiopia. Join us on this brief yet extraordinary adventure to the Danakil Depression, where you'll witness the raw beauty and geological marvels of this remarkable region.",
          "Prepare to be awe-inspired as you journey through a surreal landscape that few have witnessed firsthand.",
        ],
        lr: true,
        img1: images.danakil5,
        img2: images.danakil6,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Danakil Depression",
            description:
              "Venture into the surreal landscape of the Danakil Depression, a geological wonderland boasting colorful mineral formations, sulfur pools, and salt flats.",
          },
          {
            title: "Dallol Area",
            description:
              "Explore the mesmerizing Dallol area, characterized by its alien-like terrain with bizarre mineral deposits, geysers, and sulfuric landscapes.",
          },
          {
            title: "Salt Canyons",
            description:
              "Embark on a short walk through the salt canyons, witnessing the arduous work of salt extraction by hand and the loading of camels for transportation.",
          },
          {
            title: "Camel Caravans",
            description:
              "Encounter long camel caravans transporting salt bars, a fascinating glimpse into the region's main export and a centuries-old trade tradition.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Fly to Mekelle & drive to Dallol",
          },
          {
            title: "Day 2",
            description:
              "Explore Dallol then drive to Mekelle & Fly back to Addis",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: FLY TO MEKELLE & DRIVE TO DANAKIL DEPRESSION",
          description: [
            "After an enjoyable breakfast, transfer you to Addis Ababa airport for an hour’s flight to Mekelle. At Mekelle, you’ll meet your vehicle and drive into the Danakil Depression. You’ll begin the drive into the Danakil in good time so that you enjoy your drive in the cooler time of the day.",
            "The roads leading out of Mekelle are smooth and asphalted, and driving further out of town there are some wonderful views of the landscape. As you drive further towards the Afar region, the roads are a maze of solidified lava, rock, and sand with an occasional palm-lined oasis.",
            "En route, you’ll likely see long camel caravans going in and out of the Danakil as they are loaded with salt bars, the main export of this region. Overnight Camping in Danakil.",
          ],
          image: images.danakil5,
        },
        {
          title: "DAY 2: EXPLORE THE DALLOL AREA & DRIVE TO MEKELLE",
          description: [
            "Before dawn, you start driving to Dallol. It is like nowhere else; a bizarre landscape of colorful mineral deposits, sulfur pools, and geysers, where you will have this early morning to explore this seemingly alien terrain.",
            "You then visit the salt canyons, a bizarre landscape where we go for a short walk. On the way back to camp, you cross the salt flats where you see the arduous work of salt being extracted by hand and loaded onto the camels. After freshening up and having lunch, we will leave the Danakil and climb the steep mountains to Mekelle town.",
            "You catch your flight to Addis Ababa. On arrival in Addis, you transfer to a hotel. Overnight in Addis Ababa.",
          ],
          image: images.danakil6,
        },
      ],
    },
  },
  {
    id: 11,
    experience: 8,
    title: "Harar",
    index: false,
    image: images.harar1,
    description: "A Glimpse Of Ethiopia's Cultural Gem In A Day",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Harar",
        subtitle: "A Glimpse Of Ethiopia's Cultural Gem In A Day",
        description: [
          "A whirlwind journey through Harar, a captivating city that offers a glimpse into Ethiopia's rich cultural heritage. This curated itinerary is specially designed for business travelers with limited time, allowing you to immerse yourself in the vibrant atmosphere and unique traditions of Harar.",
          'From exploring the ancient city walls to witnessing the legendary "hyena man" ritual, this trip promises an unforgettable experience in the heart of Ethiopia. Discover the centuries-old mosques, bustling markets, and charming Harari houses as you navigate the narrow cobbled streets of this UNESCO heritage site. Join us for a day filled with cultural exploration and memorable encounters in Harar.',
        ],
        lr: true,
        img1: images.danakil4,
        img2: images.harar1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Harar City Walls",
            description:
              "Marvel at the historic city walls, punctuated by five gates and 25 towers, offering a glimpse into Harar's architectural heritage.",
          },
          {
            title: "Hyena Man",
            description:
              'Experience the mystique of Harar\'s famed "hyena man" ritual at dusk. Witness the captivating sight of hyenas gathering to receive scraps of camel meat in a centuries-old tradition and religious observance.',
          },
          {
            title: "Jugal (Old Harar)",
            description:
              "Explore the enchanting streets of Jugal, the old town of Harar. Get lost in its labyrinthine alleys, adorned with colorful shops and traditional Harari houses.",
          },
          {
            title: "Harari Houses",
            description:
              "Immerse yourself in the local culture by visiting traditional Harari houses. Admire the intricate woodwork and architectural details that reflect the unique craftsmanship of this region.",
          },
          {
            title: "Daily Local Market",
            description:
              "Engage with the vibrant local community as you wander through the bustling market, where vendors display a colorful array of goods, including spices, textiles, and traditional handicrafts.",
          },
          {
            title: "Arthur Rimbaud Cultural Center",
            description:
              "Step into the Arthur Rimbaud Cultural Center, housed in a beautiful century-old mansion. Explore the small museum, library, and research center dedicated to the French poet's time in Ethiopia.",
          },
          {
            title: "Sherif Harar Museum",
            description:
              "Visit the Sherif Harar Museum, a local municipal museum that provides insights into the history, culture, and traditions of Harar.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Fly to Dire Dawa & drive to Harar",
          },
          {
            title: "Day 2",
            description:
              "Explore Harar town, then drive to Dire Dawa & & Fly back to Addis",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: FLY TO DIRE DAWA & DRIVE TO HARAR",
          description: [
            "Today you fly to Dire Dawa, the commercial centre of the region and the main rail head for the Djibouti to Addis railway. From here you ascend by road from the plains to the walled city of Harar another UNESCO heritage site. The city walls are pierced by 5 gates topped by 25 towers.",
            "The 16th century mosque with its slender minaret and the narrow streets lined with small shops all give the impression of having wandered into a city from the Arabian nights. This evening at dusk, you pay a visit to the now-legendary “hyena man” at sundown. ",
            "Illuminated by vehicle headlights, he calls to hyenas to take scraps of camel meat in a ritual derived from local tradition and religious observance. Overnight in Harar.",
          ],
          image: images.harar1,
        },
        {
          title: "DAY 2: EXPLORE HARAR & FLY TO ADDIS",
          description: [
            "Today we explore Jugal (old Harar) on foot, you first head to the daily colorful local market. Then you visit the Arthur Rimbaud Cultural Center. It is located in a beautiful century-old mansion and houses a small museum, library, and research center devoted to Rimbaud’s time in Ethiopia.",
            "You also visit Sherif Harar Museum, the local municipal museum. Strolling along the winding, cobbled streets, you explore the gates, restored city walls, and interesting Harari houses of this once-secluded town. After lunch, you drive to Dire Dawa, where you catch your flight to Addis.",
            "On arrival in Addis, you transfer to a hotel where you can freshen up. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 12,
    experience: 8,
    title: "Unveiling Addis Ababa's Contemporary Art Scene",
    index: false,
    image: images.addis3,
    description: "Exploring Modern Expressions In Ethiopia's Capital",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Unveiling Addis Ababa's Contemporary Art Scene",
        subtitle: "Exploring Modern Expressions In Ethiopia's Capital",
        description: [
          "Immerse yourself in the creative energy of Addis Ababa as you embark on a curated tour of the city's contemporary art scene. From established galleries to innovative spaces, this itinerary invites you to discover the rich tapestry of modern artistic expressions in Ethiopia's capital. Engage with artists, explore diverse mediums, and witness the dynamic narratives of Ethiopian artistry. Get ready to unlock the vibrant soul of Addis Ababa's artistic spirit as you delve into the world of contemporary art. The best places in Ethiopia's capital to view modern art from the past and present centuries",
          "Ethiopia has a centuries-long tradition of fine art expression. Modern art is a more recent phenomenon, but Addis Ababa has had a contemporary art scene for over half a century. Today, there are numerous places around the capital city to view creative modern art expressions from both emerging and established artists. From mid-20th-century expressionism to digitally-manipulated photography, Addis Ababa’s art scene has much to offer curious art lovers from around the world.",
        ],
        lr: true,
        img1: images.addis2,
        img2: images.addis3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Addis Fine Art",
            description:
              "Immerse yourself in the vibrant exhibitions and thought-provoking talks at Addis Fine Art, the leading contemporary gallery in Addis Ababa. Experience the innovative works of Ethiopian artists and the global diaspora, fostering connections between local and international art communities.",
          },
          {
            title: "National Museum of Ethiopia",
            description:
              "Delve into Ethiopia's rich history and artistry at the renowned National Museum, where ancient artifacts intertwine with a collection of 20th-century works. Marvel at the abstract paintings by Afewerk Tekle and explore the diverse artistic expressions housed within this cultural treasure.",
          },
          {
            title: "LeLa Gallery",
            description:
              "Step into the green oasis of LeLa Gallery, showcasing the experimental and innovative works of Ethiopian and East African artists. Founded by Lilly Sahle, a passionate promoter of Ethiopian art, this gallery nurtures collaborations, represents emerging talents, and hosts international exhibitions.",
          },
          {
            title: "Laphto Art Gallery",
            description:
              "Experience the cutting-edge and experimental art scene at Laphto Art Gallery, known for providing a platform for new and emerging artists. Discover a range of artistic mediums, including sculpture, installations, photography, and paintings, and engage in panel discussions that bridge the gap between art and the mainstream.",
          },
          {
            title: "Zoma Museum",
            description:
              "Immerse yourself in the multidisciplinary world of contemporary art at Zoma Museum, an eco-friendly space created by artist Elias Sime. Explore the extraordinary house made from natural materials, witness cutting-edge ecological art, and participate in artist-in-residence programs and educational initiatives.",
          },
          {
            title: "Gebre Kristos Desta Center",
            description:
              "Pay homage to one of Ethiopia's pioneering artists, Gebre Kristos Desta, at the eponymous center dedicated to his work. Discover his iconic pieces and embrace the center's educational focus, encouraging emerging artists to merge styles and push artistic boundaries.",
          },
          {
            title: "Makush Art Gallery",
            description:
              "Savor the unique combination of culinary delights and contemporary artwork at Makush Art Gallery. Explore the diverse selection of young and emerging artists, showcasing Ethiopia's burgeoning art scene, and support humanitarian causes through their collaborative efforts.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Addis Fine Art & National Museum of Ethiopia",
          },
          {
            title: "Day 2",
            description: "LeLa Gallery & Laphto Art Gallery",
          },

          {
            title: "Day 3",
            description: "Zoma Museum & Artist Studios",
          },
          {
            title: "Day 4",
            description: "Gebre Kristos Desta Center & Makush Art Gallery",
          },
          {
            title: "Day 5",
            description: "Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Detail tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ADDIS FINE ART & NATIONAL MUSEUM OF ETHIOPIA",
          description: [
            "Start your Contemporary Art gallery tour in Addis by visiting Addis Fine Art, one of the city's premier galleries showcasing contemporary Ethiopian art. Immerse yourself in the vibrant and diverse art scene, featuring works from both established and emerging artists.",
            "Explore the gallery's collection, which includes paintings, sculptures, and mixed media pieces that reflect the rich cultural heritage and modern perspectives of Ethiopia.",
            "Afterward, head to the National Museum of Ethiopia, where you can delve into the country's fascinating history and culture. Marvel at the renowned collection, including the famous hominid fossil 'Lucy' and a wide range of archaeological artifacts.",
            "Gain a deeper understanding of Ethiopia's past and its influence on the contemporary artistic expressions you'll encounter throughout your tour.",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: LELA GALLERY & LAPHTO ART GALLERY",
          description: [
            "Today you will discover the LeLa Gallery, a vibrant space dedicated to promoting contemporary Ethiopian art. Engage with thought-provoking exhibitions that tackle social and cultural issues while showcasing the talents of local artists. Experience a range of artistic styles and mediums, from paintings to installations, as you explore the gallery's curated displays.",
            "Continue your art exploration at Laphto Art Gallery, known for its dedication to promoting emerging artists.",
            "Admire the innovative works on display, featuring contemporary themes and artistic expressions that reflect the dynamic energy of Ethiopia's art scene.",
            "Engage in discussions with artists and curators to gain insights into the creative process and inspirations behind their works.",
          ],
          image: images.axum6,
        },
        {
          title: "DAY 3: ZOMA MUSEUM & ARTIST STUDIOS",
          description: [
            "After breakfast, embark on a journey to the Zoma Museum, a unique cultural institution that blends art, architecture, and sustainable practices. Explore the museum's outdoor and indoor spaces, showcasing contemporary artworks inspired by Ethiopia's cultural heritage and ecological sustainability.",
            "Discover the innovative use of natural materials and traditional building techniques, creating a harmonious connection between art and the environment.",
            "Afterward, visit artist studios in Addis Ababa to witness the creative process firsthand. Interact with local artists, learn about their techniques, and gain insights into their artistic visions.",
            "This immersive experience provides a deeper understanding of the artistic community and the diverse range of practices within contemporary Ethiopian art.",
          ],
          image: images.axum7,
        },
        {
          title: "DAY 4: GEBRE KRISTOS DESTA CENTER & MAKUSH ART GALLERY",
          description: [
            "Begin your day at the Gebre Kristos Desta Center, dedicated to preserving and promoting the legacy of the influential Ethiopian artist Gebre Kristos Desta. ",
            "Explore the center's collection of his paintings, sculptures, and writings, gaining a profound appreciation for his contributions to Ethiopian modern art. Engage in discussions and workshops centered on his artistic philosophy and impact.",
            "Conclude your Contemporary Art gallery tour at Makush Art Gallery, a hub for contemporary Ethiopian art. Discover a diverse selection of artworks from established and emerging artists, representing a wide range of styles and themes.",
            "Browse through the gallery's collection of paintings, sculptures, and mixed media pieces, offering a glimpse into the evolving artistic landscape of Ethiopia.",
          ],
          image: images.tigray9,
        },
        {
          title: "Day 5: Departure",
          description: [
            "On your final day, bid farewell to the vibrant art scene of Addis Ababa as you prepare for departure. Take the time to reflect on the captivating artworks you encountered during your Contemporary Art gallery tour, and carry the inspirations and memories of your journey back home.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 13,
    experience: 8,
    title: "Exploring Artistic Treasures And Unique Finds",
    index: false,
    image: images.addis2,
    description: "A Curio Shopping Tour In Addis Ababa",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Exploring Artistic Treasures And Unique Finds",
        subtitle: "A Curio Shopping Tour In Addis Ababa",
        description: [
          "Embark on a thrilling shopping adventure in Addis Ababa, Ethiopia's vibrant capital, where you can uncover a treasure trove of artistic creations and unique curios. This curated tour takes you to the city's top destinations for art, crafts, and antiquities, offering a glimpse into Ethiopia's rich cultural heritage and contemporary art scene.",
          "From traditional handicrafts to modern artwork, immerse yourself in the local craftsmanship and find one-of-a-kind souvenirs to cherish forever. Whether you're a seasoned collector or simply looking for authentic mementos, this trip promises an unforgettable shopping experience in the heart of Addis Ababa.",
        ],
        lr: true,
        img1: images.addis2,
        img2: images.addis3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Salem's Art Center",
            description:
              "Explore the impressive collection of Ethiopian art and crafts at Salem's Art Center, known for its diverse range of traditional and contemporary pieces. Discover intricate woodwork, vibrant paintings, and handwoven textiles that showcase the country's artistic heritage.",
          },
          {
            title: "Moye Coffee",
            description:
              "Take a break from shopping and indulge in the rich flavors of Ethiopian coffee at Moye. Experience the traditional coffee ceremony, savor the aromatic brew, and enjoy the cozy ambiance of these renowned coffee houses.",
          },
          {
            title: "Makush Art Gallery",
            description:
              "Delve into the thriving contemporary art scene of Addis Ababa at Makush Art Gallery. Browse through the extensive collection of artworks by emerging and established Ethiopian artists, and perhaps find the perfect piece to add to your collection.",
          },
          {
            title: "Shumeta",
            description:
              "Step into Shumeta, a haven for antiquity enthusiasts, where you can find a range of vintage treasures and collectibles. From ancient coins to intricate jewelry, explore the captivating history of Ethiopia through these unique artifacts.",
          },
          {
            title: "Zoma Museum (Lunch break)",
            description:
              "Take a break at Zoma Museum, a cultural hub promoting multidisciplinary contemporary art. Enjoy a delicious lunch while admiring the museum's eco-friendly architecture and engaging with artistic expressions that reflect Ethiopia's environmental sustainability.",
          },
          {
            title: "Saba Har",
            description:
              "Continue your shopping journey at Saba Har, a vibrant marketplace known for its eclectic mix of traditional handicrafts, textiles, jewelry, and home decor items. Immerse yourself in the lively atmosphere as you browse through the colorful stalls and interact with local artisans.",
          },
          {
            title: "Ecopia",
            description:
              "Conclude your shopping tour at Ecopia, a curated store offering a range of sustainable and ethically sourced products. Discover unique items crafted by local artisans, including handmade accessories, natural skincare products, and eco-friendly home goods.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Morning start with a visit of Moya coffee and continue on to Salem's Art Center. Having enough time there, head to Ecopia. Take lunch break at Zoma Museum. You then head to Saba Har.",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    experience: 9,
    title: "Ethiopian Coffee Odyssey",
    index: false,
    image: images.kaffa2,
    description: "A Photographic Journey through the Birthplace of Coffee",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Coffee Odyssey",
        subtitle: "A Photographic Journey through the Birthplace of Coffee",
        description: [
          "Start an odyssey on an unforgettable photographic adventure through the vibrant landscapes and rich coffee heritage of Ethiopia. Join us on the Ethiopian Coffee Odyssey, a 10-day exploration of the birthplace of coffee, where you'll immerse yourself in the captivating sights, aromas, and flavors of this ancient beverage. From the bustling streets of Addis Ababa to the picturesque coffee farms of Jimma and the lush Kaffa Biosphere, this journey will take you on a sensory voyage like no other.",
          "Capture the beauty of coffee plantations, meet local farmers, and learn about their age-old traditions. From Bebeka Coffee Estate to Yirga Cheffe, each destination offers unique photographic opportunities that will leave you in awe. Indulge your senses, awaken your creativity, and capture the essence of Ethiopia's coffee culture on this extraordinary expedition.",
        ],
        lr: true,
        img1: images.kaffa1,
        img2: images.kaffa2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Explore the vibrant capital city, visit museums, and savor the finest Ethiopian coffee at the renowned Tomoca coffee shop.",
          },
          {
            title: "Jimma",
            description:
              "Journey through picturesque landscapes, meet coffee farmers, and explore the charming coffee farms in this region.",
          },
          {
            title: "Mizan Teferi",
            description:
              "Capture the mosaic of forests and cultivated lands, with opportunities for stunning photographs along the way.",
          },
          {
            title: "Bebeka Coffee Estate",
            description:
              "Immerse yourself in the largest coffee farm in the area, photograph the sprawling plantations, and witness the ideal growing conditions for coffee plants.",
          },
          {
            title: "Kaffa Biosphere",
            description:
              "Trek through the lush coffee forests, encounter wild coffee varieties, and engage with local communities.",
          },
          {
            title: "Bonga",
            description:
              "Discover the enchanting surroundings of Bonga, surrounded by stunning landscapes and coffee-growing regions.",
          },
          {
            title: "Awassa",
            description:
              "Capture the scenic beauty of Awassa, known for its tropical vegetation and serene lakeside views.",
          },
          {
            title: "Yirga Cheffe",
            description:
              "Visit the heart of Ethiopian premium coffee production, explore coffee farms, and meet local farmers.",
          },
          {
            title: "Aleta Wondo",
            description:
              "Venture into another important coffee-growing locality, interact with farmers, and gain insights into their daily duties.",
          },
          {
            title: "Sidama Village",
            description:
              "Immerse yourself in the traditional farming techniques of the Sidama people, taste the finest coffee, and capture the essence of Ethiopian coffee culture.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & a city tour.",
          },
          {
            title: "Day 2",
            description: "Drive to Jimma via Woliso.",
          },
          {
            title: "Day 3",
            description: "Drive to Mizan Teferi.",
          },
          {
            title: "Day 4",
            description:
              "Excursion to Bebeka Coffee Estate and drive to Bonga.",
          },
          {
            title: "Day 5",
            description: "Explore Kaffa Biosphere and drive to Jimma.",
          },
          {
            title: "Day 6",
            description: "Drive to Awassa via Sodo.",
          },
          {
            title: "Day 7",
            description: "Drive to Yirga Cheffe.",
          },
          {
            title: "Day 8",
            description:
              "Excursion to Aleta Wondo & explore the Sidama Village.",
          },
          {
            title: "Day 9",
            description: "Drive back to Addis Ababa.",
          },
          {
            title: "Day 10",
            description: "Departure.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees. Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: DRIVE TO JIMMA VIA WOLISO FROM ADDIS ABABA",
          description: [
            "Early we depart from Addis Ababa to Jimma. En route, you will be visiting beautiful villages of the Gurage and Oromo people as well as crossing the magnificent and picturesque Gibe Gorge. Gibe River is a major tributary river of the Omo. This drive will take you through beautiful landscapes dominated by coffee plantations. Explore small-scale coffee plantations and coffee unions around Jimma after checking in and having a short time for lunch in Jimma. Overnight in Jimma.",
          ],
          image: images.kaffa1,
        },
        {
          title: "DAY 3: DRIVE TO MIZAN TEFERI",
          description: [
            "Today, you will be continuing your southwest routing as we make our way to Mizan Teferi. The 240km drive is made up of a mosaic of forest and cultivated land dominated by coffee, tea, and various spices, and we will have ample opportunity to stop and take advantage of any photographic opportunities we may encounter. Overnight in Mizan.",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 4: EXCURSION TO BEBEKA",
          description: [
            "This morning is devoted to the exploration of Bebeka Coffee Eastae. It is the biggest coffee farm sprawl across 6500ha of lushly forested hillside south of Mizan Teferi. Situated at an altitude of 1,500 meters provides an ideal climate and enables the best-growing conditions for the plants that are well protected by the larger forest trees which provide shade from the midday sun and preserve the moisture in the soil. You will have enough time to explore selected coffee farms. In the afternoon drive to Bonga. Overnight in Bonga.",
          ],
          image: images.lalibela5,
        },
        {
          title: "DAY 5: EXPLORE KAFFA AND SURROUNDING AREAS",
          description: [
            "An activity-filled day in exploring Kaffa Bio Spere and surrounding local villages. A short hike takes you through the wild and lush coffee forest of Mankira which consider the origin of Coffee Arabica. Meet the local farmers and visit their villages and learn about them. In the afternoon drive to Jimma. Overnight in Jimma.",
          ],
          image: images.kaffa2,
        },
        {
          title: "DAY 6: DRIVE TO AWASSA VIA SODO",
          description: [
            "Today's a full-day long but scenic journey as you drive to Awassa. The views in this remote part of Ethiopia are simply spectacular. The drive affords some excellent photo opportunities of the jagged mountains and the Gibe Valley. The route is dotted with intermittent mountain hamlets that add to the splendor of the scenery. Lunch break at Sodo and continued driving to Awassa. Overnight in Awassa.",
          ],
          image: images.hawassa1,
        },
        {
          title: "DAY 7: DRIVE TO YIRGA CHEFFE",
          description: [
            "Today you enjoy a scenic drive to the lush tropical vegetation of Yirga Cheffe. This is one of the most popular sources of Ethiopian premium coffee. At Yirga Cheffe Coffee Farmers Cooperative Union, enjoy a guided walking tour through the coffee farms. Meet farmers to learn and participate in their daily duties. Then drive back to Yirga Alem. Check into your lodge, nestled between coffee fields and lush vegetation in Yirgalem town. The Aregash Lodge is a natural retreat of astounding beauty and tranquility. Overnight in Aregash Lodge.",
          ],
          image: images.kaffa3,
        },
        {
          title: "DAY 8: EXCURSION TO ALETA WONDO & EXPLORE THE SIDAMA VILLAGE",
          description: [
            "This morning excursion takes you to Aleta Wondo, another important coffee-growing locality. Spend this morning exploring the coffee farms and learning more about the coffee and the local people. In the afternoon, explore the Sidama Village at Yirgalem. The nation of people called the Sidama are avid coffee drinkers and enset eaters, crops which they cultivate using some of the world’s oldest farming techniques, which honor not only the earth but also themselves. Visit area coffee farms and coffee unions then taste the best coffee, and drive back to Yirgalem. Overnight in Aregash Lodge.",
          ],
          image: images.konso1,
        },
        {
          title: "DAY 9: DRIVE TO ADDIS ABABA",
          description: [
            "Drive back to Addis Ababa. We make a stop at Ziway for lunch then proceed driving. If you arrive earlier than expected, you will have the chance to visit the Ethiopian commodity exchange (ECX) then you will attend our farewell party at a cultural restaurant with the traditional dance.",
          ],
          image: images.addis3,
        },
        {
          title: "DAY 10: DEPARTURE",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 9,
    title: "Geological Wonders Of Ethiopia",
    index: false,
    image: images.danakil8,
    description: "Unveiling The Ancient Earth",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Geological Wonders Of Ethiopia",
        subtitle: "Unveiling The Ancient Earth",
        description: [
          "Embark on a mesmerizing 14-day journey through the geological wonders of Ethiopia, a paradise for geology enthusiasts. This meticulously crafted itinerary takes you on an unforgettable expedition to witness the remarkable landscapes and ancient rock formations that make Ethiopia a geological treasure trove.",
          "From the bustling streets of Addis Ababa to the isolated churches on Lake Tana, the royal castles of Gondar, the breathtaking Simien Mountains, the ancient city of Axum, and the awe-inspiring rock-hewn churches of Lalibela, each destination reveals the geological secrets embedded in Ethiopia's rich history.",
          "Finally, venture into the otherworldly Danakil Depression, a surreal landscape of sulfur pools and colorful mineral deposits. Join us on this extraordinary adventure, where ancient rocks whisper tales of Earth's evolution.",
        ],
        lr: true,
        img1: images.danakil1,
        img2: images.debrelibanos1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlights of the Itinerary",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Immerse yourself in the multiethnic capital city, known for its museums, markets, and vibrant culture.",
          },
          {
            title: "Lake Tana",
            description:
              "Discover the isolated monasteries on the largest highland lake in Ethiopia, offering a glimpse into medieval Ethiopia.",
          },
          {
            title: "Gondar",
            description:
              'Explore the "Camelot of Africa" and marvel at the Fasilades Castles and Debre Berhan Church.',
          },
          {
            title: "Simien Mountains",
            description:
              "Embark on exhilarating walks through stunning scenery, encountering endemic wildlife like the Walia ibex and Ethiopian wolf.",
          },
          {
            title: "Axum",
            description:
              "Unearth the ancient city's treasures, including the stelae, the subterranean Tomb of Ramhai, and the Queen of Sheba's Bath.",
          },
          {
            title: "Lalibela",
            description:
              "Witness the 11 rock-hewn churches carved out of solid volcanic rock, a testament to human ingenuity and devotion.",
          },
          {
            title: "Danakil Depression",
            description:
              "Experience the surreal landscapes of sulfur pools, geysers, and salt flats, offering a glimpse into Earth's raw power.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa and settle into your hotel",
          },
          {
            title: "Day 2",
            description:
              "Explore the vibrant city of Addis Ababa, visiting the Holy Trinity Cathedral and the National Museum",
          },
          {
            title: "Day 3",
            description:
              "Fly to Bahir Dar, cruise Lake Tana, and visit monasteries",
          },
          {
            title: "Day 4",
            description:
              "Drive to Gondar and discover the royal castles and Debre Berhan Church",
          },
          {
            title: "Day 5",
            description:
              "Venture to the Simien Mountains National Park for scenic walks and wildlife encounters",
          },
          {
            title: "Day 6",
            description:
              "Drive to Axum and explore the ancient city's stelae and sacred sites",
          },
          {
            title: "Day 7",
            description:
              "Continue sightseeing in Axum and journey to the Gheralta area",
          },
          {
            title: "Day 8",
            description:
              "Marvel at the Tigray rock churches and their ancient artwork",
          },
          {
            title: "Day 9",
            description:
              "Embark on an adventure to the surreal Danakil Depression",
          },
          {
            title: "Day 10",
            description: "Explore Dallo and drive to Mekelle",
          },
          {
            title: "Day 11",
            description:
              "Journey to Lalibela via Sekota, encountering picturesque landscapes",
          },
          {
            title: "Day 12",
            description:
              "Discover the magnificent rock-hewn churches of Lalibela",
          },
          {
            title: "Day 13",
            description:
              "Excursion to Yemrhan Kristos and Nakuto Leab churches",
          },
          {
            title: "Day 14",
            description:
              "Fly back to Addis Ababa and depart with cherished memories of Ethiopia's geological wonders.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel for overnight accommodation. The city enjoys an excellent climate all year round, with an average temperature of 25°C (77°F).",
            "With a multiethnic population of over 5 million, Addis Ababa is a pleasant city with wide avenues of jacaranda trees, interesting museums, and one of the largest open-air markets in Africa, known as the “Mercato”. After your long flight and a welcome briefing, you can settle into your hotel for some rest. Overnight in Addis Ababa.",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: EXPLORE THE CITY OF ADDIS ABABA",
          description: [
            "Today you will spend the day exploring Addis Ababa, which begins with a visit to the Holy Trinity Cathedral. It is the most important Orthodox Church in Addis Ababa and has survived many historical periods, as its interesting architecture can attest. You proceed to visit the National Museum, one of the most important museums in Africa. The museum is home to the fossilized humanoid Lucy (3.5 million year- old fossil), as well as an amazing collection of artifacts, royal items, and art.",
            "After lunch, you will continue our visit to St. George’s Cathedral, built in 1896 by Emperor Menelik II. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees. Overnight in Addis Ababa.",
          ],
          image: images.addis4,
        },
        {
          title: "DAY 3: FLY TO BAHIR DAR & VISIT THE MONASTERIES ON LAKE TANA",
          description: [
            "Board a short flight to Bahir Dar where you are met and transferred to your hotel. Then you embark on a cruise of Lake Tana, the largest highland lake in Ethiopia, to visit monasteries dating back to the 14th century. Located on the forested Zege Peninsula, Azuwa Mariam is the most impressive of the southern monasteries. The walls of the church are completely covered with remarkable 16th-century murals that offer a revealing look into medieval Ethiopia.",
            "You then return to Bahir Dar for lunch at your hotel. Then you head into the colorful market. Later in the afternoon you drive up Bezawit Hill for impressive views over the town, the Blue Nile, and of Lake Tana with its island monasteries. We aim to get here shortly before sunset to enjoy the magnificent natural light show. Afterwards we return to our hotel. Overnight in Bahir Dar.",
          ],
          image: images.bahirdar3,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "This morning’s drive (180kms) takes you to Gondar, a site of wonders. After some time to rest and have lunch, you will spend today exploring city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful mural, cherubs and paintings. It rumored to have once been the proposed final resting place of the Ark of the Covenant. Overnight in Gonder.",
          ],
          image: images.gonder3,
        },
        {
          title: "DAY 5: DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning’s drive takes you to Simien Mountain National Park. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles.",
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers. We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer. Overnight in Simiens.",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 6: DRIVE TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "Today's half day long but scenic journey as you drives to Axum. The views in this remote part of Ethiopia are simply spectacular. The drive affords some excellent photo opportunities of the jagged the Simien Mountains and the Tekeze Valley. The route is dotted with intermittent mountain hamlets that add to the splendor of the scenery. Your journey brings you to the sacred city of Axum in the Tigrayan region.",
            "You will check in and have your lunch in the hotel. You will proceed to a half day city tour of Axum. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum.",
            "You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek. Overnight in Axum.",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 7: FLY TO LALIBELA & VISIT THE ROCK HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches. Lalibela indeed offers a great opportunity for any traveler.",
            "After check in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north – western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel and Bet Danaghel. Overnight in Lalibela.",
          ],
          image: images.lalibela2,
        },
        {
          title: "DAY 8: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela that include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches. Overnight in Lalibela.",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 9: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath.",
            "This large reservoir is an excellent place to observe the local women collecting water for washing. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek. After having a lunch break, continue on your visit to the church of Saint Mary of Zion.",
            "A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures.",
            "You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look. Overnight in Axum.",
          ],
          image: images.axum2,
        },
        {
          title: "DAY 10: DRIVE TO GHERALTA AREA",
          description: [
            "In the morning, continue your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures.",
            "You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look. After having a lunch break, you drive across the dramatic mountainous landscapes to Gheralta.",
            "On your way, you visit the Monastery of Abba Gerima which houses an impressive collection of ancient crosses, crowns, other artifacts, and the oldest illustrated Christian manuscripts dated to the fifth-sixth century. You arrive at the lodge in time to enjoy a beautiful Ethiopian sunset. Overnight in Gheralta.",
          ],
          image: images.tigray8,
        },
        {
          title: "DAY 11: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, head to explore the marvelous rock churches in the Gheralta cluster. A short drive takes you closer to the foot of Korkur Mountain. It is from here you start you hiking up to the plateau. Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches.",
            "The latter one is the smallest church and has a really beautiful view of the surrounding areas. Drive back to your lodge for lunch. In the afternoon drive to visit Mariam Papaseti church which is decorated with beautiful mural paintings. Overnight in Gheralta.",
          ],
          image: images.tigray9,
        },
        {
          title: "DAY 12: DRIVE TO THE DANAKIL DEPRESSION",
          description: [
            "After breakfast, spend the morning at your leisure which can be arranged for short hiking, bird watching, and visiting the nearby rock-hewn church.",
            "After lunch, you drive towards the Danakil region, stopping a number of times en route to take in the spectacular scenery. You arrive in time to enjoy a beautiful Ethiopian sunset over Lake Asale. Overnight camping in the Danakil.",
          ],
          image: images.danakil6,
        },
        {
          title: "DAY 13: EXPLORE THE DALLOL AREA & DRIVE TO MEKELLE",
          description: [
            "After an early light breakfast, you start driving to Dallol. It is like nowhere else; a bizarre landscape of colorful mineral deposits, sulfur pools, and geysers, where you will have this early morning to explore this seemingly alien terrain.",
            "You then visit the salt canyons, a bizarre landscape where we go for a short walk. On the way back to camp we cross the salt flats where we see the arduous work of salt being extracted by hand and loaded onto the camels.",
            "After freshening up and having lunch, we will leave the Danakil and climb the steep mountains to Mekele, climbing from 100 meters below sea level up to 2500m. Mekelle is the capital of the region. Overnight in Mekelle.",
          ],
          image: images.danakil5,
        },
        {
          title: "DAY 14: DRIVE TO LALIBELA VIA SEKOTA",
          description: [
            "A full day's drive today takes you to Lalibela via Sekota. En route visit the cave church of Yemrehane Kristos, built by the king of the same name before the reign of King Lalibela.",
            "The church is constructed inside a cave, in Axumite style, similar to the church at Debre Damo, with alternating levels of wood and stone. Finally, drive to Lalibela, the country’s heart of spirituality and architectural wonder. Overnight in Lalibela.",
          ],
          image: images.lalibela2,
        },
        {
          title: "DAY 15: VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "After breakfast, this morning was devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos.",
            "Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches. Overnight in Lalibela.",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 16: EXCURSION TO YEMRHAN KRISTOS & NAKUTO LEAB CHURCHES",
          description: [
            "This morning drive takes you to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style.",
            "It is renowned for its interior decoration, it’s beautiful wooden coffer ceiling inlaid with hexagons and medallions with both figurative and geometric motifs. Drive back to Lalibela for lunch. Late afternoon, you visit Nakuto Leab Monastery, which houses an impressive collection of ancient crosses and illustrated manuscripts. Overnight in Lalibela.",
          ],
          image: images.lalibela8,
        },
        {
          title: "DAY 17: FLY TO ADDIS & DEPARTURE",
          description: [
            "After breakfast, you transfer to the airport and take the short flight back to Addis Ababa and transfer you to your hotel. You have the afternoon free for shopping in Addis Ababa. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
];

export const getItinerary = (id: number, experience: number) => {
  const result = ExperiencesPackageItineraryArray.filter(
    (item) => item.id === id && item.experience === experience
  );
  if (result.length === 0) {
    return null;
  }
  return result[0];
};
