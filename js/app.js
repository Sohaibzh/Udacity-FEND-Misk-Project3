//Global Var
'use strict';
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.width = 101;
  this.height = 171;
  this.name = name;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  //this.x += this.speed * dt;
  this.x += this.speed * dt;

  // if player arrived to the river 
  if (this.x >= 505) {
    this.x = 0;
    this.speed = randomSpeed();
  }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width, this.height);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {

  // Variables applied to each of our instances go here,
  this.count = 0;
  this.life = 5;
  this.score = 0;
  this.x = x;
  this.y = y;
  this.width = 101;
  this.height = 171;
  // Change The Player Image Based in the count

};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {

  ctx.drawImage(Resources.get(this.changeCharacter()), this.x, this.y, this.width, this.height);
  // Return to the Engine.js the Score and the Lifes as Array
};

// Handle Player Movement
Player.prototype.handleInput = function(move) {
  // move the player according the pressed key

  switch (move) {
    case 'up':
      this.y = this.y - 50;
      break;
    case 'left':
      this.x = this.x - 100;
      break;
    case 'right':
      this.x = this.x + 100;
      break;
    case 'down':
      this.y = this.y + 50;
      break;
  }

  // check the border
  if (this.x > 405 || this.x < 0 || this.y > 400 || this.y <= 0) {

    if (this.x > 405) {
      this.x = 405;
    }
    if (this.x < 0) {
      this.x = 5;
    }
    if (this.y > 400) {
      this.y = 400;
    }
    // player arrived to the river , increase the score and reposition the player
    if (this.y == 0) {
      this.score++;
      this.x = 205;
      this.y = 400;

    }
  }




};
// reposition the player
Player.prototype.restPlayer = function() {
  if (this.life > 0) {
    this.x = 205;
    this.y = 400;

  } else if (this.life <= 0) {
    this.x = 205;
    this.y = 400;
    this.score = 0;
    this.count = 0;
    this.life = 5;
    alert("Game Over Your Score is " + this.score);
  } else if (this.count < 4) {
    this.count = 0;

  }



};
// change player Charactar
Player.prototype.changeCharacter = function() {
  switch (this.count) {
    case 0:
      return this.sprite = 'images/char-boy.png';

    case 1:
      return this.sprite = 'images/char-cat-girl.png';

    case 2:
      return this.sprite = 'images/char-horn-girl.png';

    case 3:
      return this.sprite = 'images/char-pink-girl.png';

    case 4:
      return this.sprite = 'images/char-princess-girl.png';

    default:
      return this.sprite = 'images/char-boy.png';

  }
};


// Class for the Collectible
var collectible = function(item, place) {
  // Variables applied to each of our instances go here,
  // Place the collectible in specific place
  // Item decide which item to create
  this.place = place;
  this.item = item;
  this.width = 50;
  this.height = 70;
  this.x = 505;
  this.y = 500;

  var xValues = [30, 130, 230, 330, 430];
  var yValues = [120, 210, 290];
  // return random numbers
  this.x = xValues[Math.floor(Math.random() * xValues.length)];
  this.y = yValues[Math.floor(Math.random() * yValues.length)];
  // select image for the collectable 
  switch (this.item) {
    case 0:
      this.sprite = 'images/Gem Blue.png';
      break;
    case 1:
      this.sprite = 'images/Gem Green.png';
      break;
    case 2:
      this.sprite = 'images/Gem Orange.png';
      break;
    case 3:
      this.sprite = 'images/Heart.png';
      break;
    default:
      this.sprite = 'images/Gem Blue.png';
      break;
  }


  // choice the item based on the item number



};


// Draw the enemy on the screen, required method for game
collectible.prototype.render = function() {
// choice the position based on the place number
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width, this.height);
};
//repostion the collectible
collectible.prototype.newPlace = function(place) {
  
  var xValues = [30, 130, 230, 330, 430];
  var yValues = [120, 210, 290];

  // return random numbers
  this.x = xValues[Math.floor(Math.random() * xValues.length)];
  this.y = yValues[Math.floor(Math.random() * yValues.length)];

  this.item = randomNumber(0, 3);
  // select image for the collectable 
  switch (this.item) {
    case 0:
      this.sprite = 'images/Gem Blue.png';
      break;
    case 1:
      this.sprite = 'images/Gem Green.png';
      break;
    case 2:
      this.sprite = 'images/Gem Orange.png';
      break;
    case 3:
      this.sprite = 'images/Heart.png';
      break;
    default:
      this.sprite = 'images/Gem Blue.png';
      break;
  }


  this.render();

};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// Create Three Enemy Objects
var enemy1 = new Enemy(0, 50, randomSpeed(), "e1");
var enemy2 = new Enemy(0, 150, randomSpeed(), "e2");
var enemy3 = new Enemy(0, 230, randomSpeed(), "e3");

// Create AllEnemies Array;
var allEnemies = [];

// Push the Enemy Objects to the Array
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);

// Create Player Object with Initial position
var player = new Player(205, 400);


// Create Collectibles Array


var collect = new collectible(randomNumber(0, 4), randomNumber(0, 15));
// Push  collectible Object




// Return Random Speed for the Enemy Object
function randomSpeed() {
  var number = Math.random() * 500;
  while (number < 70) {

    number = Math.random() * 500;
  }

  return number;

}

// MODFFIY  the Collectible object with new one
function newCollectible() {
  var item, place;
  // get random number between two values by calling randomNumber
  item = parseInt(randomNumber(0, 3));

  // get random number between two values by calling randomNumber
  place = parseInt(randomNumber(0, 14));
  collect.item = item;
  collect.place = place;

}

// Create Random Numbers between Min and Max;
function randomNumber(min, max) {
  return parseInt((Math.random() * (max - min + 1)), 10) + min;
}



// Check if any Collisions occur
function checkCollisions() {
  // specify the Player current Block
  var max = player.x + 50;
  var min = player.x - 50;
  var collectibleImage = 0;


  // check if the player in the First Row
  if (player.y <= 250 && player.y > 150) {

    // check Enemy Position
    if (collect.x >= min && collect.x <= max && collect.y == 290) {
      randomCollectible();
    }
    if (parseInt(allEnemies[2].x) <= max && parseInt(allEnemies[2].x) >= min) {
      player.count++;
      player.life--;
      player.restPlayer();

    }
  }

  // check if the player in the Second Row
  else if (player.y <= 150 && player.y >= 100) {
    // check Enemy Position
    if (collect.x >= min && collect.x <= max && collect.y == 210) {
      randomCollectible();
    }
    if (parseInt(allEnemies[1].x) <= max && parseInt(allEnemies[1].x) >= min) {

      player.count++;
      player.life--;
      player.restPlayer();
    }
  }
  // check if the player in the Third Row
  else if (player.y <= 50 && player.y >= 0) {
    if (collect.x >= min && collect.x <= max && collect.y == 120) {
      randomCollectible();
    }
    // check Enemy Position
    if (parseInt(allEnemies[0].x) <= max && parseInt(allEnemies[0].x) >= min) {

      player.count++;
      player.life--;
      player.restPlayer();

    }

  }

}




function randomCollectible() {
  // check if the player and Collectible Position

  // collision detected!

  switch (collect.item) {
    case 0:
      player.score += 10;
      collect.newPlace();
      break;
    case 1:
      player.score += 20;
      collect.newPlace();
      break;
    case 2:
      player.score += 30;
      collect.newPlace();
      break;

    case 3:
      player.life++;
      collect.newPlace();
      break;
  }




}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',

  };
  player.handleInput(allowedKeys[e.keyCode]);
});
