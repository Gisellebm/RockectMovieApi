const UserCreateService = require("./userCreateService")
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory")

it("user should be created", async () => {
   const user = {
      name: "User Test",
      email: "user@example.com", 
      password: "123"
   } 

   const userRepositoryInMemory = new UserRepositoryInMemory();
   const userCreateService = new UserCreateService(userRepositoryInMemory);
   const userCreated = await userCreateService.execute(user)

   expect(userCreated).toHaveProperty("id")
})