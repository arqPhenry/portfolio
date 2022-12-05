import React from 'react'
import { Carrousel } from './Carrousel'
import { HiArrowSmLeft } from 'react-icons/hi'

// eslint-disable-next-line react/prop-types
const Modal = ({ id, images }) => {
  return (
        <div className="modal bg-henry fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header pb-0">
                        <button type="button" data-bs-dismiss="modal" aria-label="Close"><HiArrowSmLeft size='28px'/></button>
                    </div>
                    <div className="modal-body">
                        <Carrousel images={images} id={id}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export { Modal }
