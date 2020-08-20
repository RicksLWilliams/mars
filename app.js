let cheese = 0;
let clickBonus = 1;
let autoBonus = 0;
let clickCount = 0;

let card = {
  demos_down:{
    tags:["space","event"],
    upgrade:[],
    add:["gold(11)","steel(4)"],
    global:["temperature","temperature", "temperature"],
    set: "basic"
  },
  ice_asteroid:{
    tags:["space","event"],
    upgrade:[],
    add:["gold(13)"],
    global:["ocean","ocean"],
    set: "basic"
  },
  imported_nitrogen:{
    tags:["earth","space","event"],
    upgrade:["gold(1)"],
    add:["gold(-23)", "plants(4)"],
    global:[],
    set: "basic"
  },
  imported_hydrogen:{
    tags:["earth","space","event"],
    upgrade:[],
    add:["gold(2)", "plants(3)"],
    global:["ocean"],
    set: "basic"
  },
  special_design:{
    tags:["science","event"],
    upgrade:[],
    add:["gold(-4)"],
    global:[],
    set: "basic"
  },
  release_of_inert_gasses:{
    tags:["event"],
    upgrade:["gold(2)"],
    add:["gold(-14)"],
    global:[],
    set: "basic"
  },
  big_asteroid:{
    tags:["space","event"],
    upgrade:[],
    add:["gold(1)", "titanium(4)"],
    global:["temperature","temperature"],
    set: "basic"
  },
  coment:{
    tags:["space","event"],
    upgrade:[],
    add:["gold(11)"],
    global:["temperature","ocean"],
    set: "basic"
  },
  invention_contest:{
    tags:["science","event"],
    upgrade:[],
    add:["gold(-2)"],
    global:[],
    set: "basic"
  },
  convoy_from_europa:{
    tags:["space","event"],
    upgrade:[],
    add:["gold(3)"],
    global:["ocean"],
    set: "basic"
  },
  nitrogen_rich_asteroid:{
    tags:["space","event"],
    upgrade:["plants(4)","gold(2)"],
    add:["gold(-17)"],
    global:["temperature"],
    set: "basic"
  },
  asteroid:{
    tags:["space","event"],
    upgrade:[],
    add:["titanium(2)"],
    global:["temperature"],
    set: "basic"
  },
  large_convoy:{
    tags:["earth","space","event"],
    upgrade:[],
    add:["plants(5)","gold(-18)"],
    global:["ocean"],
    set: "basic"
  },
  lava_flows:{
    tags:["event"],
    upgrade:[],
    add:["gold(10)"],
    global:["temperature","temperature"],
    set: "basic"
  },
  land_claim:{
    tags:["event"],
    upgrade:[],
    add:["gold(-1)"],
    global:[],
    set: "basic"
  },
  permafrost_extraction:{
    tags:["event"],
    upgrade:[],
    add:["gold(10)"],
    global:["ocean"],
    set: "basic"
  },
  aerobraked_ammonia_asteroid:{
    tags:["space","event"],
    upgrade:["heat(3)", "plants(1)"],
    add:["gold(-26)"],
    global:[],
    set: "basic"
  },
  towing_a_comet:{
    tags:["space","event"],
    upgrade:[],
    add:["gold(18)","plants(2)"],
    global:["ocean", "greenery"],
    set: "basic"
  },
  mining_expedition:{
    tags:["event"],
    upgrade:[],
    add:["gold(11)","steel(2)"],
    global:["greenery"],
    set: "basic"
  },
  ice_cap_melting:{
    tags:["event"],
    upgrade:[],
    add:["gold(13)"],
    global:["ocean"],
    set: "basic"
  },
  subterranean_reservoir:{
    tags:["event"],
    upgrade:[],
    add:["gold(7)"],
    global:["ocean"],
    set: "basic"
  },
  import_of_advanced_ghg:{
    tags:["earth","space","event"],
    upgrade:["heat(2)"],
    add:["gold(-9)"],
    global:[],
    set: "basic"
  },
  imported_ghg:{
    tags:["earth","space","event"],
    upgrade:["heat(1)"],
    add:["gold(-7)","heat(3)"],
    global:[],
    set: "basic"
  },
  local_heat_trappimng:{
    tags:["event"],
    upgrade:[],
    add:["gold(-1)","heat(-5)","plants(4)"],
    global:[],
    set: "basic"
  },
  giant_ice_asteroid:{
    tags:["space","event"],
    upgrade:[],
    add:["gold(28)"],
    global:["ocean","ocean","temperature","temperature"],
    set: "basic"
  },
  flooding:{
    tags:["event"],
    upgrade:[],
    add:["gold(11)"],
    global:["ocean"],
    set: "basic"
  },
  geothermal_power:{
    tags:["power","building"],
    upgrade:["power(2)"],
    add:["gold(-11)"],
    global:[],
    set: "basic"
  },
  lunar_beam:{
    tags:["power","earth"],
    upgrade:["power(2)","heat(2)","gold(-2)"],
    add:["gold(-13)"],
    global:[],
    set: "basic"
  },
  giant_space_mirror:{
    tags:["power","space"],
    upgrade:["power(3)"],
    add:["gold(-17)"],
    global:[],
    set: "basic"
  },
  breathing_filters:{
    tags:["science"],
    upgrade:[],
    add:["gold(-11)"],
    global:[],
    set: "basic"
  },
  kelp_farming:{
    tags:["plant"],
    upgrade:["gold(2)", "plants(3)"],
    add:["gold(-17)","plants(2)"],
    global:[],
    set: "basic"
  },
  solar_power:{
    tags:["power","building"],
    upgrade:["power(1)"],
    add:["gold(-11)"],
    global:[],
    set: "basic"
  },
  industrial_microbes:{
    tags:["microbe","building"],
    upgrade:["power(1)","steel(1)"],
    add:["gold(-12)"],
    global:[],
    set: "basic"
  },
  strip_mine:{
    tags:["building"],
    upgrade:["power(-2)","steel(2)","titanium(1)"],
    add:["gold(21)"],
    global:["greenery", "greenery"],
    set: "basic"
  },
  building_industires:{
    tags:["building"],
    upgrade:["power(-1)","steel(2)"],
    add:["gold(-6)"],
    global:[],
    set: "basic"
  },
  urbanized_area:{
    tags:["building","city"],
    upgrade:["power(-1)","gold(1)"],
    add:["gold(15)"],
    global:["city"],
    set: "basic"
  },
  beam_from_a_thorium_asteroid:{
    tags:["jovian","space","power"],
    upgrade:["power(3)","heat(3)"],
    add:["gold(-32)"],
    global:[],
    set: "basic"
  },
  ganymede_colony:{
    tags:["jovian","space","city"],
    upgrade:[],
    add:["gold(5)"],
    global:["city"],
    set: "basic"
  },
  asteroid_mining:{
    tags:["jovian","space"],
    upgrade:["titanium(2)"],
    add:["gold(-30)"],
    global:[],
    set: "basic"
  },
  dust_seals:{
    tags:[],
    upgrade:[],
    add:["gold(-2)"],
    global:[],
    set: "basic"
  },
  fuel_generators:{
    tags:["power", "building"],
    upgrade:["gold(-1)", "power(1)"],
    add:["gold(-1)"],
    global:[],
    set: "basic"
  },
  natural_preserve:{
    tags:["science", "building"],
    upgrade:["gold(1)", ],
    add:["gold(-9)"],
    global:[],
    set: "basic"
  },


}

