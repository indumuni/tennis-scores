# Tennis scoring application

Tennis-scores implement a tennis scoring system for tennis match with single set.

## Design details

The **Match** class serves as the entry point to the application.

There are three main classes: **Game**, **TennisSet** (since "Set" is already taken), and **Tiebreaker**, which represent a Tennis Game, Set, and Tiebreaker, respectively. All of these classes extend from the **Scorable** class.

The **Game** class contains rules for deuce, advantage, and completed states. The **TennisSet** class includes rules for tiebreaks and completed states, while the **Tiebreaker** class manages its own completed state rules.

The **Match** class provides instructions on how to use these classes to navigate the correct scoring behavior.

### Note:

Ideally, TennisSet should depend on Game and Tiebreaker and implement logic. Not pushing the re-factor at this stage because of the time constrains.

Rules : https://en.wikipedia.org/wiki/Tennis_scoring_system

How to run test

```
npm run test
```
