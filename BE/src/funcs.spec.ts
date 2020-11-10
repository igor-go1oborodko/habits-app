const { getCurrentTask, getAchievements, getTaskArchive, startNewChallenge, calculateAchievementsStatus} = require('./funcs.ts');

const actualTaskMock1 = {
  id: 1,
  description: "Get rid of trash",
  status: 'Pending'
};

const actualTaskMock2 = {
  id: 2,
  description: "Do some stuff",
  status: 'Failed'
};

const actualAchievementMock = {
  id: 1,
  description: "Do everithing",
  image: "there is gonna be a picture here",
  status: 'Failed'
};

const challengesMock = [{
  id: 1,
  state: 'InProgress',
  startDate: new Date(2020, 10, 9).getTime(),
  tasksOrder: [actualTaskMock1, actualTaskMock2],
  achievements: [actualAchievementMock]
}];


describe(`${getCurrentTask} test suit`, () => {
  test(`${getCurrentTask} should return actual task from challenge`, () => {
    expect(getCurrentTask(1, challengesMock)).toEqual(actualTaskMock2);
  });
});

describe(`${getAchievements} test suit`, () => {
  test(`${getAchievements} should return achievement from challenge`, () => {
    expect(getAchievements(1, challengesMock)).toEqual([actualAchievementMock]);
  });

});

describe(`${getTaskArchive} test suit`, () => {
  test(`${getTaskArchive} should return past tasks`, () => {
    expect(getTaskArchive(1, challengesMock)).toEqual([actualTaskMock2]);
  });
});

describe(`${startNewChallenge} test suit`, () => {
  test(`${startNewChallenge} should return challenge with provided params`, () => {
    expect(startNewChallenge([actualTaskMock1, actualTaskMock2], [actualAchievementMock], [challengesMock])).toEqual({
        id : 1,
        state: 'InProgress',
        startDate: new Date(),
        tasksOrder: [actualTaskMock1, actualTaskMock2],
        actualAchievements: [actualAchievementMock],
        duration: 30,
    });
  });

});

// describe(`${calculateAchievementsStatus} test suit`, () => {
//   test(`${calculateAchievementsStatus} should exist`, () => {
//     expect(calculateAchievementsStatus).toEqual();
//   });
// });