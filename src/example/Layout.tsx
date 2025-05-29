import { Outlet } from 'react-router-dom';
import Canvas from './Canvas';

const Layout = () => {
  return (
    <>
      <div className='layout'>
        {/* Commented-out code remains unchanged */}
      </div>
      <Canvas />
      <Outlet />
    </>
  );
};

export default Layout;