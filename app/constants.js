const {
  titan,
  europa,
  mars,
  moon,
  douglasHurley,
  markShuttleworth,
  victorGlover,
  anoushehAnsari,
  launchVehicleLandscape,
  launchVehiclePortrait,
  spaceCapsuleLandscape,
  spaceportLandscape,
  spaceportPortrait,
  spaceCapsulePortrait,
} = require("./assets");

const home = {
  title: "So, you want to travel to",
  name: "Space",
  description:
    "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax     because we’ll give you a truly out of this world experience! ",
  button: "Explore",
};

const nav = [
  { label: "00 Home", url: "/" },
  { label: "01 Destinations", url: "/destinations" },
  { label: "02 Crew", url: "/crew" },
  { label: "03 Technology", url: "/technology" },
];

const destinations = {
  moon: {
    name: "Moon",
    images: {
      moon,
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  mars: {
    name: "Mars",
    images: {
      mars,
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  europa: {
    name: "Europa",
    images: {
      europa,
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  titan: {
    name: "Titan",
    images: { titan },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
};

const crew = {
  douglasHurley: {
    name: "Douglas Hurley",
    images: {
      douglasHurley,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  markShuttleworth: {
    name: "Mark Shuttleworth",
    images: {
      markShuttleworth,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  victorGlover: {
    name: "Victor Glover",
    images: {
      victorGlover,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  anoushehAnsari: {
    name: "Anousheh Ansari",
    images: {
      anoushehAnsari,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
};

const technology = {
  launchVehicle: {
    name: "Launch vehicle",
    images: {
      portrait: launchVehiclePortrait,
      landscape: launchVehicleLandscape,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  spaceport: {
    name: "Spaceport",
    images: {
      portrait: spaceportPortrait,
      landscape: spaceportLandscape,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  spaceCapsule: {
    name: "Space capsule",
    images: {
      portrait: spaceCapsulePortrait,
      landscape: spaceCapsuleLandscape,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

const technologyLinks = {
  launchVehicle: { url: "/technology/launchVehicle", label: 1 },
  spaceport: { url: "/technology/spaceport", label: 2 },
  spaceCapsule: { url: "/technology/spaceCapsule", label: 3 },
};

const crewLinks = {
  douglasHurley: {
    url: "/crew/douglasHurley",
    label: "Douglas Hurley",
  },
  markShuttleworth: {
    url: "/crew/markShuttleworth",
    label: "Mark Shuttleworth",
  },
  victorGlover: {
    url: "/crew/victorGlover",
    label: "Victor Glover",
  },
  anoushehAnsari: {
    url: "/crew/anoushehAnsari",
    label: "Anousheh Ansari",
  },
};

const destinationLinks = {
  moon: { url: "/destinations/moon", label: "moon" },
  mars: { url: "/destinations/mars", label: " mars" },
  europa: { url: "/destinations/europa", label: "europa" },
  titan: { url: "/destinations/titan", label: "titan" },
};

export {
  home,
  nav,
  destinations,
  crew,
  technology,
  technologyLinks,
  crewLinks,
  destinationLinks,
};
