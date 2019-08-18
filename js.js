const keywords = document.querySelector("#keywords > textarea");
const cityState = document.querySelector("#cityState > input");
const websiteName = document.querySelector("#websiteName > input");
const main_div = document.querySelector("#main");

//const out1 = document.querySelector("#out1");
//const out2 = document.querySelector("#out2");
//const out3 = document.querySelector("#out3");

const button = document.querySelector("button");

var keyword = []

function getKeyword(kw){
    arr = kw.split("|")
    keyword = arr
}

function removeComma(cs){
    filtered = [];
    arr = cs.split("")
    arr.filter(function (item){
        if(item !== ","){
            filtered.push(item)
        }
    })
    return filtered.join('')
}

function link(kw, cs){
    removedComma = this.removeComma(cs)
    arrkw = kw.toLowerCase().split(" ").join("-")
    arrcs = removedComma.toLowerCase().split(" ").join("-")
    return arrkw + "-" +arrcs
}

var keyIndex = 1;

function elements(keyw){

    // creating elements
    const div_name = document.createElement('div');
    const div_sec = document.createElement('div')
    const div_out1 = document.createElement('input')
    const div_out2 = document.createElement('input')
    const div_out3 = document.createElement('input')

    // add content
    div_name.textContent = "KW" + keyIndex;
    keyIndex++;
    div_out1.value = keyw + " | " + removeComma(cityState.value) + " | " + websiteName.value;
    div_out2.value = keyw + " in " +  cityState.value;
    div_out3.value = link(keyw, cityState.value);

    // add classes and attributes
    div_sec.classList.add('section')
    div_name.classList.add('name')
    div_out1.classList.add('output')
    div_out2.classList.add('output')
    div_out3.classList.add('output')

    div_out1.setAttribute('disabled', '')
    div_out2.setAttribute('disabled', '')
    div_out3.setAttribute('disabled', '')

    div_out1.setAttribute('type', 'text')
    div_out2.setAttribute('type', 'text')
    div_out3.setAttribute('type', 'text')
    

    // append to DOM
    div_sec.appendChild(div_name)
    div_sec.appendChild(div_out1)
    div_sec.appendChild(div_out2)
    div_sec.appendChild(div_out3)
    main_div.appendChild(div_sec)
}



button.addEventListener('click', function(){

    getKeyword(keywords.value)

    for(var item of keyword){
        elements(item)
    }
    
    
    //out1.value = keywords.value + " | " + removeComma(cityState.value) + " | " + websiteName.value;
    //out2.value = keywords.value + " in " +  cityState.value;
    //out3.value = link(keywords.value, cityState.value);
})

