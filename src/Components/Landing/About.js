import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Register
      </Button>
      <Modal
        title="CEO"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>i am harish sen from yashvitech IT Solution</p>
        
      </Modal>
    </div>
  );
};
export default App;