'use strict';


    // ドリンククラス定義
    class Drink{
      constructor(name="tea", cost=100, count=5, temperature="cool"){
        this.name = name;
        this.cost = cost;
        this.count = count;
        this.temperature = temperature;
      }
      countDown(){
        if(this.count>=1){
          this.count--;
        }
      }
    }

    class Money{
      constructor(name, cost){
        this.name = name;
        this.cost = cost;
      }
    }
    let money = 0;
    let change = 0;
    let mincost;

    const throwMoneyD = document.getElementById('throwMoney');
    const allMoneyD = document.getElementById('allMoney');
    const changeD = document.getElementById('change')
    const drinksDiv = document.getElementById("drinks");
    const returnMoneyD = document.getElementById("returnMoney");
    const getChangeD = document.getElementById("getChange");
    const getProductsD = document.getElementById("getProducts");
    const productsD = document.getElementById("products");

    const drink0 = new Drink("tea", 100, 2);
    // const drink1 = new Drink("紅茶", 130, 2);
    const drink2 = new Drink("pokari", 110, 2);
    // const drink3 = new Drink("ビール", 300, 2);
    // const drink4 = new Drink("hot茶", 100, 2, "hot");
    const drink5 = new Drink("potage", 100, 2, "hot");
    const drink6 = new Drink("cocoa", 150, 2, "hot");
    // const drink7 = new Drink("味噌汁", 300, 2, "hot");

    const drinks = [drink0,drink2, drink5, drink6];

    // お金
    const oneThousand = new Money("1000円", 1000);
    const oneHundred = new Money("100円", 100);
    const fifth = new Money("50円", 50);
    const ten = new Money("10円", 10);

    let moneys = [oneThousand, oneHundred, fifth, ten];

    // const num = 12;
    // for(let i=0; i<num; i++){
    //   const drink = new Drink();
    //   drinks.push(drink);
    // }

    mincost = drinks[0].cost;
    drinks.forEach(d => {
      if(d.cost < mincost){
        mincost = d.cost;
      }
    });

    function showAllMoney(){
      allMoneyD.textContent = `投入代金: ${money}`;
    }
    function showChange(){
      changeD.textContent = `お釣り: ${change}`;
    }

    function showProduct(d){
      const productItem = document.createElement('div');
      const product = document.createElement('div');
      const productName = document.createElement('p');

      productItem.classList.add('productItem');
      productItem.classList.add(`product-${d.name}`);
      product.classList.add('product');
      productName.textContent = d.name;
      product.appendChild(productName);
      productItem.appendChild(product);
      productsD.appendChild(productItem);
    }
    function drinksRemove(){
      while(drinksDiv.lastChild){
        drinksDiv.removeChild(drinksDiv.lastChild);
      }
    }
    function loopDrink(){
      drinksRemove();
      drinks.forEach((d, index) => {
        const drinkItem = document.createElement('div');
        const drink = document.createElement('div');
        const drinkName = document.createElement('p');
        const drinkCount = document.createElement('p');
        const drinkTemperature = document.createElement('div');
        const button = document.createElement('div');


        drinkItem.id = `drink-${d.name}`
        drinkItem.classList.add('drinkItem');
        drink.classList.add('drink');
        drinkTemperature.classList.add('drinkTemperature');
        if(d.temperature === "hot"){
          drinkTemperature.classList.add('hot');
        }
        button.classList.add('button');
        if(d.count>0 && d.cost<=money){
          if(d.temperature==="hot"){
            button.classList.add("buttonOrange");
          }else{
            button.classList.add("buttonBlue");
          }
        }
        drinkName.textContent = d.name;
        drinkCount.textContent = d.count;
        drinkTemperature.textContent = `${d.cost}`;
        if(d.count === 0){
          button.textContent = "売切"
        }

        button.addEventListener('click', () => {
          if(d.count > 0){
            if(d.cost <= money){
              d.countDown();
              showProduct(d);
              money -= d.cost;
              if(mincost > money){
                change += money;
                money = 0;
              }
              showChange();
              showAllMoney();
              loopDrink();
            }
          }
        });
        drink.appendChild(drinkName);
        drink.appendChild(drinkCount);
        drinkItem.appendChild(drink);
        drinkItem.appendChild(drinkTemperature);
        drinkItem.appendChild(button);
        drinksDiv.appendChild(drinkItem);
      });
    }


    returnMoneyD.addEventListener('click', () => {
      change += money;
      money = 0;
      showAllMoney();
      showChange();
      loopDrink();
    });
    getChangeD.addEventListener('click', () => {
      change = 0;
      showChange();
    });
    getProductsD.addEventListener('click', () => {
      while(productsD.lastChild){
        productsD.removeChild(productsD.lastChild);
      }
    });



    loopDrink();
    showAllMoney();
    showChange();

    moneys.forEach((m) => {
      const div = document.createElement('div');
      div.classList.add('money');
      div.id = `money-${m.cost}`
      div.textContent = m.name;
      div.addEventListener('click', ()=>{
        money+= m.cost;
        showAllMoney();
        loopDrink();
      });
      throwMoneyD.appendChild(div);
    });
