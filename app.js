console.log("App.js included");
var thi = null;
var cow = null;


firebase.database().ref('CowInfo').on('value', snapshot => {
    if(!(snapshot && snapshot.val())) return;

    const CowInfo = Object.values(snapshot.val());
    cow = CowInfo[CowInfo.length - 1];
    console.log(CowInfo);   
    document.getElementById('cname').innerHTML = cow.cowName;
    document.getElementById('cage').innerHTML = cow.age;
    if(cow.lgb>=1 || cow.lgd<=3)
    {
        let condition2 = "Early Lactation. Milk Production in Peak"
        document.getElementById('condition2').innerHTML = condition2.toString();
    }
    if(cow.lgb>3 || cow.lgd<=8)
    {
        let condition2 = "Mid Lactation Period. Milk Production Moderate."
        document.getElementById('condition2').innerHTML = condition2.toString();
    }
    if(cow.lgb>8 || cow.lgd<=13)
    {
        let condition2 = "Late Lactation. Minimal Milk Production."
        document.getElementById('condition2').innerHTML = condition2.toString();
    }
    if(cow.lgb>13|| cow.lgb<1)
    {
        let condition2 = "Dry Period!"
        document.getElementById('condition2').innerHTML = condition2.toString();
    }

    document.getElementById('clgb').innerHTML = cow.lgb;

});

