class CrudRepository{


    constructor(model){
        this.model=model;
    }



    async create(data){

        try {
            const response=await this.model.create(data);
            return response;


        } catch (error) {
            
            console.log(error);
            throw error;
            


        }



    }


    async get(modelId){
        try {
            
            const response=await this.model.findById(modelId);
            return response;


        } catch (error) {

            throw error;

        }




    }


    async destroy(modelId){

        try {
            
            const response=await this.model.findByIdAndDelete(modelId);
            return response;



        } catch (error) {
            
            throw error;

        }


    }



    async update(modelId,data){
        try {
            
            const response=await this.model.findByIdAndUpdate(modelId,data,{new:true});

            return response;


        } catch (error) {
            throw error;
        }
    }


    async getAll(){
        try {
            
            const response=await this.model.find();
            return response;


        } catch (error) {
            throw error;
        }
    }





}



export default CrudRepository;