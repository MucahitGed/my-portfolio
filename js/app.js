const navbar_container = document.querySelector(".navbar-container")
const bar_icon = document.querySelector(".bar-icon")
const nav_bars = document.querySelector(".nav-bars")
const submitBtn = document.querySelector(".submitBtn")
const contact_form = document.querySelector(".contact-form")
const contact_output = document.querySelector(".contact-output")

const namee = document.querySelector("#name")
const email = document.querySelector("#email")
const message_input = document.querySelector(".message-input")

navbarToggler()
contactCheck()

function contactCheck(){
  contact_form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    if(namee.value == "" || email.value == "" || message_input.value == ""){
      console.log("not worked")
      contact_output.innerHTML = "Please Fill Everything"
      contact_output.classList.add("notok")
    }else{
      contact_output.innerHTML = "Thanks to Contact Me"
      contact_output.classList.remove("notok")
      contact_output.classList.add("ok")
      console.log("worked")
    }
  
  })
}

function navbarToggler(){
    navbars_content_active = `
        
            <nav class="navbar">
                <ul>
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="./skills.html">Skills</a>
                </li>
                <li>
                    <a href="./projects.html">Projects</a>
                </li>
                <li>
                    <a href="./contact.html">Contact</a>
                </li>
                <li>
                    <a href="#" class="resumes">Resume</a>
                </li>
                </ul>
            </nav>
            <nav class="social">
                <ul>
                <li class="smedia">
                    <a href=""><i class="fa-brands fa-github"></i></a>
                </li>
                <li class="smedia">
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </li>
                <li class="smedia">
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                </li>
                </ul>
            </nav>
        
  
    `
    navbars_content_inactive = `
            <nav class="navbar">
              <ul>
                <li>
                  <a href="./index.html"><i class="fa-solid fa-house"></i></a>
                </li>
                <li>
                  <a href="./skills.html"
                    ><i class="fa-solid fa-screwdriver-wrench"></i
                  ></a>
                </li>
                <li>
                  <a href="./projects.html"><i class="fa-solid fa-code"></i></a>
                </li>
                <li>
                  <a href="./contact.html"><i class="fa-solid fa-envelope"></i></a>
                </li>
                <li>
                  <a href="#" class="resumes"
                    ><i class="fa-solid fa-download"></i
                  ></a>
                </li>
              </ul>
            </nav>
    
    `
    bar_icon.addEventListener("click" , ()=>{
        
        navbar_container.classList.toggle("active")

        if(navbar_container.classList.contains("active")){
            nav_bars.innerHTML = navbars_content_active
        }else{
            nav_bars.innerHTML = navbars_content_inactive
        }
         
    })
}

document.querySelector('.resumes').addEventListener('click' , ()=>{
    window.open('../cv.pdf')
})


