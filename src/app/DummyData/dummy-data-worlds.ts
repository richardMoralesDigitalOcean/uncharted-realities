interface Info {
    label: string;
    text?: string; // handles string
    data?: string[]; // handles string[]
}
interface Profile {
    src: string;
    title: string;
    info: Info[];
    bio: string;
}

const resi7: Profile = {
    title: 'Resident Evil 7',
    src: 'assets/Images/worlds/resi7.jpg',
    info: [
        {label: 'Developer', text: 'Capcom'},
        {label: 'Publisher', text: 'Capcom'},
        {label: 'Release Date', text: 'Jan 24, 2017'},
        {label: 'Genre', data: ['Survival Horror', 'Action']}
    ],
    bio: `Resident Evil 7: Biohazard is a survival horror game developed and published
    by Capcom, released in January 2017 for Windows, PlayStation 4, and Xbox One,
    and in May 2018 for the Nintendo Switch (Japan). Following the more action-oriented
    Resident Evil 5 and Resident Evil 6, Resident Evil 7 returns to the franchise's
    survival horror roots, emphasizing exploration. The player controls Ethan Winters
    as he searches for his wife in a derelict plantation occupied by a cannibal family,
    solving puzzles and fighting enemies. It is the first main series game to use a
    first-person view.`
};
const eve_valkyrie: Profile = {
    title: 'Eve Valkyrie',
    src: 'assets/Images/worlds/eve_valkyrie.jpg',
    info: [
        {label: 'Developer', text: 'CCP Games'},
        {label: 'Publisher', text: 'CCP Games & Oculus VR'},
        {label: 'Release Date', text: 'Mar 28, 2016'},
        {label: 'Genre', data: ['Sci-Fi', 'Action']}
    ],
    bio: `EVE: Valkyrie is a multiplayer dogfighting shooter game set in the EVE Online
    universe that is designed to use virtual reality headset technology. Originally
    launched for Microsoft Windows for use with the Oculus Rift virtual reality headset
    ,CCP Games has announced they plan to enable cross-platform play between the three
    major VR systems: the Oculus Rift, the HTC Vive, and the PlayStation VR.
    Released in March 2016, the game has two game mode options: Chronicles can be
    played in single player, while Combat allows eight by eight combat PvP
    (player versus player) missions. Reviews generally criticised the limited plot
    and limitations of single player mode, although the described "arcade experience"
    was praised for having intuitive controls and "exhilarating" dogfighting features,
    with PC Powerplay dubbing it "arguably the best VR experience currently available
    for the [Oculus Rift] platform."`
};
const lone_echo: Profile = {
    title: 'Lone Echo',
    src: 'assets/Images/worlds/loneEcho.jpg',
    info: [
        {label: 'Developer', text: 'Ready at Dawn'},
        {label: 'Publisher', text: 'Oculus Studios'},
        {label: 'Release Date', text: 'Jul 20, 2017'},
        {label: 'Genre', data: ['Sci-Fi', 'Action', 'Shooter']}
    ],
    bio: `Lone Echo is a virtual reality adventure game developed by
    Ready At Dawn, and published by Oculus Studios.[1] Set aboard a space station
    orbiting Saturn, it allows players to move in zero-gravity by grabbing and pushing
    off of the environment. In addition to the narrative single-player game, the title
    includes a team-based multiplayer sports mode called Echo Arena, which was also
    released as a stand-alone game.`
};
const elder_scrolls: Profile = {
    title: 'Elder Scrolls V: Skyrim',
    src: 'assets/Images/worlds/Skyrim.png',
    info: [
        {label: 'Developer', text: 'Bethesda Game Studios'},
        {label: 'Publisher', text: 'Bethesda Softworks'},
        {label: 'Release Date', text: 'Nov 17, 2017'},
        {label: 'Genre', data: ['Fantasy', 'Action', 'Hack & Slash']}
    ],
    bio: `The Elder Scrolls V: Skyrim is an action role-playing video game developed by
    Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment
    in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion, and was originally
    released worldwide for Microsoft Windows, PlayStation 3, and Xbox 360 on November 11, 2011.

    The game's main story revolves around the player character's quest to defeat Alduin
    the World-Eater, a dragon who is prophesied to destroy the world. The game is set
    200 years after the events of Oblivion and takes place in the fictional province of
    Skyrim. Over the course of the game, the player completes quests and develops the
    character by improving skills. The game continues the open-world tradition of its
    predecessors by allowing the player to travel anywhere in the game world at any time,
    and to ignore or postpone the main storyline indefinitely.`
};
const rigs: Profile = {
    title: 'Rigs',
    src: 'assets/Images/worlds/rigs.jpg',
    info: [
        {label: 'Developer', text: 'Guerrilla Cambridge'},
        {label: 'Publisher', text: 'Sony Interactive Entertainment'},
        {label: 'Release Date', text: 'Oct 13, 2016'},
        {label: 'Genre', data: ['Sci-Fi', 'Action']}
    ],
    bio: `RIGS: Mechanized Combat League is a first-person shooter sports
    video game developed by Guerrilla Cambridge and published by Sony Interactive
    Entertainment for the PlayStation 4 console and its virtual reality head-mounted
    display PlayStation VR. Players take control of large mechs known as "Rigs",
    as they compete in a professional sports competition set 50 years in the future.
    The sports competition takes place in an open arena based in real-world location
    such as Rio de Janeiro and Dubai.

    The overall gameplay consists of a five-minute match divided into two halves.
    Six players are grouped in two three-man teams. Rigs are equipped with a variety
    of weapons loadouts, which players can use to score a Takedown by destroying an
    opposing team's Rig`
};
const drive_club: Profile = {
    title: 'Drive Club',
    src: 'assets/Images/worlds/driveClub.jpg',
    info: [
        {label: 'Developer', text: 'Evolution Studios'},
        {label: 'Publisher', text: 'Sony Computer Entertainment'},
        {label: 'Release Date', text: 'Oct 13, 2016'},
        {label: 'Genre', data: ['Racing']}
    ],
    bio: `Driveclub is a racing game in which players compete in racing event
    around the world in a variety of different fashions. Players can compete
    in clubs with other players, earning a reputation as one of the best clubs,
    and leveling up to unlock better items. Another game mode is tour, essentially
    a campaign mode. Players can compete in standard races, as well as time trials,
    drifting events, and championship tournaments, which may take place in Norway,
    Canada, Scotland, India, Japan, and Chile. Players may customize their car, their club,
    or their driver, and may complete optional challenges during events.
    A weather system and day-night cycle is also included.`
};
const rush_of_blood: Profile = {
    title: 'Until Dawn: Rush of Blood',
    src: 'assets/Images/worlds/rushOfBlood.jpg',
    info: [
        {label: 'Developer', text: 'Supermassive Games'},
        {label: 'Publisher', text: 'Sony Interactive Entertainment'},
        {label: 'Release Date', text: 'Oct 13, 2016'},
        {label: 'Genre', data: ['Survival Horror', 'Action']}
    ],
    bio: `Until Dawn: Rush of Blood is an arcade survival horror first-person shooter
     developed by Supermassive Games and published by Sony Interactive Entertainment,
     released on 13 October 2016 worldwide for PlayStation VR headset on PlayStation 4.
      It is a direct spin-off from Until Dawn and features the player riding a horror-themed
      roller coaster while shooting at inanimate objects and live enemies.

      The game is a direct spin-off from Until Dawn. The player plays on a roller coaster
      cart while going through a horror-themed carnival amusement park which grows more
      intense as the player progresses through the game.[1] The game features seven
      different roller coasters that feature some of the same locations and characters
      from its brethren although different themes, and are quickly loaded by default
      with handguns, although other weapons such as grenade launchers will be available.
      `
};
const batman: Profile = {
    title: 'Batman: Arkham VR',
    src: 'assets/Images/worlds/batman.png',
    info: [
        {label: 'Developer', text: 'Rocksteady Studios'},
        {label: 'Publisher', text: 'Warner Bros Interactive Studios'},
        {label: 'Release Date', text: 'Oct 11, 2016'},
        {label: 'Genre', data: ['Action']}
    ],
    bio: `Batman: Arkham VR is a virtual reality adventure video game developed by Rocksteady
    Studios and published by Warner Bros. Interactive Entertainment for PlayStation 4 and
    Microsoft Windows. Based on the DC Comics superhero Batman, it is a part of the
    Batman: Arkham series and the first installment to use virtual reality headsets,
    allowing players to experience the game world from Batman's perspective. Arkham VR
    was released worldwide on October 11, 2016, for PlayStation 4 and on April 25, 2017,
    for Microsoft Windows.

    Written by Ian Ball and Martin Lancaster, Arkham VR is based on the franchise's
    long-running comic book mythos. The game's storyline takes place between 2011's
    Batman: Arkham City and 2015's Batman: Arkham Knight, and follows Batman as he
    investigates the disappearance of his allies Nightwing and Robin.`
};
const hustle_kings: Profile = {
    title: 'Hustle Kings',
    src: 'assets/Images/worlds/hustleKings.png',
    info: [
        {label: 'Developer', text: 'VooFoo Studios'},
        {label: 'Publisher', text: 'Sony Computer Entertainment'},
        {label: 'Release Date', text: 'Oct 13, 2016'},
        {label: 'Genre', data: ['Table games', 'Pool']}
    ],
    bio: `Hustle Kings is a pool video game developed by VooFoo Studios for the PlayStation 3.
    It was released on the PlayStation Store in Europe on 22 December 2009 and in North
    America on 28 January 2010. The game features a career mode as well as various
    trick shot and tournament modes. The game also features online play allowing the
    user to compete against other players over the PlayStation Network. Hustle Kings
    is also available for the PlayStation Vita portable gaming system.

    Hustle Kings allows the user to play their external music from the PlayStation 3
    hard drive during gameplay. It also utilises the PlayStation 3's implementation of
    the YouTube API, allowing users to record video of their gameplay and upload it to
    the video-sharing website from within the game.[5] Hustle Kings has also been confirmed
    to support PlayStation Move as an input method. On 11 August 2014, it was announced that
    Hustle Kings will be coming to the PlayStation 4 in the form of a free-to-play release.
     On 18 March 2015, Hustle Kings released for the PlayStation 4 in Europe and in North
     America on 9 June 2015. A port of Hustle Kings titled 'Hustle Kings VR' has been confirmed
      to be launching with the PlayStation VR headset for the PlayStation 4 on October 13.`
};
export const worldsDummy: Profile[] = [
    resi7, eve_valkyrie, lone_echo, elder_scrolls, rigs,
    drive_club, rush_of_blood, batman, hustle_kings
];
