export default function Monosec(){


    let data=[
        {
            img:'https://cdn.shopify.com/s/files/1/0974/7950/files/Monogram_Keyboard_Multipad-v2_1366x925_crop_center.png.webp?v=1711651403',
            img1:'https://cdn.shopify.com/s/files/1/0974/7950/files/Monogram_Keyboard_2_878639a5-2865-4c4f-a21e-498f3a3db3b8_1366x768_crop_center.jpg.webp?v=1712087494',
            k:'Monogram Keyboard + Multipad',
            p:'Adaptable to any workflow',
            s:'Sold Out'

            
        }
    ]

    return(
        <>
        {data.map((value)=>(
            <div className="b">
                <img className="b1" src={value.img} atl="no"/>
                <img className="b2"src={value.img1} atl="no"/>
                <h5  className="k">{value.k}</h5>
                <p  className="lov">{value.p}</p>
                <h6  className="s">{value.s}</h6>
            </div>
        ))}
        </>
    )
}


































