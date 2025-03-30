let btns=document.querySelectorAll("button");
let disp=document.querySelector(".screen");

tot=0;
count=0
a="";
b=1
c=""
operation="";
ops="";
function display(text){
    disp.innerText=text;
    disp.style.textAlign="center";
    disp.style.fontSize="2rem";
}
function add(){
    tot+=parseFloat(a);
    // disp.innerText=tot.toString();
    disp.style.textAlign="center";
    disp.style.fontSize="2rem";
}
function sub(a){
    tot=(parseFloat(a))-tot;
    if(a>tot){
        ops='-';
    }
    else{
        ops="";
    }
}
function div(count){
    ops='/'
    if(count===1){
        b=parseFloat(a);

    }
    else{
        b=parseFloat(b)/parseFloat(a);
    }
    a=b;
}
function mul(){
    b*=parseFloat(a);
    ops='*';
}
function equal(){
    if(ops==='-'){
        disp.innerText=-tot.toString();
        disp.style.textAlign="center";
        disp.style.fontSize="2rem";

    }
    else{
        disp.innerText=tot.toString();
        disp.style.textAlign="center";
        disp.style.fontSize="2rem";

    }
    if(ops==='*'){
        disp.innerText=b.toString();
        disp.style.textAlign="center";
        disp.style.fontSize="2rem";
    }
    if(ops==='/'){
        disp.innerText=b.toString();
        disp.style.textAlign="center";
        disp.style.fontSize="2rem";
    }
}
btns.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log(button.innerText);
        if(button.innerText==='AC'){
            tot=0;
            count=0
            a="";
            b=1
            c=""
            display(c);
            operation="";
            ops="";
        }
        else if(button.innerText!=='+' && button.innerText!=='-'&& button.innerText!=='/'&& button.innerText!=='*' && button.innerText!=="="){
            a+=button.innerText;
            c+=button.innerText;
            display(c);
            
        }
        else if(button.innerText==='+'){
            // display(button.innerText);
            operation='+';
            display(c="");
            add();
            a="";
        }
        else if(button.innerText==='-'){
            // display(button.innerText);
            operation='-';
            display(c="");
            sub(a);
            a="";
        }
        else if(button.innerText==='*'){
            operation='*';
            display(c="");
            mul();
            a="";
        }
        else if(button.innerText==='/'){
            operation='/';
            display(c="");
            count++;
            div(count);
            a="";
        }
        else if(button.innerText==='='){
            if(operation==='-'){
                sub(a);

            }
            else if(operation==='+'){
                add();

            }
            else if(operation==='*'){
                mul();

            }
            else if(operation==='/'){
                div()
            }
            equal();
        }
        
    });
});
