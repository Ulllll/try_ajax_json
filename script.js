function ajaxGet(url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.send()
    xhr.onload = function() {
        if(xhr.status !== 200) {
            return console.error(' Status ' + xhr.status)
        }
        var doc = JSON.parse(xhr.responseText)
        callback(doc)
    }
}

var user1 = {
    name : 'Ivan',
    surname : 'Ivanov',
    email : 'example@example.ru'
}

var data = JSON.stringify(user1)

console.log(data)

var dImg = document.getElementById('img1')

dImg.onclick = function() {
    ajaxGet('https://dog.ceo/api/breeds/image/random', function(doc) {
        dImg.src = doc.message
        }
)
}

var dText = document.getElementById('text1')
ajaxGet('https://baconipsum.com/api/?callback=?', function(doc) {   
    dText.innerHTML = doc
        }
)

ajaxGet('https://randomuser.me/api/', function(doc) {
        console.log(doc)
        }
)


