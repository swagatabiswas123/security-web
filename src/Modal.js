import React from 'react'

const Modal = () => {
  return (
    <div className='Modal'>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name</label>
            <input type="text" class="form-control" id="recipient-name"/>

            <label for="recipient-name" class="col-form-label">Mail</label>
            <input type="text" class="form-control" id="recipient-name"/>

            <label for="recipient-name" class="col-form-label">Phone</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer justify-content-between mt-5">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"> &times;</button>
        <button type="button" class="btn btn-success" onclick="btnSent()" data-bs-dismiss="modal">Send Message</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Modal