const amount = 600000;

const month = 11;

const fee = "shijirbaatar".length * 2;

let account = 0;

function savingCalculator(year) {
  for (let j = 0; j < year; j++) {
    for (let i = 1; i <= month; i++) {
      account += amount;
    }
    account += (account / 100) * fee;
  }
  return account.toFixed(0);
}

const arr = [20000, 10000, 5000, 1000, 100, 50, 20, 10];

const balance = savingCalculator(1);

function refundMoney(balance) {
  let onHand = "";

  console.log(`Таны дансанд нийт ${balance} төгрөгийн үлдэгдэл байна.`);

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] <= balance) {
      onHand += `${arr[i]} төгрөгийн дэвсгэрт - ${parseInt(
        balance / arr[i]
      )} ш \n`;
      balance = balance % arr[i];
    }
  }

  console.log(
    `Хэрэв та дансан дахь мөнгөө авахыг хүсвэл таны гар дээр \n${onHand}тус тус ирнэ.`
  );
}

refundMoney(balance);
