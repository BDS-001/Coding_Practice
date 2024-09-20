require("dotenv").config();

if (process.env.NODE_ENV === "prod") {
    // do production-specific stuff
    console.log('production environment')
}

// don't want to ruin the surprise by hardcoding the URL!
// it might even change every few days!
console.log(process.env.TEST_TEXT);
