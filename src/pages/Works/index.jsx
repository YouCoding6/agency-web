import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Projects from 'components/Projects'
import pageContent from 'pageContent'
import deleteMarkDown from 'helper/deleteMarkDown'
import Navwork from 'components/Navwork'

const Works = () => {
    return (
        <div className="py-4 align-items-center justify-content-center ">
            <h5 className="py-2 text-center">{deleteMarkDown(pageContent.works.title)}</h5>
            <p className="text-center">{pageContent.works.paragraph}</p>
            <Navwork />
            <Switch>
                <Route path="/works/:workSlug">
                    <Projects />
                </Route>
            </Switch>
        </div>
    )
}



export default Works