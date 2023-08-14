import Images from "./Images";

export interface Tour {
  id: number;
  experience?: number;
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
  map?: {
    title: string;
    description: string;
    image: string;
  };
  tourdescription?: {
    title: string;
    description: string[];
    image: string;
  };
  tourdescription2?: {
    title: string;
    destinations: {
      title: string;
      description: string;
    }[];
    description: string;
  };
  itinerarydescription?: {
    title: string;
    description?: string[];
    itineraries?: {
      title: string;
      description: string[];
      image: string;
    }[];
  }[];
}

export const EthiopiaToursArray: Tour[] = [
  {
    id: 1,
    experience: 1,
    title: "Historic Ethiopia Tours",
    description:
      "The Historic Tour is a journey through Ethiopia's rich and fascinating history. The tour includes visits to the ancient capital of Axum, the Blue Nile Falls, the castles of Gondar, the rock-hewn churches of Lalibela, and the walled city of Harar.",
    image: Images.gonder4,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "The Extraordinary journey through Ethiopia's Historic Sites",
        description: [
          "Embark on an extraordinary journey through Ethiopia's Historic Tours, where ancient wonders and vibrant cultures intertwine harmoniously. Discover the storied treasures that define Ethiopia's identity, from the rock-hewn churches of Tigray to the awe-inspiring city of Axum.",
          "Traverse the famed Historic Route, immersing yourself in architectural marvels and breathtaking landscapes, while uncovering hidden gems that captivate the intrepid explorer. Ethiopia's Historic and Cultural Tours offer an unforgettable odyssey, celebrating a rich history and diverse cultures untouched by colonialism.",
        ],
        lr: true,
        img1: Images.axum1,
        img2: Images.tigray2,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "What to Expect on the Historic Tour",
        description: [
          "Ethiopia's Historic and Cultural Tours offer a unique opportunity to discover the country's rich history and diverse cultures. Unlike other African nations, Ethiopia's identity is deeply rooted in its independence, with a history that stretches back thousands of years. From the ancient city of Axum to the rock-hewn churches of Tigray and Lalibela and the stelae fields at Tiya, Ethiopia's Historic Route through the North is a must-see destination for any history enthusiast.",
          "The Historic Route is easily accessible by road or a combination of road and air travel. The best-known historic sites include Axum, Lalibela, Gondar, and Bahir Dar, and to make the most out of your trip, it is recommended to spend at least two days in each destination. The Historic Route is a living testimony to Ethiopia's rich cultural heritage, showcasing the country's architectural wonders and the breathtaking beauty of its natural landscapes.",
        ],
        lr: false,
        img1: Images.axum5,
        img2: Images.addis2,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    map: {
      title: "Historic Tour Destinations",
      description:
        "The Historic Tour is a journey through Ethiopia's rich and fascinating history. The tour includes visits to the ancient capital of Axum, the Blue Nile Falls, the castles of Gondar, the rock-hewn churches of Lalibela, and the walled city of Harar. And many more...",
      image: "/assets/maps/HistoricTours.jpg",
    },
    tourdescription: {
      title: "A Rough Summary of the Itinerary",
      description: [
        'Aside from the well-known destinations, there are also other hidden gems that are worth exploring. Visitors can discover the sacred Church of Gishen Mariam in Wollo, the neolithic site at Melka Kunture near Addis Ababa, and the beautiful churches and monasteries on the road from Addis Ababa to Bahir Dar, such as Mertulle Mariam. For those interested in archaeology, the Hadar site is where "Lucy" and other hominid species were discovered in the Afar Regional State.',
        "For a unique cultural experience, visitors can also explore the Muslim city of Harar with its 99 mosques, old walled city, and particular architectural style. Ethiopia's Historic and Cultural Tours offer an unforgettable journey through the country's rich history and diverse cultures, showcasing its unique identity that has remained largely untouched by colonialism.",
      ],
      image: Images.axum2,
    },
    tourdescription2: {
      title: "Places included in the Itinerary",
      destinations: [
        {
          title: "Abune Yemata Guh",
          description:
            "Abune Yemata Guh is a church located in the Gheralta cluster in Tigray, Ethiopia. The church is located on a cliff, at an altitude of 2,580 metres (8,460 ft). It is notable for its dome and wall paintings dating back to the 5th century AD. The church is dedicated to Abuna Yemata, a priest who is said to have led the nine saints who spread Christianity in Tigray.",
        },
        {
          title: "Axum",
          description:
            "Axum is a city in northern Ethiopia. It's known for its tall, carved obelisks, relics of the ancient Kingdom of Aksum. Most are in the northern Stelae Park, including a huge fallen pillar, now in pieces. Centuries-old St. Mary of Zion is a Christian church and pilgrimage site believed to have housed the biblical Ark of the Covenant. The neighboring Chapel of the Tablet is said to contain the Ark today.",
        },
        {
          title: "Lalibela",
          description:
            "Lalibela is a town in the Amhara region of northern Ethiopia. It's known for its distinctive rock-cut churches dating from the 12th and 13th centuries, which are pilgrimage sites for Coptic Christians. Carved out of rock, the subterranean monoliths include huge Bete Medhane Alem, and cross-shaped Bete Giyorgis. Many are joined by tunnels and trenches, and some have carved bas-reliefs and colored frescoes inside.",
        },
        {
          title: "Tiya",
          description:
            "Tiya is a town in central Ethiopia. It's known for the Tiya archaeological site, a UNESCO World Heritage Site. The site contains 36 monuments, including 32 carved stelae covered with symbols, most of which are difficult to decipher. The stelae are believed to have been erected between the 12th and 14th centuries. The site also includes excavated megaliths and stone circles.",
        },
        {
          title: "Gondar",
          description:
            "Gondar is a city in northern Ethiopia. It's known for the walled Fasil Ghebbi fortress and palace compound, once the seat of Ethiopian emperors. Dominating it is the immense 17th-century castle of Emperor Fasilides, which combines Portuguese, Indian and local architectural styles. Outside the complex is Debre Berhan Selassie church, with an interior of elaborate murals, including a ceiling decorated with winged angels.",
        },
        {
          title: "Bahir Dar",
          description:
            "Bahir Dar is a city in northwest Ethiopia. It sits on the southern shore of Lake Tana, Ethiopia's largest lake. Islands in the lake are home to medieval monasteries, including Azwa Maryam, which has colorful murals. Nearby on the Zege Peninsula, the Ura Kidane Mihret monastery is known for its elaborate, colorful murals. The Blue Nile River snakes southeast of the city toward the towering cliffs at the Blue Nile Falls.",
        },
        {
          title: "Dessie",
          description:
            "Dessie is a city and a Zone in north-central Ethiopia. Located in the Debub Wollo Zone of the Amhara Region, it sits at a latitude and longitude of 11°8′N 39°38′E, with an elevation between 2,470 and 2,550 metres above sea level.",
        },
        {
          title: "Melka Kunture",
          description:
            "Melka Kunture is a Paleolithic site in the upper Awash Valley in Ethiopia. It is located about 50 kilometers south of Addis Ababa on the west bank of the Awash River, a tributary of the Blue Nile. The site is located within the boundaries of the Awash National Park.",
        },
        {
          title: "Harar",
          description:
            "Harar is a city in eastern Ethiopia. It's surrounded by a centuries-old defensive wall, which has several large gates, including Duke's Gate. The city is known for its mazelike alleys and traditional houses decorated inside with flat hanging baskets. The city's landmarks include 18th-century Jami Mosque and the walled Feres Magala, or French, Village, with its colorful buildings and such attractions as the house of famed poet Arthur Rimbaud.",
        },
        {
          title: "Hadar",
          description:
            "Hadar is a village in Ethiopia, on the southern edge of the Afar Triangle. It is notable for the nearby archaeological digs which have yielded some of the most famous hominin fossils ever discovered, including Lucy, the partial skeleton of a specimen of Australopithecus afarensis. The hominin fossils of Hadar are estimated to date to 3.4 million years ago, and include the remains of 13 individuals, making it one of the richest and most varied early hominin sites in Africa.",
        },
      ],
      description:
        "The Historic Tour itinerary includes the following destinations: ",
    },
  },
  {
    id: 2,
    experience: 2,
    title: "Tribal Ethiopia Tours",
    description:
      "Dive into the unique cultural kaleidoscope of Ethiopia's Tribal Tours. Explore vibrant traditions, breathtaking vistas, and fascinating wildlife in Africa's heartland. Immerse in the dynamic spirit of Ethiopia, an unforgettable journey awaits! Make this radiant journey your next adventure - it's a celebration of diversity at every step",
    image: Images.omo1,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "A Journey through Ethiopia's Tribal Areas",
        description: [
          "Embark on a journey of discovery with Ethiopia's Tribal, where visitors can experience the unique traditions and lifestyles of the different ethnic groups situated along the Omo River in the South. The tribes, including the Arbore, Nyangatom, Dasenech, Karo, Hamer, and Mursi, have lived on the lands for centuries, with their first contact with the modern world only occurring within the last two to three decades. ",
          "Visitors can witness the beauty, nature, discipline, tranquility, and centuries-old traditions that define these tribes, while also enjoying the marvelous scenery, wildlife, and birdlife that make this region a must-see destination.",
        ],
        lr: true,
        img1: Images.karo1,
        img2: Images.danakil4,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "The Wonders of Ethiopia's Tribal Areas",
        description: [
          "To fully experience the wonders of the Omo Valley, at least eight days should be allowed, with the east bank offering lodges for accommodation while the west bank requires camping. We can provide all the necessary gear for a comfortable camping experience. ",
          "In the far west in Gambella, along the Baro River, visitors can discover the Anuak, Nuer, and Mizingir people, accessible by air or a two-day road trip. Ethiopia's Tribal Tours offer a unique and unforgettable journey through the customs and traditions of these remarkable ethnic groups, providing a rare insight into their pre-materialist cultures and anthropology.",
        ],
        lr: false,
        img1: Images.intro3,
        img2: Images.hamer2,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    map: {
      title: "Tribal Tour Destinations",
      description:
        "The Tribal Tour is a journey through Ethiopia's tribal areas. Some of the destinations include visits to the Arbore, Nyangatom, Dasenech, Karo, Hamer, and Mursi tribes.",
      image: "/assets/maps/TribalTours.jpg",
    },
    tourdescription: {
      title: "A Rough Summary of the Itinerary",
      description: [
        "Before reaching the Omo River, visitors can explore the home of the Dorze people in Chencha, renowned for their bamboo bee-hive-shaped houses and colorful weaving skills. Further south are the Konso people, known for their intricately terraced hillsides and wooden totems that adorn their cemeteries.",
        "Along the Omo River, visitors can discover the Surma, who are famous for body painting and women wearing lip plates, and experience the extraordinary rite of passage of the Hamer people called the Bull Jumping ceremony (Ukuli Bula), representing a life-changing event for young men who pass from boyhood into adulthood.",
      ],
      image: Images.hamer1,
    },
    tourdescription2: {
      title: "Places included in the Itinerary",
      destinations: [
        {
          title: "Arbore",
          description:
            "The Arbore people reside in Ethiopia's Omo Valley, known for their pastoral lifestyle and intricate beadwork. They maintain a unique system of social organization based on age sets and have a distinct language. Their colorful clothing and beadwork showcase their artistic flair and cultural identity.",
        },
        {
          title: "Nyangatom",
          description:
            "This semi-nomadic tribe primarily inhabits the Lower Omo Valley. The Nyangatom are skilled farmers and herders, relying on cattle for their livelihood. They are known for their complex initiation ceremonies and ornate body decorations, using materials like beads and copper to adorn themselves.",
        },
        {
          title: "Dasenech",
          description:
            "The Dasenech, also known as the Geleb or Marille, are agro-pastoralists dwelling in the Omo River region. Their livelihood depends on cattle, goats, and sorghum cultivation. With a distinctive culture, they practice scarification and engage in bull jumping ceremonies as part of their rites of passage.",
        },
        {
          title: "Karo",
          description:
            "Living along the Omo River, the Karo people are renowned for their vibrant body painting using natural pigments and elaborate body scarification. They are skilled in pottery and produce intricate clay vessels. The Karo cherish their traditions, which include rituals celebrating harvests and life events.",
        },
        {
          title: "Hamer",
          description:
            "The Hamer tribe is famous for their Bull Jumping ceremony, marking the transition of boys to manhood. They are skilled pastoralists and farmers, cherishing their cattle and cultivating crops. Women wear unique hairstyles adorned with beads, while men display their achievements through various hairstyles and accessories.",
        },
        {
          title: "Mursi",
          description:
            "The Mursi are pastoralists who inhabit the lower Omo Valley. They are recognized for the lip plates worn by Mursi women, symbolizing beauty and wealth. Renowned for their body painting, the Mursi have managed to preserve their ancient cultural practices despite outside influences.",
        },
        {
          title: "Dorze",
          description:
            "The Dorze people are known for their impressive bamboo bee-hive-shaped houses found in the Chencha region. Skilled weavers, they create colorful fabrics and intricate designs, reflecting their rich artistic heritage. They are also talented farmers, cultivating crops such as enset (false banana) and coffee.",
        },
        {
          title: "Konso",
          description:
            "The Konso people are agriculturalists residing in the highland terraced areas of southern Ethiopia. Known for their exceptional terraced agriculture, they have a unique way of honoring their dead through wooden totems and stone markers.",
        },
        {
          title: "Surma",
          description:
            "The Surma, also called Suri, are pastoralists living in the southwestern part of Ethiopia. They are famous for their body painting using natural pigments and elaborate scarification patterns. Surma women are distinguished by wearing lip plates, a symbol of beauty and cultural identity.",
        },
        {
          title: "Anuak",
          description:
            "The Anuak people reside in the western region along the Baro River. They are skilled fishermen and farmers, cultivating crops like sorghum and maize. Known for their intricate wood and ivory carvings, the Anuak maintain their cultural traditions through storytelling and rituals.",
        },
        {
          title: "Nuer",
          description:
            "The Nuer are pastoralists living in Gambella, near the Baro River. Cattle play a central role in their society, serving as a measure of wealth and status. They have a complex social structure based on age sets, and their cultural identity is deeply tied to their cattle herding practices.",
        },
        {
          title: "Mizingir",
          description:
            "The Mizingir people inhabit the remote regions of western Ethiopia, near the Baro River. They are primarily agriculturalists, relying on subsistence farming to sustain their communities. With distinct customs and beliefs, the Mizingir have managed to preserve their cultural heritage amidst modern influences.",
        },
      ],
      description:
        "The Tribal Tour itinerary includes the following destinations: ",
    },
  },
  {
    id: 3,
    experience: 3,

    title: "Festivals and Special Events",
    description:
      "Experience the vibrant world of Ethiopian festivals, where ancient traditions come alive through colorful celebrations and powerful spiritual energy. Immerse yourself in the heart and soul of Ethiopian culture, creating unforgettable moments that will stay with you forever.",
    image: Images.gonder2,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "The Vibrant World of Ethiopian Festivals",
        description: [
          "Immerse yourself in the vibrant and thrilling world of Ethiopian festivals! From the awe-inspiring ancient religious celebrations like Genna (Ethiopian Christmas) and Timket (Ethiopian Epiphany) in January, Fasika (Ethiopian Easter) in April, Meskel (the finding of the true cross) in September, to the special feast days of individual churches, every moment is bursting with color, music, and tradition.",
          "But that's not all! Join over 100,000 pilgrims in the most famous pilgrimage sites like Hidar Tsion in Axum and Kulubi Gabriel near Dire Dawa, and experience the powerful spiritual energy that resonates throughout.",
        ],
        lr: true,
        img1: Images.axum5,
        img2: Images.lalibela3,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "For the Contemporary Urban Festivals Enthusiasts",
        description: [
          "For those who prefer contemporary urban festivals, Addis Ababa is the place to be! Be a part of the Great Ethiopia Run, the Acacia Jazz Festival, and indulge in the lively atmosphere that electrifies the city.",
        ],
        lr: false,
        img1: Images.addis1,
        img2: Images.addis2,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    map: {
      title: "Festivals and Special Events Destinations",
      description:
        "Some of the destinations included in the Festivals and Special Events Tour are: Axum, Lalibela, Gondar, Bahir Dar, and many more...",
      image: "/assets/maps/TribalTours.jpg",
    },
    tourdescription: {
      title: "A Rough Summary of the Itinerary",
      description: [
        "The itinerary offers an immersive experience into the vibrant world of Ethiopian festivals and special events. Travelers can delve into the heart and soul of Ethiopian culture by participating in ancient religious celebrations like Genna (Ethiopian Christmas), Timket (Ethiopian Epiphany), Fasika (Ethiopian Easter), and Meskel (the finding of the true cross). They can witness the colorful traditions, music, and spirituality that define these festivals. ",
        "Additionally, pilgrims can join the mass gatherings at famous pilgrimage sites like Hidar Tsion in Axum and Kulubi Gabriel near Dire Dawa, experiencing the powerful spiritual energy that permeates the air. For those seeking contemporary urban festivities, Addis Ababa offers the Great Ethiopia Run and the Acacia Jazz Festival, providing an electrifying atmosphere. In the Northern part of Ethiopia, the cultural celebration of Ashenda or Shadey spreads joy throughout Tigray and Northern Amhara regions. The itinerary promises unforgettable moments and a deep immersion into Ethiopian culture through its diverse festivals.",
      ],
      image: Images.lalibela2,
    },
    tourdescription2: {
      title: "Festivals included in the Itinerary",
      destinations: [
        {
          title: "Genna (Ethiopian Christmas)",
          description:
            "Celebrated in January, Genna is a joyous religious festival marking the birth of Jesus Christ. Ethiopian Orthodox Christians partake in colorful processions, traditional hymns, and captivating rituals. The event features a unique midnight mass where participants light candles and chant prayers. Enthusiasm fills the air as communities come together to share festive meals and exchange gifts, signifying the spirit of unity and compassion. Genna showcases Ethiopia's deep-rooted religious heritage and brings a sense of togetherness among its people.",
        },
        {
          title: "Timket (Ethiopian Epiphany)",
          description:
            "Held in January, Timket commemorates the baptism of Jesus in the Jordan River. It is one of the most exuberant festivals in Ethiopia, attracting throngs of believers and spectators. Priests, adorned in ornate robes, carry sacred replicas of the Ark of the Covenant in a grand procession to bless the waters. Faithful believers then plunge into the blessed water, seeking purification and renewal. The event is accompanied by mesmerizing chants, dance performances, and colorful pageantry, uniting the nation in a shared expression of devotion and spirituality.",
        },
        {
          title: "Fasika (Ethiopian Easter)",
          description:
            "Celebrated in April, Fasika is a deeply revered Christian festival signifying the resurrection of Jesus Christ. Ethiopian Orthodox Christians observe a 55-day fasting period leading up to Easter, breaking their fast with a joyous feast. Candlelit processions and spirited hymns fill churches, symbolizing the triumph of light over darkness. Families gather for elaborate meals, featuring the traditional dish, doro wat (spicy chicken stew). Fasika embodies spiritual renewal, cultural heritage, and the essence of forgiveness and redemption.",
        },
        {
          title: "Meskel (the finding of the true cross)",
          description:
            "Celebrated in September, Meskel is a significant religious festival commemorating the discovery of the True Cross on which Jesus was crucified. The highlight of the event is the mesmerizing Demera ceremony, where a massive bonfire is lit in the heart of towns and villages. The fire represents the flames Empress Helena used to find the True Cross. Colorfully dressed processions sing and dance around the bonfire, creating an enchanting spectacle that brings communities together in celebration and reverence.",
        },
        {
          title: "Ashenda or Shadey",
          description:
            'Celebrated from August onward in the Northern part of Ethiopia, Ashenda (also known as Shadey) is a joyful cultural festival dedicated to women. Young girls and women dress in vibrant traditional clothing and jewelry, singing and dancing to lively tunes. They perform a unique shoulder dance called "Amhara," showcasing their cultural pride and identity. During the festivities, young women receive gifts and blessings from elders. Ashenda epitomizes the spirit of femininity, unity, and cultural richness in the Tigray and Northern Amhara regions.',
        },
        {
          title: "Great Ethiopia Run",
          description:
            "A contemporary urban festival in Addis Ababa, the Great Ethiopia Run is a thrilling athletic event that unites runners of all ages and backgrounds. The 10-kilometer road race takes participants through the vibrant streets of the capital city, with live music and jubilant crowds lining the route. The event promotes health, fitness, and a sense of community while also providing a platform to showcase Ethiopia's rich sports culture.",
        },
        {
          title: "Acacia Jazz Festival",
          description:
            "A contemporary urban festival in Addis Ababa, the Acacia Jazz Festival is a celebration of Ethiopia's growing jazz scene. Musicians from across the country and beyond come together to perform soulful jazz tunes, creating a captivating ambiance in the city. The festival's energetic atmosphere attracts music enthusiasts and showcases the diversity and creativity of Ethiopian musicians, highlighting jazz as a vibrant part of the nation's cultural fabric.",
        },
      ],
      description:
        "The Festivals and Special Events itinerary includes the following festivals: ",
    },
  },
  {
    id: 4,
    experience: 4,
    title: "Adventure Tours in Ethiopia",
    description:
      "A unique opportunity to explore the country's diverse landscapes and rich cultural heritage. From the Simien Mountains to the Danakil Depression, Ethiopia's natural wonders are waiting to be discovered. ",
    image: Images.abay1,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "A Journey through Ethiopia's Natural Wonders",
        description: [
          "These offer a thrilling experience for those seeking an adrenaline-packed vacation. The tours include trekking through stunning landscapes, such as the Simien and Bale Mountains, where you will encounter unique flora and fauna, including the iconic Gelada baboons and the elusive Ethiopian wolf. For rock climbers, experienced guides will help navigate the challenging terrain, ensuring safety at all times. ",
          "Paragliding tours offer a chance to soar above Ethiopia's stunning landscapes, while white water rafting tours provide a wild ride through thrilling rapids. Hot air ballooning tours offer a tranquil journey through Ethiopia's skies, providing breathtaking views of the country's majestic landscapes. Throughout your journey, our experienced guides will ensure your safety and comfort. Come explore the wild side of Ethiopia and discover the adventure of a lifetime!",
        ],
        lr: true,
        img1: Images.abay2,
        img2: Images.lalibela5,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    itinerarydescription: [
      {
        title: "Trekkings in Ethiopia",
        itineraries: [
          {
            title: "Simien Mountains Trekking (North)",
            description: [
              "The Simien Mountains National Park is sometimes called the Roof of Africa, due to their height and breadth, and they present perhaps the most dramatic mountain scenery on the continent. Great volcanic plugs formed some 40 million years ago have eroded over the ages into fantastic crags, pinnacles, and flat-topped mountains, described by one writer as “the chess pieces of the gods,” which tower over precipitous gorges, river valleys, and plains stretching all the way to Ethiopia's northern neighbor, Eritrea. ",
              "There are many astonishingly eye-catching peaks and mountain chains over 4,000m, and Ras Dashen (It's actually Ras Dejen, though to avoid confusion we use the common-but incorrect name) at 4543m is the highest in the country and the tenth highest in Africa. The Simien Mountains National Park also features the giant Erica forest and is of global significance for biodiversity conservation because it is home to globally threatened species, including the iconic Walia Ibex, a rare wild mountain goat, the Gelada Baboon, and the Ethiopian Wolf.",
              "The Simien Mountains National Park is sometimes called the Roof of Africa, due to their height and breadth, and they present perhaps the most dramatic mountain scenery on the continent. Great volcanic plugs formed some 40 million years ago have eroded over the ages into fantastic crags, pinnacles, and flat-topped mountains, described by one writer as “the chess pieces of the gods,” which tower over precipitous gorges, river valleys, and plains stretching all the way to Ethiopia's northern neighbor, Eritrea. There are many astonishingly eye-catching peaks and mountain chains over 4,000m, and Ras Dashen (It's actually Ras Dejen, though to avoid confusion we use the common-but incorrect name) at 4543m is the highest in the country and the tenth highest in Africa. The Simien Mountains National Park also features the giant Erica forest and is of global significance for biodiversity conservation because it is home to globally threatened species, including the iconic Walia Ibex, a rare wild mountain goat, the Gelada Baboon, and the Ethiopian Wolf. ",
              "The Simien Mountains can easily be combined with a tour on the Historic Route. Visitors with little time can fly from Addis Ababa to Gondar, some 100 km from the entrance to the park at Debark. For those who do not like camping, there is a cozy and comfortable lodges near Sankaber and Debark which can be used as a base for exploring one of Ethiopia's leading parks.",
            ],
            image: Images.simien1,
          },
          {
            title: "Bale Mountains Trekking	",
            description: [
              "Splendid trekking itineraries, by horse or on foot, can also be made in the Bale Mountains National Park. Since it takes at least one day to get to Bale from Addis Ababa, a minimum of 4 days should be allowed. This area includes a high-altitude plateau with volcanic crags and lakes, forests, alpine moorland, trout-filled streams, and a striking variety of fauna and flora. Several endemic mammals, including the Mountain Nyala, Ethiopian Wolf, and Menelik's Bushbuck, are found within the park, and ornithologists have recorded sixteen endemic bird species.",
              "In the Harenna Forest, in the southern part of this sublime park, you may also catch a glimpse of the majestic lion and its feline kin, the leopard. A one-day excursion from Goba (by car) takes the visitor to the fantastic underwater river and caves of Sof Omar, the longest in the world. ",
            ],
            image: Images.bale2,
          },
          {
            title: "Community Trekking in Ethiopia",
            description: [
              "Experience the beauty of Ethiopia in a unique way with Ethiopia Community Trekking. This meditative journey takes you through stunning landscapes, winding paths, and local villages, culminating in a stay at charming community-run guesthouses that offer spectacular views. What makes this trekking experience truly special is that a majority of the generated revenue goes straight back into the local communities, making it a sustainable and responsible form of tourism. By participating in community trekking, you can not only enjoy the stunning scenery but also give back to the communities that host you during your stay.",
              "Community Trekking is a way to preserve the diverse range of cultures and traditions that Ethiopia is home to. By partnering with small communities, Sawla Tours ensures that you have an authentic experience that truly immerses you in Ethiopia's rich cultural heritage. Explore the untouched natural beauty of Ethiopia's mountains and forests with community trekking routes along the Wello and Tigray Mountains in the North. The trek offers a rare opportunity to stay in traditional housing and meet the people of the rural highlands whose lives have changed little in many hundreds of years.",
              "Despite the distance covered and the required level of fitness, the rewards of community trekking are immeasurable. The trekking routes provide a rare opportunity to connect with nature and immerse yourself in Ethiopia's rich cultural heritage. Ethiopia Community Trekking offers an unforgettable journey of discovery where you can create unforgettable memories that will last a lifetime.",
              "There are several community trekking options available in Ethiopia, each with its unique charm and beauty. Wollo and Tigray offer stunning landscapes, and there are eleven and seven community guesthouses currently operational in these regions, respectively. Abuna Yoseph, just outside Lalibela, offers a more challenging trek that makes for a great base to summit Abuna Yosef Mountain at 4260m. Wof Washa forest, a lesser-visited community trekking destination, offers a unique trekking experience that is perfect for travelers with an interest in flora and wildlife. The newest addition to community trekking in Ethiopia is Janamora, a district just outside the Simien Mountains that offers stunning landscapes and supports initiatives that protect the Simien range.",
              "Embark on a journey of a lifetime with Ethiopia Community Trekking and immerse yourself in Ethiopia's rich cultural heritage. With charming community-run guesthouses, a sustainable approach to tourism, and stunning landscapes, this trekking experience is something you'll never forget. So, pack your bags and join us for an unforgettable journey of discovery through the beautiful Ethiopian countryside.",
            ],
            image: Images.tigray4,
          },
        ],
      },
      {
        title: "Rock Climbing in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Rock climbing, an exhilarating and challenging sport that tests one's physical and mental limits, is a beloved pastime for many outdoor enthusiasts around the world. And while Ethiopia may not be the first destination that comes to mind for rock climbing, this vibrant and diverse country is quickly becoming a hotspot for thrill-seekers looking for unique and adventurous experiences.",
              "Nestled in the picturesque region of Tigray in Northern Ethiopia lies some of the most impressive rock formations on the African continent, attracting climbers from all corners of the globe. As you scale the jagged cliffs and rugged terrains, you'll be rewarded with breathtaking views of the surrounding valleys and mountains that stretch as far as the eye can see. With its unique geological features, Tigray offers an unparalleled rock-climbing experience that is sure to leave you in awe.",
              "We are committed to providing you with an unforgettable rock-climbing experience. Whether you are a seasoned pro or a beginner, our team of experienced guides will direct you to the best climbing sites and help you arrange all your logistics, from transportation to accommodation. While we provide you with all the necessary support and guidance, we encourage climbers to bring their own gear, as it is not available in the country. So pack your bags and get ready to embark on an epic adventure of a lifetime as we take you on a rock climbing journey that will leave you feeling exhilarated and inspired.",
            ],
            image: Images.tigray2,
          },
        ],
      },
      {
        title: "Paragliding in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Nestled in the highlands of Ethiopia lies an adventure that will leave you breathless - paragliding. With its vast plateaus, majestic mountains, deep gorges, and volcanic craters, Ethiopia offers paragliders a breathtaking bird's eye view of some of the world's most beautiful natural wonders. As you soar through the skies, you'll be amazed by the unparalleled vistas that stretch out before you - a visual feast for the mind and soul that is sure to leave you awe-inspired.",
              "One of the most remarkable things about paragliding in Ethiopia is that it is available year-round, thanks to the country's diverse terrain and climate zones. However, for the smoothest and most enjoyable experience, we recommend scheduling your paragliding adventure between November and March, with December and January being the optimal months due to the weaker sun activity. Whether you're a seasoned paragliding pro or a beginner, Ethiopia's highlands offer an unforgettable experience that will leave you feeling energized and exhilarated.",
              "At Sawla Tours, we specialize in helping adventurers like you experience the thrill of paragliding in Ethiopia. Our experienced guides can assist you in finding the perfect location and provide logistical support, ensuring that your paragliding adventure is safe, enjoyable, and memorable. However, please note that you will need to bring your own glider for the experience.",
              "Don't miss out on the opportunity to explore Ethiopia's stunning highlands from a unique perspective. Book your paragliding adventure with Sawla Tours today, and experience the thrill of a lifetime that will leave you with memories to last a lifetime.",
            ],
            image: Images.chebera1,
          },
        ],
      },
      {
        title: "Whitewater Rafting in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Experience the thrill of whitewater rafting in Ethiopia, a country filled with stunning landscapes and rushing rivers. Whether you are a seasoned rafter or a first-time adventurer, Ethiopia offers a range of rafting experiences that are sure to impress. With several locations to choose from, you can spend a few days or up to a month navigating Ethiopia's exciting waterways.",
              "One of the most popular locations for rafting in Ethiopia is on the Blue Nile near Bahir Dar. This multi-day adventure offers the perfect blend of challenging rapids and serene scenery. As you paddle along the Nile, you'll be surrounded by lush greenery, soaring cliffs, and wildlife such as baboons and birds. The Blue Nile rafting experience is a must for anyone visiting Ethiopia.",
              "For those seeking a longer and more challenging rafting expedition, the Omo River in the South is the perfect choice. This river flows nearly 1000 km from the highlands southwest of Addis Ababa to Lake Turkana in Kenya. Rafting the entire stretch can take up to a month, but the experience is truly unforgettable. Along the way, you'll encounter dramatic canyons, remote villages, and rare wildlife such as crocodiles and hippos.",
              "If you're short on time but still want to experience the thrill of rafting, the Awash River in the East can be rafted in just one or two days. The river flows through the stunning Awash National Park, home to giraffes, zebras, and baboons. The rapids on the Awash are exciting and challenging, providing an unforgettable experience.",
              "For the truly adventurous, specialized expeditions can also tackle other rivers such as the Tekezze in the North West and the Baro in the West. These expeditions require advanced planning and preparation, but the reward is an epic rafting adventure through Ethiopia's most remote and untouched landscapes.",
              "Whitewater rafting in Ethiopia is only possible during certain times of the year, typically from September to October, after the rains. As rafting equipment may not be readily available, enthusiasts are advised to bring their own gear or arrange for rental well in advance. With its stunning scenery, challenging rapids, and remote locations, Ethiopia is a must-visit destination for any whitewater rafting enthusiast.",
            ],
            image: Images.abay1,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    experience: 5,
    title: "Photography Tours in Ethiopia",
    description: "",
    image: Images.lalibela5,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "A Nirvana for Photography Buffs",
        description: [
          "Photography tour in Ethiopia, a paradise for photographers. Capture stunning images of the fine church architecture of Lalibela, the breathtaking landscapes of the Ethiopian Highlands, vibrant festivals, bustling local markets, the unique lifestyles of the Omo Valley tribes, and the colorful birdlife of Ethiopia.",
          "The opportunities for capturing stunning photographs in Ethiopia are endless, and we at Sawla Tours are dedicated to providing exceptional tour itineraries that cater specifically to the needs of photographers.",
        ],
        lr: true,
        img1: Images.bale2,
        img2: Images.karo1,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Photography Tours in Ethiopia",
        description: [
          "We understand that photography is an art that requires patience, planning, and the right locations. That's why we meticulously plan our tours to ensure the perfect pace and timing for the best photography opportunities.",
          "Our custom-made tours can specialize in culture, wildlife, architecture, or landscape photography. We take care of all the details, from transport to accommodation and meals, leaving you free to focus on capturing the perfect shot. Join us on a photography tour of Ethiopia and let us help you capture the beauty of this unique and fascinating country through your lens.",
        ],
        lr: false,
        img1: Images.simien3,
        img2: Images.danakil3,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
  },
  {
    id: 6,
    experience: 6,
    title: "Birdwatching Tours in Ethiopia",
    description:
      "Ethiopia, a haven for bird enthusiasts, unveils a treasure trove of avian wonders. From the endemic Ethiopian Siskin to the elusive Blue-winged Goose, the country's diverse landscapes and abundant habitats make it a paradise for birding, offering a feast for both the eyes and the soul.",
    image: Images.bird2,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "A Haven for Bird Enthusiasts",
        description: [
          "More than 800 bird species are found in Ethiopia, of which sixteen are endemic. A further fourteen species are shared with Eritrea, which was part of Ethiopia until 1991. Ethiopia's diverse habitats, highlands, lowlands, forests, lakes, wetlands, and river systems also provide sites for wintering or passage birds.",
          "More than 800 bird species are found in Ethiopia, of which sixteen are endemic. A further fourteen species are shared with Eritrea, which was part of Ethiopia until 1991. Ethiopia's diverse habitats, highlands, lowlands, forests, lakes, wetlands, and river systems also provide sites for wintering or passage birds.",
        ],
        lr: true,
        img1: Images.gambella1,
        img2: Images.bird1,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Some tips for Birdwatching in Ethiopia",
        description: [
          "To make the most of your bird-watching trip, you should allocate a minimum of three weeks. However, shorter tours of about ten days can still guarantee seeing most of the endemics and several hundred other species.",
          "Sawla can mix bird watching with other itineraries, such as the Historic Route or the Simien Mountains, and can also organize short birding extensions as part of a longer trip or for people passing through Addis Ababa with a few days to spare. If you give us sufficient notice on both long and short trips, you will be accompanied by a trained ornithologist.",
        ],
        lr: false,
        img1: Images.bird3,
        img2: Images.bird6,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
  },
  {
    id: 7,
    experience: 7,
    title: "Wildlife Tours in Ethiopia",
    description:
      "Explore Ethiopia, a tapestry of diverse landscapes teeming with vibrant wildlife.",
    image: Images.simien5,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "A Tapestry of Diverse Landscapes",
        description: [
          "Ethiopia is a country with diverse landscapes and abundant wildlife. If you are a wildlife enthusiast, you are in for a treat. Ethiopia offers some of the best wildlife tours in Africa, with its stunning national parks, game reserves, and sanctuaries that provide visitors with an opportunity to see a wide range of animals in their natural habitat.",
          "For an exciting big game drive, head to the Bale Mountain and Omo parks in the Southeast and South or Gambella in the West. While big game sightings are not guaranteed, the thrill of tracking wildlife by following trails and droppings can be an unforgettable experience. In the Awash Park, located in the eastern part of the country, you can spot various animals such as the Greater and Lesser Kudu, Beisa Oryx, Gerenuk, and Dikdik, and if you're lucky, leopards and lions. The nearby Halledeghi Reserve is also worth a visit for a chance to see herds of plains animals and rare sightings of the Abyssinian Wild Ass.",
        ],
        lr: true,
        img1: Images.simien7,
        img2: Images.simien1,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "The Wonders of Ethiopia's Tribal Areas",
        description: [
          "To fully experience the wonders of the Omo Valley, at least eight days should be allowed, with the east bank offering lodges for accommodation while the west bank requires camping. We can provide all the necessary gear for a comfortable camping experience. ",
          "In the far west in Gambella, along the Baro River, visitors can discover the Anuak, Nuer, and Mizingir people, accessible by air or a two-day road trip. Ethiopia's Tribal Tours offer a unique and unforgettable journey through the customs and traditions of these remarkable ethnic groups, providing a rare insight into their pre-materialist cultures and anthropology.",
        ],
        lr: false,
        img1: Images.intro3,
        img2: Images.hamer2,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    map: {
      title: "Wildlife Tours Destinations",
      description:
        "Some of the destinations included in the Wildlife Tours are: Bale Mountains National Park, Omo National Park, Gambella National Park, Awash National Park, and many more...",
      image: "/assets/maps/TribalTours.jpg",
    },
    tourdescription: {
      title: "A Rough Summary of the Itinerary",
      description: [
        "This wildlife tour takes you to stunning national parks, game reserves, and sanctuaries across Ethiopia, where you can witness a wide range of animals in their natural habitats. ",
        "Explore the Bale Mountain, Omo, Gambella, and Awash parks for thrilling big game drives and opportunities to spot unique animals like the Ethiopian Wolf, Mountain Nyala, and Walia Ibex. Visit the Halledeghi Reserve for plains animals and the Senkele Sanctuary for Swaynes Hartebeest.",
        "Discover the Babile Elephant Sanctuary and Kafta Sheraro Park for remarkable elephant sightings. Experience Ethiopia's rich wildlife and create unforgettable memories on this exceptional journey.",
      ],
      image: Images.alehdege1,
    },
    tourdescription2: {
      title: "Places included in the Itinerary",
      description:
        "The Wildlife Tour itinerary includes the following destinations: ",
      destinations: [
        {
          title: "Bale Mountain National Park",
          description:
            "Nestled in the Southeast, Bale Mountain National Park boasts diverse landscapes and is a sanctuary for endemic wildlife. Here, you can spot the majestic Mountain Nyala, the elusive Ethiopian Wolf, and Menelik's Bushbuck. The nearby Harenna Forest is home to wild dogs, lions, and the rare Bale Monkey, creating an exceptional wildlife experience.",
        },
        {
          title: "Omo National Park",
          description:
            "Located in the South, Omo National Park offers thrilling big game drives, leading you on the trail of wildlife. While big game sightings are not guaranteed, the adventure of tracking animals in their natural habitat is unforgettable. The park showcases the incredible biodiversity of Ethiopia, providing opportunities to encounter diverse species in their pristine environment.",
        },
        {
          title: "Gambella",
          description:
            "Situated in the West, Gambella is a wildlife-rich region where you can embark on exciting big game drives. The area is known for its varied landscapes and abundant wildlife, making it a prime destination for wildlife enthusiasts seeking a unique safari experience.",
        },
        {
          title: "Awash Park",
          description:
            "In the eastern part of Ethiopia, Awash Park is a haven for wildlife enthusiasts. Encounter various animals like the Greater and Lesser Kudu, Beisa Oryx, Gerenuk, and Dikdik, along with potential sightings of leopards and lions. The park's proximity to the Halledeghi Reserve allows you to witness herds of plains animals and rare Abyssinian Wild Ass.",
        },
        {
          title: "Halledeghi Reserve",
          description:
            "Adjacent to Awash Park, the Halledeghi Reserve offers a chance to see an array of plains animals and the elusive Abyssinian Wild Ass. This sanctuary complements the wildlife experience in the Awash region, providing a glimpse into Ethiopia's diverse fauna.",
        },
        {
          title: "Simien Mountains National Park",
          description:
            " Famous for its dramatic mountain scenery, Simien Mountains National Park hosts the iconic Walia Ibex, offering almost guaranteed sightings. The park's striking beauty and thriving wildlife make it a captivating destination for nature enthusiasts.",
        },
        {
          title: "Senkele Sanctuary (near Awassa)",
          description:
            " Close to Awassa, the Senkele Sanctuary is a haven for Swaynes Hartebeest and other plains animals. Witness the thriving wildlife in this scenic reserve and immerse yourself in the natural beauty of Ethiopia.",
        },
        {
          title: "Nech Sar Park",
          description:
            "Located in the southwest, Nech Sar Park spans across two lakes and offers a variety of birdlife and wildlife encounters. The park's picturesque landscapes and diverse fauna create a serene wildlife tour experience.",
        },
        {
          title: "Babile Elephant Sanctuary (located 40 km east of Harar)",
          description:
            "Head to Babile Elephant Sanctuary to spot magnificent elephants. This sanctuary provides a glimpse into Ethiopia's efforts to protect these gentle giants, offering an enriching wildlife encounter.",
        },
        {
          title: "Kafta Sheraro Park (Tigray Region)",
          description:
            "A newly protected area in Tigray, Kafta Sheraro Park is witnessing the triumphant comeback of elephants and other wildlife. Experience the park's emerging popularity as a wildlife-rich destination.",
        },
        {
          title: "Chebera Churchura National Park",
          description:
            "Found in the southwest, Chebera Churchura is a treasure trove of diverse wildlife, including buffalo and elephants. Explore the untamed beauty of this park, brimming with captivating wildlife encounters.",
        },
        {
          title: "Maze National Park (located in the southwest)",
          description:
            "Maze National Park is gaining popularity for its abundant wildlife, featuring buffalo and elephants. Immerse yourself in the wilderness of Ethiopia's southwest and relish the raw beauty of nature.",
        },
      ],
    },
  },
  {
    id: 8,
    experience: 9,
    title: "Special Interest Tours in Ethiopia",
    description:
      "Uncover hidden gems, curating experiences that bring the country's treasures to life.",
    image: Images.central1,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "Uncover Hidden Gems",
        description: [
          "Special interest tours in Ethiopia offer travelers the opportunity to delve deeper into the country's unique culture, history, and natural wonders based on their interests. Ethiopia is a country of diverse landscapes, cultures, and traditions, and special interest tours can help travelers to explore and experience the country's hidden gems in a more meaningful way.",
          "For coffee lovers, Ethiopia offers a unique opportunity to learn about the origin and production of world-renowned coffee beans. Geology enthusiasts can explore the country's dramatic landscapes, including volcanic craters, hot springs, and canyons. Flora tours showcase the country's stunning variety of plant life, from the vast fields of wildflowers in the Simien Mountains to the lush greenery of the Bale Mountains. Meanwhile, butterfly enthusiasts can enjoy observing and photographing a wide variety of species in the country's many national parks.",
        ],
        lr: true,
        img1: Images.konso2,
        img2: Images.kaffa1,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Additional Special Interest Tours",
        description: [
          "In addition to these special interest tours, Ethiopia also offers school trips that can provide students with a unique and educational experience. Schools can organize trips to visit historical and cultural sites such as the ancient city of Axum, the rock-hewn churches of Lalibela, and the castles of Gondar. Students can also participate in cultural activities such as traditional dance and music performances, and learn about the country's diverse communities and languages.",
          "Overall, special interest tours and school trips in Ethiopia offer travelers and students the chance to engage with the country's rich history, culture, and natural beauty in a way that is tailored to their specific interests and preferences.",
        ],
        lr: false,
        img1: Images.bird4,
        img2: Images.axum3,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    itinerarydescription: [
      {
        title: "Coffee Tour in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Embark on a journey to the birthplace of coffee and explore Ethiopia's rich coffee industry with Sawla and the Coffee Farmers Cooperative Union. This is your chance to witness firsthand the passion and dedication that goes into producing some of the world's finest coffee. From the bustling streets of Addis Ababa to the stunning coffee-growing regions of Harar, Yirga Chefe, Jimma, and Bonga, this once-in-a-lifetime tour promises an unforgettable experience.",
              "Your adventure begins in Addis Ababa, where you'll meet local coffee industry experts and learn about the history of Africa's first commodity exchange at the Ethiopia Commodity Exchange. Participate in a cupping session and savor some of the world's most exquisite coffee. But the real highlight of the tour is the opportunity to visit the cooperatives in the coffee-growing regions. Here, you'll meet with local farmers, learn about their traditions and techniques, and even have the chance to pick your own coffee beans. This is a chance to deepen your appreciation for coffee production, connect with the people who make it all possible, and experience the unique flavors and aromas of Ethiopian coffee.",
              "Don't miss out on this incredible opportunity to explore Ethiopia's coffee industry. Book your coffee tour today and discover the history, passion, and dedication that make Ethiopian coffee a beloved beverage worldwide. With Sawla and the Coffee Farmers Cooperative Union, you're sure to have an unforgettable journey that will awaken your senses and leave you with a deeper appreciation for this treasured drink.",
            ],
            image: Images.kaffa1,
          },
        ],
      },
      {
        title: "Geology Tours in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Explore Ethiopia's fascinating geology with a journey to the Awash area and Mount Ert'ale. Geologists will be thrilled by the unique geological features of the Awash area, where the African rift system splits into two arms, creating a diverse landscape of volcanoes, hot springs, and salt flats. The region is also home to an array of wildlife, including baboons, hyenas, and ostriches, making it an excellent destination for nature enthusiasts.",
              "No geology tour of Ethiopia is complete without a visit to Mount Ert'ale, the only volcano in the world with a permanent lava lake. The ascent to the summit is an adventure in itself, with the option of a trek on foot while camels carry the supplies or a thrilling helicopter ride from Mekele. Additionally, a comprehensive two-week tour can include a visit to the Simien Mountains, a UNESCO World Heritage Site renowned for its unique wildlife, dramatic landscapes, and cultural heritage. Join expert geologists and discover the wonders of Ethiopia's geology on a journey of a lifetime.",
            ],
            image: Images.danakil1,
          },
        ],
      },
      {
        title: "Flora and Butterflies Tour in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Welcome to the breathtaking world of Ethiopia – a nature lover's paradise! Nestled among the twelve biodiversity centers of the world, Ethiopia boasts an incredible array of flora and fauna that will leave visitors awe-inspired.",
              "For those with a special interest in butterflies, Ethiopia is home to a stunning 324 species, spread across eight families and 93 genera. Imagine exploring the lush Menagesha Forest near Addis Ababa, gazing out over the tranquil Rift Valley Lakes, and marveling at the beauty of the Bale Mountains and the Awash Valley. This once-in-a-lifetime butterfly tour spans eleven unforgettable days.",
              "If flora is your passion, then Ethiopia has got you covered as well. The stunning Bale Mountains and the Awash Valley await your arrival, and your journey will take you across the breathtaking Abyssinian Highlands. With a total of ten amazing days to soak up the stunning floral scenery, this tour promises to be an unforgettable adventure.",
            ],
            image: Images.adey1,
          },
        ],
      },
      {
        title: "School Trips in Ethiopia",
        itineraries: [
          {
            title: "",
            description: [
              "Ethiopia is one of the ideal destinations for school trips. We tailor-made the best school trips in Ethiopia, with a focus on safety, education, and inspiration. Our team works closely with teachers to create customized itineraries that cater to their specific subjects and interests, whether it's art, music, history, geography, culture, conservation, or volunteer work.",
              "Our established itineraries can be tailored to suit the particular needs of your group, ensuring that your students are engaged in a range of diverse and exciting activities.",
              "We prioritize safety above all else and take all necessary precautions to ensure that our trips are safe for students. Our experienced guides will be with you every step of the way to provide guidance and support.",
              "We believe that travel is an integral part of education and that school trips to Ethiopia can be a transformative experience for students. Let us help you create a memorable trip that will leave a lasting impression on your students. Contact us today to learn more about our school trip options and how we can customize an itinerary for your group.",
            ],
            image: Images.wollo1,
          },
        ],
      },
    ],
  },
  {
    id: 9,
    experience: 8,
    title: "Business Trips and Short Day Tours in Ethiopia",
    description:
      "Unveil the wonders of Ethiopia even with limited time, as we curate unforgettable short-duration trips tailored to your schedule",
    image: Images.addis3,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "Unveil the Wonders of Ethiopia",
        description: [
          "Are you looking for a way to make the most of your short stay in Ethiopia? Whether you're in Addis Ababa for a meeting or simply passing through, we've got you covered. Our team can help you plan an unforgettable day or multi-day tour, tailored to your specific budget and time constraints.",
          "Our itineraries feature a range of must-see destinations, located just a few hours' drive or an hour's flight away. From the stunning rock-hewn churches of Lalibela to the breathtaking Blue Nile Falls, you'll have the opportunity to experience Ethiopia's rich history and natural beauty.",
        ],
        lr: true,
        img1: Images.addis1,
        img2: Images.addis2,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "Business Trips in Ethiopia",
        description: [
          "But that's not all. If you're looking to soak up the vibrant culture of Addis Ababa, we've got plenty of options for you too. Learn how to cook traditional Ethiopian cuisine, visit local schools and orphanages, or take a trip to the Born Free Wildlife Center to see rescued lions up close. And if you're a music lover, we'll make sure you know all the best spots for jazz and traditional folklore performances. Plus, we'll introduce you to the delicious Tej - a local honey wine you won't want to miss.",
          "Don't miss out on the chance to explore this fascinating country, even if you only have a short time to spare. Let us help you make the most of your visit to Ethiopia!",
        ],
        lr: false,
        img1: Images.addis3,
        img2: Images.addis1,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
  },
  {
    id: 10,
    title: "Filming in Ethiopia",
    description:
      "Ethiopia is a land of vibrant culture and diverse landscapes that have recently caught the attention of international filmmakers.",
    image: Images.bale1,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "Capturing the Beauty of Ethiopia",
        description: [
          "If you need a fixer in Ethiopia, Sawla Tours is a one-stop shop for in-country media production services and location logistics. We have extensive experience in every aspect of press, film, and TV production. Whether you are developing a documentary series, feature film, music video, natural history program, commercial, or reality TV show; or planning a scientific research journey, a fashion shoot, a charity event or an expedition - Sawla Tours can make it happen.",
          "We provide a range of services to assist with your pre-production needs, including brainstorming sessions with knowledgeable experts who are familiar with the country's terrain and culture. Our team can also conduct research without you needing to travel to the location, providing you with realistic and reasonable quotes to fit into your scheduled budget. Additionally, we offer location management, schedule suggestions, and photographs for proposals, so you can make informed decisions about your shoot or event.",
        ],
        lr: true,
        img1: Images.kafta1,
        img2: Images.hawassa1,
        button: "Start Planning",
        link: "/enquire",
      },
      {
        title: "",
        description: [
          "Our production services are equally comprehensive, and we can assemble a team of experienced professionals who can help with everything from obtaining filming permits from the Ethiopian Government to arranging the importation of equipment. We can also provide location scouting, security, and field support, as well as outfitting and camps for locations. Furthermore, we can suggest and assist with location identification and negotiations, and we can even set up aerial filming from a variety of aircraft.",
          "At Sawla Tours, we pride ourselves on our professionalism, confidentiality, and flexible approach. We understand that every project is unique, and we work closely with our clients to ensure that their needs are met. Our around-the-clock support means that you can contact us at any time, and we'll be on hand to assist with any issues that may arise. If you're looking for a reliable and experienced partner to help with your filming needs in Ethiopia, look no further than Sawla Tours.",
        ],
        lr: false,
        img1: Images.addis3,
        img2: Images.addis1,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
  },
];

export const getTour = (id: number) => {
  const result = EthiopiaToursArray.filter((tour) => tour.id === id);
  if (result.length === 0) {
    return null;
  }
  return result[0];
};
