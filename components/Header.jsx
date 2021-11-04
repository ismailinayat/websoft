

function Header() {

    const linkHandler = (e) => {


        const projectSection = document.querySelector('#project')



        const projectCords = projectSection.getBoundingClientRect();


        window.scrollTo({left: projectCords.left, top: projectCords.top + window.pageYOffset, behavior: "smooth"})


    }
    return (
        <div className="header" id='head'>
            <div className="header__heading">
                <h3>Let Us Build Your Next Top Quality Website</h3>
            </div>

            <div className="header__paragraph">
                <p>Get you blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
            </div>

            <div className="header__button" onClick={linkHandler}>
                <button>Explore Our Projects</button>
            </div>


            <div className="img img__left">

            </div>

            <div className="img img__right">

            </div>
            
        </div>
    )
}

export default Header
