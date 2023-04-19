import {l10n} from "./localization";

export const dateConverter = (date, dop=true,lang='ru') => {


    let dateWeek = new Date(date);
    let week = [l10n['weekLoc'][lang],
        l10n['weekLocFull'][lang]]

    let day = dateWeek.getDate()<10? '0'+dateWeek.getDate():dateWeek.getDate()
    let month = l10n['monthLoc'][lang][dateWeek.getMonth()]
    let year = dateWeek.getFullYear()
    let weekday = dateWeek.getDay()
    let hour =dateWeek.getHours()<10? '0'+dateWeek.getHours():dateWeek.getHours()
    let minute =dateWeek.getMinutes()<10? '0'+dateWeek.getMinutes():dateWeek.getMinutes()

    return <>
        <div>{day} {month}, {week[+dop][weekday]}</div>
        {dop? <div>{hour}:{minute}</div>: <></>}
        </>
}