const HomePage = require('./pages/homePage/homePage');
const ContactsPage = require('./pages/contactsPage/contactsPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const ShapeIntroPage = require('./pages/shapeIntroPage/shapeIntroPage');
const ShapeGame = require('./pages/shapeGame/shapeGame');
const ShapeGame2 = require('./pages/shapeGame2/shapeGame2');
const correctAnswer = require('./pages/correctAnswer/correctAnswer');
const wrongAnswer = require('./pages/wrongAnswer/wrongAnswer');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'shapeintropage': ShapeIntroPage,
  'shapeGame': ShapeGame,
  'shapeGame2': ShapeGame2,
  'correctAnswer': correctAnswer,
  'wrongAnswer': wrongAnswer
  
};
