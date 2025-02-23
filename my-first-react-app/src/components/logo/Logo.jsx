import "./logo.css"

const Logo = ({name="Relya", classArray1="f1 fs1_5 cW", classArray2="f1  cW"}) =>{

    return(
        <div className="logo flex alignC ">
            <div className="blurBg"></div>
            <div className="flexC justifyC alignC gap00 logoText">
                <div className={classArray1}>{name}</div>
                <div className={classArray2}>Music School</div>
            </div>
        </div>
    )
}

export default Logo;