import PlayButton from '../components/PlayButton'
import { SelectBar } from '../components/SelectBar'
import { useAppSelector,useAppDispatch } from "../app-state/app-hooks";
import { stop } from '../app-state/app-state';
import GameButton from './GameButton';
import DisplayText from './DisplayText';

function GameWrapper() {

    const {game}=useAppSelector(selectGame=>selectGame)
    const dispatch=useAppDispatch()

    return ( 
        <div className='flex flex-col items-center space-y-6'>
<SelectBar/>
 <PlayButton/>
<DisplayText text={game.score}>Score</DisplayText>
<DisplayText text={String(game.round)}>Round</DisplayText>
<GameButton onClick={()=>dispatch(stop())}>Stop</GameButton>
        </div>
     );
}

export default GameWrapper;