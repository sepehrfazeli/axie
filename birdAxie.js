

//initialize

let list = document.getElementsByClassName("jsx-4208418699");
let result = [];
let backup = [];
let trigger = true;
let s = 0;
let speed = 58;
let price = 175;


const check = (minSpeed, maxPrice) => {

  console.clear();
  let a = [];
  for (let item of list) {
    try {
      a.push(item.getElementsByTagName("h6")[0].childNodes[0].data);
      // a = [...a, item.getElementsByTagName("h6")[0].childNodes[0].data];
      a[a.length - 1] = a[a.length - 1].slice(1, 7);
    } catch (e) {
      a.pop();
    }
  }
  a = a.slice(0, 10);

  let c = [];
  let i = 0;
  for (let item of list) {
    try {
      i++;
      if (i % 2) {
        // c = [...c, item.getElementsByClassName("ml-4")[5].childNodes[0].data];
        c.push(item.getElementsByClassName("ml-4")[6].childNodes[0].data);
      }
    } catch (e) { }
  }
  c = c.slice(0, 10);

  for (let index = 0; index < 10; index++) {
    let speed = c[index];
    let price = a[index];
    let link = list[index * 5].href;
    let id = link.slice(link.length-6);

    if (speed > minSpeed && price < maxPrice) {
      if (!result.some(x => x[2] === link)) {
        // result = [...result, [speed, price, link]]
        result.push([speed, price, link]);




        window.open(link, '_blank');
        window.open(`https://axie.zone/finder?search=axie_id:${id}`, '_blank')
      }
    }
  }





}

//timer

let timer = setInterval(myTimer, 5000);

function myTimer() {
  check(speed, price);

  if (result.length > s && trigger) {
    trigger = false;
    window.open('http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV2/ALARM2.WAV', '_blank');
  }

  result.forEach((element, index) => {
    console.log(`${index} : speed = ${element[0]} , price = ${element[1]} \nlink = ${element[2]}`);
  });

  console.log('LAST CHECK : ' + Date());
}

function myStop() {
  clearInterval(timer);
}


const alter = (Speed, Price) => {
  speed = Speed;
  price = Price;
  backup =  result;
  result = [];
}
//Ex : alter(59,175)
//Ex : alter(52,300)

const Trigger = () => {
  trigger = true
  s = result.length
}

//Ex : Trigger()


