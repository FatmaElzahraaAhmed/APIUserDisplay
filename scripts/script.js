let users=[];
async function getData(){
    let response =await fetch(`https://dummyjson.com/users`);
    let finalResult=await response.json();
    users=finalResult.users;
    displayUsers();
}

function displayUsers(){
    let cartoona=``;
    for(let i=0 ; i<users.length; i++){
        cartoona+=`  <div class="col-md-3">
        <div class="user d-flex flex-column justify-content-between align-items-center">
          <img src="${users[i].image}" alt="" class="w-50" />
          <h5>Email: <br><a href='mailto:${users[i].email}'>${users[i].email}</a></h5>
          <p></p>
        </div>
      </div>`
    }
    document.getElementById('rowData').innerHTML=cartoona;
}

getData(); 