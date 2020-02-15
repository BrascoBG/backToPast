function backPast([arg1,arg2]){
    let money = Number(arg1);
    let yearToLive = Number(arg2);
    let yearsLife = 18;
    let moneySpent = 0;

    for (let i = 1800; i <= yearToLive; i++){
        if(i % 2 == 0){
            moneySpent += 12000;
        } else{
            moneySpent += 12000 + yearsLife * 50;
        }
        yearsLife++;
    }

    if(money > moneySpent){
        console.log("Yes. He will live a carefree life and will have " + (money - moneySpent).toFixed(2) + " dollars left.");
    }else if(money < moneySpent){
        console.log("No. He will need " + (moneySpent - money).toFixed(2) + " dollars to survive.");
    }    
}
backPast([100000.15,1808]);
