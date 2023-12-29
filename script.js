



var siteName = document.querySelector("#sitename");
var siteUrl = document.querySelector("#SiteURL");
var btnSubmit = document.querySelector(".btn-sumbit");


var arrayList = [];

if (localStorage.getItem("websites") != null) {
  arrayList = JSON.parse(localStorage.getItem("websites"));
  displayData();
}

// Add 
function addWebsite() {

        if(  validationName() == true && validationUrl() == true) { 
        var webSite = {
        siteName: siteName.value,
        siteUrl: siteUrl.value,
    }
    arrayList.push(webSite)

    localStorage.setItem('websites', JSON.stringify(arrayList))
    displayData();

    
   
   } 
    else {
        icons.fire({
            icon: "error",
            text: "Please start Capital Character And Min 3 Numbers",
            
          });
    
   }


}

btnSubmit.addEventListener('click', function () {
    addWebsite()
})



function displayData() {

    var container = "";
    for (var i = 0; i < arrayList.length; i++) {
        
        container += `
        <tr class="">
        <td scope="row">${i}</td>
        <td>${arrayList[i].siteName}</td>
        <td><a href="${arrayList[i].siteUrl}" target="_blank"><button class="btn btn-warning"><i class="fa-solid fa-eye"></i> Visit</button></a> </td>
        <td><button class="btn btn-danger "onclick="deleteAddress(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>
        `
    }

    document.getElementById("tableBody").innerHTML = container;
}

function deleteAddress(index) {
    arrayList.splice(index, 1)
    localStorage.setItem("websites", JSON.stringify(arrayList));

    displayData()
}

var nameMessage = document.querySelector('.wrong')

// Validation
function validationName() {

    var text = siteName.value;
    var regexName = /^[A-Z][a-z]{3,10}$/

    if(  regexName.test( text )  ) {

        siteName.classList.add("is-valid")
        siteName.classList.remove("is-invalid")

        nameMessage.classList.add("d-none")
        return true

    }else { 

        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")

        nameMessage.classList.remove("d-none")
        return false
    }
}

var nameUrl = document.querySelector('.valide')

function validationUrl() {

    var text = siteUrl.value;
    var httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    if(  httpRegex.test( text )  ) { 

        siteUrl.classList.add("is-valid")
        siteUrl.classList.remove("is-invalid")

        nameUrl.classList.add("d-none")
        return true

    }else { 

        siteUrl.classList.add("is-invalid")
        siteUrl.classList.remove("is-valid")

        nameUrl.classList.remove("d-none")

        return false

    }








}