# Tennis scoring application

Tennis-scores implement a tennis scoring system for tennis match with single set.

## Design details

Match class is the entry to the application.

There are three main classes, Game, TennisSet (because Set is taken) and Tiebreaker to represent Tennis Game, Set, and Tiebreaker. All these classes extends from Scorable class.

Games contains rules deuce, advantage, completed. Tennis Set contains rules tiebreak, completed and Tiebreak contains rules completed.

Match class has instructions how to use these classes to navigate correct scoring behaviour.

### Note:

Ideally, TennisSet should depend on Game and Tiebreaker and implement logic. Not pushing the re-factor at this stage because of the time constrains.

Rules : https://en.wikipedia.org/wiki/Tennis_scoring_system

How to run test

```
npm run test
```
