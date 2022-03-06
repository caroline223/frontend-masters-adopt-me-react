import Pet from './pet'


const Results = ({ pets }) => {

    return(
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {!pets.length ? (
            <h2>No Pets Found</h2>
        ) : (
            pets.map(pet => (
                <Pet 
                animal={pet.animal}
                key={pet.id} // only used for keeping track of changes 
                name={pet.name}
                breed={pet.breed}
                images={pet.images}
                location={`${pet.city}, ${pet.state}`}
                id={pet.id}
                />
            ))
        ) } 
        </div>
    )

}
export default Results 