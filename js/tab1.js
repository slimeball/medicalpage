//通过数组表示多个tab属性
var tabs=[
{id:'tab00',size:3,over:'on',out:'off'},//id:tabId号,size表示tab数量,over为选中样式,out表示不选中样式
]

var Tab={
   change:function(index,tabId,menu){//切换
        var tab=tabs[index];
        for(var i=0;i<tab.size;i++){
            if(document.getElementById(tab.id+i)!=null){
                document.getElementById(tab.id+i).style.display="none";//将所有tab变隐藏
            }
            if(document.getElementById(tabId)!=null){
                document.getElementById(tabId).style.display="";//将当前选中显示
            }
            if(document.getElementById("menu"+index+i)!=null){
                document.getElementById("menu"+index+i).className=tab.out;//将所有menu变为不选中
            }
            //将所有子菜单隐藏
        }
         if(document.getElementById("menu"+index+menu)!=null) {
                 document.getElementById("menu"+index+menu).className=tab.over;//设置选择样式
          }
          //显示子菜单
          
    }
    
}

