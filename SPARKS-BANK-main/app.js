const url = "https://bankist69.herokuapp.com";

let my_Balance = parseInt(document.getElementById("my_Balance").innerText);

function perform_transaction() {
  var enterName = document.getElementById("enterName").value;
  var enterAmount = parseInt(document.getElementById("enterAmount").value);

  if (enterAmount > my_Balance) {
    alert("Insufficient Balance.");
  } else {
    fetch(`${url}/transfer`, {
      method: "POST",
      body: JSON.stringify({
        email: `${enterName}@gmail.com`,
        balance: enterAmount,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        update();
        alert(` Transaction Successful !!  
      ₹ ${enterAmount} is successfully transferred  to ${enterName}@gmail.com.`);
        // transaction history
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(
          `₹ ${enterAmount} is transferred to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`
        );
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
      })
      .catch();
  }
}
function update() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      var table = document.getElementById("ram");
      table.innerHTML = `<thead>
                <tr class="table-danger">
                    <th scope="col"> No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Bank Balance(in ₹)</th>
                </tr>
            </thead>`;
      // Rows 
      for (var i = 0; i < res.length; i++) {
        tr = table.insertRow(-1);
        let cname = i % 2 ? "table-info" : "table-light";
        tr.classList.add(cname);
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = i + 1;
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = res[i].name;
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = res[i].email;
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = `<p id="${res[i]}">${res[i].balance}</p>`;
      }
    })
    .catch();
  fetch(`${url}/me`)
    .then((res) => res.json())
    .then((res) => {
      document.getElementById("my_Balance").innerHTML = res.balance;
    })
    .catch();
}

update();
