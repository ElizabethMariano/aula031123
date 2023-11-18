import Button from "../Btn/Button"
import Picture from "../Picture/Picture"
import Webdesign from "../../assets/webdesign-object2.webp"
import "./Banner.css"





function Banner() {
    return (
        <>
            <div className="BannerHome">
                <h3>Hi It´s me</h3>
                <h1>Elizabeth Mariano</h1>
                <h2>And I´m a Frontend Developer</h2>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum nemo dignissimos quidem rerum officia facilis,
                    officiis pariatur iste quod fugiat corrupti asperiores exercitationem
                    possimus. Suscipit, alias tempora. Similique, mollitia exercitationem?
                </h1>

                <Button type="button" className="btn-CV" text= "Download CV"/>
            </div>
            <div >
            <Picture src={Webdesign} alt="corporativo" />
            </div>

        </>
    )
}
export default Banner

