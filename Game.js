class Game {
constuctor(){}

getState(){
    var gameRef=database.ref('gameState');
    gameRef.on("value",function(data){
        gamestate=data.val();
    })
}
Update(state){
    database.ref('/').update({
        gameState:state
    });
}

start(){
    if(gameState===0){
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
}
}