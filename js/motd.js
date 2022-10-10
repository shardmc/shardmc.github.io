motd = [
    "As seen on TV!",
    "Awesome!",
    "100% pure!",
    "May contain nuts!",
    "More polygons!",
    "Moderately attractive!",
    "Limited edition!",
    "Flashing letters!",
    "It's here!",
    "Best in class!",
    "It's finished!",
    "Kind of dragon free!",
    "When it's finished!",
    "Excitement!",
    "More than 500 sold!",
    "One of a kind!",
    "Heaps of hits on YouTube!",
    "Indev!",
    "Spiders everywhere!",
    "Check it out!",
    "Holy cow, man!",
    "It's a game!",
    "Made in Sweden!",
    "Uses LWJGL!",
    "Reticulating splines!"
];

text = motd[Math.floor(Math.random() * motd.length)];

document.title = `ShardMC - ${text}`;
document.getElementById("splash").innerHTML = `«${text}»`;