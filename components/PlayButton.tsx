import { useAppSelector,useAppDispatch } from "../app-state/app-hooks";
import {start} from "../app-state/app-state"
import GameButton from "./GameButton";

function PlayButton() {
    const {game}=useAppSelector(selectGame=>selectGame)
    const dispatch=useAppDispatch()

    return ( 
        <>
        {!game.playing && <GameButton onClick={()=>dispatch(start())}>Start new round</GameButton>}
        </>
     );
}

export default PlayButton;