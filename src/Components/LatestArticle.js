import React,{useState ,useEffect } from 'react'
import HomeLeft from './HomeComponent/HomeLeft'
import LoadMore from './HomeComponent/LoadMore'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const LatestArticle = () => {

    const [content, setContent] = useState()
    const [loadMore , setLoadMore] = useState(false)
    const loadMoreHandler= ()=>{
        setLoadMore(!loadMore);
    }
     useEffect(()=>{
        axios.get("https://manglasahil-node-project7-backend.onrender.com/blog/api")
        .then(res =>setContent(res.data))
        .catch(err=>console.log(err))
      },[])

    const random = Math.floor(Math.random()*70) +1
    
  return (
    <div className='latestArticleMain'>
       <div className='leftdisp'>
        <div>
       <HomeLeft/>
        <LoadMore value ={loadMore} />
        
       
                    <div className="homeLoad" onClick={loadMoreHandler}>
                        

                       
                       { !loadMore ? <h3  >Load More</h3>:<h3 >Show Less</h3>}</div>
                       </div>
        <div className='imgdiv'>
        {
                       content && content.slice(random , random+1).map((e,index)=>{
                            return(
                                <div key={index} className="TS__Elements">
                                   <NavLink state={{id:e.id ,val:0, title: e.title}} to={"/content" }> <img className="img3" src={e.image} alt={e.title}/></NavLink>
                                    
                                    
                                </div>
                            )
                        })
                    }
        </div>
       </div>

        <div className="topStories__right">
            <div className="advertisement">
                       <img src='https://cdn.dribbble.com/users/5297140/screenshots/13995477/media/3769cfb75e2e53734862cc0a3bc1c732.gif' alt='gifs'/>
                                             </div>
                    <div>                    <h1 className="content__title topPost">Top Posts</h1>
                        
                    {
                           content&& content.slice(random , random+1).map((e,index)=>{
                                return(
                                    <div key={index} className="TP__first">
                                       <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"}> <img className="TP__firstImage" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__firstDescription">
                                      <div className="TPTitle">
                                      <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"} className="heading">  <div className="TP__firstTitle">{e.title}</div></NavLink>
                                          <div className='HomeCompFoot'>{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                      </div>
                                            <div className="TP__FirstNumber">1</div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    
                        
                       
                        
                        {
                            content&&content.slice(random+1 , random+5).map((e,index)=>{
                                return(
                                    <div key={index} className="TP__Elements">
                                       <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"}> <img className="TP__images" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__description">
                                        <div className="TPTitle second">
                                        <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"} className="heading">  <div className="TP__title ">{e.title}</div></NavLink>
                                          <div className='HomeCompFoot'>{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                        </div>
                                        </div>
                                        <div className="TP__numbers">{index+2}</div>
                                    </div>
                                )
                            })
                        }
                        </div>

                    
                    
                </div>
                
           
           
    </div>
  )
}

export default LatestArticle
