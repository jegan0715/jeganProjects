export default function Fomo() {
  let data = [
    {
      name: 'Monogram',
      add: '305 King St. W.',
    add1: ' Suite 502',
     add3:'Kitchener, ON',
     add4:'Canada',
    },
    {
      name: "Quick Links",
      a: "Home",
      a1: "How it Works",
      a2: " Shop Download",
    },
    {
      name: "Help",
      a3: "FAQs",
     a4: " Support Center Shipping and Sales",
    },
    {
      name: "Information",
      a5: "About ",
     a6: "Us Work with us",
    a7: "Privacy Policy",
    a8: "Terms of Use",
    a9: "Terms of Sale",
     a10:"Press Kit",
    },
    {
      name: "Subscribe to Monogram",
      p: "Master productivity with Creative Console and get all the latest Monogram news.",
      m: "Email Address ",
      m1:"© Monogram 2024",
    },
  ];

  return (
    <>
      <div className="vg ">
        {data.map((value) => (
          <div>
            <h6 className="vg1">{value.name}</h6>
            <p>{value.add}</p>
            <p>{value.add1}</p>
            <p>{value.add3}</p>
            <p>{value.add4}</p>
            <a className="vg2"> {value.a}</a>
            <a className="vg2"> {value.a1}</a>
            <a className="vg2"> {value.a2}</a>
            <a className="vg2"> {value.a3}</a>
            <a className="vg2"> {value.a4}</a>
            <a className="vg2"> {value.a5}</a>
            <a className="vg2"> {value.a6}</a>
            <a className="vg2"> {value.a7}</a>
            <a className="vg2"> {value.a8}</a>
            <a className="vg2"> {value.a9}</a>
            <a className="vg2"> {value.a10}</a>
            <p className="po">{value.p}</p>
            <p>{value.m}</p>
            <p>{value.m1}</p>
          </div>
        ))}
      </div>
    </>
  );
}
