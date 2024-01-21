window.onload = async() => {
    try
    {var a = await fetch('https://65ad50e7adbd5aa31be09007.mockapi.io/api') 
    var b = await a.json()
    let tableBody = document.querySelector("#data-table tbody");
    b.forEach(item => {
                let row = document.createElement("tr");
                row.innerHTML = `<td>${item.createdAt}</td><td>${item.name}</td>
                                <td><img src="${item.avatar}" alt="Avatar" width="50" height="50"></td>
                                <td>${item.id}</td>
                                <td><button onclick="editData(${item.id})" class="btn btn-primary">Edit</button></td>
                                <td><button onclick="deleteData(${item.id})" class="btn btn-danger">Delete</button></td>`;
                tableBody.appendChild(row);
        })
    }
    catch(er){
        console.log(er)
    }
};

// async function editData(id) {
//     const newName = prompt("Enter new name");
//     if (newName === null || newName === "") {
//         console.log("User cancelled the prompt or entered empty value");
//         return;
//     }

//     const putData = {
//         name: newName
//     };

//     try
//     {    var x = await fetch(`https://65ad50e7adbd5aa31be09007.mockapi.io/api/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(putData)
//     })

//     var y = await x.json()
//     location.reload(); 
//     }
//     catch(er){
//         console.log(er)
//     }
// }

// async function deleteData(id) {
//     let confirmation = confirm("Are you sure you want to delete this record?");
//     try
//     {    if (confirmation) {
//             var m = fetch(`https://65ad50e7adbd5aa31be09007.mockapi.io/api/${id}`, {
//                 method: 'DELETE',
//             })
//             var n = await m.text()
//             location.reload();
//         } else {
//             console.log("User cancelled the delete operation");
//         }
        
//     }
//     catch(er){
//         console.log(er)
//     }
// }

async function editData(id) {
    window.currentId = id; 
    $("#userName").val("");
    $("#inputModal").modal('show');
}

async function deleteData(id) {
    let confirmation = confirm("Are you sure you want to delete this record?");
    try
    {    
        if (confirmation) {
            var m = fetch(`https://65ad50e7adbd5aa31be09007.mockapi.io/api/${id}`, { method: 'DELETE' });
            var n = await m.text();
            location.reload();
        } 
        else {
            console.log("User cancelled the delete operation");
        }   
    }
    catch(er){
        console.log(er)
    }
}

document.getElementById('add-user').addEventListener('click', function() {
    window.currentId = null; 
    $("#userName").val("");
    $("#inputModal").modal('show');
});


async function modifyData() {
    const newName = document.querySelector("#userName").value;
    if (!newName && newName !== "") {
        alert("You must set a name!");
        return;
    }

    const userData = {
        name: newName
    };

    try
    {    
        var t = await fetch(`https://65ad50e7adbd5aa31be09007.mockapi.io/api` + (window.currentId ? "/" + window.currentId : ""), {
            method: window.currentId ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        $("#inputModal").modal('hide');
        location.reload();
    }
    catch(er) {
        console.log(er);
    }
}

// document.getElementById('add-user').addEventListener('click', addUser);

// async function addUser() {
//     const newName = prompt("Enter new user name");
//     if (newName === null || newName === "") {
//         console.log("User cancelled the prompt or entered empty value");
//         return;
//     }

//     const postData = {
//         name: newName
//     };

//     try
//     {    
//         var t = await fetch(`https://65ad50e7adbd5aa31be09007.mockapi.io/api`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(postData)
//     })
//     var q = t.json()
//     location.reload(); 
//     }
//     catch(er) {
//         console.log(er)
//     }
// }

function getName() {
    var name = document.getElementById("nameInput").value;
    alert('Hello ' + name);
    $('#inputModal').modal('hide');
  }