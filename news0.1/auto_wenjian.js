/**
 * Created by liuwenju on 2016/6/18.
 */
function Wenjian( file_name, file_number, file_author, content ){

    this.file_name = file_name;
    this.file_number = file_number;
    this.file_author = file_author;
    this.content = content;
    this.Wenjian_html = '';

};


//对原始数据内容进行固定格式的分割。形成每一条数据内容。
Wenjian.prototype.ready_data = function(){

    var regular = /.*?@@@/g;
    //通过空格进行分割各个字段
    if (this.content.match(/<b>/g)){

        this.content = this.content.replace(/<b>/g, '<strong>');
        this.content = this.content.replace(/<\/b>/g, '</strong>');
    }

    if (this.content.match(/<c>/g)){

        this.content = this.content.replace(/<c>/g, '<span style="color:red">');
        this.content = this.content.replace(/<\/c>/g, '</span>');

    }

   if (this.content.match(/<h>/g)){

        this.content = this.content.replace(/<h>/g, '<p style="color:#00B050; line-height: 3em;font-weight:bold; text-align: center">');
        this.content = this.content.replace(/<\/h>/g, '</p>');

    }


    var Wenjian_lists = this.content.match(regular);

    console.log(Wenjian_lists.length);

    for ( var i = 0; i < Wenjian_lists.length; i++) {

        Wenjian_lists[i] = Wenjian_lists[i].replace(/@{3}/g, "");

    }

    return Wenjian_lists;
};


//生成需要的html代码。
Wenjian.prototype.auto_html_time = function( arg ){

    var html;
    if ( arg.match( /第.*天?/ ) !==  null ){

        html = '<section style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">盖邦陪学&nbsp;&nbsp;&nbsp;&nbsp;' + arg + '</section>';

    }else{

    }


    return html;
};

//生成需要的html代码。盖邦解读
Wenjian.prototype.auto_html_guide = function( arg ){

    var html;
    if ( arg.match( /盖邦解读?/ )!= null){
        html = '<p style=" text-align: center; line-height: 1em;"> <span style="font-size: 16px; color: #BFBFBF; font-family: 微软雅黑;">✎<br/></span></p> <p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">盖邦解读 </p>';

        html += this.auto_html_icon(0);

    }else{

        html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-indent: 2em; line-height: 2em;"><span style="font-size: 16px; color: #7F7F7F; font-family: 微软雅黑;">' + arg + '</span></p>';

    }

    console.log(html);
    return html;
};
//生成需要的html代码。优质公众号
Wenjian.prototype.auto_html_gonghao = function( arg ){

    var html;

        html = '<p style=" text-align: center; line-height: 3em;"> <span style="font-size: 16px; color: #BFBFBF; font-family: 微软雅黑;">♕<br/></span></p> <section style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">优质公众号 </section>';

        html += this.auto_html_icon(0);
    //    公众号：1
        html += '<p style="line-height: 2em; text-align: center;"><img data-s="300,640" data-type="jpeg" src="https://mmbiz.qlogo.cn/mmbiz/RHNE9AcLP6Jz4kXcLibtEpUI0cibVibRECSzjyxPId4cysqibD4yMVibicTibvzmThqtduSCnpCBYvwiawrVRdxbLa9frQ/0?wx_fmt=jpeg" data-ratio="1" data-w="344"/><span style="font-size: 14px; color: #888888;"><br/>关注赞助商，关注坚持读。</span></p>';
    //    公众号：2
        html += '<p style="line-height: 2em; text-align: center;"><img data-s="300,640" data-type="png" src="https://mmbiz.qlogo.cn/mmbiz/RHNE9AcLP6IbdINhbPcbXjQ72T9mSics6ibkP1UqcZMa1Lu8c4zSuruwSfRiceXWFjV44W6j6q1RgYYmnIxX3iapKQ/0?wx_fmt=png" data-ratio="1.6493506493506493" data-w="385"/><br/><span style="color: #888888;">做一个有态度的建筑人，建筑改变生活！</span></p>';


    console.log(html);
    return html;
};


