const textList = [
    "E-Commerce Specialist",
    "Amazon Expert",
    "Shopify Developer",
    "Digital Marketer",
    "Graphic Designer",
    "AI Content Creator"
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

    if(charIndex < textList[textIndex].length){

        typing.textContent += textList[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,80);

    }else{

        setTimeout(deleteEffect,1500);

    }

}

function deleteEffect(){

    if(charIndex>0){

        typing.textContent=textList[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,40);

    }else{

        textIndex++;

        if(textIndex>=textList.length){

            textIndex=0;

        }

        setTimeout(typeEffect,300);

    }

}

typeEffect();