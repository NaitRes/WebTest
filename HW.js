function Click(){

    var img_src;
    img_src =document.getElementById("Img1").src;
    var Text = document.getElementById("Input").value;
    var View = "<li>"+Text+"</li>";

    if (Text.includes("轎車")){
        View = "<li class='Red'>"+Text+"</li>";
        View = "<li class='Red'>"+Text.replace("轎車","轎車 is good")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/fd3052b825dd7dc2d4f78043ecd94b57f9cad36a.png";
    }

    if (Text.includes("跑車")){
        View = "<li class='Green'>"+Text+"</li>";
        View = "<li class='Green'>"+Text.replace("跑車","跑車 is good")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/50eba0f85c4e9a039be078e7de0b10acc7323264.png";
    }

    if (Text.includes("轎跑")){
        View = "<li class='Blue'>"+Text+"</li>";
        View = "<li class='Blue'>"+Text.replace("轎跑","轎跑 is soso")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/86a8f44da4fc7f15b98716ef69d6b794f15d15e7.png";
    }

    if (Text.includes("公車")){
        View = "<li class='Yellow'>"+Text+"</li>";
        View = "<li class='Yellow'>"+Text.replace("公車","公車 is okay")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/8f00577736d4462a345fa72039714857a05a940f.png";
    }

    if (Text.includes("客運")){
        View = "<li class='Purple'>"+Text+"</li>";
        View = "<li class='Purple'>"+Text.replace("客運","客運 is holy")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/f72139f9f5be1dbfbfa0b6c52506790b155ece4e.png";
    }

    if (Text.includes("貨車")){
        View = "<li class='Aoi'>"+Text+"</li>";
        View = "<li class='Aoi'>"+Text.replace("貨車","貨車 is okay")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2c8cf4e6491c28f45333dab4292f1a65c0a5cf8c.png";
    }

    if (Text.includes("汽車")){
        View = "<li class='Gray'>"+Text+"</li>";
        View = "<li class='Gray'>"+Text.replace("汽車","汽車 is good")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/80d8d4e084e235c529592acac6c91d53bbc3b621.png";
    }

    if (Text.includes("火車")){
        View = "<li class='Orange'>"+Text+"</li>";
        View = "<li class='Orange'>"+Text.replace("火車","火車 is nono")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/88d7d07cea7353587f9ff8da6fa844bdbc5ba1e6.png";
    }

    if (Text.includes("高鐵")){
        View = "<li class='Black'>"+Text+"</li>";
        View = "<li class='Black'>"+Text.replace("高鐵","高鐵 is nono")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/53b743e93280fd3993d12bc4dbcce5e43e9402e6.png";
    }

    if (Text.includes("卡車")){
        View = "<li class='Pink'>"+Text+"</li>";
        View = "<li class='Pink'>"+Text.replace("卡車","卡車 is holy")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/163c4755d05b84456e75c3f7ff14a5d80559a96d.png";
    }

    if (Text.includes("超跑")){
        View = "<li class='InkGreen'>"+Text+"</li>";
        View = "<li class='InkGreen'>"+Text.replace("超跑","超跑 is good")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/48118fd19743ec8e657bba40e25b47ae8c8ed387.png";
    }

    if (Text.includes("機車")){
        View = "<li class='SmallGreen'>"+Text+"</li>";
        View = "<li class='SmallGreen'>"+Text.replace("機車","機車 is soso")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/3b405b659d284efd18f8d36bf43f2ecfcb9f8cf1.png";
    }

    if (Text.includes("郵輪")){
        View = "<li class='SmallPurple'>"+Text+"</li>";
        View = "<li class='SmallPurple'>"+Text.replace("郵輪","郵輪 is nono")+"</li>";
        document.getElementById("Img1").src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/21e43027faefb284113b08dbc683462f29530e15.png";
    }

    // 添加清單項目
    document.getElementById("List").innerHTML += View;

    // 清空輸入框
    document.getElementById("Input").value = "";

    // 設定延遲 3 秒後恢復原狀
    setTimeout(function() {

        document.getElementById("Img1").src=img_src;
    }, 900);  // 3000 毫秒 = 3 秒
}