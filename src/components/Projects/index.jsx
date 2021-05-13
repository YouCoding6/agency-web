import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import works from "works";
import deleteMarkDown from 'helper/deleteMarkDown'





const Projects = () => {

    const { workSlug } = useParams()

    const [currentWork, setCurrentWork] = useState(undefined)
    useEffect(() => {
        const foundAuteur = works.find((work) => work.slug === workSlug);
        setCurrentWork(foundAuteur);
    }, [workSlug])


    return (
        <div className="container w-50 mt-3">
            {currentWork !== undefined ?
                <div className="row">
                    <div className="col align-self-center">
                        <img className="image-project mx-auto d-block mb-4" src={currentWork.image} alt={currentWork.title} />
                        <h4 className="text-center mb-2 px-0 ">{deleteMarkDown(currentWork.title)}</h4>
                        <p className="text-justify px-0">{currentWork.paragraph}</p>
                    </div>
                </div>
                : (<p>Pas de projet avec ce slug sorry…</p>)}
        </div>
    )
}

export default Projects;