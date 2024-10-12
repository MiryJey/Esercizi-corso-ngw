
import './App.css'
import Component from './Component'
import Card from './components/Card/Card'
import Counter from './components/Counter/Counter' 
function App() {
 
  //http://www.azienda.com/api/getFinancials

  const API= [
    //dati in formato json
          { "id": 0,
            "title": "titolo 1",
            "icon": "X",
            "mainInfo": "13000",
            "description": "rispetto a q3"
          },
          { "id": 1,
            "title": "titolo 2",
            "icon": "Y",
            "mainInfo": "5400",
            "description": "rispetto a q3"
          },

          {  "id": 2,
          "title": "titolo 3",
          "icon": "Z",
          "mainInfo": "3000",
          "description": "rispetto a q3"
           },

           {  "id": 3,
          "title": "titolo 4",
          "icon": "J",
          "mainInfo": "67000",
          "description": "rispetto a q3"
          }
        ]


  return (
    <>
    <Counter />

   {API.map((el) => ( 
    <Card
    id={el.id}
    title={el.title}
    icon ={el.icon}
    mainInfo={el.mainInfo}
    description={el.description}
    />
    ))}

    
   
   
</>
  )
}

export default App
