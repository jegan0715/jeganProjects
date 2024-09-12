export default function Body() {
  let data = [
    {
      name: "Hey, I am jegan 👋🏻",
      h:"Full ",
      h1:'Stack ',
      h2:'Developer',
      img:'/jegan.jpeg'
    },
  ];

  return (
    <div>
      {data.map((value) => (
        <div >
            <p className="div7">{value.name}</p>
            <h1 className="div8">{value.h}</h1>
            <h1 className="div9">{value.h1}</h1>
            <h1 className="div10">{value.h2}</h1>
            <img className="div11" src={value.img} alt="no"/>
        </div>
      ))}
    </div>
  );
}
