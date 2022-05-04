import { useParams } from "react-router-dom";

const About = (props) =>{
    let {id, name} = useParams();
    console.warn(props);
    return(
        <>

            <h1>This is User {id} Component</h1>
            <h1>This is User {name} Component</h1>
        </>
    )
}

export default About;