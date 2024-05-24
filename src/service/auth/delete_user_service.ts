// import { categoryRepository } from "../../repositories/category_repository";

// export class DeleteCategoryService{

//     async execute(id:string){
        
//         if(!(await categoryRepository.findOne({ where: { id:id } }))){
//             return new Error("Category does not exists!");
//         }

//         await categoryRepository.delete(id);
//     }
// }