import Images from "./Images";

// Ethiopia tours route components import

interface Package {
  title: string;
  description: string;
  link: string;
  image: string;
  days?: number;
}
interface PackageName {
  title: string;
  link: string;
  image: string;
}

interface Route {
  title: string;
  link: string;
}
interface GridPackage {
  title: string;
  image: string;
  link: string;
}

// Packages Array

export const DestinationPackagesArray: Package[] = [
  {
    title: "Lalibela: \nA Journey to Ethiopia's Spiritual Heart",
    description:
      "Embark on a captivating journey to Lalibela, a destination that exudes faith, mystery, and rich legends. Nestled amidst expansive valleys and rugged escarpments, Lalibela stands as the vibrant heart of spiritual Ethiopia, captivating both the mind and the soul.",
    link: "/top-destinations/1",
    image: Images.lalibela2,
  },
  {
    title: "Simien Mountains: \nDiscover Africa's Sky-high Paradise",
    description:
      "Step into Ethiopia's well-kept secret, the Simien Mountains - a paradise perched high above the clouds, north of the ancient city of Gondar. This mesmerizing canvas of nature is a call to the heart of every wanderer, offering unparalleled landscapes, adrenaline-pumping trekking trails, and heart-stopping wildlife rendezvous. Traverse 220 square kilometers of stunning summits, sprawling plateaus, and verdant valleys. Delve into the pristine wilderness of Africa's most splendid mountain range.",
    link: "/top-destinations/2",
    image: Images.simien2,
  },
  {
    title: "Danakil Depression: \nThe Surreal Symphony of Fire and Brine!",
    description:
      "The otherworldly Danakil Depression is an awe-inspiring geological wonder that stands as one of the most unique environments on Earth. This extraordinary destination, known as the 'hottest place on the planet,' is home to salt lakes, lava lakes, volcanoes, and vibrant acidic springs, offering a truly captivating and alien experience.",
    link: "/top-destinations/3",
    image: Images.danakil1,
  },
  {
    title: "Omo Valley: \nA Melting Pot of Ancient Cultures",
    description:
      "Journey to the captivating Omo Valley, where you'll be immersed in the traditions and diversity of the 88 cultural communities that call this remote corner of Ethiopia home. Known for its rich cultural heritage and tribal tapestry, the Omo Valley stands as a timeless crossroads of humanity, inviting you to experience a way of life steeped in history and authenticity.",
    link: "/top-destinations/4",
    image: Images.omo1,
  },
  {
    title:
      "Tigray: \nAn Oasis of Culture Cradled in the Heart of History" /*Where History and Natural Beauty Unite*/,
    description:
      "Tigray is a land steeped in history and blessed with rich culture and awe-inspiring landscapes. This captivating region invites you to embark on a journey of discovery, where ancient rock churches, people with rich culture, stunning vistas, and luxurious lodges await. Immerse yourself in the rich heritage of Tigray, where every step unveils the secrets of a bygone era.",
    link: "/top-destinations/5",
    image: Images.tigray1,
  },
  {
    title:
      "Bahir Dar: \nA Mosaic of Monastic Magic and Mother Nature's Majesty!",
    description:
      "Bahir Dar is a picturesque city nestled on the shores of the magnificent Lake Tana in Ethiopia. This vibrant destination, known for its historic monasteries, charming lodges, vibrant local markets, beautiful lakes, and the renowned Blue Nile Falls, will leave you awe-inspired at every turn.",
    link: "/top-destinations/6",
    image: Images.bahirdar1,
  },
  {
    title: "Gonder: \nWhere African Allure Meets Medieval Majesty!",
    description:
      'Gonder is a captivating city in northern Ethiopia. Known as the "Camelot of Africa," Gonder\'s rich history and magnificent architectural wonders will transport you to a bygone era.',
    link: "/top-destinations/7",
    image: Images.gonder1,
  },
  {
    title:
      "Bale Mountains National Park: \nAn Eden of Exotic Ecosystems and Endemic Encounters",
    description:
      "Bale Mountains National Park is one of Ethiopia's most captivating destinations. With its lush jungles, endemic wildlife, breathtaking vistas, boutique lodges, and exhilarating hiking routes, the Bale Mountains offer an unparalleled adventure in the heart of nature.",
    link: "/top-destinations/8",
    image: Images.bale1,
  },
  {
    title:
      "Chebera Churchura National Park: \nEmbrace Ethiopia's Unspoiled Wilderness",
    description:
      "Prepare to embark on an extraordinary journey into the untouched wilderness of Ethiopia at Chebera Churchura National Park. Immerse yourself in stunning landscapes, encounter unique wildlife, and embark on thrilling adventures that will leave an indelible mark on your soul. Get ready for an unforgettable experience that will awaken your sense of wonder.",
    link: "/top-destinations/9",
    image: Images.chebera1,
  },
  {
    title: "Axum: \nThe Ancient Capital of Ethiopia",
    description:
      "Axum is the fascinating ancient capital of Ethiopia. Steeped in history and cultural significance, this vibrant city will transport you back in time to the days of the legendary Axumite Empire. Explore the relics that have stood the test of time and unravel the mysteries of this remarkable destination.",
    link: "/top-destinations/10",
    image: Images.axum2,
  },
  {
    title: "Harar: \nA Journey to Ancient Splendor",
    description:
      "Step into the enchanting city of Harar, one of Ethiopia's oldest and most revered destinations. This UNESCO World Heritage Site, nestled on the eastern border of the Somali region, offers a spiritual ambiance that transports you back to medieval times, immersing you in a unique atmosphere found nowhere else in Ethiopia.",
    link: "/top-destinations/11",
    image: Images.harar1,
  },
  {
    title:
      "Gambella National Park: \nAn untouched gem teeming with nature's grandeur",
    description:
      "Tucked away in the intriguing southwestern extremity of Ethiopia lies Gambella National Park - an untouched gem teeming with nature's grandeur. Straddling the serpentine Baro River, Gambella is a thrilling revelation of diverse cultures and landscapes that provoke nothing less than pure wonder.",
    link: "/top-destinations/12",
    image: Images.gambella1,
  },
  {
    title:
      "Kafta Shiraro National Park: \nMarvel at Africa's Wild Northern Frontier",
    description:
      "Step into the unspoiled heart of Ethiopia's wilderness at Kafta Shiraro National Park, a refuge for the largest population of Heuglin’s Gazelles globally and the northernmost African elephants.",
    link: "/top-destinations/13",
    image: Images.kafta1,
  },
  {
    title:
      "Awash National Park & Alledeghi Plains: \nEthiopia's Hidden Treasures",
    description:
      "Journey into Ethiopia's unsung wonders, where Awash National Park entwines with the raw and uncharted Alledeghi Plains, a stunning wildlife reserve. Set your compass 225 kilometers east of Addis Ababa, towards a landscape punctuated by the ebb and flow of the Awash River, and encircled by the dynamic Afar Region and the mysterious Danakil.",
    link: "/top-destinations/14",

    image: Images.awash1,
  },
  {
    title:
      "Addis Ababa: \nCoffee, Culture, and Cathedrals Beckon in Ethiopia's Bustling Capital",
    description:
      'Addis Ababa is the world\'s third-highest capital city, sitting at 2,665 meters above sea level, and it has a rich history dating back to its founding by Emperor Menelik in 1892. The city is continuously changing, with new buildings and structures being constructed every day, making it a fascinating place to visit for more than just a quick stopover. The national language, Amharic, is widely spoken, but English, French, Italian, and Arabic are also common in the city. With a multitude of ethnic groups and a diverse foreign population, Addis Ababa truly represents the "rich cultural mosaic" of Ethiopia, as historian Carlo Conti Rossini once put it.',
    link: "/top-destinations/15",
    image: Images.addis2,
  },
];

