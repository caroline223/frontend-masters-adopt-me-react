import { Component } from "react"
import { withRouter } from 'react-router-dom'
import Carousel from "./Carousel"
import ErrorBoundary from "./ErrorBoundary"


class Details extends Component {

    
        state = { loading: true }


    async componentDidMount (){
        const res = await fetch (
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        )

        const json = await res.json()
        this.setState(Object.assign(
            {
            loading: false
        },
        json.pets[0]
        ))
    }
    render(){
        if(this.state.loading){
            return <h3>loading ...</h3>
        }
        const { animal, breed, city, state, description, name, images } = this.state
        return (
            <div className="details">
                <Carousel images={images} />
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
               <button>Adopt {name}</button>
               <p>{description}</p>
               <button><a href="/" style={{color: 'white'}}>Back</a></button>
            </div>
        )
    }
}

const DetailsWithRouter = withRouter(Details)

export default function DetailsWithErrorBoundary(){
    return(
        <ErrorBoundary>
            <DetailsWithRouter />
        </ErrorBoundary>
    )
}

