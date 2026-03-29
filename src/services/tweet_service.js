
import {TweetRepository, HashtagRepository} from '../repository/index.js'
class TweetService{

    constructor(){
        this.tweetRepository= new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }

    
    async createTweet(data){

       try {
         const content=data.content;
 
 
         let tags=content.match(/#([a-zA-Z0-9_]+)/g); // regex that matches hashtags and extract them from content
 
         tags=tags.map((element)=>
             element.substring(1) // for removing #
         )
 
 
 
         const tweet=await this.tweetRepository.create(data);


        
         
         let alreadyPresentTag= await this.hashtagRepository.findByName(tags);
           

        let titleOfPresentTags=alreadyPresentTag.map((tag)=> tag.title);

        let newTag=tags.filter(tag=> !titleOfPresentTags.includes(tag));
 
        newTag=newTag.map(tag=>{
            return {title:tag, tweets:[tweet.id]}
        })
        
        await this.hashtagRepository.bulkcreate(newTag);   


        //for already present hashtags we need to update the array by pushing there tweet id 
        
        alreadyPresentTag.forEach( (tag)=>{
             tag.tweets.push(tweet.id);
             tag.save()
        })









         
         return tweet;
       } 
       
       
       catch (error) {
       
            throw error;

       }

         


    }



}


export default TweetService