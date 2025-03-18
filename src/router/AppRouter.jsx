import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import NossaEquipe  from '../pages/nossaEquipe/NossaEquipe';
import Turmas  from '../pages/turmas/Turmas';
import Contato  from '../pages/contato/Contato';
function AppRouter(){
    return(

        <Router>
            <Layout>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/nossaEquipe" element={<NossaEquipe/>}/>
                    <Route path="/turmas" element={<Turmas/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                </Routes>
            </Layout>

        </Router>
    );
}
export default AppRouter;