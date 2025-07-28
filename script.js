const developers = [
  {
    name: "𝗗𝗶𝗹𝗮 𝗟𝗞",
    role: "𝗢𝘄𝗻𝗲𝗿",
    desc: "𝗙𝘂𝗹𝗹 𝗦𝘁𝗮𝗰𝗸 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗮𝗻𝗱 𝗠𝗼𝗻𝗲𝘆 𝗛𝗲𝗶𝘀𝘁 𝗠𝗗 𝗢𝘄𝗻𝗲𝗿",
    img: "https://i.ibb.co/Lzz4m84T/6317.jpg",
    altImg: "https://i.ibb.co/F4xRd319/Screenshot-20250521-122127-Gallery.jpg"
  },
  {
    name: "𝗠𝗿. 𝗡𝗶𝗽𝘂𝗻",
    role: "𝗢𝘄𝗻𝗲𝗿",
    desc: "Developer",
    img: "https://i.ibb.co/vfjFdnt/5034.jpg",
    altImg: "https://i.ibb.co/F4xRd319/Screenshot-20250521-122127-Gallery.jpg"
  },
  {
    name: "Mr GOMIDA",
    role: "Admin",
    desc: "Developer",
    img: "https://i.ibb.co/6J1G915M/IMG-20250514-WA0193.jpg",
    altImg: "https://i.ibb.co/F4xRd319/Screenshot-20250521-122127-Gallery.jpg"
  },
  {
    name: "Black Ghost",
    role: "Admin",
    desc: "Developer",
    img: "https://i.ibb.co/zV32bGr7/IMG-20250528-WA0081.jpg",
    altImg: "https://i.ibb.co/F4xRd319/Screenshot-20250521-122127-Gallery.jpg"
  }
];

const projects = [
  {
    name: "Money Heist Main Bot",
    desc: "Money Heist MD Main Bot is a powerful, feature-rich WhatsApp bot designed to enhance your messaging experience",
    img: "https://i.ibb.co/F4xRd319/Screenshot-20250521-122127-Gallery.jpg",
    altImg: "https://i.ibb.co/F4xRd319/Screenshot-20250521-122127-Gallery.jpg"
  },
  {
    name: "Money Heist Mini Bot",
    desc: "This is the lightweight version of the Money Heist WhatsApp Bot, designed for fast, reliable, and automated performance. It connects instantly after device pairing and is completely free to use. Developed and maintained by MR DILA OFC and the Money Heist Team.",
    img: "https://i.ibb.co/F4xRd319/Screenshot-20250521-122127-Gallery.jpg",
    altImg: "https://i.ibb.co/F4xRd319/Screenshot-20250521-122127-Gallery.jpg"
  }
];

function createCard({ name, role, desc, img, altImg }) {
  return `
    <div class="card text-light">
      <img src="${img}" class="card-img-top primary-img" alt="${name}" />
      <img src="${altImg}" class="card-img-top alt-img" alt="${name} alternate" />
      <div class="card-body text-center">
        <h5 class="card-title">${name}</h5>
        <p class="card-text small details">${desc}</p>
      </div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const teamContainer = document.getElementById('team-cards');
  developers.forEach(dev => {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3 mb-4';
    col.innerHTML = createCard({ ...dev, role: dev.role });
    teamContainer.appendChild(col);
  });

  const projectContainer = document.getElementById('project-cards');
  projects.forEach(proj => {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3 mb-4';
    col.innerHTML = createCard({ ...proj, role: '' });
    projectContainer.appendChild(col);
  });
});
