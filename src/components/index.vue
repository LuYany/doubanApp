<!--<meta charset="utf-8">-->
<templete>
	<div id="content" v-for="(val,index)in arr">
			<div class="items">
	            <div class="itemL">
	                    申请日期:
	            </div>
            <div class="itemVal sqDate">{{val.list.sqDate}}</div>
            <div class="clear"></div>
            </div>
            <div class="items">
                <div class="itemL">
                    申请人:
                </div>
                <div class="itemVal sqPerson">
                    {{val.list.sqPerson}}
                </div>
                <div class="clear"></div>
            </div>
            <div class="items">
                <div class="itemL">
                    空包编号:
                </div>
                <div class="itemVal kbNum"></div>
                <div class="clear"></div>
            </div>
            <div class="items">
                <div class="itemL">
                    部门:
                </div>
                <div class="itemVal depart">
                    
                </div>
                <div class="clear"></div>
            </div>
            <div class="items">
                <div class="itemL">
                    岗位:
                </div>
                <div class="itemVal job"></div>
                <div class="clear"></div>
            </div>
            <div class="items">
                <div class="itemL">
                    起始日期:
                </div>
                <div class="itemVal startDate"></div>
                <div class="clear"></div>
            </div>
            <div class="items">
                <div class="itemL">
                    结束日期:
                </div>
                <div class="itemVal endDate"></div>
                <div class="clear"></div>
            </div>
            <div class="items">
                <div class="itemL">
                    考勤类型:
                </div>
                <div class="itemVal kqType"></div>
                <div class="clear"></div>
            </div>
            <div class="items">
                <div class="itemL">
                    请假原因:
                </div>
                <div class="itemVal"></div>
                <div class="clear"></div>
            </div>
            <div class="items">
                <div class="itemL">
                    提交人:
                </div>
                <div class="itemVal submitPerson"></div>
                <div class="clear"></div>
            </div>
            <div class="items">
                <div class="itemL">
                    扣点方式:
                </div>
                <div class="itemVal kouVal" style="width: 70%;"></div>
                <div class="clear"></div>
            </div>
	</div>
</templete>

<script>
	export default {
		created:function(){
//			this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then(function(data){
//				console.log(data);
//			})
		}
	}
	
	
</script>

<style scoped>
	#header{
		font-size: 1rem;
		font-family: 微软雅黑;
	}
	.clear {
    clear: both;
}
.items {
    padding: .8em .8em;
    border-bottom: 1px solid #ddd;
    font-size: .9em;
}
.itemL {
    display: inline-block;
    float: left;
    width: 25%;
    color: #666;
    font-size: .9rem;
}
.itemVal {
    float: left;
    width: 66%;
    font-size: .9rem;
    color: #000;
    font-family: 微软雅黑;
}

.type {
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    border-bottom: 1px solid #ddd;
}
</style>