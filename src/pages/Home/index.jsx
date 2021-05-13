import pageContent from 'pageContent'
import deleteMarkDown from 'helper/deleteMarkDown'


const Home = () => {
    return (
        <div className="p-5">
            <h5 className="pb-2">{deleteMarkDown(pageContent.home.title)}</h5>
            <p className="text-justify">{pageContent.home.paragraph}</p>
        </div>
    )
}





export default Home