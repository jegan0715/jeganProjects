export default function Monopic() {
  let data = [
    {
      img: "https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-final_1366x911_crop_center.jpg.webp?v=1660013247",
      img1: "https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-horizontal_1366x911_crop_center.jpg.webp?v=1668446709",
      h: "Mini Console ",
      o: "PRE-ORDER",
      p: " Ideal for everyday shortcuts. Adaptable to any workflow",
    },{
      img: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_1366x911_crop_center.jpg.webp?v=1623682377",
      img1: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_TravelerBracket1_Monogram_May2020_4561_30a35bd4-01b4-44db-894a-e06162d8ab77_1366x911_crop_center.jpg.webp?v=1668433146",
      h: "AUDIO Console ",
      o: "PRE-ORDER",
      p: " Ideal for everyday shortcuts. Adaptable to any workflow",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_TravelerBracket1_Monogram_May2020_4561_30a35bd4-01b4-44db-894a-e06162d8ab77_1366x911_crop_center.jpg.webp?v=1668433146",
      img1: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_StudioClosedBracket1_Monogram_May20204507_548446cb-17c9-4fc2-8b12-ae1b1a308a7e_1366x911_crop_center.jpg.webp?v=1623269261",
      h: "Mini Console ",
      o: "PRE-ORDER",
      p: " Ideal for everyday shortcuts. Adaptable to any workflow",
    },
    
      {
        img: "https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_MasterClosedBracket1_Monogram_May20204494_1366x911_crop_center.jpg.webp?v=1623682600",
        img1: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_CoreBracket1_Monogram_May2020_4578_7d1f84fe-9d56-41f2-9dbe-f87c72f2f155_1366x911_crop_center.jpg.webp?v=1668433240",
        h: "VIDEO Console ",
        o: "PRE-ORDER",
        p: " Ideal for everyday shortcuts. Adaptable to any workflow",
      },
   
     
  ];

  return (
    <>
      <div  className="jegan " >
        {data.map((value) => (
          <div className=" p-3">
                <div className="">
                    <div className="div11">
                      <a className="o">{value.o}</a>
                      <img className="mo" src={value.img} />
                      <img className="mo1" src={value.img1} />
                      <h5 className="h">{value.h}</h5>
                      <p className="p">{value.p}</p>
                    </div>
                </div>
                
            </div>
        ))}
      </div>
    </>
  );
}
