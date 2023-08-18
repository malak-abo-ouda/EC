// section-men القائمة وbtn close
const menLink = document.querySelector ("#a-men"),
      sectionMen = document.querySelector(".section-men"),
      closeMen = document.querySelector("#closeMen");
      menLink.onclick = _=>{
        sectionMen.classList.toggle("acttive")
      }
      closeMen.onclick= _ =>{
        sectionMen.classList.remove("acttive")
      }
      
// icon search 
document.querySelector ('#search-icon').onclick =_=>{
  document.querySelector ('#search-form').classList.toggle('active');
}
document.querySelector ('#close').onclick =_=>{
  document.querySelector ('#search-form').classList.remove('active');
}

//img sec1 page2 
  const
    smImgAllEl = document.querySelectorAll(".smmall img"),
    smcolorAllEl = document.querySelectorAll(".div-color span"),
    bigimgEl = document.querySelector("#bigimg");
  for (let i = 0; i < smImgAllEl.length; i++) {
   smImgAllEl[i].onclick =_=>{
    let smSrs =smImgAllEl[i].getAttribute("src")
    bigimgEl.setAttribute("src" , smSrs)
    //  smcolorAllEl[i].style = "border:2px solid #FBB03B ";
    clearBorder()
    smImgAllEl[i].style = "border:2px solid #FBB03B ";
     smcolorAllEl[i].style = "border:3px solid red ";

   }
  }
  
  for (let i = 0; i < smcolorAllEl.length; i++) {
    smcolorAllEl[i].onclick =_=>{
     let smvalue =smcolorAllEl[i].getAttribute("value")
     console.log(smvalue);
     bigimgEl.setAttribute("src" , smvalue)
     clearBorder()
    //  smcolorAllEl[i].style = "border:2px solid #FBB03B ";
     smImgAllEl[i].style = "border:2px solid #FBB03B ";   
    }
   }
 
   

  function clearBorder() {
    for (let i = 0; i < smImgAllEl.length; i++) {
      smImgAllEl[i].style= "";     
    }
  }



  

// num sec1 page 2 -+
const 
      pluss = document.querySelector(".plus"),
      minus = document.querySelector(".minus"),
      num = document.querySelector(".num");
// console.log(plus , minus , num);

    let a = 1 ;
    pluss.onclick = _=>{
        // console.log(pluss);
        a++;
        a = (a < 10)? "0" + a :a;
        num.innerText = a ; 
        // console.log(a);
    }

    minus.onclick = _=>{
      // console.log(pluss);
    if(a>1) {
      a--;
      a = (a < 10)? "0" + a :a;
      num.innerText = a ; 
      // minus.style = "color : red "
    }
  }



// tab sec2 page 2
const tabBtnAll = document.querySelectorAll (".btntab"),
      tabsContent = document.querySelectorAll(".tabContent") ;    
    for (const item of tabBtnAll) {
      item.onclick = _=>{
        console.log("ok") 
         clearClass(tabBtnAll , "tabActive")
        item.classList.add("tabActive");
      }
    }

    for (let index = 0; index < tabBtnAll.length; index++) {
      tabBtnAll[index].addEventListener("click" , _=>{
        addClass()
        tabsContent[index].classList.remove('hid');
      })
    }

    function addClass() {
    for (let index = 0; index < tabBtnAll.length; index++) {
      tabsContent[index].classList.add('hid')
  }};

  function clearClass(arr , classNam) {
    arr.forEach(item => {
      item.classList.remove(classNam)
      
    });
  }
    //   tabBtnAll.forEach(tab => {
    //   tab.onclick = _=>{
    //     clearClass(tabBtnAll , "tabActive")
    //     tab.classList.add("tabActive");
    //     clearClass(tabsContent , "show");
    //     tabsContent.forEach(content => {
    //       if(tab.getAttribute("data-target") == content.id){
    //         content.classList.add ("show");
    //       }
    //     });  
    //   }
    
    // });
// *******************
// 

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



      // window.onscroll = () => {
      //   header.classList.remove('fa-times');
      //   header.classList.remove('active');
      // } 


      
const 
      header = document.querySelector(".header");
      goUpBtn = document.querySelector("#goup");
      // console.log(header);

      onscroll = _=>{
        if(scrollY >=300){
          header.classList.add("fixed-top");
          goUpBtn.classList.remove("d-none")
        }else{
         header.classList.remove("fixed-top");
         goUpBtn.classList.add("d-none")
          
        }
      }
      goUpBtn.addEventListener("click" , _=>{
  
        window.scrollTo({ top: 0 })
        // scrollTo(x, y)
        // scrollTo( 0 , 0)
        // scrollTo(0 , 600)
        // scrollBy( 0 , 300)
      })







      // loginScreen
      const loginScreen =document.querySelector(".loginScreen");
      const user =document.querySelector("#user");
      const loginBtn = document.querySelector("#login-btn");
      const closeLoginBtn = document.querySelector("#closeLogin");
      // console.log(loginScreen ,user)

      // user icon
      user.onclick =_ =>{
        loginScreen.classList.remove("d-none");
      }
      // btn login   
      loginBtn.onclick = _=>{
        loginScreen.classList.remove("d-none")
      }
      // btn close 
      closeLoginBtn.onclick = _=>{
        loginScreen.classList.add("d-none")
      }
      // لضغط باي مكان يقفل ال login 
      addEventListener("click" , event=>{
        if(event.target.classList.contains("loginScreen")){
          loginScreen.classList.add('d-none');
        }
      })


      const 
            forms =document.querySelector(".forms"),
            pwshowHide =document.querySelectorAll(".eye-icon"),
            links =document.querySelectorAll(".link"),
            linkfg =document.querySelectorAll(".linkfg");
            // signup = document.querySelector(".signup")
            // console.log(forms ,pwshowHide,links );

            pwshowHide.forEach(eyeIcon => {
              eyeIcon.addEventListener("click" , _=> {
                let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
                // console.log(pwFields);

                pwFields.forEach(password =>{
                  if ( password.type === "password"){
                    password.type = "text";
                    eyeIcon.classList.replace("bx-hide" ,"bx-show");
                    return;
                  }
                  password.type = "password";
                  eyeIcon.classList.replace("bx-show" ,"bx-hide");
                })
              })
            })

            links.forEach(link =>{
              link.addEventListener("click" , e=>{
                e.preventDefault(); // preventing form submit
                forms.classList.toggle("show-signup");
                forms.classList.remove("show-forgot");

              })
            })
            linkfg.forEach(link =>{
              link.addEventListener("click" , e=>{
                e.preventDefault(); // preventing form submit
                forms.classList.toggle("show-forgot");
              })
            });