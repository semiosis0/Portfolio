document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');
menu?.addEventListener('click',()=>{
  const opened = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(opened));
});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));


const portfolioCategories = [
  { slug:'branding', title:'Identité de marque', label:'Branding & identité visuelle', type:'image', media:[
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651315/branding-01.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794682370/branding-02.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651315/branding-03.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651316/branding-04.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651316/branding-05.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651316/branding-06.webp'
  ]},
  { slug:'advertising', title:'Publicité & campagnes', label:'Campagnes et concepts publicitaires', type:'image', media:[
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651135/advertising-01.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651139/advertising-02.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651140/advertising-03.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651139/advertising-04.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651147/advertising-05.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651139/advertising-06.webp'
  ]},
  { slug:'graphic-design', title:'Design graphique', label:'Design graphique et éditorial', type:'image', media:[
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651521/graphic-design-01.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651522/graphic-design-02.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651522/graphic-design-03.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651522/graphic-design-04.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651522/graphic-design-05.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651522/graphic-design-06.webp'
  ]},
  { slug:'packaging', title:'Packaging', label:'Packaging et design produit', type:'image', media:[
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651847/packaging-01.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651847/packaging-02.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651847/packaging-03.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651847/packaging-04.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651849/packaging-05.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794651846/packaging-06.webp'
  ]},
  { slug:'digital', title:'Digital & Web', label:'Design digital et expériences web', type:'image', media:[
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1795112170/Web-1.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1795112171/Web-2.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1795112171/Web-3.webp'
  ]},
  { slug:'illustration', title:'Illustration', label:'Illustration et création visuelle', type:'image', media:[
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855946/Illustration-1.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855946/Illustration-2.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855947/Illustration-4.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855947/Illustration-5.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855947/Illustration-3.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855951/Illustration-6.webp'
  ]},
  { slug:'motion-video', title:'Motion & vidéo', label:'Production audiovisuelle et animation', type:'video', media:[
    'https://res.cloudinary.com/s2aqvoda/video/upload/v1794675274/Lyrics_Son_Can.mp4',
    'https://res.cloudinary.com/s2aqvoda/video/upload/v1794675241/Ecran_Vid1.mp4',
    'https://res.cloudinary.com/s2aqvoda/video/upload/v1794674470/Final_Comp_1.mp4',
  ]},
  { slug:'merch', title:'Merch', label:'Textile, objets et merchandising', type:'image', media:[
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855755/1.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855755/2.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855755/3.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855756/4.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855756/5.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794855758/6.webp'
  ] },
  { slug:'print-signage', title:'Impression & signalétique', label:'Supports imprimés et signalétique', type:'image', media:[
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794652019/print-signage-01.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794652019/print-signage-02.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794652020/print-signage-03.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794652021/print-signage-04.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794652022/print-signage-05.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794652022/print-signage-06.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794652023/print-signage-07.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794652024/print-signage-08.webp',
    'https://res.cloudinary.com/s2aqvoda/image/upload/v1794652025/print-signage-09.webp'
  ]}
];

const totalProjects = portfolioCategories.reduce((total, category) => total + category.media.length, 0);
document.querySelector('.nav a[href="#work"] sup')?.replaceChildren(document.createTextNode(String(totalProjects)));
const workIntro = document.querySelector('.work-intro');
if (workIntro) workIntro.firstChild.textContent = `${totalProjects} PROJETS SÉLECTIONNÉS `;

