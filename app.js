let cheese = 0;
let clickBonus = 1;
let autoBonus = 0;
let clickCount = 0;

let corp = {
  aridor:{
    tags:[],
    gold: 40,
    upgrade:[],
    add:[],
    set: "x?"
  },
  teractor:{
    tags:["earth"],
    gold: 60,
    upgrade:[],
    add:[],
    set: "?"
  },
  stromcraft:{
    tags:["jovian"],
    gold: 48,
    upgrade:[],
    add:[],
    set: "?"
  },
  polyphemos:{
    tags:[],
    gold: 50,
    upgrade:["gold","gold","gold","gold","gold"],
    add:["titanium","titanium","titanium","titanium","titanium"],
    set: "?"
  },
  cinematics:{
    tags:["building"],
    gold: 30,
    upgrade:[],
    add:["steel","steel","steel","steel","steel","steel","steel","steel","steel","steel","steel","steel","steel","steel","steel","steel","steel","steel","steel","steel"],
    set: "?"
  },
  manutech:{
    tags:["building"],
    gold: 25,
    upgrade:["steel"],
    add:[],
    set: "?"
  },
  cheung:{
    tags:["building"],
    gold: 44,
    upgrade:["gold","gold","gold"],
    add:[],
    set: "?"
  },
  poseidon:{
    tags:[],
    gold: 45,
    upgrade:[],
    add:[],
    set: "?"
  },
  mining:{
    tags:["building", "building"],
    gold: 30,
    upgrade:["steel"],
    add:["steel","steel","steel","steel","steel"],
    set: "?"
  },
  vitor:{
    tags:["earth"],
    gold: 45,
    upgrade:[],
    add:[],
    set: "?"
  },
  thoregate:{
    tags:["power"],
    gold: 48,
    upgrade:["power"],
    add:[],
    set: "?"
  },
  valley:{
    tags:["earth"],
    gold: 37,
    upgrade:[],
    add:[],
    set: "?"
  },
  point:{
    tags:["earth","space"],
    gold: 38,
    upgrade:["titanium"],
    add:[],
    set: "?"
  },
  unmi:{
    tags:["earth"],
    gold: 40,
    upgrade:[],
    add:[],
    set: "?"

  },
  viron:{
    tags:["microb"],
    gold: 48,
    upgrade:[],
    add:[],
    set: "?"
  },
  credicor:{
    tags:[],
    gold: 57,
    upgrade:[],
    add:[]
    ,set: "?"

  },
  arklight:{
    tags:["animal"],
    gold: 45,
    upgrade:["gold","gold"],
    add:[],
    set: "?"
  },
  saturn:{
    tags:["jovian"],
    gold: 42,
    upgrade:["titanium"],
    add:[],
    set: "?"
  },
  helion:{
    tags:["space"],
    gold: 42,
    upgrade:["heat","heat","heat"],
    add:[],
    set: "?"
  },
  celestic:{
    tags:["venus"],
    gold: 42,
    upgrade:[],
    add:[],
    set: "?"
  },
  ecoline:{
    tags:["plant"],
    gold: 36,
    upgrade:["plants","plants"],
    add:["plants","plants","plants"],
    set: "?"
  },
  inventrix:{
    tags:["science"],
    gold: 45,
    upgrade:[],
    add:[],
    set: "?"
  },
  robinson:{
    tags:[],
    gold: 47,
    upgrade:[],
    add:[],
    set: "?"
  },
  phoblog:{
    tags:["space"],
    gold: 23,
    upgrade:[],
    add:["titanium","titanium","titanium","titanium","titanium","titanium","titanium","titanium","titanium","titanium"],
    set: "?"
  },
  tharsis:{
    tags:["building"],
    gold: 40,
    upgrade:[],
    add:[],
    set: "?"
  },
  aphrodite:{
    tags:["plant", "venus"],
    gold: 47,
    upgrade:["plants"],
    add:[],
    set: "?"
  },
  msi:{
    tags:[ "venus"],
    gold: 50,
    upgrade:[],
    add:[],
    set: "?"
  },
  
  

}

let buyUpgrades = {
  sell: {
    amount: 0,
    quantity: 0,
    gold: -1,
    upgrade: "nothing",
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
    upgrade: "nothing",
    tr:1,
  },
  ocean: {
    amount: 0,
    quantity: 9,
    gold: 18,
    upgrade: "nothing",
    tr:1,
  },
  greenery: {
    amount: 0,
    quantity: 14,
    gold: 23,
    plants: 8,
    upgrade: "nothing",
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
  nothing: {
    price: 0,
    quantity: 0,
    multiplier: 0,
    amount: 0,
    type: "click"
  },
};



function mine() {
  cheese += clickBonus
  document.getElementById("cheese").innerText = cheese.toString()

}

function selectCorp(){
  //console.log("seletCorp")
  // need to add code here
  let e = document.getElementById("sCorp")
  let result = e.options[e.selectedIndex].value
  console.log("seletCorp",result)

  let elm = corp[result]
  console.log (elm)

  let elmGold = clickUpgrades["gold"]
  elmGold.amount += elm.gold
  drawElm("gold", elmGold)

  let elmItem = {}

  for (let i = 0; i < elm.upgrade.length; i++) {
    //console.log (elm.upgrade[i])
    elmItem = clickUpgrades[elm.upgrade[i]] 
    elmItem.quantity ++
    drawElm(elm.upgrade[i], elmItem)

  }

  for (let i = 0; i < elm.add.length; i++) {
    console.log (elm.add[i])
    elmItem = clickUpgrades[elm.add[i]] 
    elmItem.amount ++
    drawElm(elm.add[i], elmItem)

  }

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
  //debugger
  let elm = buyUpgrades[item]
  //console.log(buyUpgrades)
  //console.log(item)
  //console.log("elm", elm)
  let elmUp = clickUpgrades[elm.upgrade]
  elmUp.quantity ++
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
  drawElm(elm.upgrade, elmUp)
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

  document.getElementById(item + "-quantity").innerText = "+" + (elm.quantity).toString()
  document.getElementById(item + "-amount").innerText = "(" + (elm.amount).toString() + ")"
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