//生成需要的html代码。三级条款4.5.1
Wenjian.prototype.auto_html_three = function( arg ){

    var html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-indent: 2em; line-height: 2em;"><span style="color: #000000; font-family: 微软雅黑;font-size: 16px;">'+ arg +'</span></p>';
    console.log(html);

    return html;
};




//生成需要的html代码。友情赞助
Wenjian.prototype.auto_html_bussiness = function( arg ){
    var html;

    if( arg.match( /友情赞助/ )!= null ){

        html = this.auto_html_icon(7);
        html += '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">友情赞助</p>';

        html += this.auto_html_icon(0);
        html += '<p style="white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; text-indent: 2em; line-height: 2em;">    <span style="color: #7F7F7F; font-size: 14px;">加实战技能<span style="color: #FF0000;">QQ群：470965059</span>，注明来自<span style="color: #FF0000;">微文速递公众号</span>就免费赠送《房建施工实战系列课程》系列课程中<span style="color: #FF0000;">价值348元</span>的课程一套。</span></p><br/><p style="white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 2em; text-align: center;">    <a href="http://mp.weixin.qq.com/s?__biz=MzIyMzAxMDQ3OQ==&mid=2651648469&idx=1&sn=90f3124b6e701839f685e07dce551612&scene=21#wechat_redirect" target="_blank" data_ue_src="http://mp.weixin.qq.com/s?__biz=MzIyMzAxMDQ3OQ==&amp;mid=2651648469&amp;idx=1&amp;sn=90f3124b6e701839f685e07dce551612&amp;scene=21#wechat_redirect" style="color: rgb(96, 127, 166); text-decoration: none;">亲，马上提高房建施工实战技能！</a></p> <br/>';

    }else{

        html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-indent: 2em; line-height: 2em;"><span style="color: #7F7F7F; font-family: 微软雅黑;font-size: 16px;">'+ arg +'</span></p>';

    }


    console.log(html);

    return html;
};


//生成需要的html代码。标题
Wenjian.prototype.auto_html_title = function( arg ){


    var html = '<p style="padding: 10px; font-family: 微软雅黑; text-align: center; font-size: 24px;color: rgb(255, 255, 255); line-height: 2em; background-color: rgb(0, 176, 80);">@  微文速递，为您速递价值！</p>';

    html += this.auto_html_icon(0);
    html += '<p style="text-align: center;"><span style="font-size: 20px; color: #00B050;font-family: 微软雅黑;line-height: 1em;">'+ this.file_author+'</span></p>';
    html += '<p style="text-align: center;"><strong><span style="font-size: 24px; color: #00B050;font-family: 微软雅黑;line-height: 2em;">《'+ this.file_name+'》</span></strong></p>';

    html += '<p style="text-align: center;"><span style="font-size: 14px; color:darkgrey;font-family: 微软雅黑;line-height: 2em;">( '+ this.file_number + ' )</span></p>';



    console.log(html);
    return html;

};


//生成需要的html代码。相关条款
Wenjian.prototype.auto_html_other = function( arg ){
    var html;
    if( arg.match( /相关条款?/ )!= null ){
        html = this.auto_html_icon(5);
        html += '<section style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">相关条款 </section>';
        html += this.auto_html_icon(0);
    }else if(arg.match( /摘[录自]?/ )!= null){

        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  text-indent: 2em; line-height: 3em; text-align: right;"><span style="font-size: 14px; color: #00B050; font-family: 微软雅黑;">'+ arg + '</span></p>';

    }else{

        var html = '<p style="margin-top: 10px; margin-bottom: 10px;  font-size: 16px;color: #7F7F7F; font-family: 微软雅黑; text-indent: 2em; line-height: 2em;"> '+ arg + '</p>';

    }
    console.log(html);
    return html;

};

