import pageContent from 'pageContent'
import deleteMarkDown from 'helper/deleteMarkDown'


const About = () => {
    return (
        <div className="p-5">
            <h5 className="pb-2">{deleteMarkDown(pageContent.about.title)}</h5>
            <p className="text-justify">{pageContent.about.paragraph}</p>
        </div>
    )
}




export default About