export const DestinationPackagesNameArray: PackageName[] = [
  {
    title: "Lalibela",
    link: "/top-destinations/1",
    image: Images.lalibela1,
  },
  {
    title: "Simien Mountains",
    link: "/top-destinations/2",
    image: Images.simien2,
  },
  {
    title: "Danakil Depression",
    link: "/top-destinations/3",
    image: Images.danakil1,
  },
  {
    title: "Omo Valley",
    link: "/top-destinations/4",
    image: Images.omo1,
  },
  {
    title: "Tigray",
    link: "/top-destinations/5",
    image: Images.tigray1,
  },
  {
    title: "Bahir Dar",

    link: "/top-destinations/6",
    image: Images.bahirdar1,
  },
  {
    title: "Gonder",
    link: "/top-destinations/7",
    image: Images.gonder1,
  },
  {
    title: "Bale Mountains",
    link: "/top-destinations/8",
    image: Images.bale1,
  },
  {
    title: "Chebera Churchura",
    link: "/top-destinations/9",
    image: Images.chebera1,
  },
  {
    title: "Axum",
    link: "/top-destinations/10",
    image: Images.axum2,
  },
  {
    title: "Harar",
    link: "/top-destinations/11",
    image: Images.harar1,
  },
  {
    title: "Gambella",
    link: "/top-destinations/12",
    image: Images.gambella1,
  },
  {
    title: "Kafta Shiraro",
    link: "/top-destinations/13",
    image: Images.kafta1,
  },
  {
    title: "Awash National Park",
    link: "/top-destinations/14",
    image: Images.awash1,
  },
  {
    title: "Addis Ababa",
    link: "/top-destinations/15",
    image: Images.addis2,
  },
];
export const EthiopiaTourPackagesArray: Package[] = [
  {
    title: "Historic Tours in Ethiopia",
    description:
      "Embark on an extraordinary journey through Ethiopia's Historic tours, where ancient wonders and vibrant cultures intertwine harmoniously. These offer an unforgettable odyssey, celebrating a rich history and diverse cultures.",
    link: "/ethiopia-tours/1",
    image: Images.lalibela1,
  },
  {
    title: "Tribal Ethiopia Tours",
    description:
      "Dive into the unique cultural kaleidoscope of Ethiopia's Tribal Tours. Explore vibrant traditions, breathtaking vistas, and fascinating wildlife in Africa's heartland. Immerse in the dynamic spirit of Ethiopia, an unforgettable journey awaits! Make this radiant journey your next adventure - it's a celebration of diversity at every step.",
    link: "/ethiopia-tours/2",
    image: Images.benna1,
  },
  {
    title: "Festivals and Special Events",
    description:
      "Experience the vibrant world of Ethiopian festivals, where ancient traditions come alive through colorful celebrations and powerful spiritual energy. Immerse yourself in the heart and soul of Ethiopian culture, creating unforgettable moments that will stay with you forever.",
    link: "/ethiopia-tours/3",
    image: Images.gonder2,
  },
  {
    title: "Adventure Tours in Ethiopia",
    description:
      "A thrilling experience for those seeking an adrenaline-packed vacation. The tours include trekking through stunning landscapes, such as the Simien and Bale Mountains, where you will encounter unique flora and fauna, including the iconic Gelada baboons and the elusive Ethiopian wolf. For rock climbers, experienced guides will help navigate the challenging terrain, ensuring safety at all times. Paragliding tours offer a chance to soar above Ethiopia's stunning landscapes, while white water rafting tours provide a wild ride through thrilling rapids. Hot air ballooning tours offer a tranquil journey through Ethiopia's skies, providing breathtaking views of the country's majestic landscapes. Throughout your journey, our experienced guides will ensure your safety and comfort. Come explore the wild side of Ethiopia and discover the adventure of a lifetime!",
    link: "/ethiopia-tours/4",
    image: Images.abay1,
  },
  {
    title: "Photography Tours in Ethiopia",
    description:
      "A paradise for photographers. Capture stunning images of the fine church architecture of Lalibela, the breathtaking landscapes of the Ethiopian Highlands, vibrant festivals, bustling local markets, the unique lifestyles of the Omo Valley tribes, and the colorful birdlife of Ethiopia. The opportunities for capturing stunning photographs in Ethiopia are endless, and we at Sawla Tours are dedicated to providing exceptional tour itineraries that cater specifically to the needs of photographers.",
    link: "/ethiopia-tours/5",
    image: Images.yemata1,
  },
  {
    title: "Birdwatching Tours in Ethiopia",
    description:
      "Ethiopia, a haven for bird enthusiasts, unveils a treasure trove of avian wonders. From the endemic Ethiopian Siskin to the elusive Blue-winged Goose, the country's diverse landscapes and abundant habitats make it a paradise for birding, offering a feast for both the eyes and the soul.",
    link: "/ethiopia-tours/6",
    image: Images.bird1,
  },
  {
    title: "Wildlife Tours in Ethiopia",
    description:
      "Ethiopia is a country with diverse landscapes and abundant wildlife. If you are a wildlife enthusiast, you are in for a treat. Ethiopia offers some of the best wildlife tours in Africa, with its stunning national parks, game reserves, and sanctuaries that provide visitors with an opportunity to see a wide range of animals in their natural habitat.",
    link: "/ethiopia-tours/7",
    image: Images.kafta1,
  },
  {
    title: "Special Interest Tours in Ethiopia",
    description:
      "Special interest tours in Ethiopia offer travelers the opportunity to delve deeper into the country's unique culture, history, and natural wonders based on their interests. Ethiopia is a country of diverse landscapes, cultures, and traditions, and special interest tours can help travelers to explore and experience the country's hidden gems in a more meaningful way.",
    link: "/ethiopia-tours/8",
    image: Images.danakil1,
  },
  {
    title: "Business Trips or Short Day Tours in Ethiopia",
    description:
      "Are you looking for a way to make the most of your short stay in Ethiopia? Whether you're in Addis Ababa for a meeting or simply passing through, we've got you covered. Our team can help you plan an unforgettable day or multi-day tour, tailored to your specific budget and time constraints.",
    link: "/ethiopia-tours/9",
    image: Images.addis1,
  },
  {
    title: "Filming in Ethiopia",
    description:
      "If you need a fixer in Ethiopia, Sawla Tours is a one-stop shop for in-country media production services and location logistics. We have extensive experience in every aspect of press, film, and TV production. Whether you are developing a documentary series, feature film, music video, natural history program, commercial, or reality TV show; or planning a scientific research journey, a fashion shoot, a charity event or an expedition - Sawla Tours can make it happen.",
    link: "/ethiopia-tours/10",
    image: Images.bale1,
  },
];
export const ToursByExperienceArray: Package[] = [
  {
    title: "Historic & Cultural Tours",
    description:
      "Embark on an extraordinary journey through Ethiopia's Historic Tours, where ancient wonders and vibrant cultures intertwine harmoniously. Discover the storied treasures that define Ethiopia's identity, from the rock-hewn churches of Tigray to the awe-inspiring city of Axum. Traverse the famed Historic Route, immersing yourself in architectural marvels and breathtaking landscapes, while uncovering hidden gems that captivate the intrepid explorer. Ethiopia's Historic and Cultural Tours offer an unforgettable odyssey, celebrating a rich history and diverse cultures untouched by colonialism.",
    link: "/tours-by-experience/1",
    image: Images.axum2,
  },
  {
    title: "Tribal Ethiopia Tours",
    description:
      "Explore the richness of Ethiopia's Cultural Tours, where diverse cultures converge. Experience the vibrant tapestry of cultural diversity unlike anywhere else in Africa. From stunning landscapes to iconic monuments and fascinating wildlife, every part of your journey is infused with a vibrant cultural essence that brings it to life.",
    link: "/tours-by-experience/2",
    image: Images.benna1,
  },
  {
    title: "Ethiopia Festival Tours",
    description:
      "Experience the vibrant world of Ethiopian festivals, where ancient traditions come alive through colorful celebrations and powerful spiritual energy. Immerse yourself in the heart and soul of Ethiopian culture, creating unforgettable moments that will stay with you forever.",
    link: "/tours-by-experience/3",
    image: Images.gonder2,
  },
  {
    title: "Adventure Tours",
    description:
      "The Adventure Tours in Ethiopia offer a thrilling experience for those seeking an adrenaline-packed vacation. The tours include trekking through stunning landscapes, such as the Simien and Bale Mountains, where you will encounter unique flora and fauna, including the iconic Gelada baboons and the elusive Ethiopian wolf. For rock climbers, experienced guides will help navigate the challenging terrain, ensuring safety at all times. Paragliding tours offer a chance to soar above Ethiopia's stunning landscapes, while white water rafting tours provide a wild ride through thrilling rapids. Hot air ballooning tours offer a tranquil journey through Ethiopia's skies, providing breathtaking views of the country's majestic landscapes. Throughout your journey, experienced guides will ensure your safety and comfort. Come explore the wild side of Ethiopia and discover the adventure of a lifetime!",
    link: "/tours-by-experience/4",
    image: Images.paragliding1,
  },
  {
    title: "Photography Tours",
    description:
      "Photography tour in Ethiopia, a paradise for photographers. Capture stunning images of the fine church architecture of Lalibela, the breathtaking landscapes of the Ethiopian Highlands, vibrant festivals, bustling local markets, the unique lifestyles of the Omo Valley tribes, and the colorful birdlife of Ethiopia. The opportunities for capturing stunning photographs in Ethiopia are endless, and we at Sawla Tours are dedicated to providing exceptional tour itineraries that cater specifically to the needs of photographers.",
    link: "/tours-by-experience/5",
    image: Images.intro2,
  },

  {
    title: "Birdwatching Tours",
    description:
      "Ethiopia, a haven for bird enthusiasts, unveils a treasure trove of avian wonders. From the endemic Ethiopian Siskin to the elusive Blue-winged Goose, the country's diverse landscapes and abundant habitats make it a paradise for birding, offering a feast for both the eyes and the soul.",
    link: "/tours-by-experience/6",
    image: Images.bird2,
  },
  {
    title: "Wildlife",
    description:
      "Ethiopia is a country with diverse landscapes and abundant wildlife. If you are a wildlife enthusiast, you are in for a treat. Ethiopia offers some of the best wildlife tours in Africa, with its stunning national parks, game reserves, and sanctuaries that provide visitors with an opportunity to see a wide range of animals in their natural habitat.",
    link: "/tours-by-experience/7",
    image: Images.simien5,
  },
  {
    title: "Business Trip",
    description:
      "Unveil the wonders of Ethiopia even with limited time, as we curate unforgettable short-duration trips tailored to your schedule",
    link: "/tours-by-experience/8",
    image: Images.addis1,
  },
  {
    title: "Special Interest",
    description:
      "Special interest tours in Ethiopia offer travelers the opportunity to delve deeper into the country's unique culture, history, and natural wonders based on their interests. Ethiopia is a country of diverse landscapes, cultures, and traditions, and special interest tours can help travelers to explore and experience the country's hidden gems in a more meaningful way.",
    link: "/tours-by-experience/9",
    image: Images.bale1,
  },
];
export const EthiopiaGuideArray: Package[] = [
  {
    title: "Ethiopia Travel Circuits",
    description:
      "In this diverse and awe-inspiring nation, you'll uncover the secrets of four distinct travel circuits, each with its own highlight destinations and unique experiences. From the timeless tapestry of the Northern Circuit, where ancient wonders and natural marvels await, to the Southern Circuit's canvas of breathtaking landscapes and vibrant cultures, Ethiopia has something for every traveler. Venture into the Eastern Circuit, where hidden gems and remarkable diversity abound, or unleash your adventurous spirit in the Western Circuit, where untamed beauty and rare encounters await. So, browse through the information on each circuit's highlight destinations and embark on a journey that will create memories to last a lifetime. Your Ethiopian journey begins in Addis Ababa, the gateway to this mesmerizing land.",
    link: "/ethiopia-guide/1",
    image: Images.lalibela4,
  },
  {
    title: "When to Visit Ethiopia",
    description:
      "Ethiopia, a land of diverse landscapes and vibrant cultures, welcomes visitors year-round. However, to make the most of your journey, it's essential to consider the distinct seasonal characteristics of each region. Let's explore the best time to visit Ethiopia and uncover the captivating experiences that await you.",
    link: "/ethiopia-guide/2",
    image: Images.gonder3,
  },
  {
    title: "How to get to Ethiopia",
    description:
      "If you're looking to travel to Ethiopia, you're in luck - this African nation has a variety of transport links to many major destinations around the world. Whether you're flying from the UK or Ireland, America or Canada, Europe, Asia or South America, there are plenty of routes to get you where you need to go.",
    link: "/ethiopia-guide/3",
    image: Images.simien4,
  },
  {
    title: "Hotels and Lodges in Ethiopia",
    description:
      "Experience a diverse range of accommodation options in Ethiopia, from vibrant cities to off-the-beaten-path locations. Whether you seek budget-friendly hotels or luxurious retreats, Sawla Tours offers a selection of intimate and environmentally conscious lodges to enhance your stay.",
    link: "/ethiopia-guide/4",
    image: Images.addis2,
  },

  {
    title: "Ethiopia Safaris",
    description:
      "Embark on an extraordinary safari adventure in Ethiopia, where rarity, endemism, and biodiversity take center stage. From the awe-inspiring Simien Mountains to the captivating Bale Mountains and the untouched wilderness of Gambella National Park, Ethiopia offers a safari experience like no other.",
    link: "/ethiopia-guide/5",
    image: Images.simien5,
  },
  {
    title: "Popular Wildlife in Ethiopia",
    description:
      "Discover the captivating wildlife of Ethiopia, a country brimming with biodiversity and boasting numerous endemic species. At Sawla Tours, we are dedicated to providing immersive experiences that allow you to witness these magnificent animals in their natural habitats while ensuring their well-being. With 14 major wildlife reserves, Ethiopia is a haven for over 300 mammal species, including 39 that are found exclusively within its borders.",
    link: "/ethiopia-guide/6",
    image: Images.simien1,
  },
  {
    title: "Safety in Ethiopia",
    description:
      "At Sawla Tours, our priority is to provide you with a safe and enjoyable journey. With our trusted guides, reliable vehicles, and well-crafted itineraries, we ensure your Ethiopian adventure is not only memorable but secure. As one of Africa's safest destinations for tourists, we're here to make your trip even better.",
    link: "/ethiopia-guide/7",
    image: Images.addis1,
  },
  {
    title: "How to Plan a Trip",
    description:
      "There's a lot on offer in Ethiopia. Planning the perfect trip is tremendously exciting, but it can be hard to know where to start. Read this quick guide to planning your Ethiopia adventure, then give our specialists a call or inbox us.",
    link: "/ethiopia-guide/8",
    image: Images.bahirdar1,
  },
  {
    title: "General Travel Tips",
    description:
      "Ethiopia is a truly remarkable destination that stands apart from any other place on Earth. Unlike most African countries, it has never been colonized by Europeans, which has helped preserve its rich cultural identity. From its incredible people to its breathtaking landscapes and diverse wildlife, Ethiopia offers an extraordinary travel experience that is truly one-of-a-kind.",
    link: "/ethiopia-guide/9",
    image: Images.bird1,
  },
];
// Packages Simplified title

