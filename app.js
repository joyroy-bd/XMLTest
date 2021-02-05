let jsonData;

function setup() {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = (datas)=> {
        if (xhr.readyState == 4) {
            let datas = JSON.parse(xhr.responseText)
            p.innerHTML = JSON.stringify(datas);
            setTable(datas)
            jsonData = datas
        }
    }
    xhr.open('get',
        'data.json',
        false)
    xhr.send()
}

var p = document.getElementById('ptag')

function search(value) {
    let result = []
    let totalAmount = 0;
    let detail = {
        totalAmount,
        times: result.length
    }
    jsonData.forEach(data=> {
        if (data.phone == value) {
            result.push(data)
        }
    })
    if (result.length > 0) {
        for (let data of result) {
            totalAmount = totalAmount+parseInt(data.amount)
        }
    }

    p.innerHTML = `${JSON.stringify(result)}<br/><br/><h2>Number : ${result.length}</h2><br/><h2>Total : ${totalAmount}</h2>`;
}



function setTable(data) {
    for (var i = 0; i < data.length; i++) {

        let table = document.getElementById('tbody')
        let row = table.insertRow(0)
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        cell1.innerHTML = `${data[i].date}`
        cell2.innerHTML = `${data[i].phone}`
        cell3.innerHTML = `${data[i].amount}`

    }
}




console.log(document.getElementById('tbody'));