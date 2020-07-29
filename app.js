let cheese = 0;
let clickBonus = 1;
let autoBonus = 0;
let clickCount = 0;

let prelude = {
  martian:{
    tags:["building"],
    gold: 0,
    upgrade:["power","steel"],
    add:["gold","gold","gold","gold","gold","gold"],
    global:[],
    set: "x?"
  },
  loan:{
    tags:[],
    gold: 30,
    upgrade:[],
    add:[],
    global:[],
    set: "x?"
  },
  society:{
    tags:[],
    gold: 0,
    upgrade:["plants","power","heat"],
    add:[],
    global:[],
    set: "x?"
  },
  biosphere:{
    tags:["plant"],
    gold: 0,
    upgrade:["plants","plants"],
    add:[],
    global:[],
    set: "x?"
  },
  orbital:{
    tags:["space"],
    gold: 0,
    upgrade:["titanium"],
    add:["titanium","titanium","titanium","titanium"],
    global:[],
    set: "x?"
  },
  research:{
    tags:["?"],
    gold: 0,
    upgrade:["gold"],
    add:[],
    global:[],
    set: "x?"
  },
  experimental:{
    tags:["plant"],
    gold: 0,
    upgrade:[],
    add:[],
    global:["greenery"],
    set: "x?"
  },
  donation:{
    tags:[],
    gold: 21,
    upgrade:[],
    add:[],
    global:[],
    set: "x?"
  },
  smelting:{
    tags:["building"],
    gold: 0,
    upgrade:[],
    add:["steel","steel","steel","steel","steel"],
    global:["greenery","greenery"],
    set: "x?"
  },
  excentric:{
    tags:[],
    gold: 25,
    upgrade:[],
    add:[],
    global:[],
    set: "x?"
  },
  io:{
    tags:["jovian","science"],
    gold: 0,
    upgrade:["titanium"],
    add:[],
    global:[],
    set: "x?"
  },
  ecology:{
    tags:["plant","microb"],
    gold: 0,
    upgrade:["plants"],
    add:[],
    global:[],
    set: "x?"
  },
  early:{
    tags:["city","building"],
    gold: 0,
    upgrade:["plants"],
    add:[],
    global:["city"],
    set: "x?"
  },
  supply:{
    tags:[],
    gold: 0,
    upgrade:[],
    add:["titanium","titanium","titanium","steel","steel","steel","steel","steel","steel","steel","steel","plants","plants","plants"],
    global:["city"],
    set: "x?"
  },
  aquifer:{
    tags:["power"],
    gold: -3,
    upgrade:["power","power"],
    add:[],
    global:["ocean"],
    set: "x?"
  },
  great:{
    tags:[],
    gold: -3,
    upgrade:[],
    add:[],
    global:["ocean","ocean"],
    set: "x?"
  },
  moholex:{
    tags:["building"],
    gold: 0,
    upgrade:["steel", "heat", "heat"],
    add:["heat", "heat"],
    global:[],
    set: "x?"
  },
  acquired:{
    tags:[],
    gold: 0,
    upgrade:[],
    add:["titanium", "titanium","titanium", "titanium","titanium", "titanium"],
    global:[],
    set: "x?"
  },
  self:{
    tags:["city", "building"],
    gold: 0,
    upgrade:["gold", "gold"],
    add:[],
    global:["city"],
    set: "x?"
  },
  biolab:{
    tags:["science"],
    gold: 0,
    upgrade:["plants"],
    add:[],
    global:[],
    set: "x?"
  },
  metal:{
    tags:[],
    gold: 0,
    upgrade:[],
    add:["titanium", "titanium","titanium", "titanium","steel", "steel","steel", "steel"],
    global:["temperature"],
    set: "x?"
  },
  nitrogen:{
    tags:[],
    gold: 5,
    upgrade:["plants","gold"],
    add:[],
    global:[],
    set: "x?"
  },
  mohole:{
    tags:["building"],
    gold: 0,
    upgrade:["heat", "heat", "heat"],
    add:["heat", "heat","heat"],
    global:[],
    set: "x?"
  },
  huge:{
    tags:[],
    gold: -5,
    upgrade:[],
    add:[],
    global:["temperature","temperature","temperature"],
    set: "x?"
  },
  polar:{
    tags:["building"],
    gold: 0,
    upgrade:["heat", "heat"],
    add:[],
    global:["ocean"],
    set: "x?"
  },
  biofuels:{
    tags:["microb"],
    gold: 0,
    upgrade:["plants", "power"],
    add:["plants", "plants"],
    global:[],
    set: "x?"
  },
  dome:{
    tags:["plant","building"],
    gold: 0,
    upgrade:["plants", "gold", "gold"],
    add:[],
    global:[],
    set: "x?"
  },
  metals:{
    tags:[],
    gold: 0,
    upgrade:["gold", "steel","titanium"],
    add:[],
    global:[],
    set: "x?"
  },
  supplier:{
    tags:["power"],
    gold: 0,
    upgrade:["power","power"],
    add:["steel","steel","steel","steel"],
    global:[],
    set: "x?"
  },
  business:{
    tags:["earth"],
    gold: -6,
    upgrade:["gold","gold","gold","gold","gold","gold"],
    add:[],
    global:[],
    set: "x?"
  },
  unmi:{
    tags:["earth"],
    gold: 0,
    upgrade:["gold","gold","gold"],
    add:[],
    global:[],
    set: "x?"
  },
  power:{
    tags:["power"],
    gold: 0,
    upgrade:["power","power","power"],
    add:[],
    global:[],
    set: "x?"
  },
  gaililean:{
    tags:["jovian"],
    gold: -5,
    upgrade:["titanium","titanium"],
    add:[],
    global:[],
    set: "x?"
  },
  allied:{
    tags:["earth"],
    gold: 3,
    upgrade:["gold","gold","gold","gold"],
    add:[],
    global:[],
    set: "x?"
  },
  mining:{
    tags:["building"],
    gold: 0,
    upgrade:["steel","steel"],
    add:["steel","steel","steel","steel"],
    global:[],
    set: "x?"
  },

}

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

  //let elmItem = {}

  // for (let i = 0; i < elm.upgrade.length; i++) {
  //   //console.log (elm.upgrade[i])
  //   elmItem = clickUpgrades[elm.upgrade[i]] 
  //   elmItem.quantity ++
  //   drawElm(elm.upgrade[i], elmItem)
  // }

  // for (let i = 0; i < elm.add.length; i++) {
  //   console.log (elm.add[i])
  //   elmItem = clickUpgrades[elm.add[i]] 
  //   elmItem.amount ++
  //   drawElm(elm.add[i], elmItem)
  // }

  x(elm.upgrade, "quantity")
  x(elm.add, "amount")

}

function x(elmList, xElm){
  //rename this function
  let elmItem = {}

  for (let i = 0; i < elmList.length; i++) {
    console.log (elmList[i])
    elmItem = clickUpgrades[elmList[i]] 
    if (xElm =="amount"){elmItem.amount ++}
    if (xElm =="quantity"){elmItem.quantity ++}
    drawElm(elmList[i], elmItem)
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