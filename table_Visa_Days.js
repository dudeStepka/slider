 clickNumber = 0;

 function showMenu() {
     clickNumber++;
     if (clickNumber % 2 != 0)
         document.querySelector("nav").style.display = "block";
     else if (clickNumber % 2 == 0) document.querySelector("nav").style.display = 'none';

     console.log(clickNumber);
 }

 document.body.children[0].children[0].onclick = function() {
     location.href = "index.html";
 };

 function SelectedVisa() {
     let newArr = document.forms[0].VisaType;
     // console.log(newArr);

     for (let i = 0; i < newArr.length; i++) {
         if (document.forms[0].VisaType[i].checked)
             return i;
     }
 }

 function AddNewForm() {
     console.log(SelectedVisa());

     getNumberOfDays();
     // console.log(document.forms[0].VisaType.selectedIndex);

     switch (SelectedVisa()) {
         case 0:
             document.forms[1].ZK.value = +document.forms[1].Result.value;
             break;
         case 1:
             document.forms[1].SV.value = +document.forms[1].Result.value;
             break;
         case 2:
             document.forms[1].SP.value = +document.forms[1].Result.value;
             break;
         case 3:
             document.forms[1].ST.value = +document.forms[1].Result.value;
             break;
         case 4:
             document.forms[1].OS.value = +document.forms[1].Result.value;
             break;
     }
     totalSum();
     // currentResult += +document.forms[0].Result.value;
     // // alert(currentResult);
     // document.forms[0].Result.value = currentResult;
     document.forms[0].reset();
 }


 function getNumberOfDays() {

     start = document.forms[0].date1.value;
     end = document.forms[0].date2.value;
     visaType = document.querySelectorAll(".VT");
     visaType.forEach(element => {
         console.log(element.checked);
     });
     const date1 = new Date(start);
     const date2 = new Date(end);
     console.log(date1);
     console.log(date2);
     // One day in milliseconds 
     const oneDay = 1000 * 60 * 60 * 24;
     // Calculating the time difference between two dates 
     const diffInTime = date2.getTime() - date1.getTime();
     // Calculating the no. of days between two dates 
     const diffInDays = Math.round(diffInTime / oneDay);
     let result = -1;
     let numberOfYears;
     for (let i = 0; i < visaType.length; i++) {
         if (visaType[i].checked == true) result = i;
         switch (result) {
             case 0:
                 numberOfYears = (diffInDays * 1) / 365;
                 break;
             case 1:
                 numberOfYears = (diffInDays * 0.5) / 365;
                 break;
             case 2:
                 numberOfYears = (diffInDays * 1) / 365;
                 break;
             case 3:
                 numberOfYears = (diffInDays * 1) / 365;
                 break;
             case 4:
                 numberOfYears = (diffInDays * 1) / 365;
                 break;
         }
     }
     // alert(numberOfYears);
     if (numberOfYears > 0) document.forms[1].Result.value = (Math.round(numberOfYears * 100) / 100);


 }

 function totalSum() {
     let res = 0;
     res += +document.forms[1].ZK.value;
     res += +document.forms[1].SV.value;
     res += +document.forms[1].SP.value;
     res += +document.forms[1].ST.value;
     res += +document.forms[1].OS.value;
     document.forms[1].Result.value = res.toFixed(2);
     console.log(res);
     Color(res);
 }

 function clearAll() {
     document.forms[1].reset();
     document.forms[0].reset();
     document.forms[1].Result.style.backgroundColor = "transparent";

 }

 function Color(x) {
     switch (true) {
         case x < 5:
             document.forms[1].Result.style.backgroundColor = "pink";
             break;
         case ((x >= 5) && (x < 10)):
             document.forms[1].Result.style.backgroundColor = "springgreen";
             break;
         case x >= 10:
             document.forms[1].Result.style.backgroundColor = "MediumAquamarine";
             alert("Congratulations! You can request Czech citizenship!")
             break;
     }
 }
 // console.log(getNumberOfDays("1/9/2017", "1/9/2022", 'ZM'));