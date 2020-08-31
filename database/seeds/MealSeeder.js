/**
 * Seed the database
 */
var fileData = require('../../database/seeds/data/meals.json');
var MealRateList = require('../../models/MealRateList');


console.log(fileData);

dropDb().then(function (fileData) {
    fileData.forEach((mealList => {
        var newMeals = new MealRateList(mealList);
        newMeals.save();
    }));
    console.log('MealSeeder seeded successfully.');
});

function dropDb() {
    return new Promise((resolve, reject) => {
        MealRateList.deleteMany({}, function (err) {
            if (err) {
                console.log(err);
                reject(err)
            }
            console.log('MealRateList collection empty');
            resolve(fileData)
        });
    });
}

setTimeout((function () {
    console.log('Closing file...');
    return process.kill(process.pid);
}), 2000);