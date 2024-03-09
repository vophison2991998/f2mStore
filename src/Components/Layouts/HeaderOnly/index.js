import Header from '../components/Header';
import Foter from '../components/Foter';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>

            <Foter/>
        </div>
    );
}

export default DefaultLayout;