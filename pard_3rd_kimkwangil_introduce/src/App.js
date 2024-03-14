import logo from './logo.svg';
import './App.css';
import './Content1.css'
import './Content2.css'

function App() {
    return (
        <div className="LayOut">
            <div className="Content">
                <p className="p_Title">
                    HELLO!<br/>I AM PANGIL
                </p>
                <p className="p_SubTitle">
                    Welocme to my introduce page!<br/>
                    There are some information about me
                </p>
                <p className="p_SubTitl2">
                    Please scroll this website!<br/>
                    Please scroll this website!<br/>
                    Please scroll this website!<br/>
                </p>
            </div>
            <div className="Content Cotent2">
                <p className="p_Content2Title">너 누구야!</p>
                <img src="img/pangil.png" alt="pangil image" className="MyImage"/>
                <div className='div_Content'>
                    <p className="p_ContentTitle">
                        이름
                        <span className="p_ContentContent">김광일</span>
                    </p>
                </div>
                <div className='div_Content'>
                    <p className="p_ContentTitle">
                        학번
                        <span className="p_ContentContent">20학번</span>
                    </p>
                </div>
                <div className='div_Content'>
                    <p className="p_ContentTitle">
                        RC
                        <span className="p_ContentContent">근본 토레이</span>
                    </p>
                </div>
                <div className='div_Content'>
                    <p className="p_ContentTitle">
                        전공
                        <span className="p_ContentContent">AI 컴퓨터공학심화</span>
                    </p>
                </div>
                <div className='div_Content'>
                    <p className="p_ContentTitle">
                        MBTI
                        <span className="p_ContentContent">ISFJ</span>
                    </p>
                </div>
            </div>
            <div className="Content"></div>
        </div>
    );
}

export default App;
