"user strict";



const output ={
    home:(req,res)=>{
        res.render("home/index");
    },
    login:(req,res)=>{
        res.render("home/login");
    },
}

// const home = (req, res)=>{
//     res.render("home/index");
// }; 

// const login = (req, res)=>{
//     res.render("home/login");
// };
const users={
    id:["hyesoo","아모라","닭강정"],
    psword:["1234","1234","12111"]
}

const process={
    login:(req,res)=>{
       const id=req.body.id,
        psword=req.body.psword;
        // console.log(id,psword);       

    if(users.id.includes(id)){
        const idx = users.id.indexOf(id);
        if(users.psword[idx]===psword){
            return res.json({
                success: true,
            });
        }
    }
    return res.json({
        success:false,
        msg: "로그인 실패",
    });
    },
};

module.exports = {
    output,
    process
};