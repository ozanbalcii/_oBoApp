import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import {PrivateRoutes} from './PrivateRoutes';
import {ErrorPage} from '../modules/errors/ErrorPage';
import {App} from '../../App';


export default function AppRoutes() {
  const { PUBLIC_URL } = "/";
  return (
    <BrowserRouter basename={PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<App/>}>
            <Route path="/*" element={<PrivateRoutes/>}/>
            <Route path="/error" element={<ErrorPage/>}/>
            <Route path="*" element={<Navigate to="/error"/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
