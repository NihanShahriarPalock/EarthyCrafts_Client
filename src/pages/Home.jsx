import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import "../App.css";
import HeroSlider from "../components/Header/HeroSlider";
import Partner from "../components/Body/Partner";
import MeetTeam from "../components/Body/MeetTeam";

const Home = () => {
    const [loadingScreen, setLoadingScreen] = useState();
    useEffect(() => {
        setLoadingScreen(true);
        setTimeout(() => {
            setLoadingScreen(false)
        },2000)
    },[])
    return (
      <div>
        {loadingScreen ? (
          <div className='loadingScreenSpinner'>
            <CirclesWithBar
              height='100'
              width='100'
              color='#4fa94d'
              outerCircleColor='#4fa94d'
              innerCircleColor='#4fa94d'
              barColor='#4fa94d'
              ariaLabel='circles-with-bar-loading'
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
            />
          </div>
        ) : (
          <>
            
              <HeroSlider></HeroSlider>
              <MeetTeam></MeetTeam>
              <Partner></Partner>
          </>
        )}
      </div>
    );
};

export default Home;