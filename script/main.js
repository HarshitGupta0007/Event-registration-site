var t = 0;
var x = 3;
setInterval(function () {
  var tiles = document.getElementsByClassName("tiles");
  t += 1;
  if (t % Math.ceil(136 * (window.innerWidth / 1536)) == 0) {
    x = -1 * x;
  }
  if ((t % 180) == 0) {
    var heading= document.getElementById("heading");
    var image =  document.getElementById("image");
    var description =  document.getElementById("description");
    var a = ["https://cdn.platinumlist.net/upload/artist/shaan_309-mobile.jpg","https://images.equipboard.com/uploads/user/image/10509/original_squared_eminem.jpg?v=1577409825","https://i.pinimg.com/736x/bd/2d/99/bd2d997d917a968465332be073324b19.jpg","https://english.onlinekhabar.com/wp-content/uploads/2018/09/badshah.jpg"];
    var b = ["SHAAN", "EMINEM", "JONITA G.", "BADSHAH"]
    var c = []
  if((t/180)<=4){
    console.log(t/180);
    var n = (t/180) - 1;
    console.log(n);
    heading.innerText = b[n]
    image.src = a[n]
  } else {
    var n = ((t/180)%4) - 1;
    if(n!==-1){
      console.log(n);
       heading.innerText = b[n]
    image.src = a[n]
    } else{
      n =3;
      console.log(n);
       heading.innerText = b[n]
    image.src = a[n]
    }
  }
  }
  for (i = 0; i < tiles.length; i++) {
    if (i >= 6) {
      var c = ((i + 1) % 6) % 2;
    } else {
      var c = (i + 1) % 2;
    }
    var top = Number(tiles[i].style.top.toString().split("p")[0]);
    if (c == 0) {
      tiles[i].style.top = top + x + "px";
    } else {
      tiles[i].style.top = top - x + "px";
    }

    var ct = document.getElementsByTagName("video")[0].currentTime;
    var attr =  document.getElementsByTagName("video")[0].src == document.URL + "media/videos/bg-movie.mp4";
    if(ct!==0 & attr){
      //playing
      document.getElementById("about").setAttribute("class", "item dim");
      document.getElementsByClassName("register")[0].style.backgroundColor = "#00000078";
      if(ct==356.612063){
        document.getElementsByTagName("video")[0].setAttribute("src","nan");
      }
    } else if(ct==356.612063){
      document.getElementById("about").setAttribute("class", "item");
      document.getElementsByClassName("register")[0].style.backgroundColor = "#d9d9d930";
    } else {
      document.getElementById("about").setAttribute("class", "item");
      document.getElementsByClassName("register")[0].style.backgroundColor = "#d9d9d930";
    } 
  }

  // some other important checks that need to ensured asynchronously
  document.getElementsByClassName("unique-description")[0].style.width =
    document.getElementsByClassName("unique-heading")[0].clientWidth + "px";
}, 1000 / 60);

