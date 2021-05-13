import works from 'works'
import { Link } from 'react-router-dom'


const Navwork = () => {

    return (
        <div className=" mx-5">
            <ul className="row">
                {works.map((work) =>
                    <li className="navbar col-md-4 justify-content-center" key={work.slug}>
                        <Link className="nav-linlink-smoothlink-smoothk link link-smooth" to={`/works/${work.slug}`}>{work.auteur}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}


export default Navwork