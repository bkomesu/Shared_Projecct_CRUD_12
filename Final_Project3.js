var id = 0;

var ExistingCustomersList = JSON.parse(localStorage.getItem("ExistingCustomersList"))||[];  
let createDate = new Date();
let table = document.getElementById('list');
let CustomerNameElement = document.getElementById('customer-name');
let HQElement = document.getElementById('HQ-location');
let emailElement = document.getElementById('Email');
let IDElement = document.getElementById('ID');
let PhoneNumberElement = document.getElementById('phone-number');

renderExisting(ExistingCustomersList)

document.getElementById('add').addEventListener('click', () => {



    var customerInputInfo = {
        customerID : IDElement.value,
        customerName: CustomerNameElement.value,
        customerHQLocation: HQElement.value,
        customerEmail: emailElement.value,
        customerPhoneNumber: PhoneNumberElement.value,
    }


    document.getElementById('ID').value = '';
    document.getElementById('customer-name').value = '';
    document.getElementById('HQ-location').value = '';
    document.getElementById('Email').value = ''; 
    document.getElementById('phone-number').value = '';

    ExistingCustomersList.push(customerInputInfo);
    localStorage.setItem("ExistingCustomersList", JSON.stringify(ExistingCustomersList))
    
    location.reload();
    console.log(ExistingCustomersList)
    
})


function renderExisting(ExistingCustomersList){
    for(let i = 0; i < ExistingCustomersList.length; i++){
    let row= table.insertRow(1)
    row.setAttribute('id',`customer-${id}`);
    row.insertCell(0).innerHTML = `Customer-${ExistingCustomersList[`${id}`].customerID}`;
    row.insertCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`;
    row.insertCell(2).innerHTML = ExistingCustomersList[`${id}`].customerName;
    row.insertCell(3).innerHTML = ExistingCustomersList[`${id}`].customerHQLocation;
    row.insertCell(4).innerHTML = ExistingCustomersList[`${id}`].customerEmail;
    row.insertCell(5).innerHTML = ExistingCustomersList[`${id}`].customerPhoneNumber;
    
    let actions = row.insertCell(6);
    actions.appendChild(createDeleteButton(id++));
        }
}

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML= 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id : customer-${id}`);
        let elementToDelete = document.getElementById(`customer-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
        ExistingCustomersList.splice([id],1)
         localStorage.setItem("ExistingCustomersList", JSON.stringify(ExistingCustomersList))
        console.log(ExistingCustomersList);
        id--
        

};
    return btn;

}
