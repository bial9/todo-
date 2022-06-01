function getAndupdate() {
    console.log("hello");
    var title = document.getElementById("title").value
    var description = document.getElementById("description").value
    if (localStorage.getItem("itemJson") == null) {
        var itemArray = []
        itemArray.push([title, description])
        localStorage.setItem("itemJson", JSON.stringify(itemArray))
    }
    else {
        var arraystr = localStorage.getItem("itemJson")
        var itemArray = JSON.parse(arraystr)
        itemArray.push([title, description])
        localStorage.setItem("itemJson", JSON.stringify(itemArray))

    }
    update()
}
function update() {
    if (localStorage.getItem("itemJson") == null) {
        var itemArray = []
        localStorage.setItem("itemJson", JSON.stringify(itemArray))
    }
    else {
        var arraystr = localStorage.getItem("itemJson")
        var itemArray = JSON.parse(arraystr)
    }

    var tableBody = document.getElementById("tableBody")
    var str = ""
    itemArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-sm btn-dark" onclick="deleted(${index})">Delete</button></td> 
      </tr>`
    });
    tableBody.innerHTML = str
}
var add = document.getElementById("add")
add.addEventListener("click", getAndupdate)
update()
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    arraystr = localStorage.getItem('itemJson')
    itemArray = JSON.parse(arraystr);
    itemArray.splice(itemIndex, 1);
    localStorage.setItem('itemJson', JSON.stringify(itemArray));
    update()

}
function clearStorage() {
    if (confirm("Do you areally want to clear?")) {
        console.log('Clearing the storage')
        localStorage.clear();
        update()
    }
}
