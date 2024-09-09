import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='nav'>
      <div className='block'></div>
      <div className='logo'>
        <p style={{ margin: '0%', marginTop: '10px' }}>
          <Link to='/' style={{ textDecorationLine: 'none', color: 'rgb(30, 124, 255)' }}>Now Weather</Link>
        </p>
      </div>
      <div className='help'>
        <button onClick={openModal} style={{ background: 'none', border: 'none', color: 'rgb(30, 124, 255)', cursor: 'pointer' }}>
          <h2 style={{margin:'0%', marginTop:'13px'}}>Help</h2>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 style={{marginTop:'0%', }}>도움말</h2>
        <p>1.이 웹 페이지는 자신의 현재 위치의 날씨를 알려줍니다.</p>
        <p>2. 온도에 맞는 주의 사항을 날씨 정보 밑 박스에서 알려줍니다.</p>
      </Modal>
    </div>
  );
}

export default Navbar;
