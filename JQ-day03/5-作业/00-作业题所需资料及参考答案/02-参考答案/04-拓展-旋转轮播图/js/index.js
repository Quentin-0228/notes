/**
 * Created by Lenovo on 2017/11/23.
 */
$(window).load(function () {
        //��תľ���ԭ��ÿ������һ����ʽ;�����/�Ҳఴť��ʱ��
        //              �������еĵ�/���һ����ӵ��������ǰ��/����;
    //����1: ҳ����ص�ʱ��ÿ��li��ǩ����һ����ʽ;(��������ʾ���ƿ�����)
    //����2: ����Ҳఴť��ɾ�����������һ������ӵ��������ǰ��;
    //����3: �����ఴť��ɾ�������е�һ������ӵ�����������;


    var arrOfJson = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity: 0.2,
            "z-index":2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity: 0.8,
            "z-index":3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity: 1,
            "z-index":4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:0.8,
            "z-index":3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity: 0.2,
            "z-index":2
        }
    ];

    //������������������
    var bool = true;


    //����1: ҳ����ص�ʱ��ÿ��li��ǩ����һ����ʽ;(��������ʾ���ƿ�����)
        //��ÿ�����ӻ������ƶ���Ŀ��λ��
    $("#slide li").each(function (index,ele) {
        //bug: �㼶û�е�һʱ�䵽��;
        $(ele).css("z-index",arrOfJson[index]["z-index"])
        $(ele).animate(arrOfJson[index],1000);
    });

    //��������ʾ���ƿ�����(���Ƶ���opacity)
    //$("#wrap").mouseenter(function () {
        //�����룬arrow͸���ȱ�Ϊ1;
        //$("#arrow").fadeTo(100,1);
    //}).mouseleave(function () {
        //����ƿ���arrow͸���ȱ�Ϊ0;
        //$("#arrow").fadeTo(100,0);
    //})

    $("#wrap").hover(function () {
        //�����룬arrow͸���ȱ�Ϊ1;
        $("#arrow").fadeTo(100,1);
    },function () {
        //����ƿ���arrow͸���ȱ�Ϊ0;
        $("#arrow").fadeTo(100,0);
    })


    //����2: ����Ҳఴť��ɾ�����������һ������ӵ��������ǰ��;
    $(".next").click(function () {
        if(bool == false){
            return;
        }
        //�����true�����ߵ��⣬�ߵ����ֱ�Ӹ�Ϊfalse���´ξͲ��ܵ����
        bool = false;

        //ɾ�����������һ������ӵ��������ǰ��;
        var last = arrOfJson.pop();
        arrOfJson.unshift(last);

        //�����������Ԫ���Ų����ڴ�ִ��һ��ҳ���ϵ�li;
        $("#slide li").each(function (index,ele) {
            //bug: �㼶û�е�һʱ�䵽��;
            $(ele).css("z-index",arrOfJson[index]["z-index"])
            $(ele).animate(arrOfJson[index],1000, function () {
                //ִ�лص�������ʱ�򣬾���ȫ������ִ�е�Ŀ��λ�õ�ʱ��
                bool = true;
            });
        });
    });

    //����3: �����ఴť��ɾ�������е�һ������ӵ�����������;
    $(".prev").click(function () {
        //ɾ�������е�һ������ӵ�����������;
        var first = arrOfJson.shift();
        arrOfJson.push(first);
        //�����������Ԫ���Ų����ڴ�ִ��һ��ҳ���ϵ�li;
        $("#slide li").each(function (index,ele) {
            //bug: �㼶û�е�һʱ�䵽��;
            $(ele).css("z-index",arrOfJson[index]["z-index"])
            $(ele).animate(arrOfJson[index],1000);
        });
    });
});








