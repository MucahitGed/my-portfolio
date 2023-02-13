projectPrinter()
function projectPrinter(){
    const name = [
        "Macapa Coffee",
        "Guitarizm",
        "Game Of Life",
        "Hotel Dionysus",
        "Dark Mode Clock",
        "Youtube Clone",
        "Rock-Paper-Scissors",
        "Movie App",
        "Pinterest Clone",
        "Recipe App",
        "MrGifter",
        "Github Finder"
    ]

    const codes = [
        "https://github.com/MucahitGed/coffee-shop",
        "https://github.com/MucahitGed/Guitar-Shop",
        "https://github.com/MucahitGed/Game-of-life",
        "https://github.com/MucahitGed/hotel-site",
        "https://github.com/MucahitGed/dark-mode-clock-with-js",
        "https://github.com/MucahitGed/youtube-clone",
        "https://github.com/MucahitGed/Rock-paper-scissors",
        "https://github.com/MucahitGed/Movie-App",
        "https://github.com/MucahitGed/Pinterest-Clone",
        "https://github.com/MucahitGed/recipe-search-app-w-typescript-react",
        "https://github.com/MucahitGed/react-e-commerce-site",
        "https://github.com/MucahitGed/Github-Account-Finder-App"
    ]
    const links  = [
        "https://macapa-coffee.netlify.app/",
        "https://guitarizm.netlify.app",
        "https://game-of-lifee.netlify.app",
        "https://deluxe-hotel-site.netlify.app",
        "https://dark-mode-clock.netlify.app",
        "https://youtube-cclone.netlify.app/",
        "https://rock-paperr.netlify.app",
        "https://movie-aapp.netlify.app",
        "https://pinterest-clonee.netlify.app",
        "https://recipe-search-app-typescript.netlify.app",
        "https://mrgifter.netlify.app/",
        "https://github-account-finder-app.netlify.app/"
    ]
    
    const pics = [
        "../img/coffee.png",
        "../img/guitarizm.png",
        "../img/life.png",
        "../img/hotel2.png",
        "../img/clock2.png",
        "../img/youtube-clone.png",
        "../img/rock-paper.png",
        "../img/movie2.png",
        "../img/pinterest2.png",
        "../img/recipe1.png",
        "../img/shop.png",
        "../img/finder.png"
    ]
    
    for(let i = 0; i < 12 ; i++){
        let content = document.createElement('div')
        content.classList.add('content')

        let content_inside = document.createElement('div')
        content_inside.classList.add('project-container')
        content_inside.innerHTML =  
      `
        <div class="project">
          <a href=${links[i]}  class="visitBtn" target="_blank">Visit</a>
          <a href=${codes[i]} class="codeBtn" target="_blank">Code</a>
        </div>
     `
      
        content.innerHTML= `
            <img src=${pics[i]}>
            <div class="project-name">${name[i]}</div>
        `
        // project_content.insertAdjacentHTML('beforeend' , content)
        document.querySelector(".projects").appendChild(content)
        
        content.addEventListener("mouseover" , ()=>{
            
            content.appendChild(content_inside)
        })
        content.addEventListener("mouseleave" , ()=>{
            
            content.removeChild(content_inside)
            
        })
    }
   
   
    
}



