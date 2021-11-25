const ajaxService = (term) => {
    const url = "https:api.postit.lt/?term=";
    const key = "5cpHflNAbGZDsQD43rG9";
    return fetch(`${url}${term}&key=${key}`)
        .then(response => response.json())
}

export  default ajaxService;