const imageArray = [
    {
        memoryName: "COVID Life",
        memoryDate: "March 31, 2020",
        memoryPeople: "Madame Mariposas",
        memoryImageFile: "madame-butterfly.jpg",
        memoryDescription: "We were in the midst of raising butterflies for one of our experiments in AP Biology when lockdown happened. For two weeks at home I watched Madame Butterfly go from a caterpillar to a cocoon, before finally emerge as a butterfly here. There was something so cathartic about watching new life emerge admist such an uncharacteristically still period of my life."
    },
    {
        memoryName: "New Brighton Beach Camping",
        memoryDate: "May 26, 2019", 
        memoryPeople: "Troop 688, Scouts and Parents", 
        memoryImageFile: "beach-hike.JPG",
        memoryDescription: "We wove amongst the grass as the salty air wove into our hair. New Brighton was one of the first big camping trips we went on as a newly minted Scouts BSA troop. That night we huddled together over the fire roasting marshmallows, and chattered excitedly about what lay ahead for our troop."
    },
    {
        memoryName: "Camp Hi Sierra",
        memoryDate: "August 6, 2016",
        memoryPeople: "Joleen, Laura, Jiliane, Chloe, Cara, Erin, Nicole, Jennifer",
        memoryImageFile: "camp-hi-sierra.JPG",
        memoryDescription: "The first Boy Scout summer camp I ever went to. My Girl Scout troop was very fortunate in the sense we had access to Boy Scout camps because our adult Troop Leader trained with and is close with other Boy Scout troops in the area. I got to get closer to the older girls of my troop, and meet new friends from other troops while I was here!",
    },
    {
        memoryName: "Killing it at Carrie",
        memoryDate: "October 28, 2023",
        memoryPeople: "Jaqueline (the star!), Floor 5AB",
        memoryImageFile: "carrie-musical.JPG",
        memoryDescription: "One of my residents got the lead role for our school's theater club. We all traveled en masse to see the light night show, which was full of quirky modern dances, ad-libs, and dildos all amongst a backdrop of a high school PORM night.",
    },
    {
        memoryName: "Sunrise Hike",
        memoryDate: "June 15, 2019, 4:43AM",
        memoryPeople: "Joleen, Jennifer",
        memoryImageFile: "catalina-morning-hike.JPG",
        memoryDescription: "We had a little senior scouts moment, as the three oldest members members that made the jump from Girl Scouts to Scouts BSA this was a little breather for us amdist a busy camp week. I don't know if you can tell, but the sunrise hike was a fail. We crawled up (or stayed up?) at 2:30AM to climb this mountain, unfortunately as much as we wished the fog would not part and instead we head a very ambient walk back down.",
    },
    {
        memoryName: "Sunrise Hike",
        memoryDate: "June 15, 2019, 4:43AM",
        memoryPeople: "Joleen, Jennifer",
        memoryImageFile: "catalina-morning-hike.jpg",
        memoryDescription: "We had a little senior scouts moment, as the three oldest members members that made the jump from Girl Scouts to Scouts BSA this was a little breather for us amdist a busy camp week. I don't know if you can tell, but the sunrise hike was a fail. We crawled up (or stayed up?) at 2:30AM to climb this mountain, unfortunately as much as we wished the fog would not part and instead we head a very ambient walk back down.",
    },
    {
        memoryName: "PhD Move-In",
        memoryDate: "August 7, 2023",
        memoryPeople: "Mom, Dad, Chloe",
        memoryImageFile: "chloe-move-in.JPG",
        memoryDescription: "I always joked with Chloe that her undergraduate life was her soft launch into society, because her university was only a few hours from home so she would come back at least once a month. But this time I think we all felt that it was more real. It was a little goofy, but also a little bittersweet sitting there on the ground, eating our family dinner and realizing with every bite that it's only going to get harder and harder from here to get us to all gather together again like this in the future. However silly this is a moment I treasure deeply.",
    },
    {
        memoryName: "Config!!",
        memoryDate: "June 21, 2023",
        memoryPeople: "Mom",
        memoryImageFile: "config.JPG",
        memoryDescription: "Config was offering free tickets to students, and mom managed to get a ticket through work, so we made the trek to San Francisco together. I've always looked up to my mom and her work, this time it felt really strange to be attending an event together.",
    },
    {
        memoryName: "Fishless Fisher",
        memoryDate: "August 2, 2020",
        memoryPeople: "Troop 688",
        memoryImageFile: "covid-fishing.jpg",
        memoryDescription: "We were so excited here to be camping together again, albeit with many restrictions, but thrilled nonetheless. I remember we were eagerly going through the fishing fishing guidelines in the back of the car to make sure we didn't endanger any creatures. Little did we know we didn't need to think that far ahead. I swear no fish even nibbled my rod.",
    },
    {
        memoryName: "Ducklings Sunrise",
        memoryDate: "June 11, 2021",
        memoryPeople: "Sarah, Srishti, Suzuka",
        memoryImageFile: "ducklings-sunrise-hike.JPG",
        memoryDescription: "We ambitiously planned a sunrise hike, somehow managed to get there on time, only to find out our nature preserve only opens starting at sunrise. There was one other car that didn't realize that so we waited together on the outside. And yes, we are trying to make a heart shape.",
    },
    {
        memoryName: "Eagle Project",
        memoryDate: "January 28, 2021",
        memoryPeople: "Mr. Toda, Mrs. K, Dad",
        memoryImageFile: "eagle-project.jpg",
        memoryDescription: "A journey that began all the way back in February of 2019 finally culmintaed throughout the years into my Eagle Project. I designed and other people helped me build and assemble native bee homes for our local farm, bringing more attention to the different types of bees we have in our area and the good they do for our ecosystems.",
    },
    {
        memoryName: "Frank Lloyd Wright",
        memoryDate: "August 17, 2021",
        memoryPeople: "Mom, Dad, Chloe",
        memoryImageFile: "fallingwater.JPG",
        memoryDescription: "I guess as a 'congratulations, you're old enough now' moment now that I'm heading to college, I was put in charge of creating the itenerary for our family trip from DC to Pittsburgh. The one stop my mom really wanted was Fallingwater. I'm a little embarrassed to say I didn't know Frank Lloyd Wright before this trip, but after that trip I became an avid fan.",
    },
    {
        memoryName: "Ideal Human",
        memoryDate: "March 30, 2022",
        memoryPeople: "Me, Sapna in background, Elin snapping photo",
        memoryImageFile: "figure-drawing.jpg",
        memoryDescription: "I just got a really good kick out of how oval my head is.",
    },
    {
        memoryName: "Morewood Gardens",
        memoryDate: "August 27, 2023",
        memoryPeople: "Morewood Gardens 5AB + Orientation Counselor Andrew, Orientation Counselor Ofunne was out sick",
        memoryImageFile: "gardens-floor.PNG",
        memoryDescription: "This photo was taken at our last floor meeting before the school year began. I'm really grateful for each person here and all the energy they bring to the floor. I'll be listening to them for the next year karaoke-ing in the lounge, doing homework, and watching movies together becoming friends throughout the year.",
    },
    {
        memoryName: "Skater Bois",
        memoryDate: "December 12, 2022",
        memoryPeople: "Schkatie, Schcamden, Scham, Zosche, Schtephen",
        memoryImageFile: "hamerschlag-ice-skating.JPG",
        memoryDescription: "At the end of the fall semester all the RAs of Hamerschlag took their residents to a local seasonal ice rink to celebrate the end of the year. The tickets were for 90 minutes, and if I'm honest I was tired by 60 and barely managed to power through the last 30 to get my money's worth.",
    },
    {
        memoryName: "Hamerschlag O-Week",
        memoryDate: "August 26, 2022",
        memoryPeople: "Hamerschlag 3A",
        memoryImageFile: "hamerschlag-o-week.JPG",
        memoryDescription: "What is not pictured here was the fact that I was knocked out by COVID and had just recovered. I missed the first half of my resident's orientation week, so I was spending a good part of my day trying to introduce myself to as many people as I can.",
    },
    {
        memoryName: "Alexander Hamilton",
        memoryDate: "February 22, 2019",
        memoryPeople: "Mom, Chloe",
        memoryImageFile: "hamilton-musical.JPG",
        memoryDescription: "I've watched musicals before, but never one where I was more invested than mom in. Hamilton happened to be doing a show through San Francisco so we absolutely jumped on the chance to watch them perform. It was beautiful, hilarious, and sad all at the same time.",
    },
]
console.log(imageArray[0].memoryName);

class Memory {
    construcor(memoryName, memoryDate, memoryPeople, memoryImageFile, memoryDescription) {
        this.name = memoryName;
        this.date = memoryDate;
        this.people = memoryPeople;
        this.image = memoryImageFile; 
        this.description = memoryDescription;
    }
}

function getMemory(min, max){
    const min = 0;
    const max = 3;
    const randomInt = Math.floor(Math.random () * (max-min) + min);
    console.log(randomInt);

    memoryCard = imageArray[randomInt];
    console.log("memoryCard", memoryCard.memoryName);
    return memoryCard;
}

getMemory();

function updateElement(memoryCard) {
    const cardNameElement = document.querySelector(".memory-name")
    const cardDateElement = document.querySelector(".memory-date");
    const cardPeopleElement = document.querySelector(".memory-people");
    const cardImageElement = document.querySelector(".memory-image");
    const cardDescriptionElement = document.querySelector(".memory-description");

    console.log ("test updateElement");

    cardNameElement.innerText = this.name;
    cardDateElement.innerText = this.date;
    cardPeopleElement.innerText = this.people;
    cardImageElement.src = "Memories/" + this.image;
    cardDescriptionElement.innerText = this.description;
}