export const EthiopiaTourPackagesArraySimplified: Package[] = [
  {
    title: "Historic Tours",
    description:
      "Embark on an extraordinary journey through Ethiopia's Historic tours, where ancient wonders and vibrant cultures intertwine harmoniously. These offer an unforgettable odyssey, celebrating a rich history and diverse cultures.",
    link: "/ethiopia-tours/1",
    image: Images.axum2,
  },
  {
    title: "Tribal Tours",
    description:
      "Dive into the unique cultural kaleidoscope of Ethiopia's Tribal Tours. Explore vibrant traditions, breathtaking vistas, and fascinating wildlife in Africa's heartland. Immerse in the dynamic spirit of Ethiopia, an unforgettable journey awaits! Make this radiant journey your next adventure - it's a celebration of diversity at every step.",
    link: "/ethiopia-tours/2",
    image: Images.benna1,
  },
  {
    title: "Festival, Special Events",
    description:
      "Experience the vibrant world of Ethiopian festivals, where ancient traditions come alive through colorful celebrations and powerful spiritual energy. Immerse yourself in the heart and soul of Ethiopian culture, creating unforgettable moments that will stay with you forever.",
    link: "/ethiopia-tours/3",
    image: Images.gonder2,
  },
  {
    title: "Adventure Tours",
    description:
      "A thrilling experience for those seeking an adrenaline-packed vacation. The tours include trekking through stunning landscapes, such as the Simien and Bale Mountains, where you will encounter unique flora and fauna, including the iconic Gelada baboons and the elusive Ethiopian wolf. For rock climbers, experienced guides will help navigate the challenging terrain, ensuring safety at all times. Paragliding tours offer a chance to soar above Ethiopia's stunning landscapes, while white water rafting tours provide a wild ride through thrilling rapids. Hot air ballooning tours offer a tranquil journey through Ethiopia's skies, providing breathtaking views of the country's majestic landscapes. Throughout your journey, our experienced guides will ensure your safety and comfort. Come explore the wild side of Ethiopia and discover the adventure of a lifetime!",
    link: "/ethiopia-tours/4",
    image: Images.abay1,
  },
  {
    title: "Photography Tours",
    description:
      "A paradise for photographers. Capture stunning images of the fine church architecture of Lalibela, the breathtaking landscapes of the Ethiopian Highlands, vibrant festivals, bustling local markets, the unique lifestyles of the Omo Valley tribes, and the colorful birdlife of Ethiopia. The opportunities for capturing stunning photographs in Ethiopia are endless, and we at Sawla Tours are dedicated to providing exceptional tour itineraries that cater specifically to the needs of photographers.",
    link: "/ethiopia-tours/5",
    image: Images.yemata1,
  },
  {
    title: "Birdwatching Tours",
    description:
      "Ethiopia, a haven for bird enthusiasts, unveils a treasure trove of avian wonders. From the endemic Ethiopian Siskin to the elusive Blue-winged Goose, the country's diverse landscapes and abundant habitats make it a paradise for birding, offering a feast for both the eyes and the soul.",
    link: "/ethiopia-tours/6",
    image: Images.bird1,
  },
  {
    title: "Wildlife Tours",
    description:
      "Ethiopia is a country with diverse landscapes and abundant wildlife. If you are a wildlife enthusiast, you are in for a treat. Ethiopia offers some of the best wildlife tours in Africa, with its stunning national parks, game reserves, and sanctuaries that provide visitors with an opportunity to see a wide range of animals in their natural habitat.",
    link: "/ethiopia-tours/7",
    image: Images.kafta1,
  },
  {
    title: "Special Interest Tours",
    description:
      "Special interest tours in Ethiopia offer travelers the opportunity to delve deeper into the country's unique culture, history, and natural wonders based on their interests. Ethiopia is a country of diverse landscapes, cultures, and traditions, and special interest tours can help travelers to explore and experience the country's hidden gems in a more meaningful way.",
    link: "/ethiopia-tours/8",
    image: Images.danakil1,
  },
  {
    title: "Business, Short Trips",
    description:
      "Are you looking for a way to make the most of your short stay in Ethiopia? Whether you're in Addis Ababa for a meeting or simply passing through, we've got you covered. Our team can help you plan an unforgettable day or multi-day tour, tailored to your specific budget and time constraints.",
    link: "/ethiopia-tours/9",
    image: Images.addis1,
  },
  {
    title: "Filming in Ethiopia",
    description:
      "If you need a fixer in Ethiopia, Sawla Tours is a one-stop shop for in-country media production services and location logistics. We have extensive experience in every aspect of press, film, and TV production. Whether you are developing a documentary series, feature film, music video, natural history program, commercial, or reality TV show; or planning a scientific research journey, a fashion shoot, a charity event or an expedition - Sawla Tours can make it happen.",
    link: "/ethiopia-tours/10",
    image: Images.bale1,
  },
];

