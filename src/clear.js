
const clear = () => {
    document.querySelector('.btn2').addEventListener('click', () => {
        document.querySelector('.term').value = "";
        localStorage.removeItem('dataArr');
        console.log("localStoraguikas " + localStorage.getItem('dataArr'));

    })
}

export default clear;