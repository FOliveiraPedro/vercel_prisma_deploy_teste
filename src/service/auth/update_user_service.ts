// type CategoryUserRequest = {
//     id: string
//     name: string
// }

// export class UpdateUserService{
//     async execute({id, name}: CategoryUserRequest){
//         const type = await authRepository.findOne({where: { id:id}})

//         if(!type){
//             return new Error("User does not exists!");
//         }

//         type.name = name? name: type.name;

//         await authRepository.save(type);

//         return type;

//     }
// }