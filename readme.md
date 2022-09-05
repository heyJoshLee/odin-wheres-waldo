# Odin Where's Waldo

## About this project

This project was meant to learn the basics of communiting with Firebase (Firestore). The retrives answers from Firestore and also saves high scores.

Currently, the game is built on clicking invisible divs to check if the player has clicked in the right position. This means that a cheater could just view the HTML and see where the correct answers are. A better solution - and one that would be used if this was a production-level app - would be to check the location of a click, send that to a back-end, and then see if the location of the click was in an 'answer posiiton.'

### What I learned

When planning this project, I initially thought that it didn't have many components. Because of this, and the fact that I wanted to strengthen my vanilla javascript skills, I decided against using React. If I were to re-do this project, I would use react as calling 'document.createElement' requires a lot of redundancy compared to using JSX.

I also learned how to set up a project with Firebase and use Firestore.

#### Todo

There are multiple ways to improve this project, but since this isn't a production app, I'm not sure when I will be able to improve these.

- Styling - There is currently minimal styling and the app looks pretty ugly.

- Refactoring - There is some old code in here that's not being used.

- Screens' position - Currently, the screen items are parented to the body. Doing this does not allow the player to see the high scores unless they are playing. These screens should be moved to make the #left-pane the parent.

- Updating high scores - The high scores are only updated at the beginning when the app loads. A player's new high score is added to the database, but not to the fonnt end.

Image credit
https://www.deviantart.com/moskidraws/art/Indie-Collision-447101402