//生成需要的html代码。其他内容
Wenjian.prototype.auto_html_else = function( arg ){
var html;
if(arg.match(/<l>/g)){
    html = '<p style="margin-top: 10px;text-align: left; line-height: 2em; margin-bottom: 10px;font-family: 微软雅黑;font-size: 16px; color: #262626;">'+ arg +'</p>';

}else if(arg.match(/<r>/g)){
    html = '<p style="margin-top: 10px;text-align: right; line-height: 2em; margin-bottom: 10px;font-family: 微软雅黑;font-size: 16px; color: #262626;">'+ arg +'</p>';
}else if(arg.match(/<m>/g)){
    html = '<p style="margin-top: 10px;text-align: center; line-height: 2em; margin-bottom: 10px;font-family: 微软雅黑;font-size: 16px; color: #262626;">'+ arg +'</p>';
}else{

    html = '<p style="margin-top: 10px;text-align: left; line-height: 2em; margin-bottom: 10px;font-family: 微软雅黑;font-size: 16px; text-indent: 2em; color: #262626;">'+ arg +'</p>';
}




    console.log(html);
    return html;

};
//生成需要的html代码。一级标题 4.5
Wenjian.prototype.auto_html_one = function( arg ){

    var html = '<p style="margin-top: 10px; margin-bottom: 10px; text-align: center; line-height: 2em;"><span style="color: #00B050; font-family: 微软雅黑;font-size: 20px;"><strong>'+ arg +'</strong></span></p>';
    console.log(html);

    return html;
};
//生成需要的html代码。继续
Wenjian.prototype.auto_html_next = function(arg){

    var html;
    if (arg.match( /^继续?/ )!== null){

        html = '<section style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;">'   + arg +   ' </section>';

       html += this.auto_html_icon(0);
    }else if(arg.match(/<l>/g)){
        html = '<p style="margin-top: 10px;text-align: left; line-height: 2em; margin-bottom: 10px;font-family: 微软雅黑;font-size: 16px; color: #262626;">'+ arg +'</p>';

    }else if(arg.match(/<r>/g)){
        html = '<p style="margin-top: 10px;text-align: right; line-height: 2em; margin-bottom: 10px;font-family: 微软雅黑;font-size: 16px; color: #262626;">'+ arg +'</p>';
    }else if(arg.match(/<m>/g)){
        html = '<p style="margin-top: 10px;text-align: center; line-height: 2em; margin-bottom: 10px;font-family: 微软雅黑;font-size: 16px; color: #262626;">'+ arg +'</p>';
    }else{

        html = '<p style="margin-top: 10px; margin-bottom: 10px; text-indent: 2em; text-align:; line-height: 2em;"><span style="color: #262626; font-family: 微软雅黑;font-size: 16px;">'+ arg +'</span></p>';

    }

    console.log(html);

    return html;
};


//生成需要的html代码。图标
Wenjian.prototype.auto_html_icon = function( arg ){

    var html;
    switch ( arg )
    {
        case 0:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 14px;">▼</span></p>';
            break;
        case 1:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 20px;">◔</span></p>';
            break;
        case 2:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">☰</span></p>';

            break;
        case 3:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">✎</span></p>';

            break;
        case 4:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">☟</span></p>';

            break;
        case 5:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">✄</span></p>';

            break;
        case 6:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">❖</span></p>';

            break;
        case 7:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">☎</span></p>';

            break;
    }

    console.log(html);

    return html;
};


