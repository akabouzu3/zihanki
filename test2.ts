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
    console.log(`初期状態テスト ok`);
  ;
  console.log("行動: なし");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);





  // 1-1 100円投入
  await t.click(money100) 
    .expect(allMoney.innerText).eql("投入代金: 100")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
    console.log(`1-1 ok`);
  ;
  console.log("行動: 100円投入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);





  // 1-2　お茶購入
  await t.click(teaBtn)
    .expect(allMoney.innerText).eql("投入代金: 0")
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(pTea.exists).ok()
    console.log(`1-2 ok`);
  ;
  console.log("行動: お茶購入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);



  
  //1-3　商品取り出し
  await t.click(getProducts)
    .expect(products.hasChildElements).notOk()
    console.log(`1-3 ok`);
  ;
  console.log("行動: 商品取り出し");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  //1-4　行動なし
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
    console.log(`1-4 ok`);
  ;
  console.log("行動: 行動なし");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);







  
  // 2-5　10円投入
  await t.click(money10)
    .expect(allMoney.innerText).eql("投入代金: 10")
    console.log(`2-5 ok`);
  ;
  console.log("行動: 10円投入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);





  // 2-6　100円投入
  await t.click(money100)
    .expect(allMoney.innerText).eql("投入代金: 110")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(pokariBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
    console.log(`2-6 ok`);
  ;
  console.log("行動: 100円投入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 2-7　ポカリ購入
  await t.click(pokariBtn)
    .expect(allMoney.innerText).eql("投入代金: 0")
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(pPokari.exists).ok()
    console.log(`2-7 ok`);
  ;
  console.log("行動: ポカリ購入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 2-8　商品取り出し
  await t.click(getProducts)
    .expect(products.hasChildElements).notOk()
    console.log(`2-8 ok`);
  ;
  console.log("行動: 商品取り出し");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);





  //2-9　行動なし
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
    console.log(`2-9 ok`);
  ;
  console.log("行動: 行動なし");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);









  //3-10　50円投入
  await t.click(money50)
    .expect(allMoney.innerText).eql("投入代金: 50")
    console.log(`3-10 ok`);
  ;
  console.log("行動: 50円投入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  //3-11　100円投入
  await t.click(money100)
    .expect(allMoney.innerText).eql("投入代金: 150")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(pokariBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
    .expect(cocoaBtn.hasClass("buttonOrange")).ok()
    console.log(`3-11 ok`);
  ;
  console.log("行動: 100円投入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  //3-12　ポタージュ購入
  await t.click(potageBtn)
    .expect(allMoney.innerText).eql("投入代金: 0")
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    .expect(pPotage.exists).ok()
    .expect(change.innerText).eql("お釣り: 50");
    console.log(`3-12 ok`);
  ;
  console.log("行動: ポタージュ購入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  //3-13　お釣り取り出し
  await t.click(getChange)
    .expect(change.innerText).eql("お釣り: 0")
    console.log(`3-13 ok`);
  ;
  console.log("行動: お釣り取り出し");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  //3-14　商品取り出し
  await t.click(getProducts)
    .expect(products.hasChildElements).notOk()
    console.log(`3-14 ok`);
  ;
  console.log("行動: 商品取り出し");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 3-15はテストマトリックスでとばしてるからなし
  console.log(`3-15 テストマトリックスでとばしてしまってるからなし`);

  //3-16　行動なし
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
    console.log(`3-16 ok`);
  ;
  console.log("行動: 行動なし");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);








  // 4-17　1000円投入
  await t.click(money1000)
    .expect(allMoney.innerText).eql("投入代金: 1000")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(pokariBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
    .expect(cocoaBtn.hasClass("buttonOrange")).ok()
    console.log(`4-17 ok`);
  ;
  console.log("行動: 1000円投入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 4-18　ココア購入
  await t.click(cocoaBtn)
    .expect(allMoney.innerText).eql("投入代金: 850")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(pokariBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
    .expect(cocoaBtn.hasClass("buttonOrange")).ok()
    .expect(pCocoa.exists).ok()
    console.log(`4-18 ok`);
  ;
  console.log("行動: ココア購入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);



  // 4-19　返金
  await t.click(returnMoney)
    .expect(allMoney.innerText).eql("投入代金: 0")
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    .expect(change.innerText).eql("お釣り: 850")
    console.log(`4-19 ok`);
  ;
  console.log("行動: 返金");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);



  // 4-20　お釣り取り出し
  await t.click(getChange)
    .expect(change.innerText).eql("お釣り: 0")
    console.log(`4-20 ok`);
  ;
  console.log("行動: お釣り取り出し");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 4-21　商品取り出し
  await t.click(getProducts)
    .expect(products.hasChildElements).notOk()
    console.log(`4-21 ok`);
  ;
  console.log("行動: 商品取り出し");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 4-22　行動なし
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
    console.log(`4-22 ok`);
  ;
  console.log("行動: 行動なし");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);









  // 5-23　1000円投入
  await t.click(money1000)
    .expect(allMoney.innerText).eql("投入代金: 1000")
    .expect(teaBtn.hasClass("buttonBlue")).ok()
    .expect(pokariBtn.hasClass("buttonBlue")).ok()
    .expect(potageBtn.hasClass("buttonOrange")).ok()
    .expect(cocoaBtn.hasClass("buttonOrange")).ok()
    console.log(`5-23 ok`);
  ;
  console.log("行動: 1000円投入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 5-24　　ココア購入
  await t.click(cocoaBtn)
    .expect(allMoney.innerText).eql("投入代金: 850")
    .expect(cocoaBtn.hasClass("buttonOrange")).notOk()
    .expect(pCocoa.exists).ok()
    .expect(cocoaBtn.innerText).eql("売切")
    console.log(`5-24 ok`);
  ;
  console.log("行動: ココア購入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 5-25　ポタージュ購入
  await t.click(potageBtn)
    .expect(allMoney.innerText).eql("投入代金: 750")
    .expect(potageBtn.hasClass("buttonOrange")).notOk()
    .expect(pPotage.exists).ok()
    .expect(potageBtn.innerText).eql("売切")
    console.log(`5-25 ok`);
  ;
  console.log("行動: ポタージュ購入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 5-26　ポカリ購入
  await t.click(pokariBtn)
    .expect(allMoney.innerText).eql("投入代金: 640")
    .expect(pokariBtn.hasClass("buttonBlue")).notOk()
    .expect(pPokari.exists).ok()
    .expect(pokariBtn.innerText).eql("売切")
    console.log(`5-26 ok`);
  ;
  console.log("行動: ポカリ購入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 5-27　お茶購入
  await t.click(teaBtn)
    .expect(allMoney.innerText).eql("投入代金: 540")
    .expect(teaBtn.hasClass("buttonBlue")).notOk()
    .expect(pTea.exists).ok()
    .expect(teaBtn.innerText).eql("売切")
    console.log(`5-27 ok`);
  ;
  console.log("行動: お茶購入");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 5-28　返金
  await t.click(returnMoney)
    .expect(allMoney.innerText).eql("投入代金: 0")
    .expect(change.innerText).eql("お釣り: 540")
    console.log(`5-28 ok`);
  ;
  console.log("行動: 返金");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 5-29　お釣り取り出し
  await t.click(getChange)
    .expect(change.innerText).eql("お釣り: 0")
    console.log(`5-29 ok`);
  ;
  console.log("行動: お釣り取り出し");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 5-30　商品取り出し
  await t.click(getProducts)
    .expect(products.hasChildElements).notOk()
    console.log(`5-30 ok`);
  ;
  console.log("行動: 商品取り出し");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);




  // 5-31　行動なし
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
    console.log(`5-31 ok`);
  ;
  console.log("行動: 行動なし");
  console.log("投入代金:");
  console.log(` ${await allMoney.innerText}`);
  console.log("お茶:");
  console.log(` 在庫: ${await tea.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await teaBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await teaBtn.innerText === "売切"}`);
  console.log("ポカリ:");
  console.log(` 在庫: ${await pokari.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await pokariBtn.hasClass("buttonBlue")}`);
  console.log(` 売り切れ表示: ${await pokariBtn.innerText === "売切"}`);
  console.log("ポタージュ:");
  console.log(` 在庫: ${await potage.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await potageBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await potageBtn.innerText === "売切"}`);
  console.log("ココア:");
  console.log(` 在庫: ${await cocoa.child(".drink").child("p").nth(1).innerText}`);
  console.log(` 購入可能ランプ: ${await cocoaBtn.hasClass("buttonOrange")}`);
  console.log(` 売り切れ表示: ${await cocoaBtn.innerText === "売切"}`);
  console.log("商品取り出し口の商品の有無:");
  console.log(` お茶: ${await pTea.exists}`);
  console.log(` ポカリ: ${await pPokari.exists}`);
  console.log(` ポタージュ: ${await pPotage.exists}`);
  console.log(` ココア: ${await pCocoa.exists}`);
  console.log("お釣り:");
  console.log(` ${await change.innerText}\n\n\n`);







});
