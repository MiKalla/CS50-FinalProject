$(function()
{
    $('#timer-holder').click(function()
    {
        const talk = Math.ceil(Math.random()*3);
        if(talk == 1)
        {
            $('#timer-holder').attr('src','images/timer-holder3.png').fadeIn('srow');
        }
        if(talk == 2)
        {
            $('#timer-holder').attr('src','images/timer-holder2.png').fadeIn('srow');
        }

        const number = Math.ceil(Math.random()*3);
        if(number == 1)
        {
            $('#talk').html('どうしたの？');
        }
        if(number == 2)
        {
            $('#talk').html('今日もお勉強するの？');
        }
        if(number == 3)
        {
            $('#talk').html('勉強するなら、「勉強はじめる」ボタンを押してね！');
        }

    });
});
