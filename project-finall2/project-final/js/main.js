



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

// card img sec2
const 
      card =document.querySelectorAll(".container .cards .cardd ");
      for (const item of card) {
        item.addEventListener("click" , _=>{
          clear ()
          item.classList.add("active");
        })
      }
      function clear (){
        for (const item of card) {
          item.classList.remove("active");
        }
      }

// scroll header color , btn goup
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
      })

    //  const cardd = document.querySelectorAll (".card");
    //   onscroll=_=>{
    //     if (scrollY = 2106.25){
    //       cardd.classList.add (" animate__animated  animate__backInLeft ")
    //     }
    //       console.log(scrollY);
        
      
    //   }

// list bar 
      const List= document.querySelector(".list"),
         navbarMenu = document.querySelector('.nav-menu');
         List.addEventListener("click" , () =>{
          List.classList.toggle("active") ;
            navbarMenu.classList.toggle("active")
         })

// sec1 hero  الانتقال  بين الصور
let slides =document.querySelectorAll(".slide-container");
let index = 0 ;
      function next() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');      
      }
      function prev() {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');      
      }

// Swiper sec3
      const swiper = new Swiper('.swiper', {
        loop: true,

        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      slidesPerView: 1,
      spaceBetween: 10,
      // using "ratio" endpoints
      breakpoints: {
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }
      });

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
            })