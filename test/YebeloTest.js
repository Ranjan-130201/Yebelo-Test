const Yebelo= artifacts.require("Yebelo");
const TestToken= artifacts.require("TestToken");

contract ('Yebelo', (account)=>{
    let yebelo;
    let testToken;
    const TokenAddress="0x3CBd914390D17c8cdD7f4437De0AE51508046392";
    before(async()=>{
        yebelo = await Yebelo.deployed();
        testToken = await TestToken.deployed();
        await testToken.mint();
        await testToken.mint();
    });
    describe('getToken',()=>{
        it('should add tokens to slab0',async()=>{
            await testToken.transfer(yebelo.address,20);
            const bal= await testToken.balanceOf(yebelo.address);
            console.log(bal.toNumber());
            await yebelo.getTokens(TokenAddress);
            const user= await Promise.resolve(yebelo.user(account[0]));
            for(let key in user) {
                console.log(key + ":", user[key].toString()); 
            }
        })
        it('should add tokens to slab0 and slab1',async()=>{
            await testToken.transfer(yebelo.address,130);
            const bal= await testToken.balanceOf(yebelo.address);
            console.log(bal.toNumber());
            await yebelo.getTokens(TokenAddress);
            const user= await Promise.resolve(yebelo.user(account[0]));
            for(let key in user) {
                console.log(key + ":", user[key].toString()); 
            }
        })
        it('should add tokens to slab0 and slab1 and slab2',async()=>{
            await testToken.transfer(yebelo.address,220);
            const bal= await testToken.balanceOf(yebelo.address);
            console.log(bal.toNumber());
            await yebelo.getTokens(TokenAddress);
            const user= await Promise.resolve(yebelo.user(account[0]));
            for(let key in user) {
                console.log(key + ":", user[key].toString()); 
            }
        })
        it('should add tokens to slab0 and slab1 and slab2 and slab3',async()=>{
            await testToken.transfer(yebelo.address,500);
            const bal= await testToken.balanceOf(yebelo.address);
            console.log(bal.toNumber());
            await yebelo.getTokens(TokenAddress);
            const user= await Promise.resolve(yebelo.user(account[0]));
            for(let key in user) {
                console.log(key + ":", user[key].toString()); 
            }
        })
        it('should add tokens to slab0 and slab1 and slab2 and slab3 and slab4',async()=>{
            await testToken.transfer(yebelo.address,300);
            const bal= await testToken.balanceOf(yebelo.address);
            console.log(bal.toNumber());
            await yebelo.getTokens(TokenAddress);
            const user= await Promise.resolve(yebelo.user(account[0]));
            for(let key in user) {
                console.log(key + ":", user[key].toString()); 
            }
        })
        
    });
})