
const clear = () => {
    document.querySelector('.btn2').addEventListener('click', () => {
        localStorage.removeItem('dataArr');
    })
}

export default clear;