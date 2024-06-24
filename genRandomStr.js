let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-0987654321~`"

let charactersLength = characters.length;

for(let i = 0; i < 10; i++){
   let result = characters.charAt(Math.floor(Math.random() * charactersLength));
   console.log(result)
}
