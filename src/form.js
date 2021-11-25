const form = ()=> {
    return `
    <div class="row g-3">
        <div class="col">
            <input type="text" class="form-control term" placeholder="Iveskite adresa" aria-label="Adresas">
        </div>
        <div class="col">
            <input type="text" class="form-control result" aria-label="Adresas" readonly>
        </div>
        <button type="submit" class="btn btn-primary mb-2" >Ieskoti</button>
        <button type="submit" class="btn2 btn btn-primary mb-2">Istrinti</button>
        <div class="col info">
            <div class="storage"></div>
        </div>
    </div>`
}

export default form;