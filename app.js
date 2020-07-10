let cheese = 0;
let clickBonus = 1;
let autoBonus = 0;
let clickCount = 0;


let clickUpgrades = {
  gold: {
    price: 0,
    quantity: 1,
    multiplier: 1,
    amount:0,
    type: "click"
  },
  steel: {
    price: 0,
    quantity: 1,
    multiplier: 2,
    amount:0,
    type: "click"
  },
  titanium: {
    price: 0,
    quantity: 1,
    multiplier: 3,
    amount:0,
    type: "click"
  },
  plants: {
    price: 0,
    quantity: 1,
    multiplier: 1,
    amount:0,
    type: "click"
  },
  power: {
    price: 0,
    quantity: 1,
    multiplier: 1,
    amount:0,
    type: "click"
  },
  heat: {
    price: 0,
    quantity: 1,
    multiplier: 1,
    amount:0,
    type: "click"
  },
};



function mine() {
  cheese+= clickBonus
  document.getElementById("cheese").innerText = cheese.toString()

}

function clickUpgrade(item) {
  let elm = clickUpgrades[item];

  clickCount++

  if (elm.amount < elm.price) { 
    return 
  }
    elm.amount += elm.quantity 

    //document.getElementById(item).innerText =  item + " for " + (elm.price).toString()
    document.getElementById(item + "-quantity").innerText = (elm.quantity).toString()
    document.getElementById(item + "-amount").innerText = "(+" + (elm.amount).toString() + ")"
    document.getElementById("cheese").innerText = clickCount.toString()

    //if (elm.type == "click") {
    //  clickBonus += elm.multiplier
    //} else {
    //  autoBonus +=elm.multiplier
    //}
}

function clickChange(fromItem, toItem){
  let fromElm = clickUpgrades[fromItem]
  let toElm = clickUpgrades[toItem]

  toElm.amount += (fromElm.amount * fromElm.multiplier)
  fromElm.amount = 0

}

function collectAutoUpgrades() {
  cheese += autoBonus
  document.getElementById("cheese").innerText = cheese.toString()
 
}

function startInterval() {
  let collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

//startInterval()