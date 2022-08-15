import {TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";
import {RootState} from "../store/reducers";

export const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector

