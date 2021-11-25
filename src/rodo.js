
const rodo = () => {

    let arr = [];
    arr = JSON.parse(localStorage.getItem('dataArr'));
    //console.log(arr)
    for(let i of arr){
        const p = document.createElement('p');
        p.textContent = i;
        console.log("****" + i)
        document.querySelector('.storage').appendChild(p)
    }
}

export default rodo