//自动生成陪学微信的计算逻辑。
Wenjian.prototype.auto_Wenjian = function( Wenjian_lists ){

    this.Wenjian_html += this.auto_html_title();
    var i = 0;
    //对微信数组中的内容进行遍历。
    for (i = 0; i < Wenjian_lists.length; i){

        var j = 0;



        if( Wenjian_lists[i].match( /\d+\.\d+\.\d+\s+/ ) !== null){


            j = i;

            while (Wenjian_lists[j].match( /检查数量?/ ) == null  && Wenjian_lists[j].match( /继续?/ ) == null  && Wenjian_lists[j].match( /盖邦解读?/ ) == null && Wenjian_lists[j].match( /相关条款?/ ) == null  && Wenjian_lists[j].match( /友情赞助?/ ) == null){

                this.Wenjian_html += this.auto_html_three(Wenjian_lists[j]);

                j++;
                if (Wenjian_lists[j] == undefined){

                    break;

                }

            }

            i = j;

        }else if( Wenjian_lists[i].match( /盖邦解读?/ ) !== null ){

            j = i ;


            while ( Wenjian_lists[j].match( /\d+\.\d+\s/ ) == null && Wenjian_lists[j].match( /继续/ ) == null && Wenjian_lists[j].match( /友情赞助/ ) == null && Wenjian_lists[j].match( /相关条款/ ) == null &&  Wenjian_lists[j].match( /优质公众号?/ ) == null ){

                this.Wenjian_html += this.auto_html_guide( Wenjian_lists[j] );
                console.log('盖邦解读' + Wenjian_lists[j]);
                j++;
                if (Wenjian_lists[j] == undefined){

                    break;

                }

            }
            i = j;

        }else if( Wenjian_lists[i].match( /相关条款?/ ) !== null ){

            j = i;
            while ( Wenjian_lists[j].match( /继续/ ) == null && Wenjian_lists[j].match( /友情赞助/ ) == null && Wenjian_lists[j].match( /盖邦解读/ ) == null &&  Wenjian_lists[j].match( /优质公众号?/ ) == null){

                this.Wenjian_html += this.auto_html_other( Wenjian_lists[j] );
                j++;
                if (Wenjian_lists[j] == undefined){

                    break;

                }
            }
            i = j;

        }else if( Wenjian_lists[i].match( /友情赞助?/ ) !== null ){

            j = i;
            while ( Wenjian_lists[j] !== undefined ){
                console.log(Wenjian_lists[j]);
                this.Wenjian_html += this.auto_html_bussiness( Wenjian_lists[j] );
                j++;

            }



            i = j;

        }else if( Wenjian_lists[i].match( /^继续?/ ) !== null   ){

            j = i;
            this.Wenjian_html += this.auto_html_icon(4);
            while ( Wenjian_lists[j].match( /\d+\s/ ) == null &&  Wenjian_lists[j].match( /\d+\.\d+\.\d+\s/ ) == null &&  Wenjian_lists[j].match( /盖邦解读?/ ) == null  &&  Wenjian_lists[j].match( /相关条款?/ ) == null &&  Wenjian_lists[j].match( /友情赞助?/ ) == null &&  Wenjian_lists[j].match( /优质公众号?/ ) == null ){


                console.log("继续" + Wenjian_lists[j]);
                this.Wenjian_html += this.auto_html_next( Wenjian_lists[j] );
                j++;
                if (Wenjian_lists[j] == undefined){

                    break;

                }
            }

            i = j;
        }else if( Wenjian_lists[i].match( /第.*天?/ ) !== null ){

            j = i;
            this.Wenjian_html += this.auto_html_icon(1);
            while (Wenjian_lists[j].match( /\d+\.\d+\s/ ) == null &&  Wenjian_lists[j].match( /主控项目?/ ) == null &&  Wenjian_lists[j].match( /一般项目?/ ) == null && Wenjian_lists[j].match( /\d+\.\d+\.\d+\s?/ ) == null){
                                this.Wenjian_html += this.auto_html_time( Wenjian_lists[j] );
                j++;

            }

            this.Wenjian_html += this.auto_html_icon(0);
            i = j;
        }else if (Wenjian_lists[i].match( /主控项目?/ ) !== null){


            this.Wenjian_html += this.auto_html_one(Wenjian_lists[i]);
            i = i + 1;




        }else if (Wenjian_lists[i].match( /优质公众号/ ) !== null){


            this.Wenjian_html += this.auto_html_gonghao(Wenjian_lists[i]);
            i = i + 1;




        }else{

            this.Wenjian_html += this.auto_html_else(Wenjian_lists[i]);

            i++;
        }


    };



};


