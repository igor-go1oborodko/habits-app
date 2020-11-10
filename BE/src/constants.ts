enum State {
    Pending = 'Pending',
    Success = 'Success',
    Failure = 'Failure'
}

enum ChallengeState {
    InProgress = 'InProgress',
    Success = 'Success',
    Failure = 'Failure',
}

module.exports = {
    State,
    ChallengeState
}