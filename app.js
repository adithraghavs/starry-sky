function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function createStars(width, height, spacing) {
  const stars = [];

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      const star = {
        x: x + randomInt(spacing),
        y: y + randomInt(spacing),
        r: Math.random() * 1.5
      };
      stars.push(star);
    }
  }
  return stars;
}

function fillCircle(ctx, x, y, r, fillStyle) {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function render() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
  stars.forEach(function(star) {
    const x = star.x;
    const y = star.y;
    const r = star.r;
    const red = "rgb(255, 0, 0)";
    const blue = "#007bff";
    const white = "rgb(255, 255, 255)"
    const arrayOfColors = [red, blue, white]
    fillCircle(ctx, x, y, r, randomItem = arrayOfColors[Math.floor(Math.random()*arrayOfColors.length)]);
  });
}

const backgroundColor = "#030318";
const width = window.innerWidth;
const height = window.innerHeight;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

const stars = createStars(width, height, 30);
render();

// ctx.font = "30px Calibri Light";
// ctx.fillStyle = "white";
// ctx.fillText("Sagittarius A*", 550, 400);

// ctx.font = "30px Calibri Light";
// ctx.fillText("Center of the Milky Way", 480, 450);