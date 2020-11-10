import { Challenge, ActualTask, ActualAchievement, ArchiveItem, Task, Achievement, Status } from './models';

/**
 * @todo add full functions functionality.
 */
exports.getCurrentTask = function(challengeId: Challenge['id'], challenges: Challenge[]): ActualTask {
    const requiredChallenge: any = challenges.find(c => c.id === challengeId);
    const dateDiffInDays: number = Math.floor((Date.now() - requiredChallenge.startDate) / (1000 * 60 *  60 * 24));
    const actualTask: ActualTask = requiredChallenge.tasksOrder[dateDiffInDays];

    return actualTask;
}

exports.getAchievements = function(challengeId: Challenge['id'], challenges: Challenge[]): ActualAchievement[] {
    const requiredChallenge: any = challenges.find(c => c.id === challengeId);
    const actualAchievements: ActualAchievement[] = requiredChallenge.achievements;

    return actualAchievements;
}

exports.getTaskArchive = function(challengeId: Challenge['id'], challenges: Challenge[]): ArchiveItem[] {
    const requiredChallenge: any = challenges.find(c => c.id === challengeId);
    const achievedItems: ArchiveItem[] = requiredChallenge.tasksOrder.filter((t: any) => t.status !== 'Pending');

    return achievedItems;
}

exports.startNewChallenge = function(tasks: Task[],
                                    achievements: ActualAchievement[],
                                    challenges: Challenge[],
                                    duration: number = 30)
                                    : Challenge {
    const actualChallenge: Challenge = {
        id : (challenges.length - 1) + 1,
        state: 'InProgress',
        startDate: new Date(),
        tasksOrder: tasks,
        actualAchievements: achievements,
        duration: duration
    };

    return actualChallenge;
}

exports.calculateAchievementsStatus = function(challenge: Challenge): Map<Achievement['id'], Status> {
    const achievementsStatuses: Map<Achievement['id'], Status> = new Map().set(challenge.actualAchievements[0].id, challenge.tasksStatus);

    return achievementsStatuses;
}