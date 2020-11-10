const { State, ChallengeState } = require ('./constants.ts');

/**
 * @todo check interfaces implementation.
 */

export interface Task {
    id : number;
    description : string;
    status: Status;
}

export interface Achievement {
    id: number;
    description: string;
    image : any;
    checkComplete() : Status;
    tasks: Task[];
}

export interface Status {
    state: State;
    updated: Date;
}

export interface Challenge {
    id: number;
    state: string;
    startDate: Date;
    tasksOrder: Task[];
    tasksStatus?: Status;
    actualAchievements: ActualAchievement[];
    duration: number;
}

export interface ArchiveItem {
    id: number;
    description: string;
    status: Status;
}

export interface ActualTask {
    id: number;
    description: string;
    status: Status;
}

export interface ActualAchievement {
    id: number;
    description: string;
    image: any;
    status: Status;
}