// Routes Array

export const EthiopiaTourPackagesRoutes: Route[] =
  EthiopiaTourPackagesArray.map((item) => {
    return {
      title: item.title,
      link: item.link,
    };
  });
export const TopDestinationsRoutes: Route[] = [
  {
    title: "Lalibela",
    link: "/top-destinations/1",
  },
  {
    title: "Simien Mountains",
    link: "/top-destinations/2",
  },
  {
    title: "Danakil Depression",
    link: "/top-destinations/3",
  },
  {
    title: "Omo Valley",
    link: "/top-destinations/4",
  },
  {
    title: "Tigray",
    link: "/top-destinations/5",
  },
  {
    title: "Bahir Dar",
    link: "/top-destinations/6",
  },
  {
    title: "Gonder",
    link: "/top-destinations/7",
  },
  {
    title: "Bale Mountains",
    link: "/top-destinations/8",
  },
  {
    title: "Chebera Churchura",
    link: "/top-destinations/9",
  },
  {
    title: "Axum",
    link: "/top-destinations/10",
  },
  {
    title: "Harar",
    link: "/top-destinations/11",
  },
  {
    title: "Gambella",
    link: "/top-destinations/12",
  },
  {
    title: "Kafta Shiraro",
    link: "/top-destinations/13",
  },
  {
    title: "Awash National Park",
    link: "/top-destinations/14",
  },
  {
    title: "Addis Ababa",
    link: "/top-destinations/15",
  },
];
export const ToursByExperienceRoutes: Route[] = [
  {
    title: "Historic and Cultural Tours",
    link: "/tours-by-experience/1",
  },
  {
    title: "Tribal Ethiopia Tours",
    link: "/tours-by-experience/2",
  },
  {
    title: "Ethiopia Festival Tours",
    link: "/tours-by-experience/3",
  },
  {
    title: "Adventure Tours",
    link: "/tours-by-experience/4",
  },
  {
    title: "Photography Tours",
    link: "/tours-by-experience/5",
  },
  {
    title: "Birdwatching Tours",
    link: "/tours-by-experience/6",
  },
  {
    title: "Wildlife",
    link: "/tours-by-experience/7",
  },
  {
    title: "Business Trip",
    link: "/tours-by-experience/8",
  },
  {
    title: "Special Interest",
    link: "/tours-by-experience/9",
  },
];
export const EthiopiaGuideRoutes: Route[] = [
  {
    title: "Ethiopia Travel Circuits",
    link: "/ethiopia-guide/1",
  },
  {
    title: "When to Visit Ethiopia",
    link: "/ethiopia-guide/2",
  },
  {
    title: "How to Get to Ethiopia",
    link: "/ethiopia-guide/3",
  },
  {
    title: "Hotels and Lodges",
    link: "/ethiopia-guide/4",
  },
  {
    title: "Ethiopia Safaris",
    link: "/ethiopia-guide/5",
  },
  {
    title: "Popular Wildlife in Ethiopia",
    link: "/ethiopia-guide/6",
  },
  {
    title: "Safety in Ethiopia",
    link: "/ethiopia-guide/7",
  },
  {
    title: "How to Plan Your Trip",
    link: "/ethiopia-guide/8",
  },

  {
    title: "General Travel Tips",
    link: "/ethiopia-guide/9",
  },
];

