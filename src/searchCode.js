import ajaxService from "./ajaxService";
import saveData from "./saveData";
import rodo from "./rodo";

const searchCode = () => {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxService(searchTerm)
            .then(result=>searchResponse = result)
            .then(() => console.log(searchResponse.data[0]))
            .then(() => {
                if(searchResponse.total === 1){
                    document.querySelector('.result').value = searchResponse.data[0].post_code;
                    saveData(searchResponse.data[0].post_code);
                    rodo();

                }else {
                    document.querySelector('main').innerHTML = "<p>Paieska nesekminga</p>"
                }
            })
    })
}

export default searchCode;