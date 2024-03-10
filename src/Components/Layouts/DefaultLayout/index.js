import Header from '../components/Header/index';
import Sidebar from './sildebar/index';
import Foter from '../components/Foter/index';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />

                <div className="content">{children}</div>
            </div>
            <Foter />
        </div>
    );
}

export default DefaultLayout;