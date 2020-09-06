// Globle Data
const Seconds = document.getElementById('Second');
const Days = document.getElementById('Days');
const Hours = document.getElementById('Hours');
const Minuts = document.getElementById('Minutes');

function ItsNewYear()
{
    const Txt = document.getElementById('NewYear');
    Txt.innerHTML = "Hurrah! Its New Year. Happy New Year."
    const IMG = document.getElementById('BK');
    IMG.style.backgroundImage = "url('NewYear.jpg')";
    IMG.style.color = "White";
}
function NewYearCounter(NewYear)
{
    const Year = 2021;
    const NewYearDate = new Date(NewYear);
    const CurrDate = new Date();
    if(CurrDate.getDate() == NewYearDate.getDate())
    {
        ItsNewYear();
        clearInterval(Timer);
    }
    else
    {
        const DT = (NewYearDate - CurrDate) / 1000;

        const seconds = Math.floor((DT) % 60);
        const days = Math.floor(DT / (24*3600));
        const hours = Math.floor((DT / 3600) % 24);
        const minuts = Math.floor(DT / 60) % 60;

        Seconds.innerHTML = seconds;
        Days.innerHTML = days;
        Minuts.innerHTML = minuts;
        Hours.innerHTML = hours;
    }
}
function Timer()
{
    const NewYear = '1 jan 2021';
    NewYearCounter(NewYear);
    setInterval(Timer, 1000);
}
Timer();
