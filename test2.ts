import { Selector } from 'testcafe'; // first import testcafe selectors 

fixture `Getting Started`// declare the fixture
  .page `http://localhost:8080/`;  // specify the start page


test('test', async (t: TestController) => {
  // 自動販売機の商品
  const tea = Selector("#drink-tea"); //100円　お茶
  const pokari = Selector("#drink-pokari"); //110円　ポカリ
  const potage = Selector("#drink-potage"); //100円　牛乳
  const cocoa = Selector("#drink-cocoa"); //150円　ココア
  // 商品のボタン
  const teaBtn = tea.child(".button"); 
  const pokariBtn = pokari.child(".button"); 
  const potageBtn = potage.child(".button");
  const cocoaBtn = cocoa.child(".button"); 

  // 取り出し口の商品
  const pTea = Selector(".product-tea");　// お茶
  const pPokari = Selector(".product-pokari")//　ポカリ
  const pPotage = Selector(".product-potage"); //　牛乳
  const pCocoa = Selector(".product-cocoa"); //　ココア
  
  const allMoney = Selector("#allMoney"); //入金表示
  const returnMoney = Selector("#returnMoney");
  const change = Selector("#change"); //お釣り取り出し口
  const getChange = Selector("#getChange"); //お釣り取り出しボタン
  const products = Selector("#products"); //商品取り出し口
  const getProducts = Selector("#getProducts");　//商品取り出しボタン

  const money1000 = Selector("#money-1000");
  const money100 = Selector("#money-100");
  const money50 = Selector("#money-50");
  const money10 = Selector("#money-10");


  // 初期状態
  await t
    // 売り切れ表示
    .expect(teaBtn.innerText).notEql("売切")
    .expect(pokariBtn.innerText).notEql("売切")
    .expect(potageBtn.innerText).notEql("売切")
    .expect(cocoaBtn.innerText).notEql("売切")
    // 入金表示
    .expect(allMoney.innerText).eql("投入代金: 0")
    // 購入可能ランプ
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    // 商品取り出し口
    .expect(products.hasChildElements).notOk()
    // お釣り取り出し口
    .expect(change.innerText).eql("お釣り: 0")
  ;




  // 1-1
  await t.click(money100)
    .expect(allMoney.innerText).eql("投入代金: 100")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
  ;
  // 1-2
  await t.click(teaBtn)
    .expect(allMoney.innerText).eql("投入代金: 0")
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(pTea.exists).ok()
  ;

  //1-3
  await t.click(getProducts)
    .expect(products.hasChildElements).notOk()
  ;

  //1-4
  await t
    // 売り切れ表示
    .expect(teaBtn.innerText).notEql("売切")
    .expect(pokariBtn.innerText).notEql("売切")
    .expect(potageBtn.innerText).notEql("売切")
    .expect(cocoaBtn.innerText).notEql("売切")
    // 入金表示
    .expect(allMoney.innerText).eql("投入代金: 0")
    // 購入可能ランプ
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    // 商品取り出し口
    .expect(products.hasChildElements).notOk()
    // お釣り取り出し口
    .expect(change.innerText).eql("お釣り: 0")
  ;




  
  // 2-5
  await t.click(money10)
    .expect(allMoney.innerText).eql("投入代金: 10")
  ;


  // 2-6
  await t.click(money100)
    .expect(allMoney.innerText).eql("投入代金: 110")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(pokariBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
  ;

  // 2-7
  await t.click(pokariBtn)
    .expect(allMoney.innerText).eql("投入代金: 0")
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(pPokari.exists).ok()
  ;

  // 2-8
  await t.click(getProducts)
    .expect(products.hasChildElements).notOk()
  ;


  //2-9
  await t
    // 売り切れ表示
    .expect(teaBtn.innerText).notEql("売切")
    .expect(pokariBtn.innerText).notEql("売切")
    .expect(potageBtn.innerText).notEql("売切")
    .expect(cocoaBtn.innerText).notEql("売切")
    // 入金表示
    .expect(allMoney.innerText).eql("投入代金: 0")
    // 購入可能ランプ
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    // 商品取り出し口
    .expect(products.hasChildElements).notOk()
    // お釣り取り出し口
    .expect(change.innerText).eql("お釣り: 0")
  ;






  //3-10
  await t.click(money50)
    .expect(allMoney.innerText).eql("投入代金: 50")
  ;

  //3-11
  await t.click(money100)
    .expect(allMoney.innerText).eql("投入代金: 150")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(pokariBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
    .expect(cocoaBtn.hasClass("buttonOrange")).ok()
  ;

  //3-12
  await t.click(potageBtn)
    .expect(allMoney.innerText).eql("投入代金: 0")
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    .expect(pPotage.exists).ok()
    .expect(change.innerText).eql("お釣り: 50");
  ;

  //3-13
  await t.click(getChange)
    .expect(change.innerText).eql("お釣り: 0")
  ;

  //3-14
  await t.click(getProducts)
    .expect(products.hasChildElements).notOk()
  ;

  // 3-15はテストマトリックスでとばしてるからなし
  //3-16
  await t
    // 売り切れ表示
    .expect(teaBtn.innerText).notEql("売切")
    .expect(pokariBtn.innerText).notEql("売切")
    .expect(potageBtn.innerText).notEql("売切")
    .expect(cocoaBtn.innerText).notEql("売切")
    // 入金表示
    .expect(allMoney.innerText).eql("投入代金: 0")
    // 購入可能ランプ
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    // 商品取り出し口
    .expect(products.hasChildElements).notOk()
    // お釣り取り出し口
    .expect(change.innerText).eql("お釣り: 0")
  ;





  // 4-17
  await t.click(money1000)
    .expect(allMoney.innerText).eql("投入代金: 1000")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(pokariBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
    .expect(cocoaBtn.hasClass("buttonOrange")).ok()
  ;

  // 4-18
  await t.click(cocoaBtn)
    .expect(allMoney.innerText).eql("投入代金: 850")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(pokariBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
    .expect(cocoaBtn.hasClass("buttonOrange")).ok()
    .expect(pCocoa.exists).ok()
  ;
  // 4-19
  await t.click(returnMoney)
    .expect(allMoney.innerText).eql("投入代金: 0")
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    .expect(change.innerText).eql("お釣り: 850")
  ;
  // 4-20
  await t.click(getChange)
    .expect(change.innerText).eql("お釣り: 0")
  ;

  // 4-21
  await t.click(getProducts)
    .expect(products.hasChildElements).notOk()
  ;

  // 4-22
  await t
    // 売り切れ表示
    .expect(teaBtn.innerText).notEql("売切")
    .expect(pokariBtn.innerText).notEql("売切")
    .expect(potageBtn.innerText).notEql("売切")
    .expect(cocoaBtn.innerText).notEql("売切")
    // 入金表示
    .expect(allMoney.innerText).eql("投入代金: 0")
    // 購入可能ランプ
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    // 商品取り出し口
    .expect(products.hasChildElements).notOk()
    // お釣り取り出し口
    .expect(change.innerText).eql("お釣り: 0")
  ;






  // 5-23
  await t.click(money1000)
    .expect(allMoney.innerText).eql("投入代金: 1000")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(pokariBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
    .expect(cocoaBtn.hasClass("buttonOrange")).ok()
  ;

  // 5-24
  await t.click(cocoaBtn)
    .expect(allMoney.innerText).eql("投入代金: 850")
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    .expect(pCocoa.exists).ok()
    .expect(cocoaBtn.innerText).eql("売切")
  ;

  // 5-25
  await t.click(potageBtn)
    .expect(allMoney.innerText).eql("投入代金: 750")
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(pPotage.exists).ok()
    .expect(potageBtn.innerText).eql("売切")
  ;

  // 5-26
  await t.click(pokariBtn)
    .expect(allMoney.innerText).eql("投入代金: 640")
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(pPokari.exists).ok()
    .expect(pokariBtn.innerText).eql("売切")
  ;

  // 5-27
  await t.click(teaBtn)
    .expect(allMoney.innerText).eql("投入代金: 540")
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pTea.exists).ok()
    .expect(teaBtn.innerText).eql("売切")
  ;

  // 5-28
  await t.click(returnMoney)
    .expect(allMoney.innerText).eql("投入代金: 0")
    .expect(change.innerText).eql("お釣り: 540")
  ;

  // 5-29
  await t.click(getChange)
    .expect(change.innerText).eql("お釣り: 0")
  ;

  // 5-30
  await t.click(getProducts)
    .expect(products.hasChildElements).notOk()
  ;

  // 5-31
  await t
    // 売り切れ表示
    .expect(teaBtn.innerText).eql("売切")
    .expect(pokariBtn.innerText).eql("売切")
    .expect(potageBtn.innerText).eql("売切")
    .expect(cocoaBtn.innerText).eql("売切")
    // 入金表示
    .expect(allMoney.innerText).eql("投入代金: 0")
    // 購入可能ランプ
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    // 商品取り出し口
    .expect(products.hasChildElements).notOk()
    // お釣り取り出し口
    .expect(change.innerText).eql("お釣り: 0")
  ;
  ;




});
