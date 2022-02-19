var NumberOfWords = 5
var words = new BuildArray(NumberOfWords)

words[1] = "Hello!"
words[2] = "Hej!"
words[3] = "Kumusta!"
words[4] = "こんにちは!"
words[5] = "Bonjour!"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}
function PickRandomWord(frm) {
var rnd = Math.ceil(Math.random() * NumberOfWords)
frm.WordBox.value = words[rnd]
}

