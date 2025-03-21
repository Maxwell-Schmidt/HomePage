import {useEffect,useState} from 'react';
import ReactMarkdown from 'react-markdown';

function FeaturedPage(){

    const [feature,setFeature] = useState('');

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Maxwell-Schmidt/HomeBarInventory/refs/heads/main/README.md')
        .then(res=>res.text())
        .then(text => setFeature(text))
        .catch(rejected => {
            console.log(rejected);
        });
    },[])
    
return (
    <div>
        <h1>Featured Project:</h1>
        <br></br>
        <div style={{backgroundColor:"white",border:""}}>
            <ReactMarkdown class="ReactMarkdown">{feature}</ReactMarkdown>
            <a href="https://github.com/Maxwell-Schmidt/HomeBarInventory" target="_blank" style={{fontSize: "1.5em", textDecoration:"none"}}>See more in the GitHub Repository</a>
        </div>
    </div>
    );
}

export default FeaturedPage;