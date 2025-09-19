import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const main = async () => {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Jishnu",
    //         email: "jishnu@gmail.com",
    //     },
    // });
    // console.log(user);

    // //Multiple user
    // const manyuser = await prisma.user.createMany({
    //     data:[
    //         { name : "Alice" , email: "alice@gmail.com"},
    //         { name : "Bob" , email: "bob@gmail.com"}
    //     ]
    // })
    // console.log(manyuser);

    //Get all users
    // const users = await prisma.user.findMany();
    // console.log(users);

    //Single user get
    // const users = await prisma.user.findUnique({
    //     where: {id : 2},
    // });
    // console.log(users);

    // const users = await prisma.user.findUnique({
    //     where: {email : "alice@gmail.com"},
    // });
    // console.log(users);

    // Update User
    // const updateduser = await prisma.user.update({
    //     where:{ id : 3},
    //     data: {name:"BobTheBuilder"},
    // })
    // console.log(updateduser);
    

    //Delete user
    // const deleteuser = await prisma.user.delete({
    //     where:{id : 3}
    // })
    // console.log(deleteuser)
    
    
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
      await prisma.$disconnect();
  });
