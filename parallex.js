window.onload = function () {
  let imgBall = document.getElementById('circle');
  let imgHit = document.getElementById('hit');
  let title = document.getElementById('title');
  let subTitle = document.getElementById('subTitle');

  let ballSize = 25;
  imgBall.style.left = window.innerWidth/2 - ballSize/2 + 170 + "px";
  imgBall.style.top = window.innerHeight/2 - ballSize/2 + 65 + "px";
  subTitle.style.left = "-1050px";

  window.addEventListener('scroll',function(){
    let scrollVal = window.scrollY;
    imgBall.style.left = scrollVal + window.innerWidth/2 - ballSize/2 + 170 + "px";
    imgBall.style.top = window.innerHeight/2 - ballSize/2 + scrollVal*0.5 + 65 + "px";

    let command = scrollVal;
    if(command > 40){
      command = 40;
    }
    console.log(command);
    title.style.top = 130 + scrollVal - command + 'px';

    command = -1050 + scrollVal*1.3;
    console.log(command);
    if(command >= 425){
      command = 425;
    }
    subTitle.style.left = command + 'px';

    subTitle.style.top = 280 + scrollVal + 'px';

    ballSize = 25 - 0.3 * (scrollVal/10);
    imgBall.style.width = ballSize + 'px';
    imgBall.style.height = ballSize + 'px';


    imgHit.style.top =  window.innerHeight * 0.4 + scrollVal + 'px';
  });
}