let prelude = {
  martian:{
    tags:["building"],
    //gold: 0,
    upgrade:["power(1)","steel(1)"],
    add:["gold(6)"],
    global:[],
    set: "x?"
  },
  loan:{
    tags:[],
    //gold: 0,
    upgrade:["gold(-2)"],
    add:["gold(30)"],
    global:[],
    set: "x?"
  },
  society:{
    tags:[],
    //gold: 0,
    upgrade:["gold(-1)","plants(1)","power(1)","heat(1)"],
    add:[],
    global:[],
    set: "x?"
  },
  biosphere:{
    tags:["plant"],
    //gold: 0,
    upgrade:["plants(2)"],
    add:[],
    global:[],
    set: "x?"
  },
  orbital:{
    tags:["space"],
    //gold: 0,
    upgrade:["titanium(1)"],
    add:["titanium(4)"],
    global:[],
    set: "x?"
  },
  research:{
    tags:["?"],
    //gold: 0,
    upgrade:["gold(1)"],
    add:[],
    global:[],
    set: "x?"
  },
  experimental:{
    tags:["plant"],
    //gold: 0,
    upgrade:[],
    add:["gold(23)"],
    global:["greenery"],
    set: "x?"
  },
  donation:{
    tags:[],
    //gold: 0,
    upgrade:[],
    add:["gold(21)"],
    global:[],
    set: "x?"
  },
  smelting:{
    tags:["building"],
    //gold: 0,
    upgrade:[],
    add:["gold(46)", "steel(5)"],
    global:["greenery","greenery"],
    set: "x?"
  },
  excentric:{
    tags:[],
    //gold: 0,
    upgrade:[],
    add:["gold(25)"],
    global:[],
    set: "x?"
  },
  io:{
    tags:["jovian","science"],
    //gold: 0,
    upgrade:["titanium(1)"],
    add:[],
    global:[],
    set: "x?"
  },
  ecology:{
    tags:["plant","microb"],
    //gold: 0,
    upgrade:["plants(1)"],
    add:[],
    global:[],
    set: "x?"
  },
  early:{
    tags:["city","building"],
    //gold: 0,
    upgrade:["plants(1)"],
    add:["gold(25)"],
    global:["city"],
    set: "x?"
  },
  supply:{
    tags:[],
    //gold: 0,
    upgrade:[],
    add:["titanium(3)","steel(8)","plants(3)"],
    global:[],
    set: "x?"
  },
  aquifer:{
    tags:["power"],
    //gold: 0,
    upgrade:["power(2)"],
    add:["gold(15)"],
    global:["ocean"],
    set: "x?"
  },
  great:{
    tags:[],
    //gold: 0,
    upgrade:[],
    add:["gold(36)"],
    global:["ocean","ocean"],
    set: "x?"
  },
  moholex:{
    tags:["building"],
    //gold: 0,
    upgrade:["steel(1)", "heat(2)"],
    add:["heat(2)"],
    global:[],
    set: "x?"
  },
  acquired:{
    tags:[],
    //gold: 0,
    upgrade:[],
    add:["titanium(6)"],
    global:[],
    set: "x?"
  },
  self:{
    tags:["city", "building"],
    //gold: 0,
    upgrade:["gold(2)"],
    add:["gold(25)"],
    global:["city"],
    set: "x?"
  },
  biolab:{
    tags:["science"],
    //gold: 0,
    upgrade:["plants(1)"],
    add:[],
    global:[],
    set: "x?"
  },
  metal:{
    tags:[],
    //gold: 0,
    upgrade:[],
    add:["gold(14)","titanium(4)","steel(4)"],
    global:["temperature"],
    set: "x?"
  },
  nitrogen:{
    tags:[],
    //gold: 0,
    upgrade:["plants(1)","gold(1)"],
    add:["gold(5)"],
    global:[],
    set: "x?"
  },
  mohole:{
    tags:["building"],
    //gold: 0,
    upgrade:["heat(3)"],
    add:["heat(3)"],
    global:[],
    set: "x?"
  },
  huge:{
    tags:[],
    //gold: 0,
    upgrade:[],
    add:["gold(37)"],
    global:["temperature","temperature","temperature"],
    set: "x?"
  },
  polar:{
    tags:["building"],
    //gold: 0,
    upgrade:["heat(2)"],
    add:["gold(18)"],
    global:["ocean"],
    set: "x?"
  },
  biofuels:{
    tags:["microb"],
    //gold: 0,
    upgrade:["plants(1)", "power(1)"],
    add:["plants(2)"],
    global:[],
    set: "x?"
  },
  dome:{
    tags:["plant","building"],
    //gold: 0,
    upgrade:["plants(1)", "gold(2)"],
    add:[],
    global:[],
    set: "x?"
  },
  metals:{
    tags:[],
    //gold: 0,
    upgrade:["gold(1)", "steel(1)","titanium(1)"],
    add:[],
    global:[],
    set: "x?"
  },
  supplier:{
    tags:["power"],
    //gold: 0,
    upgrade:["power(2)"],
    add:["steel(4)"],
    global:[],
    set: "x?"
  },
  business:{
    tags:["earth"],
    //gold: 0,
    upgrade:["gold(6)"],
    add:["gold(-6)"],
    global:[],
    set: "x?"
  },
  unmi:{
    tags:["earth"],
    //gold: 0,
    upgrade:["gold(3)"],
    add:[],
    global:[],
    set: "x?"
  },
  power:{
    tags:["power"],
    //gold: 0,
    upgrade:["power(3)"],
    add:[],
    global:[],
    set: "x?"
  },
  gaililean:{
    tags:["jovian"],
    //gold: 0,
    upgrade:["titanium(2)"],
    add:["gold(-5)"],
    global:[],
    set: "x?"
  },
  allied:{
    tags:["earth"],
    //gold: 0,
    upgrade:["gold(4)"],
    add:["gold(3)"],
    global:[],
    set: "x?"
  },
  mining:{
    tags:["building"],
    //gold: 0,
    upgrade:["steel(2)"],
    add:["steel(4)"],
    global:[],
    set: "x?"
  },

}

