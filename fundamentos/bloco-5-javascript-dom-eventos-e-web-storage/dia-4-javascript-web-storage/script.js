window.onload = function() {
    
    let keyBackColor = localStorage.getItem("backgroundColor");
    /* let backgroundColor = localStorage.getItem("backgroundColor") */
    if (keyBackColor) {/* setBackgroundColor(backgroundColor) */
let bodyBack = document.querySelector('body');
bodyBack.style.backgroundColor = keyBackColor; }
    
    
    botaoCorFundo();
    botaoCorTexto();
    buttonFontSize();
    buttonLineHeigth();
    buttonFontFamily();




function botaoCorFundo() {
    let bot = document.createElement('button');
    let mae = document.querySelector('body');
    bot.className = 'botão cor fundo';
    bot.innerHTML = 'mude a cor do fundo';
    let newColor = 'blue';
    let originColor = 'white';

    mae.appendChild(bot);

    bot.addEventListener('click', function(){
        if (mae.style.backgroundColor === originColor) {
        mae.style.backgroundColor = newColor;
        localStorage.setItem('backgroundColor', 'newColor');
        } else {
            mae.style.backgroundColor = originColor;
            localStorage.setItem('backgroundColor', 'originColor');
        }
    });
}
/* botaoCorFundo(); */

function botaoCorTexto() {
    let bot = document.createElement('button');
    let mae = document.querySelector('body');
    bot.className = 'botão cor do texto';
    bot.innerHTML = 'mude a cor do texto';
    let newColor = 'red';
    let originColor = 'black';

    mae.appendChild(bot);

    bot.addEventListener('click', function(){
        if (mae.style.color === originColor) {
        mae.style.color = newColor;
        } else {
            mae.style.color = originColor;
        }
    });
}
/* botaoCorTexto(); */

function buttonFontSize() {
    let bot = document.createElement('button');
    let mae = document.querySelector('body');
    let tagDiv = document.querySelector('div');
    bot.className = 'botão tamanho fonte';
    bot.innerHTML = 'mude o tamanho da fonte';
    let newfont = 'large';
    let originFont = 'small';

    mae.appendChild(bot);

    bot.addEventListener('click', function(){
        if (tagDiv.style.fontSize === originFont) {
        tagDiv.style.fontSize = newfont;
        } else {
            tagDiv.style.fontSize = originFont;
        }
    });
}
/* buttonFontSize(); */

function buttonFontFamily() {
    let bot = document.createElement('button');
    let mae = document.querySelector('body');
    let tagDiv = document.querySelector('div');
    bot.className = 'botão tipo fonte';
    bot.innerHTML = 'mude o tipo da fonte';
    let newfont = 'cursive';
    let originFont = 'monospace';

    mae.appendChild(bot);

    bot.addEventListener('click', function(){
        if (tagDiv.style.fontFamily === originFont) {
        tagDiv.style.fontFamily = newfont;
        } else {
            tagDiv.style.fontFamily = originFont;
        }
    });
}
/* buttonFontFamily(); */

function buttonLineHeigth() {
    let bot = document.createElement('button');
    let mae = document.querySelector('body');
    let tagDiv = document.querySelector('div');
    bot.className = 'botão espaço linhas';
    bot.innerHTML = 'mude o espaço das linhas';
    let newSpace = '50px';
    let originSpace = '30px';

    mae.appendChild(bot);

    bot.addEventListener('click', function(){
        if (tagDiv.style.lineHeight === originSpace) {
        tagDiv.style.lineHeight = newSpace;
        } else {
            tagDiv.style.lineHeight = originSpace;
        }
    });
}
/* buttonLineHeigth(); */
}


   