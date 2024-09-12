export default function M(){

let data=[
    {
        img:'https://monogramcc.com/static/fb6b98aa90bbce383e12a09c50936e96/9ee2a/shop-banner-module.webp',
        h:'Create Your Own Console',
        a:'Add-on to make it perfect.'
    }
]
    return(
        <>
        <div>
        {data.map((value)=>(
            <div>
              <img   className="m"   src={value.img} alt="no"/>
              <h1 className="c"> {value.h}</h1>
              <p className="a"> {value.a}</p>
              </div>
        ))}
      </div>
        
        </>
    )
}