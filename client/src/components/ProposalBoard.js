import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function ProposalBoard() {
  useEffect(() => {

  })

  return (
    <section className="container d-flex justify-content-center">
      <div className="col-8">
        <div className="card m-5 bg-light">
          <div className="card-body">
            <h5 className="card-title">Top Course Proposals</h5>
            <ul className="list-group">
              <CourseModal />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <li variant="primary" className="list-group-item btn" onClick={handleShow}>
        Cryptoeconomics Fundamentals for Developers
      </li>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