let corp = {
  aridor:{
    tags:[],
    upgrade:[],
    add:["gold(40)"],
    global:[],
    set: "x?"
  },
  teractor:{
    tags:["earth"],
    upgrade:[],
    add:["gold(60)"],
    global:[],
    set: "?"
  },
  stromcraft:{
    tags:["jovian"],
    upgrade:[],
    add:["gold(48)"],
    global:[],
    set: "?"
  },
  polyphemos:{
    tags:[],
    upgrade:["gold(5)"],
    add:["gold(50)","titanium(5)"],
    global:[],
    set: "?"
  },
  cinematics:{
    tags:["building"],
    upgrade:[],
    add:["gold(30)", "steel(20)"],
    global:[],
    set: "?"
  },
  manutech:{
    tags:["building"],
    upgrade:["steel(1)"],
    add:["gold(25)"],
    global:[],
    set: "?"
  },
  cheung:{
    tags:["building"],
    upgrade:["gold(3)"],
    add:["gold(44)"],
    global:[],
    set: "?"
  },
  poseidon:{
    tags:[],
    upgrade:[],
    add:["gold(45)"],
    global:[],
    set: "?"
  },
  mining:{
    tags:["building", "building"],
    upgrade:["steel(1)"],
    add:["gold(30)","steel(5)"],
    global:[],
    set: "?"
  },
  vitor:{
    tags:["earth"],
    upgrade:[],
    add:["gold(45)"],
    global:[],
    set: "?"
  },
  thoregate:{
    tags:["power"],
    upgrade:["power(1)"],
    add:["gold(48)"],
    global:[],
    set: "?"
  },
  valley:{
    tags:["earth"],
    upgrade:[],
    add:["gold(37)"],
    global:[],
    set: "?"
  },
  point:{
    tags:["earth","space"],
    upgrade:["titanium(1)"],
    add:["gold(38)"],
    global:[],
    set: "?"
  },
  unmi:{
    tags:["earth"],
    upgrade:[],
    add:["gold(40)"],
    global:[],
    set: "?"

  },
  viron:{
    tags:["microb"],
    upgrade:[],
    add:["gold(48)"],
    global:[],
    set: "?"
  },
  credicor:{
    tags:[],
    upgrade:[],
    add:["gold(57)"],
    global:[],
    set: "?"

  },
  arklight:{
    tags:["animal"],
    upgrade:["gold(2)"],
    add:["gold(45)"],
    global:[],
    set: "?"
  },
  saturn:{
    tags:["jovian"],
    upgrade:["titanium(1)"],
    add:["gold(42)"],
    global:[],
    set: "?"
  },
  helion:{
    tags:["space"],
    upgrade:["heat(3)"],
    add:["gold(42)"],
    global:[],
    set: "?"
  },
  celestic:{
    tags:["venus"],
    upgrade:[],
    add:["gold(42)"],
    global:[],
    set: "?"
  },
  ecoline:{
    tags:["plant"],
    upgrade:["plants(2)"],
    add:["gold(36)", "plants(3)"],
    global:[],
    set: "?"
  },
  inventrix:{
    tags:["science"],
    upgrade:[],
    add:["gold(45)"],
    global:[],
    set: "?"
  },
  robinson:{
    tags:[],
    upgrade:[],
    add:["gold(47)"],
    global:[],
    set: "?"
  },
  phoblog:{
    tags:["space"],
    upgrade:[],
    add:["gold(23)","titanium(10)"],
    global:[],
    set: "?"
  },
  tharsis:{
    tags:["building"],
    upgrade:[],
    add:["gold(65)"],
    global:["city"],
    set: "?"
  },
  aphrodite:{
    tags:["plant", "venus"],
    upgrade:["plants(1)"],
    add:["gold(47)"],
    global:[],
    set: "?"
  },
  msi:{
    tags:[ "venus"],
    upgrade:[],
    add:["gold(50)"],
    global:[],
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

function makeSelection(element, deck){
  //combine these functions
  let e = document.getElementById(element)
  let result = e.options[e.selectedIndex].value

  playCard(result,deck)
}

function playCard(card, deck){
  let elm = deck[card]
  
  updateResources(elm.upgrade, "quantity")
  updateResources(elm.add, "amount")

    //update global
    let elmList = elm.global
    for (let i = 0; i < elmList.length; i++) {
      buyUpgrade(elmList[i] , "gold")
    }
}

function updateResources(elmList, xElm){
  let elmItem = {}
  //debugger

  for (let i = 0; i < elmList.length; i++) {
    let elm = elmList[i]
    let start = elm.indexOf("(")
    let item = elm.substring(0, start  )
    let change = elm.substring(start + 1, elm.length -1)

    elmItem = clickUpgrades[item] 
    elmItem[xElm]+= parseInt(change)
    drawElm(item, elmItem)
  }

}

function buyProjet(){
  let e = document.getElementById("sProject")
  let result = e.options[e.selectedIndex].value
  buyUpgrade(result.substring(5).toLowerCase(), "gold")
}

function buyUpgrade(item, resource){
  let elm = buyUpgrades[item]
  elm.quantity --

  let elmUp = clickUpgrades[elm.upgrade]
  elmUp.quantity ++

  let elm2 = clickUpgrades[resource]
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