import Header from './Header/index';
import Sidebar from './sildebar/index';
import Foter from './Foter/index';
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