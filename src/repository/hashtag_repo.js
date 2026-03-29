const Hashtag=require('../models/hashtags.js');


class HashtagRepository{

    


    async create(data){

        try {
            
            const tag=await Hashtag.create(data)

            return tag
        } catch (error) {
            console.log(error);
            throw error;
            
        }

    }

    async bulkcreate(data){
    
    
        try {
            
            const tags=await Hashtag.insertMany(data);
            return tags;            
        } 
        
        
        
        catch (error) {
            console.log(error);
            
            throw error;


        }
    
    
    
    }

    async get(Id){
        try {
            
            const tag=await Hashtag.findById(Id);
            return tag


        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }



    async findByName(titleList){

        try {
            
            const tag=await Hashtag.find({
                title:titleList
            })


            return tag;


        }
        
        
        catch (error) {
        
            throw error;
        }



    }




   

    // async update(tweetId,data){

    //     try {
            
    //         const response=await Tweet.findByIdAndUpdate(tweetId,data,{new:true});
    //         return response;


    //     } catch (error) {
    //         throw error;
    //     }


    // }

    async destroy(Id){
        try {
            const response=await Hashtag.findByIdAndDelete(Id)

            return response;
        } catch (error) {
            throw error
        }
    }



    




}



module.exports=HashtagRepository