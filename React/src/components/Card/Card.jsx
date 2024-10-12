import './Card.css'

export default function Card ({id, title,icon,mainInfo,description}) {

    return(
        <div  id = {id} className='card'>
           
            <div className="head">
                
                <div className="title">
                    <h3>{title}</h3>
                </div>
                
                <div className="icon">
                    {icon}
                </div>
            </div>

            <div className="main-info">
                <h2>{mainInfo} </h2>
            </div>

            <div className="description">
                <p>description</p>
            </div>

        </div>
    )
    
}