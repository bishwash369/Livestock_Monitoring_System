console.log("App.js included");

firebase.database().ref('DHT').on("value", function(snapshot) {
    
    if(snapshot) {
        let DHT = snapshot.val();
        let t = DHT.Temperature;
        let h = DHT.Humidity;
        console.log(t);
        console.log(h);
        let thi = (0.8*t) + ((h/100)*(t-14.4))+ 46.4-5;
        thi = thi.toFixed(2);
        document.getElementById('thiValue').innerHTML = thi.toString();
       
        if (thi<70)
        {
            let condition = "No heat stress, milk production normal. Can milk 3 times a day in Morning, Afternoon and Evening."
            document.getElementById('condition').innerHTML = condition.toString();
        }
        else if (thi>72 || thi<=78)
        {
            let condition = "Mild heat stress, milk production Likely to be reduced by 5-10%. Milking should be done only at morning and at evening. Offer lots of water and use a cooler"
            document.getElementById('condition').innerHTML = condition.toString();
        }
        else if (thi>78 || thi<=88)
        {
            let condition = "Severe heat stress. Cattle in no condition to produce Milk. Consult a doctor immediately to avoid serious health problems"
            document.getElementById('condition').innerHTML = condition.toString();
        }
        else if (thi>88)
        {
            let condition = "Cattle can die at any moment due to heat stroke! "
            document.getElementById('condition').innerHTML = condition.toString();
        }
        else
        {
            let condition = "No heat stress, milk production normal. Can milk 3 times a day in Morning, Afternoon and Evening."
            document.getElementById('condition').innerHTML = condition.toString();
        }


    }
});

firebase.database().ref('Ongole').once("value", snapshot => {
    if(snapshot && snapshot.val()) {

        let Ongole = snapshot.val();
        
        
        document.getElementById('ageCalv').innerHTML = Ongole.ageCalv;
        document.getElementById('calvInter').innerHTML = Ongole.calvInter;
        document.getElementById('lactPeriod').innerHTML = Ongole.lactPeriod;
        document.getElementById('milkFat').innerHTML = Ongole.milkFat;
        document.getElementById('myDay').innerHTML = Ongole.myDay;
        document.getElementById('myLactation').innerHTML = Ongole.myLactation;
        document.getElementById('myMonth').innerHTML = Ongole.myMonth;
        document.getElementById('myYear').innerHTML = Ongole.myYear;
        document.getElementById('nmpd').innerHTML = Ongole.nmpd;
        document.getElementById('weight').innerHTML = Ongole.weight;
    }
});

/*
firebase.database().ref('Breed1').on("value", function(snapshot) {


}
*/
