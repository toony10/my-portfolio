import "./projects.scss";

export default function projects() {
  const itemsData = [
    {
      id: 1,
      title: "Tasty",
      description: "Website about food and recipes with React JS",
      url: "https://tasty-ten.vercel.app/",
    },
    {
      id: 2,
      title: "DAK Clothes",
      description: "Online Clothes Store for Men, Womens and Childreen",
      url: "https://toony10.github.io/DAK-clothes/",
    },
    {
      id: 3,
      title: "Elite corp",
      description: "Simple Temp with HTML,CSS,Javascript and Bootstrab",
      url: "https://toony10.github.io/Elite-Corp/",
    },
  ];
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <div className='items'>
        {itemsData.map((item) => (
          <div key={item.id} className='item'>
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
