define(["mui"], function(mui) {

var big=document.querySelector('.big');
var xg=document.querySelector('.xg');//修改
	function init() {
		mui.init();
		ajaxs();
		add();
		
	}

	function ajaxs() {
		mui.ajax('/api/del/', {
		success: function(rs) {
			   
			   if(rs.code===1){
				   render(rs.data)
			   }
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				console.log(type);
			}
		});

	}
//渲染
function render(data){
   big.innerHTML+=data.map(function(v,i){
		return `<ul>
					<li>
						<p>${v.name}</p>
						<p>${v.address}</p>
						<p><input type="checkbox" >设为默认样式 <span class="sc" data-id="${v._id}">删除</span><span class="xg" data-id1="${v._id}">修改</span></p>
					</li>
						
				</ul>`
	}).join('');
}

function add(){
	mui('.big').on('tap','li',function(){
		
		var sc=this.getAttribute('data-id');
		mui.ajax('/api/sc/', {
// 			data:{
// 				_id:sc
// 			},
			success: function(rs) {
			   
			   if(rs.code===1){
				   render(rs.data)
			   }
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				console.log(type);
			}
		});
	})
}


    document.getElementById("promptBtn").addEventListener('tap', function(e) {
    	e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
    	var btnArray = ['取消', '确定'];
    	mui.prompt('确定要删除么：', '性能好', 'Hello MUI', btnArray, function(e) {
    		if (e.index == 1) {
    			info.innerText = '谢谢你的评语：' + e.value;
    		} else {
    			info.innerText = '你点了取消按钮';
    		}
    	})
    });


	init();


})
