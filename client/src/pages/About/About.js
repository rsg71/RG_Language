import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {

    const [searchTerm, setSearchTerm] = useState("");

    const [searchResults, setSearchResults] = useState([]);


    const searchPeople = (term) => {
        let results = people.filter(person => person.name.includes(term));
        setSearchResults(results)
        // this will only search for people who have a letter in their name 
        // todo: include other search terms in the person.name.includes
        // probably want to do person.name.includes (term) and person.tag.includes(term)
        // something along those lines. But this basic example should get you going.
        

    }

    useEffect(() => {
        searchPeople(searchTerm)
    }, [searchTerm])


    const people = [
        {
            name: "fred",
            age: 22
        },
        {
            name: "sara",
            age: 56
        },
        {
            name: "wilson",
            age: 12
        },
        {
            name: "frederick",
            age: 12
        }
    ]
    return (
        <>
            <Container>


                <input
                    name="searchTerm"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button onClick={() => searchPeople(searchTerm)}>search</button>

                <div className="bg-success text-white">
                    search term is: {searchTerm}
                </div>




                {searchResults.length > 0 ?
                    <>
                        {
                            searchResults.map(person => (
                                <>
                                    <div className="mb-2 border border-success">
                                        <p>{person.name}</p>
                                        <p>{person.age}</p>
                                    </div>
                                </>
                            ))
                        }
                    </>
                    :
                    "NO SEARCH REsults"
                }
            </Container>

        </>
    )
}
