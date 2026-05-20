 const Gamingbtn = document.querySelector('.js-Gamingbtn');
        const Musicbtn = document.querySelector('.js-Musicbtn');
        const Techbtn = document.querySelector('.js-Techbtn');

        Gamingbtn.addEventListener('click', changeTheme)
        Musicbtn.addEventListener('click', changeTheme)
        Techbtn.addEventListener('click', changeTheme)
         

        function changeTheme(){
            this.classList.toggle('active')
        }