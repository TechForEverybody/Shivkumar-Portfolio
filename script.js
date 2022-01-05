function typeText() {
    let list = ['Full Stack Web Developer', 'M.E.R.N. Stack Developer', 'PHP Developer', 'Database Manager','Python Developer','Machine Learning Engineer','Freelancer']
    let count=0;
    let place=document.getElementById('typetext');
    let i=0;
    let right=1;
        let textindex=0;
        let text=list[0];
        function writeName() {
            if (i <= text.length && right == 1) {
                place.innerHTML = text.slice(0, i);
                i++;

                setTimeout(writeName, text.length*3);
            } else if (i>=0){
                right = 0;
                place.innerHTML = text.slice(0, i);
                i--;
                setTimeout(writeName, text.length*3);
            }
            else if(textindex<6){
                right=1;
                textindex++;
                text=list[textindex];
                i=0;
                setTimeout(writeName,text.length*3)
            }
            // count++;
        }
        writeName();
    // });
    // clearName();
    // console.log(count);
}

typeText()

setInterval(typeText, 19000)




function toggleNavbar(value) {
    let navbar=document.getElementsByClassName('navigation')[0];
    let options=document.getElementById('hideorshownavbar');
    if (value==1) {
        navbar.style.left="0px";
        options.innerHTML='<i id="hideNavbar" onclick="toggleNavbar(0)" class="fas fa-times"></i>'
    } else {
        navbar.style.left="-300px";
        options.innerHTML='<i id="hideNavbar" onclick="toggleNavbar(1)" class="fas fa-bars"></i>'
        
    }
}