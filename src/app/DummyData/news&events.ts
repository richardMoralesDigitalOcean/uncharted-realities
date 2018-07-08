export interface Document {
    id: string; // each document requires a unique id
    type: string; // values can be 'events' or 'news' only!
    src: string; // the file location of the document's picture
    date: string; // date will be printed in view exactly as it's typed here
    author: string;
    title: string;
    body: string;
}
const newsDefaultSrc = 'assets/Images/backgrounds/futurescape/futurescape_neon_black_neon_blue.jpg';
const eventsDefaultSrc = 'assets/Images/backgrounds/futurescape/futurescape_medium.jpg';
const defaultAuthor = 'John Doe';
const news1: Document = {
    id: 'news1',
    type: 'news',
    src: newsDefaultSrc,
    date: 'July 8, 2018',
    author: defaultAuthor,
    title: `Google's First VR Adventure based on much-beloved French film`,
    body: `In 1998, Google co-founders Larry Page and Sergey Brin added a stick figure drawing
    to their company’s homepage as a fun way to let visitors know they were out of office attending
     the Burning Man festival in Nevada. This gave rise to the company’s famous Google Doodles,
      which are usually designed to honor important historical events, influential people,
       and holidays, and have become a mainstay for the search engine ever since.

       Now, 20 years later, Google is launching its first ever Doodle in virtual reality to celebrate
        Georges Méliès, the French filmmaker and illusionist that some have called the
         “father of special effects.” Google is timing the Doodle’s launch to
          coincide with the release date of one of Méliès’ popular works,
           “À la conquête du pôle (The Conquest of the Pole),” which was released in 1912.`
};
const news2: Document = {
    id: 'news2',
    type: 'news',
    src: newsDefaultSrc,
    date: 'July 8, 2018',
    author: defaultAuthor,
    title: 'New Samsung VR Out Today',
    body: `In 1998, Google co-founders Larry Page and Sergey Brin added a stick figure drawing
    to their company’s homepage as a fun way to let visitors know they were out of office attending
     the Burning Man festival in Nevada. This gave rise to the company’s famous Google Doodles,
      which are usually designed to honor important historical events, influential people,
       and holidays, and have become a mainstay for the search engine ever since.

       Now, 20 years later, Google is launching its first ever Doodle in virtual reality to celebrate
        Georges Méliès, the French filmmaker and illusionist that some have called the
         “father of special effects.” Google is timing the Doodle’s launch to
          coincide with the release date of one of Méliès’ popular works,
           “À la conquête du pôle (The Conquest of the Pole),” which was released in 1912.`
};
const news3: Document = {
    id: 'news3',
    type: 'news',
    src: newsDefaultSrc,
    date: 'July 8, 2018',
    author: defaultAuthor,
    title: 'New Samsung VR Out Today',
    body: `In 1998, Google co-founders Larry Page and Sergey Brin added a stick figure drawing
    to their company’s homepage as a fun way to let visitors know they were out of office attending
     the Burning Man festival in Nevada. This gave rise to the company’s famous Google Doodles,
      which are usually designed to honor important historical events, influential people,
       and holidays, and have become a mainstay for the search engine ever since.

       Now, 20 years later, Google is launching its first ever Doodle in virtual reality to celebrate
        Georges Méliès, the French filmmaker and illusionist that some have called the
         “father of special effects.” Google is timing the Doodle’s launch to
          coincide with the release date of one of Méliès’ popular works,
           “À la conquête du pôle (The Conquest of the Pole),” which was released in 1912.`
};
const event1: Document = {
    id: 'event1',
    type: 'events',
    src: eventsDefaultSrc,
    author: defaultAuthor,
    date: 'July 11, 2018',
    title: 'Uncharted Realities Event 1',
    body: 'Uncharted Realities is havingn an event. Bring all your friends and family for a great time!' +
    'The event begins at 12pm sharp so please be on time as not to miss out on any of the virtual action.'
};
const event2: Document = {
    id: 'event2',
    type: 'events',
    src: eventsDefaultSrc,
    author: defaultAuthor,
    date: 'July 11, 2018',
    title: 'Uncharted Realities Event 2',
    body: 'Uncharted Realities is havingn an event. Bring all your friends and family for a great time!' +
    'The event begins at 12pm sharp so please be on time as not to miss out on any of the virtual action.'
};
const event3: Document = {
    id: 'event3',
    type: 'events',
    src: eventsDefaultSrc,
    author: defaultAuthor,
    date: 'July 11, 2018',
    title: 'Uncharted Realities Event 3',
    body: 'Uncharted Realities is havingn an event. Bring all your friends and family for a great time!' +
    'The event begins at 12pm sharp so please be on time as not to miss out on any of the virtual action.'
};
export const documentsDummy: Document[] = [news1, news2, news3, event1, event2, event3];
