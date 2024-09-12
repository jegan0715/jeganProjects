export default function Navepar() {
  const data = 
    {
      id: "Monogram",
      navlinks:[
       "How it Works",
     "Workflows",
       "Download",
       "Blog",
      "Support",
    "Shop",
       "GBP"],
       img:'https://monogramcc.com/static/9a0b554db1990565457610c5f83b3ad7/91943/shop_cta_xl_896f6b8270.webp'
    }
  

 
  ;

  return (
    
        <div className="je" style={{backgroundImage:`url(${data.img})`}} >
          <div className="nav">
            <h1>{data.id}</h1>
            <ul className="nav-section">
            {data.navlinks && data.navlinks.map((val)=>
              <li className="nav-item">
                <a href="">{val}</a>
              </li>
            )}
            </ul>
            <div className="lo">
              A Console for Every Workflow <br/>
              Discover the perfect console for yours.
            </div>
          </div>
    
        </div>
        
    
   
  );
}
