/*function keyPress() {
            let elem = document.getElementsByName("numb");
            let val = elem.value;
            let s = document.getElementsByClassName("dc");
            s.innerText = val;
            if (val <1 && val >31){
                elem.value = "";
            }
        }*/



    function myFunc() {
        let s = document.getElementById("header");


            s.classList.toggle('responsive');

        console.log(s.className);
    }

    // console.log(document.getElementById("line").className);
