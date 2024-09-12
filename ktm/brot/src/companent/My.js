export default function My(){


    let data=[
        {
            h:'My Story.',
            p:'My journey as a front-end developer started back in 2010, working as a freelancer for clients all over the world for several years.After being on my own for a while, I decided to enter the corporate world, and I started working as a software developer at Webflow, the same platform I was using with my freelance clients.After some exciting months of work at Webflow, I decided to transition to Stripe, where I returned what I love: front-end development. My success quickly compounded I started receiving job offers from the biggest names in the industry.All these opportunities led me to travel the world. Eventually, however, I decided to settle down for a more calm and simple routine, and Im now working at Apple. And you know what? I love what I do! 💜',

        }
    ]

    return(
        <div>
            {data.map((value)=>(
                <div>
                    <h1 className="div40">{value.h}</h1>
                    <p className="div41">{value.p}</p>
                </div>
            ))}
        </div>
    )
}