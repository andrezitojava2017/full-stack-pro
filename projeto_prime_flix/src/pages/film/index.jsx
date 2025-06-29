import { useParams } from "react-router";

const Film = ()=>{
    const {id} = useParams()
    return(
        <div>
            <h1>Pagina Filmes</h1>
            <span>{id}</span>
        </div>
    )
}

export default Film;