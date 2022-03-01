import "./projects.scss";

export default function projects() {
  const itemsData = [
    {
      id: 1,
      title: "DAK Clothes",
      description: "Online Clothes Store for Men, Womens and Childreen",
      url: "https://toony10.github.io/DAK-clothes/",
    },
    {
      id: 2,
      title: "Elite corp",
      description: "Simple Temp with HTML,CSS,Javascript and Bootstrab",
      url: "https://toony10.github.io/Elite-Corp/",
    },
    {
      id: 3,
      title: "Leno",
      description: "Simple Temp with HTML,CSS and Javascript",
      url: "https://leno.vercel.app/",
    },
  ];
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <div className='items'>
        {itemsData.map((item) => (
          <div className='item'>
            <h1>{item.title}</h1>
            <p className='Description'>{item.description}</p>
            <a href={item.url} target='_blank' rel='noreferrer'>
              <button>Visit</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
