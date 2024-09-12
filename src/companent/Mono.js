import Navepar from "./Navepar"

export default function Mono (){
let data=[
{
    img:'https://monogramcc.com/static/9a0b554db1990565457610c5f83b3ad7/91943/shop_cta_xl_896f6b8270.webp'
}
] 
    return(
        <div className="nav">
        {data.map((values)=>(
                <img className="je2" src={values.img} alt="" />
        ))}
        <Navepar/>
       
        </div>
    )
}