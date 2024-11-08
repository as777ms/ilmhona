import Cards from "../../components/cards/cards"
import Marketing from "../../components/marketing/marketing"
import Sswiper from "../../components/sswiper/sswiper"

const Main = ({ilmhona, image1, image2, image3}) => {
  return (
    <>
      <div className="mt-[30px]">
        {/* <img src={ilmhona} alt="" /> */}
        <div className="w-[80%] m-[auto]">
        <Sswiper image1={image1} image2={image2} image3={image3}/>

        <Cards />

        <Marketing />
        <div id="courses" className='w-[100%] h-[500px] bg-red-600'>




          {/* DARKMODE */}


          
        {/* <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
        This is a section that switches colors in dark mode.
        </div> */}

        </div>
        </div>
      </div>
    </>
  )
}

export default Main