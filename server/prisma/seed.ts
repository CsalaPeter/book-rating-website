import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  console.log("🌱 Starting seed...");

  await prisma.category.createMany({
    data: [
      { name: "Fantasy" },
      { name: "Science Fiction" },
      { name: "Utopia" },
      { name: "Action" },
      { name: "Adventure" },
      { name: "Mystery" },
      { name: "Horror" },
      { name: "Thriller" },
      { name: "Historical Fiction" },
      { name: "Romance" },
      { name: "Young Adult" },
      { name: "Autobiography" },
      { name: "Biography" },
      { name: "History" },
      { name: "True Crime" },
      { name: "Humor" },
      { name: "Dystopia" },
      { name: "Post Apocalyptic" },
      { name: "Fiction" },
      { name: "Apocalyptic" },
      { name: "Mystery Thriller" },
      { name: "Nonfiction" },
      { name: "Crime" },
      { name: "American History" },
      { name: "Survival" },
      { name: "Travel" },
      { name: "Science" },
      { name: "Paranormal" },
      { name: "Suspense" },
      { name: "Adult" },
      { name: "Classics" },
      { name: "Horror Thriller" },
      { name: "Historical" },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Categories created.");

  await prisma.author.createMany({
    data: [
      { name: "Dmitry Glukhovsky" },
      { name: "Rachel Louise Adams" },
      { name: "David Grann" },
      { name: "Stephen King" },
      { name: "Ronald Malfi" },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Authors created.");

  const [glukhovsky, louise_adams, david_grann, stephen_king, ronald_malfi] =
    await prisma.author.findMany();

  await prisma.book.createMany({
    data: [
      {
        title: "Metro 2033",
        description: `The year is 2033. The world has been reduced to rubble. Humanity is nearly extinct. The half-destroyed cities have become uninhabitable through radiation. Beyond their boundaries, they say, lie endless burned-out deserts and the remains of splintered forests. Survivors still remember the past greatness of humankind. But the last remains of civilisation have already become a distant memory, the stuff of myth and legend.

  More than 20 years have passed since the last plane took off from the earth. Rusted railways lead into emptiness. The ether is void and the airwaves echo to a soulless howling where previously the frequencies were full of news from Tokyo, New York, Buenos Aires. Man has handed over stewardship of the earth to new life-forms. Mutated by radiation, they are better adapted to the new world. Man's time is over.

  A few score thousand survivors live on, not knowing whether they are the only ones left on earth. They live in the Moscow Metro - the biggest air-raid shelter ever built. It is humanity's last refuge. Stations have become mini-statelets, their people uniting around ideas, religions, water-filters - or the simple need to repulse an enemy incursion. It is a world without a tomorrow, with no room for dreams, plans, hopes. Feelings have given way to instinct - the most important of which is survival. Survival at any price. VDNKh is the northernmost inhabited station on its line. It was one of the Metro's best stations and still remains secure. But now a new and terrible threat has appeared.

  Artyom, a young man living in VDNKh, is given the task of penetrating to the heart of the Metro, to the legendary Polis, to alert everyone to the awful danger and to get help. He holds the future of his native station in his hands, the whole Metro - and maybe the whole of humanity.`,
        publishedAt: new Date("2007-01-01"),
        isbn: 9781481845700,
        pageCount: 458,
        coverImageUrl:
          "https://ia800507.us.archive.org/view_archive.php?archive=/8/items/l_covers_0009/l_covers_0009_93.zip&file=0009931150-L.jpg",
        rating: 4.01,
        authorId: glukhovsky.id,
      },
      {
        title: "Metro 2034",
        description: `The basis of two bestselling computer games Metro 2033 and Metro Last Light, the Metro books have put Dmitry Glukhovsky in the vanguard of Russian speculative fiction alongside the creator of Night Watch, Sergei Lukyanenko.

        A year after the events of METRO 2033 the last few survivors of the apocalypse, surrounded by mutants and monsters, face a terrifying new danger as they hang on for survival in the tunnels of the Moscow Metro.

        Featuring blistering action, vivid and tough characters, claustrophobic tension and dark satire the Metro books have become bestsellers across Europe.`,
        publishedAt: new Date("2009-03-16"),
        isbn: 9783453533011,
        pageCount: 283,
        coverImageUrl:
          "https://ia601909.us.archive.org/view_archive.php?archive=/31/items/l_covers_0013/l_covers_0013_28.zip&file=0013287273-L.jpg",
        rating: 3.52,
        authorId: glukhovsky.id,
      },
      {
        title: "Metro 2035",
        description: `World War Three wiped out the humankind. The planet is empty now. Huge cities became dust and ashes. Railroads are being eaten by rust. Abandoned satellites hang lonely on the orbit. Radio is mute on all the frequencies.

        The only survivors of the last war were those who made it into the gates of the Metro, the subway system of Moscow city. It’s there, hundreds of feet below the ground, in the vaults of what was constructed as the world’s largest air-raids shelter that people try to outlive the end of the days. It’s there that they created a new world for themselves.

        The stations of Metro became city-states, and its citizens, torn apart by religions and ideologies are fighting for the now scarce commodities: air, water, and space. This tiny underground world can only remind humans of an immense world they once were the masters of.

        It’s been twenty years past Doomsday, and yet the survivors refuse to give up. The most stubborn of them keep cherishing a dream: when the radiation level from nuclear bombings subsides, they will be able to return to the surface and have the life their parents once had.

        But the most stubborn of the stubborn continues to search for other survivors in this huge emptiness that once was called Earth. His name is Artyom. He would give anything to lead his own people from the underground onto the surface.

        And he will.`,
        publishedAt: new Date("2015-07-12"),
        isbn: 9781539930723,
        pageCount: 497,
        coverImageUrl:
          "https://ia800404.us.archive.org/view_archive.php?archive=/33/items/l_covers_0010/l_covers_0010_69.zip&file=0010695757-L.jpg",
        rating: 3.52,
        authorId: glukhovsky.id,
      },
      {
        title: "No Rest for the Wicked",
        description: `With an expert hand, Rachel Louise Adams’s debut No Rest for the Wicked reads like an edge of your seat, heart-pounding scary movie.

        In one Halloween obsessed Midwestern town, everyone’s on red alert after a local politician goes missing. Little do they know it’s only the beginning.

        It’s been close to twenty years since forensic pathologist Dolores Hawthorne left her hometown of Little Horton, Wisconsin. The town is famous for its Halloween celebrations, but also its history of violent deaths linked to the holiday. To Dolores, it’s the place she fled, family, bad memories, and all. Until the FBI calls to tell her that her father--the former mayor turned US Senator--is missing under mysterious circumstances.

        Some people count to ten to wake up from a nightmare. Dolores always counts the bones of her head sphenoid, frontal, lacrimal. But no matter how many times she counts them, it doesn’t change the fact that her father is missing, that his final words of warning to her were to trust no one, and that now, the rest of her family is giving Dolores a chilling welcome. With Halloween fast approaching, Dolores must face the past she left behind before it’s too late.`,
        publishedAt: new Date("2025-09-16"),
        isbn: 9781250362117,
        pageCount: 336,
        coverImageUrl: "",
        rating: 3.95,
        authorId: louise_adams.id,
      },
      {
        title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
        description: `On January 28, 1742, a ramshackle vessel of patched-together wood and cloth washed up on the coast of Brazil. Inside were thirty emaciated men, barely alive, and they had an extraordinary tale to tell. They were survivors of His Majesty's Ship the Wager, a British vessel that had left England in 1740 on a secret mission during an imperial war with Spain. While the Wager had been chasing a Spanish treasure-filled galleon known as "the prize of all the oceans," it had wrecked on a desolate island off the coast of Patagonia. The men, after being marooned for months and facing starvation, built the flimsy craft and sailed for more than a hundred days, traversing nearly 3,000 miles of storm-wracked seas. They were greeted as heroes.

        But then . . . six months later, another, even more decrepit craft landed on the coast of Chile. This boat contained just three castaways, and they told a very different story. The thirty sailors who landed in Brazil were not heroes - they were mutineers. The first group responded with countercharges of their own, of a tyrannical and murderous senior officer and his henchmen. It became clear that while stranded on the island the crew had fallen into anarchy, with warring factions fighting for dominion over the barren wilderness. As accusations of treachery and murder flew, the Admiralty convened a court martial to determine who was telling the truth. The stakes were life-and-death--for whomever the court found guilty could hang.

        The Wager is a grand tale of human behavior at the extremes told by one of our greatest nonfiction writers. Grann's recreation of the hidden world on a British warship rivals the work of Patrick O'Brian, his portrayal of the castaways' desperate straits stands up to the classics of survival writing such as The Endurance, and his account of the court martial has the savvy of a Scott Turow thriller. As always with Grann's work, the incredible twists of the narrative hold the reader spellbound.`,
        publishedAt: new Date("2022-04-18"),
        isbn: 9780385534260,
        pageCount: 352,
        coverImageUrl:
          "https://ia800505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_30.zip&file=0014303522-L.jpg",
        rating: 4.17,
        authorId: david_grann.id,
      },
      {
        title:
          "Killers of the Flower Moon: The Osage Murders and the Birth of the FBI",
        description: `In the 1920s, the richest people per capita in the world were members of the Osage Nation in Oklahoma. After oil was discovered beneath their land, the Osage rode in chauffeured automobiles, built mansions, and sent their children to study in Europe.

        Then, one by one, the Osage began to be killed off. The family of an Osage woman, Mollie Burkhart, became a prime target. One of her relatives was shot. Another was poisoned. And this was just the beginning, as more and more Osage were dying under mysterious circumstances, and many of those who dared to investigate the killings were themselves murdered.

        As the death toll rose, the newly created FBI took up the case, and the young director, J. Edgar Hoover, turned to a former Texas Ranger named Tom White to try to unravel the mystery. White put together an undercover team, including a Native American agent who infiltrated the region, and together with the Osage began to expose one of the most chilling conspiracies in American history.`,
        publishedAt: new Date("2017-04-18"),
        isbn: 9780593470831,
        pageCount: 338,
        coverImageUrl:
          "https://ia902309.us.archive.org/view_archive.php?archive=/20/items/l_covers_0008/l_covers_0008_87.zip&file=0008873531-L.jpg",
        rating: 4.14,
        authorId: david_grann.id,
      },
      {
        title: "The Lost City of Z: A Tale of Deadly Obsession in the Amazon",
        description: `A grand mystery reaching back centuries. A sensational disappearance that made headlines around the world. A quest for truth that leads to death, madness or disappearance for those who seek to solve it. The Lost City of Z is a blockbuster adventure narrative about what lies beneath the impenetrable jungle canopy of the Amazon.

        After stumbling upon a hidden trove of diaries, New Yorker writer David Grann set out to solve "the greatest exploration mystery of the 20th century": What happened to the British explorer Percy Fawcett & his quest for the Lost City of Z?

        In 1925, Fawcett ventured into the Amazon to find an ancient civilization, hoping to make one of the most important discoveries in history. For centuries Europeans believed the world's largest jungle concealed the glittering kingdom of El Dorado. Thousands had died looking for it, leaving many scientists convinced that the Amazon was truly inimical to humans. But Fawcett, whose daring expeditions inspired Conan Doyle's The Lost World, had spent years building his scientific case. Captivating the imagination of millions round the globe, Fawcett embarked with his 21-year-old son, determined to prove that this ancient civilisation--which he dubbed Z--existed. Then his expedition vanished. Fawcett's fate, & the tantalizing clues he left behind about Z, became an obsession for hundreds who followed him into the uncharted wilderness.

        For decades scientists & adventurers have searched for evidence of Fawcett's party & the lost City of Z. Countless have perished, been captured by tribes or gone mad. As Grann delved ever deeper into the mystery surrounding Fawcett's quest, & the greater mystery of what lies within the Amazon, he found himself, like the generations who preceded him, being irresistibly drawn into the jungle's green hell. His quest for the truth & discoveries about Fawcett's fate & Z form the heart of this complexly enthralling narrative.`,
        publishedAt: new Date("2009-02-24"),
        isbn: 9780385513531,
        pageCount: 339,
        coverImageUrl:
          "https://ia902309.us.archive.org/view_archive.php?archive=/20/items/l_covers_0008/l_covers_0008_87.zip&file=0008873531-L.jpg",
        rating: 3.9,
        authorId: david_grann.id,
      },
      {
        title: "It",
        description: `Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.`,
        publishedAt: new Date("1977-01-28"),
        isbn: 9780450040184,
        pageCount: 497,
        coverImageUrl:
          "https://ia600505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_65.zip&file=0014656609-L.jpg",
        rating: 4.28,
        authorId: stephen_king.id,
      },
      {
        title: "The Shining",
        description: `Welcome to Derry, Maine ...

        It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real ...

        They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But none of them can withstand the force that has drawn them back to Derry to face the nightmare without an end, and the evil without a name.`,
        publishedAt: new Date("1986-09-15"),
        isbn: 9780450411434,
        pageCount: 1184,
        coverImageUrl:
          "https://ia800505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_65.zip&file=0014656132-L.jpg",
        rating: 4.24,
        authorId: stephen_king.id,
      },
      {
        title: "Misery",
        description: `Paul Sheldon. He's a bestselling novelist who has finally met his biggest fan. Her name is Annie Wilkes and she is more than a rabid reader - she is Paul's nurse, tending his shattered body after an automobile accident. But she is also his captor, keeping him prisoner in her isolated house.`,
        publishedAt: new Date("1987-06-08"),
        isbn: 9780450417399,
        pageCount: 370,
        coverImageUrl:
          "https://ia600505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_65.zip&file=0014655205-L.jpg",
        rating: 4.23,
        authorId: stephen_king.id,
      },
      {
        title: "Salem’s Lot",
        description: `Thousands of miles away from the small township of 'Salem's Lot, two terrified people, a man and a boy, still share the secrets of those clapboard houses and tree-lined streets. They must return to 'Salem's Lot for a final confrontation with the unspeakable evil that lives on in the town.`,
        publishedAt: new Date("1975-10-17"),
        isbn: 9780450031069,
        pageCount: 483,
        coverImageUrl:
          "https://ia800505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_65.zip&file=0014656540-L.jpg",
        rating: 4.1,
        authorId: stephen_king.id,
      },
      {
        title: "Come with Me",
        description: `A masterful, heart-palpitating novel of small-town horror and psychological dread from a Bram Stoker nominee.

        Aaron Decker's life changes one December morning when his wife Allison is killed. Haunted by her absence--and her ghost--Aaron goes through her belongings, where he finds a receipt for a motel room in another part of the country. Piloted by grief and an increasing sense of curiosity, Aaron embarks on a journey to discover what Allison had been doing in the weeks prior to her death.

        Yet Aaron is unprepared to discover the dark secrets Allison kept, the death and horror that make up the tapestry of her hidden life. And with each dark secret revealed, Aaron becomes more and more consumed by his obsession to learn the terrifying truth about the woman who had been his wife, even if it puts his own life at risk.`,
        publishedAt: new Date("2021-07-20"),
        isbn: 9781789097382,
        pageCount: 407,
        coverImageUrl:
          "https://ia804605.us.archive.org/view_archive.php?archive=/14/items/l_covers_0011/l_covers_0011_55.zip&file=0011551457-L.jpg",
        rating: 3.91,
        authorId: ronald_malfi.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Books created.");

  const categories = await prisma.category.findMany();
  const cat = Object.fromEntries(categories.map((c) => [c.name, c]));

  await Promise.all([
    prisma.book.update({
      where: { isbn: 9781481845700 },
      data: {
        categories: {
          connect: [
            { id: cat["Science Fiction"].id },
            { id: cat["Fiction"].id },
            { id: cat["Horror"].id },
            { id: cat["Post Apocalyptic"].id },
            { id: cat["Dystopia"].id },
            { id: cat["Fantasy"].id },
            { id: cat["Apocalyptic"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9783453533011 },
      data: {
        categories: {
          connect: [
            { id: cat["Science Fiction"].id },
            { id: cat["Fiction"].id },
            { id: cat["Horror"].id },
            { id: cat["Post Apocalyptic"].id },
            { id: cat["Dystopia"].id },
            { id: cat["Fantasy"].id },
            { id: cat["Apocalyptic"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9781539930723 },
      data: {
        categories: {
          connect: [
            { id: cat["Science Fiction"].id },
            { id: cat["Fiction"].id },
            { id: cat["Horror"].id },
            { id: cat["Post Apocalyptic"].id },
            { id: cat["Dystopia"].id },
            { id: cat["Fantasy"].id },
            { id: cat["Apocalyptic"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9781250362117 },
      data: {
        categories: {
          connect: [
            { id: cat["Mystery"].id },
            { id: cat["Thriller"].id },
            { id: cat["Horror"].id },
            { id: cat["Mystery Thriller"].id },
            { id: cat["Fiction"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9780385534260 },
      data: {
        categories: {
          connect: [
            { id: cat["Nonfiction"].id },
            { id: cat["History"].id },
            { id: cat["Historical"].id },
            { id: cat["True Crime"].id },
            { id: cat["Crime"].id },
            { id: cat["Mystery"].id },
            { id: cat["Survival"].id },
            { id: cat["Adventure"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9780593470831 },
      data: {
        categories: {
          connect: [
            { id: cat["Nonfiction"].id },
            { id: cat["History"].id },
            { id: cat["True Crime"].id },
            { id: cat["Crime"].id },
            { id: cat["Mystery"].id },
            { id: cat["Historical"].id },
            { id: cat["American History"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9780385513531 },
      data: {
        categories: {
          connect: [
            { id: cat["Nonfiction"].id },
            { id: cat["History"].id },
            { id: cat["Adventure"].id },
            { id: cat["Travel"].id },
            { id: cat["Biography"].id },
            { id: cat["Historical"].id },
            { id: cat["Mystery"].id },
            { id: cat["Science"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9780450040184 },
      data: {
        categories: {
          connect: [
            { id: cat["Horror"].id },
            { id: cat["Fiction"].id },
            { id: cat["Thriller"].id },
            { id: cat["Classics"].id },
            { id: cat["Fantasy"].id },
            { id: cat["Paranormal"].id },
            { id: cat["Mystery"].id },
            { id: cat["Suspense"].id },
            { id: cat["Adult"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9780450411434 },
      data: {
        categories: {
          connect: [
            { id: cat["Horror"].id },
            { id: cat["Fiction"].id },
            { id: cat["Thriller"].id },
            { id: cat["Classics"].id },
            { id: cat["Fantasy"].id },
            { id: cat["Paranormal"].id },
            { id: cat["Mystery"].id },
            { id: cat["Horror Thriller"].id },
            { id: cat["Adult"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9780450417399 },
      data: {
        categories: {
          connect: [
            { id: cat["Horror"].id },
            { id: cat["Fiction"].id },
            { id: cat["Thriller"].id },
            { id: cat["Classics"].id },
            { id: cat["Fantasy"].id },
            { id: cat["Suspense"].id },
            { id: cat["Mystery"].id },
            { id: cat["Mystery Thriller"].id },
            { id: cat["Horror Thriller"].id },
            { id: cat["Adult"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9780450031069 },
      data: {
        categories: {
          connect: [
            { id: cat["Horror"].id },
            { id: cat["Fiction"].id },
            { id: cat["Thriller"].id },
            { id: cat["Fantasy"].id },
            { id: cat["Paranormal"].id },
            { id: cat["Mystery"].id },
            { id: cat["Horror Thriller"].id },
          ],
        },
      },
    }),
    prisma.book.update({
      where: { isbn: 9781789097382 },
      data: {
        categories: {
          connect: [
            { id: cat["Horror"].id },
            { id: cat["Fiction"].id },
            { id: cat["Thriller"].id },
            { id: cat["Fantasy"].id },
            { id: cat["Suspense"].id },
            { id: cat["Mystery"].id },
            { id: cat["Horror Thriller"].id },
            { id: cat["Mystery Thriller"].id },
            { id: cat["Crime"].id },
            { id: cat["Adult"].id },
          ],
        },
      },
    }),
  ]);

  console.log("✅ Books linked to categories.");
  console.log("🎉 Seeding complete!");
}

seed().then(() => prisma.$disconnect());
