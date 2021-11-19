import { BrowserRouter, Route, Switch } from "react-router-dom"
import IndexPage from "../pages"
import HomePage from "../pages/home"
import LoginPage from "../pages/login"
import MywantedPage from "../pages/mywanted"
import NoMatchPage from "../pages/noMatch"
import DetailPage from "../pages/detail"
import WdlistPage from "../pages/wdlist/idnex"
import MainPage from "../pages/main"
import ScrollToTop from "../components/common/ScrollToTop"
import CompanyPage from "../pages/company"
import LikesListPage from "../pages/mywanted/likesList"
import BookMarkListPage from "../pages/mywanted/bookmarkList"
import ResumePage from "../pages/resume"
import ResumeIntroPage from "../pages/resume/resumeIntro"
import MatchUpPage from "../pages/matchUp"



const RootRoute = () => {

    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>

                    {/* 기본 루트페이지 */}
                    <Route path='/' component={IndexPage} exact key="index" />

                    {/* 추가되는 페이지 */}
                    <Route path='/home' component={HomePage} exact key="home" />
                    <Route path='/login' component={LoginPage} exact key="loign" />
                    <Route path='/wdlist' component={WdlistPage} exact key="wdlist" />
                    <Route path='/mywanted' component={MywantedPage} exact key="mywanted" />
                    <Route path='/detail' component={DetailPage} exact key='detail' />
                    <Route path='/main' component={MainPage} exact key='main' />
                    <Route path='/company' component={CompanyPage} exact key='main' />
                    <Route path='/likesList' component={LikesListPage} exact key='likesList' />
                    <Route path='/bookMarkList' component={BookMarkListPage} exact key='bookMarkList' />
                    <Route path='/resume' component={ResumePage} exact key='resume' />
                    <Route path='/resumeIntro' component={ResumeIntroPage} exact key='resumeIntro' />
                    {/* 경로가 유효하지 않을 때 */}
                    <Route path='/matchUp' component={MatchUpPage} exact key='matchUp' />
                    <Route path='*' component={NoMatchPage} key="noMatch" />

                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    )
}


export default RootRoute