
function encrypt (){
    let text = document.getElementById('txtAreaInput').value;
    let textEncrypt;
    let arrText = [];

    for (let i=0; i<=text.length; i++){
        arrText[i] = text.charAt(i);
        if(arrText[i] == "a"){
            arrText[i] = "ai";
        }else if(arrText[i] == "e"){
            arrText[i] = "enter";
        }else if(arrText[i] == "i"){
            arrText[i] = "imes";
        }else if(arrText[i] == "o"){
            arrText[i] = "ober";
        }else if(arrText[i] == "u"){
            arrText[i] = "ufat";
        } 
    }
    textEncrypt = arrText.toString().replaceAll(",","");
    document.getElementById('txtAreaOutput').value = textEncrypt;
    document.getElementById('txtAreaInput').value = "";
}

function decrypt (){
    let text = document.getElementById('txtAreaInput').value;
    let textDecrypt;

    textDecrypt = text.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    document.getElementById('txtAreaOutput').value = textDecrypt;
    document.getElementById('txtAreaInput').value = "";
}

function copy(){
    navigator.clipboard.writeText(document.getElementById('txtAreaOutput').value);
}