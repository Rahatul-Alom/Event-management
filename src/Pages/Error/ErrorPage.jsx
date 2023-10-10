import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center my-5 h-screen '>
            <h1 className="text-6xl font-bold my-7 text-black" >Ooppss!!!</h1>
            <h2 className="text-xl font-bold my-7">Page Not Found</h2>
            <Link to={'/'}><button className="btn bg-amber-900 text-white font-semibold">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;