// import { hash } from 'bcryptjs'

// type RegisterRequest = {
//     email: string,
//     name: string,
//     password: string,
// }

// export class RegisterService {

//     async execute({ email, name, password }: RegisterRequest): Promise< User | Error >  {

//         const response = await authRepository.findOne({ where: { email:email } });
//         if(response) {
//             return new Error("Email already in use");
//         }

//         const hashedPassword = await hash(password,8);
//         const user = authRepository.create({
//             email: email,
//             name: name,
//             password: hashedPassword
//         })
        
//         await authRepository.save(user);
//         return user;
//     }
// }