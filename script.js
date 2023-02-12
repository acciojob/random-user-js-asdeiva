//GET data from API using fetch..

const url = "https://randomuser.me/api/";

let info = document.getElementById('useradinfo')

let getData = (url)=>{ fetch(url, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.results);
    var userinfo = data.results[0];
    displaydata(userinfo);
  })
  .catch((error) => {
    console.log(error);
  });

let displaydata = (data) =>{
    // console.log(data);
    let usrImg = document.getElementById('usrImg')
    let usrName = document.getElementById('usrName')
    usrImg.innerHTML = `<img src="${data.picture.large}" alt="userimage">`
    usrName.innerHTML = `${data.name.first} ${data.name.last}`
}
}
function disAge (data) {
    getData(url)
    console.log();
    info.innerHTML = `${data.dob.age}`

}
function disEmail () {   
    getData(url) 
    info.innerHTML =  `${userinfo.email}`
}

function disPhone (){    
    getData(url)
    info.innerHTML =  `${userinfo.phone}`
}
getData(url)

let genUser = () =>{
    getData(url)
}


//   {
//     "gender": "female",
//     "name": {
//         "title": "Ms",
//         "first": "Solène",
//         "last": "Dumas"
//     },
//     "location": {
//         "street": {
//             "number": 4512,
//             "name": "Rue de la Gare"
//         },
//         "city": "Aubervilliers",
//         "state": "Cantal",
//         "country": "France",
//         "postcode": 95563,
//         "coordinates": {
//             "latitude": "-19.3385",
//             "longitude": "31.5439"
//         },
//         "timezone": {
//             "offset": "+5:45",
//             "description": "Kathmandu"
//         }
//     },
//     "email": "solene.dumas@example.com",
//     "login": {
//         "uuid": "e3cb7a12-fd3c-4459-a37b-7fa60ea0df3b",
//         "username": "silverladybug955",
//         "password": "hookem",
//         "salt": "ZmUruK6o",
//         "md5": "1ea96655e2d9c7ba2d37814fa8e0068a",
//         "sha1": "16afd96c5f1f71bca591bf0f9c28bed974fdd89f",
//         "sha256": "4c1da275e360e7112c481c01024067a9308eacbc04531771ced15823707553d8"
//     },
//     "dob": {
//         "date": "1980-07-16T13:13:37.900Z",
//         "age": 42
//     },
//     "registered": {
//         "date": "2010-04-17T22:50:01.426Z",
//         "age": 12
//     },
//     "phone": "05-60-89-27-44",
//     "cell": "06-92-62-58-76",
//     "id": {
//         "name": "INSEE",
//         "value": "2800650087782 64"
//     },
//     "picture": {
//         "large": "https://randomuser.me/api/portraits/women/3.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
//     },
//     "nat": "FR"
// }