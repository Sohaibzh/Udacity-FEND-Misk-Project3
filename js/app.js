//Global Var
var count = 0;
var life = 5;
var score = 0;

// Enemies our player must avoid
var Enemy = function(x, y, speed, name) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
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
  this.x += this.speed * dt;

  if (this.x >= 505) {
    newEnime(this.name);

  }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  // Variables applied to each of our instances go here,
  this.x = x;
  this.y = y;
  // Change The Player Image Based in the count
  switch (count) {
    case 0:
      this.sprite = 'images/char-boy.png';
      break;
    case 1:
      this.sprite = 'images/char-cat-girl.png';
      break;
    case 2:
      this.sprite = 'images/char-horn-girl.png';
      break;
    case 3:
      this.sprite = 'images/char-pink-girl.png';
      break;
    case 4:
      this.sprite = 'images/char-princess-girl.png';
      break;
    default:
      this.sprite = 'images/char-boy.png';
      break;
  }

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.

};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {

  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  // Return to the Engine.js the Score and the Lifes as Array
  var temp = [];
  temp.push(score);
  temp.push(life);
  return temp;
};

// Handle Player Movement
Player.prototype.handleInput = function(move) {
  // move the player according the pressed key
  switch (move) {
    case 'up':
      this.y = this.y - 100;
      break;
    case 'left':
      this.x = this.x - 100;
      break;
    case 'right':
      this.x = this.x + 100;
      break;
    case 'down':
      this.y = this.y + 100;
      break;
  }

  // check the border
  if (this.x > 405 || this.x < 0 || this.y > 400 || this.y <= 0) {

    if (this.x > 405) {
      this.x = 405;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y > 400) {
      this.y = 400;
    }
    // player arrived to the river , increase the score and reposition the player
    if (this.y >= 0) {
      score++;
      restPlayer();
    }
  }




};

// Class for the Collectible
var collectible = function(item, place) {
  // Variables applied to each of our instances go here,
  // Place the collectible in specific place
  // Item decide which item to create
  this.place = place;
  this.item = item;


  // choice the item based on the item number
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


};


// Draw the enemy on the screen, required method for game
collectible.prototype.render = function() {


  // choice the position based on the place number
  switch (this.place) {
    case 0:
      this.x = 400, this.y = 50;
      break;
    case 1:
      this.x = 0, this.y = 200;
      break;
    case 2:
      this.x = 100, this.y = 200;
      break;
    case 3:
      this.x = 200, this.y = 200;
      break;
    case 4:
      this.x = 300, this.y = 200;
      break;
    case 5:
      this.x = 400, this.y = 200;
      break;
    case 6:
      this.x = 0, this.y = 120;
      break;
    case 7:
      this.x = 100, this.y = 120;
      break;
    case 8:
      this.x = 200, this.y = 120;
      break;
    case 9:
      this.x = 300, this.y = 120;
      break;
    case 10:
      this.x = 400, this.y = 120;
      break;
    case 11:
      this.x = 0, this.y = 50;
      break;
    case 12:
      this.x = 100, this.y = 50;
      break;
    case 13:
      this.x = 200, this.y = 50;
      break;
    case 14:
      this.x = 300, this.y = 50;
      break;
    case 15:
      this.x = 500, this.y = 606;
      break;


  }

  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
var allCollects = [];
// Create collectible Object
var collect = new collectible(randomNumber(0, 4), randomNumber(0, 15));
// Push  collectible Object
allCollects.push(collect);



// Return Random Speed for the Enemy Object
function randomSpeed() {
  var number = Math.random() * 500;
  while (number < 70) {

    number = Math.random() * 500;
  }

  return number;

}

// MODFIY the Old Enemy Object to new one
function newEnime(name) {

  if (name == "e1") {
    allEnemies[0] = new Enemy(0, 50, randomSpeed(), "e1");
  } else if (name == "e2") {
    allEnemies[1] = new Enemy(0, 150, randomSpeed(), "e2");
  } else {
    allEnemies[2] = new Enemy(0, 230, randomSpeed(), "e3");
  }


}

// Check for the Player Status
function restPlayer() {
  // Check if the Game END
  if (count >= 5 && life == 0) {
    alert("Game Over" + "Your Score Is" + score);
    count = 0;
    restPlayer();
  }
  // if player Still have life left
  else if (life != 0 && count == 0) {
    life--;
    player = new Player(205, 400);
    // create new Collectible by call Collectible
    Collectible();
  } else {
    player = new Player(205, 400);
    // create new Collectible by call Collectible
    newCollectible();
  }


}

// MODFFIY  the Collectible object with new one
function newCollectible() {

  // get random number between two values by calling randomNumber
  item = parseInt(randomNumber(0, 3));

  // get random number between two values by calling randomNumber
  place = parseInt(randomNumber(0, 14));


  allCollects[0] = new collectible(item, place);

}

// Create Random Numbers between Min and Max;
function randomNumber(min, max) {
  return parseInt((Math.random() * (max - min + 1)), 10) + min;
}



// Check if any Collisions occur
function checkCollisions() {

  // specify the Player current Block
  var max = player.x + 5;
  var min = player.x - 5;


  // check if the player in the First Row
  if (player.y <= 200 && player.y > 150) {
    // check Enemy Position
    if (parseInt(allEnemies[2].x) <= max && parseInt(allEnemies[2].x) >= min) {
      count++;
      life--;
      restPlayer()
    }
  }
  // check if the player in the Second Row
  else if (player.y <= 150 && player.y >= 100) {
    // check Enemy Position
    if (parseInt(allEnemies[1].x) <= max && parseInt(allEnemies[1].x) >= min) {
      count++;
      life--;
      restPlayer()
    }
  }
  // check if the player in the Third Row
  else if (player.y <= 50 && player.y >= 0) {
    // check Enemy Position
    if (parseInt(allEnemies[0].x) <= max && parseInt(allEnemies[0].x) >= min) {
      count++;
      life--;
      restPlayer()
    }
  }

  // check if the player and Collectible Position
  if (player.x == allCollects[0].x || min == allCollects[0].x) {
    if (player.y == allCollects[0].y || player.y + 20 == allCollects[0].y || player.y == 0 || player.y == 100) {
      switch (this.item) {
        case 0:
          score += 10;
          break;
        case 1:
          score += 20;
          break;
        case 2:
          score += 30;
          break;
        case 3:
          life++;
          break;

      }
      newCollectible();


    }
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
