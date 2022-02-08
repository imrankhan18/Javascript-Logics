function weight() {
    var weight = document.getElementById("weight").value;
    var age = document.getElementById("age").value;
    n = document.getElementById("name").value;
    check(weight, age, n)
}
function check(weight, age, n) {
    // alert("hey")
        if (age == "") {
            dis = "please enter some value:"
            display(dis)
        } 
        else if (age >= 5 && age <= 7) {
            if (weight >= 15 && weight <= 20) {
            }
            else if(weight < 15){
                dis="Hello " +n+ " your weight is less than recommended value of " +weight+ " KG at an age of " +age+".";
                display(dis)
            }
            else if(weight>20){
                dis="Hello " +n+ " your weight is over than recommended value of " +weight+ " KG at an age of " +age+".";
                display(dis)

            }
        }
        else if (age >= 8 && age <= 10) {
            if (weight >= 25 && weight <=30) {
                dis = "Hello " + n + " !!! Your weight is perfect."
                display(dis)
            }
            else if(weight < 25){
                dis="Hello " +n+ " your weight is less than recommended value of " +weight+ " KG at an age of " +age+".";
                display(dis)
            }
            else if(weight > 30){
                dis="Hello " +n+ " your weight is over than recommended value of " +weight+ " KG at an age of " +age+".";
                display(dis)

            }
        }
        else if (age >= 11 && age <= 15) {
            if (weight >= 30 && weight <=30) {
                dis = "Hello " + n + " !!! Your weight is perfect."
                display(dis)
            }
            else if(weight < 30){
                dis="Hello " +n+ " your weight is less than recommended value of " +weight+ " KG at an age of " +age+".";
                display(dis)
            }
            else if(weight>30){
                dis="Hello " +n+ " your weight is over than recommended value of " +weight+ " KG at an age of " +age+".";
                display(dis)

            }
        }
        else if (age >= 16 && age <= 20) {
            if (weight >= 31 && weight <32) {
                dis = "Hello " + n + " !!! Your weight is perfect."
                display(dis)
            }
                else if(weight < 31){
                    dis="Hello " +n+ " your weight is less than recommended value of " +weight+ " KG at an age of " +age+".";
                    display(dis)
                }
                else if(weight>31){
                    dis="Hello " +n+ " your weight is over than recommended value of " +weight+ " KG at an age of " +age+".";
                    display(dis)
    
     }
   }          
 }

function display(dis) {
        document.getElementById("result").innerHTML = dis;
}

