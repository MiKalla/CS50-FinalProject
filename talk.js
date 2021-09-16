$(function()
{
    $('#timer-holder').click(function()
    {
        const number = Math.ceil(Math.random()*2);
        if(number == 1)
        {
            $('#talk').html('どうしたの？');
        }
        if(number == 2)
        {
            $('#talk').html('今日もお勉強するの？');
        }

    });
});
