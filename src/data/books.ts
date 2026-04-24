export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  color: string;
  icon: string;
}

export const books: Book[] = [
  { id: '1', title: 'Alpomish', author: 'Oʻzbek xalq dostoni', description: 'Oʻzbek xalq qahramonlik dostoni, milliy gʻurur va jasorat timsoli.', category: 'Klassika', color: 'bg-emerald-500', icon: 'Book' },
  { id: '2', title: 'Zumrad va Qimmat', author: 'Xalq ertagi', description: 'Yaxshilik va yomonlik, mehnatsevarlik va dangasalik haqidagi mashhur ertak.', category: 'Bolalar', color: 'bg-amber-500', icon: 'Sparkles' },
  { id: '3', title: 'Boy ila xizmatchi', author: 'Hamza Hakimzoda Niyoziy', description: 'Ijtimoiy adolatsizlik va sinfiy ziddiyatlar haqidagi dramatik asar.', category: 'Klassika', color: 'bg-blue-500', icon: 'Users' },
  { id: '4', title: "O'tkan kunlar", author: 'Abdulla Qodiriy', description: 'Oʻzbek adabiyotining ilk romani, ishq va sadoqat qissasi.', category: 'Klassika', color: 'bg-rose-500', icon: 'Heart' },
  { id: '5', title: 'Mehrobdan chayon', author: 'Abdulla Qodiriy', description: 'Tarixiy sharoitda inson qadr-qimmati va fitnalar haqida hikoya.', category: 'Klassika', color: 'bg-indigo-500', icon: 'Shield' },
  { id: '6', title: 'Kecha va kunduz', author: 'Cho\'lpon', description: 'Milliy uygʻonish davri hayoti va ijtimoiy muammolar tasviri.', category: 'Klassika', color: 'bg-purple-500', icon: 'Moon' },
  { id: '7', title: 'Sariq devni minib', author: 'Xudoyberdi To\'xtaboyev', description: 'Hoshimjonning sarguzashtlari orqali bolalik dunyosining quvnoq tasviri.', category: 'Bolalar', color: 'bg-yellow-500', icon: 'Ghost' },
  { id: '8', title: 'Shum bola', author: 'G\'afur G\'ulom', description: 'Shum bolaning sarguzashtlari va oʻzbekona yumor bilan boyitilgan qissa.', category: 'Klasika', color: 'bg-orange-500', icon: 'Smile' },
  { id: '9', title: 'Ufq', author: 'Said Ahmad', description: 'Urush va undan keyingi davr hayoti, insoniy munosabatlar dramasi.', category: 'Klassika', color: 'bg-slate-600', icon: 'Sunrise' },
  { id: '10', title: 'Ikki eshik orasi', author: 'O\'tkir Hoshimov', description: 'Inson umri, taqdir sinovlari va mehr-oqibat haqidagi chuqur falsafiy asar.', category: 'Klassika', color: 'bg-cyan-600', icon: 'DoorOpen' },
  { id: '11', title: 'Dunyoning ishlari', author: 'O\'tkir Hoshimov', description: 'Ona mehri va dunyoning turfa tashvishlari haqida ta\'sirli hikoyalar.', category: 'Hikoya', color: 'bg-pink-500', icon: 'Globe' },
  { id: '12', title: "Mening o'g'rigina bolam", author: 'G\'afur G\'ulom', description: 'Ona qalbi va farzand tarbiyasi haqidagi mashhur hikoya.', category: 'Hikoya', color: 'bg-red-400', icon: 'Baby' },
  { id: '13', title: 'Oq kema', author: 'Chingiz Aytmatov', description: 'Bolalik orzulari va shafqatsiz hayot toʻqnashuvi haqidagi asar.', category: 'Jahon', color: 'bg-blue-400', icon: 'Ship' },
  { id: '14', title: 'Bolalik', author: 'Oybek', description: 'Muallifning bolalik yillari va oʻsha davr hayoti haqidagi xotiralari.', category: 'Bolalar', color: 'bg-emerald-400', icon: 'Trees' },
  { id: '15', title: 'Chol va dengiz', author: 'Ernest Xeminguey', description: 'Inson matonati va tabiat bilan kurashi haqidagi jahonshumul qissa.', category: 'Jahon', color: 'bg-blue-800', icon: 'Waves' },
  { id: '16', title: 'Kichkina shahzoda', author: 'Antuan de Sent-Ekzyuperi', description: 'Kattalar dunyosiga bolalar nigohi bilan boqilgan ajoyib ertak-qissa.', category: 'Bolalar', color: 'bg-sky-500', icon: 'Star' },
  { id: '17', title: 'Robinzon Kruzo', author: 'Daniel Defo', description: 'Kimsasiz oroldagi omon qolish va iroda haqidagi sarguzasht asar.', category: 'Sarguzasht', color: 'bg-lime-600', icon: 'Compass' }
];

// Add the versions with sequence numbers as requested by the user
const generateVersionedBooks = () => {
  const versioned: Book[] = [];
  const baseBooks = [...books];
  
  for (let version = 1; version <= 18; version++) {
    baseBooks.forEach((book, index) => {
      // Just to populate the long list as requested
      if (version === 1) {
        // Already have base, but adding with suffix for consistency if requested
        versioned.push({
          ...book,
          id: `v${version}-${index}`,
          title: `${book.title} ${version}`
        });
      } else {
        versioned.push({
          ...book,
          id: `v${version}-${index}`,
          title: `${book.title} ${version}`
        });
      }
    });
  }
  return versioned;
};

export const allBooks = [...books, ...generateVersionedBooks()];
