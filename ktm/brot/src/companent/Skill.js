export default function Skill() {
  let data = [
    {
      name: "Skills.",
      h: "Frontend",
      h1: "Backend",
      h3: "Soft Skills",
    },
    {
      h4: "Javascript",
      h5: " ReactJS",
      h6: "NextJS",
      h7: "CSS3",
    },
    {
        h8:'NodeJs',
        h9:'MondoDB',
        h10:'ExpressJS',
        h11:'Vercel'
    },
    {
        h12:'Effective communication',
        h13:'Collaboration',
        h14:'Commitment',
        h15:'Leadership'

    }
  ];

  return (
    <div>
      {data.map((value) => (
        <div className="b">
          <h1 className="div20">{value.name}</h1>
          <div className="div25">
            <h3 className="div21">{value.h}</h3>
            <h3 className="div22">{value.h1}</h3>
            <h3 className="div23">{value.h2}</h3>
            <h3 className="div24">{value.h3}</h3>
          </div>
          <p className="div26">{value.h4}</p>
          <p className="div27">{value.h5}</p>
          <p className="div28">{value.h6}</p>
          <p className="div29">{value.h7}</p>
          <p className="div30">{value.h8}</p>
          <p className="div31">{value.h9}</p>
          <p className="div32">{value.h10}</p>
          <p className="div33">{value.h11}</p>
          <p className="div34">{value.h12}</p>
          <p className="div35">{value.h13}</p>
          <p className="div36">{value.h14}</p>
          <p className="div37">{value.h15}</p>
        </div>
      ))}
    </div>
  );
}
