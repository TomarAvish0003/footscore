import { apiOptions, matchesType } from "@/types";
import { get } from "http";
import next from "next";

const option:apiOptions = {
    next:{revalidate:30},
    headers:{
        "X-Auth-Token":process.env.API_TOKEN,
        "Content-Type":"application/json"
    }
}

export const getMatchesFootball = async () => {
   const matchData = await fetch("https://api.football-data.org/v4/matches", option)
   return matchData.json()
}

const todayDate = new Date()
const getDateMonth = new Date(todayDate.getTime())
getDateMonth.setDate(todayDate.getDate() - 1)
const year = getDateMonth.getFullYear()
const month = String(getDateMonth.getMonth() + 1).padStart(2, "0")
const date = String(getDateMonth.getDate() + 1).padStart(2, "0")

const yesterday = [year, month, date].join("-")

export const getMatchesFootballFinished = async () => {
    const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`)
    return matchData.json()
}

export const getNewsInfo = async () => {
    const newsData = await fetch(`https://newsapi.org/v2/everything?q=football&from=2021-09-01&to=2021-09-30&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}&q=soccer&pageSize=5`,{next:{revalidate:30}})
    return newsData.json()
}

export const filterLeague = async (filterData:string) => {
    const getLeague = await getMatchesFootball() // Make sure getMatchesFootball() is defined somewhere in your code
    const filterLeague:matchesType[] = getLeague.matches // Make sure matchesType is defined somewhere in your code
    const getData = filterLeague.filter((item)=>item.competition.name === filterData)
    return getData
}