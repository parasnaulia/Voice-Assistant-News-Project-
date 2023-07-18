import React, {useEffect,useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from "./Components/NewsCards/NewsCards.js";
import useStyles from './style.js';
import wordsToNumbers from 'words-to-numbers';
const alankey="6c25768c5d8a499a871774cc80fa9af52e956eca572e1d8b807a3e2338fdd0dc/stage";
//const alankey="6c25768c5d8a499a871774cc80fa9af52e956eca572e1d8b807a3e2338fdd0dc/stage";

const App=()=>
{
    const [newsArticles,setNewsArticles]=useState([]);
    const [activeArticle,setActiveArticle]=useState(-1);
    const classes=useStyles();
   // const [isOpen, setIsOpen] = useState(false);
   useEffect(()=>{
        alanBtn({
            key:alankey,
            onCommand:({command,articles,number})=>{
                if(command ==='newsHeadlines'){
                   setNewsArticles(articles);
              //console.log(articles);
              setActiveArticle(-1);
                }
                else if(command==='highlight')
                {
                    setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
                }
                else if(command==='open')
                {
                    const parsedNumber=number.length > 2 ? wordsToNumbers(number,{fuzzy:true}):number;
                   // const article=articles[parsedNumber-1];
                   window.open(articles[parsedNumber-1].url,'_blank');
                }
            }
        })
  },[])
//   useEffect(() => {
//     alanBtn({
//       key: alankey,
//       onCommand: ({ command, articles, number }) => {
//         if (command === 'newHeadlines') {
//           setNewsArticles(articles);
//           setActiveArticle(-1);
//         } else if (command === 'instructions') {
//           setIsOpen(true);
//         } else if (command === 'highlight') {
//           setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
//         } else if (command === 'open') {
//           const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
//           const article = articles[parsedNumber - 1];

//           if (parsedNumber > 20) { 
//             alanBtn().playText('Only numbers from 1 to 20 can be choosen. Please try that again...');
//           } else if (article) {
//             window.open(article.url, '_blank');
//             alanBtn().playText('Opening...');
//           } else {
//             alanBtn().playText('Please try that again...');
//           }
//         }
//       },
//     });
//   }, []);

    return(
    <div>
        <div className={classes.logoContainer}>
            <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" className='classes.alanLogo' alt="Alan Logo"/>
        </div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>);
}
export default App;


