import { StatusState, ChallengeState } from './constants';

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
    state: StatusState;
    updated: Date;
}

export interface Challenge {
    id: number;
    state: ChallengeState;
    startDate: Date;
    tasksOrder: Task[];
    tasksStatus: Status[];
    achievementsStatus: Status[];
}

export interface AchieveItem {
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