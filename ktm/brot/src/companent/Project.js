export default function Project() {
  let data = [
    {
      img: "https://framerusercontent.com/images/cRf6OhI78D9fHIZyhDlqODIP0.webp?scale-down-to=2048",
      img1: "https://framerusercontent.com/images/qO1zYSdp36H8P8ueXy1s7somMo.webp?scale-down-to=2048",
      t: "TaskFlow",
      t1: "EcoCart",
      p:'Task management system with drag-and-drop,',
      p1:' real-time collaboration, and responsive layout.',
      p2:'E-commerce platform promoting eco-friendly products with payment integration.'
    },
    {
        img: "https://framerusercontent.com/images/cRf6OhI78D9fHIZyhDlqODIP0.webp?scale-down-to=2048",
        img1: "https://framerusercontent.com/images/qO1zYSdp36H8P8ueXy1s7somMo.webp?scale-down-to=2048",
        t2: "TaskFlow",
        t3: "EcoCart",
        p5:'Task management system with drag-and-drop,',
        p3:' real-time collaboration, and responsive layout.',
        p4:'E-commerce platform promoting eco-friendly products with payment integration.'
      },
  ];

  return (
    <div>
      {data.map((value) => (
        <div className="continer div19">
          <img className="div12" src={value.img} alt="no" />
          <img className="div13" src={value.img1} alt="no" />
          <h3 className="div14"> {value.t}</h3>
          <h3 className="div15"> {value.t1}</h3>
          <p className="div16"> {value.p}</p>
          <p className="div17"> {value.p1}</p>
          <p className="div18"> {value.p2}</p>

          <h3 className="di1"> {value.t2}</h3>
          <h3 className="di2"> {value.t3}</h3>
          <p className="di3"> {value.p5}</p>
          <p className="di4"> {value.p3}</p>
          <p className="di5"> {value.p4}</p>
          
        </div>
      ))}
    </div>
  );
}