const projectCaptions = {
  branding: [
    { title: 'Saveurs du Madagascar', year: '2026' },
    { title: 'Atelier HK', year: '2026' },
    { title: 'Reelgo', year: '2026' },
    { title: 'Origines Light Tour', year: '2026' },
    { title: 'La violette', year: '2026' },
    { title: 'Aura Kintu', year: '2026' }
  ],

  advertising: [
    { title: 'Parfum - Ombre', year: '2026' },
    { title: 'Maison Noire', year: '2026' },
    { title: 'Maison Beta', year: '2026' },
    { title: 'Maison Kèmi', year: '2026' },
    { title: 'Mira jewelry', year: '2026' },
    { title: 'Benin Tourisme', year: '2026' }
  ],

  'graphic-design': [
    { title: 'Booking - Renoi', year: '2026' },
    { title: 'Affiche - Step', year: '2026' },
    { title: 'Cover son - Jo nation', year: '2026' },
    { title: 'Ticket - Origines Light Tour', year: '2026' },
    { title: 'Carte - Nouvel an', year: '2026' },
    { title: 'Carte - invitation', year: '2026' }
  ],

  packaging: [
    { title: 'Nafis - Moutarde', year: '2026' },
    { title: 'Nafis - Pâtes alimentaires', year: '2026' },
    { title: 'Nafis - Sardines', year: '2026' },
    { title: 'Etiquette - Otikan', year: '2026' },
    { title: 'Packaging - Reelgo', year: '2026' },
    { title: 'Packaging - Damenature', year: '2026' }
  ],

  digital: [
    { title: 'Atelier de l-enseigne - Site web', year: '2025' },
    { title: 'Prototype de site : Sami AgTech', year: '2026' },
    { title: 'Design UI/UX', year: '2026' }
  ],

  illustration: [
    { title: 'Cartoon - Reydji', year: '2023' },
    { title: 'Cover - WAIT… WHAT?', year: '2025' },
    { title: 'Cartoon - Jécolia', year: '2024' },
    { title: 'Projet de BD', year: '2025' },
    { title: 'Projet Afro souls', year: '2025' },
    { title: 'Projet Afro souls', year: '2025' }
  ],

  'motion-video': [
    { title: 'Lyrics son CAN', year: '2026' },
    { title: 'Boucherie de la ferme', year: '2026' },
    { title: 'Panier de l-orient', year: '2026' }
  ],

  merch: [
    { title: 'Raremood - Alta', year: '2026' },
    { title: 'Raremood - Terra', year: '2026' },
    { title: 'Raremood - Void', year: '2026' },
    { title: 'Design Indépendant', year: '2026' },
    { title: 'Raremood - Persona', year: '2026' },
    { title: 'Jesus forever - Redeemed', year: '2026' }
  ],

  'print-signage': [
    { title: 'Empire du Garba', year: '2026' },
    { title: 'Empire des Mers', year: '2026' },
    { title: 'Panneau - Rojito', year: '2026' },
    { title: 'Bâche - Mariage', year: '2026' },
    { title: 'Vitrine - Optimal permis', year: '2026' },
    { title: 'Enseigne - Shopping by Aicha', year: '2026' },
    { title: 'Flocage - Soleil BTP', year: '2026' },
    { title: 'Flocage - Destock kash', year: '2026' },
    { title: 'Flocage - Electro Plus', year: '2026' }
  ]
};

const portfolioRoot = document.getElementById('portfolio-categories');
if (portfolioRoot) {
  portfolioCategories.forEach((category, categoryIndex) => {
    const section = document.createElement('section');
    section.className = 'portfolio-category reveal-on-scroll';
    const heading = document.createElement('div');
    heading.className = 'category-heading';
    const count = category.media.length;
    const available = category.media.filter(Boolean).length;
    heading.innerHTML = `<h3><span class="category-number">${String(categoryIndex+1).padStart(2,'0')} /</span> ${category.title}</h3><p>${String(count).padStart(2,'0')} PROJETS · ${category.label.toUpperCase()}</p>`;
    const grid = document.createElement('div');
    grid.className = 'category-grid';

    category.media.forEach((url, i) => {
      const card = document.createElement('article');
      card.className = 'work-card';
      const filename = `${category.slug}-${String(i+1).padStart(2,'0')}`;
      const figure = document.createElement('figure');
      figure.className = url ? 'media-frame' : 'media-frame is-empty';
      figure.dataset.file = url ? '' : 'VISUEL À AJOUTER';

      if (url && category.type === 'video') {
        const video = document.createElement('video');
        video.controls = true;
        video.muted = true;
        video.playsInline = true;
        video.preload = 'none';
        video.setAttribute('aria-label', `${category.title} — projet ${i+1}`);
        const source = document.createElement('source');
        source.src = url;
        source.type = 'video/mp4';
        video.appendChild(source);
        figure.appendChild(video);
      } else if (url) {
        const img = document.createElement('img');
        img.src = url.replace('/image/upload/', '/image/upload/f_auto,q_auto,w_1000/');
        img.alt = `${category.title} — projet ${i+1}`;
        img.loading = 'lazy';
        img.decoding = 'async';
        figure.appendChild(img);
      } else {
        const placeholder = document.createElement('span');
        placeholder.className = 'media-placeholder';
        placeholder.textContent = 'SÉMIOSIS';
        figure.appendChild(placeholder);
      }

      const caption = document.createElement('figcaption');

    const projectInfo = projectCaptions[category.slug]?.[i] || {};

    const status = document.createElement('strong');
    status.textContent = url
  ? (projectInfo.title || `Projet ${String(i+1).padStart(2,'0')}`)
  : 'À COMPLÉTER';

    const year = document.createElement('span');
    year.textContent = projectInfo.year || '';

    caption.append(status, year);
    card.append(figure, caption);
    grid.appendChild(card);
    });
    section.append(heading,grid);
    portfolioRoot.appendChild(section);
  });
}
const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
}),{threshold:.08});
document.querySelectorAll('.project,.expertise-list article,.manifesto-content,.portfolio-category').forEach(el=>{el.classList.add('reveal-on-scroll');observer.observe(el)});
