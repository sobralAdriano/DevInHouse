const result= document.querySelector('.result');

const checkSeason = (day,month) =>{


}

window.onload = function(){
    const date = new Date();
    const day = date.getdate();
    const month = date.getMonth();
    checkSeason(day,month);

}