// Grid Packages Array

export const GridPackagesArray: GridPackage[] = [
  {
    title: "Ethiopia Tour Themes",
    image: Images.simien2,
    link: "/ethiopia-tours",
  },
  {
    title: "Popular Destinations",
    image: Images.lalibela4,
    link: "/top-destinations",
  },
  {
    title: "Itineraries By Experience",
    image: Images.lalibela2,
    link: "/tours-by-experience",
  },
  {
    title: "Ethiopia Guide",
    image: Images.gonder3,
    link: "/ethiopia-guide",
  },
];

// Historic and Cultural Tours Array

export const HistoricAndCulturalToursArray: Package[] = [
  {
    title: "Footsteps of History: \nUnveiling Ethiopia's Ancient Legacy",
    description:
      "A captivating 8-day journey through Ethiopia, where the echoes of ancient civilizations and the grandeur of nature converge. This thoughtfully crafted tour invites history enthusiasts to delve into the rich cultural heritage of Ethiopia, from the vibrant streets of Addis Ababa to the architectural wonders of Gonder and the awe-inspiring rock-hewn churches of Lalibela. Traverse the majestic Simien Mountains, walking amidst breathtaking plateaus and gorges. Each destination on this itinerary reveals the storied past of Ethiopia, offering a profound understanding of its historical significance. Join us on this enchanting expedition as we unravel the ancient secrets and monumental legacies of this extraordinary land.",
    link: "/tours-by-experience/historic-and-cultural/footsteps-of-history",
    image: Images.axum3,
    days: 8,
  },
  {
    title: "Ethiopian Odyssey: \nFrom Ancient Churches to Majestic Landscapes",
    description:
      "An expedition through Ethiopia's ancient wonders, tailored for the passionate historic enthusiast. This immersive tour unveils the country's rich cultural heritage, from the bustling city of Addis Ababa to the enchanting rock-hewn churches of Lalibela, the royal castles of Gonder, and the UNESCO World Heritage Sites of Axum and Harar. Along the way, we'll delve into the majestic Simien Mountains National Park, visit isolated churches on Lake Tana, and explore the fascinating Tigray rock churches. From remarkable architecture to mystical landscapes, this journey will transport you back in time and leave you in awe of Ethiopia's enduring historical legacy.",
    link: "/tours-by-experience/historic-and-cultural/ethiopian-odyssey-1",
    image: Images.lalibela5,
    days: 12,
  },
  {
    title:
      "Ethiopian Odyssey: \nUnveiling Ancient Churches and Majestic Landscapes",
    description:
      "A captivating 11-day journey through Ethiopia, a land steeped in history and adorned with breathtaking landscapes that will leave you spellbound. This thoughtfully curated itinerary takes you on an immersive exploration of Ethiopia's cultural heritage and natural wonders. From the bustling streets of Addis Ababa to the tranquil shores of Lake Tana, discover the hidden gems of this enchanting country. Marvel at the medieval castles and ornate churches of Gondar, once the royal capital. Immerse yourself in the awe-inspiring beauty of the Simien Mountains, where panoramic vistas and abundant wildlife await your discovery. Experience the architectural marvels of Lalibela's rock-hewn churches, carved meticulously from solid volcanic rock. Explore the ancient treasures of Axum, where legends of the Queen of Sheba and the Ark of the Covenant come to life. Delve into the mystical allure of the Gheralta area, home to the enigmatic Tigray rock churches. As your journey draws to a close, you'll return to Addis Ababa, carrying with you the indelible memories of Ethiopia's timeless charm and spiritual grandeur.",
    link: "/tours-by-experience/historic-and-cultural/ethiopian-odyssey-2",
    image: Images.yemata2,
    days: 11,
  },
  {
    title:
      "Ethiopian Splendors: \nUnveiling Ancient Wonders and Natural Beauty",
    description:
      "An unforgettable 11-day journey through Ethiopia, a land of ancient wonders and breathtaking landscapes. This meticulously crafted itinerary that promises an extraordinary adventure. From the vibrant capital of Addis Ababa to the serene shores of Lake Tana, prepare to immerse yourself in the rich cultural tapestry and awe-inspiring beauty of this remarkable country. Explore the medieval castles and ornate churches of Gondar, known as the \"Camelot of Africa.\" Marvel at the majestic Simien Mountains, where dramatic scenery and endemic wildlife captivate the senses. Experience the ethereal allure of Lalibela's rock-hewn churches, masterpieces carved into solid volcanic rock. Journey to Axum, the ancient capital of the Aksumite Empire, and trace the footsteps of legendary Queen of Sheba. Delve into the mystique of the Tigray region, where hidden rock-hewn treasures await discovery. As your journey draws to a close, you'll return to Addis Ababa, carrying cherished memories of Ethiopia's timeless wonders.",
    link: "/tours-by-experience/historic-and-cultural/ethiopian-splendors",
    image: Images.lalibela4,
    days: 11,
  },
  {
    title:
      "Ethiopian Odyssey: \nUnveiling Ancient Marvels and Majestic Landscapes",
    description:
      'Embark on a captivating journey through the heart of Ethiopia, where ancient wonders and awe-inspiring landscapes await your discovery. From the bustling streets of Addis Ababa to the tranquil shores of Lake Tana, prepare to immerse yourself in the captivating cultural heritage and breathtaking beauty of this extraordinary nation. Explore the medieval castles and magnificent churches of Gondar, often referred to as the "Camelot of Africa." Traverse the dramatic landscapes of the Simien Mountains National Park, a UNESCO World Heritage Site, where encounters with endemic wildlife and sweeping vistas will leave you spellbound. Discover the ancient wonders of Axum, the legendary capital of the Aksumite Empire, and be awestruck by the rock-hewn churches of Lalibela, a testament to human ingenuity and devotion. Your journey will also take you to the enigmatic Tigray region, where hidden rock-hewn treasures await, before culminating in Addis Ababa, where you\'ll bid farewell to this captivating land.',
    link: "/tours-by-experience/historic-and-cultural/ethiopian-odyssey-3",
    image: Images.danakil3,
    days: 13,
  },
  {
    title: "Journey Through Time: \nUnveiling Ethiopia's Historic Treasures",
    description:
      "An extraordinary adventure through the captivating history of Ethiopia with our meticulously crafted itinerary. This trip is tailored for the avid historic enthusiast, offering a unique opportunity to explore the country's ancient sites, rock-hewn churches, and legendary landmarks. Immerse yourself in the rich cultural tapestry of Ethiopia as we take you on a journey through time, unveiling the secrets of centuries past. From Addis Ababa to Gonder, Lalibela to Axum, and Harar, each destination holds its own mesmerizing tales waiting to be discovered. Join us as we delve into Ethiopia's architectural wonders, religious artifacts, and majestic landscapes, creating memories that will last a lifetime.",
    link: "/tours-by-experience/historic-and-cultural/journey-through-time",
    image: Images.axum4,
    days: 11,
  },
];