firebase.database().ref('DHT').on("value", function(snapshot) {
    
    if(snapshot) {
        let DHT = snapshot.val();
        let t = DHT.Temperature;
        let h = DHT.Humidity;
        console.log(t);
        console.log(h);
        thi = (0.8*t) + ((h/100)*(t-14.4))+ 46.4 -5;
        thi = thi.toFixed(2);
        document.getElementById('thiValue').innerHTML = thi.toString();
       
        if (thi<70)
        {
            let condition = "No heat stress, milk production normal. Can milk 3 times a day at Morning, Afternoon and Evening."
            document.getElementById('condition').innerHTML = condition.toString();
        }
        else if (thi>72 || thi<=78)
        {
            let condition = "Mild heat stress, milk production Likely to be reduced by 5-10%. Milking should be done only at morning and at evening. Offer lots of water and use a cooler"
            document.getElementById('condition').innerHTML = condition.toString();
        }
        else if (thi>78 || thi<=88)
        {
            let condition = "Severe Heat Stress! Milk production rate likely to drop by more than 20%. Consult a doctor immediately to avoid serious health problems"
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
// Database Breed1 Ongole
firebase.database().ref('Ongole').once("value", snapshot => {
    if(snapshot && snapshot.val()) {

        let Ongole = snapshot.val();
        if(window.thi) console.log(thi);
        document.getElementById('ageCalv1').innerHTML = Ongole.ageCalv;
        document.getElementById('calvInter1').innerHTML = Ongole.calvInter;
        document.getElementById('lactPeriod1').innerHTML = Ongole.lactPeriod;
        document.getElementById('milkFat1').innerHTML = Ongole.milkFat;
        document.getElementById('myDay1').innerHTML = Ongole.myDay;
        document.getElementById('myLactation1').innerHTML = Ongole.myLactation
                    if (thi<70){
                        document.getElementById('myDay1').innerHTML = Ongole.myDay;
                    }
                    else if (thi>72 || thi<=75){
                        Ongole.myDay = Ongole.myDay - ((5/100)* Ongole.myDay);
                        document.getElementById('myDay1').innerHTML = Ongole.myDay;
                    }
                    else if (thi>75 || thi<=78){
                        Ongole.myDay = Ongole.myDay - ((10/100)* Ongole.myDay);
                        document.getElementById('myDay1').innerHTML = Ongole.myDay;
                    }
                    else if (thi>78 || thi<=82){
                        Ongole.myDay = Ongole.myDay - ((20/100)* Ongole.myDay);
                        document.getElementById('myDay1').innerHTML = Ongole.myDay;
                    }
                    else{
                        Ongole.myDay = 0;
                        document.getElementById('myDay1').innerHTML = Ongole.myDay;
                    }
            if(thi<=70){
                Ongole.nmpd = 3;
                document.getElementById('nmpd1').innerHTML = Ongole.nmpd;
            }
            else if((thi>70) || (thi<=75)){
                Ongole.nmpd = 2;
                document.getElementById('nmpd1').innerHTML = Ongole.nmpd;
            }
            else{
                Ongole.nmpd = 0;
                document.getElementById('nmpd1').innerHTML = Ongole.nmpd;
            }
        document.getElementById('myMonth1').innerHTML = Ongole.myMonth;
        document.getElementById('myYear1').innerHTML = Ongole.myYear;        
        document.getElementById('weight1').innerHTML = Ongole.weight;
    }
});

// Database Breed2 Gir

firebase.database().ref('Gir').once("value", snapshot => {
    if(snapshot && snapshot.val()) {

        let Gir = snapshot.val();
        if(window.thi) console.log(thi);
        document.getElementById('ageCalv2').innerHTML = Gir.ageCalv;
        document.getElementById('calvInter2').innerHTML = Gir.calvInter;
        document.getElementById('lactPeriod2').innerHTML = Gir.lactPeriod;
        document.getElementById('milkFat2').innerHTML = Gir.milkFat;
        document.getElementById('myDay2').innerHTML = Gir.myDay;
        document.getElementById('myLactation2').innerHTML = Gir.myLactation
                    if (thi<70){
                        document.getElementById('myDay2').innerHTML = Gir.myDay;
                    }
                    else if (thi>72 || thi<=75){
                        Gir.myDay = Gir.myDay - ((5/100)* Gir.myDay);
                        document.getElementById('myDay2').innerHTML = Gir.myDay;
                    }
                    else if (thi>75 || thi<=78){
                        Gir.myDay = Gir.myDay - ((10/100)* Gir.myDay);
                        document.getElementById('myDay2').innerHTML = Gir.myDay;
                    }
                    else if (thi>78 || thi<=82){
                        Gir.myDay = Gir.myDay - ((20/100)* Gir.myDay);
                        document.getElementById('myDay2').innerHTML = Gir.myDay;
                    }
                    else{
                        Gir.myDay = 0;
                        document.getElementById('myDay2').innerHTML = Gir.myDay;
                    }
            if(thi<=70){
                Gir.nmpd = 3;
                document.getElementById('nmpd2').innerHTML =Gir.nmpd;
            }
            else if((thi>70) || (thi<=75)){
                Gir.nmpd = 2;
                document.getElementById('nmpd2').innerHTML = Gir.nmpd;
            }
            else{
                Gir.nmpd = 0;
                document.getElementById('nmpd2').innerHTML = Gir.nmpd;
            }
        document.getElementById('myMonth2').innerHTML = Gir.myMonth;
        document.getElementById('myYear2').innerHTML = Gir.myYear;        
        document.getElementById('weight2').innerHTML = Gir.weight;
    }
});
// Database Breed3 Rathi
firebase.database().ref('Rathi').once("value", snapshot => {
    if(snapshot && snapshot.val()) {

        let Rathi = snapshot.val();
        if(window.thi) console.log(thi);
        document.getElementById('ageCalv3').innerHTML = Rathi.ageCalv;
        document.getElementById('calvInter3').innerHTML = Rathi.calvInter;
        document.getElementById('lactPeriod3').innerHTML = Rathi.lactPeriod;
        document.getElementById('milkFat3').innerHTML = Rathi.milkFat;
        document.getElementById('myDay3').innerHTML = Rathi.myDay;
        document.getElementById('myLactation3').innerHTML = Rathi.myLactation;
        document.getElementById('myMonth3').innerHTML = Rathi.myMonth;
        document.getElementById('myYear3').innerHTML = Rathi.myYear;
        document.getElementById('nmpd3').innerHTML = Rathi.nmpd;
        document.getElementById('weight3').innerHTML = Rathi.weight;
    }
});
// Database Breed4 RedSidhi
firebase.database().ref('RedSindhi').once("value", snapshot => {
    if(snapshot && snapshot.val()) {

        let RedSindhi = snapshot.val();
        if(window.thi) console.log(thi);
        document.getElementById('ageCalv4').innerHTML = RedSindhi.ageCalv;
        document.getElementById('calvInter4').innerHTML = RedSindhi.calvInter;
        document.getElementById('lactPeriod4').innerHTML = RedSindhi.lactPeriod;
        document.getElementById('milkFat4').innerHTML = RedSindhi.milkFat;
        document.getElementById('myDay4').innerHTML = RedSindhi.myDay;
        document.getElementById('myLactation4').innerHTML = RedSindhi.myLactation;
        document.getElementById('myMonth4').innerHTML = RedSindhi.myMonth;
        document.getElementById('myYear4').innerHTML = RedSindhi.myYear;
        document.getElementById('nmpd4').innerHTML = RedSindhi.nmpd;
        document.getElementById('weight4').innerHTML = RedSindhi.weight;
    }
});
// Database Breed5 Sahiwal
firebase.database().ref('Sahiwal').once("value", snapshot => {
    if(snapshot && snapshot.val()) {

        let Sahiwal = snapshot.val();
        if(window.thi) console.log(thi);
        document.getElementById('ageCalv5').innerHTML = Sahiwal.ageCalv;
        document.getElementById('calvInter5').innerHTML = Sahiwal.calvInter;
        document.getElementById('lactPeriod5').innerHTML = Sahiwal.lactPeriod;
        document.getElementById('milkFat5').innerHTML = Sahiwal.milkFat;
        document.getElementById('myDay5').innerHTML = Sahiwal.myDay;
        document.getElementById('myLactation5').innerHTML = Sahiwal.myLactation;
        document.getElementById('myMonth5').innerHTML = Sahiwal.myMonth;
        document.getElementById('myYear5').innerHTML = Sahiwal.myYear;
        document.getElementById('nmpd5').innerHTML = Sahiwal.nmpd;
        document.getElementById('weight5').innerHTML = Sahiwal.weight;
    }
});

/*
firebase.database().ref('Breed1').on("value", function(snapshot) {


});
*/