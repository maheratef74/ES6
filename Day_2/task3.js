const tips = [
    "Stay hydrated: Drink at least 8 glasses of water a day.",
    "Get moving: Aim for 30 minutes of physical activity daily.",
    "Sleep well: Prioritize 7-9 hours of quality sleep.",
    "Eat greens: Incorporate more vegetables into every meal.",
    "Digital detox: Take short breaks from screens every hour.",
    "Practice mindfulness: Spend 5 minutes daily in meditation.",
    "Read more: Try to read at least 10 pages of a book daily.",
    "Stay positive: Start your day by thinking of three things you're grateful for.",
    "Learn something new: Dedicate time weekly to a new skill or hobby.",
    "Connect: Reach out to a friend or family member today."
];

const tipGenerator = function* (items) {
    let index = 0;
    while (true) {
        yield items[index];
        index = (index + 1) % items.length;
    }
};

const gen = tipGenerator(tips);

const showNextTip = () => {
    const nextTip = gen.next().value;

    console.log(`[Tip]: ${nextTip}`);
};

const startTips = () => {
    console.log("Starting Tip Generator (Every 2 seconds)...");
    setInterval(showNextTip, 2000);
};

startTips();
