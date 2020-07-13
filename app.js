let cheese = 0;
let clickBonus = 1;
let autoBonus = 0;
let clickCount = 0;

let buyUpgrades = {
  sell: {
    amount: 0,
    quantity: 0,
    gold: -1,
    tr:0,
  },
  power: {
    amount: 0,
    quantity: 0,
    gold: 11,
    upgrade: "power",
    tr:0,
  },
  temperature: {
    amount: 0,
    quantity: 19,
    gold: 14,
    heat: 8,
    tr:1,
  },
  ocean: {
    amount: 0,
    quantity: 9,
    gold: 18,
    tr:1,
  },
  greenery: {
    amount: 0,
    quantity: 14,
    gold: 23,
    plants: 8,
    tr:1,
  },
  city: {
    amount: 0,
    quantity: 0,
    gold: 25,
    upgrade: "gold",
    tr:0,
  },
};


let clickUpgrades = {
  gold: {
    price: 0,
    quantity: 1,
    multiplier: 1,
    amount: 0,
    type: "click"
  },
  steel: {
    price: 0,
    quantity: 1,
    multiplier: 2,
    amount: 0,
    type: "click"
  },
  titanium: {
    price: 0,
    quantity: 1,
    multiplier: 3,
    amount: 0,
    type: "click"
  },
  plants: {
    price: 0,
    quantity: 1,
    multiplier: 1,
    amount: 0,
    type: "click"
  },
  power: {
    price: 0,
    quantity: 1,
    multiplier: 1,
    amount: 0,
    type: "click"
  },
  heat: {
    price: 0,
    quantity: 1,
    multiplier: 1,
    amount: 0,
    type: "click"
  },
};



function mine() {
  cheese += clickBonus
  document.getElementById("cheese").innerText = cheese.toString()

}

function buyProjet(){
  let e = document.getElementById("sProject")
  let result = e.options[e.selectedIndex].value
  //console.log(e.options[e.selectedIndex])
  //console.log(result)
  //console.log(result.substring(5))
  buyUpgrade(result.substring(5).toLowerCase(), "gold")
  //e.options[e.selectedIndex].value = "Standard Project"
}

function buyUpgrade(item, resource){
  let elm = buyUpgrades[item]
  //console.log(buyUpgrades)
  //console.log(item)
  //console.log("elm", elm)
  elm.quantity --

  let elm2 = clickUpgrades[resource]
  //console.log(clickUpgrades)
  //console.log(resource)
  //console.log("elm2", elm2)
  elm2.amount -= elm[resource]

  let elmGold = clickUpgrades["gold"]
  elmGold.quantity += elm.tr

  clickCount++
  drawElm(resource, elm2)
  drawElm(item, elm)
  drawElm("gold", elmGold)

}

function clickUpgrade(item) {
  let elm = clickUpgrades[item];
  elm.amount += elm.quantity

  clickCount++
  drawElm(item, elm)
}

function clickChange(fromItem, toItem) {
  let fromElm = clickUpgrades[fromItem]
  let toElm = clickUpgrades[toItem]

  clickCount++

  toElm.amount += (fromElm.amount * fromElm.multiplier)
  fromElm.amount = 0

  drawElm(fromItem, fromElm )
  drawElm(toItem, toElm)

}

function drawElm(item, elm) {
  //let elm = clickUpgrades[item];

  document.getElementById(item + "-quantity").innerText = (elm.quantity).toString()
  document.getElementById(item + "-amount").innerText = "(+" + (elm.amount).toString() + ")"
  document.getElementById("cheese").innerText = clickCount.toString()

}

function collectAutoUpgrades() {
  cheese += autoBonus
  document.getElementById("cheese").innerText = cheese.toString()

}

function startInterval() {
  let collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

//startInterval()