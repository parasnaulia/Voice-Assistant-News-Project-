
/*import React from 'react';
//'Here we use material ui to design our user interface so that our website become reponsive and good lookin
//so matereial uiu is a framework of react to make website reponsive and good looking. it also provides animations and good text 

import {Grid,Grow,Typography, colors} from '@material-ui/core';
import NewsCard from "../NewsCard/NewsCard.js"
import useStyles from './style.js';

const infoCards=[{
    color:'#00838f',title:'Latest News ',text:'Give me the latest news'},
    {color:'#1565c0',title:'News by catagories',info:'Business,Gerneral,Health',text:'Give me the news'},
{color:'#4527a0',title:'News by Terms',info:'Bitcoin,playstaion 5,Smartphones,Donald trump....',text:'What\s up with playstations'},
{color:'#4527a0',title:'News by Sources',info:'CNN,Wired,BBC News,Time,IGN,Buzzfeed,ABC News....',text:'Give me the news from'},
];

const NewsCards=({articles})=>
{

    const classes=useStyles();
    if(!articles.length)
    {
        return( <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {infoCards.map((infoCard)=>(
            <Grid item xs={12} sm={6} lg={3} md={4} className={classes.infoCard}>
                <div className={classes.card} style={{backgroundColor:infoCard.color}}>
                    <Typography variant='h5'>{infoCard.title}</Typography>
                    {infoCard.info? 
                    (<Typography variant='h6'> 
                    <strong>
                        {infoCard.title.split(' ')[2]}:
                    </strong>
                   <br/>
                    {infoCard.info}
                    
                    </Typography>):null}
                    <Typography varient="h6"> <br/>Try saying: <br/><i>{infoCard.text}</i>
                    </Typography>
                </div>

                </Grid>
        ))}
        </Grid>
        </Grow>)
    };
    return (
    <Grow in>
        <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {articles.map((article,i)=>(
            <Grid item xs={12} sm={6} md={4} lg={3} style={{display:"flex"}}>
    <NewsCard article={article} i={i}/>
    </Grid>
    ))}
        </Grid>
    </Grow>)
}
export default NewsCards;*/
import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from "../NewsCard/NewsCard.js";
import useStyles from './style.js';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
/*import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from "../NewsCard/NewsCard.js";
import useStyles from './style.js';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;*/
