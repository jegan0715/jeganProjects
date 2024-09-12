export default function Footer(){

    let data=[
        {
            name:'Home',
            name1:'Project',
            name2:'About',
            name3:'Contact'
        },
        {
            p:'Interested in working together',
            p1:'?'
        },
        {
            t:'©2024 All Rights Reserved.',
            t1:'Made with 💜 by Jegan'
        },
        {
            img:'https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png',
            img2:'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
            img3:'https://cdn-icons-png.flaticon.com/512/25/25231.png'
        }

    ]
    return(
        <div>
            {data.map((value)=>(
                <div className="k">
                    <h5 className="div45">{value.name}</h5>
                    <h5 className="div46">{value.name1}</h5>
                    <h5 className="div47">{value.name2}</h5>
                    <h5 className="div48">{value.name3}</h5>
                    <p className="div49">{value.p}</p>
                    <p className="div50">{value.p1}</p>
                    <p className="div51">{value.t}</p>
                    <p className="div52">{value.t1}</p>
                    <div className="d-flax">
                        <img className="div53" src={value.img} />
                        <img className="div54" src={value.img2}/>
                        <img className="div55" src={value.img3}/>
                    </div>
                </div>
            ))}
        </div>
    )
}