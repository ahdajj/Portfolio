import './NewCardstyle.css'

const Experience = [{ExName : 'MERN-STACK & FRONT-END PROJECTEN' , ExInfo:['Bouwde responsieve webapplicaties met React, JavaScript (ES6+), HTML/CSS en Bootstrap' , 'Ontwikkelde RESTful API’s met Node.js,Express en MongoDB (CRUD-functionaliteit)' , 'Paste UI/UX-principes toe om gebruikersstromen en interactie te verbeteren' , 'Beheerde code met Git en GitHub']} ,{ExName:'WordPress-projecten' ,ExInfo:['Ontwierp en ontwikkelde meer dan 4 WordPress-websites voor kleine bedrijven, wat de online zichtbaarheid en betrokkenheid verbeterde' , 'Paste thema’s en plugins aan met SEO- en mobiele optimalisatie voor betere prestatiesen hogere zoekresultaten' , 'Gaf klanttraining en ondersteuning na lancering voor soepel websitebeheer'] }]

export default function NewCard() {
  return (
      <div className="excards">
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <h1>Ervaring</h1>
        {Experience.map((item , index)=>(
          <div className="excard">
            <p className="tip">{item.ExName}</p>
            <ul>
            {item.ExInfo.map((info , infindex)=>(
                  <li className="second-text" key={infindex}>{info}</li>     
            ))}
             </ul>
          </div>
        ))}
        
      </div>
  )
}
