const options1 = document.querySelectorAll('.answer1'),
    options2 = document.querySelectorAll('.answer2'),
    options3 = document.querySelectorAll('.answer3'),
    options4 = document.querySelectorAll('.answer4'),
    generateButton = document.querySelector('button');
    
generateButton.addEventListener('click', generate)



function generate(){
    const names = ['a', 'brad', 'c', 'd', 'eden', 'f', 'gutes', 'h', 'i', 'j'], nameDOM = document.querySelector('#yourName');
    let answer1,
    answer2,
    answer3,
    answer4,
    total, givenName;

    options1.forEach(answer => {
        if(answer.checked) answer1 = Number(answer.value)
    })
    options2.forEach(answer => {
        if(answer.checked) answer2 = Number(answer.value)
    })
    options3.forEach(answer => {
        if(answer.checked) answer3 = Number(answer.value)
    })
    options4.forEach(answer => {
        if(answer.checked) answer4 = Number(answer.value)
    })
    total = answer1 + answer2 + answer3 + answer4
    switch(total){
        case 0:
        case 1: givenName = names[0]
        break
        case 2: givenName = names[1]
        break
        case 3: givenName = names[2]
        break
        case 4: givenName = names[3]
        break
        case 5:
        case 6: givenName = names[4]
        break
        case 7: givenName = names[5]
        break
        case 8: givenName = names[6]
        break
        case 9: givenName = names[7]
        break
        case 10: givenName = names[8]
        break
        case 11: 
        case 12: givenName = names[9]
        break
    }
    nameDOM.innerText = givenName
}



