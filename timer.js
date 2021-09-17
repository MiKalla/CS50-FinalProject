$(function()
{
    var sec = 0;
    var min = 0;
    var hour = 0;

    var timer;

    // スタート
    $('#start').click(function()
    {
        // 00:00:00から開始
        sec = 0;
        min = 0;
        hour = 0;
        $('#clock').html('00:00:00');
        timer = setInterval(countup, 1000);

        //イラスト切り替え&台詞隠し
        $('#timer-holder').attr('src','images/timer-holder1.png').fadeIn('srow');
        $('#talk').html('');

        //クリック時、台詞再表示&イラスト切り替え
        $('#timer-holder').click(function()
        {
            $('#timer-holder').attr('src','images/timer-holder2.png').fadeIn('srow');
            $('#timer-holder').click(function()
            {
                const number = Math.ceil(Math.random()*2);
                if(number == 1)
                {
                    $('#talk').html('どうしたの？');
                }
                if(number == 2)
                {
                    $('#talk').html('疲れちゃったの？');
                }
                //2秒後、イラスト切り替え&台詞隠し
                setTimeout(function()
                {
                    $('#timer-holder').attr('src','images/timer-holder1.png').fadeIn('srow');
                    $('#talk').html('');
                }, 2000);

            });

        });

        $(this).prop('disabled', true);
        $('#stop,#reset').prop('disabled', false);
    });

    // ストップ
    $('#stop').click(function()
    {
        // 一時停止
        clearInterval(timer);

        $(this).prop('disabled', true);
        $('#restart').prop('disabled', false);
    });

    // リスタート
    $('#restart').click(function()
    {
        // 一時停止から再開
        timer = setInterval(countup, 1000);

        $(this).prop('disabled', true);
        $('#stop').prop('disabled', false);
    });

    // リセット
     $('#reset').click(function()
     {
        // 初期状態
        sec = 0;
        min = 0;
        hour = 0;
        $('#clock').html('00:00:00');
        clearInterval(timer);

        $('#timer-holder').attr('src','images/timer-holder3.png').fadeIn('srow');
        $('#talk').html('お疲れ様、頑張ったね！');
        $('#talk').show();

        $('#stop,#restart,#reset').prop('disabled', true);
        $('#start').prop('disabled', false);
    });

 //カウントアップ
    function countup()
    {
        sec += 1;

        if (sec > 59)
        {
            sec = 0;
            min += 1;
        }

        if (min > 59)
        {
            min = 0;
            hour += 1;
        }

    // 0埋め
    sec_number = ('0' + sec).slice(-2);
    min_number = ('0' + min).slice(-2);
    hour_number = ('0' + hour).slice(-2);

    $('#clock').html(hour_number + ':' +  min_number + ':' + sec_number);
    }
});
