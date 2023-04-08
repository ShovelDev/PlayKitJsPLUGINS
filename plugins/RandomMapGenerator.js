/*
  Use the function GeneratePattern() the generate the map.
*/

let textures = ["https://media.discordapp.net/attachments/1026273555446513715/1093997720416555018/green.png","https://media.discordapp.net/attachments/1026273555446513715/1093997720156516444/stone.png"]

var x = -6;
var y = -3;
var last = 0;

function GeneratePattern(textures,width=11,height=7,size=3) {
  for (let columnY = 0; columnY < height; columnY++) {
    x = Math.floor(width/2+1) * -1;
    for (let columnX = 0; columnX < width; columnX++) {
      x++;
      last = Math.floor(Math.random() * textures.length);
      if(Math.floor(Math.random() * size) == 0) block = new object(textures[last],x, y);
    }
    y++;
  }
}

Gene
