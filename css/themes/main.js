var images = [], 
index = 0;
  
images[0] = "https://i.imgur.com/gnD6keC.png";
images[1] = "https://i.imgur.com/r8moZ8R.png";
images[2] = "https://i.imgur.com/PPHGfcU.png";
images[3] = "https://i.imgur.com/t1LxDEP.png";
images[4] = "https://i.imgur.com/hK3SrvR.gif";
images[5] = "https://i.imgur.com/BwNnmS0.png";
  
index = Math.floor(Math.random() * images.length);
document.body.style.background = "#fff url('"+images[index]+"') repeat center center fixed";