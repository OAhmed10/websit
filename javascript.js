const db = firebase.firestore()

function getProducts() {

    document.querySelector("#courses").innerHTML = ""
    db.collection('card').get()
        .then(cards => {
            cards.forEach(card => {
                const carddata = card.data()
                console.log(carddata)

                const productElement = `
                <div class="card col-3 mx-3 mt-5" style="width: 18rem; text-align:center;" >
                <img src="${carddata.imge}" class="card-img-top" style="height: 200px;"  alt="...">
                <div class="card-body">
                    <h5 class="card-title">${carddata.title}</h5>
                    <p class="card-text">${carddata.description}</p>
                    <p class="card-text"><b>${carddata.price}</p></b>
                    <!-- <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open
                        Modal</button> -->
    
                    <!-- Modal -->
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        join
                    </button>
    
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">join us</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                            <form>
                                            <div class="mb-3">
                                            <label for="exampleInputName" class="form-label"> full name</label>
                                            <input type="text" class="form-control" id="name">
                                            
                                            </div>
                                            <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Phone number</label>
                                            <input type="text" class="form-control" id="exampleInputPassword1">
                                            
                                            </div>
                                            <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1">
                                             </div>
                                             <div class="mb-3">
                                            <label for="exampleInputvisa" class="form-label">Visa</label>
                                            <input type="text" class="form-control" id="exampleInputvisa">
                                            
                                            </div>

                                            <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                            <label class="form-check-label" for="exampleCheck1">confierm</label>
                                            </div>
                                           
                                        </form>
                              
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary add-btn " onclick="adduser()"  data-bs-dismiss="modal">submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            `
                document.querySelector("#courses").innerHTML += productElement
            })
        })


}
getProducts()

function adduser() {
    console.log("click")
    const firstname = document.querySelector("#name").value
    const PhoneNumber = document.querySelector("#exampleInputPassword1").value
    const EmailAddress = document.querySelector("#exampleInputEmail1").value
    const Visa = document.querySelector("#exampleInputvisa").value

    db.collection('users').add({
        firstname: firstname,
        PhoneNumber: PhoneNumber,
        EmailAddress: EmailAddress,
        Visa: Visa,
    })
        .then((newProduct) => {
            console.log("Document written with ID: ", newProduct.id);
            document.querySelector("#exampleModal").hide()
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

}








