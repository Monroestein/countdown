function Countdown(){

    let concertDate = new Date("April 30, 2025 21:00:00").getTime();

    let x = setInterval(
        function(){
            let now = new Date().getTime();

            let distance = concertDate - now;

            let days = Math.floor(distance / (1000*60*60*24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("num-days").innerHTML = `${days}`

            document.getElementById("hours-left").innerHTML=`${hours}:${minutes}:${seconds}`

            if(distance<0){
                clearInterval(x);
            }
        }
    , 1000)

}

Countdown()