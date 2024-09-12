export default function Nave(){

    const data = [
        {

            type: 'JEGAN.T',
            name: 'Home',
            description: 'Project',
            items: 'About',
            img:'https://w7.pngwing.com/pngs/394/867/png-transparent-computer-icons-message-email-symbol-black-message-box-miscellaneous-angle-rectangle-thumbnail.png'
              
          
        },
       
    ];
    

    return(
        <div>
            {data.map((value)=>(
                <div className="div1 d-flex">
                    <h4  className="div2">{value.type}</h4>
                    <p  className="div3">{value.name}</p>
                    <p  className="div4">{value.description}</p>
                    <p  className="div5">{value.items}</p>
                    <div>
                    <img className="div6" src={value.img} alt="no"/>
                    </div>
                </div>
              
            ))}
        </div>
    )
}