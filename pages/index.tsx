import { NextPage } from "next";
import { useEffect } from "react";
import { useAppSelector,useAppDispatch } from "../app-state/app-hooks";
import {initialize} from "../app-state/app-state"
import GameButton from "../components/GameButton";
import GameWrapper from "../components/GameWrapper";
import ScoreTab from "../components/ScoreTab";
import SelectButton from "../components/SelectButton";
import Timer from "../components/Timer";
import { Actions,actions } from "../components/SelectBar";

const Home: NextPage = () => {
 
  const {game}=useAppSelector(selectGame=>selectGame)
  const dispatch=useAppDispatch()

  return (
    <section className="m-auto p-2 w-full items-center h-fit inset-0 absolute flex flex-col space-y-5">
 <div className="flex space-x-7 justify-center items-center">
  <h1 className="text-white text-3xl font-bold grid place-items-center">
    {game.playing?<Timer/>:''}
  </h1>
   <SelectButton>{game.action1 && actions[game.action1 as keyof Actions]}</SelectButton>
  <SelectButton>{game.action2 && actions[game.action2 as keyof Actions]}</SelectButton>
  </div>
 <section className='p-6 bg-slate-500 w-full max-w-[30rem] h-fit h-[25rem] rounded-xl grid place-items-center'>
 {game.round!=0 && (game.start?<GameWrapper/>:<ScoreTab/>)}
 {!game.start && game.round==0 && <GameButton onClick={()=>dispatch(initialize())}>Start a game</GameButton>}
 </section>
 </section>
  )
}

export default Home
